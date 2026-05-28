# rohimdev.com

Portfolio site for **Abdul Rohim** — Full-Stack Developer & Infrastructure Specialist. Built with Next.js 15, React 19, Tailwind CSS v4, and [TinaCMS](https://tina.io/) for git-backed content editing.

## Features

- **Modern design** — Sidebar layout, scroll animations, responsive across breakpoints
- **Portfolio & case studies** — Project grid at `/work` and premium detail pages at `/work/[slug]`
- **Git-backed CMS** — Edit pages and projects in Tina at `/admin` (local) or Tina Cloud (production)
- **Structured project content** — MDX with frontmatter (`detail`, `images`, `projectType`, SEO)
- **Marketing pages** — Home, About, Services, and Contact driven by JSON in `content/pages/`
- **Contact form** — [Web3Forms](https://web3forms.com/) (no custom backend)
- **Media library** — Cloudinary uploads for project covers and galleries via Tina
- **SEO** — Per-page metadata, `sitemap.ts`, and `robots.ts`

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Geist](https://vercel.com/font) |
| CMS | [TinaCMS](https://tina.io/) + `@tinacms/datalayer` |
| Content | JSON (`content/pages/`) + MDX (`content/projects/`) |
| Media | [Cloudinary](https://cloudinary.com/) via `next-tinacms-cloudinary` |
| Icons | [Lucide React](https://lucide.dev/) |
| Contact | [Web3Forms](https://web3forms.com/) |

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn
- [Cloudinary](https://cloudinary.com/) account (for image uploads in Tina)
- [Web3Forms](https://web3forms.com/) access key (for contact form)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/tobangado69/rohimdev-next.git
   cd rohimdev-next
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment variables**

   ```bash
   cp .env.example .env
   ```

   See [Environment variables](#environment-variables) below.

4. **Run locally**

   Site only:

   ```bash
   pnpm dev
   ```

   Site + Tina admin (`/admin`):

   ```bash
   pnpm dev:tina
   ```

5. Open [http://localhost:3000](http://localhost:3000) — admin UI at [http://localhost:3000/admin](http://localhost:3000/admin) when using `dev:tina`.

## Project structure

```text
rohimdev-next/
├── content/
│   ├── pages/           # Tina-managed JSON (home, about, services, contact, site)
│   ├── projects/        # Portfolio case studies (MDX + structured frontmatter)
│   ├── posts/           # Blog placeholder
│   └── case-studies/    # Extended case studies placeholder
├── src/
│   ├── app/             # App Router routes
│   │   ├── page.tsx     # Home
│   │   ├── work/        # Portfolio list + [slug] detail
│   │   ├── about/
│   │   ├── services/
│   │   └── contact/
│   ├── components/      # UI sections (home, work, layout, …)
│   ├── lib/
│   │   ├── content.ts   # Reads content/ at build time
│   │   └── seo.ts       # Metadata helpers
│   └── pages/api/       # Tina GraphQL + Cloudinary media handlers
├── tina/
│   ├── config.ts        # Tina schema & collections
│   └── database.ts      # Local datalayer (dev)
├── public/admin/        # Tina admin build output (generated; assets via CI)
└── docs/superpowers/    # Design specs & implementation plans
```

## Content editing

### Local workflow (default)

1. Set `TINA_PUBLIC_IS_LOCAL=true` in `.env` (see `.env.example`).
2. Run `pnpm dev:tina`.
3. Open `/admin`, edit pages or projects, save — files update under `content/`.
4. Commit and push; Vercel rebuilds the public site from git.

### What you can edit in Tina

| Collection | Path | Used on |
| --- | --- | --- |
| Site | `content/pages/site.json` | Global name, social links |
| Pages | `content/pages/*.json` | Home, About, Services, Contact |
| Projects | `content/projects/*.mdx` | `/work`, `/work/[slug]` |

**Project images:** use **Project Images** (and other image fields under Project Detail). Click the dashed paste box, then **⌘V / Ctrl+V** to paste a screenshot or copied image—it uploads to Cloudinary automatically. You can still use the media picker below. First list image = `/work` cover; the rest = detail gallery. Set `projectType` to `production` or `study` for listing badges.

### Production CMS (optional)

To edit on the live site via `/admin`, you need [Tina Cloud](https://app.tina.io) linked to this repo, production env vars (`NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`), Cloudinary secrets, `TINA_PUBLIC_IS_LOCAL=false`, and build command `pnpm run build:tina`. The codebase currently uses a **local datalayer** for development; full production auth requires additional Tina Cloud wiring (see `docs/superpowers/plans/2026-05-27-tinacms-content-management.md`).

For the simplest deploy, keep editing locally and ship content via git — no Tina Cloud required.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Contact form | From [web3forms.com](https://web3forms.com/) |
| `TINA_PUBLIC_IS_LOCAL` | Local CMS | `true` for local `/admin` without Tina Cloud |
| `CLOUDINARY_CLOUD_NAME` | Tina media | Cloudinary dashboard |
| `CLOUDINARY_API_KEY` | Tina media | Cloudinary dashboard |
| `CLOUDINARY_API_SECRET` | Tina media | Server-only; never expose to client |
| `NEXT_PUBLIC_TINA_CLIENT_ID` | Tina Cloud | Only for production CMS |
| `TINA_TOKEN` | Tina Cloud | Server-only; only for production CMS |

Example `.env`:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here

TINA_PUBLIC_IS_LOCAL=true

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Next.js dev server (no Tina UI) |
| `pnpm dev:tina` | Tina + Next.js — use for content editing |
| `pnpm build` | Production build (site only) |
| `pnpm build:tina` | `tinacms build` then `next build` (for Tina Cloud deploy) |
| `pnpm build:tina:local` | Local admin build + Next (no cloud checks) |
| `pnpm start` | Serve production build |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript check |

## Deployment

### Vercel (recommended)

1. Push to GitHub (`tobangado69/rohimdev-next`).
2. Import the repo on [Vercel](https://vercel.com/).
3. Add env vars from [Environment variables](#environment-variables).
4. **Build command**
   - Content via git only: `pnpm build`
   - Tina admin in production: `pnpm build:tina` (+ Tina Cloud credentials)
5. Deploy.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tobangado69/rohimdev-next)

### Manual

```bash
pnpm build
pnpm start
```

Public pages read `content/` at **build time** via `src/lib/content.ts` — after deploy, new content appears after a rebuild (or Vercel redeploy on git push).

## Customization

- **Page copy & SEO** — `content/pages/` or Tina **Pages** / **Site**
- **Portfolio** — `content/projects/*.mdx` or Tina **Projects**
- **Styles** — `src/app/globals.css`, Tailwind v4 via `postcss.config.mjs`
- **Tina schema** — `tina/config.ts` (run `pnpm dev:tina` to regenerate types)

Planning docs for major features live under `docs/superpowers/specs/` and `docs/superpowers/plans/`.

## Author

**Abdul Rohim**

- Portfolio: [rohimdev.com](https://rohimdev.com)
- Email: rohimjoy70@gmail.com
- GitHub: [@tobangado69](https://github.com/tobangado69)
- LinkedIn: [tobangado](https://www.linkedin.com/in/tobangado)

## Acknowledgments

- [Next.js](https://nextjs.org/) · [TinaCMS](https://tina.io/) · [Tailwind CSS](https://tailwindcss.com/) · [Geist](https://vercel.com/font) · [Lucide](https://lucide.dev/) · [Web3Forms](https://web3forms.com/) · [Cloudinary](https://cloudinary.com/)

---

Built by Abdul Rohim
