# Neuro Health Content Update Design

**Date:** 2026-05-31  
**Status:** Approved  
**Project:** rohimdev-next

## Goal

Update `content/projects/neuro-health.mdx` to reflect the latest app features from `/Users/a./hypertensi-app` repository, while keeping existing Cloudinary gallery screenshots.

## Decisions

| Choice | Decision |
|--------|----------|
| Gallery screenshots | **Keep existing** Cloudinary URLs (beranda, diet, aktivitas, AI chat) |
| Body text | **Replace entirely** with new narrative covering all latest features |
| Tina schema changes | **None** — existing fields sufficient |
| Tech stack update | **Add** Mapbox, Kotlin FGS, Reanimated, EAS, FCM to techStack |
| New features to document | Exercise sessions, GPS route recording, AI gatekeeper, step sync guard, notification scheduler, pre/post-test quiz, app tour, health score algorithm |

## Content Changes

### Frontmatter updates

- `detail.overview.bullets` — add exercise sessions, GPS routes, notification scheduler
- `detail.challenge.bullets` — add native module safety, GPS jitter handling, monotonic step sync
- `detail.solution.bullets` — add Mapbox, Kotlin FGS, Reanimated, EAS, FCM
- `detail.features` — add exercise sessions, notification scheduler, app tour/onboarding
- `detail.techStack` — add Mapbox, Kotlin, Reanimated, EAS, FCM to appropriate categories
- `detail.metrics` — update to reflect 7 modules, 1500mg sodium cap, 3 workspace packages
- `detail.infrastructure` — add EAS Build, OTA updates, CI/CD
- `detail.process.outputs` — add native module, Mapbox integration, exercise session architecture
- `body` — replace with new narrative covering all features

### Body narrative structure

1. Opening — research context + target users
2. Dashboard + health score algorithm
3. Diet tracking + WHO sodium guidance
4. Activity + pedometer + weekly charts
5. Exercise sessions + GPS route recording
6. Education + pre/post-test quizzes
7. AI Coach + gatekeeper + rate limiting
8. Notifications + scheduler + Kotlin FGS
9. Onboarding + app tour
10. Architecture + monorepo + testing + CI/CD
11. Closing — private research context

## Success criteria

- [ ] All new features from hypertensi-app repo documented in structured fields
- [ ] Body text replaced with comprehensive narrative
- [ ] Gallery screenshots preserved
- [ ] Tech stack reflects actual dependencies
- [ ] Metrics accurate to current implementation
- [ ] No Tina schema changes required
