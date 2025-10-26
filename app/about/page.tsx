"use client";

import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Database, Zap, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const skills = [
  { name: "Frontend Development", icon: Code, level: 95 },
  { name: "UI/UX Design", icon: Palette, level: 90 },
  { name: "Mobile Development", icon: Smartphone, level: 85 },
  { name: "Backend Development", icon: Database, level: 80 },
  { name: "Performance Optimization", icon: Zap, level: 88 },
  { name: "Team Collaboration", icon: Users, level: 92 },
];

const experience = [
  {
    year: "2023 - Present",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    description:
      "Leading development of scalable web applications and mentoring junior developers.",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    year: "2021 - 2023",
    title: "Frontend Developer",
    company: "StartupX",
    description:
      "Built responsive user interfaces and improved user experience across multiple products.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    year: "2020 - 2021",
    title: "Junior Developer",
    company: "WebStudio",
    description:
      "Developed client websites and learned modern web development practices.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

export default function AboutPage() {
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
                About me
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                I'm a passionate full-stack developer with a love for creating
                beautiful, functional, and user-centered digital experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sf-pro-display font-light mb-6">
                  My journey
                </h2>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>
                    My journey into web development began during my computer
                    science studies, where I discovered my passion for creating
                    digital solutions that make a real difference in people's
                    lives.
                  </p>
                  <p>
                    Over the years, I've had the privilege of working with
                    amazing teams and clients, building everything from simple
                    landing pages to complex enterprise applications.
                  </p>
                  <p>
                    I believe in continuous learning and staying up-to-date with
                    the latest technologies and best practices in web
                    development.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">YN</span>
                  </div>
                </div>
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

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold sf-pro-display">
                        {job.title}
                      </h3>
                      <p className="text-blue-400 font-medium">{job.company}</p>
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
            ))}
          </div>
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
