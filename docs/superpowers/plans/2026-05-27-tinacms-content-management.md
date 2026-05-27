# TinaCMS Content Management Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a local-first TinaCMS content workflow that moves portfolio content into `content/`, makes core pages/projects editable, and keeps Next.js rendering stable.

**Architecture:** TinaCMS owns editable schemas in `tina/config.ts`. Repository content lives under `content/`. `src/lib/content.ts` reads normalized content for server components and metadata; UI components receive data through props and keep current visuals.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript strict mode, TinaCMS, JSON content files, MDX project files.

---

## Current Constraints

- Current project has no formal test runner. Use TypeScript/build verification plus focused content helper smoke checks.
- Existing `package.json` has `next lint`, but Next.js 15 removed `next lint`; prefer `npx tsc --noEmit` and `npm run build` for verification unless lint script is updated.
- Verify current TinaCMS install/setup docs before execution. Context7 docs found `/tinacms/tinacms`, `tinacms dev`, `tinacms build`, `tina/config.ts`, JSON/MDX collections, and generated `tina/__generated__/` files.
- Do not commit existing unrelated `.cursor/*` or SDD changes unless user explicitly asks.

## Target File Structure

### Create

- `content/pages/site.json` — global site/SEO/navigation/social content.
- `content/pages/home.json` — editable homepage sections.
- `content/pages/about.json` — editable about/experience/skills content.
- `content/pages/services.json` — editable services/pricing/testimonials content.
- `content/pages/contact.json` — editable contact copy and CTA content.
- `content/projects/mobile-fb.mdx` — project content file.
- `content/projects/chatapp.mdx` — project content file.
- `content/projects/grammedia-clone.mdx` — project content file.
- `content/posts/.gitkeep` — future-ready blog collection placeholder.
- `content/case-studies/.gitkeep` — future-ready case-study placeholder.
- `src/lib/content.ts` — file-based content access and normalization.
- `src/types/content.ts` — shared content types consumed by pages/components.
- `tina/config.ts` — TinaCMS schema configuration.

### Modify

- `package.json` — add Tina dependencies/scripts.
- `tsconfig.json` — include Tina generated files if required by current Tina output.
- `.gitignore` — ignore Tina cache/output if generated docs require it; keep committed generated files that Tina requires.
- `src/lib/seo.ts` — read metadata from CMS-backed content.
- `src/app/layout.tsx` — use CMS-backed default metadata only if helper remains build-safe.
- `src/app/page.tsx` — load `home` content and pass props to sections.
- `src/app/about/page.tsx` — load `about` content and pass to `AboutContent`.
- `src/app/services/page.tsx` — load `services` content instead of hardcoded arrays.
- `src/app/work/page.tsx` — load projects and pass to `WorkContent`.
- `src/components/home/hero.tsx` — accept hero data props.
- `src/components/home/featured-work.tsx` — accept project/card data props.
- `src/components/about/about-content.tsx` — accept about/experience/skills data props.
- `src/components/work/work-content.tsx` — accept projects/skill tags props.
- `src/components/layout/sidebar.tsx`, `src/components/layout/footer.tsx`, `src/components/layout/ticker.tsx` — optionally use site/navigation content if current layout hardcodes public copy.

---

## Task 1: Install TinaCMS and add scripts

**Files:**

- Modify: `package.json`
- Modify: `package-lock.json` or package manager lockfile produced by npm
- Create/Modify: `tina/config.ts` after CLI init if generated

- [ ] **Step 1: Verify current Tina install command**

Run:

```bash
npm view tinacms version
```

Expected: prints current published TinaCMS version.

- [ ] **Step 2: Install TinaCMS packages**

Run:

```bash
npm install tinacms
```

Expected: install succeeds and updates `package.json` plus lockfile.

- [ ] **Step 3: Initialize Tina if no config exists**

Run:

```bash
npx tinacms init
```

Expected: creates Tina config/scaffold files. If CLI asks interactive questions, choose local/self-hosted defaults, TypeScript, and content path `content`.

- [ ] **Step 4: Normalize package scripts**

Edit `package.json` scripts to this shape, preserving existing scripts not shown:

```json
{
  "scripts": {
    "dev": "next dev",
    "dev:tina": "tinacms dev -c \"next dev\"",
    "build": "next build",
    "build:tina": "tinacms build && next build",
    "build:tina:local": "tinacms build --local --skip-cloud-checks -c \"next build\"",
    "start": "next start",
    "typecheck": "tsc --noEmit",
    "lint": "next lint"
  }
}
```

If current Tina CLI rejects `--local` or `--skip-cloud-checks`, update `build:tina:local` to the current documented command from `npx tinacms --help`.

- [ ] **Step 5: Verify scripts parse**

Run:

```bash
npm run typecheck
```

Expected before later tasks: may fail if generated Tina imports are incomplete; record exact failure. If it fails only because content/schema not created yet, continue to Task 2.

- [ ] **Step 6: Commit Tina setup**

Run:

```bash
git add package.json package-lock.json tina tsconfig.json .gitignore
git commit -m "chore: set up TinaCMS tooling"
```

Expected: commit includes only Tina setup/tooling files.

---

## Task 2: Create content types and migrated content files

**Files:**

- Create: `src/types/content.ts`
- Create: `content/pages/site.json`
- Create: `content/pages/home.json`
- Create: `content/pages/about.json`
- Create: `content/pages/services.json`
- Create: `content/pages/contact.json`
- Create: `content/projects/mobile-fb.mdx`
- Create: `content/projects/chatapp.mdx`
- Create: `content/projects/grammedia-clone.mdx`
- Create: `content/posts/.gitkeep`
- Create: `content/case-studies/.gitkeep`

- [ ] **Step 1: Create shared content types**

Write `src/types/content.ts`:

