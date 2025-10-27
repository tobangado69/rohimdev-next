"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { getHeroData } from "@/lib/data";

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
  const heroData = getHeroData();

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);

    // Load UnicornStudio script using the exact same approach as the original HTML
    const loadUnicornStudio = () => {
      if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized: false, init: () => {} };
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
        script.onload = function () {
          console.log("UnicornStudio script loaded");
          if (!window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
            console.log("UnicornStudio initialized");
          }
        };
        script.onerror = function () {
          console.error("Failed to load UnicornStudio script");
        };
        (document.head || document.body).appendChild(script);
      } else {
        console.log("UnicornStudio already exists");
      }
    };

    // Use the exact same script as the original HTML
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = `
      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    `;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="max-w-full sm:px-6 lg:px-8 relative z-10 mr-auto ml-auto pt-40 pr-4 pl-4">
      {/* UnicornStudio Animation Container - Only render on client */}
      {isClient && (
        <div className="spline-container absolute top-0 w-full h-1200 -z-10">
          <div
            data-us-project="5lHoGfe3FLqHAGyFDn3C"
            style={{
              width: "100%",
              height: "750px",
            }}
          >
            <div style={{ color: "white" }}></div>
          </div>
        </div>
      )}
      <div className="max-w-4xl text-left mt-10 mb-10 justify-end ml-8 sm:ml-16 lg:ml-24">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="slide-up inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full mb-8"
          {...({} as any)}
        >
          <div className="w-2 h-2 rounded-full animate-pulse bg-cyan-400"></div>
          <span className="text-sm font-medium">{heroData.badge}</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="slide-up stagger-1 text-5xl sm:text-6xl lg:text-7xl sf-pro-display tracking-tight mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent font-light"
          {...({} as any)}
        >
          {heroData.heading}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="slide-up stagger-2 max-w-2xl leading-relaxed text-lg font-normal text-white/60 mb-12 ml-0"
          {...({} as any)}
        >
          {heroData.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="slide-up stagger-3 flex flex-col sm:flex-row gap-4 justify-start"
          {...({} as any)}
        >
          {/* Primary Button */}
          <GlowButton text={heroData.cta[0].text} link={heroData.cta[0].link} />

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:bg-white/30 transition-all flex gap-2 font-medium bg-[#000000] border-white/20 border rounded-full pt-4 pr-8 pb-4 pl-8 items-center"
            {...({} as any)}
            onClick={() => (window.location.href = heroData.cta[1].link)}
          >
            <Monitor className="h-5 w-5" />
            {heroData.cta[1].text}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

function GlowButton({ text, link }: { text: string; link: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden"
      style={
        {
          "--glow-core": "rgba(255, 255, 255, 0.8)",
          "--glow-color": "rgba(192, 132, 252, 0.35)",
          "--glow-color-strong": "rgba(192, 132, 252, 0.55)",
        } as React.CSSProperties
      }
      {...({} as any)}
      onClick={() => (window.location.href = link)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <ArrowRight className="w-5 h-5" />
      </span>

      {/* Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <style jsx>{`
        .glow-btn::before,
        .glow-btn::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
          will-change: background;
          z-index: -1;
        }

        .glow-btn::before {
          background: radial-gradient(
              90px 90px at var(--x) var(--y),
              var(--glow-core) 0%,
              rgba(255, 255, 255, 0.25) 45%,
              transparent 70%
            ),
            radial-gradient(
              140px 140px at var(--x) var(--y),
              var(--glow-color-strong) 0%,
              transparent 75%
            );
          mix-blend-mode: screen;
        }

        .glow-btn::after {
          inset: -8px;
          border-radius: inherit;
          background: radial-gradient(
            200px 200px at var(--x) var(--y),
            var(--glow-color) 0%,
            transparent 80%
          );
          filter: blur(20px);
          z-index: -2;
        }

        .glow-btn:hover::before,
        .glow-btn:hover::after {
          opacity: 1;
        }
      `}</style>
    </motion.button>
  );
}
