# Contact Page Redesign — Design Document

**Date:** 2026-02-19  
**Status:** Approved

## Goal

Adjust the Contact page to match Abdul Rohim's profile and data. The page should support **project inquiries** — clients describing projects and requesting quotes or collaboration.

## Decisions

| Area | Decision |
|------|----------|
| **Purpose** | Project inquiries (clients describe projects, request quotes/collaboration) |
| **Hero visual** | Keep layout, change concept — "Your project slot" (one slot could be theirs) |
| **Profile section** | Replace with Abdul Rohim: photo, bio, links (LinkedIn, GitHub, Upwork) |
| **CTAs** | Email us → mailto; Book a Call → #form (or external when available) |

## Approach

**Approach B:** Shared profile source + copy updates. Add `PROFILE` (or extend `SITE`) in `lib/constants.ts` so About and Contact use the same data.

## Design Sections

### 1. Hero Section

- **Heading:** "Let's build something together"
- **Description:** Short line about project inquiries and collaboration (aligned with About intro)
- **CTA:** "Describe your project" (scrolls to `#form`)
- **Visual:** AbstractTeamVisual — keep layout, update concept ("Your project slot" / "One slot could be yours")

### 2. Contact Form

- **Placeholder:** "Tell us about your project…" → "Describe your project, timeline, and goals…"
- **Success message:** "Thanks for reaching out! I'll get back to you soon."
- **Fields:** Name, Email, Message (unchanged)

### 3. Profile Section (ex-FounderSection)

- **Layout:** Same two-column (bio left, photo right)
- **Left:**
  - Heading: "Hey, I'm Abdul"
  - Bio: Short intro (from About hero + SITE description)
  - CTAs: "Book a Call" → `#form`; "Email me" → `mailto:hello@rohimdev.com`
- **Right:**
  - Photo: Same avatar as About (`ui-avatars.com` or custom)
  - Name: Abdul Rohim
  - Role: Full-Stack Developer
  - Social: LinkedIn, GitHub, Upwork (from footer)

### 4. Data Source

- Add `PROFILE` in `lib/constants.ts` (or new `lib/profile.ts`)
- Fields: name, role, bio, location, email, social links, avatar URL
- Use in both About and Contact

## Profile Data (from existing codebase)

- **Name:** Abdul Rohim
- **Role:** Full-Stack Developer
- **Location:** Surabaya, Indonesia
- **Email:** hello@rohimdev.com (from API route fallback)
- **Avatar:** `https://ui-avatars.com/api/?name=Abdul+Rohim&size=256&background=171717&color=fff`
- **Social:** LinkedIn (linkedin.com/in/rohimdev), GitHub (github.com/rohimdev), Upwork (upwork.com/freelancers/~rohimdev)
- **Bio:** From About hero intro + SITE.description
