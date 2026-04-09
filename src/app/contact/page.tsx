import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { AbstractTeamVisual } from "@/components/contact/abstract-team-visual";
import { FounderSection } from "@/components/contact/founder-section";
import { GlassButton } from "@/components/ui/glass-button";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center pt-10">
        <div
          className="lg:col-span-5 space-y-8 animate-clip-in"
          style={{ animationDelay: "0.4s" }}
        >
          <h1 className="text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight">
            Let&apos;s build something together
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Have a project in mind? Describe what you&apos;re building and I&apos;ll
            get back with ideas and next steps.
          </p>
          <GlassButton href="#form">Describe your project</GlassButton>
        </div>
        <div
          className="lg:col-span-7 flex items-center justify-center overflow-hidden animate-clip-in"
          style={{ animationDelay: "0.5s" }}
        >
          <AbstractTeamVisual />
        </div>
      </section>

      <section
        id="form"
        className="animate-fade-up w-full max-w-2xl"
        style={{ animationDelay: "0.55s" }}
      >
        <ContactForm />
      </section>

      <FounderSection />
    </>
  );
}