```typescript
export type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "red" | "green";
  external?: boolean;
};

export type SeoContent = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
};

export type SiteContent = {
  name: string;
  tagline: string;
  username: string;
  description: string;
  year: number;
  seo: SeoContent & {
    siteUrl: string;
    author: {
      name: string;
      title: string;
      email: string;
      location: string;
    };
  };
  social: {
    github: string;
    linkedin: string;
    telegram: string;
  };
  navigation: Array<{ label: string; href: string }>;
};

export type HomeContent = {
  seo: SeoContent;
  hero: {
    badge?: string;
    heading: string;
    description: string;
    ctas: CtaLink[];
    trustText: string;
  };
  logos: Array<{ name: string; size: number }>;
  stats: Array<{ label: string; value: string; description?: string }>;
};

export type SkillCategory = {
  title: string;
  skills: Array<{ name: string; level: number }>;
};

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  status?: "current" | "previous";
};

export type AboutContent = {
  seo: SeoContent;
  hero: {
    heading: string;
    subheading: string;
    introduction: string;
    location: string;
    experienceYears: string;
    quote: string;
  };
  aboutMe: {
    heading: string;
    paragraph: string;
  };
  skills: {
    categories: SkillCategory[];
  };
  careerJourney: {
    timeline: ExperienceItem[];
  };
  profileImage: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  startingPrice?: string;
};

export type ServicesContent = {
  seo: SeoContent;
  hero: {
    heading: string;
    description: string;
  };
  coreServices: ServiceItem[];
  metrics: Array<{ value: string; description: string }>;
  cta: {
    heading: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

export type ContactContent = {
  seo: SeoContent;
  hero: {
    heading: string;
    description: string;
    cta: string;
  };
  form: {
    successTitle: string;
    successDescription: string;
    messagePlaceholder: string;
  };
};

export type ProjectContent = {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  image: string;
  date: string;
  status: string;
  technologies: string[];
  github: string;
  live?: string;
  featured: boolean;
  body?: string;
};
```

- [ ] **Step 2: Create `content/pages/site.json`**

Write:

```json
{
  "name": "rohimdev.com",
  "tagline": "rohim.dev",
  "username": "@rohimdev",
  "description": "Professional full-stack JavaScript engineer building scalable web and mobile applications.",
  "year": 2026,
  "seo": {
    "title": "Abdul Rohim - Full-Stack JavaScript Engineer",
    "description": "Professional full-stack JavaScript engineer with experience in React, Next.js, Node.js, TypeScript, and Golang.",
    "keywords": ["fullstack developer", "react developer", "nextjs developer", "nodejs developer", "typescript developer", "javascript developer", "golang developer"],
    "ogImage": "https://rohimdev.com/og-image.jpg",
    "siteUrl": "https://rohimdev.com",
    "author": {
      "name": "Abdul Rohim",
      "title": "Full-Stack JavaScript Engineer",
      "email": "rohimjoy70@gmail.com",
      "location": "Indonesia"
    }
  },
  "social": {
    "github": "https://github.com/tobangado69",
    "linkedin": "https://www.linkedin.com/in/tobangado",
    "telegram": "https://t.me/Tobangado70"
  },
  "navigation": [
    { "label": "Home", "href": "/" },
    { "label": "About", "href": "/about" },
    { "label": "Work", "href": "/work" },
    { "label": "Services", "href": "/services" },
    { "label": "Contact", "href": "/contact" }
  ]
}
```

- [ ] **Step 3: Create `content/pages/home.json`**

Write:

```json
{
  "seo": {
    "title": "Abdul Rohim - Full-Stack JavaScript Engineer",
    "description": "Professional full-stack JavaScript engineer building scalable web applications with React, Next.js, Node.js, TypeScript, and Golang.",
    "keywords": ["fullstack developer", "react developer", "nextjs developer", "portfolio", "web developer"]
  },
  "hero": {
    "badge": "Full-Stack Developer & Infrastructure Specialist",
    "heading": "Full-Stack Developer & Web Architect.",
    "description": "Hi, I’m Abdul Rohim. I build scalable, production-ready web applications using React, Next.js, Node.js, and Golang. 2+ years of hands-on experience delivering reliable full-stack solutions.",
    "ctas": [
      { "label": "Start a project", "href": "/contact", "variant": "primary" },
      { "label": "View Projects", "href": "/work", "variant": "secondary" },
      { "label": "Minimax Ambassador", "href": "https://minimax.ai", "variant": "red", "external": true },
      { "label": "Trae Ambassador", "href": "https://trae.ai", "variant": "green", "external": true }
    ],
    "trustText": "Trusted by startups, founders, and engineering teams."
  },
  "logos": [
    { "name": "React", "size": 48 },
    { "name": "Next.js", "size": 48 },
    { "name": "Node.js", "size": 48 },
    { "name": "PostgreSQL", "size": 48 }
  ],
  "stats": [
    { "label": "Projects", "value": "10+", "description": "Delivered across real-time chat, e-commerce, social apps, and more." },
    { "label": "Experience", "value": "2+ years", "description": "Building scalable web and mobile applications." },
    { "label": "Clients", "value": "3–5 concurrent", "description": "Active clients supported with full-stack development." },
    { "label": "Location", "value": "Surabaya", "description": "Remote-first collaboration from Indonesia." }
  ]
}
```

- [ ] **Step 4: Create `content/pages/about.json`**

Use normalized content from current `data/about.json`:

