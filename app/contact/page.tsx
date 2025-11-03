"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// No data imports; use hardcoded data

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "rohimjoy70@gmail.com",
    description: "Send me an email anytime",
    href: "mailto:rohimjoy70@gmail.com",
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

export default function ContactPage() {
  const contactData = {
    hero: {
      heading: "Let's Work Together",
      description:
        "Ready to bring your ideas to life? Let's discuss your project and create something exceptional.",
    },
    contactInformation: {
      heading: "Get In Touch",
      subheading:
        "Choose your preferred way to reach out. I'm always excited to discuss new projects and opportunities.",
      methods: [
        {
          type: "email",
          title: "Email",
          value: "rohimjoy70@gmail.com",
          link: "mailto:rohimjoy70@gmail.com",
        },
        {
          type: "location",
          title: "Location",
          value: "Surabaya, Indonesia",
          link: "#",
        },
        {
          type: "availability",
          title: "Availability",
          value: "Mon - Sat, 9:00 - 17:00 WIB",
          link: "#",
        },
      ],
    },
    professionalProfiles: {
      heading: "Professional Profiles",
      profiles: [
        { platform: "LinkedIn", url: "https://linkedin.com/in/tobangado" },
        { platform: "GitHub", url: "https://github.com/tobangado69" },
        { platform: "Telegram", url: "https://t.me/Tobangado70" },
      ],
    },
    contactForm: {
      heading: "Send Me a Message",
      description:
        "Fill out the form below and I'll get back to you within 24 hours. Let's discuss your project requirements and goals.",
    },
    faq: {
      heading: "Frequently Asked Questions",
      subheading: "Quick answers to common questions about working together.",
      questions: [
        {
          question: "How quickly can you start my project?",
          answer:
            "I typically respond within 24 hours. After scope alignment, I can often start within 1-2 weeks depending on workload.",
        },
        {
          question: "Do you offer free consultations?",
          answer:
            "Yes. Initial consultation to understand your needs and propose approaches is free.",
        },
        {
          question: "What's your development process?",
          answer:
            "Discovery → Planning → Development → Deployment, with regular updates.",
        },
      ],
    },
  } as const;

  // Map contact info data to component format using data from JSON
  const contactInfo = contactData.contactInformation.methods.map((method) => ({
    icon:
      method.type === "email"
        ? Mail
        : method.type === "location"
        ? MapPin
        : method.type === "availability"
        ? Clock
        : Mail,
    title: method.title,
    value: method.value,
    description:
      method.type === "email"
        ? "Send me an email anytime"
        : method.type === "location"
        ? "Available for local meetings"
        : "Response Time",
    href: method.link || "#",
  }));

  // Map professional profiles from JSON
  const socialProfiles = contactData.professionalProfiles.profiles.map(
    (profile) => ({
      name: profile.platform,
      href: profile.url,
      icon:
        profile.platform === "LinkedIn"
          ? Linkedin
          : profile.platform === "GitHub"
          ? Github
          : MessageCircle, // Telegram icon
    })
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

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
    setErrorMessage("");

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setFormStatus("error");
      setErrorMessage(
        "Please fill in all required fields (Name, Email, Subject, Message)"
      );
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setFormStatus("sending");

    try {
      // Use environment variable - must be set in .env.local
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        console.error("Web3Forms access key is not configured");
        setFormStatus("error");
        setErrorMessage(
          "Form submission is not configured. Please contact the site administrator."
        );
        return;
      }

      // Format subject - ensure it's meaningful
      const subjectText =
        formData.subject.trim() || `Contact Form: ${formData.name.trim()}`;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: subjectText,
          message: formData.message.trim(),
          from_name: formData.name.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrorMessage("");
      } else {
        console.error("Form submission error:", data);
        setFormStatus("error");
        setErrorMessage(
          data.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    }
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
                {contactData.hero.heading}
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                {contactData.hero.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sf-pro-display font-light mb-6">
                {contactData.contactInformation.heading}
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                {contactData.contactInformation.subheading}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 text-center"
                {...({} as any)}
              >
                <a href={info.href} className="block">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold sf-pro-display mb-3">
                    {info.title}
                  </h3>
                  <p className="text-blue-400 font-medium mb-3 text-lg">
                    {info.value}
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {info.description}
                  </p>
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
                {contactData.contactForm.heading}
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                {contactData.contactForm.description}
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
              {contactData.professionalProfiles.heading}
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Stay updated with my latest projects and thoughts on development.
            </p>

            <div className="flex justify-center gap-6">
              {socialProfiles.map((social, index) => (
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
              {contactData.faq.heading}
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              {contactData.faq.subheading}
            </p>
          </motion.div>

          <div className="space-y-8">
            {contactData.faq.questions.map((faq, index) => (
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
