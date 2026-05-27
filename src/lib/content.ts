import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type {
  AboutContent,
  ContactContent,
  CtaLink,
  HomeContent,
  ProjectContent,
  ProjectConversion,
  ProjectDetailContent,
  ProjectFeature,
  ProjectHero,
  ProjectNarrativeSection,
  ProjectPricing,
  ProjectSocialProof,
  ProjectTestimonial,
  ServicesContent,
  SeoContent,
  SiteContent,
} from "@/types/content";

const contentRoot = path.join(process.cwd(), "content");

function readJson<T>(relativePath: string): T {
  const filePath = path.join(contentRoot, relativePath);
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as T;
}

function optionalArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function optionalObject<T extends object>(value: unknown): T | undefined {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as T)
    : undefined;
}

function optionalString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function narrativeSection(
  value: unknown,
  fallbackHeading: string,
  fallbackSummary: string,
): ProjectNarrativeSection {
  const section = optionalObject<ProjectNarrativeSection>(value);
  return {
    heading: section?.heading ?? fallbackHeading,
    summary: section?.summary ?? fallbackSummary,
    bullets: optionalArray<string>(section?.bullets),
  };
}

function normalizeHero(
  hero: unknown,
  title: string,
  headline: string,
  image: string,
): ProjectHero {
  const data = optionalObject<ProjectHero>(hero);
  return {
    eyebrow: optionalString(data?.eyebrow),
    title: optionalString(data?.title) ?? title,
    subtitle: optionalString(data?.subtitle) ?? headline,
    primaryImage: optionalString(data?.primaryImage) ?? image,
    supportingImages: optionalArray<string>(data?.supportingImages),
    primaryCta: optionalObject(data?.primaryCta),
    secondaryCta: optionalObject(data?.secondaryCta),
  };
}

function normalizeFeatures(value: unknown, technologies: string[]): ProjectFeature[] {
  const features = optionalArray<ProjectFeature>(value);
  if (features.length > 0) {
    return features.map((feature) => ({
      title: feature.title ?? "Feature",
      description: feature.description ?? "",
      impact: optionalString(feature.impact),
      icon: optionalString(feature.icon),
    }));
  }

  return technologies.slice(0, 4).map((tech) => ({
    title: tech,
    description: `Built with ${tech} as a core part of the stack.`,
  }));
}

function normalizeConversion(
  value: unknown,
  title: string,
  github?: string,
  live?: string,
): ProjectConversion {
  const conversion = optionalObject<ProjectConversion>(value);
  const ctas = optionalArray<CtaLink>(conversion?.ctas);

  if (ctas.length > 0) {
    return {
      heading: conversion?.heading ?? "Explore this project",
      description:
        conversion?.description ??
        `See the repository and implementation details for ${title}.`,
      ctas,
    };
  }

  const defaults = [];
  if (github) {
    defaults.push({
      label: "View on GitHub",
      href: github,
      variant: "primary" as const,
      external: true,
    });
  }
  if (live) {
    defaults.push({
      label: "View live site",
      href: live,
      variant: "secondary" as const,
      external: true,
    });
  }
  defaults.push({
    label: "Start a project",
    href: "/contact",
    variant: "secondary" as const,
  });

  return {
    heading: conversion?.heading ?? "Interested in similar work?",
    description:
      conversion?.description ??
      `Let's discuss how a project like ${title} could support your product goals.`,
    ctas: defaults,
  };
}

function normalizeProjectDetail(
  detail: unknown,
  base: {
    title: string;
    headline: string;
    summary: string;
    image: string;
    technologies: string[];
    github?: string;
    live?: string;
  },
): ProjectDetailContent {
  const data = optionalObject<Record<string, unknown>>(detail);

  return {
    hero: normalizeHero(data?.hero, base.title, base.headline, base.image),
    metadata: optionalObject(data?.metadata),
    designDirection: optionalObject<ProjectNarrativeSection>(data?.designDirection),
    overview: narrativeSection(
      data?.overview,
      "Project Overview",
      base.summary || base.headline,
    ),
    challenge: narrativeSection(
      data?.challenge,
      "The Challenge",
      "This project needed a clear product direction and reliable technical execution.",
    ),
    solution: narrativeSection(
      data?.solution,
      "The Solution",
      `A focused implementation using ${base.technologies.slice(0, 3).join(", ") || "modern tools"}.`,
    ),
    gallery: optionalArray(data?.gallery),
    techStack: optionalArray(data?.techStack),
    features: normalizeFeatures(data?.features, base.technologies),
    process: optionalArray(data?.process),
    deliverables: optionalArray(data?.deliverables),
    metrics: optionalArray(data?.metrics),
    testimonial: optionalObject<ProjectTestimonial>(data?.testimonial),
    conversion: normalizeConversion(data?.conversion, base.title, base.github, base.live),
    pricing: optionalObject<ProjectPricing>(data?.pricing),
    socialProof: optionalObject<ProjectSocialProof>(data?.socialProof),
    responsiveUx: optionalObject(data?.responsiveUx),
    seoPerformance: optionalObject(data?.seoPerformance),
    infrastructure: optionalObject(data?.infrastructure),
  };
}

function projectFromMdx(fileName: string): ProjectContent {
  const raw = fs.readFileSync(path.join(contentRoot, "projects", fileName), "utf8");
  const { data, content } = matter(raw);

  const slug = String(data.slug ?? fileName.replace(/\.mdx$/, ""));
  const title = String(data.title ?? "Untitled Project");
  const headline = String(data.headline ?? "");
  const summary = String(data.summary ?? "");
  const image = String(data.image ?? "");
  const technologies = optionalArray<string>(data.technologies);
  const github = optionalString(data.github);
  const live = optionalString(data.live);

  const seo =
    optionalObject<SeoContent>(data.seo) ?? {
      title: `${title} Case Study`,
      description: summary || headline,
      keywords: technologies,
      ogImage: image,
    };

  return {
    slug,
    title,
    headline,
    summary,
    image,
    date: String(data.date ?? ""),
    status: String(data.status ?? ""),
    technologies,
    github,
    live,
    featured: Boolean(data.featured),
    seo,
    detail: normalizeProjectDetail(data.detail, {
      title,
      headline,
      summary,
      image,
      technologies,
      github,
      live,
    }),
    body: content.trim() || undefined,
  };
}

export function getSiteContent(): SiteContent {
  return readJson<SiteContent>("pages/site.json");
}

export function getHomeContent(): HomeContent {
  return readJson<HomeContent>("pages/home.json");
}

export function getAboutContent(): AboutContent {
  return readJson<AboutContent>("pages/about.json");
}

export function getServicesContent(): ServicesContent {
  return readJson<ServicesContent>("pages/services.json");
}

export function getContactContent(): ContactContent {
  return readJson<ContactContent>("pages/contact.json");
}

export function getProjects(): ProjectContent[] {
  const dir = path.join(contentRoot, "projects");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(projectFromMdx)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function getProjectBySlug(slug: string): ProjectContent | undefined {
  return getProjects().find((project) => project.slug === slug);
}
