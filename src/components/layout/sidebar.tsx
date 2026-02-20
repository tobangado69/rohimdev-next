"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SITE, NAV_LINKS, PROFILE } from "@/lib/constants";
import { GlassButton } from "@/components/ui/glass-button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Sidebar() {
  const currentPath = usePathname() ?? "/";
  return (
    <aside className="lg:w-64 lg:fixed lg:h-screen flex flex-col z-50 glass-panel lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:border-r w-full border-neutral-200/50 border-b pt-8 pr-8 pb-8 pl-8 justify-between">
      <div>
        <div className="flex items-center justify-between mb-0 lg:mb-12 animate-clip-in" style={{ animationDelay: "0.1s" }}>
          <Link
            href="/"
            className="block text-3xl tracking-tighter font-medium group"
          >
            {SITE.tagline.split(".")[0]}
            <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors">
              .{SITE.tagline.split(".")[1]}
            </span>
          </Link>
          <MobileNav currentPath={currentPath} />
        </div>

        <nav className="hidden lg:block space-y-4 animate-clip-in" style={{ animationDelay: "0.2s" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-lg hover:translate-x-1 transition-all ${
                currentPath === link.href
                  ? "text-neutral-900 font-medium"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block mt-6">
          <GlassButton
            href={PROFILE.social.upwork}
            external
            variant="green"
          >
            <span className="inline-flex items-center gap-2">
              Hire Me
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </span>
          </GlassButton>
        </div>
      </div>

      <div className="hidden lg:block space-y-2 animate-clip-in" style={{ animationDelay: "0.3s" }}>
        <div className="flex items-center gap-2 mb-4">
          <Image
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(SITE.name)}&background=171717&color=fff`}
            alt="User"
            width={32}
            height={32}
            className="rounded-full opacity-80"
            unoptimized
          />
          <div className="text-sm leading-tight">
            <p className="font-medium text-neutral-900">{SITE.tagline}</p>
            <p className="text-neutral-500">{SITE.username}</p>
          </div>
        </div>
        <p className="text-xs text-neutral-400">
          Built by {PROFILE.name}
        </p>
      </div>
    </aside>
  );
}
