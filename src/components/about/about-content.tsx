"use client";

import Image from "next/image";
import Link from "next/link";
import { PROFILE } from "@/lib/constants";
import type { AboutContent as AboutContentData } from "@/types/content";

type AboutContentProps = {
  content: AboutContentData;
};

export function AboutContent({ content }: AboutContentProps) {
  const hero = content.hero;
  const allSkills = content.skills.categories.flatMap((category) =>
    category.skills.map((skill) => ({ ...skill, category: category.title })),
  );
  const positions = content.careerJourney.timeline;

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
              <p className="text-neutral-600 leading-relaxed">{position.description}</p>
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
