"use client";

import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Code,
  Palette,
  Smartphone,
  Database,
  Zap,
  Users,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    features: [
      "Responsive design",
      "Performance optimization",
      "SEO-friendly code",
      "Cross-browser compatibility",
      "Accessibility compliance",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "React Native development",
      "Native iOS/Android apps",
      "App store optimization",
      "Push notifications",
      "Offline functionality",
    ],
    technologies: ["React Native", "Expo", "Swift", "Kotlin", "Firebase"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive user interfaces that provide exceptional user experiences.",
    features: [
      "User research & analysis",
      "Wireframing & prototyping",
      "Visual design",
      "Design systems",
      "User testing",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Scalable server-side solutions and API development for your applications.",
    features: [
      "RESTful API design",
      "Database design & optimization",
      "Authentication & security",
      "Cloud deployment",
      "Performance monitoring",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed up your applications and improve user experience through optimization.",
    features: [
      "Code optimization",
      "Bundle size reduction",
      "Image optimization",
      "Caching strategies",
      "CDN implementation",
    ],
    technologies: ["Webpack", "Vite", "CloudFlare", "Redis", "Lighthouse"],
  },
  {
    icon: Users,
    title: "Consulting",
    description:
      "Technical guidance and architecture decisions for your development projects.",
    features: [
      "Technical architecture review",
      "Code quality assessment",
      "Technology recommendations",
      "Team mentoring",
      "Project planning",
    ],
    technologies: [
      "Architecture",
      "Best Practices",
      "Code Review",
      "Mentoring",
      "Planning",
    ],
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "per project",
    description: "Perfect for small projects and MVPs",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic animations",
      "Contact form",
      "SEO optimization",
      "2 weeks delivery",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$5,000",
    period: "per project",
    description: "Ideal for growing businesses",
    features: [
      "Up to 15 pages",
      "Custom animations",
      "CMS integration",
      "User authentication",
      "Analytics setup",
      "4 weeks delivery",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "For large-scale applications",
    features: [
      "Unlimited pages",
      "Advanced features",
      "Custom integrations",
      "Scalable architecture",
      "Performance optimization",
      "6+ weeks delivery",
      "6 months support",
      "Priority support",
    ],
    popular: false,
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart",
    content:
      "Working with this developer was an absolute pleasure. The attention to detail and technical expertise exceeded our expectations.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager, InnovateCorp",
    content:
      "The project was delivered on time and within budget. The code quality and documentation were outstanding.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Emily Johnson",
    role: "Founder, DesignStudio",
    content:
      "Professional, reliable, and incredibly talented. I would definitely recommend their services to anyone.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export default function ServicesPage() {
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
              Services
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Comprehensive development services to bring your ideas to life
              with modern technologies and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              What I Offer
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A full range of development services tailored to your specific
              needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-semibold sf-pro-display mb-4">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold sf-pro-display mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-white/60"
                      >
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold sf-pro-display mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
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

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Transparent pricing for web development projects. All plans
              include source code and documentation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative p-8 rounded-3xl ${
                  plan.popular
                    ? "bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-2 border-blue-500/30"
                    : "bg-gradient-to-br from-white/5 to-transparent border border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold sf-pro-display mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                  </div>
                  <div className="text-white/60">{plan.period}</div>
                  <p className="text-sm text-white/60 mt-4">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  Get Started
                  <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              What clients say about working with me.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold sf-pro-display">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/10 to-white/5 glass-effect border border-white/20 rounded-3xl p-16"
          >
            <h2 className="text-4xl sf-pro-display font-light mb-6">
              Ready to start your project?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all flex items-center gap-2 justify-center"
              >
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
