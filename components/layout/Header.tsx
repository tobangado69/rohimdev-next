"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile: Full-width solid navbar, Desktop: Rounded with glass effect */}
        <div className="h-14 md:h-14 flex items-center justify-between md:mt-4 md:rounded-full md:glass-effect md:bg-white/5 md:border-white/10 md:border md:pr-3 md:pl-3 bg-black/95 border-b border-white/10 md:border-b-0 px-4 md:px-3">
          {/* Logo */}
          <Link href="/" className="flex gap-2 items-center flex-shrink-0">
            <div className="w-8 h-8 flex bg-gradient-to-b from-blue-400 to-blue-600 rounded-full items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-white"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <span className="text-base md:text-lg font-medium sf-pro-display text-white">
              Rohim Dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/17WL7BlaxqEaUcL_qyXa16wKdlaOgStZx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Resume
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all transform hover:scale-105 cursor-pointer"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors -mr-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full screen overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden z-40 -mt-14"
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="md:hidden absolute left-0 right-0 top-14 bg-black/98 backdrop-blur-xl border-b border-white/10 shadow-2xl z-50"
              >
                <nav className="flex flex-col py-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-6 py-3.5 text-base text-white/90 hover:text-white hover:bg-white/5 transition-all active:bg-white/10"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="px-6 pt-2 pb-4 border-t border-white/10 mt-2 flex flex-col space-y-3">
                    <a
                      href="https://drive.google.com/file/d/17WL7BlaxqEaUcL_qyXa16wKdlaOgStZx/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-base text-white/90 hover:text-white transition-colors text-left active:bg-white/5 rounded-lg cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Resume
                    </a>
                    <Link
                      href="/contact"
                      className="px-4 py-3 text-base bg-white text-black rounded-lg hover:bg-white/90 transition-all active:scale-95 font-medium cursor-pointer text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get In Touch
                    </Link>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
