# Project Detail Page Design

**Date:** 2026-05-27  
**Status:** Approved for planning  
**Project:** rohimdev-next

## Goal

Add project detail support so each portfolio project can become a premium case-study page at `/work/[slug]`.

The detail pages should extend the existing TinaCMS project collection, keep important content structured for rendering and SEO, and keep long-form narrative editable through MDX body content. The first implementation should support the three existing project files:

- `content/projects/chatapp.mdx`
- `content/projects/grammedia-clone.mdx`
- `content/projects/mobile-fb.mdx`

## Scope

In scope:

- Extend the project content model for detailed case-study data.
- Extend the TinaCMS project schema for the new structured fields.
- Add `/work/[slug]` project detail routing.
- Link project cards on `/work` to their detail pages.
- Create reusable detail-page sections and rendering behavior.
- Add sample detail content for the three existing projects.
- Preserve English-only content.

Out of scope for this design:

- Building a separate `content/case-studies` collection.
- Adding a database, auth workflow, or custom admin UI.
- Adding comments, user accounts, project filtering, or search.
- Redesigning the main `/work` listing page beyond detail links.
- Building a pricing calculator or checkout flow.
- Rewriting the existing TinaCMS setup.

## Current Context

The repository already has TinaCMS-backed content under `content/`.

Current project files are MDX files under `content/projects/`. Their frontmatter has these fields:

- `slug`
- `title`
- `headline`
- `summary`
- `image`
- `date`
- `status`
- `technologies`
- `github`
- `live`
- `featured`
- `body`

Current app integration:

- `src/types/content.ts` defines `ProjectContent` with the simple project fields.
- `src/lib/content.ts` reads `content/projects/*.mdx`, parses frontmatter, and exposes `getProjects()` plus `getProjectBySlug(slug)`.
- `src/app/work/page.tsx` loads projects and renders `WorkContent`.
- `src/components/work/work-content.tsx` lists projects but does not link to detail pages yet.
- `tina/config.ts` defines the current `project` collection as MDX with `body` as the rich-text body field.

The existing CMS design spec is `docs/superpowers/specs/2026-05-27-tinacms-content-management-design.md`. This design builds on that content architecture instead of replacing it.

## Selected Approach

Use a **hybrid structured frontmatter plus MDX body** model.

Structured frontmatter should own fields that need predictable rendering, sorting, metadata, optional section display, and SEO. MDX body should own the long narrative that benefits from editorial flexibility.

Why this approach fits:

- Detail pages need consistent premium sections such as hero, metadata, gallery, metrics, and CTA blocks.
- TinaCMS editors need clear fields instead of one long unstructured body.
- Next.js metadata generation needs predictable title, description, image, and keyword data.
- Project stories still need room for narrative writing beyond rigid fields.
- Existing project files are already MDX, so the migration stays local to the project collection.

Rejected alternatives:

1. **MDX-only case studies**
   - Flexible, but weak for repeated UI sections, optional pricing/testimonials, SEO metadata, and consistent visual hierarchy.
2. **Fully structured JSON-like frontmatter with no MDX body**
   - Easy to render, but too rigid for case-study storytelling and painful to edit for long process notes.
3. **Separate `content/case-studies` collection**
   - Useful later if case studies diverge from projects, but unnecessary now and would duplicate project identity, links, images, and technology fields.

## Data Architecture

Keep `ProjectContent` as the single project detail source. Add nested fields grouped by page purpose instead of mirroring every requested section as a top-level field.

### Section Grouping

The 20 requested sections map into these nested groups:

| Requested section | Proposed field group |
| --- | --- |
| Navigation/Header | Existing site navigation plus page-level project context |
| Hero Showcase | `detail.hero` |
| Project Metadata | Existing top-level fields plus `detail.metadata` |
| UI/UX Direction | `detail.designDirection` |
| Project Overview | `detail.overview` plus MDX `body` |
| Problem | `detail.challenge` |
| Solution | `detail.solution` |
| Visual Journey/Gallery | `detail.gallery` |
| Tech Stack | Existing `technologies` plus `detail.techStack` |
| Key Features | `detail.features` |
| Process/Workflow | `detail.process` |
| Deliverables | `detail.deliverables` |
| Metrics/Achievement | `detail.metrics` |
| Testimonial | `detail.testimonial` |
| Conversion Elements | `detail.conversion` |
| Pricing Structure | `detail.pricing` |
| Social Proof | `detail.socialProof` |
| Responsive/UX System | `detail.responsiveUx` |
| SEO & Performance | `detail.seoPerformance` plus `seo` |
| Deployment & Infrastructure | `detail.infrastructure` |

