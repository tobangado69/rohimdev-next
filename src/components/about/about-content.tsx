"use client";

import Image from "next/image";
import Link from "next/link";
import { PROFILE } from "@/lib/constants";

/** Hardcoded data - no external data fetching */
const ABOUT = {
  hero: {
    heading: "Abdul Rohim",
    subheading: "Full-Stack Developer",
    introduction:
      "With 2+ years of experience, I specialize in building scalable applications using React, Next.js, Node.js, and Golang. From telecommunications to fullstack—I craft solutions that bridge systems and deliver results.",
    location: "Surabaya, Indonesia",
    experienceYears: "2+",
    quote: "I Have Served and I Will Be of Service",
  },
  skills: {
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "React & Next.js", level: 90 },
          { name: "TypeScript", level: 85 },
          { name: "Tailwind CSS", level: 95 },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js & Express", level: 85 },
          { name: "Golang (Gin)", level: 80 },
          { name: "RESTful APIs", level: 90 },
          { name: "Clean Architecture", level: 85 },
        ],
      },
      {
        title: "Database & Tools",
        skills: [
          { name: "PostgreSQL", level: 85 },
          { name: "Prisma ORM", level: 80 },
          { name: "Git & Version Control", level: 90 },
          { name: "Docker", level: 75 },
        ],
      },
    ],
  },
} as const;

const WORK_POSITIONS = [
  {
    status: "current" as const,
    title: "Freelance Fullstack Developer",
    company: "Rohimdev.com",
    period: "Jan 2025 - Present",
    responsibilities: [
      "Built backend services using Node.js, Express, Hono, and Golang (Gin)",
      "Designed and managed PostgreSQL databases with Prisma ORM",
      "Integrated frontend applications with backend services for consistent data flow",
      "Improved development velocity using AI-assisted tools (Cursor, Claude Code, TRAE)",
    ],
    technologies: [
      "Node.js",
      "Express",
      "Hono",
      "Golang",
      "PostgreSQL",
      "Prisma",
      "React",
    ],
  },
  {
    status: "current" as const,
    title: "Fullstack Developer",
    company: "Varnion Technology Semesta",
    period: "Sep 2025 - Present",
    responsibilities: [
      "Built scalable RESTful APIs and backend services focusing on clean architecture, security, and performance",
      "Developed and maintained internal web applications using React, Node.js, and PostgreSQL",
      "Collaborated closely with infrastructure and NOC teams to bridge system requirements",
      "Automated operational processes and reporting pipelines",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "RESTful APIs",
      "Clean Architecture",
    ],
  },
  {
    status: "previous" as const,
    title: "Staff Infrastructure",
    company: "Varnion Technology Semesta",
    period: "Jan 2025 - Aug 2025",
    responsibilities: [
      "Performed installation, configuration, and maintenance of network devices",
      "Conducted regular monitoring and troubleshooting of network infrastructure",
      "Collaborated with cross-functional teams including NOC",
    ],
    technologies: [
      "Mikrotik",
      "Ubiquiti",
      "Network Design",
      "System Monitoring",
    ],
  },
  {
    status: "previous" as const,
    title: "Provisioning Technician",
    company: "PT Telkom Indonesia (IndiHome)",
    period: "Dec 2020 - Aug 2023",
    responsibilities: [
      "Installed and configured IndiHome internet services including fiber optic connections",
      "Conducted on-site troubleshooting and signal quality testing using OTDR and OPM",
      "Coordinated with NOC and customer service teams for prompt issue resolution",
    ],
    technologies: ["Fiber Optic", "OTDR", "OPM Testing", "Customer Service"],
  },
];

