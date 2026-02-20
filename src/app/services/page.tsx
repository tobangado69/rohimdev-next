import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SITE } from "@/lib/constants";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("services");

/** Hardcoded data - full-stack dev freelancer theme */
const WAY_OF_THINKING = [
  {
    title: "Scalable & production-ready",
    desc: "Build applications that grow with you. Clean architecture, RESTful APIs, and proper database design from day one.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
        <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </svg>
    ),
  },
  {
    title: "Real-time & modern stack",
    desc: "Socket.IO, GraphQL, and real-time features. React, Next.js, Node.js, Golang—tools that ship fast and scale.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
        <path d="M20 2v4" />
        <path d="M22 4h-4" />
        <circle cx="4" cy="20" r="2" />
      </svg>
    ),
  },
  {
    title: "Full-stack ownership",
    desc: "From database design to deployment. I own the full stack—frontend, backend, APIs—so you get a cohesive, maintainable system.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
  },
  {
    title: "Async-first collaboration",
    desc: "Work independently, ship on time. Clear communication via Slack, GitHub, and async updates—no hand-holding needed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
        <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
        <path d="m2.3 2.3 7.286 7.286" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
];

const METRICS = [
  { value: "2+ years", desc: "Building scalable web and mobile applications." },
  { value: "10+ projects", desc: "Delivered across real-time chat, e-commerce, social apps & more." },
  { value: "3–5 concurrent", desc: "Active clients supported with full-stack development." },
  { value: "Surabaya-based", desc: "Remote-first, async collaboration with global teams." },
];

const SERVICE_COLUMNS = [
  {
    title: "Frontend Development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-900">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    items: ["React & Next.js applications", "Responsive design & mobile-first", "Tailwind CSS & modern UI", "Performance optimization & SEO", "Progressive Web Apps (PWA)"],
  },
  {
    title: "Backend Development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-900">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
    items: ["RESTful APIs & GraphQL servers", "PostgreSQL, MongoDB database design", "Authentication & authorization", "Real-time features with Socket.IO", "Cloud deployment & scaling"],
  },
  {
    title: "Mobile Development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-neutral-900">
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    items: ["Cross-platform React Native apps", "Native performance & UX", "App Store & Play Store deployment", "Push notifications & offline support", "Social features & real-time chat"],
  },
];

const TESTIMONIALS = [
  { quote: "Start Agency transformed our scattered ideas into a coherent, beautiful product. The speed of delivery was unmatched compared to other agencies we've tried.", name: "Sarah Chen", role: "CTO, FinFlow", avatar: "Sarah+Chen" },
  { quote: "We needed a complete rebrand in 3 weeks for our Series A pitch. They not only met the deadline but exceeded expectations on quality.", name: "Mark Davis", role: "CEO, TechCore", avatar: "Mark+Davis" },
  { quote: "The subscription model is a game changer. No scope creep, no negotiation, just pure design work delivered consistently.", name: "Elena Rodriguez", role: "Product Lead, SaaSy", avatar: "Elena+R" },
  { quote: "Finally, a design partner that understands developer constraints. The handoffs were clean, organized, and ready to code.", name: "James Kim", role: "CTO, BlockSpace", avatar: "James+K" },
];

export default function ServicesPage() {
  return (
    <>
      <header
        className="animate-clip-in max-w-2xl pt-10"
        style={{ animationDelay: "0.4s" }}
      >
        <h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 mb-6">
          Services
        </h1>
        <p className="leading-relaxed text-xl text-neutral-500 mb-8">
          Transform ideas into scalable, production-ready applications across
          web and mobile.
        </p>
        <Link
          href="/contact"
          className="hover:bg-neutral-800 transition-colors flex items-center gap-2 shadow-neutral-900/10 hover:scale-105 active:scale-95 duration-200 text-sm font-medium text-white bg-neutral-900 w-fit rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg"
        >
          Get a Quote
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </header>

      {/* Our way of thinking */}
      <section className="animate-fade-up w-full">
        <div className="grid lg:grid-cols-12 gap-8 relative">
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32 h-fit">
            <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">
              Our way of thinking
            </h2>
            <p className="text-[17px] leading-relaxed text-neutral-500 font-normal">
              Principles that guide how I approach development, collaboration,
              and shipping production-ready software.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {WAY_OF_THINKING.map(({ title, desc, icon }) => (
                <SpotlightCard
                  key={title}
                  className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col gap-5 hover:border-neutral-200 transition-colors h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-900 border border-neutral-200/50">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3 tracking-tight">
                      {title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-neutral-500">
                      {desc}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="animate-fade-up w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map(({ value, desc }) => (
            <div
              key={value}
              className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:border-neutral-200 transition-colors h-full flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-2">
                {value}
              </h3>
              <p className="text-[15px] leading-relaxed text-neutral-500">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How we help you grow */}
      <section className="animate-fade-up w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">
              How we help you grow
            </h2>
            <div className="space-y-4">
              <p className="text-[17px] leading-relaxed font-normal text-neutral-500">
                I build across web and mobile—real-time chat, e-commerce, social
                apps, B2B SaaS, and more.
              </p>
              <p className="text-[17px] leading-relaxed font-normal text-neutral-500">
                From APIs to full-stack applications, clean architecture and
                modern tooling deliver results that scale.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-3 gap-4">
              {SERVICE_COLUMNS.map(({ title, icon, items }) => (
                <div key={title} className="space-y-2 flex flex-col h-full">
                  <div className="bg-white border border-neutral-100 p-5 rounded-2xl flex items-center gap-3 shadow-sm min-h-[72px] hover:border-neutral-200 transition-colors">
                    {icon}
                    <span className="text-[16px] font-semibold text-neutral-900 tracking-tight">
                      {title}
                    </span>
                  </div>
                  <div className="bg-white border border-neutral-100 p-6 rounded-2xl flex-1 shadow-sm hover:border-neutral-200 transition-colors">
                    <ul className="space-y-4 text-[15px] text-neutral-500 font-medium">
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial carousel */}
      <section className="animate-fade-up w-full relative pt-4 pb-4">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">
            Kind words from clients
          </h2>
        </div>
        <div className="relative overflow-hidden min-h-[240px]">
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-linear-to-r from-neutral-100 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-linear-to-l from-neutral-100 to-transparent z-20 pointer-events-none" />
          <div className="flex gap-6 w-max animate-marquee-slow items-stretch">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-[380px] bg-white border border-neutral-200/60 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:border-neutral-300 transition-all cursor-default shrink-0"
            >
              <p className="text-[16px] leading-relaxed text-neutral-600 mb-6 font-medium">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden relative">
                  <Image
                    src={`https://ui-avatars.com/api/?name=${t.avatar}&background=random`}
                    alt={t.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
