# Plan: Update /about Page - Align with Career Progression

**Date:** 2026-02-16  
**Goal:** Update the About page to reflect fullstack development career progression (aligned with /work updates)

---

## Current State Analysis

### File to Update
- `app/about/page.tsx` - About page (366 lines)

### Issues Identified
1. **Hero Introduction** - Mentions "telecommunications infrastructure" background, should focus on fullstack development
2. **About Me paragraphs** - References old timeline: "25% reduction" (Telkom), "40% reduction" (Varnion), mentions bootcamp, missing Freelance + Fullstack Developer roles
3. **Skills Breakdown** - Has "Mobile & Infrastructure" with Mikrotik/Ubiquiti, should align with dev-focused skills
4. **Career Journey** - Shows 3 items (Staff Infra → Bootcamp → Provisioning Technician), should show 4 items matching /work page

---

## Implementation Plan

### Step 1: Update Hero Introduction

**Current:**
```javascript
hero: {
  heading: "Full-Stack Developer",
  introduction: "Hi! I'm Abdul Rohim, a Full Stack Web Developer with a strong background in telecommunications infrastructure and modern web development..."
}
```

**New:**
```javascript
hero: {
  heading: "Full-Stack Developer",
  introduction: "Hi! I'm Abdul Rohim, a Full Stack Web Developer building scalable web applications and APIs. From telecommunications infrastructure to fullstack development—I craft solutions that bridge systems and deliver results."
}
```

---

### Step 2: Update About Me Paragraphs

**Current Paragraphs (to replace):**
- Paragraph 1: Telecom background at Telkom Indonesia
- Paragraph 2: 25% reduction, bootcamp at Hacktiv8, transition to development
- Paragraph 3: Staff Infrastructure at Varnion, 40% reduction, internal tools

**New Paragraphs:**
1. **Introduction to fullstack path**: Start with current role as Fullstack Developer + Freelance, then mention telecom foundation
2. **Varnion transition**: Cover both Staff Infrastructure (Jan-Sep 2025) and Fullstack Developer (Sep 2025-Present), mention building internal tools
3. **Freelance & achievements**: Cover Rohimdev.com, 3-5 concurrent projects, skills with Node.js, Express, Hono, Golang, PostgreSQL, Prisma
4. **Telkom foundation** (brief): Mention as foundational experience that built problem-solving skills

---

### Step 3: Update Skills Breakdown

**Current Categories:**
- Frontend: React & Next.js, JavaScript/TypeScript, Tailwind CSS
- Backend & Database: Golang & Node.js, PostgreSQL & MongoDB, Nest.js & Express, GraphQL & REST APIs
- Mobile & Infrastructure: React Native, Network Configuration, Mikrotik & Ubiquiti

**New Categories:**
- Frontend: React & Next.js, TypeScript, Tailwind CSS, UI/UX Implementation
- Backend: Node.js & Express, Golang (Gin), RESTful APIs, Clean Architecture
- Database & Tools: PostgreSQL, Prisma ORM, Git, Docker

---

### Step 4: Update Career Journey Timeline

**Current (3 items):**
1. Jan 2025 - Present: Staff Infrastructure @ Varnion
2. 2024: Full-Stack JavaScript Bootcamp @ Hacktiv8
3. Dec 2020 - Aug 2023: Provisioning Technician @ Telkom Indonesia

**New (4 items - reverse chronological):**
1. Jan 2025 - Present: Freelance Fullstack Developer @ Rohimdev.com
2. Sep 2025 - Present: Fullstack Developer @ Varnion Technology Semesta
3. Jan 2025 - Aug 2025: Staff Infrastructure @ Varnion Technology Semesta
4. Dec 2020 - Aug 2023: Provisioning Technician @ PT Telkom Indonesia

---

## Files Modified

| File | Changes |
|------|---------|
| `app/about/page.tsx` | Update hero, about paragraphs, skills, career journey |

---

## Success Criteria

- [ ] Hero introduction focuses on fullstack development
- [ ] About paragraphs tell cohesive career story (Telkom → Varnion Infra → Varnion Dev → Freelance)
- [ ] Skills section aligned with /work page (no telecom-heavy skills)
- [ ] Career timeline shows 4 positions in reverse chronological order
- [ ] Content consistent with /work page
