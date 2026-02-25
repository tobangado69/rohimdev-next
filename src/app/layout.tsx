import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";
import { Ticker } from "@/components/layout/ticker";
import { getDefaultMetadata } from "@/lib/seo";

export const metadata: Metadata = getDefaultMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} font-sans min-h-screen overflow-x-hidden selection:bg-neutral-300 selection:text-neutral-900 text-neutral-900 bg-neutral-100 relative`}
      >
        <Ticker />
        <div className="fixed grid-lines w-full h-full top-0 right-0 bottom-0 left-0 pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row min-h-screen max-w-[1600px] mx-auto">
          <Sidebar />
          <main className="flex-1 lg:ml-64 lg:p-16 flex flex-col gap-20 lg:gap-12 overflow-hidden pt-6 pr-6 pb-6 pl-6">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
