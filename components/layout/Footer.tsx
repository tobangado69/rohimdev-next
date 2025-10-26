"use client";

import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
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
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="border-white/10 border-t pt-16 pb-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
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
            <p className="text-white/60 mb-6 max-w-md">
              Full-stack developer crafting digital experiences that matter.
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-6">Navigation</h5>
            <ul className="space-y-3 text-white/60">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-6">Services</h5>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-6">Contact</h5>
            <ul className="space-y-3 text-white/60">
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
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-890
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
          <p className="text-white/40 text-sm">
            © 2024 Rohim Dev. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
