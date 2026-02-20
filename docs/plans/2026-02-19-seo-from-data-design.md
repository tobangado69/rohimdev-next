# SEO from data/site.json — Design Document

**Date:** 2026-02-19  
**Status:** Implemented

## Goal

Use `data/site.json` as the single source of truth for SEO metadata in the Next.js app.

## Implementation

1. **lib/seo.ts** — `getDefaultMetadata()` and `getPageMetadata(pageKey)` read from site.json
2. **layout.tsx** — Uses `getDefaultMetadata()` for root metadata (title template, og:image, keywords, etc.)
3. **Pages** — Home, About, Work, Services, Pricing, Contact use `getPageMetadata("route")`
4. **site.json** — Added `pricing` page; structure: `seo` (siteName, siteUrl, siteDescription, author, ogImage, keywords), `seo.pages` (per-route title, description, keywords)

## Data Flow

- `data/site.json` → `data/index.ts` exports `site` → `lib/seo.ts` → page metadata
