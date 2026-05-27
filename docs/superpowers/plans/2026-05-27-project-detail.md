# Project Detail Support Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Work in a clean worktree if possible. Current repository is dirty; do not commit unrelated changes.

**Goal:** Build premium project case-study detail pages at `/work/[slug]` from TinaCMS-backed project MDX content.

**Architecture:** Keep `content/projects/*.mdx` as the single source of truth, using structured YAML frontmatter for predictable rendering and SEO plus MDX body for long-form narrative. Add a static App Router detail route that reads normalized content through `src/lib/content.ts`, renders optional case-study sections only when data exists, and links listing cards to detail pages.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS, TinaCMS MDX collections, `next/image`, `lucide-react`, `gray-matter` for nested MDX frontmatter parsing.

---

## File Structure Map

Existing files to inspect and modify:

```text
tina/config.ts
src/types/content.ts
src/lib/content.ts
src/lib/seo.ts
src/app/work/page.tsx
src/components/work/work-content.tsx
content/projects/chatapp.mdx
content/projects/grammedia-clone.mdx
content/projects/mobile-fb.mdx
package.json
package-lock.json
```

New files to create:

```text
src/app/work/[slug]/page.tsx
src/components/work/project-detail/project-detail-page.tsx
src/components/work/project-detail/project-hero.tsx
src/components/work/project-detail/project-meta.tsx
src/components/work/project-detail/project-narrative-section.tsx
src/components/work/project-detail/project-gallery.tsx
src/components/work/project-detail/project-tech-stack.tsx
src/components/work/project-detail/project-features.tsx
src/components/work/project-detail/project-process.tsx
src/components/work/project-detail/project-deliverables.tsx
src/components/work/project-detail/project-metrics.tsx
src/components/work/project-detail/project-testimonial.tsx
src/components/work/project-detail/project-pricing.tsx
src/components/work/project-detail/project-social-proof.tsx
src/components/work/project-detail/project-responsive-ux.tsx
src/components/work/project-detail/project-seo-performance.tsx
src/components/work/project-detail/project-infrastructure.tsx
src/components/work/project-detail/project-conversion.tsx
```

Optional consolidation allowed during execution:

```text
src/components/work/project-detail/project-section-cards.tsx
```

Use fewer component files only if readability stays strong. Do not create a separate `content/case-studies` collection.

## Current Behavior Notes

- `src/lib/content.ts` currently uses a small custom frontmatter parser that only supports top-level scalar fields and simple string arrays.
- The approved spec requires nested `detail` and `seo` objects, so parser must change before nested sample content is added.
- `tina/config.ts` already has one `project` MDX collection and must be extended in place.
- `src/components/work/work-content.tsx` is a client component with neutral cards, glass language, subtle animation, GitHub/live links, and no detail links yet.
- `next.config.ts` already allows current remote image hosts: `raw.githubusercontent.com`, `images.unsplash.com`, and `i.imgur.com`.

## Task 1: Add Nested Frontmatter Parser Dependency

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

**Steps:**

- [ ] Install `gray-matter`.

Run:

```bash
npm install gray-matter
```

Expected:

```text
added ... packages
found 0 vulnerabilities
```

or:

```text
up to date
found 0 vulnerabilities
```

- [ ] Confirm package exists.

Run:

```bash
node -p "require('./package.json').dependencies['gray-matter']"
```

Expected:

```text
<installed semver range>
```

- [ ] Do not commit yet unless user explicitly asks during execution. If committing later, only stage `package.json` and `package-lock.json` with related project-detail files.

## Task 2: Extend Project Content Types

**Files:**
- Modify: `src/types/content.ts`

**Steps:**

- [ ] Add reusable detail types below `SeoContent` or near `ProjectContent`.

Use this shape as implementation target:

