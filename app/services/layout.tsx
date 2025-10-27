import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Full-Stack Development & Infrastructure Solutions",
  description:
    "Professional full-stack development services including React, Next.js, Node.js, mobile apps, and infrastructure management. Custom web applications and network solutions.",
  keywords: [
    "fullstack development services",
    "react development services",
    "nextjs development services",
    "mobile app development",
    "react native development",
    "nodejs development",
    "infrastructure services",
    "network engineering services",
    "web development services",
    "custom software development",
    "freelance developer services",
    "indonesia developer services",
  ],
  openGraph: {
    title: "Services - Full-Stack Development & Infrastructure Solutions",
    description:
      "Professional full-stack development services including React, Next.js, Node.js, mobile apps, and infrastructure management. Custom web applications and network solutions.",
    url: "https://rohimdev.com/services",
    images: [
      {
        url: "https://rohimdev.com/images/services-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Rohim's Development Services",
      },
    ],
  },
  twitter: {
    title: "Services - Full-Stack Development & Infrastructure Solutions",
    description:
      "Professional full-stack development services including React, Next.js, Node.js, mobile apps, and infrastructure management.",
    images: ["https://rohimdev.com/images/services-preview.jpg"],
  },
  alternates: {
    canonical: "https://rohimdev.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
