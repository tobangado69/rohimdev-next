# Contact Page Implementation Plan

> **Goal:** Adjust Contact page to match Abdul Rohim's profile for project inquiries.

**Status:** Implemented

## Summary of Changes

### 1. `src/lib/constants.ts`
- Added `PROFILE` constant: name, role, location, email, avatar, bio, social (linkedin, github, upwork)

### 2. `src/app/contact/page.tsx`
- Hero heading: "Let's build something together"
- Hero description: Project inquiry focused
- CTA: "Describe your project" → #form
- Metadata: Updated description

### 3. `src/components/contact/abstract-team-visual.tsx`
- Added aria-label: "Your project slot—one could be yours"
- Link aria-label: "Add your project"

### 4. `src/components/contact/contact-form.tsx`
- Message placeholder: "Describe your project, timeline, and goals..."
- Success message: "Thanks for reaching out! I'll get back to you soon."

### 5. `src/components/contact/founder-section.tsx`
- Replaced with PROFILE data
- Heading: "Hey, I'm Abdul"
- Bio from PROFILE.bio + closing CTA
- Book a Call → #form
- Email me → mailto:hello@rohimdev.com
- Avatar from PROFILE.avatar (ui-avatars)
- Social: LinkedIn, GitHub, Upwork (correct URLs from footer)
