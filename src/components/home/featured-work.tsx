"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";

const CARDS = [
  {
    title: "Fintech Dashboard",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c053fe9-7127-4df7-ae87-36ae206fe067_1600w.jpg",
    gradient: "from-neutral-100 to-neutral-200",
  },
  {
    title: "Mobile Health App",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0851aedf-fdcc-48be-8ea0-cd63cc04fcda_800w.jpg",
    gradient: "from-blue-50 to-neutral-100",
  },
  {
    title: "SaaS Analytics",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51dd450a-0485-4587-89d8-c6078fb01266_1600w.jpg",
    gradient: "from-orange-50 to-neutral-100",
  },
];

export function FeaturedWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotate = useCallback((dir: number) => {
    setCurrentIndex((prev) => (prev + dir + CARDS.length) % CARDS.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => rotate(1), 5000);
    return () => clearInterval(id);
  }, [rotate]);

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
        {CARDS.map((card, i) => {
          const offset = (i - currentIndex + CARDS.length) % CARDS.length;
          let pos: "active" | "prev" | "next" = "active";
          if (offset === 1) pos = "next";
          else if (offset === CARDS.length - 1) pos = "prev";

          return (
            <SpotlightCard
              key={card.title}
              className={`carousel-card lg:w-3/4 glass-panel cursor-pointer w-full h-full rounded-3xl p-2 ${pos}`}
            >
              <div className="w-full h-full bg-neutral-50 rounded-2xl overflow-hidden relative group">
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                  <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-black/5">
                    {card.title}
                  </span>
                </div>
                <div
                  className={`flex bg-gradient-to-br ${card.gradient} w-full h-full items-center justify-center`}
                >
                  <div className="relative transform group-hover:scale-[1.02] transition-transform duration-500 bg-white w-[80%] h-[70%] border border-neutral-100 rounded-xl p-6 shadow-2xl overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