```json
{
  "seo": {
    "title": "About Abdul Rohim - Full-Stack Developer Journey",
    "description": "Learn about Abdul Rohim's journey from telecommunications engineer to full-stack developer.",
    "keywords": ["about abdul rohim", "developer journey", "telecommunications engineer", "career transition"]
  },
  "hero": {
    "heading": "Abdul Rohim",
    "subheading": "Full-Stack Developer",
    "introduction": "With 2+ years of experience, I specialize in building scalable applications using React, Next.js, Node.js, and Golang. From telecommunications to fullstack—I craft solutions that bridge systems and deliver results.",
    "location": "Surabaya, Indonesia",
    "experienceYears": "2+",
    "quote": "I Have Served and I Will Be of Service"
  },
  "aboutMe": {
    "heading": "About Me",
    "paragraph": "I'm a Full Stack Developer building scalable web applications and APIs. Currently freelancing at Rohimdev.com and working as Infrastructure & Application Engineer at Varnion Technology. I focus on clean architecture, RESTful APIs, and modern tooling—delivering 3-5 concurrent projects while improving velocity with AI-assisted development."
  },
  "skills": {
    "categories": [
      {
        "title": "Frontend",
        "skills": [
          { "name": "React & Next.js", "level": 90 },
          { "name": "TypeScript", "level": 85 },
          { "name": "Tailwind CSS", "level": 95 }
        ]
      },
      {
        "title": "Backend",
        "skills": [
          { "name": "Node.js & Express", "level": 85 },
          { "name": "Golang (Gin)", "level": 80 },
          { "name": "RESTful APIs", "level": 90 },
          { "name": "Clean Architecture", "level": 85 }
        ]
      },
      {
        "title": "Database & Tools",
        "skills": [
          { "name": "PostgreSQL", "level": 85 },
          { "name": "Prisma ORM", "level": 80 },
          { "name": "Git & Version Control", "level": 90 },
          { "name": "Docker", "level": 75 }
        ]
      }
    ]
  },
  "careerJourney": {
    "timeline": [
      {
        "period": "Jan 2025 - Present",
        "title": "Freelance Fullstack Developer",
        "company": "Rohimdev.com",
        "description": "Delivering 3-5 concurrent fullstack projects for client-specific requirements. Building backend services with Node.js, Express, Hono, and Golang (Gin), designing PostgreSQL databases with Prisma ORM, and integrating frontend applications with backend services. Using AI-assisted tools to improve development velocity.",
        "technologies": ["Node.js", "Express", "Hono", "Golang", "PostgreSQL", "Prisma", "React"],
        "status": "current"
      },
      {
        "period": "Jan 2025 - Present",
        "title": "Infrastructure & Application Engineer",
        "company": "Varnion Technology",
        "description": "Managed infrastructure operations across 6–8 active client sites. Developed internal web applications using React, Node.js, and PostgreSQL for monitoring and operational workflows. Automated reporting pipelines, reduced network incidents, and presented technical solutions to B2B stakeholders.",
        "technologies": ["React", "Node.js", "PostgreSQL", "Infrastructure", "Monitoring", "Automation"],
        "status": "current"
      },
      {
        "period": "Dec 2020 - Aug 2023",
        "title": "Provisioning Technician",
        "company": "PT Telkom Indonesia (IndiHome)",
        "description": "Installed and configured fiber optic internet services. Conducted on-site troubleshooting and signal quality testing using OTDR and OPM. Reduced repeat visits through quality workmanship and customer education.",
        "technologies": ["Fiber Optic", "OTDR", "OPM Testing", "Customer Service"],
        "status": "previous"
      }
    ]
  },
  "profileImage": "/images/profile.png"
}
```

- [ ] **Step 5: Create `content/pages/services.json`**

Use normalized services from current `data/services.json`:

```json
{
  "seo": {
    "title": "Services - Full-Stack JavaScript Development",
    "description": "Professional full-stack development services including React, Next.js, Node.js, backend APIs, and mobile apps.",
    "keywords": ["fullstack development services", "react development services", "mobile app development", "infrastructure services"]
  },
  "hero": {
    "heading": "Full‑Stack Development Services",
    "description": "Transform ideas into scalable, production‑ready applications across web and mobile."
  },
  "coreServices": [
    {
      "id": "frontend",
      "title": "Frontend Development",
      "description": "Transform your ideas into stunning, high-performance web applications using React and Next.js.",
      "features": ["React & Next.js applications", "Responsive design & mobile-first approach", "Modern UI/UX with Tailwind CSS", "Performance optimization & SEO", "Progressive Web Apps (PWA)"],
      "technologies": ["React", "Next.js", "Tailwind", "TypeScript"],
      "startingPrice": "$2,000"
    },
    {
      "id": "backend",
      "title": "Backend Development",
      "description": "Build powerful, scalable server-side solutions using Golang, Node.js, and Nest.js.",
      "features": ["RESTful APIs & GraphQL servers", "Database design (PostgreSQL, MongoDB)", "Authentication & authorization systems", "Real-time features with Socket.IO", "Cloud deployment & scaling"],
      "technologies": ["Golang", "Node.js", "Nest.js", "GraphQL", "PostgreSQL"],
      "startingPrice": "$2,500"
    },
    {
      "id": "mobile",
      "title": "Mobile Development",
      "description": "Create powerful mobile applications that work seamlessly across iOS and Android using React Native.",
      "features": ["Cross-platform React Native apps", "Native performance & user experience", "App Store & Play Store deployment", "Push notifications & offline support", "Social features & real-time chat"],
      "technologies": ["React Native", "Expo", "Firebase", "JavaScript"],
      "startingPrice": "$3,500"
    }
  ],
  "metrics": [
    { "value": "2+ years", "description": "Building scalable web and mobile applications." },
    { "value": "10+ projects", "description": "Delivered across real-time chat, e-commerce, social apps and more." },
    { "value": "3–5 concurrent", "description": "Active clients supported with full-stack development." },
    { "value": "Surabaya-based", "description": "Remote-first, async collaboration with global teams." }
  ],
  "cta": {
    "heading": "Ready to start your project?",
    "description": "Let's discuss your requirements and create something reliable together.",
    "primary": "Start a Project",
    "secondary": "View Portfolio"
  }
}
```

- [ ] **Step 6: Create `content/pages/contact.json`**

Write:

