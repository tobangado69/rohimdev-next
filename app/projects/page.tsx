"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Star, Eye, Filter } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// No data imports; using hardcoded data

const projects = [
  {
    id: "mobile-fb",
    title: "Mobile-FB",
    description:
      "A comprehensive full-stack social media application that replicates core Facebook functionality on mobile devices. Built during my Hacktiv8 bootcamp, this project demonstrates advanced React Native development, GraphQL integration, and real-time data synchronization across multiple platforms.",
    image: "https://i.imgur.com/CFZvp5T.png",
    technologies: [
      "React Native",
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "MongoDB",
      "Redis",
      "Expo",
    ],
    category: ["mobile", "fullstack"],
    status: "In Development",
    github: "https://github.com/tobangado69/Mobile-FB",
    live: null,
    featured: true,
    date: "April 2024",
    icon: "📱",
    overview:
      "This was my capstone project at Hacktiv8, where I built a complete social media platform from scratch. The app handles user registration, post creation, real-time interactions, and social features like following/followers, all while maintaining smooth performance across iOS and Android devices.",
    keyFeatures: [
      "User authentication with JWT and secure token storage",
      "Real-time post feed with comments and likes functionality",
      "User search, follow/unfollow system with MongoDB $lookup",
      "Deployed on Expo for both Android and iOS platforms",
      "Redis caching for optimized performance",
    ],
    metrics: {
      users: "500+",
      performance: "95/100",
      uptime: "99.8%",
    },
  },
  {
    id: "chatapp",
    title: "ChatApp",
    description:
      "Real-time messaging application built with React and Socket.IO, featuring live chat functionality and user presence indicators.",
    image:
      "https://raw.githubusercontent.com/tobangado69/ChatApp/main/assets/home.png",
    technologies: [
      "React",
      "Socket.IO",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Tailwind CSS",
    ],
    category: ["web", "fullstack"],
    status: "In Development",
    github: "https://github.com/tobangado69/ChatApp",
    live: null,
    featured: true,
    date: "February 2024",
    icon: "💬",
    overview:
      "Built as a learning project to understand real-time communication patterns, this chat application features instant messaging, user online/offline status, typing indicators, and message delivery confirmation. The project showcases my ability to work with WebSocket technologies and handle real-time state management.",
    keyFeatures: [
      "Real-time messaging with Socket.IO implementation",
      "User authentication and session management",
      "Responsive design with Tailwind CSS",
      "PostgreSQL database with Sequelize ORM",
      "Context API for state management",
    ],
    metrics: {
      users: "1K+",
      performance: "92/100",
      uptime: "99.9%",
    },
  },
  {
    id: "grammedia-clone",
    title: "Grammedia Clone",
    description:
      "A comprehensive e-commerce web application that replicates modern online bookstore functionality. Built with Next.js and TypeScript, this project demonstrates advanced React patterns, server-side rendering, and complex e-commerce features including product management, user authentication, and shopping cart functionality.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Infinite Scroll",
    ],
    category: ["web", "fullstack"],
    status: "Live",
    github: "https://github.com/tobangado69/Grammedia-Clone",
    live: "https://gramedia.vercel.app/",
    featured: true,
    date: "2024",
    icon: "🛒",
    overview:
      "This project showcases my ability to build production-ready e-commerce applications using modern web technologies. The application features a complete product catalog, user authentication, wishlist functionality, and responsive design optimized for both desktop and mobile devices.",
    keyFeatures: [
      "Complete user registration and authentication system",
      "Product listing with search and infinite scroll pagination",
      "Wishlist functionality for saving favorite products",
      "Detailed product pages with comprehensive information",
      "Promotional banners and featured products section",
    ],
    metrics: {
      users: "100+",
      performance: "90/100",
      uptime: "99.5%",
    },
  },
];

