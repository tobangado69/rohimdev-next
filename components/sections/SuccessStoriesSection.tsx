"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getProjects } from "@/lib/data";

export default function SuccessStoriesSection() {
  const projects = getProjects();

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
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="slide-up stagger-2 text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light"
            {...({} as any)}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="slide-up stagger-3 text-xl text-white/60 max-w-2xl mx-auto"
            {...({} as any)}
          >
            Showcasing modern development with practical applications built
            using cutting-edge technologies
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Link key={story.id} href="/projects">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="fade-in stagger-3 success-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300 hover:scale-105"
                {...({} as any)}
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${story.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent card-gradient"></div>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover card-image"
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
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
          {...({} as any)}
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <span className="mr-2">View All Projects</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Stats Section with Counter Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          {...({} as any)}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
