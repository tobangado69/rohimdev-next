"use client";

import Link from "next/link";
import { ArrowLeft, Shield, FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information I Collect",
      content: (
        <>
          I may collect the following types of information:
          <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
            <li>
              <strong>Personal Information:</strong> When you contact me through
              my website, I collect information such as your name, email
              address, phone number, and any other information you provide in
              your message.
            </li>
            <li>
              <strong>Usage Data:</strong> I automatically collect information
              about how you interact with my website, including your IP address,
              browser type, pages visited, time spent on pages, and other
              browsing actions.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> My website uses
              cookies and similar tracking technologies to enhance your browsing
              experience and collect information about how you use the site.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How I Use Your Information",
      content: (
        <>
          I use the information I collect for the following purposes:
          <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
            <li>To provide and maintain my services</li>
            <li>To respond to your inquiries and communicate with you</li>
            <li>To improve my website and services</li>
            <li>To analyze usage patterns and administer the site</li>
            <li>
              To protect my website and services from unauthorized access or
              activities
            </li>
            <li>To comply with legal obligations</li>
          </ul>
        </>
      ),
    },
    {
      title: "Data Security",
      content: (
        <>
          I implement appropriate security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the Internet or
          electronic storage is 100% secure, and I cannot guarantee absolute
          security.
        </>
      ),
    },
    {
      title: "Third-Party Services",
      content: (
        <>
          I may use third-party services to help operate my website and provide
          services. These third parties may have access to your personal
          information only to perform specific tasks on my behalf and are
          obligated not to disclose or use it for any other purpose.
          <br />
          <br />
          Third-party services I use may include:
          <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
            <li>Hosting providers</li>
            <li>Analytics services</li>
            <li>Email service providers</li>
            <li>Payment processors (when applicable)</li>
          </ul>
        </>
      ),
    },
    {
      title: "Cookies Policy",
      content: (
        <>
          Cookies are small text files that are placed on your device when you
          visit my website. I use cookies to enhance your browsing experience
          and understand how you interact with my site.
          <br />
          <br />
          The types of cookies I use include:
          <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the website to
              function properly
            </li>
            <li>
              <strong>Analytical/Performance Cookies:</strong> Help me
              understand how visitors interact with my website
            </li>
            <li>
              <strong>Functionality Cookies:</strong> Allow the website to
              remember choices you make
            </li>
          </ul>
          <br />
          You can control cookies through your browser settings. However,
          disabling certain cookies may limit your ability to use some features
          of my website.
        </>
      ),
    },
    {
      title: "Your Data Protection Rights",
      content: (
        <>
          Depending on your location, you may have the following rights
          regarding your personal information:
          <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
            <li>The right to access your personal data</li>
            <li>The right to rectify inaccurate personal data</li>
            <li>The right to request deletion of your personal data</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to data portability</li>
            <li>The right to object to processing of your personal data</li>
          </ul>
          <br />
          To exercise any of these rights, please contact me using the
          information provided at the end of this policy.
        </>
      ),
    },
    {
      title: "Children's Privacy",
      content: (
        <>
          My website is not intended for children under 16 years of age. I do
          not knowingly collect personal information from children under 16. If
          you are a parent or guardian and believe your child has provided me
          with personal information, please contact me, and I will take steps to
          remove that information.
        </>
      ),
    },
    {
      title: "Changes to This Privacy Policy",
      content: (
        <>
          I may update this Privacy Policy from time to time to reflect changes
          in my practices or for other operational, legal, or regulatory
          reasons. I will post the updated Privacy Policy on this page with a
          revised "Last updated" date.
          <br />
          <br />I encourage you to review this Privacy Policy periodically to
          stay informed about how I protect your information.
        </>
      ),
    },
    {
      title: "Contact Information",
      content: (
        <>
          If you have any questions or concerns about this Privacy Policy or my
          data practices, please contact me at:
          <br />
          <br />
          <a
            href="mailto:rohimjoy70@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors underline"
          >
            rohimjoy70@gmail.com
          </a>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <h1 className="text-4xl sm:text-5xl sf-pro-display font-light bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
            </div>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              How I collect, use, and protect your personal information
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm group cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white/90 hover:text-white rounded-lg transition-all text-sm border border-white/10 cursor-pointer"
            >
              <FileText className="h-4 w-4" />
              View Terms of Service
            </Link>
          </div>

          {/* Last Updated */}
          <div className="text-center mb-12">
            <p className="text-sm text-white/50">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12 p-6 bg-white/5 rounded-lg border border-white/10">
            <p className="text-white/80 leading-relaxed">
              At Rohim Dev, I am committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how I collect, use, and safeguard your data when
              you visit my website or engage my services.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium cursor-pointer"
              >
                <FileText className="h-4 w-4" />
                Read our Terms of Service
              </Link>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-white/5 rounded-lg border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-colors"
              >
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  <span>{section.title}</span>
                </h2>
                <div className="text-white/70 leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Agreement Statement */}
          <div className="mt-12 p-6 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <p className="text-white/90 leading-relaxed text-center">
              By using my website, you acknowledge that you have read and
              understand this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
