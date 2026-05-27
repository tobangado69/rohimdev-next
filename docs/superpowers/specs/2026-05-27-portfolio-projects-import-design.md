# Portfolio Projects Import Design

**Date:** 2026-05-27  
**Status:** Approved for planning  
**Project:** rohimdev-next

## Goal

Add three new portfolio case studies sourced from local repositories, make them the primary featured work on `/work`, and keep images empty until they are uploaded through TinaCMS. Legacy projects remain available but are no longer featured.

## Source Repositories

| Local path | Product name | Slug | Remote (reference only) |
| --- | --- | --- | --- |
| `/Users/a./hypertensi-app` | Neuro Health | `neuro-health` | `https://github.com/tobangado69/hypertensi-apps` (not linked publicly) |
| `/Users/a./forward-ai` | Project Forwarder | `project-forwarder` | `https://github.com/gudang-distribusi/forward-ai` (not linked publicly) |
| `/Users/a./Varnion/flux` | Flux | `flux` | `https://github.com/tobangado69/flux` (not linked publicly) |

## Decisions (Approved)

| Topic | Decision |
| --- | --- |
| Content depth | Full case-study scaffold (same sections as `grammedia-clone.mdx`) |
| Language | English only |
| Images | User adds later via Tina **Project Images**; no stock/placeholder URLs in committed content |
| Featured work | Only the three new projects are `featured: true` |
| Legacy projects | Keep `chatapp`, `grammedia-clone`, `mobile-fb` with `featured: false` |
| Link policy | Mixed per project (see table below) |

### Public links per project

| Project | `github` | `live` | Notes |
| --- | --- | --- | --- |
| Neuro Health | empty | empty | Private research app — case study and photos only |
| Project Forwarder | empty | `https://gudangdistribusi.com/` | Live marketing/product site |
| Flux | empty | empty | Internal Varnion operations tool |

CTAs on detail pages should follow existing `normalizeConversion` behavior: no GitHub button when `github` is empty; live CTA only when `live` is set; otherwise contact-focused CTAs.

## Selected Approach

**Add three MDX files and demote legacy featured flags.**

Create:

- `content/projects/neuro-health.mdx`
- `content/projects/project-forwarder.mdx`
- `content/projects/flux.mdx`

Modify:

- `content/projects/chatapp.mdx` → `featured: false`
- `content/projects/grammedia-clone.mdx` → `featured: false`
- `content/projects/mobile-fb.mdx` → `featured: false`

Rejected alternatives:

1. **Delete legacy MDX files** — loses prior portfolio entries and breaks old URLs/bookmarks.
2. **Move legacy to archive collection** — requires parser and Tina schema changes without user benefit.

## Architecture

No new routes or parsers. Reuse existing stack:

```text
content/projects/*.mdx → src/lib/content.ts → /work + /work/[slug]
```

TinaCMS `project` collection already supports:

- `images` (list) — first image = cover on `/work`, rest = detail gallery
- `detail.*` structured sections
- optional `github`, `live`, `featured`

Implementation is **content-only** unless empty `images` breaks listing cards (hero hidden when no image — acceptable until Tina upload).

## New Project Summaries (for MDX authoring)

### Neuro Health (`neuro-health`)

**One-liner:** Research-driven mobile app helping Indonesian high-school students track sodium intake, physical activity, and hypertension literacy with an AI coach.

**Stack:** Expo Router, React Native, Express, TypeScript, Supabase, MiniMax AI, Zustand, TanStack Query, Vitest.

**Highlights for case study:**

- Dashboard with daily health score and reminders
- Sodium diet logging with WHO-based warnings (2000 mg/day)
- Pedometer and weekly activity charts
- Education articles and pre/post literacy quizzes
- Rate-limited AI coach (MiniMax) via Express API
- Monorepo: `apps/mobile`, `apps/backend`, Supabase migrations

**Status label:** `Research / Private`  
**Platform:** iOS & Android (Expo)  
**Client:** Academic research (formal study title preserved in overview copy, not as marketing headline)

### Project Forwarder (`project-forwarder`)

**One-liner:** WhatsApp aggregator marketplace that routes messages between project owners and freelancers while keeping phone numbers private, with admin dashboard, AI agents, and blast campaigns.

**Stack:** Go, Gin, GORM, MySQL, whatsmeow, React 18, TypeScript, Vite, TanStack Query, Redux Toolkit, Tailwind, shadcn/ui, JWT, R2/S3, Resend.

**Highlights:**

- REST API for projects, auth (JWT + magic link), admin panel
- Multi-device WhatsApp bot (whatsmeow) with role-based routing
- Project locking and freelancer assignment
- Gemini/OpenAI auto-reply per conversation
- WhatsApp Blast: contacts, templates, scheduling, throttling, reports
- Jitsi-based meetings with attendance

**Status label:** `Live`  
**Live URL:** `https://gudangdistribusi.com/`  
**Platform:** Web (dashboard) + WhatsApp integration

### Flux (`flux`)