```typescript
export type ProjectNarrativeSection = {
  heading: string;
  summary: string;
  bullets?: string[];
};

export type ProjectDetailContent = {
  hero: ProjectHero;
  metadata?: ProjectMetadata;
  designDirection?: ProjectNarrativeSection;
  overview: ProjectNarrativeSection;
  challenge: ProjectNarrativeSection;
  solution: ProjectNarrativeSection;
  gallery?: ProjectGalleryItem[];
  techStack?: ProjectTechStackGroup[];
  features: ProjectFeature[];
  process?: ProjectProcessStep[];
  deliverables?: ProjectDeliverable[];
  metrics?: ProjectMetric[];
  testimonial?: ProjectTestimonial;
  conversion: ProjectConversion;
  pricing?: ProjectPricing;
  socialProof?: ProjectSocialProof;
  responsiveUx?: ProjectResponsiveUx;
  seoPerformance?: ProjectSeoPerformance;
  infrastructure?: ProjectInfrastructure;
};
```

- [ ] Update `ProjectContent` to include:

```typescript
seo: SeoContent;
detail: ProjectDetailContent;
github?: string;
live?: string;
```

- [ ] Keep existing top-level fields required for listing compatibility: `slug`, `title`, `headline`, `summary`, `image`, `date`, `status`, `technologies`, `featured`, `body`.
- [ ] Make pricing, testimonial, and social proof optional.
- [ ] Run typecheck to expose downstream missing references.

Run:

```bash
npm run typecheck
```

Expected at this stage:

```text
src/lib/content.ts:... Type error ...
```

Reason: parser still returns old project shape. Continue to Task 3.

## Task 3: Replace Flat MDX Frontmatter Parser

**Files:**
- Modify: `src/lib/content.ts`

**Steps:**

- [ ] Replace custom `parseFrontmatter`, `unquote`, and manual array handling with `gray-matter`.
- [ ] Add normalization helpers for optional arrays and optional objects.
- [ ] Ensure absent optional arrays normalize to `[]` only where rendering expects arrays.
- [ ] Ensure absent optional objects stay `undefined`.
- [ ] Keep fallback fields for current listing behavior.

Useful parser skeleton:

```typescript
import matter from "gray-matter";

function optionalArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function optionalObject<T>(value: unknown): T | undefined {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as T)
    : undefined;
}
```

- [ ] Update `projectFromMdx(fileName)` so returned shape includes:

```typescript
seo: optionalObject<SeoContent>(data.seo) ?? {
  title: String(data.title ?? "Untitled Project"),
  description: String(data.summary ?? ""),
  keywords: Array.isArray(data.technologies) ? (data.technologies as string[]) : [],
  ogImage: String(data.image ?? ""),
},
detail: normalizeProjectDetail(data.detail),
```

- [ ] Implement `normalizeProjectDetail` with conservative fallbacks for required sections until all three MDX files are updated.
- [ ] Keep `getProjects()` sorting by featured status.
- [ ] Keep `getProjectBySlug(slug)` behavior unchanged.
- [ ] Run parser smoke check.

Run:

```bash
node -e "const { getProjects } = require('./src/lib/content.ts'); console.log(getProjects().map((p) => p.slug).join(','))"
```

Expected:

```text
Error [ERR_UNKNOWN_FILE_EXTENSION] or module alias/TypeScript loader error
```

If direct Node import fails, skip this command and rely on `npm run typecheck` plus `npm run build` later. Do not add a runtime loader just for the smoke check.

- [ ] Run typecheck.

Run:

```bash
npm run typecheck
```

Expected:

```text
No TypeScript errors from src/lib/content.ts
```

Downstream component errors may remain until detail components are added.

## Task 4: Extend TinaCMS Project Schema

**Files:**
- Modify: `tina/config.ts`

**Steps:**

- [ ] In existing `project` collection only, keep listing fields first.
- [ ] Add required `seo` object before `detail`.
- [ ] Add `detail` object labeled `Project Detail`.
- [ ] Keep `body` rich-text field last with `isBody: true`.
- [ ] Use Tina object lists for gallery, features, process, deliverables, metrics, tech stack groups, and social proof badges.
- [ ] Use image fields for hero primary image, supporting images, gallery images, and testimonial avatar.
- [ ] Use string options for editor consistency.

Useful field pattern:

```typescript
{
  type: "object",
  name: "detail",
  label: "Project Detail",
  fields: [
    {
      type: "object",
      name: "hero",
      label: "Hero Showcase",
      fields: [
        { type: "string", name: "eyebrow", label: "Eyebrow" },
        { type: "string", name: "title", label: "Title Override" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        { type: "image", name: "primaryImage", label: "Primary Image" }
      ]
    }
  ]
}
```

