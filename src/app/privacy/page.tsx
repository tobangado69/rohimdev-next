import type { Metadata } from "next";
import { LegalContent } from "@/components/legal";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("privacy");

export default function PrivacyPage() {
  return <LegalContent type="privacy" />;
}
