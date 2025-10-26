"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "rohimjoy70@gmail.com",
    description: "Send me an email anytime",
    href: "mailto:rohimjoy70@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (234) 567-890",
    description: "Call me for urgent matters",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Surabaya, Indonesia",
    description: "Available for local meetings",
    href: "#",
  },
  {
    icon: Clock,
    title: "Availability",
    value: "Mon - Fri, 9AM - 6PM",
    description: "Pacific Time Zone",
    href: "#",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/tobangado69",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/tobangado",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/itsme.rohim/",
    icon: Instagram,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

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
                Get In Touch
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? Let's discuss how we can work together
                to bring your ideas to life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sf-pro-display font-light mb-6">
                Let's Connect
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Choose your preferred way to reach out. I'm always excited to
                hear about new projects.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="group p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 text-center"
                {...({} as any)}
              >
                <a href={info.href} className="block">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold sf-pro-display mb-2">
                    {info.title}
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">{info.value}</p>
                  <p className="text-sm text-white/60">{info.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/10 to-white/5 glass-effect border border-white/20 rounded-3xl p-8 md:p-12"
            {...({} as any)}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sf-pro-display font-light mb-6">
                Send a Message
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Fill out the form below and I'll get back to you within 24
                hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-white/60">* Required fields</div>
                <motion.button
                  type="submit"
                  disabled={formStatus === "sending"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 ${
                    formStatus === "sending"
                      ? "bg-white/20 text-white/50 cursor-not-allowed"
                      : "bg-white text-black hover:bg-white/90"
                  }`}
                  {...({} as any)}
                >
                  {formStatus === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white/70 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Message Sent!
                    </>
                  ) : formStatus === "error" ? (
                    <>
                      <AlertCircle className="h-5 w-5" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
            {...({} as any)}
          >
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Follow Me
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Stay updated with my latest projects and thoughts on development.
            </p>

            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl flex items-center justify-center hover:border-white/40 transition-all duration-300"
                  {...({} as any)}
                >
                  <social.icon className="w-8 h-8 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            {...({} as any)}
          >
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Common questions about my services and process.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on complexity. A simple website takes 2-4 weeks, while complex applications can take 2-6 months. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                question:
                  "Do you provide ongoing support after project completion?",
                answer:
                  "Yes! I offer 3-6 months of free support for bug fixes and minor updates. For ongoing maintenance and new features, I provide flexible support packages.",
              },
              {
                question: "What technologies do you work with?",
                answer:
                  "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various databases. I also work with mobile development using React Native and cloud platforms like AWS and Vercel.",
              },
              {
                question: "Do you work with clients outside the US?",
                answer:
                  "Absolutely! I work with clients worldwide. I'm experienced in remote collaboration and can accommodate different time zones for meetings and communication.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl"
                {...({} as any)}
              >
                <h3 className="text-lg font-semibold sf-pro-display mb-3">
                  {faq.question}
                </h3>
                <p className="text-white/60 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
