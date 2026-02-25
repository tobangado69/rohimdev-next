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
        className="lg:col-span-4 flex items-center justify-center overflow-hidden relative"
        style={{ animationDelay: "0.5s" }}
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-cover bg-center opacity-10 blur-3xl scale-125 animate-pulse pointer-events-none">
          <Image
            src={PROFILE.avatar}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>

        {/* Phone-like Container */}
        <div className="relative w-full max-w-sm aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-200 group cursor-pointer">
          <Image
            src={PROFILE.avatar}
            alt={PROFILE.name}
            fill
            className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority
          />
          
          {/* Overlay UI */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
            {/* REC Indicator */}
            <div className="flex justify-between items-start">
              <div className="px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 text-white bg-black/40 backdrop-blur-md border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                REC
              </div>
            </div>

            {/* Face Tracking Box */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-40 h-40 border border-white/40 rounded-2xl flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white -mt-0.5 -ml-0.5"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white -mt-0.5 -mr-0.5"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white -mb-0.5 -ml-0.5"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white -mb-0.5 -mr-0.5"></div>
              <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white uppercase tracking-widest">Tracking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
