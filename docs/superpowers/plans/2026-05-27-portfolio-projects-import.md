# Portfolio Projects Import Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add three new full case-study portfolio projects from local repositories, make them the featured work, and keep images ready for later Tina uploads.

**Architecture:** This is a content-only change. Existing `content/projects/*.mdx` files feed `src/lib/content.ts`, `/work`, and `/work/[slug]`; new MDX files reuse the current structured frontmatter model. Legacy projects stay in place with `featured: false` so old URLs keep working.

**Tech Stack:** Next.js App Router, TinaCMS MDX content, TypeScript content model, existing project detail components.

---

## File Structure

### Create

- `content/projects/neuro-health.mdx` — new private research/mobile health case study, no public links, images uploaded later via Tina.
- `content/projects/project-forwarder.mdx` — new live WhatsApp aggregator marketplace case study, live URL only.
- `content/projects/flux.mdx` — new internal Varnion operations case study, no public links, includes Nano mock image prompts in body.

### Modify

- `content/projects/chatapp.mdx` — set `featured: false` only.
- `content/projects/grammedia-clone.mdx` — set `featured: false` only.
- `content/projects/mobile-fb.mdx` — set `featured: false` only.

### Do Not Modify

- `src/lib/content.ts` — parser already supports `images` and structured detail content.
- `tina/config.ts` — project schema already supports `images` list and detail sections.
- `src/components/work/*` — current UI already renders featured sorting and detail pages.

---

## Task 1: Create Neuro Health case study

**Files:**

- Create: `content/projects/neuro-health.mdx`

- [ ] **Step 1: Create MDX file**

Write `content/projects/neuro-health.mdx`:

