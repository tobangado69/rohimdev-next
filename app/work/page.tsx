"use client";

import { Calendar, MapPin, Building, Award, Briefcase } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// No data imports; use hardcoded data

const technicalAchievements = [
  {
    title: "3-5 Concurrent Projects Delivered",
    organization: "Rohimdev.com",
    period: "2025 - Present",
    description:
      "Successfully delivered 3-5 concurrent fullstack projects for client-specific requirements, managing multiple priorities while maintaining code quality and delivery timelines.",
    technologies: ["Node.js", "Express", "Hono", "Golang", "PostgreSQL", "Prisma", "React"],
    impact:
      "Improved development velocity through AI-assisted tools and clean architecture patterns",
  },
  {
    title: "Internal Efficiency Improvement",
    organization: "Varnion Technology",
    period: "2025 - Present",
    description:
      "Built scalable RESTful APIs and automated reporting pipelines, reducing manual workloads and improving internal operational efficiency.",
    technologies: ["React", "Node.js", "PostgreSQL", "RESTful APIs", "Clean Architecture"],
    impact: "Streamlined operations and reduced manual processing by automating workflows",
  },
  {
    title: "Career Transition Success",
    organization: "Telkom Indonesia → Software Development",
    period: "2020 - 2025",
    description:
      "Successfully transitioned from telecommunications infrastructure to fullstack software development, building a diverse skill set across both domains.",
    technologies: ["Problem Solving", "Continuous Learning", "System Design", "Full-Stack Development"],
    impact: "Achieved measurable growth in software development with tangible project outcomes",
  },
];

