import Image from "next/image";
import { GlassButton } from "@/components/ui/glass-button";
import { LogoMarquee } from "./logo-marquee";
import { PROFILE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 gap-x-12 gap-y-12">
      <div
        className="animate-clip-in lg:col-span-7 pb-4 space-y-8"
        style={{ animationDelay: "0.4s" }}
      >
        <h1 className="leading-[0.95] lg:text-7xl xl:text-7xl text-5xl font-medium text-neutral-900 tracking-tight">
          Full-Stack Developer & Web Architect.
        </h1>
        <p className="leading-snug lg:text-base text-xl font-normal text-neutral-500">
          Hi, I’m <strong>Abdul Rohim</strong>. I build scalable,
          production-ready web applications using React, Next.js, Node.js, and
          Golang. 2+ years of hands-on experience delivering reliable full-stack
          solutions.
        </p>
        <div className="flex flex-wrap gap-3">
          <GlassButton href="/contact">Start a project</GlassButton>
          <GlassButton href="/work">View Projects</GlassButton>
          <GlassButton href="https://minimax.ai" variant="red" external>
            Minimax Ambassador
          </GlassButton>
          <GlassButton href="https://trae.ai" variant="green" external>
            Trae Ambassador
          </GlassButton>
        </div>

        <section
          className="animate-fade-up w-full my-6 space-y-2"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-base text-neutral-500">
            Trusted by startups, founders, and engineering teams.
          </p>
          <LogoMarquee />
        </section>
      </div>

      <div
        className="lg:col-span-4 flex flex-col animate-clip-in bg-stone-50 border-stone-200 border rounded-3xl p-2 space-y-8 gap-x-12 gap-y-12 justify-between"
        style={{ animationDelay: "0.5s", height: "fit-content" }}
      >
        <div className="aspect-[3/4] overflow-hidden w-full border-stone-200 border rounded-2xl relative bg-neutral-100">
          <Image
            src={PROFILE.avatar}
            alt={PROFILE.name}
            fill
            className="object-cover object-top rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