This grouping keeps editing manageable and keeps component boundaries aligned with page sections.

### Required vs Optional Fields

Required fields for detail rendering:

- `slug`
- `title`
- `headline`
- `summary`
- `image`
- `date`
- `status`
- `technologies`
- `detail.hero`
- `detail.overview`
- `detail.challenge`
- `detail.solution`
- `detail.features`
- `detail.conversion`
- `seo`

Optional fields:

- `live`
- `github`
- `detail.gallery`
- `detail.techStack`
- `detail.process`
- `detail.deliverables`
- `detail.metrics`
- `detail.testimonial`
- `detail.pricing`
- `detail.socialProof`
- `detail.responsiveUx`
- `detail.seoPerformance`
- `detail.infrastructure`
- MDX `body`

Optional fields should be omitted from rendering when empty. They should not render blank cards, empty headings, or placeholder copy.

## Type Shape

The implementation should extend `ProjectContent` at a high level like this:

```typescript
export type ProjectContent = {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  image: string;
  date: string;
  status: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  seo: SeoContent;
  detail: ProjectDetailContent;
  body?: string;
};

export type ProjectDetailContent = {
  hero: ProjectHero;
  metadata?: ProjectMetadata;
  designDirection?: ProjectDesignDirection;
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

Expected reusable supporting shapes:

- `ProjectHero`: eyebrow, title override, subtitle, primary image, supporting images, primary CTA, secondary CTA.
- `ProjectMetadata`: role, client/project type, timeline, platform, year, collaboration model.
- `ProjectNarrativeSection`: heading, summary, bullets.
- `ProjectGalleryItem`: image, alt, caption, category.
- `ProjectTechStackGroup`: category label and tools.
- `ProjectFeature`: title, description, impact, icon key.
- `ProjectProcessStep`: phase, title, description, outputs.
- `ProjectDeliverable`: title, description, link or asset reference.
- `ProjectMetric`: value, label, description.
- `ProjectTestimonial`: quote, name, role, company, avatar.
- `ProjectConversion`: heading, description, CTAs.
- `ProjectPricing`: pricing model, starting price, included items, note.
- `ProjectSocialProof`: badges, links, repository stats, launch notes.
- `ProjectResponsiveUx`: supported breakpoints, interaction notes, accessibility notes.
- `ProjectSeoPerformance`: performance targets, SEO notes, technical checks.
- `ProjectInfrastructure`: hosting, backend, database, storage, CI/CD, monitoring.

Keep names concise in code, but keep Tina labels editor-friendly.

## TinaCMS Schema Implications

Update the existing `project` collection in `tina/config.ts`; do not create a new collection.

Schema requirements:

- Keep existing fields for backward compatibility with the `/work` listing.
- Add a required `seo` object with title, description, keywords, and optional OG image.
- Add a `detail` object containing nested section objects and lists.
- Keep `body` as the MDX rich-text body field with `isBody: true`.
- Use list objects for gallery items, features, process steps, deliverables, metrics, tech stack groups, and social proof badges.
- Use image fields for hero/gallery/avatar assets.
- Use string options where the editor benefits from consistency, such as CTA variant, gallery category, pricing model, and feature icon key.

Tina editor behavior:

- The editor should see the simple listing fields first.
- Detail fields should be grouped under a clear "Project Detail" section.
- Optional sections should be visually separate and documented through labels or descriptions where Tina supports them.
- Empty optional list fields should be allowed.

Content compatibility:

- Existing project files must still parse after schema expansion.
- During implementation, add complete detail data for all three existing project files so `/work/[slug]` pages do not depend on generic fallback copy.
- The content parser should normalize absent optional arrays to `[]` and absent optional objects to `undefined`.

## Page Architecture

Add the route:

```text
src/app/work/[slug]/page.tsx
```

Expected page responsibilities:

- Read the project with `getProjectBySlug(params.slug)`.
- Return `notFound()` when the slug does not exist.
- Generate static params from `getProjects()`.
- Generate page metadata from project `seo`, falling back to `title`, `summary`, and `image`.
- Render the premium case-study layout by passing project data into detail components.

Expected component structure:

```text
src/components/work/project-detail/
  project-detail-page.tsx
  project-hero.tsx
  project-meta.tsx
  project-narrative-section.tsx
  project-gallery.tsx
  project-tech-stack.tsx
  project-features.tsx
  project-process.tsx
  project-deliverables.tsx
  project-metrics.tsx
  project-testimonial.tsx
  project-pricing.tsx
  project-social-proof.tsx
  project-responsive-ux.tsx
  project-seo-performance.tsx
  project-infrastructure.tsx
  project-conversion.tsx
