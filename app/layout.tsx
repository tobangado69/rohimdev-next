import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Abdul Rohim - Full-Stack Developer & Infrastructure Specialist",
    template: "%s | Abdul Rohim - Portfolio",
  },
  description:
    "Professional full-stack developer with 4+ years of experience in React, Next.js, Node.js, and infrastructure management. Specializing in modern web applications, mobile development, and network optimization.",
  keywords: [
    "fullstack developer",
    "react developer",
    "nextjs developer",
    "nodejs developer",
    "typescript developer",
    "javascript developer",
    "mobile app developer",
    "react native developer",
    "infrastructure specialist",
    "network engineer",
    "portfolio",
    "web developer",
    "software engineer",
    "freelance developer",
    "indonesia developer",
    "remote developer",
    "graphql developer",
    "mongodb developer",
    "postgresql developer",
    "tailwind css developer",
    "framer motion developer",
  ],
  authors: [{ name: "Abdul Rohim", url: "https://rohimdev.com" }],
  creator: "Abdul Rohim",
  publisher: "Abdul Rohim",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohimdev.com",
    siteName: "Abdul Rohim - Portfolio",
    title: "Abdul Rohim - Full-Stack Developer & Infrastructure Specialist",
    description:
      "Professional full-stack developer with 4+ years of experience in React, Next.js, Node.js, and infrastructure management. Specializing in modern web applications, mobile development, and network optimization.",
    images: [
      {
        url: "https://rohimdev.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Rohim - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rohimdev",
    creator: "@rohimdev",
    title: "Abdul Rohim - Full-Stack Developer & Infrastructure Specialist",
    description:
      "Professional full-stack developer with 4+ years of experience in React, Next.js, Node.js, and infrastructure management.",
    images: ["https://rohimdev.com/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://rohimdev.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul Rohim",
    jobTitle: "Full-Stack Developer & Infrastructure Specialist",
    description:
      "Professional full-stack developer with 4+ years of experience in React, Next.js, Node.js, and infrastructure management.",
    url: "https://rohimdev.com",
    image: "https://rohimdev.com/images/profile.png",
    sameAs: [
      "https://github.com/tobangado69",
      "https://linkedin.com/in/abdul-rohim",
      "https://t.me/Tobangado70",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "Network Infrastructure",
      "Mikrotik",
      "Ubiquiti",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Indonesia",
      },
      skills: [
        "Web Development",
        "Mobile Development",
        "Infrastructure Management",
        "Network Engineering",
      ],
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Hacktiv8",
    },
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.className} min-h-full overflow-x-hidden text-white bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