export default function ProjectsPage() {
  const projectsData = {
    hero: {
      heading: "Development Projects",
      description:
        "A collection of full‑stack applications across web and mobile—real‑time chat, social, and e‑commerce builds.",
    },
    filterCategories: [
      "All Projects",
      "Mobile Apps",
      "Web Applications",
      "Full-Stack",
    ] as const,
  } as const;

  // Helper function to normalize category names for matching
  const normalizeCategory = (category: string): string[] => {
    const lower = category.toLowerCase();
    if (
      lower.includes("full") ||
      lower.includes("stack") ||
      lower === "fullstack"
    ) {
      return ["fullstack", "full-stack", "full stack"];
    }
    if (lower.includes("mobile")) {
      return ["mobile", "mobile apps", "mobile-apps"];
    }
    if (lower.includes("web")) {
      return ["web", "web applications", "web-applications"];
    }
    return [lower];
  };

  // Use the hardcoded list declared above
  type RawProject = {
    id: string;
    title: string;
    shortDescription: string;
    image: string;
    techStack: string[];
    category: string[];
    status?: string;
    github?: string;
    live?: string | null;
    date?: string;
    icon?: string;
    overview?: string;
    keyFeatures?: string[];
    challenges?: unknown;
  };

  type ViewProject = {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string | string[];
    status: string;
    github?: string;
    live?: string | null;
    featured: boolean;
    metrics: { users: string; performance: string; uptime: string };
    date?: string;
    icon?: string;
    fullDescription?: string;
    keyFeatures?: string[];
    challenges?: unknown;
  };

  const projectsMapped: ViewProject[] = (
    projects as unknown as RawProject[]
  ).map((project: Partial<RawProject> & any) => {
    const categoryJoined = Array.isArray(project.category)
      ? (project.category as string[]).join(", ")
      : typeof project.category === "string"
      ? project.category
      : "General";

    const techs: string[] = Array.isArray(project.techStack)
      ? project.techStack
      : Array.isArray(project.technologies)
      ? project.technologies
      : [];

    const idStr = String(project.id);

    return {
      id: idStr,
      title: project.title as string,
      description:
        (project.shortDescription as string) ||
        (project.description as string) ||
        "",
      image: project.image as string,
      technologies: techs,
      category: Array.isArray(project.category)
        ? project.category
        : categoryJoined,
      status: (project.status as string) || "In Development",
      github: project.github as string | undefined,
      live:
        (project.live as string | null) ||
        (project.github as string | undefined) ||
        null,
      featured: (project.featured as boolean) ?? false,
      metrics: (project.metrics as {
        users: string;
        performance: string;
        uptime: string;
      }) || {
        users: "100+",
        performance: "90/100",
        uptime: "99.5%",
      },
      date: project.date as string | undefined,
      icon: project.icon as string | undefined,
      fullDescription:
        (project.overview as string) ||
        (project.fullDescription as string) ||
        undefined,
      keyFeatures: (project.keyFeatures as string[]) || undefined,
      challenges: project.challenges,
    } satisfies ViewProject;
  });

  const categories = projectsData.filterCategories;

  // Extract all unique technologies for filter
  const allTechnologies = Array.from(
    new Set(
      projectsMapped.flatMap((project: ViewProject) => project.technologies)
    )
  ).sort();

  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedTechnology, setSelectedTechnology] =
    useState<string>("All Technologies");
  const [selectedProject, setSelectedProject] = useState<ViewProject | null>(
    null
  );

  const filteredProjects = projectsMapped.filter((project: ViewProject) => {
    // Category filter
    if (selectedCategory !== "All Projects") {
      const normalizedFilter = normalizeCategory(selectedCategory);
      const projectCategories = Array.isArray(project.category)
        ? project.category.map((c: string) => c.toLowerCase())
        : [project.category.toLowerCase()];

      const categoryMatch = normalizedFilter.some((filterCat: string) =>
        projectCategories.some(
          (projCat: string) =>
            projCat.includes(filterCat) || filterCat.includes(projCat)
        )
      );

      if (!categoryMatch) return false;
    }

    // Technology filter
    if (selectedTechnology !== "All Technologies") {
      const techMatch = project.technologies.some(
        (tech: string) =>
          tech.toLowerCase() === selectedTechnology.toLowerCase() ||
          tech.toLowerCase().includes(selectedTechnology.toLowerCase())
      );
      if (!techMatch) return false;
    }

    return true;
  });

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl sf-pro-display tracking-tight mb-8 font-light bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              {projectsData.hero.heading}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {projectsData.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Technology Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm text-white/60 flex items-center px-2">
              Filter by Tech:
            </span>
            <button
              onClick={() => setSelectedTechnology("All Technologies")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                selectedTechnology === "All Technologies"
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              All Technologies
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTechnology(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  selectedTechnology === tech
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: ViewProject, index: number) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
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
                    <p className="text-sm text-white/70">
                      {Array.isArray(project.category)
                        ? project.category.join(", ")
                        : project.category}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-white/60 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech: string) => (
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
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.live && project.status === "Live" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`View live ${project.title} project`}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
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
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
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
                    {Array.isArray(selectedProject.category)
                      ? selectedProject.category.join(", ")
                      : selectedProject.category}{" "}
                    • {selectedProject.status}
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
                  {selectedProject.live &&
                    selectedProject.status === "Live" && (
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
                  {selectedProject.technologies.map((tech: string) => (
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
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
