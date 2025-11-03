import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Rohim Dev website. Learn how Abdul Rohim collects, uses, and protects your personal information when you visit the website or engage services.",
  keywords: [
    "privacy policy",
    "data protection",
    "privacy",
    "rohim dev",
    "abdul rohim",
    "data privacy",
    "cookie policy",
    "gdpr",
  ],
  openGraph: {
    title: "Privacy Policy | Rohim Dev",
    description:
      "Privacy Policy for Rohim Dev website. Learn how we collect, use, and protect your personal information.",
    url: "https://rohimdev.com/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Rohim Dev",
    description:
      "Privacy Policy for Rohim Dev website. Learn how we collect, use, and protect your personal information.",
  },
  alternates: {
    canonical: "https://rohimdev.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