```mdx
---
slug: neuro-health
title: Neuro Health
headline: Research-driven mobile health app for sodium tracking, physical activity, hypertension literacy, and AI coaching.
summary: AI-assisted mobile health companion for Indonesian high-school students participating in hypertension literacy research.
images: []
image: ""
date: "2026"
status: Research / Private
technologies:
  - Expo Router
  - React Native
  - TypeScript
  - Express
  - Supabase
  - MiniMax AI
  - Zustand
  - TanStack Query
github: ""
live: ""
featured: true
seo:
  title: "Neuro Health Case Study"
  description: "Private research mobile app for sodium intake tracking, physical activity monitoring, hypertension literacy, and AI coaching."
  keywords:
    - React Native
    - Expo
    - Supabase
    - AI Coach
    - Health Tech
    - Hypertension Literacy
  ogImage: ""
detail:
  hero:
    eyebrow: "Health Tech Research"
    title: "Neuro Health"
    subtitle: "A research-driven mobile health companion helping Indonesian students understand sodium intake, activity habits, and hypertension literacy through AI coaching."
    primaryCta:
      label: "Discuss a similar app"
      href: "/contact"
      variant: "primary"
      external: false
  metadata:
    role: "Full-stack Mobile Developer"
    client: "Academic Research / Private"
    timeline: "2026"
    platform: "iOS & Android (Expo)"
    year: "2026"
    collaboration: "Research product team"
  designDirection:
    heading: "Mobile Health UX Direction"
    summary: "The app needed to translate clinical hypertension literacy goals into a calm, student-friendly mobile flow that supports daily habit formation."
    bullets:
      - "Dashboard-first experience for quick daily progress checks."
      - "Clear sodium warnings grounded in WHO guidance."
      - "Education and quiz flows designed for high-school comprehension."
      - "AI coach interactions constrained by rate limits and safety-focused messaging."
  overview:
    heading: "Project Overview"
    summary: "Neuro Health is a mobile application built for an academic study on AI coaching, sodium diet behavior, physical activity, and hypertension literacy among Indonesian high-school students."
    bullets:
      - "Daily health score combines sodium, activity, reminders, and education progress."
      - "Students can log food and receive automatic sodium estimates."
      - "Physical activity tracking supports step goals and weekly charts."
      - "MiniMax-powered AI coach provides personalised guidance within backend rate limits."
  challenge:
    heading: "The Challenge"
    summary: "Health research software must balance clear behavioral guidance, safe AI responses, privacy-sensitive data handling, and a mobile experience that students can use consistently."
    bullets:
      - "Nutrition data must be simple enough for students but structured enough for research."
      - "AI coaching needs guardrails, limits, and predictable backend behavior."
      - "Education flows must support pre/post-test literacy measurement."
      - "Mobile reminders should encourage consistency without overwhelming users."
  solution:
    heading: "The Solution"
    summary: "A TypeScript monorepo with an Expo mobile app, Express API, Supabase backend, and MiniMax AI integration for guided health coaching."
    bullets:
      - "Expo Router powers the mobile experience with native-feeling navigation."
      - "Supabase stores auth, profile, diet, activity, quiz, and education data."
      - "Express API centralizes AI coach calls, validation, rate limiting, CORS, and security headers."
      - "Zustand and TanStack Query separate local UI state from server state."
  techStack:
    - category: "Mobile"
      tools:
        - Expo Router
        - React Native
        - React 19
        - Zustand
        - TanStack Query
    - category: "Backend"
      tools:
        - Node.js
        - Express
        - TypeScript
        - Zod
        - Helmet
        - CORS
    - category: "Data & Auth"
      tools:
        - Supabase
        - PostgreSQL
    - category: "AI & Tooling"
      tools:
        - MiniMax Text API
        - Vitest
        - GitHub Actions
  features:
    - title: "Daily health dashboard"
      description: "Shows a student-friendly summary of health score, progress, and reminders."
      impact: "Turns research indicators into a practical daily check-in loop."
    - title: "Sodium diet tracking"
      description: "Students can log food and receive sodium estimates with WHO-based warning thresholds."
      impact: "Makes diet behavior visible and actionable."
    - title: "Physical activity monitoring"
      description: "Pedometer and weekly charts help students understand movement habits over time."
      impact: "Supports lifestyle intervention beyond nutrition alone."
    - title: "Hypertension education and quizzes"
      description: "Articles and pre/post-test quizzes measure and reinforce hypertension literacy."
      impact: "Connects learning outcomes directly to app usage."
    - title: "AI coach"
      description: "MiniMax-powered coach provides personalised guidance through a controlled backend endpoint."
      impact: "Adds conversational support without exposing AI keys or uncontrolled client calls."
  process:
    - phase: "Research mapping"
      title: "Translate study goals into product flows"
      description: "Mapped sodium behavior, activity tracking, education content, and literacy measurement into mobile modules."
      outputs:
        - "Feature map"
        - "Data requirements"
        - "Research-aligned user flows"
    - phase: "Mobile and API build"
      title: "Implement app and backend foundations"
      description: "Built the Expo app, Express API, Supabase schema, and AI coach integration around typed contracts."
      outputs:
        - "Mobile screens"
        - "API routes"
        - "Supabase migration"
    - phase: "Safety and validation"
      title: "Harden AI and health-data boundaries"
      description: "Added validation, rate limits, security middleware, and testable backend boundaries for sensitive flows."
      outputs:
        - "AI rate limiting"
        - "Health check endpoint"
        - "Backend tests"
  deliverables:
    - title: "Expo mobile application"
      description: "Student-facing mobile app for dashboard, diet, activity, education, quiz, and AI coach flows."
    - title: "Express backend API"
      description: "Typed API layer for Supabase data access, validation, security middleware, and MiniMax AI calls."
    - title: "Supabase schema"
      description: "Database migration for auth-connected research app entities."
    - title: "Research-ready app structure"
      description: "Monorepo layout with backend, mobile app, docs, scripts, and specs."
  metrics:
    - value: "6 modules"
      label: "Core app areas"
      description: "Dashboard, diet, activity, education, quiz, and AI coach."
    - value: "2000 mg/day"
      label: "Sodium threshold"
      description: "WHO-based sodium warning target surfaced in the app."
    - value: "2 apps"
      label: "Workspace packages"
      description: "Expo mobile app plus Express backend."
  conversion:
    heading: "Building health-tech or research software?"
    description: "Neuro Health shows how I approach sensitive mobile workflows, AI integration, and research-aligned product design."
    ctas:
      - label: "Start a conversation"
        href: "/contact"
        variant: "primary"
        external: false
  responsiveUx:
    breakpoints:
      - "Mobile-first Expo screens for high-school users"
      - "Charts and dashboards tuned for phone-sized reading"
    interactionNotes:
      - "Daily reminders and progress feedback reinforce habit formation"
      - "AI chat flow keeps guidance accessible without leaving the app"
    accessibilityNotes:
      - "Readable health indicators and warning text"
      - "Simple navigation for repeat daily use"
  seoPerformance:
    performanceTargets:
      - "Keep mobile screens responsive under repeated tracking flows"
      - "Avoid exposing AI calls from the client"
    seoNotes:
      - "Private research project; portfolio page focuses on technical and product process"
    technicalChecks:
      - "Backend typecheck and Vitest support API reliability"
      - "Health endpoint validates backend availability"
  infrastructure:
    hosting: "Private research deployment"
    backend: "Express TypeScript API"
    database: "Supabase PostgreSQL"
    storage: "Supabase-managed data"
    monitoring: "Backend health check and test suite"
---

Neuro Health turns a formal health-literacy research objective into a practical mobile product: students can track behavior, learn through structured content, and receive guided AI support without exposing sensitive implementation details publicly.
```