```json
{
  "seo": {
    "title": "Contact Abdul Rohim - Full-Stack Developer",
    "description": "Get in touch with Abdul Rohim for full-stack development projects.",
    "keywords": ["contact abdul rohim", "hire fullstack developer", "freelance developer contact", "react developer hire"]
  },
  "hero": {
    "heading": "Let's build something together",
    "description": "Tell me about your project, timeline, and goals. I’ll help turn the idea into a reliable full-stack product.",
    "cta": "Describe your project"
  },
  "form": {
    "successTitle": "Thank you for reaching out!",
    "successDescription": "Thanks for reaching out! I'll get back to you soon.",
    "messagePlaceholder": "Describe your project, timeline, and goals..."
  }
}
```

- [ ] **Step 7: Create project MDX files**

Write `content/projects/mobile-fb.mdx`:

```mdx
---
slug: mobile-fb
title: Mobile-FB
headline: A comprehensive full-stack social media application that replicates core Facebook functionality on mobile devices.
summary: Mobile social app with feeds, profiles, and real-time interaction patterns.
image: https://i.imgur.com/CFZvp5T.png
date: April 2024
status: In Development
technologies:
  - React Native
  - GraphQL
  - Apollo Client
  - Node.js
  - MongoDB
  - Redis
  - Expo
github: https://github.com/tobangado69/Mobile-FB
live: ""
featured: true
---

Mobile-FB is a React Native social application focused on mobile-first social networking experiences.
```

Write `content/projects/chatapp.mdx`:

```mdx
---
slug: chatapp
title: ChatApp
headline: Real-time messaging application built with React and Socket.IO, featuring live chat functionality and user presence indicators.
summary: Real-time chat app with live messaging and presence indicators.
image: https://raw.githubusercontent.com/tobangado69/ChatApp/main/assets/home.png
date: February 2024
status: In Development
technologies:
  - React
  - Socket.IO
  - Express
  - PostgreSQL
  - Sequelize
  - Tailwind CSS
github: https://github.com/tobangado69/ChatApp
live: ""
featured: true
---

ChatApp demonstrates real-time messaging patterns with Socket.IO and a full-stack JavaScript architecture.
```

Write `content/projects/grammedia-clone.mdx`:

```mdx
---
slug: grammedia-clone
title: Grammedia Clone
headline: A comprehensive e-commerce web application that replicates modern online bookstore functionality.
summary: E-commerce bookstore clone with modern browsing and shopping flows.
image: https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop
date: "2024"
status: Live
technologies:
  - Next.js
  - TypeScript
  - MongoDB
  - Tailwind CSS
  - Infinite Scroll
github: https://github.com/tobangado69/Grammedia-Clone
live: https://gramedia.vercel.app/
featured: true
---

Grammedia Clone is an e-commerce web application exploring online bookstore interactions and modern frontend patterns.
```

- [ ] **Step 8: Add future collection placeholders**

Run:

```bash
mkdir -p content/posts content/case-studies
touch content/posts/.gitkeep content/case-studies/.gitkeep
```

Expected: placeholder files exist.

- [ ] **Step 9: Verify JSON syntax**

Run:

```bash
node -e "for (const f of ['content/pages/site.json','content/pages/home.json','content/pages/about.json','content/pages/services.json','content/pages/contact.json']) JSON.parse(require('fs').readFileSync(f,'utf8')); console.log('content json ok')"
```

Expected:

```text
content json ok
```

- [ ] **Step 10: Commit content migration files**

Run:

```bash
git add src/types/content.ts content
git commit -m "feat: add CMS content model files"
```

Expected: commit contains content files and shared content types only.

---

## Task 3: Implement content access layer

**Files:**

- Create: `src/lib/content.ts`
- Modify: `tsconfig.json` only if Node imports require config changes

- [ ] **Step 1: Write `src/lib/content.ts`**

```typescript
import fs from "node:fs";
import path from "node:path";
import type {
  AboutContent,
  ContactContent,
  HomeContent,
  ProjectContent,
  ServicesContent,
  SiteContent,
} from "@/types/content";

const root = process.cwd();
const contentRoot = path.join(root, "content");

function readJson<T>(relativePath: string): T {
  const filePath = path.join(contentRoot, relativePath);
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as T;
}

function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  if (!raw.startsWith("---")) return { data: {}, body: raw.trim() };

  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: raw.trim() };

  const frontmatter = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).trim();
  const data: Record<string, unknown> = {};
  let currentArrayKey: string | null = null;

  for (const line of frontmatter.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("- ") && currentArrayKey) {
      const value = trimmed.slice(2).trim();
      (data[currentArrayKey] as string[]).push(unquote(value));
      continue;
    }

    const separatorIndex = trimmed.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (!value) {
      data[key] = [];
      currentArrayKey = key;
      continue;
    }

    currentArrayKey = null;
    data[key] = value === "true" ? true : value === "false" ? false : unquote(value);
  }

  return { data, body };
}

function unquote(value: string): string {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function projectFromMdx(fileName: string): ProjectContent {
  const raw = fs.readFileSync(path.join(contentRoot, "projects", fileName), "utf8");
  const { data, body } = parseFrontmatter(raw);

  return {
    slug: String(data.slug ?? fileName.replace(/\.mdx$/, "")),
    title: String(data.title ?? "Untitled Project"),
    headline: String(data.headline ?? ""),
    summary: String(data.summary ?? ""),
    image: String(data.image ?? ""),
    date: String(data.date ?? ""),
    status: String(data.status ?? ""),
    technologies: Array.isArray(data.technologies) ? (data.technologies as string[]) : [],
    github: String(data.github ?? ""),
    live: data.live ? String(data.live) : undefined,
    featured: Boolean(data.featured),
    body,
  };
}

export function getSiteContent(): SiteContent {
  return readJson<SiteContent>("pages/site.json");
}

export function getHomeContent(): HomeContent {
  return readJson<HomeContent>("pages/home.json");
}

export function getAboutContent(): AboutContent {
  return readJson<AboutContent>("pages/about.json");
}

export function getServicesContent(): ServicesContent {
  return readJson<ServicesContent>("pages/services.json");
}

export function getContactContent(): ContactContent {
  return readJson<ContactContent>("pages/contact.json");
}

export function getProjects(): ProjectContent[] {
  const dir = path.join(contentRoot, "projects");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(projectFromMdx)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function getProjectBySlug(slug: string): ProjectContent | undefined {
  return getProjects().find((project) => project.slug === slug);
}
```

