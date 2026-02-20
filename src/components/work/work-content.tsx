"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GlassButton } from "@/components/ui/glass-button";

const SKILL_TAGS = [
  "React & Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "React Native",
];

/** Hardcoded projects - no external data fetching */
const PROJECTS = [
  {
    slug: "mobile-fb",
    title: "Mobile-FB",
    headline: "A comprehensive full-stack social media application that replicates core Facebook functionality on mobile devices.",
    image: "https://i.imgur.com/CFZvp5T.png",
    date: "April 2024",
    status: "In Development",
    technologies: ["React Native", "GraphQL", "Apollo Client", "Node.js", "MongoDB", "Redis", "Expo"],
    github: "https://github.com/tobangado69/Mobile-FB",
    live: null as string | null,
  },
  {
    slug: "chatapp",
    title: "ChatApp",
    headline: "Real-time messaging application built with React and Socket.IO, featuring live chat functionality and user presence indicators.",
    image: "https://raw.githubusercontent.com/tobangado69/ChatApp/main/assets/home.png",
    date: "February 2024",
    status: "In Development",
    technologies: ["React", "Socket.IO", "Express", "PostgreSQL", "Sequelize", "Tailwind CSS"],
    github: "https://github.com/tobangado69/ChatApp",
    live: null as string | null,
  },
  {
    slug: "grammedia-clone",
    title: "Grammedia Clone",
    headline: "A comprehensive e-commerce web application that replicates modern online bookstore functionality.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    date: "2024",
    status: "Live",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Infinite Scroll"],
    github: "https://github.com/tobangado69/Grammedia-Clone",
    live: "https://gramedia.vercel.app/",
  },
];


export function WorkContent() {
  const [view, setView] = useState<"list" | "grid">("list");

  return (
    <>
      <header
        className="flex flex-col md:flex-row gap-6 animate-fade-up gap-x-6 gap-y-6 items-end justify-between"
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
        {PROJECTS.map((project) => (
          <article key={project.slug} className="group">
            <div className="md:p-4 hover:shadow-md transition-all duration-500 bg-white w-full border border-neutral-200 rounded-2xl p-3 shadow-sm">
              <div className="aspect-16/10 overflow-hidden group-hover:cursor-pointer bg-[#1a1c18] w-full rounded-lg relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover bg-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
              </div>
            </div>
            <div className="mt-8 md:mt-12 px-2">
              <div className="max-w-4xl">
                <span className="text-sm text-neutral-400 mb-4 block uppercase tracking-wide">
                  {project.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 leading-tight mb-12">
                  {project.headline}
                </h2>
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
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-medium text-neutral-900 hover:text-neutral-600 underline"
                      >
                        GitHub
                      </a>
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
                <div className="flex flex-wrap gap-2 mt-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-neutral-200/50 rounded-md text-xs font-medium text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
