import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { FeaturedWork } from "@/components/home/featured-work";
import { Metrics } from "@/components/home/metrics";
import { HowWeWork } from "@/components/home/how-we-work";
import { FeaturesGrid } from "@/components/home/features-grid";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ServicesOverview } from "@/components/home/services-overview";
import { PricingPreview } from "@/components/home/pricing-preview";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("home");

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Metrics />
      <HowWeWork />
      <FeaturesGrid />
      <WhyChooseUs />
      <ServicesOverview />
      <PricingPreview />
      <Testimonials />
      <FAQ />
    </>
  );
}