- [ ] **Step 2: Verify file exists**

Run:

```bash
test -f content/projects/neuro-health.mdx && echo "neuro-health created"
```

Expected output:

```text
neuro-health created
```

- [ ] **Step 3: Commit Neuro Health content**

Run:

```bash
git add content/projects/neuro-health.mdx
git commit -m "content: add Neuro Health case study"
```

Expected: commit succeeds with only `content/projects/neuro-health.mdx` staged.

---

## Task 2: Create Project Forwarder case study

**Files:**

- Create: `content/projects/project-forwarder.mdx`

- [ ] **Step 1: Create MDX file**

Write `content/projects/project-forwarder.mdx`:

```mdx
---
slug: project-forwarder
title: Project Forwarder
headline: WhatsApp aggregator marketplace connecting project owners and freelancers while keeping phone numbers private.
summary: Middleware platform for project routing, WhatsApp conversations, admin operations, AI replies, blast campaigns, and meeting workflows.
images: []
image: ""
date: "2026"
status: Live
technologies:
  - Go
  - Gin
  - MySQL
  - GORM
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - whatsmeow
  - shadcn/ui
github: ""
live: "https://gudangdistribusi.com/"
featured: true
seo:
  title: "Project Forwarder Case Study"
  description: "Live WhatsApp aggregator marketplace with Go/Gin backend, React dashboard, WhatsApp routing, AI replies, blast campaigns, and admin workflows."
  keywords:
    - Go
    - Gin
    - WhatsApp Bot
    - React
    - Marketplace
    - Admin Dashboard
    - AI Agent
  ogImage: ""
detail:
  hero:
    eyebrow: "Marketplace Automation"
    title: "Project Forwarder"
    subtitle: "A WhatsApp-first project marketplace that routes owner and freelancer communication while keeping phone numbers private."
    primaryCta:
      label: "View live site"
      href: "https://gudangdistribusi.com/"
      variant: "primary"
      external: true
    secondaryCta:
      label: "Discuss automation"
      href: "/contact"
      variant: "secondary"
      external: false
  metadata:
    role: "Full-stack Developer"
    client: "Gudang Distribusi"
    timeline: "2026"
    platform: "Web dashboard + WhatsApp bot"
    year: "2026"
    collaboration: "Product and operations team"
  designDirection:
    heading: "Operations Dashboard Direction"
    summary: "The product combines marketplace management, WhatsApp routing, and campaign operations into one admin-focused workflow."
    bullets:
      - "Dashboard surfaces project state, conversations, device status, and blast activity."
      - "Role-based flows separate owners, freelancers, and administrators."
      - "WhatsApp interactions stay operational while web views handle approval and monitoring."
      - "AI replies support conversations without replacing admin control."
  overview:
    heading: "Project Overview"
    summary: "Project Forwarder acts as middleware between project owners and freelancers, routing WhatsApp messages while protecting private phone numbers and giving admins operational control."
    bullets:
      - "Owners manage projects through an API and dashboard."
      - "Freelancers interact through WhatsApp without accessing owner numbers."
      - "Admins approve, lock, monitor, and complete projects."
      - "Blast campaigns support bulk messaging with templates, throttling, and delivery reporting."
  challenge:
    heading: "The Challenge"
    summary: "Marketplace communication usually leaks personal contact details and becomes hard to supervise once conversations leave the platform."
    bullets:
      - "WhatsApp conversations need reliable multi-device session handling."
      - "Admins need locking and assignment controls to avoid freelancer conflicts."
      - "Bulk messages require templates, scheduling, throttling, and reporting."
      - "AI assistance must be scoped per conversation and controlled by platform logic."
  solution:
    heading: "The Solution"
    summary: "A Go/Gin API, MySQL data model, whatsmeow bot, and React dashboard coordinate project workflows, conversations, blast campaigns, and admin operations."
    bullets:
      - "Gin and GORM provide a structured backend for auth, projects, admin, bot, and campaign APIs."
      - "whatsmeow powers WhatsApp multi-device message routing."
      - "React + Vite dashboard supports admin monitoring and operational workflows."
      - "AI agent integration can generate replies per conversation using Gemini/OpenAI-backed providers."
  techStack:
    - category: "Backend"
      tools:
        - Go
        - Gin
        - GORM
        - MySQL
        - JWT
    - category: "Messaging"
      tools:
        - whatsmeow
        - WhatsApp Multi-device
    - category: "Frontend"
      tools:
        - React 18
        - TypeScript
        - Vite
        - Tailwind CSS
        - shadcn/ui
        - TanStack Query
        - Redux Toolkit
    - category: "Integrations"
      tools:
        - Cloudflare R2 / S3
        - Resend
        - Gemini / OpenAI
        - Jitsi
  features:
    - title: "WhatsApp message routing"
      description: "Routes messages between owners and freelancers while keeping phone numbers private."
      impact: "Protects marketplace communication and keeps conversations inside platform logic."
    - title: "Admin project locking"
      description: "Admins can assign and lock projects to specific freelancers."
      impact: "Reduces assignment conflicts and keeps ownership clear."
    - title: "AI auto-reply"
      description: "Conversation-specific AI agent can assist replies through configured providers."
      impact: "Speeds up communication while keeping human workflows intact."
    - title: "WhatsApp Blast"
      description: "Bulk campaigns support contacts, categories, templates, scheduling, delay throttling, and delivery reports."
      impact: "Turns WhatsApp outreach into a managed operational tool."
    - title: "Meetings"
      description: "Jitsi scheduling and attendance tracking connect project conversations to live calls."
      impact: "Adds structured follow-up beyond text messaging."
  process:
    - phase: "Workflow modeling"
      title: "Map marketplace roles and message ownership"
      description: "Defined owner, freelancer, and admin responsibilities before implementing routing logic."
      outputs:
        - "Role model"
        - "Conversation workflow"
        - "Admin controls"
    - phase: "Backend and bot implementation"
      title: "Build API and WhatsApp orchestration"
      description: "Implemented Go/Gin APIs, MySQL persistence, JWT auth, and whatsmeow device/session handling."
      outputs:
        - "REST API"
        - "WhatsApp bot"
        - "Database models"
    - phase: "Dashboard and campaign tools"
      title: "Ship admin views and blast workflows"
      description: "Built React dashboard flows for project management, bot monitoring, contact import, templates, campaigns, and reports."
      outputs:
        - "Admin dashboard"
        - "Blast module"
        - "Meeting tools"
  deliverables:
    - title: "Go REST API"
      description: "Backend covering auth, project CRUD, conversations, admin workflows, bot status, and blast modules."
    - title: "WhatsApp bot service"
      description: "Multi-device routing layer based on whatsmeow."
    - title: "React admin dashboard"
      description: "Operational SPA for monitoring, approvals, device management, campaigns, and meetings."
    - title: "Live site"
      description: "Public entry point available at gudangdistribusi.com."
      link: "https://gudangdistribusi.com/"
  metrics:
    - value: "3 roles"
      label: "Access model"
      description: "Owner, freelancer, and admin workflows handled separately."
    - value: "5 modules"
      label: "Operational areas"
      description: "Projects, conversations, WhatsApp devices, blasts, and meetings."
    - value: "Live"
      label: "Deployment status"
      description: "Public product surface is available online."
  conversion:
    heading: "Need WhatsApp automation or marketplace ops?"
    description: "Project Forwarder demonstrates how I build backend-heavy workflows that connect messaging, dashboards, and automation."
    ctas:
      - label: "View live site"
        href: "https://gudangdistribusi.com/"
        variant: "primary"
        external: true
      - label: "Start a project"
        href: "/contact"
        variant: "secondary"
        external: false
  responsiveUx:
    breakpoints:
      - "Admin dashboard optimized for desktop operations"
      - "WhatsApp user flows remain mobile-native through the messaging app"
    interactionNotes:
      - "Status chips and project locks clarify operational state"
      - "Campaign scheduling and throttling reduce operator mistakes"
    accessibilityNotes:
      - "shadcn/ui components provide consistent focus and interaction patterns"
      - "Tables and dialogs separate dense admin data into manageable flows"
  seoPerformance:
    performanceTargets:
      - "Dashboard state fetched with TanStack Query cache boundaries"
      - "Vite build keeps frontend feedback fast during development"
    seoNotes:
      - "Portfolio page links to the live business website without exposing private repository code"
    technicalChecks:
      - "Docker and Makefile workflows support local backend validation"
      - "Admin creation and bot status endpoints support operational setup"
  infrastructure:
    hosting: "Production web deployment"
    backend: "Go/Gin API"
    database: "MySQL via GORM"
    storage: "AWS S3 / Cloudflare R2"
    cicd: "Docker and Makefile-based local operations"
    monitoring: "Bot status and delivery reporting endpoints"
---

Project Forwarder is a practical automation platform where WhatsApp messaging, marketplace assignment, AI assistance, and admin operations need to work together without exposing private contact details or losing operational oversight.
```

