import type { Metadata } from "next";
import { site as legacySite } from "../../data";
import {
  getAboutContent,
  getContactContent,
  getHomeContent,
  getServicesContent,
  getSiteContent,
} from "@/lib/content";
import type { SeoContent } from "@/types/content";

function metadataFromSeo(seo: SeoContent, siteName: string): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: seo.ogImage
        ? [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }]
        : undefined,
    },
    twitter: {
      card: seo.ogImage ? "summary_large_image" : "summary",
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
  };
}

/** Build default metadata from CMS site content */
export function getDefaultMetadata(): Metadata {
  const site = getSiteContent();
  const seo = site.seo;
  const author = seo.author;

  return {
    metadataBase: new URL(seo.siteUrl || "https://rohimdev.com"),
    title: {
      default: seo.title,
      template: `%s | ${site.name}`,
    },
    description: seo.description || site.description,
    keywords: seo.keywords,
    authors: author ? [{ name: author.name, url: seo.siteUrl }] : undefined,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: seo.siteUrl,
      siteName: site.name,
      title: seo.title,
      description: seo.description,
      images: seo.ogImage
        ? [{ url: seo.ogImage, width: 1200, height: 630, alt: author.name }]
        : undefined,
    },
    twitter: {
      card: seo.ogImage ? "summary_large_image" : "summary",
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

type PageKey =
  | "home"
  | "about"
  | "work"
  | "services"
  | "contact"
  | "projects"
  | "privacy"
  | "terms";

/** Build page metadata from CMS or legacy site config */
export function getPageMetadata(pageKey: PageKey): Metadata {
  if (pageKey === "home") {
    return metadataFromSeo(getHomeContent().seo, getSiteContent().name);
  }
  if (pageKey === "about") {
    return metadataFromSeo(getAboutContent().seo, getSiteContent().name);
  }
  if (pageKey === "services") {
    return metadataFromSeo(getServicesContent().seo, getSiteContent().name);
  }
  if (pageKey === "contact") {
    return metadataFromSeo(getContactContent().seo, getSiteContent().name);
  }

  const page = legacySite.seo?.pages?.[pageKey];
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
    },
    twitter: {
      title: page.title,
      description: page.description,
    },
  };
}