**One-liner:** Internal field-operations platform for Varnion covering sites, schedules, field activities, reports, tickets, Starlink, Fiberzone work orders, and projects — with a Go/Gin + MySQL backend rewrite from legacy FastAPI/MongoDB.

**Stack:** Go, Gin, GORM, MySQL, React (CRA/CRACO), shadcn/ui, Radix, MongoDB migration tooling, JWT auth, role-based data scoping.

**Highlights:**

- ~33 Mongo collections migrated to relational MySQL schema
- React frontend consuming Go API (`REACT_APP_API_URL`)
- Domains: sites, schedules, activities, reports, tickets, work orders, projects, notifications
- Smoke suite and parity verification for cutover
- Uploads and embedded asset migration from legacy backend

**Status label:** `Internal`  
**Platform:** Web (enterprise admin)  
**Client:** Varnion (internal tool — no public repo or live link on portfolio)

## MDX File Requirements

Each new file must include:

**Frontmatter (top level):**

- `slug`, `title`, `headline`, `summary`
- `images: []` (empty array until Tina upload)
- `image: ""` omitted or empty — parser uses `images[0]`; listing may hide image until upload
- `date`, `status`, `technologies`, `featured: true`
- `github` / `live` per link table
- `seo` (title, description, keywords; `ogImage` empty until first image exists)

**`detail` object (full scaffold):**

- `hero` (eyebrow, title, subtitle, CTAs — no `primaryImage` until photos added)
- `metadata` (role, client, timeline, platform, year, collaboration)
- `designDirection`, `overview`, `challenge`, `solution`
- `techStack`, `features` (4 items minimum)
- `process` (3 phases)
- `deliverables`, `metrics`
- `conversion` (contact-first for A and C; live CTA for B)
- `responsiveUx`, `seoPerformance`, `infrastructure`
- Omit `pricing`, `testimonial`, `socialProof` unless content exists

**MDX body:** Short closing paragraph (1–3 sentences), English.

Do **not** commit Unsplash or other stock image URLs.

## Featured / Sorting Behavior

`getProjects()` sorts by `featured` descending. After import:

1. Featured block (new only): neuro-health, project-forwarder, flux
2. Non-featured: chatapp, grammedia-clone, mobile-fb

Order within featured group can follow file write order or explicit `date` field (newest first recommended: 2025–2026 dates for new projects).

## Flux — Nano Banana Mock Image Prompts

Include these in implementation notes for the user; images are not committed in repo.

### Prompt 1 — Hero (desktop dashboard)

```text
Premium desktop UI mockup of a fictional B2B SaaS product named "Flux", an internal field operations platform for telecom/ISP operations teams. Layout: left sidebar navigation with items Sites, Schedules, Activities, Reports, Tickets, Work Orders, Projects, Settings. Main content: top row of KPI stat cards (Open tickets, Activities today, Pending reports, Sites online), below a filterable data table with status badges (Open, In progress, Done). Style: modern enterprise dashboard, shadcn/ui aesthetic, light mode, neutral slate and white palette, subtle borders and shadows, no real company logos, no readable personal data. Resolution 1440x900, crisp UI design, portfolio case study quality.
```

### Prompt 2 — Gallery (field activity form)

```text
UI mockup of a field activity submission screen in the same "Flux" design system. Form fields: Site name, Activity category dropdown, Date/time, Notes, Photo attachment area, GPS/location hint, primary Submit button. Show validation states and a compact mobile-width panel centered on a light background, or split desktop form with clear hierarchy. Professional internal operations tool, fictional data only, no real brands, shadcn-like components, portfolio quality.
```

### Prompt 3 — Gallery (ticket detail, optional)

```text
Desktop UI mockup, Flux operations platform, ticket detail drawer or page: ticket ID, priority chip, assigned technician, site name, timeline of status updates, comment thread, action buttons Assign and Close. Consistent with enterprise dashboard mockup 1, neutral palette, fictional content.
```

User uploads generated images to Tina **Project Images** (first = cover, rest = gallery).

## Legacy Project Updates

Only change required on existing files:

```yaml
featured: false
```

Do not rewrite legacy narratives or images in this task.

## Verification Plan

After implementation:

1. `npm run typecheck` passes
2. `npm run build` generates static routes for 6 slugs under `/work/[slug]`
3. `/work` shows three featured projects first (new entries)
4. `/work/neuro-health`, `/work/project-forwarder`, `/work/flux` render without image (hero optional hidden) until Tina images added
5. Project Forwarder shows **View live site** → `https://gudangdistribusi.com/`
6. No GitHub links on new projects
7. Tina admin lists 6 projects; new files editable under **Project Images**

## Out of Scope

- Removing legacy project MDX files
- Code changes to Tina schema (already supports `images` list)
- Generating or committing mock image files
- Public deployment URLs for Neuro Health or Flux
- i18n / bilingual content

## Implementation Handoff

Next step: `writing-plans` → `docs/superpowers/plans/2026-05-27-portfolio-projects-import.md` with task breakdown for MDX authoring and legacy `featured` updates only.
