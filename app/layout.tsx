import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohim Dev - Fullstack Developer & Infrastructure Specialist",
  description:
    "Professional portfolio showcasing fullstack development and infrastructure expertise in modern web technologies",
  keywords: [
    "portfolio",
    "fullstack developer",
    "infrastructure specialist",
    "react",
    "nextjs",
    "typescript",
    "devops",
    "cloud",
  ],
  authors: [{ name: "Rohim Dev" }],
  openGraph: {
    title: "Rohim Dev - Fullstack Developer & Infrastructure Specialist",
    description:
      "Professional portfolio showcasing fullstack development and infrastructure expertise in modern web technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohim Dev - Fullstack Developer & Infrastructure Specialist",
    description:
      "Professional portfolio showcasing fullstack development and infrastructure expertise in modern web technologies",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${inter.className} min-h-full overflow-x-hidden text-white bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
