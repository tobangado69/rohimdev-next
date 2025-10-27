import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Abdul Rohim - Full-Stack Developer",
  description:
    "Get in touch with Abdul Rohim for full-stack development projects, mobile app development, and infrastructure solutions. Available for freelance and remote work opportunities.",
  keywords: [
    "contact abdul rohim",
    "hire fullstack developer",
    "freelance developer contact",
    "react developer hire",
    "mobile app developer contact",
    "infrastructure specialist contact",
    "remote developer indonesia",
    "web development services contact",
    "software development inquiry",
  ],
  openGraph: {
    title: "Contact Abdul Rohim - Full-Stack Developer",
    description:
      "Get in touch with Abdul Rohim for full-stack development projects, mobile app development, and infrastructure solutions. Available for freelance and remote work opportunities.",
    url: "https://rohimdev.com/contact",
    images: [
      {
        url: "https://rohimdev.com/images/contact-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Abdul Rohim - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Contact Abdul Rohim - Full-Stack Developer",
    description:
      "Get in touch with Abdul Rohim for full-stack development projects, mobile app development, and infrastructure solutions.",
    images: ["https://rohimdev.com/images/contact-preview.jpg"],
  },
  alternates: {
    canonical: "https://rohimdev.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