- [ ] Include `pricing` but keep it optional in content and rendering.
- [ ] Include `testimonial` but rendering must require quote and name.
- [ ] Include `socialProof` but rendering must skip empty badges/links.
- [ ] Run Tina schema build locally.

Run:

```bash
npm run build:tina:local
```

Expected:

```text
tinacms build --local --skip-cloud-checks -c "next build"
...
✓ Compiled successfully
```

If it fails because detail route/components are not created yet, defer full success to Task 10. Schema syntax errors must be fixed before moving on.

## Task 5: Add Structured Content For Existing Projects

**Files:**
- Modify: `content/projects/chatapp.mdx`
- Modify: `content/projects/grammedia-clone.mdx`
- Modify: `content/projects/mobile-fb.mdx`

**Steps:**

- [ ] Add `seo` object to each file.
- [ ] Add `detail.hero`, `detail.metadata`, `detail.overview`, `detail.challenge`, `detail.solution`, `detail.features`, and `detail.conversion` to each file.
- [ ] Add optional sections only where credible.
- [ ] Omit fake testimonials for all three projects.
- [ ] Omit pricing for all three unless a real service-package angle is added later.
- [ ] Use English only.
- [ ] Keep existing top-level fields unchanged unless needed for accuracy.

Frontmatter pattern:

```yaml
seo:
  title: "ChatApp Case Study"
  description: "Real-time messaging case study built with React, Socket.IO, Express, and PostgreSQL."
  keywords:
    - React
    - Socket.IO
    - Real-time messaging
  ogImage: "https://raw.githubusercontent.com/tobangado69/ChatApp/main/assets/home.png"
detail:
  hero:
    eyebrow: "Real-time Messaging"
    title: "ChatApp"
    subtitle: "A full-stack chat experience focused on live messaging, presence, and event-driven UI feedback."
    primaryImage: "https://raw.githubusercontent.com/tobangado69/ChatApp/main/assets/home.png"
  overview:
    heading: "Project Overview"
    summary: "ChatApp explores real-time product behavior through a React interface and Socket.IO backend."
    bullets:
      - "Live message delivery through socket events."
      - "Presence-oriented UI for clearer conversation state."
```

- [ ] Content positioning:

```text
ChatApp: real-time messaging, presence, Socket.IO, Express, PostgreSQL, Sequelize.
Grammedia Clone: e-commerce bookstore, Next.js, TypeScript, MongoDB, infinite scroll, live Vercel deployment.
Mobile-FB: mobile-first social app, React Native, Expo, GraphQL, Apollo Client, Node.js, MongoDB, Redis.
```

- [ ] Run a content parse/build check after all three files are updated.

Run:

```bash
npm run typecheck
```

Expected:

```text
> rohimdev@0.1.0 typecheck
> tsc --noEmit
```

Exit code must be `0`.

## Task 6: Add Project Detail Route

**Files:**
- Create: `src/app/work/[slug]/page.tsx`

**Steps:**

- [ ] Import `notFound` from `next/navigation`.
- [ ] Import `getProjectBySlug` and `getProjects` from `@/lib/content`.
- [ ] Import `ProjectDetailPage` from `@/components/work/project-detail/project-detail-page`.
- [ ] Add `generateStaticParams()`.
- [ ] Add `generateMetadata({ params })`.
- [ ] Render `notFound()` for unknown slug.
- [ ] Return `ProjectDetailPage`.

Route skeleton:

```typescript
export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const seo = project.seo;
  return {
    title: seo.title || project.title,
    description: seo.description || project.summary,
    keywords: seo.keywords,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: seo.title || project.title,
      description: seo.description || project.summary,
      images: [{ url: seo.ogImage || project.image, alt: project.title }]
    }
  };
}
```

- [ ] Match Next 15 async params style used by project dependencies.
- [ ] Do not add client state to route file.
- [ ] Run typecheck.

Run:

```bash
npm run typecheck
```

Expected:

```text
Exit code 0, or only errors from components not yet created.
```

## Task 7: Build Premium Case-Study Components

