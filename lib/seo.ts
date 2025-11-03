// SEO Configuration for Abdul Rohim Portfolio
// This file contains SEO constants and utilities

export const SEO_CONFIG = {
  // Site Information
  siteName: "Abdul Rohim - Portfolio",
  siteUrl: "https://rohimdev.com",
  siteDescription: "Professional full-stack developer with 4+ years of experience in React, Next.js, Node.js, and infrastructure management.",
  
  // Author Information
  author: {
    name: "Abdul Rohim",
    title: "Full-Stack Developer & Infrastructure Specialist",
    email: "abdulrohim.dev@gmail.com",
    location: "Indonesia",
    social: {
      github: "https://github.com/tobangado69",
      linkedin: "https://www.linkedin.com/in/tobangado",
      telegram: "https://t.me/Tobangado70",
    }
  },

  // Default Images
  defaultImage: "https://rohimdev.com/images/profile.png",
  ogImage: "https://rohimdev.com/og-image.jpg",
  
  // Keywords by Category
  keywords: {
    primary: [
      "fullstack developer",
      "react developer",
      "nextjs developer",
      "nodejs developer",
      "typescript developer",
      "javascript developer"
    ],
    secondary: [
      "mobile app developer",
      "react native developer",
      "infrastructure specialist",
      "network engineer",
      "portfolio",
      "web developer"
    ],
    location: [
      "indonesia developer",
      "remote developer",
      "freelance developer"
    ],
    technologies: [
      "graphql developer",
      "mongodb developer",
      "postgresql developer",
      "tailwind css developer",
      "framer motion developer"
    ]
  },

  // Page-specific SEO
  pages: {
    home: {
      title: "Abdul Rohim - Full-Stack Developer & Infrastructure Specialist",
      description: "Professional full-stack developer with 4+ years of experience in React, Next.js, Node.js, and infrastructure management. Specializing in modern web applications, mobile development, and network optimization.",
      keywords: ["fullstack developer", "react developer", "nextjs developer", "portfolio", "web developer"]
    },
    about: {
      title: "About Abdul Rohim - Full-Stack Developer Journey",
      description: "Learn about Abdul Rohim's journey from telecommunications engineer to full-stack developer. 4+ years of experience in infrastructure and modern web development.",
      keywords: ["about abdul rohim", "developer journey", "telecommunications engineer", "career transition"]
    },
    projects: {
      title: "Projects - Abdul Rohim's Portfolio",
      description: "Explore Abdul Rohim's portfolio of full-stack projects including React Native apps, real-time chat applications, and e-commerce platforms built with modern technologies.",
      keywords: ["abdul rohim projects", "react native projects", "nextjs projects", "fullstack projects"]
    },
    services: {
      title: "Services - Full-Stack Development & Infrastructure Solutions",
      description: "Professional full-stack development services including React, Next.js, Node.js, mobile apps, and infrastructure management. Custom web applications and network solutions.",
      keywords: ["fullstack development services", "react development services", "mobile app development", "infrastructure services"]
    },
    work: {
      title: "Work Experience - Abdul Rohim's Professional Journey",
      description: "Abdul Rohim's professional experience spanning telecommunications engineering at Telkom Indonesia and full-stack development. 4+ years of infrastructure and software development expertise.",
      keywords: ["abdul rohim work experience", "telkom indonesia engineer", "telecommunications engineer", "infrastructure specialist"]
    },
    contact: {
      title: "Contact Abdul Rohim - Full-Stack Developer",
      description: "Get in touch with Abdul Rohim for full-stack development projects, mobile app development, and infrastructure solutions. Available for freelance and remote work opportunities.",
      keywords: ["contact abdul rohim", "hire fullstack developer", "freelance developer contact", "react developer hire"]
    }
  }
};

// SEO Utility Functions
export const generatePageTitle = (pageTitle: string): string => {
  return `${pageTitle} | ${SEO_CONFIG.siteName}`;
};

export const generateMetaDescription = (description: string, maxLength: number = 160): string => {
  return description.length > maxLength 
    ? description.substring(0, maxLength - 3) + "..." 
    : description;
};

export const generateKeywords = (pageKeywords: string[]): string => {
  return [...SEO_CONFIG.keywords.primary, ...pageKeywords].join(", ");
};

// Structured Data Generator
export const generatePersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": SEO_CONFIG.author.name,
  "jobTitle": SEO_CONFIG.author.title,
  "description": SEO_CONFIG.siteDescription,
  "url": SEO_CONFIG.siteUrl,
  "image": SEO_CONFIG.defaultImage,
  "sameAs": Object.values(SEO_CONFIG.author.social),
  "knowsAbout": [
    "React", "Next.js", "Node.js", "TypeScript", "JavaScript",
    "React Native", "GraphQL", "MongoDB", "PostgreSQL", 
    "Tailwind CSS", "Framer Motion", "Network Infrastructure",
    "Mikrotik", "Ubiquiti"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Full-Stack Developer",
    "occupationLocation": {
      "@type": "Country",
      "name": SEO_CONFIG.author.location
    }
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SEO_CONFIG.siteName,
  "url": SEO_CONFIG.siteUrl,
  "description": SEO_CONFIG.siteDescription,
  "author": {
    "@type": "Person",
    "name": SEO_CONFIG.author.name
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SEO_CONFIG.author.name,
  "url": SEO_CONFIG.siteUrl,
  "logo": SEO_CONFIG.defaultImage,
  "description": SEO_CONFIG.siteDescription,
  "founder": {
    "@type": "Person",
    "name": SEO_CONFIG.author.name
  },
  "sameAs": Object.values(SEO_CONFIG.author.social)
});
