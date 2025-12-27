"use client";

import Image from "next/image";
import { TrendingUp, Users, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
// No data imports; use hardcoded projects

export default function SuccessStoriesSection() {
  const projects = [
    {
      id: "mobile-fb",
      title: "Mobile-FB",
      type: "Mobile App",
      category: ["Mobile", "Full-Stack"],
      shortDescription:
        "A comprehensive full-stack social media application that replicates core Facebook functionality on mobile devices.",
      displayDate: "April 2024",
      image: "https://i.imgur.com/CFZvp5T.png",
      techStack: [
        "React Native",
        "GraphQL",
        "Apollo Client",
        "Node.js",
        "MongoDB",
        "Redis",
        "Expo",
      ],
    },
    {
      id: "chatapp",
      title: "ChatApp",
      type: "Web App",
      category: ["Web", "Full-Stack"],
      shortDescription:
        "Real-time messaging application built with React and Socket.IO, featuring live chat functionality and user presence indicators.",
      displayDate: "February 2024",
      image:
        "https://raw.githubusercontent.com/tobangado69/ChatApp/main/assets/home.png",
      techStack: [
        "React",
        "Socket.IO",
        "Express",
        "PostgreSQL",
        "Sequelize",
        "Tailwind CSS",
      ],
    },
    {
      id: "grammedia-clone",
      title: "Grammedia Clone",
      type: "E-commerce",
      category: ["Web", "Full-Stack"],
      shortDescription:
        "A comprehensive e-commerce web application that replicates modern online bookstore functionality.",
      displayDate: "2024",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      techStack: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Tailwind CSS",
        "Infinite Scroll",
      ],
    },
  ] as const;

  // Map projects to success stories format
  const successStories = projects.map((project, index) => ({
    id: project.id,
    title: project.title,
    company: project.type,
    role: project.category.join(", "),
    description: project.shortDescription,
    metrics: project.displayDate,
    image: project.image,
    icon:
      project.id === "mobile-fb"
        ? TrendingUp
        : project.id === "chatapp"
        ? Users
        : BarChart3,
    color:
      project.id === "mobile-fb"
        ? "from-blue-500/20 to-purple-600/20"
        : project.id === "chatapp"
        ? "from-purple-500/20 to-pink-600/20"
        : "from-orange-500/20 to-red-600/20",
    technologies: project.techStack,
    period: project.displayDate,
  }));
  return (
    <section className="pt-32 pb-32">
      <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light">
            Featured Projects
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Showcasing modern development with practical applications built
            using cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Link key={story.id} href="/projects">
              <div className="success-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div
                  className={`aspect-video bg-gradient-to-br ${story.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent card-gradient"></div>
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover card-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-black/50 glass-effect rounded-full text-xs font-medium">
                      Case Study
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center">
                        <story.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold sf-pro-display">
                          {story.company}
                        </h3>
                        <p className="text-sm text-white/70">{story.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 card-content">
                  <h4 className="text-xl font-semibold sf-pro-display mb-4">
                    {story.title}
                  </h4>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {story.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">{story.metrics}</p>
                        <p className="text-xs text-white/50">Key Achievement</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <span className="mr-2">View All Projects</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Stats Section with Counter Animation */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="lg:text-4xl sf-pro-display counter text-3xl font-light text-neutral-50 mb-2">
              50+
            </div>
            <div className="text-white/60">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="lg:text-4xl sf-pro-display counter text-3xl font-light text-neutral-50 mb-2">
              99.9%
            </div>
            <div className="text-white/60">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="lg:text-4xl sf-pro-display counter text-3xl font-light text-neutral-50 mb-2">
              3+
            </div>
            <div className="text-white/60">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="lg:text-4xl sf-pro-display counter text-3xl font-light text-neutral-50 mb-2">
              Mon - Sat 9:00 - 17:00 WIB
            </div>
            <div className="text-white/60">(Response Time)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
