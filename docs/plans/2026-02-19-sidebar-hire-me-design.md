# Sidebar "Hire Me" Button — Design Document

**Date:** 2026-02-19  
**Status:** Approved

## Goal

Add a "Hire Me" button to the sidebar that links to the Upwork profile, styled in green, placed below the Contact nav link.

## Decisions

| Area | Decision |
|------|----------|
| **Placement** | Below Contact nav link, before bottom section |
| **Style** | GlassButton with variant="green" |
| **Link** | PROFILE.social.upwork (external) |
| **Label** | "Hire Me" |

## Implementation

- Import GlassButton and PROFILE in sidebar.tsx
- Add GlassButton after </nav> with mt-6 spacing
- Props: href={PROFILE.social.upwork}, external, variant="green"