**Files:**
- Create: `src/components/work/project-detail/project-detail-page.tsx`
- Create: `src/components/work/project-detail/project-hero.tsx`
- Create: `src/components/work/project-detail/project-meta.tsx`
- Create: `src/components/work/project-detail/project-narrative-section.tsx`
- Create: `src/components/work/project-detail/project-gallery.tsx`
- Create: `src/components/work/project-detail/project-tech-stack.tsx`
- Create: `src/components/work/project-detail/project-features.tsx`
- Create: `src/components/work/project-detail/project-process.tsx`
- Create: `src/components/work/project-detail/project-deliverables.tsx`
- Create: `src/components/work/project-detail/project-metrics.tsx`
- Create: `src/components/work/project-detail/project-testimonial.tsx`
- Create: `src/components/work/project-detail/project-pricing.tsx`
- Create: `src/components/work/project-detail/project-social-proof.tsx`
- Create: `src/components/work/project-detail/project-responsive-ux.tsx`
- Create: `src/components/work/project-detail/project-seo-performance.tsx`
- Create: `src/components/work/project-detail/project-infrastructure.tsx`
- Create: `src/components/work/project-detail/project-conversion.tsx`

**Steps:**

- [ ] Keep components server-compatible unless interaction is needed.
- [ ] Reuse `GlassButton` for CTA links.
- [ ] Reuse neutral visual language from current site: white surfaces, neutral borders, glass cards, rounded 2xl shapes, subtle `animate-fade-up`/`animate-clip-in`.
- [ ] Use `next/image` for hero/gallery images.
- [ ] Use `lucide-react` icons only if they add clear meaning.
- [ ] Render sections in this order:

```text
Hero
Metadata
Overview
Challenge/Solution
Gallery
Design Direction / Responsive UX
Tech Stack / Infrastructure
Features
Process
Deliverables
Metrics
Testimonial / Social Proof
Pricing
MDX body narrative if supported
Conversion CTA
```

- [ ] Skip optional sections when empty.

Optional checks:

```typescript
const hasItems = <T,>(items?: T[]) => Array.isArray(items) && items.length > 0;
```

- [ ] For testimonial, render only if both `quote` and `name` exist.
- [ ] For pricing, render as project investment context, not checkout.
- [ ] For social proof, prefer GitHub/live proof and launch notes; do not inflate metrics.
- [ ] If MDX body rendering is not already supported by repo tooling, render a simple narrative block from `project.body` as plain text for first pass, or defer rich MDX rendering to a follow-up note. Do not add a full MDX runtime unless needed.
- [ ] Run typecheck.

Run:

```bash
npm run typecheck
```

Expected:

```text
> rohimdev@0.1.0 typecheck
> tsc --noEmit
```

Exit code must be `0`.

## Task 8: Link Work Listing Cards To Detail Pages

**Files:**
- Modify: `src/components/work/work-content.tsx`

**Steps:**

- [ ] Make primary card media/title/headline navigate to `/work/${project.slug}`.
- [ ] Keep GitHub/live anchors as distinct external links.
- [ ] Add a visible detail CTA such as `View case study`.
- [ ] Avoid nested interactive elements.
- [ ] Keep list/grid toggle behavior unchanged.
- [ ] Preserve existing styling language and animation timings.

Implementation pattern:

```tsx
<Link href={`/work/${project.slug}`} className="block">
  <span className="sr-only">View {project.title} case study</span>
  ...
</Link>
```

- [ ] Run typecheck.

Run:

```bash
npm run typecheck
```

Expected:

```text
Exit code 0.
```

## Task 9: Add Metadata Helper Only If Needed

**Files:**
- Optional Modify: `src/lib/seo.ts`

**Steps:**

- [ ] Prefer keeping project-specific metadata in `src/app/work/[slug]/page.tsx`.
- [ ] If metadata logic grows or duplicates existing SEO helpers, add a small exported helper to `src/lib/seo.ts`.
- [ ] Do not change existing page metadata behavior for `/`, `/about`, `/services`, `/contact`, or `/work`.
- [ ] Run typecheck if changed.

Run:

```bash
npm run typecheck
```

Expected:

```text
Exit code 0.
```

## Task 10: Full Verification

**Files:**
- Read/verify all changed files from prior tasks.

**Steps:**

- [ ] Run TypeScript check.

