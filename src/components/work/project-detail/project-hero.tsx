import Image from "next/image";
import { GlassButton } from "@/components/ui/glass-button";
import type { ProjectContent } from "@/types/content";

type ProjectHeroProps = {
  project: ProjectContent;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const { hero } = project.detail;
  // Cover `image` is the first CMS project image; detail hero follows it unless only primaryImage is set.
  const heroImage = project.image || hero.primaryImage || "";

  return (
    <header className="space-y-10 animate-clip-in">
      <div className="space-y-4 max-w-4xl">
        {hero.eyebrow && (
          <p className="text-sm uppercase tracking-wide text-neutral-400">
            {hero.eyebrow}
          </p>
        )}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-900 leading-[0.95]">
          {hero.title || project.title}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl">
          {hero.subtitle || project.headline}
        </p>
      </div>

      {heroImage && (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-[#1a1c18] shadow-sm">
          <Image
            src={heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        {hero.primaryCta && (
          <GlassButton
            href={hero.primaryCta.href}
            variant={
              hero.primaryCta.variant === "red"
                ? "red"
                : hero.primaryCta.variant === "green"
                  ? "green"
                  : "default"
            }
            external={hero.primaryCta.external}
          >
            {hero.primaryCta.label}
          </GlassButton>
        )}
        {hero.secondaryCta && (
          <GlassButton
            href={hero.secondaryCta.href}
            external={hero.secondaryCta.external}
          >
            {hero.secondaryCta.label}
          </GlassButton>
        )}
      </div>
    </header>
  );
}
