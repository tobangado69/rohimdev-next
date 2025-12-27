"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-white/10 to-white/5 glass-effect border border-white/20 rounded-3xl p-16">
          <h2 className="text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light">
            Ready to work together?
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life with modern
            web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="relative group px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden inline-flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <a
              href="https://t.me/Tobangado70"
              className="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2 justify-center text-white/80 hover:text-white cursor-pointer"
            >
              <Phone className="h-5 w-5" />
              Schedule a Call
            </a>
          </div>

          <p className="text-sm text-white/40 mt-6">
            Free consultation. No commitment required. Let's build something
            amazing together.
          </p>
        </div>
      </div>
    </section>
  );
}