- [ ] **Step 2: Verify file exists**

Run:

```bash
test -f content/projects/project-forwarder.mdx && echo "project-forwarder created"
```

Expected output:

```text
project-forwarder created
```

- [ ] **Step 3: Commit Project Forwarder content**

Run:

```bash
git add content/projects/project-forwarder.mdx
git commit -m "content: add Project Forwarder case study"
```

Expected: commit succeeds with only `content/projects/project-forwarder.mdx` staged.

---

## Task 3: Create Flux case study

**Files:**

- Create: `content/projects/flux.mdx`

- [ ] **Step 1: Create MDX file**

Write `content/projects/flux.mdx`:

```mdx
---
slug: flux
title: Flux
headline: Internal field-operations platform for telecom teams with a Go/Gin and MySQL backend rewrite.
summary: Enterprise operations tool covering sites, schedules, field activities, reports, tickets, work orders, projects, and data migration from legacy systems.
images: []
image: ""
date: "2026"
status: Internal
t technologies:
  - Go
  - Gin
  - MySQL
  - GORM
  - React
  - shadcn/ui
  - Radix UI
  - MongoDB Migration
  - JWT
github: ""
live: ""
featured: true
seo:
  title: "Flux Case Study"
  description: "Internal Varnion field-operations platform and backend rewrite from FastAPI/MongoDB to Go/Gin and MySQL."
  keywords:
    - Go
    - Gin
    - MySQL
    - Field Operations
    - Internal Tools
    - Data Migration
    - React
  ogImage: ""
detail:
  hero:
    eyebrow: "Enterprise Operations"
    title: "Flux"
    subtitle: "An internal operations platform for field teams, reports, tickets, sites, and cutover-safe backend modernization."
    primaryCta:
      label: "Discuss internal tools"
      href: "/contact"
      variant: "primary"
      external: false
  metadata:
    role: "Full-stack Developer"
    client: "Varnion"
    timeline: "2026"
    platform: "Enterprise web application"
    year: "2026"
    collaboration: "Internal operations team"
  designDirection:
    heading: "Enterprise Workflow Direction"
    summary: "Flux needed to support dense operational data while keeping field, admin, and reporting workflows predictable during a backend rewrite."
    bullets:
      - "Table-heavy workflows prioritize filtering, status visibility, and role-scoped access."
      - "Frontend API calls must adapt to Go response shapes without disrupting users."
      - "Migration tooling preserves historical operations data and uploaded assets."
      - "Smoke tests validate critical read paths before cutover."
  overview:
    heading: "Project Overview"
    summary: "Flux is an internal operations platform for Varnion teams managing sites, schedules, field activities, reports, tickets, Starlink workflows, Fiberzone work orders, projects, notifications, and more."
    bullets:
      - "Go/Gin + MySQL backend runs alongside a legacy FastAPI/MongoDB system during rewrite."
      - "React frontend uses `REACT_APP_API_URL` to target the new API."
      - "Migration tooling imports 32+ collections from MongoDB into relational tables."
      - "Cutover support includes parity checks, uploads sync, and smoke scripts."
  challenge:
    heading: "The Challenge"
    summary: "Internal operations platforms carry years of data, role-specific behavior, and edge-case workflows that cannot be lost during a backend rewrite."
    bullets:
      - "MongoDB documents and embedded assets needed reliable MySQL mapping."
      - "Legacy IDs and auth sessions had to remain compatible where possible."
      - "Frontend views depended on many endpoints and response shapes."
      - "Role-based data scoping needed consistent enforcement across domains."
  solution:
    heading: "The Solution"
    summary: "A phased Go/Gin + MySQL rewrite with migration tooling, smoke tests, uploads sync, and frontend API compatibility work."
    bullets:
      - "GORM models and migrations define the new relational foundation."
      - "Migration CLI supports dry-run, collection import, full import, fresh reload, and verification."
      - "Go API serves static uploads while preserving legacy upload paths."
      - "Smoke suite checks dozens of read-only endpoints used by the React frontend."
  techStack:
    - category: "Backend Rewrite"
      tools:
        - Go
        - Gin
        - GORM
        - MySQL
    - category: "Frontend"
      tools:
        - React
        - CRACO
        - shadcn/ui
        - Radix UI
        - Axios
    - category: "Migration"
      tools:
        - MongoDB
        - Data migration CLI
        - Upload sync
        - Parity verification
    - category: "Security & Access"
      tools:
        - JWT
        - Role-based scoping
        - Existing SECRET_KEY compatibility
  features:
    - title: "Backend modernization"
      description: "Rewrites legacy FastAPI/MongoDB services into Go/Gin with MySQL persistence."
      impact: "Improves operational reliability while preserving existing workflows."
    - title: "Data migration CLI"
      description: "Imports 32+ collections with dry-run, fresh reload, and verification modes."
      impact: "Makes cutover safer and repeatable."
    - title: "Operational domain coverage"
      description: "Supports sites, activities, reports, tickets, work orders, projects, Starlink, and notifications."
      impact: "Keeps field and admin workflows centralized."
    - title: "Uploads preservation"
      description: "Synchronizes legacy uploads and converted embedded assets so historical records keep working."
      impact: "Prevents broken references after migration."
    - title: "Smoke suite"
      description: "Validates roughly 45 read-only frontend endpoints before cutover."
      impact: "Gives confidence that critical views remain usable."
  process:
    - phase: "Discovery"
      title: "Map legacy domains and migration constraints"
      description: "Audited legacy collections, models, auth expectations, uploads, and frontend API dependencies."
      outputs:
        - "Rewrite design spec"
        - "Collection mapping"
        - "Cutover checklist"
    - phase: "Backend foundation"
      title: "Build Go/Gin API and MySQL schema"
      description: "Created service layers, platform utilities, migrations, auth compatibility, and endpoint coverage."
      outputs:
        - "Go API"
        - "MySQL migrations"
        - "Shared platform packages"
    - phase: "Migration and cutover prep"
      title: "Validate data, uploads, and frontend reads"
      description: "Implemented migration commands, smoke scripts, uploads sync guidance, and frontend base URL alignment."
      outputs:
        - "Migration CLI"
        - "Smoke test suite"
        - "Frontend compatibility updates"
  deliverables:
    - title: "Go/Gin API"
      description: "New backend serving internal operations domains."
    - title: "MySQL schema and migrations"
      description: "Relational data model replacing legacy MongoDB documents."
    - title: "Migration tool"
      description: "CLI for dry-run, import, reload, and parity verification across supported collections."
    - title: "Frontend integration"
      description: "React app configured to consume the new API during cutover preparation."
    - title: "Mock image prompts"
      description: "Prompts for generating portfolio-safe Flux screenshots without real internal data."
  metrics:
    - value: "32+"
      label: "Collections migrated"
      description: "Legacy Mongo collections mapped into MySQL import flow."
    - value: "45"
      label: "Smoke endpoints"
      description: "Read-only routes used by the React frontend."
    - value: "2 systems"
      label: "Rewrite boundary"
      description: "Legacy FastAPI/MongoDB and new Go/Gin/MySQL during migration."
  conversion:
    heading: "Modernizing internal operations software?"
    description: "Flux shows how I approach high-risk rewrites, migration tooling, and internal dashboards without exposing private systems."
    ctas:
      - label: "Discuss an internal tool"
        href: "/contact"
        variant: "primary"
        external: false
  responsiveUx:
    breakpoints:
      - "Desktop-first operations dashboards for tables and reports"
      - "Responsive forms and detail views for field-adjacent workflows"
    interactionNotes:
      - "Status chips, filters, and scoped lists reduce operational ambiguity"
      - "Smoke-tested endpoints protect critical frontend views"
    accessibilityNotes:
      - "Radix/shadcn patterns support consistent focus behavior"
      - "Data tables rely on clear labels, actions, and status states"
  seoPerformance:
    performanceTargets:
      - "Fast internal dashboard navigation across dense operational data"
      - "Stable API responses for table-heavy frontend views"
    seoNotes:
      - "Portfolio page presents anonymized technical scope without internal data or public URLs"
    technicalChecks:
      - "go test ./..."
      - "go vet ./..."
      - "Smoke script for read-only frontend endpoints"
  infrastructure:
    hosting: "Internal deployment"
    backend: "Go/Gin API"
    database: "MySQL"
    storage: "Local/static upload serving with legacy uploads sync"
    cicd: "Build, smoke, and migration scripts"
    monitoring: "Smoke test PASS/FAIL output and API health checks"
---

Flux is a portfolio-safe case study about modernizing internal operations software: the public story focuses on architecture, migration safety, and workflow reliability while screenshots are generated separately with fictional data.

## Nano mock image prompts

### Hero dashboard mockup

```text
Premium desktop UI mockup of a fictional B2B SaaS product named "Flux", an internal field operations platform for telecom/ISP operations teams. Layout: left sidebar navigation with items Sites, Schedules, Activities, Reports, Tickets, Work Orders, Projects, Settings. Main content: top row of KPI stat cards (Open tickets, Activities today, Pending reports, Sites online), below a filterable data table with status badges (Open, In progress, Done). Style: modern enterprise dashboard, shadcn/ui aesthetic, light mode, neutral slate and white palette, subtle borders and shadows, no real company logos, no readable personal data. Resolution 1440x900, crisp UI design, portfolio case study quality.
```

### Field activity form mockup

```text
UI mockup of a field activity submission screen in the same "Flux" design system. Form fields: Site name, Activity category dropdown, Date/time, Notes, Photo attachment area, GPS/location hint, primary Submit button. Show validation states and a compact mobile-width panel centered on a light background, or split desktop form with clear hierarchy. Professional internal operations tool, fictional data only, no real brands, shadcn-like components, portfolio quality.
```

### Ticket detail mockup

```text
Desktop UI mockup, Flux operations platform, ticket detail drawer or page: ticket ID, priority chip, assigned technician, site name, timeline of status updates, comment thread, action buttons Assign and Close. Consistent with enterprise dashboard mockup 1, neutral palette, fictional content.
```
```