export function AboutContent() {
  const hero = ABOUT.hero;
  const allSkills = ABOUT.skills.categories.flatMap((c) =>
    c.skills.map((s) => ({ ...s, category: c.title })),
  );
  const positions = WORK_POSITIONS;

  return (
    <>
      {/* Hero - madebyaris style */}
      <header
        className="animate-clip-in grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="lg:col-span-8 space-y-6">
          <h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900">
            {hero.heading}
            {hero.subheading && (
              <span className="block text-2xl lg:text-3xl text-neutral-500 font-normal mt-2">
                {hero.subheading}
              </span>
            )}
          </h1>
          <p className="text-lg leading-relaxed text-neutral-600 max-w-2xl">
            {hero.introduction}
          </p>
          {(hero.location || hero.experienceYears) && (
            <div className="flex flex-wrap gap-3">
              {hero.location && (
                <span className="text-sm text-neutral-500">
                  {hero.location}
                </span>
              )}
              {hero.experienceYears && (
                <span className="text-sm font-medium text-neutral-700">
                  {hero.experienceYears} Years Experience
                </span>
              )}
            </div>
          )}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-neutral-900 text-white text-base font-medium rounded-full px-6 py-3 hover:bg-neutral-800 transition-colors"
            >
              Contact Me
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center bg-white border border-neutral-200 text-neutral-900 text-base font-medium rounded-full px-6 py-3 hover:bg-neutral-50 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative w-full aspect-[3/4] max-w-[320px] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src={PROFILE.avatar}
              alt={PROFILE.name}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 100vw, 320px"
            />
          </div>
        </div>
      </header>

      {/* Trust / Technologies */}
      <section
        className="animate-fade-up text-center w-full max-w-5xl mr-auto ml-auto space-y-12 mt-16"
        style={{ animationDelay: "0.15s" }}
      >
        <div className="space-y-6">
          <h2 className="lg:text-7xl text-5xl font-medium text-neutral-900 tracking-tight text-left">
            Who I&apos;ve worked with
          </h2>
          <p className="leading-relaxed text-xl text-neutral-500 text-left max-w-2xl">
            From startups to scale-ups—building full-stack applications that
            ship.
          </p>
        </div>
        <div className="space-y-6 pt-4">
          <p className="uppercase text-sm font-medium text-neutral-400 tracking-widest text-left">
            Technologies I build with
          </p>
          <div className="flex flex-wrap gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 items-center justify-start">
            <Image
              src="/icons/react.svg"
              alt="React"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
              unoptimized
            />
            <Image
              src="/icons/nextdotjs.svg"
              alt="Next.js"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
              unoptimized
            />
            <Image
              src="/icons/nodedotjs.svg"
              alt="Node.js"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
              unoptimized
            />
            <Image
              src="/icons/postgresql.svg"
              alt="PostgreSQL"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
              unoptimized
            />
            <Image
              src="/icons/go.svg"
              alt="Golang"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
              unoptimized
            />
            <Image
              src="/icons/typescript.svg"
              alt="TypeScript"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Quote */}
      {hero.quote && (
        <section className="animate-fade-up w-full mt-16">
          <blockquote className="text-xl lg:text-2xl text-neutral-600 italic border-l-4 border-neutral-300 pl-6">
            &ldquo;{hero.quote}&rdquo;
          </blockquote>
        </section>
      )}

      {/* Skills & Expertise - single grid like madebyaris */}
      <section className="animate-fade-up w-full mt-20">
        <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-2">
          Skills & Expertise
        </h2>
        <p className="text-neutral-500 mb-8">
          A comprehensive toolkit for building exceptional digital experiences
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-700">{skill.name}</span>
                <span className="text-neutral-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-neutral-900 rounded-full transition-all"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Journey - madebyaris style */}
      <section className="animate-fade-up w-full mt-20">
        <p className="text-xs font-medium text-neutral-400 uppercase tracking-[0.2em] mb-2">
          Career Journey
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-2">
          Professional Timeline
        </h2>
        <p className="text-neutral-500 mb-12">
          A journey of growth, learning, and building amazing digital
          experiences.
        </p>
        <div className="space-y-12">
          {positions.map((position) => (
            <div
              key={`${position.company}-${position.period}`}
              className="border-b border-neutral-200 pb-12 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {position.period}
                </h3>
                {position.status === "current" && (
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <h4 className="text-xl font-semibold text-neutral-900 mb-4">
                {position.title}
              </h4>
              <p className="text-neutral-600 mb-4">{position.company}</p>
              <ul className="space-y-2 text-neutral-600">
                {position.responsibilities.map((r, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-neutral-400 shrink-0">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {position.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - dark panel, left-aligned */}
      <section className="animate-fade-up w-full mt-20">
        <div className="rounded-3xl bg-[#1E1E1E] p-12 lg:p-16 text-left">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
            Let&apos;s build something amazing together
          </h2>
          <p className="text-neutral-400 text-base lg:text-lg max-w-xl mb-8">
            Ready to collaborate on your next project? I&apos;d love to hear
            about your ideas and discuss how we can work together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-neutral-900 text-base font-medium rounded-full px-6 py-3 hover:bg-neutral-100 transition-colors"
          >
            Get in Touch
            <span aria-hidden={true}>&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
