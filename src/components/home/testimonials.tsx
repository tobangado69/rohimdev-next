"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    quote:
      "FlowAI transformed our content strategy. We now generate 10x more content while maintaining quality.",
    name: "Sarah Chen",
    role: "Marketing Director, TechFlow",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "The AI automation saved us 20+ hours weekly. Our content performance increased by 300%.",
    name: "Marcus Rodriguez",
    role: "Content Lead, GrowthLab",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "Incredible ROI. FlowAI paid for itself within the first month of implementation.",
    name: "Emma Thompson",
    role: "Founder, Digital Ventures",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "From brief to published content in minutes — completely game-changing for our workflow.",
    name: "Alex Morgan",
    role: "Creative Director, Apex Studios",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&fit=crop&crop=faces",
  },
];

export function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    const el = railRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 10
    );
  };

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scroll = (dir: number) => {
    railRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <section className="sm:p-8 bg-white w-full max-w-7xl z-10 border border-neutral-200/70 rounded-3xl mt-24 mr-auto mb-24 ml-auto p-6 relative shadow-2xl">
      <div className="flex flex-col pr-0 pl-0 gap-6">
        <h2 className="text-[44px] leading-[0.9] sm:text-6xl lg:text-7xl xl:text-5xl text-black tracking-tighter text-left">
          Testimonials.
        </h2>
        <p className="sm:text-base text-sm text-zinc-400 tracking-tight mt-1">
          Real stories, real success. Our customers have experienced firsthand
          the impact of our solutions.
        </p>
      </div>

      <div className="relative overflow-hidden h-[420px] rounded-3xl mt-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          ref={railRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center hide-scrollbar"
        >
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className={`min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-neutral-200/70 rounded-[24px] p-8 text-neutral-900 hover:-translate-y-1 transition-transform backdrop-blur-sm snap-center shadow-2xl ${
                i % 2 === 0 ? "-rotate-2" : "rotate-1"
              }`}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-900 tracking-tighter">
                &quot;{t.quote}&quot;
              </p>
              <div className="mt-8 flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div>
                  <div className="text-sm tracking-tight">{t.name}</div>
                  <div className="text-xs text-neutral-500 tracking-tight">
                    {t.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous"
            className={`hover:bg-neutral-200 transition-colors inline-flex text-neutral-900 bg-neutral-100 w-10 h-10 border border-neutral-200 rounded-full items-center justify-center ${
              !canScrollLeft ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            aria-label="Next"
            className={`w-10 h-10 rounded-full text-white bg-neutral-900 hover:bg-neutral-800 transition-colors inline-flex items-center justify-center ${
              !canScrollRight ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
