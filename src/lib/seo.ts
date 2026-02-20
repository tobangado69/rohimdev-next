import type { Metadata } from "next";
import { site } from "../../data";

/** Flatten all keywords from site.json for meta keywords */
function getKeywords(): string[] {
  const kw = site.seo?.keywords;
  if (!kw) return [];
  const flat = [
    ...(kw.primary || []),
    ...(kw.secondary || []),
    ...(kw.location || []),
    ...(kw.technologies || []),
  ];
  return [...new Set(flat)];
}

/** Build default metadata from site.seo */
export function getDefaultMetadata(): Metadata {
  const seo = site.seo;
  const author = seo?.author;
  return {
    metadataBase: new URL(seo?.siteUrl || "https://rohimdev.com"),
    title: {
      default: seo?.siteName || `${author?.name} - ${author?.title}`,
      template: `%s | ${site.name}`,
    },
    description: seo?.siteDescription || site.description,
    keywords: getKeywords(),
    authors: author ? [{ name: author.name, url: seo?.siteUrl }] : undefined,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: seo?.siteUrl,
      siteName: seo?.siteName || site.name,
      title: seo?.siteName,
      description: seo?.siteDescription,
      images: seo?.ogImage
        ? [{ url: seo.ogImage, width: 1200, height: 630, alt: author?.name || "Abdul Rohim" }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.siteName,
      description: seo?.siteDescription,
      images: seo?.ogImage ? [seo.ogImage] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

type PageKey = "home" | "about" | "work" | "services" | "contact" | "projects";

/** Build page metadata from site.pages */
export function getPageMetadata(pageKey: PageKey): Metadata {
  const page = site.seo?.pages?.[pageKey];
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
