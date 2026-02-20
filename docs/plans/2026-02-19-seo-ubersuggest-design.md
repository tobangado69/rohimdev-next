# SEO + Ubersuggest + Sitemap/Robots — Design Document

**Date:** 2026-02-19  
**Status:** Approved

## Goal

Hybrid approach: static sitemap/robots + on-demand Ubersuggest via Cursor command for SEO insights.

## Decisions

| Area | Decision |
|------|----------|
| **Sitemap** | Next.js `sitemap.ts` — dynamic from routes |
| **Robots** | Next.js `robots.ts` — allow /, disallow /api/, sitemap URL |
| **Ubersuggest** | Cursor command `/seo-audit` — runs MCP tools, writes `data/seo-insights.json` |
| **Usage** | Manual: run command when you want fresh SEO data; review and update site.json |

## Implementation

1. **sitemap.ts** — Export from `src/app/`, base URL from constants
2. **robots.ts** — Export from `src/app/`, link sitemap
3. **Constants** — Add `siteUrl` for sitemap/robots
4. **seo-audit command** — Invokes Ubersuggest MCP (domain overview, site audit, keyword suggestions), writes results to `data/seo-insights.json`
