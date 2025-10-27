import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Abdul Rohim's Portfolio",
  description:
    "Explore Abdul Rohim's portfolio of full-stack projects including React Native apps, real-time chat applications, and e-commerce platforms built with modern technologies.",
  keywords: [
    "abdul rohim projects",
    "react native projects",
    "nextjs projects",
    "fullstack projects",
    "mobile app projects",
    "chat application",
    "ecommerce projects",
    "graphql projects",
    "typescript projects",
    "portfolio projects",
    "web development projects",
    "indonesia developer projects",
  ],
  openGraph: {
    title: "Projects - Abdul Rohim's Portfolio",
    description:
      "Explore Abdul Rohim's portfolio of full-stack projects including React Native apps, real-time chat applications, and e-commerce platforms built with modern technologies.",
    url: "https://rohimdev.com/projects",
    images: [
      {
        url: "https://rohimdev.com/images/projects-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Rohim's Project Portfolio",
      },
    ],
  },
  twitter: {
    title: "Projects - Abdul Rohim's Portfolio",
    description:
      "Explore Abdul Rohim's portfolio of full-stack projects including React Native apps, real-time chat applications, and e-commerce platforms.",
    images: ["https://rohimdev.com/images/projects-preview.jpg"],
  },
  alternates: {
    canonical: "https://rohimdev.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