- [ ] **Step 2: Verify helper compiles**

Run:

```bash
npm run typecheck
```

Expected: PASS or only Tina generated-file errors from Task 1 if Tina scaffold incomplete. Fix content helper errors before continuing.

- [ ] **Step 3: Smoke-test content helpers**

Run:

```bash
node -e "const fs=require('fs'); console.log(fs.existsSync('content/pages/site.json') && fs.existsSync('content/projects/mobile-fb.mdx') ? 'content files ok' : 'missing content files')"
```

Expected:

```text
content files ok
```

- [ ] **Step 4: Commit content access layer**

Run:

```bash
git add src/lib/content.ts tsconfig.json
git commit -m "feat: add CMS content access helpers"
```

Expected: focused commit.

---

## Task 4: Configure Tina schema

**Files:**

- Modify/Create: `tina/config.ts`

- [ ] **Step 1: Replace Tina config with project schema**

Write `tina/config.ts` using current Tina `defineConfig` import generated by CLI. If CLI generated `tina/config.tsx`, keep generated extension and adjust imports accordingly.

```typescript
import { defineConfig } from "tinacms";

const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "local",
  token: process.env.TINA_TOKEN || "local",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" }, required: true },
              { type: "string", name: "keywords", label: "Keywords", list: true },
              { type: "image", name: "ogImage", label: "OG Image" },
              { type: "string", name: "siteUrl", label: "Site URL" },
            ],
          },
          { type: "string", name: "name", label: "Site Name" },
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "username", label: "Username" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "number", name: "year", label: "Year" },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subheading", label: "Subheading" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "introduction", label: "Introduction", ui: { component: "textarea" } },
              { type: "string", name: "location", label: "Location" },
              { type: "string", name: "experienceYears", label: "Experience Years" },
              { type: "string", name: "quote", label: "Quote" },
              { type: "string", name: "trustText", label: "Trust Text" },
              { type: "string", name: "cta", label: "CTA" },
              {
                type: "object",
                name: "ctas",
                label: "CTA Links",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Href" },
                  { type: "string", name: "variant", label: "Variant", options: ["primary", "secondary", "red", "green"] },
                  { type: "boolean", name: "external", label: "External" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Links",
            fields: [
              { type: "string", name: "github", label: "GitHub" },
              { type: "string", name: "linkedin", label: "LinkedIn" },
              { type: "string", name: "telegram", label: "Telegram" },
            ],
          },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Href" },
            ],
          },
          {
            type: "object",
            name: "logos",
            label: "Logos",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "number", name: "size", label: "Size" },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "aboutMe",
            label: "About Me",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "paragraph", label: "Paragraph", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "skills",
            label: "Skills",
            fields: [
              {
                type: "object",
                name: "categories",
                label: "Categories",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "object",
                    name: "skills",
                    label: "Skills",
                    list: true,
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "number", name: "level", label: "Level" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "careerJourney",
            label: "Career Journey",
            fields: [
              {
                type: "object",
                name: "timeline",
                label: "Timeline",
                list: true,
                fields: [
                  { type: "string", name: "period", label: "Period" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "company", label: "Company" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "technologies", label: "Technologies", list: true },
                  { type: "string", name: "status", label: "Status", options: ["current", "previous"] },
                ],
              },
            ],
          },
          { type: "image", name: "profileImage", label: "Profile Image" },
          {
            type: "object",
            name: "coreServices",
            label: "Core Services",
            list: true,
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true },
              { type: "string", name: "technologies", label: "Technologies", list: true },
              { type: "string", name: "startingPrice", label: "Starting Price" },
            ],
          },
          {
            type: "object",
            name: "metrics",
            label: "Metrics",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "primary", label: "Primary Label" },
              { type: "string", name: "secondary", label: "Secondary Label" },
            ],
          },
          {
            type: "object",
            name: "form",
            label: "Form",
            fields: [
              { type: "string", name: "successTitle", label: "Success Title" },
              { type: "string", name: "successDescription", label: "Success Description" },
              { type: "string", name: "messagePlaceholder", label: "Message Placeholder" },
            ],
          },
        ],
      },
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
          { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
          { type: "image", name: "image", label: "Image" },
          { type: "string", name: "date", label: "Date" },
          { type: "string", name: "status", label: "Status" },
          { type: "string", name: "technologies", label: "Technologies", list: true },
          { type: "string", name: "github", label: "GitHub URL" },
          { type: "string", name: "live", label: "Live URL" },
          { type: "boolean", name: "featured", label: "Featured" },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
    ],
  },
});
```

If Tina reports JSON collection field conflicts because `site.json` differs from page JSON shape, split `site` into a separate collection:

```typescript
{
  name: "site",
  label: "Site Settings",
  path: "content/site",
  format: "json",
  fields: [/* site-only fields */]
}
```

Then move `content/pages/site.json` to `content/site/settings.json` and update `getSiteContent()`.

- [ ] **Step 2: Run Tina build/generation**

Run:

```bash
npx tinacms build --local --skip-cloud-checks
```

Expected: Tina generates required admin/client files without schema errors. If flags changed, run current documented equivalent from `npx tinacms --help`.

- [ ] **Step 3: Run typecheck**

Run:

```bash
npm run typecheck
```

Expected: PASS. If fail comes from Tina schema type mismatch, adjust schema to current Tina types.

- [ ] **Step 4: Commit Tina schema**

Run:

