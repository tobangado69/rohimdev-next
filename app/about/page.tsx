"use client";

import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Database, Zap, Users } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// No data imports; using hardcoded data for reliability

export default function AboutPage() {
  const aboutData = {
    hero: {
      heading: "Full-Stack Developer",
      introduction:
        "Hi! I'm Abdul Rohim, a Full Stack Web Developer with a strong background in telecommunications infrastructure and modern web development. I build scalable, high-performance applications and robust backend architectures.",
    },
    aboutMe: {
      heading: "About Me",
      paragraphs: [
        "I'm a full-stack JavaScript developer with a unique journey that spans from hands-on telecommunications infrastructure to cutting-edge software development. My career began in the trenches of network installation and troubleshooting at Telkom Indonesia, where I learned the fundamentals of how digital systems actually work in the real world.",
        "After 3+ years of optimizing network performance and reducing connectivity issues by 25%, I realized I wanted to build the applications that run on these networks. This led me to Hacktiv8's intensive bootcamp, where I immersed myself in modern development practices and emerged with the skills to create both web and mobile applications.",
        "Today, I combine this dual expertise as Staff Infrastructure at Varnion Technology, where I've achieved a 40% reduction in connectivity issues while also developing internal tools and applications. This unique perspective allows me to build software that's not just user-friendly, but also technically robust, scalable, and optimized for real-world network conditions.",
      ],
    },
  } as const;

  const skillsBreakdown = {
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "React & Next.js", level: 90 },
          { name: "JavaScript/TypeScript", level: 85 },
          { name: "Tailwind CSS", level: 95 },
        ],
      },
      {
        title: "Backend & Database",
        skills: [
          { name: "Golang & Node.js", level: 85 },
          { name: "PostgreSQL & MongoDB", level: 75 },
          { name: "Nest.js & Express", level: 80 },
          { name: "GraphQL & REST APIs", level: 85 },
        ],
      },
      {
        title: "Mobile & Infrastructure",
        skills: [
          { name: "React Native", level: 80 },
          { name: "Network Configuration", level: 90 },
          { name: "Mikrotik & Ubiquiti", level: 85 },
        ],
      },
    ],
  } as const;

  const careerJourney = {
    timeline: [
      {
        period: "Jan 2025 - Present",
        title: "Staff Infrastructure",
        company: "Varnion Technology Semesta",
        description:
          "Leading network infrastructure projects for hospitality industry clients, where I've successfully reduced connectivity issues by 40% through systematic monitoring and optimization. I also develop internal tools and applications to streamline our operations, combining my infrastructure expertise with modern development practices.",
        technologies: ["Mikrotik", "Ubiquiti", "Network Design"],
      },
      {
        period: "2024",
        title: "Full-Stack JavaScript Bootcamp",
        company: "Hacktiv8",
        description:
          "The decision to pursue Hacktiv8's intensive bootcamp was a turning point in my career. After years of working with network infrastructure, I realized I wanted to build the applications that run on these networks. The bootcamp challenged me to think differently about problem-solving and gave me the modern development skills to create both web and mobile applications that users actually love.",
        technologies: ["React", "Node.js", "Full-Stack"],
      },
      {
        period: "Dec 2020 - Aug 2023",
        title: "Provisioning Technician",
        company: "PT Telkom Indonesia (IndiHome)",
        description:
          "My professional journey began as a technician at Telkom Indonesia, Indonesia's largest telecommunications company. This role taught me the importance of reliability, customer service excellence, and systematic problem-solving. I reduced repeat visits by 25% through quality workmanship and customer education, while mastering advanced tools like OTDR and OPM for fiber optic testing.",
        technologies: ["Fiber Optic", "OTDR", "Customer Service"],
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl sf-pro-display tracking-tight mb-8 font-light bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                {aboutData.hero.heading}
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                {aboutData.hero.introduction}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className="text-justify lg:text-left"
                      {...({} as any)}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Call to Action */}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  {...({} as any)}
                >
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
                </motion.div>
              </div>

              {/* Profile Image */}
              <div className="flex justify-center lg:justify-end">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  {...({} as any)}
                >
                  <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/10 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-3xl bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/profile.png"
                        alt="Abdul Rohim - Full-Stack Developer"
                        className="w-full h-full object-cover rounded-3xl"
                        style={{ objectPosition: "center top" }}
                        loading="lazy"
                        onError={(e) => {
                          const img = e.currentTarget;
                          const fallback =
                            img.nextElementSibling as HTMLElement;
                          if (fallback) {
                            img.style.display = "none";
                            fallback.style.display = "flex";
                          }
                        }}
                      />
                      <div
                        className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl flex items-center justify-center"
                        style={{ display: "none" }}
                      >
                        <span className="text-4xl font-bold text-white">
                          AR
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-40"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sf-pro-display font-light mb-6">
                Skills & Expertise
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and areas of
                expertise.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl">
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
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    >
                      <div className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sf-pro-display font-light mb-6">
                Professional Experience
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                My career journey and the experiences that have shaped me as a
                developer.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <Link key={index} href="/work">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                  {...({} as any)}
                >
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
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mt-12"
            {...({} as any)}
          >
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                {...({} as any)}
              >
                View My Experience
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
