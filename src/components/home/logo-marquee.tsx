"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";

const LOGOS = [
  "Aria Centra",
  "Aria Barito",
  "Hotel Banjarmasin International",
  "Hermes Palace",
  "Gunawangsa",
  "Grand Inna",
  "ION",
  "Javapixa Creative Studio",
  "CDS.ID",
];

export function LogoMarquee() {
  return (
    <div className="overflow-hidden w-full relative">
      <div className="z-10 w-32 h-full absolute top-0 left-0 bg-[linear-gradient(to_right,var(--color-neutral-100),transparent)]" />
      <div className="z-10 w-32 h-full absolute top-0 right-0 bg-[linear-gradient(to_left,var(--color-neutral-100),transparent)]" />
      <div className="flex w-max animate-marquee pr-4 pl-4 items-center gap-x-2 lg:gap-2">
        {[...LOGOS, ...LOGOS].map((name, i) => (
          <SpotlightCard
            key={`${name}-${i}`}
            className="glass-panel flex flex-col hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-48 h-24 rounded-2xl grayscale items-center justify-center shrink-0 px-4 border border-neutral-200 hover:border-neutral-300"
          >
            <div className="w-1/5 h-px bg-neutral-200 mb-3 shrink-0" />
            <span className="text-sm font-medium text-neutral-900 text-center leading-tight tracking-wide">
              {name}
            </span>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
