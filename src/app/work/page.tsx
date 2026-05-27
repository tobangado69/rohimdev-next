import type { Metadata } from "next";
import { WorkContent } from "@/components/work/work-content";
import { getProjects } from "@/lib/content";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("work");

export default function WorkPage() {
  return <WorkContent projects={getProjects()} />;
}