```bash
git add tina public/admin .tina package.json package-lock.json tsconfig.json
git commit -m "feat: configure TinaCMS schema"
```

Expected: commit includes Tina schema/generated files required for admin.

---

## Task 5: Wire CMS metadata and homepage hero

**Files:**

- Modify: `src/lib/seo.ts`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/components/home/hero.tsx`

- [ ] **Step 1: Update `src/lib/seo.ts`**

Replace static `data/site.json` dependency with CMS content:

```typescript
import type { Metadata } from "next";
import { getSiteContent, getHomeContent, getAboutContent, getServicesContent, getContactContent } from "@/lib/content";
import type { SeoContent } from "@/types/content";

type PageKey = "home" | "about" | "work" | "services" | "contact" | "projects" | "privacy" | "terms";

function metadataFromSeo(seo: SeoContent, siteName: string): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
  };
}

export function getDefaultMetadata(): Metadata {
  const site = getSiteContent();

  return {
    metadataBase: new URL(site.seo.siteUrl),
    title: {
      default: site.seo.title,
      template: `%s | ${site.name}`,
    },
    description: site.seo.description,
    keywords: site.seo.keywords,
    authors: [{ name: site.seo.author.name, url: site.seo.siteUrl }],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: site.seo.siteUrl,
      siteName: site.name,
      title: site.seo.title,
      description: site.seo.description,
      images: site.seo.ogImage
        ? [{ url: site.seo.ogImage, width: 1200, height: 630, alt: site.seo.author.name }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: site.seo.title,
      description: site.seo.description,
      images: site.seo.ogImage ? [site.seo.ogImage] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

export function getPageMetadata(pageKey: PageKey): Metadata {
  const site = getSiteContent();

  if (pageKey === "home") return metadataFromSeo(getHomeContent().seo, site.name);
  if (pageKey === "about") return metadataFromSeo(getAboutContent().seo, site.name);
  if (pageKey === "services") return metadataFromSeo(getServicesContent().seo, site.name);
  if (pageKey === "contact") return metadataFromSeo(getContactContent().seo, site.name);

  return {};
}
```

- [ ] **Step 2: Update `src/components/home/hero.tsx` props**

Change component signature and CTA rendering:

```typescript
import Image from "next/image";
import { GlassButton } from "@/components/ui/glass-button";
import { LogoMarquee } from "./logo-marquee";
import { PROFILE } from "@/lib/constants";
import type { HomeContent } from "@/types/content";

type HeroProps = {
  hero: HomeContent["hero"];
};

export function Hero({ hero }: HeroProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 gap-x-12 gap-y-12">
      <div className="animate-clip-in lg:col-span-7 pb-4 space-y-8" style={{ animationDelay: "0.4s" }}>
        <h1 className="leading-[0.95] lg:text-7xl xl:text-7xl text-5xl font-medium text-neutral-900 tracking-tight">
          {hero.heading}
        </h1>
        <p className="leading-snug lg:text-base text-xl font-normal text-neutral-500">
          {hero.description}
        </p>
        <div className="flex flex-wrap gap-3">
          {hero.ctas.map((cta) => (
            <GlassButton key={`${cta.href}-${cta.label}`} href={cta.href} variant={cta.variant} external={cta.external}>
              {cta.label}
            </GlassButton>
          ))}
        </div>

        <section className="animate-fade-up w-full my-6 space-y-2" style={{ animationDelay: "0.6s" }}>
          <p className="text-base text-neutral-500">{hero.trustText}</p>
          <LogoMarquee />
        </section>
      </div>

      <div className="animate-clip-in lg:col-span-5 flex items-center justify-center overflow-hidden relative" style={{ animationDelay: "0.5s" }}>
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-200 group cursor-pointer">
          <Image
            src={PROFILE.avatar}
            alt={PROFILE.name}
            fill
            className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 33vw"
            priority
          />
          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              <div className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center gap-1 sm:gap-2 text-white bg-black/40 backdrop-blur-md border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="hidden sm:inline">REC</span>
              </div>
            </div>
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 border border-white/40 rounded-2xl flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
              <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-l-2 border-white -mt-0.5 -ml-0.5" />
              <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-white -mt-0.5 -mr-0.5" />
              <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-white -mb-0.5 -ml-0.5" />
              <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-r-2 border-white -mb-0.5 -mr-0.5" />
              <div className="bg-black/60 backdrop-blur-md px-1 sm:px-2 py-0.5 sm:py-1 rounded text-[8px] sm:text-[10px] text-white uppercase tracking-widest">Tracking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update homepage to pass content**

Edit `src/app/page.tsx`:

```typescript
import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { FeaturedWork } from "@/components/home/featured-work";
import { Metrics } from "@/components/home/metrics";
import { HowWeWork } from "@/components/home/how-we-work";
import { FeaturesGrid } from "@/components/home/features-grid";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ServicesOverview } from "@/components/home/services-overview";
import { PricingPreview } from "@/components/home/pricing-preview";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { getPageMetadata } from "@/lib/seo";
import { getHomeContent, getProjects } from "@/lib/content";

export const metadata: Metadata = getPageMetadata("home");

export default function HomePage() {
  const home = getHomeContent();
  const projects = getProjects().filter((project) => project.featured);

  return (
    <>
      <Hero hero={home.hero} />
      <FeaturedWork projects={projects} />
      <Metrics />
      <HowWeWork />
      <FeaturesGrid />
      <WhyChooseUs />
      <ServicesOverview />
      <PricingPreview />
      <Testimonials />
      <FAQ />
    </>
  );
}
```

- [ ] **Step 4: Typecheck metadata/home changes**

Run:

```bash
npm run typecheck
```

Expected: PASS or actionable prop errors. Fix before continuing.

- [ ] **Step 5: Commit metadata/home integration**

Run:

```bash
git add src/lib/seo.ts src/app/layout.tsx src/app/page.tsx src/components/home/hero.tsx
git commit -m "feat: source homepage metadata and hero from CMS content"
```

Expected: focused commit.

---

## Task 6: Wire projects into featured work and work page

**Files:**

- Modify: `src/components/home/featured-work.tsx`
- Modify: `src/components/work/work-content.tsx`
- Modify: `src/app/work/page.tsx`

- [ ] **Step 1: Update `FeaturedWork` props**

Replace hardcoded `CARDS` with prop-driven projects:

```typescript
"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import type { ProjectContent } from "@/types/content";

type FeaturedWorkProps = {
  projects: ProjectContent[];
};

export function FeaturedWork({ projects }: FeaturedWorkProps) {
  const cards = projects.length > 0 ? projects : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotate = useCallback((dir: number) => {
    if (cards.length === 0) return;
    setCurrentIndex((prev) => (prev + dir + cards.length) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    if (cards.length <= 1) return;
    const id = setInterval(() => rotate(1), 5000);
    return () => clearInterval(id);
  }, [cards.length, rotate]);

  if (cards.length === 0) return null;

  return (
    <section className="animate-fade-up w-full pt-12 pb-12 relative" style={{ animationDelay: "0.8s" }}>
      <div className="flex mb-12 pr-2 pl-2 items-end justify-between">
        <SectionHeader title="Featured Work" />
        <div className="flex gap-4">
          <button onClick={() => rotate(-1)} className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white hover:border-neutral-400 transition-colors" aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => rotate(1)} className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white hover:border-neutral-400 transition-colors" aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="carousel-container flex w-full h-[500px] relative items-center justify-center">
        {cards.map((card, i) => {
          const offset = (i - currentIndex + cards.length) % cards.length;
          let pos: "active" | "prev" | "next" = "active";
          if (offset === 1) pos = "next";
          else if (offset === cards.length - 1) pos = "prev";

          return (
            <SpotlightCard key={card.slug} className={`carousel-card lg:w-3/4 glass-panel cursor-pointer w-full h-full rounded-3xl p-2 ${pos}`}>
              <div className="w-full h-full bg-neutral-50 rounded-2xl overflow-hidden relative group">
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                  <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-black/5">
                    {card.title}
                  </span>
                </div>
                <div className="flex bg-gradient-to-br from-neutral-100 to-neutral-200 w-full h-full items-center justify-center">
                  <div className="relative transform group-hover:scale-[1.02] transition-transform duration-500 bg-white w-[80%] h-[70%] border border-neutral-100 rounded-xl p-6 shadow-2xl overflow-hidden">
                    <Image src={card.image} alt={card.title} fill className="object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update `WorkContent` to accept projects**

Change signature and remove hardcoded `PROJECTS`:

```typescript
import type { ProjectContent } from "@/types/content";

type WorkContentProps = {
  projects: ProjectContent[];
};

export function WorkContent({ projects }: WorkContentProps) {
  const [view, setView] = useState<"list" | "grid">("list");

  // keep existing JSX, replace PROJECTS.map with projects.map
}
```

Keep `SKILL_TAGS` hardcoded for now unless separately moved to content.

- [ ] **Step 3: Update `src/app/work/page.tsx`**

Use:

```typescript
import type { Metadata } from "next";
import { WorkContent } from "@/components/work/work-content";
import { getPageMetadata } from "@/lib/seo";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = getPageMetadata("work");

export default function WorkPage() {
  return <WorkContent projects={getProjects()} />;
}
```

If `getPageMetadata("work")` returns `{}` because work metadata is not yet migrated, keep current fallback or add work SEO to `content/pages/site.json` in Task 2.

- [ ] **Step 4: Typecheck project integration**

Run:

```bash
npm run typecheck
```

Expected: PASS.

- [ ] **Step 5: Build smoke check**

Run:

```bash
npm run build
```

Expected: PASS. If remote images fail because of Next image config, use existing config pattern or set images remote patterns; do not disable image optimization globally unless already done.

- [ ] **Step 6: Commit project integration**

Run:

```bash
git add src/components/home/featured-work.tsx src/components/work/work-content.tsx src/app/work/page.tsx src/lib/content.ts src/types/content.ts content/projects
git commit -m "feat: source projects from CMS content"
```

Expected: focused commit.

---

## Task 7: Wire About page content

**Files:**

- Modify: `src/app/about/page.tsx`
- Modify: `src/components/about/about-content.tsx`

- [ ] **Step 1: Update About page to load content**

Edit `src/app/about/page.tsx`:

```typescript
import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";
import { getAboutContent } from "@/lib/content";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("about");

export default function AboutPage() {
  return <AboutContent content={getAboutContent()} />;
}
```

- [ ] **Step 2: Update AboutContent signature**

At top of `src/components/about/about-content.tsx`, add:

```typescript
import type { AboutContent as AboutContentData } from "@/types/content";

type AboutContentProps = {
  content: AboutContentData;
};
```

Change:

```typescript
export function AboutContent() {
  const hero = ABOUT.hero;
```

To:

```typescript
export function AboutContent({ content }: AboutContentProps) {
  const hero = content.hero;
```

- [ ] **Step 3: Replace skills and positions sources**

Change:

```typescript
const allSkills = ABOUT.skills.categories.flatMap((c) =>
  c.skills.map((s) => ({ ...s, category: c.title })),
);
const positions = WORK_POSITIONS;
```

To:

```typescript
const allSkills = content.skills.categories.flatMap((category) =>
  category.skills.map((skill) => ({ ...skill, category: category.title })),
);
const positions = content.careerJourney.timeline;
```

- [ ] **Step 4: Remove local hardcoded constants**

Delete `ABOUT` and `WORK_POSITIONS` constants after confirming no references remain.

- [ ] **Step 5: Typecheck About migration**

Run:

```bash
npm run typecheck
```

Expected: PASS.

- [ ] **Step 6: Commit About migration**

Run:

```bash
git add src/app/about/page.tsx src/components/about/about-content.tsx content/pages/about.json
git commit -m "feat: source about page from CMS content"
```

Expected: focused commit.

---

## Task 8: Wire Services and Contact content

**Files:**

- Modify: `src/app/services/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/components/contact/contact-form.tsx`

- [ ] **Step 1: Update services page to load content**

At top of `src/app/services/page.tsx`, add:

```typescript
import { getServicesContent } from "@/lib/content";
```

Inside `ServicesPage`:

```typescript
const services = getServicesContent();
```

Replace static hero copy:

```tsx
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 mb-6">
  {services.hero.heading}
</h1>
<p className="text-lg text-neutral-500 leading-relaxed">
  {services.hero.description}
</p>
```

Replace `SERVICE_COLUMNS.map(...)` with `services.coreServices.map(...)`. Keep existing icon layout by deriving icon per service id:

```typescript
function getServiceIcon(id: string) {
  if (id === "backend") return /* existing backend svg */;
  if (id === "mobile") return /* existing mobile svg */;
  return /* existing frontend svg */;
}
```

- [ ] **Step 2: Replace service metrics**

Replace `METRICS.map` usage with:

```tsx
{services.metrics.map((metric) => (
  <div key={metric.value}>
    <div>{metric.value}</div>
    <p>{metric.description}</p>
  </div>
))}
```

Keep existing classes from current JSX.

- [ ] **Step 3: Update contact page to pass content to form**

Read current `src/app/contact/page.tsx`; then add:

```typescript
import { getContactContent } from "@/lib/content";
```

Inside page:

```typescript
const contact = getContactContent();
```

Pass form content:

```tsx
<ContactForm content={contact.form} />
```

Replace page hero copy with `contact.hero.heading`, `contact.hero.description`, and `contact.hero.cta` wherever matching content exists.

- [ ] **Step 4: Update ContactForm props**

Change `src/components/contact/contact-form.tsx`:

```typescript
type ContactFormProps = {
  content: {
    successTitle: string;
    successDescription: string;
    messagePlaceholder: string;
  };
};

export function ContactForm({ content }: ContactFormProps) {
```

Replace success text:

```tsx
<p className="text-lg font-medium text-neutral-900">{content.successTitle}</p>
<p className="text-neutral-500 text-center">{content.successDescription}</p>
```

Replace textarea placeholder:

```tsx
placeholder={content.messagePlaceholder}
```

- [ ] **Step 5: Typecheck Services/Contact migration**

Run:

```bash
npm run typecheck
```

Expected: PASS.

- [ ] **Step 6: Commit Services/Contact migration**

Run:

```bash
git add src/app/services/page.tsx src/app/contact/page.tsx src/components/contact/contact-form.tsx content/pages/services.json content/pages/contact.json
git commit -m "feat: source services and contact pages from CMS content"
```

Expected: focused commit.

---

## Task 9: Verify Tina admin workflow

**Files:**

- Modify: any Tina-generated file if required by current CLI
- Modify: `README.md` only if project already has one and user wants docs; otherwise skip docs creation

- [ ] **Step 1: Run Tina build**

Run:

```bash
npm run build:tina:local
```

Expected: Tina admin builds and Next.js build succeeds.

- [ ] **Step 2: Start Tina dev server**

Before starting, check existing terminals for running dev servers. If none, run:

```bash
npm run dev:tina
```

Expected: Next dev server starts and Tina admin URL is available, commonly `/admin/index.html` or `/admin` depending on current Tina version.

- [ ] **Step 3: Verify admin route manually**

Open local URL shown by dev server and visit Tina admin path.

Expected:

- Admin loads.
- Collections visible: Pages and Projects.
- Existing content files appear.

- [ ] **Step 4: Edit one harmless field**

In Tina admin, change `content/pages/home.json` hero trust text from:

```text
Trusted by startups, founders, and engineering teams.
```

To:

```text
Trusted by founders, startups, and engineering teams.
```

Save.

Expected: `content/pages/home.json` changes in git diff.

- [ ] **Step 5: Revert sample content edit or keep intentionally**

If edit is only verification, revert to original:

```text
Trusted by startups, founders, and engineering teams.
```

Expected: no accidental copy change remains unless user approves it.

- [ ] **Step 6: Run final typecheck/build**

Run:

```bash
npm run typecheck
npm run build
```

Expected: both PASS.

- [ ] **Step 7: Commit admin workflow fixes**

If files changed:

```bash
git add tina public/admin .tina package.json package-lock.json content src
git commit -m "chore: verify TinaCMS admin workflow"
```

Expected: focused commit if needed. If no files changed, skip commit.

---

## Task 10: Final review and handoff

**Files:**

- Read: `git diff --stat HEAD~8..HEAD` or relevant commit range
- Read: `git status --short`

- [ ] **Step 1: Confirm working tree scope**

Run:

```bash
git status --short
```

Expected: only unrelated pre-existing `.cursor/*` and SDD files remain if they existed before. No unintended `content/`, `src/`, `tina/`, `public/admin`, or lockfile changes unstaged.

- [ ] **Step 2: Run final verification**

Run:

```bash
npm run typecheck
npm run build
```

Expected: both PASS.

- [ ] **Step 3: Review diff for hardcoded content regressions**

Run:

```bash
git log --oneline -10
git diff --stat origin/rohimdev-com-v2..HEAD
```

Expected: commits show focused TinaCMS/content migration. Diff includes content, Tina schema/admin, and targeted component/page refactors.

- [ ] **Step 4: Summarize handoff**

Report:

- CMS installed and configured.
- Editable content moved to `content/`.
- Projects are one file per project.
- Core pages read from content helpers.
- Tina admin verified locally.
- Commands run and results.

- [ ] **Step 5: Do not push unless user asks**

Stop after local commits. If user wants remote update, ask before `git push`.
