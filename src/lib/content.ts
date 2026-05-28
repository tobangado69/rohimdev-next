import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { sortProjects } from "@/lib/project-sort";
import type {
  AboutContent,
  ContactContent,
  CtaLink,
  HomeContent,
  ProjectContent,
  ProjectType,
  ProjectConversion,
  ProjectDetailContent,
  ProjectFeature,
  ProjectGalleryItem,
  ProjectHero,
  ProjectNarrativeSection,
  ProjectPricing,
  ProjectSocialProof,
  ProjectTestimonial,
  ServicesContent,
  SeoContent,
  SiteContent,
} from "@/types/content";

export { parseProjectDateKey, sortProjects, type ProjectDateSort } from "@/lib/project-sort";

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

function normalizeProjectType(value: unknown): ProjectType {
  return value === "production" ? "production" : "study";
}

const DEFAULT_PROJECT_ORDER = 100;

function normalizeProjectOrder(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) {
    return Math.round(value);
  }
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return Math.round(parsed);
  }
  return DEFAULT_PROJECT_ORDER;
}

function normalizeProjectImages(
  imagesField: unknown,
  legacyImage: unknown,
): string[] {
  const fromList = optionalArray<string>(imagesField)
    .map((url) => (typeof url === "string" ? url.trim() : ""))
    .filter((url) => url.length > 0);

  if (fromList.length > 0) {
    return [...new Set(fromList)];
  }

  const legacy =
    typeof legacyImage === "string"
      ? legacyImage.trim()
      : optionalString(legacyImage) ?? "";
  return legacy ? [legacy] : [];
}

function mergeProjectGallery(
  galleryImageUrls: string[],
  manualGallery: ProjectGalleryItem[],
  title: string,
  coverImage: string,
): ProjectGalleryItem[] | undefined {
  const seen = new Set<string>(coverImage ? [coverImage] : []);
  const merged: ProjectGalleryItem[] = [];

  galleryImageUrls.forEach((url, index) => {
    if (!url || seen.has(url)) return;
    seen.add(url);
    merged.push({
      image: url,
      alt: `${title} gallery image ${index + 1}`,
    });
  });

  for (const item of manualGallery) {
    if (!item.image || seen.has(item.image)) continue;
    seen.add(item.image);
    merged.push(item);
  }

  return merged.length > 0 ? merged : undefined;
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
    galleryImageUrls: string[];
    technologies: string[];
    github?: string;
    live?: string;
  },
): ProjectDetailContent {
  const data = optionalObject<Record<string, unknown>>(detail);
  const manualGallery = optionalArray<ProjectGalleryItem>(data?.gallery);

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
    gallery: mergeProjectGallery(
      base.galleryImageUrls,
      manualGallery,
      base.title,
      base.image,
    ),
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
  const images = normalizeProjectImages(data.images, data.image);
  const image = images[0] ?? "";
  const galleryImageUrls = images.slice(1);
  const technologies = optionalArray<string>(data.technologies);
  const github = optionalString(data.github);
  const live = optionalString(data.live);
  const projectType = normalizeProjectType(data.projectType);
  const defaultSeoTitle =
    projectType === "production" ? `${title} Project` : `${title} Case Study`;

  const seo =
    optionalObject<SeoContent>(data.seo) ?? {
      title: defaultSeoTitle,
      description: summary || headline,
      keywords: technologies,
      ogImage: image,
    };

  const seoWithCover = {
    ...seo,
    ogImage: seo.ogImage || image,
  };

  const detail = normalizeProjectDetail(data.detail, {
    title,
    headline,
    summary,
    image,
    galleryImageUrls,
    technologies,
    github,
    live,
  });

  return {
    slug,
    projectType,
    title,
    headline,
    summary,
    image,
    images,
    date: String(data.date ?? ""),
    status: String(data.status ?? ""),
    technologies,
    github,
    live,
    featured: Boolean(data.featured),
    order: normalizeProjectOrder(data.order),
    seo: seoWithCover,
    detail,
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

  const projects = fs
    .readdirSync(dir)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(projectFromMdx);

  return sortProjects(projects, "newest");
}

export function getProjectBySlug(slug: string): ProjectContent | undefined {
  return getProjects().find((project) => project.slug === slug);
}
