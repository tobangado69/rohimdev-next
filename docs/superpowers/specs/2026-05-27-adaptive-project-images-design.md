# Adaptive Project Images Design

**Date:** 2026-05-27  
**Status:** Implemented  
**Project:** rohimdev-next

## Goal

Display portfolio project images (cover, hero, gallery) at their natural aspect ratio **without cropping**, while eliminating both:

1. **In-frame letterboxing** — a wide bordered box with a small image centered inside (e.g. Gudang Distribusi hero screenshot).
2. **Full-width row side margins** — portrait or narrow assets sitting in a `w-full` row with large empty bands left and right.

Editors upload mixed portrait, landscape, and square screenshots via TinaCMS. The UI must adapt per image, not force one global aspect ratio.

## Decisions (from brainstorming)

| Choice | Decision |
|--------|----------|
| Crop on showcase images | **No** (`object-cover` not used on primary showcase) |
| Empty space tolerance | **No** intentional letterboxing or full-width side gutters |
| Strategy | **Orientation-based layout** (Approach A), not ambient blur (B) |
| Tina per-project override | **Phase 2 optional** — `auto` default in phase 1 |
| Phase 1 surfaces | Project detail hero, `/work` cards, project gallery; align `featured-work` carousel |

## Problem Statement

`AdaptiveProjectImage` currently:

- Uses `fillWidth: true` on `hero` — scales to container width, then shrinks width when `max-height` caps apply → **horizontal letterboxing inside the visual frame**.
- Uses a full-width wrapper even when the fitted image is narrower than the viewport → **page-level side margins** beside a small centered image (e.g. portrait mockups).

These behaviors conflict with the product goal: show each screenshot faithfully while the layout feels intentional, not like broken sizing.

## Non-Goals

- Forcing all heroes to the same height or aspect ratio.
- `object-cover` / cropping primary showcase images.
- Blur-backdrop or dominant-color side fill (deferred; not selected).
- Requiring editors to pre-crop assets to 16:10.
- New Cloudinary transforms or image pipeline changes.

## Architecture

### Core principle: frame equals image bounds

The visible bordered/shadowed region must wrap the rendered image dimensions. No outer `w-full` box that is wider than the image.

### Sizing mode: `intrinsic`

Replace width-first `fillWidth` hero logic with:

```
Given naturalWidth, naturalHeight, maxWidth (container), maxHeight (variant cap):
  scale = min(maxWidth / naturalWidth, maxHeight / naturalHeight, 1)  // no upscale beyond natural unless explicitly allowed later
  displayWidth = naturalWidth * scale
  displayHeight = naturalHeight * scale
```

Caps (initial values, tunable in implementation):

| Variant | maxWidth | maxHeight |
|---------|----------|-----------|
| `hero` | parent content width | `min(85vh, 900px)` portrait; `min(78vh, 820px)` landscape |
| `card` | card inner width | `352px` landscape; `min(70vh, 480px)` portrait |
| `gallery` | column width | `min(82vh, 520px)` portrait; `480px` landscape |

**No upscale** in phase 1 (keeps crisp screenshots; editors should upload adequate resolution).

### Orientation classification

From natural dimensions after load:

| Class | Rule |
|-------|------|
| `portrait` | height / width > 1.15 |
| `landscape` | width / height > 1.15 |
| `square` | otherwise |

Threshold avoids flicker on nearly-square UI screenshots.

### Layout by surface

#### Project detail hero (`ProjectHero`)

| Orientation | Layout (md+) | Mobile |
|-------------|--------------|--------|
| `landscape` | Stack: title block → image block (image `w-full` up to max bounds, intrinsic height) | Same stack |
| `portrait` | **Two columns**: copy left (~50%), image right — image column sized to fitted width, vertically aligned (top or center — **center** recommended) | Stack: title → image (image `max-w-[min(100%,420px)]` centered or start-aligned) |
| `square` | Centered block `max-w-3xl mx-auto` | Centered, full width cap |

Image sits **outside** the `max-w-4xl` title-only constraint when landscape (image can use full article width). Portrait split grid spans article width (`max-w-5xl` or existing page container).

