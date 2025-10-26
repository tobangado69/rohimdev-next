"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    <header className="fixed top-4 left-4 right-4 z-50 fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="h-14 flex glass-effect bg-white/5 border-white/10 border rounded-full pr-3 pl-3 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex gap-2 items-center">
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
            <span className="text-lg font-medium sf-pro-display">
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
            <button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
              Resume
            </button>
            <button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all transform hover:scale-105">
              Get In Touch
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass-effect bg-white/5 border-white/10 border rounded-2xl p-4"
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col space-y-2">
                <button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors text-left">
                  Resume
                </button>
                <button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all">
                  Get In Touch
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