- [ ] **Step 2: Fix typo before saving**

In the file above, ensure the frontmatter key is exactly:

```yaml
technologies:
```

Expected: no accidental `t technologies:` key remains.

- [ ] **Step 3: Verify file exists**

Run:

```bash
test -f content/projects/flux.mdx && echo "flux created"
```

Expected output:

```text
flux created
```

- [ ] **Step 4: Commit Flux content**

Run:

```bash
git add content/projects/flux.mdx
git commit -m "content: add Flux case study"
```

Expected: commit succeeds with only `content/projects/flux.mdx` staged.

---

## Task 4: Demote legacy project featured flags

**Files:**

- Modify: `content/projects/chatapp.mdx`
- Modify: `content/projects/grammedia-clone.mdx`
- Modify: `content/projects/mobile-fb.mdx`

- [ ] **Step 1: Update `content/projects/chatapp.mdx`**

Replace:

```yaml
featured: true
```

With:

```yaml
featured: false
```

- [ ] **Step 2: Update `content/projects/grammedia-clone.mdx`**

Replace:

```yaml
featured: true
```

With:

```yaml
featured: false
```

- [ ] **Step 3: Update `content/projects/mobile-fb.mdx`**

Replace:

```yaml
featured: true
```

With:

```yaml
featured: false
```

