import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Abdul Rohim - Full-Stack Developer Journey",
  description:
    "Learn about Abdul Rohim's journey from telecommunications engineer to full-stack developer. 4+ years of experience in infrastructure and modern web development.",
  keywords: [
    "about abdul rohim",
    "developer journey",
    "telecommunications engineer",
    "fullstack developer story",
    "career transition",
    "hacktiv8 graduate",
    "indonesia developer",
    "infrastructure specialist",
    "network engineer background",
  ],
  openGraph: {
    title: "About Abdul Rohim - Full-Stack Developer Journey",
    description:
      "Learn about Abdul Rohim's journey from telecommunications engineer to full-stack developer. 4+ years of experience in infrastructure and modern web development.",
    url: "https://rohimdev.com/about",
    images: [
      {
        url: "https://rohimdev.com/images/profile.png",
        width: 800,
        height: 600,
        alt: "Abdul Rohim - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    title: "About Abdul Rohim - Full-Stack Developer Journey",
    description:
      "Learn about Abdul Rohim's journey from telecommunications engineer to full-stack developer. 4+ years of experience in infrastructure and modern web development.",
    images: ["https://rohimdev.com/images/profile.png"],
  },
  alternates: {
    canonical: "https://rohimdev.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
