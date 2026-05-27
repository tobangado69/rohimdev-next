import Image from "next/image";
import { GlassButton } from "@/components/ui/glass-button";
import { LogoMarquee } from "./logo-marquee";
import { PROFILE } from "@/lib/constants";
import type { HomeContent } from "@/types/content";

type HeroProps = {
  hero: HomeContent["hero"];
};

function mapVariant(variant?: string): "default" | "red" | "green" {
  if (variant === "red" || variant === "green") return variant;
  return "default";
}

export function Hero({ hero }: HeroProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 gap-x-12 gap-y-12">
      <div
        className="animate-clip-in lg:col-span-7 pb-4 space-y-8"
        style={{ animationDelay: "0.4s" }}
      >
        <h1 className="leading-[0.95] lg:text-7xl xl:text-7xl text-5xl font-medium text-neutral-900 tracking-tight">
          {hero.heading}
        </h1>
        <p className="leading-snug lg:text-base text-xl font-normal text-neutral-500">
          {hero.description}
        </p>
        <div className="flex flex-wrap gap-3">
          {hero.ctas.map((cta) => (
            <GlassButton
              key={`${cta.href}-${cta.label}`}
              href={cta.href}
              variant={mapVariant(cta.variant)}
              external={cta.external}
            >
              {cta.label}
            </GlassButton>
          ))}
        </div>

        <section
          className="animate-fade-up w-full my-6 space-y-2"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-base text-neutral-500">{hero.trustText}</p>
          <LogoMarquee />
        </section>
      </div>

      <div
        className="animate-clip-in lg:col-span-5 flex items-center justify-center overflow-hidden relative"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-200 group cursor-pointer">
          <Image
            src={PROFILE.avatar}
            alt={PROFILE.name}
            fill
            className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 33vw"
            priority
          />

          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              <div className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center gap-1 sm:gap-2 text-white bg-black/40 backdrop-blur-md border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                <span className="hidden sm:inline">REC</span>
              </div>
            </div>

            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 border border-white/40 rounded-2xl flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
              <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-l-2 border-white -mt-0.5 -ml-0.5"></div>
              <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-white -mt-0.5 -mr-0.5"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-white -mb-0.5 -ml-0.5"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-r-2 border-white -mb-0.5 -mr-0.5"></div>
              <div className="bg-black/60 backdrop-blur-md px-1 sm:px-2 py-0.5 sm:py-1 rounded text-[8px] sm:text-[10px] text-white uppercase tracking-widest">
                Tracking
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
