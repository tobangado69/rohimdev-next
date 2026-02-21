"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/constants";
import { GlassButton } from "@/components/ui/glass-button";

interface MobileNavProps {
  currentPath?: string;
}

export function MobileNav({ currentPath = "/" }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (open && !target.closest("[data-mobile-nav]")) setOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  const dropdownContent = open && (
    <div
      className="fixed left-4 right-4 top-[72px] z-[100] min-w-[200px] bg-white border border-neutral-200 rounded-xl shadow-lg p-6"
      data-mobile-nav
    >
      <nav className="flex flex-col gap-4">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`text-lg ${
              currentPath === link.href
                ? "text-neutral-900 font-medium"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-6 pt-4 border-t border-neutral-100 space-y-3">
        <GlassButton
          href={PROFILE.social.resume}
          external
          variant="default"
          className="w-full text-center"
        >
          <span className="inline-flex items-center gap-2">
            Resume
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </span>
        </GlassButton>
        <GlassButton
          href={PROFILE.social.upwork}
          external
          variant="green"
          className="w-full text-center"
        >
          <span className="inline-flex items-center gap-2">
            Hire Me
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </span>
        </GlassButton>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden relative" data-mobile-nav>
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className="p-3 rounded-lg hover:bg-neutral-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {mounted &&
        typeof document !== "undefined" &&
        open &&
        createPortal(dropdownContent, document.body)}
    </div>
  );
}