- [ ] **Step 4: Verify featured flags**

Run:

```bash
grep -n "^featured:" content/projects/*.mdx
```

Expected output includes:

```text
content/projects/neuro-health.mdx:featured: true
content/projects/project-forwarder.mdx:featured: true
content/projects/flux.mdx:featured: true
content/projects/chatapp.mdx:featured: false
content/projects/grammedia-clone.mdx:featured: false
content/projects/mobile-fb.mdx:featured: false
```

Line numbers may differ.

- [ ] **Step 5: Commit legacy featured changes**

Run:

```bash
git add content/projects/chatapp.mdx content/projects/grammedia-clone.mdx content/projects/mobile-fb.mdx
git commit -m "content: feature new portfolio projects"
```

Expected: commit succeeds with only the three legacy project files staged.

---

## Task 5: Verify content integration

**Files:**

- Read/verify: `content/projects/*.mdx`
- No intentional source-code edits.

- [ ] **Step 1: Check TypeScript**

Run:

```bash
npm run typecheck
```

Expected output:

```text
> rohimdev@0.1.0 typecheck
> tsc --noEmit
```

Expected exit code: `0`.

- [ ] **Step 2: Build app**

Run:

```bash
npm run build
```

Expected:

- Build exits with code `0`
- Static routes include all six project detail pages:
  - `/work/chatapp`
  - `/work/grammedia-clone`
  - `/work/mobile-fb`
  - `/work/neuro-health`
  - `/work/project-forwarder`
  - `/work/flux`

