"use client";

import { ArrowRight, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

// Declare UnicornStudio global
declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);
  // Hardcoded hero data for reliability (no runtime data imports)
  const heroData = {
    badge: "Full-Stack Developer & Infrastructure Specialist",
    heading: "Think different. Build exceptional.",
    description:
      "From telecommunications to software development. I build scalable web applications and design robust network infrastructure. Combining 4+ years of industry experience with modern development practices.",
    cta: [
      { text: "View My Work", link: "/work", type: "primary" },
      { text: "View Projects", link: "/projects", type: "secondary" },
    ],
  } as const;

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);

    // Load UnicornStudio script only once with proper error handling
    const loadUnicornStudio = () => {
      // Prevent duplicate loading
      if (window.UnicornStudio?.isInitialized) return;

      // Create and append script
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.async = true;
      script.onload = function () {
        console.log("UnicornStudio script loaded");
        if (!window.UnicornStudio?.isInitialized) {
          window.UnicornStudio?.init();
          window.UnicornStudio.isInitialized = true;
          console.log("UnicornStudio initialized");
        }
      };
      script.onerror = function () {
        console.error("Failed to load UnicornStudio script");
      };
      (document.head || document.body).appendChild(script);
    };

    loadUnicornStudio();
  }, []);

  return (
    <div className="max-w-full relative z-10">
      {/* UnicornStudio Animation Container - Only render on client */}
      {isClient && (
        <div className="spline-container absolute top-0 left-0 right-0 w-full -z-10">
          <div
            data-us-project="5lHoGfe3FLqHAGyFDn3C"
            className="w-full max-w-7xl mx-auto"
            style={{
              width: "100%",
              height: "750px",
            }}
          >
            <div style={{ color: "white" }}></div>
          </div>
        </div>
      )}

      {/* Centered Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
        <div className="max-w-4xl text-left">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full animate-pulse bg-cyan-400"></div>
            <span className="text-sm font-medium">{heroData.badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl sf-pro-display tracking-tight mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent font-light">
            {heroData.heading}
          </h1>

          {/* Description */}
          <p className="max-w-2xl leading-relaxed text-lg font-normal text-white/60 mb-12">
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            {/* Primary Button */}
            <GlowButton
              text={heroData.cta[0].text}
              link={heroData.cta[0].link}
            />

            {/* Secondary Button */}
            <button
              className="hover:bg-white/30 transition-all flex gap-2 font-medium bg-[#000000] border-white/20 border rounded-full pt-4 pr-8 pb-4 pl-8 items-center cursor-pointer"
              onClick={() => (window.location.href = heroData.cta[1].link)}
            >
              <Monitor className="h-5 w-5" />
              {heroData.cta[1].text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function GlowButton({ text, link }: { text: string; link: string }) {
  return (
    <button
      className="relative group px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden cursor-pointer hover:scale-105 transition-transform"
      style={
        {
          "--glow-core": "rgba(255, 255, 255, 0.8)",
          "--glow-color": "rgba(192, 132, 252, 0.35)",
          "--glow-color-strong": "rgba(192, 132, 252, 0.55)",
        } as React.CSSProperties
      }
      onClick={() => (window.location.href = link)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <ArrowRight className="w-5 h-5" />
      </span>

      {/* Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
