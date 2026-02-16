# Plan: Update /work Page - Career Progression

**Date:** 2026-02-16  
**Goal:** Update the Work Experience page to reflect fullstack development career progression

---

## Current State Analysis

### Files to Update
1. `app/work/page.tsx` - Main work experience page (439 lines)
2. `components/sections/ProfessionalExperienceSection.tsx` - Homepage experience cards (187 lines)

### Issues Identified (To Fix)
1. **Hero description** - Mentions "software development" but content is telecom-heavy → Update hero to focus on fullstack development
2. **Varnion role** - Shows "Staff Infrastructure" (telecom) instead of Fullstack Developer → Add Fullstack Developer role (Sep 2025 - Present)
3. **Missing Freelance** - No Freelance Fullstack Developer (Rohimdev.com) experience → Add new role (Jan 2025 - Present)
4. **Skills summary** - Telecom-focused, not development-focused → Replace with dev-focused categories
5. **Technical Achievements** - Telecom-heavy achievements → Replace with dev-focused achievements

---

## Implementation Plan

### Step 1: Update Career Timeline Data in `app/work/page.tsx`

Replace existing work experience with new career progression:

| Period | Role | Company | Type |
|--------|------|---------|------|
| Jan 2025 - Present | Freelance Fullstack Developer | Rohimdev.com | Freelance |
| Sep 2025 - Present | Fullstack Developer | Varnion Technology | Full-time |
| Jan 2025 - Aug 2025 | Staff Infrastructure | Varnion Technology | Full-time |
| Dec 2020 - Aug 2023 | Provisioning Technician | PT Telkom Indonesia | Full-time |

**Data to Add for New Roles:**

**Freelance Fullstack Developer (Rohimdev.com)**
- Description: Delivered 3-5 concurrent fullstack projects for client-specific requirements
- Responsibilities:
  - Built backend services using Node.js, Express, Hono, and Golang (Gin)
  - Designed PostgreSQL databases with Prisma ORM
  - Integrated frontend applications with backend services
  - Leveraged AI-assisted tools (Cursor, Claude Code, TRAE)
- Achievements: "3-5 concurrent projects", "Improved development velocity"
- Technologies: Node.js, Express, Hono, Golang, Gin, PostgreSQL, Prisma, React

**Fullstack Developer (Varnion Technology)**
- Description: Developed internal web applications using React, Node.js, and PostgreSQL
- Responsibilities:
  - Built scalable RESTful APIs and backend services
  - Focused on clean architecture, security, and performance
  - Collaborated with infrastructure and NOC teams
  - Automated operational processes and reporting pipelines
- Achievements: "Improved internal efficiency", "Reduced manual workloads"
- Technologies: React, Node.js, PostgreSQL, RESTful APIs, Clean Architecture

---

### Step 2: Update Hero Section

**Current:**
- Heading: "Professional Work Experience"
- Description: "4+ years across telecommunications infrastructure and modern software development..."

**New:**
- Heading: "Professional Work Experience"
- Description: "4+ years building scalable web applications and APIs. From telecommunications infrastructure to fullstack development—crafting solutions that bridge systems and deliver results."

---

### Step 3: Update Skills Summary Section

Replace telecom-heavy categories with development-focused ones:

**Current Categories:**
- Software Development
- Infrastructure & Networking
- Technical Troubleshooting
- Project Management
- Customer Relations
- Team Collaboration

**New Categories:**
- Frontend Development
- Backend Development  
- Database & APIs
- DevOps & Tools

---

### Step 4: Update Technical Achievements Section

Replace telecom-heavy achievements with development-focused ones:

**Current Achievements (to remove):**
- 40% Connectivity Improvement (Varnion - Network)
- 25% Service Efficiency Gain (Telkom - Fiber Optic)

**New Achievements:**
- 3-5 Concurrent Projects (Rohimdev.com - Freelance)
- Internal Efficiency Improvement (Varnion - Fullstack)
- Career Transition Success (Telecom → Software Development)

---

### Step 5: Update ProfessionalExperienceSection (Homepage)

Update `components/sections/ProfessionalExperienceSection.tsx` to reflect:
- Add Freelance as "Current" (most prominent)
- Add Varnion Fullstack Developer as "Current"
- Keep Infrastructure as transition (Jan 2025 - Aug 2025)
- Keep Telkom as "Previous"

---

### Step 6: Verify Changes

1. Run `npm run dev` to start development server
2. Navigate to http://localhost:3000/work
3. Verify all sections render correctly:
   - Hero section (fullstack-focused description)
   - Work experience timeline (reverse chronological order)
   - Technical achievements (dev-focused)
   - Skills summary (development technologies)
4. Check responsive design on mobile/tablet

---

## Files Modified

| File | Changes |
|------|---------|
| `app/work/page.tsx` | Update career timeline, hero, skills summary |
| `components/sections/ProfessionalExperienceSection.tsx` | Update homepage experience cards |

---

## Success Criteria

- [ ] Hero clearly mentions fullstack development focus
- [ ] All 4 career positions displayed with correct periods
- [ ] Freelance and Varnion Dev roles appear first (most relevant)
- [ ] Technical achievements section shows dev-focused metrics
- [ ] Skills section shows development technologies
- [ ] Page renders without errors at localhost:3000/work
