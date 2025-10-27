"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Globe,
  Brain,
  Layers,
  Users,
  Code,
  Smartphone,
  Database,
  Palette,
} from "lucide-react";
import { getServices } from "@/lib/data";

const features = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description:
      "Optimized code and modern frameworks ensure blazing fast load times and smooth user experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Built with security best practices, including data encryption and secure authentication systems.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Responsive design that works perfectly across all devices and screen sizes worldwide.",
  },
  {
    icon: Brain,
    title: "Smart Solutions",
    description:
      "AI-powered features and intelligent automation to enhance user experience and efficiency.",
  },
  {
    icon: Layers,
    title: "Modern Stack",
    description:
      "Built with cutting-edge technologies including React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Users,
    title: "User Centered",
    description:
      "Every design decision is made with the end user in mind, ensuring intuitive and accessible interfaces.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Well-structured, maintainable code following industry best practices and design patterns.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Mobile-first approach ensures your application looks and works great on all devices.",
  },
  {
    icon: Database,
    title: "Scalable Architecture",
    description:
      "Designed to handle growth with scalable database design and efficient data management.",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description:
      "Stunning visual design that captures attention while maintaining excellent usability.",
  },
];

export default function FeaturesSection() {
  const services = getServices();

  // Map services to features format
  const features = services.map((service) => ({
    icon:
      service.id === "frontend"
        ? Code
        : service.id === "backend"
        ? Database
        : service.id === "mobile"
        ? Smartphone
        : service.id === "infrastructure"
        ? Globe
        : Code,
    title: service.title,
    description: service.description,
  }));
  return (
    <section className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="slide-up stagger-2 text-4xl sm:text-5xl sf-pro-display tracking-tight mb-6 font-light"
            {...({} as any)}
          >
            Services I Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="slide-up stagger-3 text-xl text-white/60 max-w-2xl mx-auto"
            {...({} as any)}
          >
            Full-stack development expertise combining software development
            expertise with infrastructure knowledge
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500"
              {...({} as any)}
            >
              <div className="w-10 h-10 flex bg-neutral-50/5 border-neutral-50/20 border rounded-xl backdrop-blur-md items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold sf-pro-display mb-4 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
