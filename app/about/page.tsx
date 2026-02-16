"use client";

import { Code, Palette, Smartphone, Database, Zap, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// No data imports; using hardcoded data for reliability

export default function AboutPage() {
  const aboutData = {
    hero: {
      heading: "Full-Stack Developer",
      introduction:
        "Hi! I'm Abdul Rohim, a Full Stack Web Developer building scalable web applications and APIs. From telecommunications infrastructure to fullstack development—I craft solutions that bridge systems and deliver results.",
    },
    aboutMe: {
      heading: "About Me",
      paragraphs: [
        "I'm a Full Stack Developer currently working as a Freelance Developer (Rohimdev.com) while also serving as a Fullstack Developer at Varnion Technology. I specialize in building scalable web applications with Node.js, Express, Hono, Golang (Gin), PostgreSQL, and React. I've successfully delivered 3-5 concurrent fullstack projects, leveraging AI-assisted development tools to improve velocity and code quality.",
        "At Varnion Technology, I transitioned from Staff Infrastructure (Jan-Aug 2025) to Fullstack Developer (Sep 2025-Present). During this time, I built scalable RESTful APIs and automated reporting pipelines, focusing on clean architecture, security, and performance. I collaborate closely with infrastructure and NOC teams to bridge system requirements between application and network layers.",
        "My journey into software development started after 3+ years in telecommunications at PT Telkom Indonesia (IndiHome). This foundational experience taught me systematic problem-solving, reliability, and customer service excellence—skills that continue to inform how I build robust, user-friendly applications today.",
      ],
    },
  } as const;

  const skillsBreakdown = {
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
  } as const;

  const careerJourney = {
    timeline: [
      {
        period: "Jan 2025 - Present",
        title: "Freelance Fullstack Developer",
        company: "Rohimdev.com",
        description:
          "Delivering 3-5 concurrent fullstack projects for client-specific requirements. Building backend services with Node.js, Express, Hono, and Golang (Gin), designing PostgreSQL databases with Prisma ORM, and integrating frontend applications with backend services. Using AI-assisted tools to improve development velocity.",
        technologies: ["Node.js", "Express", "Hono", "Golang", "PostgreSQL", "Prisma", "React"],
      },
      {
        period: "Sep 2025 - Present",
        title: "Fullstack Developer",
        company: "Varnion Technology Semesta",
        description:
          "Developing internal web applications using React, Node.js, and PostgreSQL. Building scalable RESTful APIs with clean architecture, security, and performance focus. Collaborating with infrastructure and NOC teams to bridge system requirements. Automating operational processes and reporting pipelines.",
        technologies: ["React", "Node.js", "PostgreSQL", "RESTful APIs", "Clean Architecture"],
      },
      {
        period: "Jan 2025 - Aug 2025",
        title: "Staff Infrastructure",
        company: "Varnion Technology Semesta",
        description:
          "Transition period from telecommunications infrastructure to software development. Performed installation, configuration, and maintenance of network devices. Conducted regular monitoring and troubleshooting using Mikrotik and Ubiquiti systems.",
        technologies: ["Mikrotik", "Ubiquiti", "Network Design", "System Monitoring"],
      },
      {
        period: "Dec 2020 - Aug 2023",
        title: "Provisioning Technician",
        company: "PT Telkom Indonesia (IndiHome)",
        description:
          "My foundational experience in telecommunications. Installed and configured fiber optic internet services. Conducted on-site troubleshooting and signal quality testing using OTDR and OPM. Reduced repeat visits by 25% through quality workmanship and customer education.",
        technologies: ["Fiber Optic", "OTDR", "OPM Testing", "Customer Service"],
      },
    ],
  } as const;

  // Map skills data to component format
  const skills = skillsBreakdown.categories
    .map((category) =>
      category.skills.map((skill) => ({
        name: skill.name,
        icon:
          skill.name.includes("Frontend") || skill.name.includes("React")
            ? Code
            : skill.name.includes("Backend") || skill.name.includes("Database")
            ? Database
            : skill.name.includes("Mobile")
            ? Smartphone
            : skill.name.includes("Network") ||
              skill.name.includes("Infrastructure")
            ? Zap
            : Users,
        level: skill.level,
      }))
    )
    .flat();

  // Map career journey to experience format
  const experience = careerJourney.timeline.map((item) => ({
    year: item.period,
    title: item.title,
    company: item.company,
    description: item.description,
    technologies: item.technologies,
  }));

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl sf-pro-display tracking-tight mb-8 font-light bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              {aboutData.hero.heading}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {aboutData.hero.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl sf-pro-display font-light mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {aboutData.aboutMe.heading}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto lg:mx-0 rounded-full"></div>
              </div>

              <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                {aboutData.aboutMe.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-justify lg:text-left">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Call to Action */}
              <div className="pt-4">
                <a
                  href="/work"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                >
                  <span className="mr-2">View My Experience</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/10 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-3xl bg-gray-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/profile.png"
                      alt="Abdul Rohim - Full-Stack Developer"
                      fill
                      className="object-cover rounded-3xl"
                      style={{ objectPosition: "center top" }}
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of
              expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold sf-pro-display">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-white/60">
                      {skill.level}% proficiency
                    </p>
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              My career journey and the experiences that have shaped me as a
              developer.
            </p>
          </div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <Link key={index} href="/work">
                <div className="cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                  <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 my-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold sf-pro-display">
                          {job.title}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {job.company}
                        </p>
                      </div>
                      <span className="text-sm text-white/60 mt-2 md:mt-0">
                        {job.year}
                      </span>
                    </div>
                    <p className="text-white/60 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link href="/work">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 cursor-pointer hover:scale-105">
                View My Experience
                <span>→</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Beyond Code
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or enjoying outdoor activities.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold sf-pro-display mb-2">
                  Learning
                </h3>
                <p className="text-white/60">
                  Always exploring new technologies and frameworks
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold sf-pro-display mb-2">
                  Open Source
                </h3>
                <p className="text-white/60">
                  Contributing to projects that make a difference
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏔️</span>
                </div>
                <h3 className="text-lg font-semibold sf-pro-display mb-2">
                  Adventure
                </h3>
                <p className="text-white/60">
                  Hiking, photography, and exploring new places
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
