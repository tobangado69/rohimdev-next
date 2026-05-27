import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";
import { getAboutContent } from "@/lib/content";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("about");

export default function AboutPage() {
  return <AboutContent content={getAboutContent()} />;
}
