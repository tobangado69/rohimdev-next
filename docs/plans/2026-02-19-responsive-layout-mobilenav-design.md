# Responsive Layout + MobileNav — Design Document

**Date:** 2026-02-19  
**Status:** Approved

## Goal

Proactive audit for layout compatibility across laptop, tablet, and mobile. Integrate MobileNav (hamburger) on mobile/tablet for compact header UX.

## Decisions

| Area | Decision |
|------|----------|
| **Mobile header** | Compact bar: logo left, hamburger right |
| **Nav links** | In MobileNav dropdown on mobile; sidebar on desktop |
| **Hire Me** | In MobileNav dropdown on mobile; sidebar on desktop |
| **Breakpoint** | lg (1024px) — same as current |

## Implementation

1. **Sidebar**: On mobile, show logo + MobileNav only. Hide nav + Hire Me (they move to dropdown).
2. **MobileNav**: Add Hire Me button below nav links. Pass currentPath from Sidebar.
3. **Dropdown**: Full-width below header, closes on link click or outside click.