CTAs remain below the hero block (full width), unchanged.

#### Work listing card (`work-content.tsx`)

- Card link wrapper stays; inner image uses intrinsic sizing.
- Card **does not** force `aspect-[16/10]` placeholder when image exists.
- Optional: `min-h` skeleton only while loading.
- Grid cards may have uneven row heights — **accepted** per product decision.

#### Project gallery (`project-gallery.tsx`)

- Each item: intrinsic frame, consistent gap.
- Multi-column grid on md+; single column on mobile.

#### Featured work carousel (`featured-work.tsx`)

- Replace `object-cover` with `AdaptiveProjectImage` `variant="card"` or a slim `variant="carousel"` if card caps need tuning.
- Preserve carousel interaction; only image fit changes.

### Component responsibilities

| Unit | Responsibility |
|------|----------------|
| `AdaptiveProjectImage` | Probe natural size, compute intrinsic display dimensions, expose `orientation` via render prop or callback |
| `useProjectImageFit` (optional extract) | Pure `fitIntrinsic()` + orientation helper — testable |
| `ProjectHero` | Chooses layout shell from orientation |
| `work-content` / `project-gallery` | Pass variant + frame classes only |

### Data flow

```
Tina images[] / detail.hero.primaryImage
  → getProjects() / ProjectContent.image
  → AdaptiveProjectImage(src)
  → hidden probe OR onLoadingComplete → natural dimensions
  → fitIntrinsic + orientation
  → ProjectHero layout branch OR card/gallery intrinsic render
```

No schema changes required for phase 1.

## Phase 2 (optional): Tina override

Add to `detail.hero`:

```yaml
imageLayout: auto | landscape-wide | portrait-split | square-centered
```

When not `auto`, override detected orientation for hero layout only. Default `auto`.

## Error handling

- Missing image: keep existing empty placeholder (`aspect-[16/10]` neutral block on cards only).
- Load failure: show neutral placeholder same size as skeleton; log in dev only.
- Zero dimensions: skip fit until valid; skeleton visible.

## Accessibility

- Meaningful `alt` from project title (existing).
- Decorative probe image remains `aria-hidden`.
- Layout shift: reserve skeleton `min-h` from variant defaults to reduce CLS; intrinsic swap when loaded.

## Testing / verification

Manual checklist on dev:

1. **Gudang Distribusi Store** (`/work/gudang-distribusi-store`) — wide landscape hero fills content width without white side bands inside border.
2. **Mobile-FB** (`/work/mobile-fb`) — portrait mockup large in split column (md+), no full-width side gutters.
3. **Grammedia / Chatapp** — mixed ratios on `/work` cards; no inner letterbox.
4. Resize viewport 375px, 768px, 1280px — portrait stack on mobile, split on desktop.
5. Featured carousel — no cropped-off UI chrome unless image itself is tight crop.

## Success criteria

- [ ] No showcase image uses `object-cover`.
- [ ] Hero bordered frame width equals rendered image width (no inner horizontal empty band).
- [ ] Portrait heroes on desktop use split layout; no full-width narrow image centered in empty row.
- [ ] Landscape heroes use available content width up to max-height cap without width-shrink letterboxing.
- [ ] `/work` cards reflect true aspect ratio (variable card image heights OK).

## Files to touch (implementation reference)

- `src/components/ui/adaptive-project-image.tsx` — intrinsic fit, remove `fillWidth`, orientation export
- `src/components/work/project-detail/project-hero.tsx` — layout branches
- `src/components/work/work-content.tsx` — card integration
- `src/components/work/project-detail/project-gallery.tsx` — gallery variant
- `src/components/home/featured-work.tsx` — align with adaptive image
- `docs/superpowers/plans/2026-05-27-adaptive-project-images.md` — implementation plan (next step)

## References

- Current component: `src/components/ui/adaptive-project-image.tsx`
- Tina project images: `tina/config.ts` → `images`, `detail.hero.primaryImage`
- Prior related spec: `docs/superpowers/specs/2026-05-27-project-detail-design.md`
