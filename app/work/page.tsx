"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Building,
  Users,
  Award,
  Briefcase,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// No data imports; use hardcoded data

const technicalAchievements = [
  {
    title: "40% Connectivity Improvement",
    organization: "Varnion Technology",
    period: "2025",
    description:
      "Reduced connectivity issues by 40% through systematic monitoring and optimization",
    technologies: ["Mikrotik", "Ubiquiti", "Network Design"],
    impact:
      "Significant improvement in network reliability and customer satisfaction",
  },
  {
    title: "25% Service Efficiency Gain",
    organization: "Telkom Indonesia",
    period: "2020-2023",
    description:
      "Reduced repeat visits by 25% through quality workmanship and customer education",
    technologies: ["Fiber Optic", "OTDR", "Customer Service"],
    impact: "Enhanced service quality and reduced operational costs",
  },
  {
    title: "Bootcamp Completion",
    organization: "Hacktiv8",
    period: "2024",
    description:
      "Successfully graduated from intensive full-stack development program",
    technologies: ["React", "Node.js", "Full-Stack Development"],
    impact: "Transitioned from telecommunications to software development",
  },
];

export default function WorkPage() {
  const workData = {
    hero: {
      heading: "Professional Work Experience",
      description:
        "4+ years across telecommunications infrastructure and modern software development. Measurable results from network optimization to full‑stack delivery.",
    },
    skillsSummary: {
      heading: "Professional Skills Summary",
      subheading:
        "A comprehensive skill set developed through diverse professional experiences",
      categories: [
        {
          title: "Software Development",
          skills: [
            "Full-Stack JavaScript Development",
            "React & Next.js Applications",
            "Golang & Node.js Backend Development",
            "Database Design & Management",
            "API Development & Integration",
          ],
        },
        {
          title: "Infrastructure & Networking",
          skills: [
            "Network Design & Implementation",
            "Mikrotik & Ubiquiti Systems",
            "Fiber Optic Installation",
            "System Monitoring & Optimization",
            "Structured Cabling",
          ],
        },
        {
          title: "Technical Troubleshooting",
          skills: [
            "OTDR & OPM Testing",
            "Signal Quality Analysis",
            "Network Performance Optimization",
            "Issue Root Cause Analysis",
            "Preventive Maintenance",
          ],
        },
        {
          title: "Project Management",
          skills: [
            "Infrastructure Project Planning",
            "Site Surveys & Assessment",
            "Timeline Management",
            "Quality Assurance",
            "Documentation & Reporting",
          ],
        },
        {
          title: "Customer Relations",
          skills: [
            "Customer Service Excellence",
            "Technical Support & Training",
            "Issue Resolution",
            "Communication Skills",
            "Client Relationship Management",
          ],
        },
        {
          title: "Team Collaboration",
          skills: [
            "Cross-functional Teamwork",
            "NOC Coordination",
            "Knowledge Sharing",
            "Support Team Integration",
            "Collaborative Problem Solving",
          ],
        },
      ],
    },
  } as const;

  const careerTimeline = {
    positions: [
      {
        status: "current",
        title: "Staff Infrastructure",
        company: "Varnion Technology Semesta",
        period: "Jan 2025 - Present",
        companyDescription:
          "PT Varnion Technology Semesta, a leading technology service provider in Indonesia specializing in internet solutions for the hospitality industry. As an Infrastructure Staff, I contributed to the stability and scalability of client and internal systems through the following initiatives:",
        responsibilities: [
          "Performed installation, configuration, and maintenance of network devices including routers, switches, and access points across various hotel client sites, ensuring consistent internet performance and uptime.",
          "Conducted regular monitoring and troubleshooting of network infrastructure using tools like Mikrotik and Ubiquiti, which resulted in a 40% reduction in reported connectivity issues.",
          "Implemented structured cabling and server rack setups in hotel environments, contributing to improved system organization and long-term maintainability.",
          "Collaborated with cross-functional teams including NOC (Network Operation Center) and support teams to ensure timely resolution of escalated technical issues.",
          "Assisted in the planning and deployment of new infrastructure projects, including site surveys and bandwidth estimation, helping the team meet project timelines and client expectations.",
        ],
        achievements: [
          {
            metric: "40% Reduction",
            description:
              "Reduced connectivity issues through systematic monitoring and optimization",
          },
          {
            metric: "Network Excellence",
            description:
              "Consistent internet performance and uptime across hotel client sites",
          },
        ],
        technologies: [
          "Mikrotik",
          "Ubiquiti",
          "Network Design",
          "Infrastructure Planning",
          "System Monitoring",
        ],
      },
      {
        status: "previous",
        title: "Provisioning Technician",
        company: "PT Telkom Indonesia (IndiHome)",
        period: "Dec 2020 - Aug 2023",
        companyDescription:
          "PT Telkom Indonesia (IndiHome), the largest telecommunications company in Indonesia, where I served as a Provisioning Technician responsible for ensuring successful internet service activation and customer satisfaction:",
        responsibilities: [
          "Installed and configured IndiHome internet services—including fiber optic connections, modems, and set-top boxes—for residential and business customers across assigned coverage areas.",
          "Conducted on-site troubleshooting and signal quality testing using tools such as OTDR and OPM, ensuring proper network functionality and reducing repeat visits by 25%.",
          "Coordinated with the NOC and customer service teams to resolve provisioning issues promptly, contributing to faster service activation times and improved customer experience.",
          "Educated customers on how to use and maintain their internet equipment, fostering long-term satisfaction and reducing post-installation complaints.",
          "Maintained detailed reports of daily installations, customer feedback, and technical findings, helping improve operational transparency and service delivery efficiency.",
        ],
        achievements: [
          { metric: "25% Reduction", description: "Fewer repeat visits" },
          {
            metric: "Service Excellence",
            description: "Improved activation times",
          },
        ],
        technologies: [
          "Fiber Optic",
          "OTDR",
          "OPM Testing",
          "Customer Service",
        ],
      },
    ],
  } as const;

  // Map work experience data to component format
  const workExperience = careerTimeline.positions.map((position, index) => ({
    id: `work-${index}`,
    title: position.title,
    company: position.company,
    location: "Surabaya, Indonesia", // Default location
    type: "Full-time", // Default type
    duration: position.period,
    description: position.companyDescription,
    responsibilities: (position as any).responsibilities || [],
    achievements: position.achievements.map(
      (achievement) => achievement.description
    ),
    technologies: position.technologies,
    logo: position.status === "current" ? "🏢" : "🏭",
  }));
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
            {...({} as any)}
          >
            <h1 className="text-5xl sm:text-6xl sf-pro-display tracking-tight mb-8 font-light bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              {workData.hero.heading}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {workData.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            {...({} as any)}
          >
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A detailed look at my career progression and key achievements.
            </p>
          </motion.div>

          <div className="space-y-16">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl my-4"
                {...({} as any)}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center text-2xl">
                      {job.logo}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold sf-pro-display mb-2">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 text-white/60 mb-2">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{job.duration}</span>
                          </div>
                        </div>
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-white/80 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    {job.responsibilities &&
                      job.responsibilities.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold sf-pro-display mb-3 flex items-center gap-2">
                            <Briefcase className="h-5 w-5" />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-3">
                            {job.responsibilities.map(
                              (responsibility: string, idx: number) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-white/70 leading-relaxed"
                                >
                                  <span className="text-blue-400 mt-1 flex-shrink-0">
                                    •
                                  </span>
                                  <span>{responsibility}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold sf-pro-display mb-3 flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-white/60"
                          >
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold sf-pro-display mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Achievements */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            {...({} as any)}
          >
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Technical Achievements
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Measurable impact and professional milestones
            </p>
          </motion.div>

          <div className="space-y-12">
            {technicalAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl my-4"
                {...({} as any)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold sf-pro-display mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-blue-400 font-medium text-lg">
                      {achievement.organization}
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-white/60">{achievement.period}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-white/70 text-lg leading-relaxed mb-3">
                    {achievement.description}
                  </p>
                  <p className="text-green-400 font-medium">
                    Impact: {achievement.impact}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold sf-pro-display mb-3">
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {achievement.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Skills Summary */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            {...({} as any)}
          >
            <h2 className="text-4xl sf-pro-display tracking-tight mb-6 font-light">
              {workData.skillsSummary.heading}
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {workData.skillsSummary.subheading}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {workData.skillsSummary.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 border border-white/10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent"
                {...({} as any)}
              >
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