Run:

```bash
npm run typecheck
```

Expected:

```text
> rohimdev@0.1.0 typecheck
> tsc --noEmit
```

Exit code must be `0`.

- [ ] Run lint if available.

Run:

```bash
npm run lint
```

Expected:

```text
> rohimdev@0.1.0 lint
> next lint
```

If Next 15 reports `next lint` removal or deprecation, record exact output and use:

```bash
npx eslint .
```

Expected:

```text
No errors.
```

- [ ] Run production build.

Run:

```bash
npm run build
```

Expected:

```text
✓ Compiled successfully
✓ Generating static pages
```

- [ ] Run Tina local build.

Run:

```bash
npm run build:tina:local
```

Expected:

```text
tinacms build --local --skip-cloud-checks -c "next build"
✓ Compiled successfully
```

- [ ] Run development server for manual route checks.

Run:

```bash
npm run dev
```

Expected:

```text
▲ Next.js 15.1.0
Local:        http://localhost:3000
```

- [ ] Open and verify routes manually:

```text
http://localhost:3000/work
http://localhost:3000/work/chatapp
http://localhost:3000/work/grammedia-clone
http://localhost:3000/work/mobile-fb
http://localhost:3000/work/does-not-exist
```

Expected:

```text
/work renders listing and links to detail pages.
/work/chatapp renders ChatApp detail page with no blank optional sections.
/work/grammedia-clone renders Grammedia Clone detail page with no blank optional sections.
/work/mobile-fb renders Mobile-FB detail page with no blank optional sections.
/work/does-not-exist returns 404.
```

- [ ] Stop dev server with `Ctrl+C`.
- [ ] Check dirty tree and avoid unrelated staging.

Run:

```bash
git status --short
```

Expected:

```text
Only project-detail implementation files are selected for any future commit.
Unrelated existing dirty files remain untouched and unstaged.
```

## Optional Commit Plan

Only commit if user explicitly asks during execution.

- [ ] Review changed files.

Run:

```bash
git diff -- package.json package-lock.json tina/config.ts src/types/content.ts src/lib/content.ts src/app/work/[slug]/page.tsx src/components/work/work-content.tsx src/components/work/project-detail content/projects/chatapp.mdx content/projects/grammedia-clone.mdx content/projects/mobile-fb.mdx
```

Expected:

```text
Diff contains only project detail support.
```

- [ ] Stage only relevant files.

Run:

```bash
git add package.json package-lock.json tina/config.ts src/types/content.ts src/lib/content.ts 'src/app/work/[slug]/page.tsx' src/components/work/work-content.tsx src/components/work/project-detail content/projects/chatapp.mdx content/projects/grammedia-clone.mdx content/projects/mobile-fb.mdx
```

Expected:

```text
No output.
```

- [ ] Commit with focused message.

Run:

```bash
git commit -m "$(cat <<'EOF'
feat: add project detail case studies

EOF
)"
```

Expected:

```text
[branch ...] feat: add project detail case studies
```

## Self-Review Against Spec

- [ ] Route is exactly `/work/[slug]`.
- [ ] Content model uses hybrid structured frontmatter plus MDX body.
- [ ] TinaCMS updates existing `project` collection only.
- [ ] `ProjectContent` includes `seo` and nested `detail`.
- [ ] Parser supports nested frontmatter and normalizes optional sections.
- [ ] Pricing, testimonial, and social proof stay optional per project.
- [ ] Detail pages skip empty optional sections.
- [ ] Listing cards link to project detail pages while preserving GitHub/live links.
- [ ] Three existing project files receive credible English-only structured content.
- [ ] Visual direction preserves current site language: neutral, glass cards, subtle motion, Next/Tailwind patterns.
- [ ] Verification includes typecheck, build, lint if available, Tina local build, and manual route checks.
- [ ] No unrelated git operations are required; optional commit plan warns about dirty tree.

## Execution Options

Plan complete and saved to `docs/superpowers/plans/2026-05-27-project-detail.md`. Two execution options:

**1. Subagent-Driven (this session)** - Dispatch fresh subagent per task, review between tasks, fast iteration.

**2. Parallel Session (separate)** - Open new session with executing-plans, batch execution with checkpoints.

Which approach?
