import type { Metadata } from "next";
import { LegalContent } from "@/components/legal";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("terms");

export default function TermsPage() {
  return <LegalContent type="terms" />;
}