- [ ] **Step 3: Verify no public repo links on new projects**

Run:

```bash
grep -n "github:" content/projects/neuro-health.mdx content/projects/project-forwarder.mdx content/projects/flux.mdx
```

Expected:

```text
content/projects/neuro-health.mdx:github: ""
content/projects/project-forwarder.mdx:github: ""
content/projects/flux.mdx:github: ""
```

Line numbers may differ.

- [ ] **Step 4: Verify Project Forwarder live link**

Run:

```bash
grep -n "live:" content/projects/project-forwarder.mdx
```

Expected:

```text
live: "https://gudangdistribusi.com/"
```

Line number may differ.

- [ ] **Step 5: Verify image policy**

Run:

```bash
grep -n "images:" content/projects/neuro-health.mdx content/projects/project-forwarder.mdx content/projects/flux.mdx
```

Expected: each file has:

```text
images: []
```

- [ ] **Step 6: Verify Tina admin editability (manual)**

Run dev with Tina:

```bash
npm run dev:tina
```

Expected:

- Tina admin starts successfully.
- `/admin` lists six projects.
- Each new project exposes **Project Images** for future uploads.

If Tina fails with `port 9000 already in use`, stop the existing Tina process and rerun.

- [ ] **Step 7: Commit verification note if plan tracking changed**

