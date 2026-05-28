"use client";

import {
  AdaptiveProjectImage,
  type ProjectImageFitState,
} from "@/components/ui/adaptive-project-image";
import { GlassButton } from "@/components/ui/glass-button";
import type { ImageOrientation } from "@/lib/project-image-fit";
import { useState } from "react";
import type { ProjectContent } from "@/types/content";

type ProjectHeroProps = {
  project: ProjectContent;
};

function HeroCopy({
  project,
  hero,
}: {
  project: ProjectContent;
  hero: ProjectContent["detail"]["hero"];
}) {
  return (
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
  );
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const { hero } = project.detail;
  const heroImage = project.image || hero.primaryImage || "";
  const [orientation, setOrientation] =
    useState<ImageOrientation>("landscape");

  const handleFit = (fit: ProjectImageFitState) => {
    setOrientation(fit.orientation);
  };

  const heroImageEl = heroImage ? (
    <AdaptiveProjectImage
      src={heroImage}
      alt={project.title}
      variant="hero"
      priority
      onFit={handleFit}
      align={orientation === "square" ? "center" : "start"}
      frameClassName="border border-neutral-200 shadow-sm"
    />
  ) : null;

  return (
    <header className="space-y-10 animate-clip-in">
      {orientation === "portrait" ? (
        <div className="grid max-w-5xl gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <HeroCopy project={project} hero={hero} />
          {heroImageEl && (
            <div className="flex justify-center md:justify-end">
              {heroImageEl}
            </div>
          )}
        </div>
      ) : orientation === "square" ? (
        <div className="space-y-10">
          <HeroCopy project={project} hero={hero} />
          {heroImageEl && (
            <div className="mx-auto w-full max-w-3xl">{heroImageEl}</div>
          )}
        </div>
      ) : (
        <div className="space-y-10">
          <HeroCopy project={project} hero={hero} />
          {heroImageEl}
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
