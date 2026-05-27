# TinaCMS Content Management Design

**Date:** 2026-05-27  
**Status:** Approved for planning  
**Project:** rohimdev-next

## Goal

Add a Git-based CMS to make rohimdev.com content easier to manage without introducing a database-backed admin system. The CMS should let Abdul Rohim manage portfolio content, experience, services, projects, SEO, and future blog/case-study content through TinaCMS while keeping content in the repository.

## Current Project Context

The project is a Next.js 15 + React 19 portfolio site. Content is split between `data/*.json` files and hardcoded component data.

Current editable-ish content files:

- `data/home.json`
- `data/about.json`
- `data/services.json`
- `data/projects.json`
- `data/work.json`
- `data/contact.json`
- `data/site.json`
- `data/privacy.json`
- `data/terms.json`

Current hardcoded content that must be migrated or wrapped by CMS data:

- `src/components/home/hero.tsx`
- `src/components/about/about-content.tsx`
- `src/components/work/work-content.tsx`
- selected home/service/contact sections as needed

Known content issue: `data/home.json` contains mixed older startup/design-agency copy and Abdul Rohim portfolio copy. Migration should normalize content around the Abdul Rohim full-stack developer portfolio brand.

## Selected Approach

Use **TinaCMS hybrid Git-based editing**.

- Start with local editing.
- Keep content as files in the repository.
- Structure content so it can migrate to Tina Cloud later.
- Do not add database-backed auth/admin in the first phase.
- Do not build custom admin UI in the first phase.

Rejected alternatives:

1. **Minimal Tina over existing `data/*.json`**
   - Faster, but preserves current content structure problems and does not scale well for projects/case studies.
2. **Full editorial platform immediately**
   - More powerful, but too much scope for the first CMS phase.

## Architecture

Content flow:

```text
Tina Admin -> content files -> Next.js pages/components
```

Responsibilities:

- Tina schema owns editable field definitions.
- `content/` owns source content files.
- `src/lib/content.ts` owns content loading/parsing helpers.
- Page files own routing and metadata.
- Components own presentation and receive data through props.

This prevents CMS concerns from spreading into every component.

## Target Content Structure

```text
content/
  pages/
    home.json
    about.json
    services.json
    contact.json
    site.json
  projects/
    mobile-fb.mdx
    chatapp.mdx
    grammedia-clone.mdx
  case-studies/
    .gitkeep
  posts/
    .gitkeep
```

Existing `data/*.json` files can remain during migration, but new CMS-managed content should live under `content/`.

## Phase 1 Scope

### Global/site content

Editable fields:

- site name
- tagline
- description
- SEO defaults
- social links
- footer/navigation copy
- default images/OG image references

### Pages

CMS-managed page files:

- `content/pages/home.json`
- `content/pages/about.json`
- `content/pages/services.json`
- `content/pages/contact.json`

Each page should include:

- main content sections
- call-to-action copy
- SEO title
- SEO description
- SEO keywords where useful
- OG image where useful

### Projects

Use one file per project under `content/projects/`.

Project fields:

- title
- slug
- headline
- summary
- image
- date
- status
- technologies
- GitHub link
- live link
- featured flag
- body content for future detail/case-study pages

Preferred project format: MDX if Tina + Next integration supports it cleanly after version verification; otherwise JSON with a rich text/body field acceptable as a fallback.

### Future-ready collections

Create placeholders for:

- `content/posts/`
- `content/case-studies/`

Do not build blog or case-study pages in phase 1 unless needed for project detail pages. The first phase should only prepare the structure.

## App Integration Design

Add TinaCMS setup:

- `tina/config.ts`
- generated Tina files as required by current Tina version
- local admin route/static admin as required by current Tina version
- package scripts for Tina dev workflow

Add content access layer:

- `src/lib/content.ts`

Expected helper functions:

- `getSiteContent()`
- `getHomeContent()`
- `getAboutContent()`
- `getServicesContent()`
- `getContactContent()`
- `getProjects()`
- `getProjectBySlug(slug)`

Refactor components:

- Components should accept content via props.
- Hardcoded content should be removed from migrated sections.
- Visual layout/classes should remain mostly unchanged.
- CMS migration should not redesign the site.

Metadata integration:

- `getPageMetadata()` should read CMS-backed page/site metadata after migration.
- Existing SEO behavior should be preserved or improved.

## Editing Workflow

Local workflow:

```text
npm run dev
npm run tina
open /admin
edit content
save -> file changes under content/
commit changes
deploy
```

Future Tina Cloud workflow:

```text
Tina Cloud login -> edit production content -> commit to GitHub -> Vercel deploy
```

## Validation and Safety

The implementation should include safe defaults so missing optional fields do not crash pages.

Minimum verification for implementation:

- install succeeds
- `npm run build` succeeds
- main pages render after migration
- Tina admin loads locally
- editing one sample field changes a content file and updates the rendered page

## Risks

### Tina version/API mismatch

TinaCMS setup changes over time. Before implementation, verify current TinaCMS docs and installation commands.

### Existing content inconsistency

Some current content mixes multiple positioning directions. During migration, normalize toward Abdul Rohim's full-stack developer portfolio positioning.

### Hardcoded component data

Several components currently embed content directly. These must be refactored to props before Tina can manage them cleanly.

### Scope creep

Do not build full blog, full case-study system, auth portal, or custom CMS UI in phase 1. Prepare structure only.

## Out of Scope for Phase 1

- Database-backed admin dashboard
- Custom CMS UI
- Tina Cloud production setup
- Full blog implementation
- Full case-study publishing workflow
- Role-based access control
- Visual page builder/block editor

## Open Implementation Notes

- Verify whether current TinaCMS best practice prefers `tina dev`, `tinacms` package scripts, or another setup flow.
- Decide MDX vs JSON for projects after checking current Tina/Next compatibility.
- Add `.superpowers/` to `.gitignore` if not already ignored; visual brainstorming artifacts should not be committed.