```

This can be implemented as fewer files if the first pass stays readable. Avoid one oversized component if sections become hard to scan.

Rendering order:

1. Header/navigation context from existing layout.
2. Hero showcase.
3. Project metadata.
4. Overview.
5. Problem and solution.
6. Visual gallery.
7. UI/UX direction and responsive UX notes.
8. Tech stack and infrastructure.
9. Key features.
10. Process/workflow.
11. Deliverables.
12. Metrics.
13. Testimonial and social proof.
14. Pricing when present.
15. MDX body narrative when present.
16. Conversion CTA.

The layout should feel editorial and premium: strong hero hierarchy, big media, focused case-study sections, and clear conversion points.

## Work Listing Integration

Update `src/components/work/work-content.tsx` so project cards link to `/work/[slug]`.

Behavior:

- Cards should keep GitHub/live links where they exist.
- Detail navigation should be primary card behavior.
- External links should remain distinct and should not block navigation to detail pages.
- Projects without `live` links should still show detail pages.

## Optional Section Behavior

Optional sections must be content-driven:

- If `detail.gallery` is empty, skip the gallery section.
- If `detail.metrics` is empty, skip metrics instead of inventing numbers.
- If `detail.testimonial` is absent, skip testimonial.
- If `detail.pricing` is absent, skip pricing.
- If `detail.socialProof` is absent or empty, skip social proof.
- If `detail.infrastructure` is absent, render only the top-level tech stack.
- If MDX `body` is empty, skip the long narrative body.

Pricing behavior:

- Pricing is optional per project because not every portfolio project represents client work.
- When present, render it as "project investment context", not checkout or sales pricing.
- Include `model`, `startingAt`, `included`, and `note`.
- Do not show pricing for personal clone/learning projects unless there is a clear service package angle.

Testimonial behavior:

- Render only when quote and name exist.
- If company or avatar is missing, render a simpler testimonial card.
- Do not create fake testimonials for sample content.

Social proof behavior:

- Prefer real proof: GitHub repository, live deployment, public screenshots, technology credibility, launch status.
- Avoid inflated metrics unless they can be supported by actual project data.

## Sample Content Strategy

Add detailed sample content for the three current projects. The content should be credible and project-specific, not generic portfolio filler.

### ChatApp

Positioning:

- Real-time messaging case study.
- Focus on live chat, presence indicators, event-driven UI updates, and full-stack JavaScript architecture.

Useful detail content:

- Problem: real-time communication needs fast feedback, stable socket state, and clear online/offline behavior.
- Solution: React UI with Socket.IO events, Express backend, PostgreSQL persistence, Sequelize models, Tailwind interface.
- Features: live messaging, presence state, conversation UI, backend event handling.
- Infrastructure: Express API, Socket.IO server, PostgreSQL, local/dev deployment notes.
- Metrics: use qualitative achievements such as "real-time event flow implemented" unless measured numbers exist.
- Pricing/testimonial: omit.

### Grammedia Clone

Positioning:

- E-commerce bookstore case study.
- Focus on product browsing, storefront UX, Next.js rendering, MongoDB-backed catalog patterns, and infinite-scroll browsing.

Useful detail content:

- Problem: bookstore browsing needs quick discovery, clear product hierarchy, and mobile-friendly shopping flows.
- Solution: Next.js + TypeScript storefront, MongoDB data model, Tailwind layout, infinite-scroll catalog behavior.
- Features: product grid, category-style browsing, responsive catalog, live Vercel deployment.
- Gallery: use existing image plus additional screenshots if available later.
- Social proof: live link and GitHub link are valid proof.
- Pricing/testimonial: omit.

### Mobile-FB

Positioning:

- Mobile-first social application case study.
- Focus on React Native, Expo, GraphQL data flows, feed interactions, profiles, and scalable mobile UX patterns.

Useful detail content:

- Problem: social feeds need fast mobile interactions, nested data, real-time-ish engagement patterns, and responsive native UI.
- Solution: React Native + Expo app, GraphQL/Apollo Client data layer, Node.js backend, MongoDB persistence, Redis support.
- Features: mobile feed, profiles, interaction model, GraphQL queries/mutations, cache-aware UI.
- Responsive/UX: native mobile patterns, touch targets, feed density, empty/loading states.
- Infrastructure: Node.js, MongoDB, Redis, GraphQL API.
- Pricing/testimonial: omit.

## SEO, Performance, Accessibility

SEO:

- Use `generateMetadata()` for `/work/[slug]`.
- Use project `seo.title` and `seo.description` when present.
- Fall back to `title`, `summary`, and `image`.
- Include canonical URL `/work/[slug]`.
- Use project image as Open Graph image when possible.
- Keep each page English-only.

Performance:

- Keep route as a server-rendered/static App Router page.
- Use `generateStaticParams()` for current project slugs.
- Use optimized image rendering where project images are compatible with Next image configuration.
- Avoid loading all rich media above the fold.
- Render gallery images with meaningful sizes and lazy behavior.
- Do not add client-side state unless a section needs interaction.

Accessibility:

- Every project image and gallery image needs meaningful `alt` text.
- CTAs need clear labels and accessible external-link behavior.
- Section headings should follow a logical order.
- Metrics and feature cards should remain readable without color alone.
- Mobile layout should preserve tap target size and text contrast.

## Testing and Verification Considerations

Implementation should be verified with:

- TypeScript check: `npm run typecheck` or `npx tsc --noEmit`.
- Production build: `npm run build`.
- Tina build or local admin check if schema changes affect generated Tina files.
- Manual route checks for:
  - `/work/chatapp`
  - `/work/grammedia-clone`
  - `/work/mobile-fb`
  - missing slug returns 404
- Manual `/work` listing check to confirm cards link to detail pages.
- Content parser smoke check confirming all three project files load with structured detail data.

Acceptance criteria:

- Every existing project has a working detail page.
- Detail pages render without blank optional sections.
- `/work` remains functional.
- Metadata exists for every detail page.
- TinaCMS can edit the new detail fields.
- Build succeeds.

## Implementation Verification Plan

1. Extend `src/types/content.ts` with project detail types.
2. Extend `tina/config.ts` project schema without creating a new collection.
3. Update `src/lib/content.ts` parsing/normalization for nested detail data.
4. Add detail content to `chatapp.mdx`, `grammedia-clone.mdx`, and `mobile-fb.mdx`.
5. Add `/work/[slug]` route with static params, metadata, and 404 behavior.
6. Add project detail components using content-driven optional section rendering.
7. Link `/work` cards to project detail pages.
8. Run typecheck/build/Tina verification and manual route checks.

## Self-Review

Checked for placeholders, contradictions, scope creep, and ambiguity.

- No placeholder fields require later decisions.
- The design keeps a single project collection and does not conflict with the existing TinaCMS content architecture.
- Optional pricing, testimonial, and social proof behavior is explicit.
- Scope stays limited to schema, route, components, links, and sample content for three current projects.
- Implementation checks are concrete and tied to repository commands/routes.