If this plan file is updated with completed checkboxes during execution, commit it separately:

```bash
git add docs/superpowers/plans/2026-05-27-portfolio-projects-import.md
git commit -m "docs: track portfolio import execution"
```

Expected: commit succeeds only if the plan file changed.

---

## Self-Review

### Spec coverage

- Three new project files: Task 1, Task 2, Task 3.
- Legacy featured demotion: Task 4.
- Link policy: Task 1, Task 2, Task 3 and Task 5 checks.
- Images via Tina later: all new MDX files use `images: []`; Task 5 validates.
- Flux Nano prompts: Task 3 includes three prompt blocks in MDX body.
- Verification: Task 5 covers typecheck, build, links, image policy, and Tina admin.

### Placeholder scan

No `TBD`, `TODO`, or incomplete implementation placeholders are intentionally present. The plan intentionally leaves image arrays empty because the approved design says the user will upload images later through Tina.

### Type consistency

- Uses existing `images`, `image`, `detail`, `featured`, `github`, `live`, `seo`, and `detail.*` keys.
- New project slugs match file names: `neuro-health`, `project-forwarder`, `flux`.
- `Project Forwarder` live URL matches approved URL `https://gudangdistribusi.com/`.

---

Plan complete and saved to `docs/superpowers/plans/2026-05-27-portfolio-projects-import.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
