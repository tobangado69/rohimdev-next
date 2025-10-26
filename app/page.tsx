"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Star,
  GitBranch,
  ExternalLink,
  Play,
  Share,
} from "lucide-react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import CodeEditorSection from "@/components/sections/CodeEditorSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Interactive IDE Section */}
      <CodeEditorSection />

      {/* Success Stories Section */}
      <SuccessStoriesSection />

      {/* Features Grid */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}
