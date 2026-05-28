"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeader } from "@/components/ui/section-header";
import { AdaptiveProjectImage } from "@/components/ui/adaptive-project-image";
import type { ProjectContent } from "@/types/content";

type FeaturedWorkProps = {
  projects: ProjectContent[];
};

export function FeaturedWork({ projects }: FeaturedWorkProps) {
  const cards = projects;
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotate = useCallback(
    (dir: number) => {
      if (cards.length === 0) return;
      setCurrentIndex((prev) => (prev + dir + cards.length) % cards.length);
    },
    [cards.length],
  );

  useEffect(() => {
    if (cards.length <= 1) return;
    const id = setInterval(() => rotate(1), 5000);
    return () => clearInterval(id);
  }, [cards.length, rotate]);

  if (cards.length === 0) return null;

  return (
    <section
      className="animate-fade-up w-full pt-12 pb-12 relative"
      style={{ animationDelay: "0.8s" }}
    >
      <div className="flex mb-12 pr-2 pl-2 items-end justify-between">
        <SectionHeader title="Featured Work" />
        <div className="flex gap-4">
          <button
            onClick={() => rotate(-1)}
            className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white hover:border-neutral-400 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => rotate(1)}
            className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white hover:border-neutral-400 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="carousel-container flex w-full h-[500px] relative items-center justify-center">
        {cards.map((card, i) => {
          const offset = (i - currentIndex + cards.length) % cards.length;
          let pos: "active" | "prev" | "next" = "active";
          if (offset === 1) pos = "next";
          else if (offset === cards.length - 1) pos = "prev";

          return (
            <SpotlightCard
              key={card.slug}
              className={`carousel-card lg:w-3/4 glass-panel cursor-pointer w-full h-full rounded-3xl p-2 ${pos}`}
            >
              <div className="w-full h-full bg-neutral-50 rounded-2xl overflow-hidden relative group">
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                  <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-black/5">
                    {card.title}
                  </span>
                </div>
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 p-6">
                  {card.image ? (
                    <AdaptiveProjectImage
                      src={card.image}
                      alt={card.title}
                      variant="card"
                      align="center"
                      frameClassName="rounded-lg border border-neutral-100 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : null}
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
