"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText, Shield } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  const sections = [
    {
      number: "1",
      title: "Services",
      content: (
        <>
          I provide web development, mobile development, infrastructure management, and related services as described on the Website. The specific details, deliverables, timelines, and costs for services will be outlined in a separate agreement or proposal for each project.
        </>
      ),
    },
    {
      number: "2",
      title: "Use of the Website",
      content: (
        <>
          You agree to use the Website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use of the Website.
          <br />
          <br />
          You are prohibited from:
          <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
            <li>Using the Website in any way that could damage, disable, or impair the Website or interfere with others' use</li>
            <li>Attempting to gain unauthorized access to any part of the Website, other accounts, or computer systems connected to the Website</li>
            <li>Using any robot, spider, or other automated means to access the Website</li>
            <li>Introducing viruses, trojans, worms, or other malicious code to the Website</li>
            <li>Collecting or harvesting any information from the Website without permission</li>
          </ul>
        </>
      ),
    },
    {
      number: "3",
      title: "Intellectual Property",
      content: (
        <>
          The Website and its original content, features, and functionality are owned by Abdul Rohim and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          <br />
          <br />
          You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on the Website without my prior written consent.
        </>
      ),
    },
    {
      number: "4",
      title: "Client Projects and Deliverables",
      content: (
        <>
          For client projects, ownership of deliverables will be specified in the project agreement. Unless otherwise stated:
          <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
            <li>Upon full payment, clients receive ownership of the final deliverables specifically created for their project</li>
            <li>I retain ownership of any pre-existing materials, frameworks, or tools used in creating the deliverables</li>
            <li>I reserve the right to display and link to completed client work as part of my portfolio unless otherwise agreed</li>
          </ul>
        </>
      ),
    },
    {
      number: "5",
      title: "User Content",
      content: (
        <>
          If you submit content to the Website (such as comments, testimonials, or project information), you grant me a non-exclusive, royalty-free, perpetual, irrevocable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
          <br />
          <br />
          You represent and warrant that you own or control all rights to the content you submit and that the content does not violate these Terms or any applicable laws.
        </>
      ),
    },
    {
      number: "6",
      title: "Payment Terms",
      content: (
        <>
          Payment terms for services will be outlined in the project agreement or proposal. Unless otherwise specified:
          <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
            <li>A deposit may be required before work begins</li>
            <li>Final payment is due upon completion of the project and before the transfer of deliverables</li>
            <li>Late payments may incur additional fees</li>
            <li>All fees are non-refundable unless otherwise agreed in writing</li>
          </ul>
        </>
      ),
    },
    {
      number: "7",
      title: "Disclaimers",
      content: (
        <>
          The information on this Website is provided on an "as is" basis. I make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the Website or the information, products, services, or related graphics contained on the Website for any purpose.
        </>
      ),
    },
    {
      number: "8",
      title: "Limitation of Liability",
      content: (
        <>
          In no event will I be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this Website.
        </>
      ),
    },
    {
      number: "9",
      title: "Indemnification",
      content: (
        <>
          You agree to defend, indemnify, and hold harmless Abdul Rohim from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including attorney's fees) arising from your use of the Website or your violation of these Terms.
        </>
      ),
    },
    {
      number: "10",
      title: "Termination",
      content: (
        <>
          I may terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </>
      ),
    },
    {
      number: "11",
      title: "Governing Law",
      content: (
        <>
          These Terms shall be interpreted and governed by the laws of Indonesia, without regard to its conflict of law provisions.
        </>
      ),
    },
    {
      number: "12",
      title: "Changes to Terms",
      content: (
        <>
          I reserve the right to modify or replace these Terms at any time. If a revision is material, I will try to provide at least 30 days notice prior to any new terms taking effect.
        </>
      ),
    },
    {
      number: "13",
      title: "Contact Information",
      content: (
        <>
          If you have any questions about these Terms of Service, please contact me at:
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-blue-400" />
              <h1 className="text-4xl sm:text-5xl sf-pro-display font-light bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Terms of Service
              </h1>
            </div>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Terms and conditions for using our website and services
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white/90 hover:text-white rounded-lg transition-all text-sm border border-white/10"
            >
              <Shield className="h-4 w-4" />
              View Privacy Policy
            </Link>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-sm text-white/50">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 p-6 bg-white/5 rounded-lg border border-white/10"
          >
            <p className="text-white/80 leading-relaxed">
              Welcome to Rohim Dev. These Terms of Service ("Terms") govern your use of the Rohim Dev website (the "Website") and the services offered by Abdul Rohim ("I", "me", or "my").
            </p>
            <br />
            <p className="text-white/80 leading-relaxed">
              By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Website or use my services.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                <Shield className="h-4 w-4" />
                Read our Privacy Policy
              </Link>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                className="bg-white/5 rounded-lg border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-colors"
              >
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <span className="text-blue-400">{section.number}.</span>
                  <span>{section.title}</span>
                </h2>
                <div className="text-white/70 leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Agreement Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 bg-blue-500/10 rounded-lg border border-blue-500/20"
          >
            <p className="text-white/90 leading-relaxed text-center">
              By using my website and services, you acknowledge that you have read and agree to these Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

