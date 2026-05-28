"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AdaptiveProjectImage,
  type ProjectImageFitState,
} from "@/components/ui/adaptive-project-image";
import type { ImageOrientation } from "@/lib/project-image-fit";
import { GlassButton } from "@/components/ui/glass-button";
import type { ProjectContent } from "@/types/content";

const SKILL_TAGS = [
  "React & Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "React Native",
];

function projectTypeLabel(projectType: ProjectContent["projectType"]): string {
  return projectType === "production" ? "Production" : "Study";
}

function projectLinkText(project: ProjectContent): string {
  return project.projectType === "production" ? "View project" : "View case study";
}

function WorkCardImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [orientation, setOrientation] = useState<ImageOrientation | null>(
    null,
  );

  const handleFit = (fit: ProjectImageFitState) => {
    setOrientation(fit.orientation);
  };

  const isPortrait = orientation === "portrait";

  return (
    <div
      className={
        isPortrait
          ? "flex w-full justify-center rounded-lg bg-neutral-50 p-2"
          : "w-full overflow-hidden rounded-lg"
      }
    >
      <AdaptiveProjectImage
        src={src}
        alt={alt}
        variant="card"
        hoverScale
        align={isPortrait ? "center" : "start"}
        className="w-full"
        onFit={handleFit}
      />
    </div>
  );
}

type WorkContentProps = {
  projects: ProjectContent[];
};

export function WorkContent({ projects }: WorkContentProps) {
  const [view, setView] = useState<"list" | "grid">("list");

  return (
    <>
      <header
        className="flex flex-col md:flex-row gap-6 animate-clip-in gap-x-6 gap-y-6 items-end justify-between"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-neutral-900">
            Selected Work
          </h1>
          <p className="text-neutral-500 text-lg">
            Full-stack applications across web and mobile.
          </p>
        </div>
        <div className="flex gap-1 bg-neutral-200/50 rounded-lg p-1 gap-x-6 gap-y-6 items-center">
          <button
            onClick={() => setView("list")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              view === "list" ? "bg-white shadow-sm text-neutral-900" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/50"
            }`}
          >
            List
          </button>
          <button
            onClick={() => setView("grid")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              view === "grid" ? "bg-white shadow-sm text-neutral-900" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/50"
            }`}
          >
            Grid
          </button>
        </div>
      </header>

      <section className="sm:py-24 lg:pl-0 lg:pr-0 lg:pt-0 lg:pb-0 pt-24 pr-0 pb-24 pl-0">
        <div className="max-w-4xl animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex flex-col sm:flex-row sm:gap-4 mb-8 gap-x-3 gap-y-3 items-center">
            <GlassButton href="/contact">View my work</GlassButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center hover:bg-neutral-100 text-base font-medium text-neutral-900 bg-white border border-neutral-200 rounded-full px-6 py-3.5 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)]"
            >
              Contact me
            </Link>
          </div>
          <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl leading-relaxed">
            Full-stack developer based in Surabaya. I build scalable web and mobile applications with React, Next.js, Node.js, and Golang—from real-time chat to e-commerce.
          </p>
          <div className="flex flex-wrap gap-2.5 mb-8">
            {SKILL_TAGS.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 text-xs text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full px-3 py-1.5 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div
        id="cases-container"
        className={`animate-fade-up ${view === "list" ? "flex flex-col gap-24" : "grid grid-cols-1 md:grid-cols-2 gap-12"}`}
        style={{ animationDelay: "0.5s" }}
      >
        {projects.map((project) => (
          <article key={project.slug} className="group">
            <Link
              href={`/work/${project.slug}`}
              className="block p-2 hover:shadow-md transition-all duration-500 bg-white w-full border border-neutral-200 rounded-2xl shadow-sm"
            >
              <span className="sr-only">
                {projectLinkText(project)}: {project.title}
              </span>
              {project.image ? (
                <WorkCardImage src={project.image} alt={project.title} />
              ) : (
                <div
                  className="aspect-[16/10] w-full rounded-lg bg-[#1a1c18]"
                  aria-hidden
                />
              )}
            </Link>
            <div className="mt-8 md:mt-12 px-2">
              <div className="max-w-4xl">
                <Link href={`/work/${project.slug}`} className="block group/title">
                  <span className="text-sm text-neutral-400 mb-4 block uppercase tracking-wide group-hover/title:text-neutral-600 transition-colors">
                    {project.title}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 leading-tight mb-6 group-hover/title:text-neutral-700 transition-colors">
                    {project.headline}
                  </h2>
                </Link>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 border-t border-neutral-200 pt-8">
                  <div>
                    <h4 className="text-sm text-neutral-400 mb-1">Year</h4>
                    <p className="text-[15px] font-medium text-neutral-900">{project.date}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-400 mb-1">Status</h4>
                    <p className="text-[15px] font-medium text-neutral-900">{project.status}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-400 mb-1">Tech</h4>
                    <p className="text-[15px] font-medium text-neutral-900">
                      {project.technologies.join(", ")}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-400 mb-1">Links</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[15px] font-medium text-neutral-900 hover:text-neutral-600 underline"
                        >
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[15px] font-medium text-neutral-900 hover:text-neutral-600 underline"
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-8">
                  <span className="px-3 py-1.5 bg-neutral-200/50 rounded-md text-xs font-medium text-neutral-600">
                    {projectTypeLabel(project.projectType)}
                  </span>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-neutral-200/50 rounded-md text-xs font-medium text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                  <Link
                    href={`/work/${project.slug}`}
                    className="ml-auto text-sm font-medium text-neutral-900 underline hover:text-neutral-600"
                  >
                    {projectLinkText(project)} →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
