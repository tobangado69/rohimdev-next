"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, ArrowRight } from "lucide-react";

const successStories = [
  {
    id: 1,
    title: "E-commerce Platform",
    company: "TechCorp Inc.",
    role: "Full-stack Developer",
    description:
      "Built a scalable e-commerce platform serving 10,000+ daily users with React, Node.js, and PostgreSQL.",
    metrics: "300% faster load times",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    icon: TrendingUp,
    color: "from-blue-500/20 to-purple-600/20",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    company: "StartupX",
    role: "Frontend Lead",
    description:
      "Led development of a comprehensive analytics dashboard used by 500+ businesses worldwide.",
    metrics: "10x user engagement",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    icon: Users,
    color: "from-purple-500/20 to-pink-600/20",
  },
  {
    id: 3,
    title: "Mobile App",
    company: "DataFlow Pro",
    role: "React Native Developer",
    description:
      "Developed a cross-platform mobile application with real-time data synchronization and offline capabilities.",
    metrics: "99.9% uptime achieved",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    icon: BarChart3,
    color: "from-orange-500/20 to-red-600/20",
  },
];

export default function SuccessStoriesSection() {
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
            Featured projects.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="slide-up stagger-3 text-xl text-white/60 max-w-2xl mx-auto"
            {...({} as any)}
          >
            A showcase of my recent work and the impact I've made for clients
            and companies.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="fade-in stagger-3 success-card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden"
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
          ))}
        </div>

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
              24/7
            </div>
            <div className="text-white/60">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
