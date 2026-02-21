export const SITE = {
  name: "rohimdev.com",
  tagline: "rohim.dev",
  username: "@rohimdev",
  description:
    "Full-stack engineer helping startups and teams build scalable, secure, and production-ready web applications.",
  year: 2026,
  siteUrl: "https://rohimdev.com",
} as const;

export const PROFILE = {
  name: "Abdul Rohim",
  role: "Full-Stack Developer",
  location: "Surabaya, Indonesia",
  email: "rohimjoy70@gmail.com",
  avatar: "/images/profile.png",
  bio: "With 2+ years of experience, I specialize in building scalable applications using React, Next.js, Node.js, and Golang. From telecommunications to fullstack—I craft solutions that bridge systems and deliver results. I help startups and teams ship production-ready web applications.",
  social: {
    linkedin: "https://www.linkedin.com/in/tobangado/",
    github: "https://github.com/tobangado69",
    upwork: "https://www.upwork.com/freelancers/abdulr1422",
    x: "https://x.com/AbdulRohim74845",
    resume: "https://drive.google.com/file/d/17LLuWo5ijpn32DZZ6Nvk_JsAFOiwiptm/view", // TODO: Replace with actual resume URL
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
