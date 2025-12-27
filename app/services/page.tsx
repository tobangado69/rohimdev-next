"use client";

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
// No data imports; use hardcoded data

export default function ServicesPage() {
  const servicesData = {
    hero: {
      heading: "Full‑Stack Development Services",
      description:
        "Transform ideas into scalable, production‑ready applications across web and mobile.",
    },
    pricingPlans: {
      packages: [
        {
          name: "Starter",
          subtitle: "Perfect for small projects and MVPs",
          priceRange: "$2,000 - $8,000",
          timeline: "4-8 weeks delivery",
          features: [
            "Frontend or Backend development",
            "Up to 5 pages/screens",
            "Basic database integration",
            "Responsive design",
            "Basic deployment",
          ],
          highlighted: false,
        },
        {
          name: "Professional",
          subtitle: "Complete full-stack applications",
          priceRange: "$8,000 - $20,000",
          timeline: "8-16 weeks delivery",
          features: [
            "Full-stack web or mobile app",
            "Custom features & integrations",
            "User authentication & profiles",
            "API development & documentation",
            "Production deployment & monitoring",
          ],
          highlighted: true,
        },
        {
          name: "Enterprise",
          subtitle: "Large-scale applications & platforms",
          priceRange: "$20,000+",
          timeline: "16+ weeks delivery",
          features: [
            "Complex multi-platform solutions",
            "Advanced integrations & APIs",
            "Real-time features & chat systems",
            "Performance optimization & scaling",
            "Ongoing support & maintenance",
          ],
          highlighted: false,
        },
      ],
    },
  } as const;

  const coreServices = {
    services: [
      {
        id: "frontend",
        title: "Frontend Development",
        description:
          "Transform your ideas into stunning, high-performance web applications using React and Next.js.",
        features: [
          "React & Next.js applications",
          "Responsive design & mobile-first approach",
          "Modern UI/UX with Tailwind CSS",
          "Performance optimization & SEO",
          "Progressive Web Apps (PWA)",
        ],
        technologies: ["React", "Next.js", "Tailwind", "TypeScript"],
        startingPrice: "$2,000",
      },
      {
        id: "backend",
        title: "Backend Development",
        description:
          "Build powerful, scalable server-side solutions using Golang, Node.js, and Nest.js.",
        features: [
          "RESTful APIs & GraphQL servers",
          "Database design (PostgreSQL, MongoDB)",
          "Authentication & authorization systems",
          "Real-time features with Socket.IO",
          "Cloud deployment & scaling",
        ],
        technologies: ["Golang", "Node.js", "Nest.js", "GraphQL", "PostgreSQL"],
        startingPrice: "$2,500",
      },
      {
        id: "mobile",
        title: "Mobile Development",
        description:
          "Create powerful mobile applications that work seamlessly across iOS and Android using React Native.",
        features: [
          "Cross-platform React Native apps",
          "Native performance & user experience",
          "App Store & Play Store deployment",
          "Push notifications & offline support",
          "Social features & real-time chat",
        ],
        technologies: ["React Native", "Expo", "Firebase", "JavaScript"],
        startingPrice: "$3,500",
      },
      {
        id: "infrastructure",
        title: "Infrastructure Services",
        description:
          "Leverage my telecommunications background for robust network design, monitoring, and optimization.",
        features: [
          "Network design & configuration (Mikrotik, Ubiquiti)",
          "System monitoring & performance optimization",
          "Fiber optic installation & testing (OTDR, OPM)",
          "Structured cabling & server rack setup",
          "Troubleshooting & issue resolution",
        ],
        technologies: ["Mikrotik", "Ubiquiti", "OTDR", "Fiber Optic"],
        startingPrice: "$1,500",
      },
    ],
  } as const;

  const testimonials = {
    heading: "Client Testimonials",
    description: "What clients say about working with me.",
    items: [
      {
        name: "Sarah Chen",
        role: "CEO, TechStart",
        content:
          "Working with Abdul was an absolute pleasure. The attention to detail and technical expertise exceeded our expectations.",
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
          "Professional, reliable, and incredibly talented. I would definitely recommend Abdul's services to anyone.",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      },
    ],
  } as const;

  // Map services data to component format
  const services = coreServices.services.map((service) => ({
    icon:
      service.id === "frontend"
        ? Code
        : service.id === "backend"
        ? Database
        : service.id === "mobile"
        ? Smartphone
        : service.id === "infrastructure"
        ? Zap
        : Code,
    title: service.title,
    description: service.description,
    features: service.features,
    technologies: service.technologies,
    startingPrice: service.startingPrice,
  }));

  // Use pricing plans from data
  const pricingPlans = servicesData.pricingPlans.packages.map((plan) => ({
    name: plan.name,
    price: plan.priceRange,
    period: plan.timeline,
    description: plan.subtitle,
    features: plan.features,
    popular: plan.highlighted,
  }));
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl sf-pro-display tracking-tight mb-8 font-light bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              {servicesData.hero.heading}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {servicesData.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              What I Offer
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A full range of development services tailored to your specific
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Transparent pricing for web development projects. All plans
              include source code and documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
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
                  className={`w-full py-4 rounded-full font-semibold transition-all cursor-pointer ${
                    plan.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  Get Started
                  <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              {testimonials.heading}
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              {testimonials.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.items.map((testimonial) => (
              <div
                key={testimonial.name}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 glass-effect border border-white/20 rounded-3xl p-16">
            <h2 className="text-4xl sf-pro-display font-light mb-6">
              Ready to start your project?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all flex items-center gap-2 justify-center cursor-pointer">
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all cursor-pointer">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
