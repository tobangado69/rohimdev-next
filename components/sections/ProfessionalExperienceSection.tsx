"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
// No data imports; use hardcoded data below

export default function ProfessionalExperienceSection() {
  const workExperience = [
    {
      id: "varnion-current",
      title: "Staff Infrastructure",
      company: "Varnion Technology Semesta",
      description:
        "Leading network infrastructure projects for hospitality industry clients, where I've successfully reduced connectivity issues by 40% through systematic monitoring and optimization. I also develop internal tools and applications to streamline our operations, combining my infrastructure expertise with modern development practices.",
      achievements: [
        { metric: "40%", description: "reduction in connectivity issues" },
      ],
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      status: "current",
      technologies: ["Mikrotik", "Ubiquiti", "Network Design"],
      period: { display: "Jan 2025 - Present" },
    },
    {
      id: "telkom-previous",
      title: "Provisioning Technician",
      company: "PT Telkom Indonesia",
      description:
        "Managed fiber optic installations and internet service provisioning. Reduced repeat visits by 25% through quality workmanship and customer education.",
      achievements: [
        { metric: "25%", description: "reduction in repeat visits" },
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      status: "previous",
      technologies: ["Fiber Optic", "OTDR", "Customer Service"],
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
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="slide-up stagger-2 text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light"
            {...({} as any)}
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="slide-up stagger-3 text-xl text-white/60 max-w-2xl mx-auto"
            {...({} as any)}
          >
            4+ years of excellence spanning telecommunications and software
            development
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceStories.map((story, index) => (
            <Link key={story.id} href="/work">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="slide-up stagger-4 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 cursor-pointer hover:scale-105"
                {...({} as any)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
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
                      Case Study
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
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20"
                      {...({} as any)}
                    >
                      <ArrowRight className="w-4 h-4 text-white/80" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="slide-up stagger-5 text-center mt-16"
          {...({} as any)}
        >
          <Link href="/work">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              {...({} as any)}
            >
              View Full Experience
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
