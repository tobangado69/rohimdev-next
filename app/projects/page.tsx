"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Star, Eye, Filter } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    category: "Full Stack",
    status: "Live",
    github: "https://github.com/yourname/ecommerce-platform",
    live: "https://ecommerce-demo.com",
    featured: true,
    metrics: {
      users: "10K+",
      performance: "98/100",
      uptime: "99.9%",
    },
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description:
      "A comprehensive analytics dashboard for SaaS businesses with real-time data visualization and reporting capabilities.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS", "Vercel"],
    category: "Frontend",
    status: "Live",
    github: "https://github.com/yourname/saas-dashboard",
    live: "https://dashboard-demo.com",
    featured: true,
    metrics: {
      users: "5K+",
      performance: "95/100",
      uptime: "99.8%",
    },
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "A React Native mobile application for banking with secure authentication, transaction history, and real-time notifications.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Expo"],
    category: "Mobile",
    status: "In Development",
    github: "https://github.com/yourname/banking-app",
    live: null,
    featured: false,
    metrics: {
      users: "2K+",
      performance: "92/100",
      uptime: "99.5%",
    },
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Framer Motion, featuring smooth animations and interactive elements.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    technologies: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Vercel",
    ],
    category: "Frontend",
    status: "Live",
    github: "https://github.com/yourname/portfolio",
    live: "https://yourname.dev",
    featured: false,
    metrics: {
      users: "1K+",
      performance: "100/100",
      uptime: "99.9%",
    },
  },
  {
    id: 5,
    title: "API Gateway",
    description:
      "A microservices API gateway built with Node.js and Express, handling authentication, rate limiting, and request routing.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    technologies: ["Node.js", "Express", "Redis", "Docker", "AWS"],
    category: "Backend",
    status: "Live",
    github: "https://github.com/yourname/api-gateway",
    live: "https://api-gateway.com",
    featured: false,
    metrics: {
      users: "50K+",
      performance: "99/100",
      uptime: "99.9%",
    },
  },
  {
    id: 6,
    title: "Task Management Tool",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Node.js", "Socket.io", "MongoDB", "Heroku"],
    category: "Full Stack",
    status: "Live",
    github: "https://github.com/yourname/task-manager",
    live: "https://taskmanager-demo.com",
    featured: false,
    metrics: {
      users: "3K+",
      performance: "94/100",
      uptime: "99.7%",
    },
  },
];

const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl sf-pro-display tracking-tight mb-8 font-light bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills and passion for
              creating innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    {project.featured && (
                      <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-yellow-400" />
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold sf-pro-display mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70">{project.category}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-white/60 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">
                        {project.metrics.users}
                      </div>
                      <div className="text-xs text-white/60">users</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-semibold sf-pro-display mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-blue-400 font-medium">
                    {selectedProject.category} • {selectedProject.status}
                  </p>
                </div>
                <div className="flex gap-2">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-white/60 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-white/5 rounded-2xl">
                  <div className="text-2xl font-bold text-white">
                    {selectedProject.metrics.users}
                  </div>
                  <div className="text-sm text-white/60">Active Users</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl">
                  <div className="text-2xl font-bold text-white">
                    {selectedProject.metrics.performance}
                  </div>
                  <div className="text-sm text-white/60">Performance Score</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl">
                  <div className="text-2xl font-bold text-white">
                    {selectedProject.metrics.uptime}
                  </div>
                  <div className="text-sm text-white/60">Uptime</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold sf-pro-display mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
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
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </main>
  );
}
