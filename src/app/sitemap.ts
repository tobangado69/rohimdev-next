import type { MetadataRoute } from "next";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.siteUrl;
  return NAV_LINKS.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: (link.href === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));
}
