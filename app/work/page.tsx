"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building, Users, Award } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const workExperience = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    location: "Surabaya, Indonesia",
    type: "Full-time",
    duration: "2023 - Present",
    description:
      "Leading development of scalable web applications and mentoring junior developers. Responsible for architecture decisions and technical strategy.",
    achievements: [
      "Led a team of 5 developers in building a microservices architecture",
      "Improved application performance by 40% through optimization",
      "Mentored 3 junior developers and helped them grow their skills",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
    logo: "🏢",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "StartupX",
    location: "Remote",
    type: "Full-time",
    duration: "2021 - 2023",
    description:
      "Built responsive user interfaces and improved user experience across multiple products. Collaborated closely with design and product teams.",
    achievements: [
      "Developed 15+ React components used across the platform",
      "Improved user engagement by 25% through UI/UX improvements",
      "Reduced bundle size by 30% through code optimization",
      "Implemented accessibility features achieving WCAG 2.1 AA compliance",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Storybook",
    ],
    logo: "🚀",
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "WebStudio",
    location: "New York, NY",
    type: "Full-time",
    duration: "2020 - 2021",
    description:
      "Developed client websites and learned modern web development practices. Worked on various projects from small business sites to e-commerce platforms.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Learned modern JavaScript frameworks and best practices",
      "Collaborated with senior developers on complex features",
      "Maintained 100% client satisfaction rate",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
    logo: "💻",
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Berkeley",
    year: "2016 - 2020",
    gpa: "3.8/4.0",
    relevant_courses: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Software Engineering",
      "Web Development",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    credential_id: "AWS-SAA-123456",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2022",
    credential_id: "GCP-PD-789012",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    year: "2021",
    credential_id: "META-RD-345678",
  },
];

export default function WorkPage() {
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
          >
            <h1 className="text-5xl sm:text-6xl sf-pro-display tracking-tight mb-8 font-light bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              Work Experience
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              My professional journey and the experiences that have shaped my
              career as a developer.
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
          >
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A detailed look at my career progression and key achievements.
            </p>
          </motion.div>

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl"
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

                    <p className="text-white/60 mb-6 leading-relaxed">
                      {job.description}
                    </p>

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

      {/* Education */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Education
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              My academic background and relevant coursework.
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold sf-pro-display mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 font-medium text-lg">
                      {edu.school}
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-white/60">{edu.year}</p>
                    <p className="text-sm text-white/60">GPA: {edu.gpa}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold sf-pro-display mb-3">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevant_courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sf-pro-display font-light mb-6">
              Certifications
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Professional certifications that validate my expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold sf-pro-display mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-white/60 mb-2">{cert.year}</p>
                  <p className="text-xs text-white/50">
                    ID: {cert.credential_id}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
