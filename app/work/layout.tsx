import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience - Abdul Rohim's Professional Journey",
  description:
    "Abdul Rohim's professional experience spanning telecommunications engineering at Telkom Indonesia and full-stack development. 4+ years of infrastructure and software development expertise.",
  keywords: [
    "abdul rohim work experience",
    "telkom indonesia engineer",
    "telecommunications engineer",
    "infrastructure specialist",
    "network engineer experience",
    "fullstack developer experience",
    "indonesia developer experience",
    "varnion technology",
    "provisioning technician",
    "network optimization",
    "fiber optic installation",
  ],
  openGraph: {
    title: "Work Experience - Abdul Rohim's Professional Journey",
    description:
      "Abdul Rohim's professional experience spanning telecommunications engineering at Telkom Indonesia and full-stack development. 4+ years of infrastructure and software development expertise.",
    url: "https://rohimdev.com/work",
    images: [
      {
        url: "https://rohimdev.com/images/work-experience.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Rohim's Work Experience",
      },
    ],
  },
  twitter: {
    title: "Work Experience - Abdul Rohim's Professional Journey",
    description:
      "Abdul Rohim's professional experience spanning telecommunications engineering at Telkom Indonesia and full-stack development.",
    images: ["https://rohimdev.com/images/work-experience.jpg"],
  },
  alternates: {
    canonical: "https://rohimdev.com/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
