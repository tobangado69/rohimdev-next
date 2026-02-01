"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/tobangado",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/tobangado69",
      icon: Github,
    },
    {
      name: "Telegram",
      href: "https://t.me/Tobangado70",
      icon: MessageCircle,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="border-white/10 border-t pt-16 pb-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand & Social */}
          <div>
            <div className="flex items-center gap-3 mb-4">
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
              <span className="text-xl font-semibold sf-pro-display">
                Rohim Dev
              </span>
            </div>
            <p className="text-white/60 mb-6 text-sm">
              Full-stack developer crafting digital experiences.
            </p>
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label={`Visit ${item.name} profile`}
                  {...({} as any)}
                >
                  <item.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="hover:text-white transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-4">Get In Touch</h5>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:rohimjoy70@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  rohimjoy70@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Surabaya, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-white/60 text-sm">
              © 2026 Rohim Dev. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/terms"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <span className="text-white/40">•</span>
              <Link
                href="/privacy"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/contact"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Let's work together →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
