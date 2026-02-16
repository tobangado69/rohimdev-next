"use client";

import Image from "next/image";
import { TrendingUp, Users, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
// No data imports; use hardcoded data below

export default function ProfessionalExperienceSection() {
  const workExperience = [
    {
      id: "freelance-current",
      title: "Freelance Fullstack Developer",
      company: "Rohimdev.com",
      description:
        "Delivering 3-5 concurrent fullstack projects for client-specific requirements. Building scalable web applications with Node.js, Express, Hono, Golang, and PostgreSQL with Prisma ORM.",
      achievements: [
        { metric: "3-5", description: "concurrent projects" },
      ],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      status: "current",
      technologies: [
        "Node.js",
        "Express",
        "Hono",
        "Golang",
        "PostgreSQL",
        "Prisma",
        "React",
      ],
      period: { display: "Jan 2025 - Present" },
    },
    {
      id: "varnion-dev-current",
      title: "Fullstack Developer",
      company: "Varnion Technology Semesta",
      description:
        "Developing internal web applications using React, Node.js, and PostgreSQL. Building scalable RESTful APIs with clean architecture, security, and performance focus.",
      achievements: [
        { metric: "Efficiency", description: "improved through automation" },
      ],
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      status: "current",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "RESTful APIs",
        "Clean Architecture",
      ],
      period: { display: "Sep 2025 - Present" },
    },
    {
      id: "varnion-infra-previous",
      title: "Staff Infrastructure",
      company: "Varnion Technology Semesta",
      description:
        "Transition period from telecommunications infrastructure to software development. Maintained network operations while building development skills.",
      achievements: [
        { metric: "Career", description: "transition to development" },
      ],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      status: "previous",
      technologies: [
        "Mikrotik",
        "Ubiquiti",
        "Network Design",
        "System Monitoring",
      ],
      period: { display: "Jan 2025 - Aug 2025" },
    },
    {
      id: "telkom-previous",
      title: "Provisioning Technician",
      company: "PT Telkom Indonesia (IndiHome)",
      description:
        "Foundational experience in telecommunications infrastructure. Built strong problem-solving skills and customer service excellence at Indonesia's largest telecom company.",
      achievements: [
        { metric: "25%", description: "reduction in repeat visits" },
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      status: "previous",
      technologies: ["Fiber Optic", "OTDR", "OPM Testing", "Customer Service"],
      period: { display: "Dec 2020 - Aug 2023" },
    },
  ] as const;

  // Map work experience to success stories format
  const experienceStories = workExperience.map((work, index) => ({
    id: work.id,
    title: work.title,
    company: work.company,
    role: work.title,
    description: work.description,
    badge: work.status === "current" ? "Current Position" : "Previous Role",
    metrics:
      work.achievements[0]?.metric + " " + work.achievements[0]?.description ||
      "Professional Excellence",
    image: work.image,
    icon:
      work.status === "current"
        ? TrendingUp
        : work.status === "previous"
        ? Users
        : BarChart3,
    color:
      work.status === "current"
        ? "from-blue-500/20 to-purple-600/20"
        : work.status === "previous"
        ? "from-purple-500/20 to-pink-600/20"
        : "from-orange-500/20 to-red-600/20",
    technologies: work.technologies,
    period: work.period.display,
  }));

  return (
    <section className="pt-32 pb-32">
      <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light">
            Professional Experience
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            4+ years building scalable web applications and APIs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceStories.map((story, index) => (
            <Link key={story.id} href="/work">
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 cursor-pointer hover:scale-105">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${story.color}`}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white/80 border border-white/20">
                      {story.badge}
                    </span>
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                      <story.icon className="w-5 h-5 text-white/80" />
                    </div>
                  </div>

                  {/* Title and Company */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-white/90 transition-colors">
                      {story.company}
                    </h3>
                    <p className="text-white/70 text-sm font-medium">
                      {story.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                    {story.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {story.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/5 backdrop-blur-sm rounded-md text-xs text-white/70 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {story.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/5 backdrop-blur-sm rounded-md text-xs text-white/70 border border-white/10">
                          +{story.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Metrics and Period */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <div className="text-white/80 font-medium">
                        {story.metrics}
                      </div>
                      <div className="text-white/60">{story.period}</div>
                    </div>
                    <button
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 cursor-pointer"
                      aria-label="View full work experience details"
                    >
                      <ArrowRight className="w-4 h-4 text-white/80" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/work">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 cursor-pointer">
              View Full Experience
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