export default function WorkPage() {
  const workData = {
    hero: {
      heading: "Professional Work Experience",
      description:
        "4+ years building scalable web applications and APIs. From telecommunications infrastructure to fullstack development—crafting solutions that bridge systems and deliver results.",
    },
    skillsSummary: {
      heading: "Technical Skills",
      subheading:
        "A comprehensive skill set built through real-world fullstack development experience",
      categories: [
        {
          title: "Frontend Development",
          skills: [
            "React & Next.js",
            "TypeScript",
            "Tailwind CSS",
            "UI/UX Implementation",
            "Responsive Design",
          ],
        },
        {
          title: "Backend Development",
          skills: [
            "Node.js & Express",
            "Golang (Gin)",
            "RESTful API Design",
            "Microservices",
            "Clean Architecture",
          ],
        },
        {
          title: "Database & APIs",
          skills: [
            "PostgreSQL",
            "Prisma ORM",
            "API Integration",
            "Database Design",
            "Data Modeling",
          ],
        },
        {
          title: "DevOps & Tools",
          skills: [
            "Git & Version Control",
            "Docker",
            "CI/CD Pipelines",
            "Cloud Deployment",
            "Performance Optimization",
          ],
        },
      ],
    },
  } as const;

  const careerTimeline = {
    positions: [
      {
        status: "current",
        title: "Freelance Fullstack Developer",
        company: "Rohimdev.com",
        period: "Jan 2025 - Present",
        companyDescription:
          "Delivering 3-5 concurrent fullstack projects for client-specific requirements. Building scalable web applications with modern technologies and clean architecture patterns.",
        responsibilities: [
          "Built backend services using Node.js, Express, Hono, and Golang (Gin)",
          "Designed and managed PostgreSQL databases with Prisma ORM",
          "Integrated frontend applications with backend services for consistent data flow",
          "Improved development velocity using AI-assisted tools (Cursor, Claude Code, TRAE)",
        ],
        achievements: [
          {
            metric: "3-5 Projects",
            description: "Concurrent fullstack projects delivered",
          },
          {
            metric: "Development Velocity",
            description: "Improved through AI-assisted development tools",
          },
        ],
        technologies: [
          "Node.js",
          "Express",
          "Hono",
          "Golang",
          "Gin",
          "PostgreSQL",
          "Prisma",
          "React",
        ],
        type: "Freelance",
      },
      {
        status: "current",
        title: "Fullstack Developer",
        company: "Varnion Technology Semesta",
        period: "Sep 2025 - Present",
        companyDescription:
          "Developing and maintaining internal web applications using React, Node.js, and PostgreSQL to support operational and monitoring workflows.",
        responsibilities: [
          "Built scalable RESTful APIs and backend services focusing on clean architecture, security, and performance",
          "Developed and maintained internal web applications using React, Node.js, and PostgreSQL",
          "Collaborated closely with infrastructure and NOC teams to bridge system requirements",
          "Automated operational processes and reporting pipelines",
        ],
        achievements: [
          {
            metric: "Internal Efficiency",
            description: "Improved through automated reporting pipelines",
          },
          {
            metric: "Reduced Workloads",
            description: "Automated operational processes",
          },
        ],
        technologies: [
          "React",
          "Node.js",
          "PostgreSQL",
          "RESTful APIs",
          "Clean Architecture",
        ],
        type: "Full-time",
      },
      {
        status: "previous",
        title: "Staff Infrastructure",
        company: "Varnion Technology Semesta",
        period: "Jan 2025 - Aug 2025",
        companyDescription:
          "Transition period from telecommunications infrastructure to software development. Continued network maintenance while building development skills.",
        responsibilities: [
          "Performed installation, configuration, and maintenance of network devices",
          "Conducted regular monitoring and troubleshooting of network infrastructure",
          "Collaborated with cross-functional teams including NOC",
        ],
        achievements: [
          {
            metric: "Network Excellence",
            description: "Maintained consistent internet performance and uptime",
          },
          {
            metric: "Career Transition",
            description: "Successfully transitioned to fullstack development",
          },
        ],
        technologies: [
          "Mikrotik",
          "Ubiquiti",
          "Network Design",
          "System Monitoring",
        ],
        type: "Full-time",
      },
      {
        status: "previous",
        title: "Provisioning Technician",
        company: "PT Telkom Indonesia (IndiHome)",
        period: "Dec 2020 - Aug 2023",
        companyDescription:
          "Foundational experience in telecommunications infrastructure. Built strong problem-solving skills and customer service excellence.",
        responsibilities: [
          "Installed and configured IndiHome internet services including fiber optic connections",
          "Conducted on-site troubleshooting and signal quality testing using OTDR and OPM",
          "Coordinated with NOC and customer service teams for prompt issue resolution",
        ],
        achievements: [
          {
            metric: "25% Reduction",
            description: "Fewer repeat visits through quality service",
          },
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
        type: "Full-time",
      },
    ],
  } as const;

  // Map work experience data to component format
  const workExperience = careerTimeline.positions.map((position, index) => ({
    id: `work-${index}`,
    title: position.title,
    company: position.company,
    location: "Surabaya, Indonesia",
    type: position.type || "Full-time",
    duration: position.period,
    description: position.companyDescription,
    responsibilities: position.responsibilities || [],
    achievements: position.achievements.map(
      (achievement) => achievement.description
    ),
    technologies: position.technologies,
    logo: position.status === "current" ? "💻" : "📡",
  }));
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl sf-pro-display tracking-tight mb-8 font-light bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              {workData.hero.heading}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {workData.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A detailed look at my career progression and key achievements.
            </p>
          </div>

          <div className="space-y-16">
            {workExperience.map((job, index) => (
              <div
                key={job.id}
                className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl my-4"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Achievements */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Technical Achievements
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Measurable impact and professional milestones
            </p>
          </div>

          <div className="space-y-12">
            {technicalAchievements.map((achievement, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl my-4"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Skills Summary */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sf-pro-display tracking-tight mb-6 font-light">
              {workData.skillsSummary.heading}
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {workData.skillsSummary.subheading}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {workData.skillsSummary.categories.map((category, index) => (
              <div
                key={index}
                className="p-8 border border-white/10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
