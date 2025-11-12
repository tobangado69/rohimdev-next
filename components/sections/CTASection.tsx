"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const MotionLink = motion(Link);

export default function CTASection() {
  return (
    <section className="pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="slide-up bg-gradient-to-br from-white/10 to-white/5 glass-effect border border-white/20 rounded-3xl p-16"
          {...({} as any)}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light"
            {...({} as any)}
          >
            Ready to work together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-white/60 mb-10 max-w-2xl mx-auto"
            {...({} as any)}
          >
            Let's discuss your project and bring your ideas to life with modern
            web technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...({} as any)}
          >
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden inline-flex items-center justify-center"
              aria-label="Start a project"
              {...({} as any)}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </MotionLink>

            <MotionLink
              href="https://t.me/Tobangado70"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2 justify-center text-white/80 hover:text-white"
              aria-label="Schedule a call via Telegram"
              {...({} as any)}
            >
              <Phone className="h-5 w-5" />
              Schedule a Call
            </MotionLink>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-sm text-white/40 mt-6"
            {...({} as any)}
          >
            Free consultation. No commitment required. Let's build something
            amazing together.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
