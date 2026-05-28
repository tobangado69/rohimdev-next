# Adaptive Project Images Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show project images at natural aspect ratio without crop, eliminating in-frame letterboxing and full-width side gutters via intrinsic sizing and orientation-based hero layouts.

**Architecture:** Pure fit/orientation helpers in `src/lib/project-image-fit.ts`; `AdaptiveProjectImage` computes display size and reports orientation; `ProjectHero` (client shell) branches layout for portrait/landscape/square; cards/gallery/featured use intrinsic `w-fit` frames.

**Tech Stack:** Next.js App Router, `next/image`, React 19 client components, TypeScript, Tailwind CSS v4.

**Spec:** `docs/superpowers/specs/2026-05-27-adaptive-project-images-design.md`

---

## Constraints

- No `object-cover` on showcase images (hero, card, gallery, featured).
- No test runner in repo — verify with `pnpm exec tsc --noEmit` and manual browser checks.
- Do not change Tina schema in phase 1.
- `featured-work.tsx` carousel uses fixed `h-[500px]` shell — image area uses contain/intrinsic inside inner frame; do not crop.

## Target file map

| File | Action |
|------|--------|
| `src/lib/project-image-fit.ts` | **Create** — `getImageOrientation`, `fitIntrinsicDimensions` |
| `src/components/ui/adaptive-project-image.tsx` | **Modify** — intrinsic fit, `w-fit` wrapper, `onFit` callback |
| `src/components/work/project-detail/project-hero.tsx` | **Modify** — client layout shell, orientation branches |
| `src/components/work/work-content.tsx` | **Modify** — center intrinsic image in card |
| `src/components/work/project-detail/project-gallery.tsx` | **Modify** — `w-fit` figure, no full-width empty figure |
| `src/components/home/featured-work.tsx` | **Modify** — `AdaptiveProjectImage` instead of `fill` + `object-cover` |
| `docs/superpowers/specs/2026-05-27-adaptive-project-images-design.md` | **Modify** — status → Implemented (after Task 6) |

---

## Task 1: Pure fit helpers

**Files:**
- Create: `src/lib/project-image-fit.ts`

- [ ] **Step 1: Create `src/lib/project-image-fit.ts`**

```typescript
export type ImageOrientation = "portrait" | "landscape" | "square";

const ORIENTATION_RATIO_THRESHOLD = 1.15;

export function getImageOrientation(
  width: number,
  height: number,
): ImageOrientation {
  if (width <= 0 || height <= 0) return "square";
  const ratio = width / height;
  if (ratio > ORIENTATION_RATIO_THRESHOLD) return "landscape";
  if (ratio < 1 / ORIENTATION_RATIO_THRESHOLD) return "portrait";
  return "square";
}

export type FitIntrinsicInput = {
  naturalWidth: number;
  naturalHeight: number;
  maxWidth: number;
  maxHeight: number;
  allowUpscale?: boolean;
};

export type FitIntrinsicResult = {
  width: number;
  height: number;
  orientation: ImageOrientation;
};

export function fitIntrinsicDimensions(
  input: FitIntrinsicInput,
): FitIntrinsicResult {
  const {
    naturalWidth,
    naturalHeight,
    maxWidth,
    maxHeight,
    allowUpscale = false,
  } = input;

  const orientation = getImageOrientation(naturalWidth, naturalHeight);

  let scale = Math.min(
    maxWidth / naturalWidth,
    maxHeight / naturalHeight,
  );

  if (!allowUpscale && scale > 1) {
    scale = 1;
  }

  return {
    width: Math.max(1, Math.round(naturalWidth * scale)),
    height: Math.max(1, Math.round(naturalHeight * scale)),
    orientation,
  };
}
```

- [ ] **Step 2: Typecheck**

Run:

```bash
cd /Users/a./rohimdev-next && pnpm exec tsc --noEmit 2>&1 | grep project-image-fit || true
```

Expected: no errors mentioning `project-image-fit.ts`.

- [ ] **Step 3: Commit**

```bash
git add src/lib/project-image-fit.ts
git commit -m "feat: add intrinsic project image fit helpers"
```

---

## Task 2: Refactor `AdaptiveProjectImage`

**Files:**
- Modify: `src/components/ui/adaptive-project-image.tsx`

- [ ] **Step 1: Replace fit logic — import helpers, remove `fillWidth`**

At top of file:

```typescript
import {
  fitIntrinsicDimensions,
  type ImageOrientation,
} from "@/lib/project-image-fit";
```

Remove from `variantConfig`: `fillWidth`, `portraitMaxWidthCapPx` (use max caps only).

Update config to:

```typescript
const variantConfig: Record<
  AdaptiveProjectImageVariant,
  {
    landscapeMaxHeightVh: number;
    landscapeMaxHeightPx: number;
    portraitMaxHeightVh: number;
    portraitMaxHeightPx: number;
    rounded: string;
    defaultSizes: string;
    skeletonMinHeight: string;
  }
> = {
  card: {
    landscapeMaxHeightVh: 0,
    landscapeMaxHeightPx: 352,
    portraitMaxHeightVh: 0.7,
    portraitMaxHeightPx: 480,
    rounded: "rounded-lg",
    defaultSizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px",
    skeletonMinHeight: "min-h-[12rem]",
  },
  hero: {
    landscapeMaxHeightVh: 0.78,
    landscapeMaxHeightPx: 820,
    portraitMaxHeightVh: 0.85,
    portraitMaxHeightPx: 900,
    rounded: "rounded-2xl",
    defaultSizes: "(max-width: 768px) 100vw, 1200px",
    skeletonMinHeight: "min-h-[16rem]",
  },
  gallery: {
    landscapeMaxHeightVh: 0,
    landscapeMaxHeightPx: 480,
    portraitMaxHeightVh: 0.82,
    portraitMaxHeightPx: 520,
    rounded: "rounded-none",
    defaultSizes: "(max-width: 768px) 100vw, 600px",
    skeletonMinHeight: "min-h-[10rem]",
  },
};
```

Replace `getMaxHeightPx` to use `portraitMaxHeightVh` / `portraitMaxHeightPx` for portrait, landscape caps for landscape.

- [ ] **Step 2: Add `onFit` callback prop**

```typescript
export type ProjectImageFitState = {
  width: number;
  height: number;
  orientation: ImageOrientation;
};

type AdaptiveProjectImageProps = {
  // ...existing
  onFit?: (fit: ProjectImageFitState) => void;
  align?: "start" | "center";
};
```

In `useEffect` after computing display, call:

```typescript
onFit?.({
  width: result.width,
  height: result.height,
  orientation: result.orientation,
});
```

Use `fitIntrinsicDimensions` inside `update()` instead of `fitDimensions`.

- [ ] **Step 3: Wrapper uses `w-fit max-w-full`, not forced full width**

Loading skeleton:

```tsx
<div ref={wrapperRef} className={`w-full flex ${align === "center" ? "justify-center" : "justify-start"} ${className}`}>
  <div className={`${config.skeletonMinHeight} w-full max-w-full bg-neutral-100 animate-pulse ${config.rounded}`} aria-hidden />
  ...
</div>
```

Loaded state:

```tsx
<div ref={wrapperRef} className={`w-full flex ${align === "center" ? "justify-center" : "justify-start"} ${className}`}>
  <div className="w-fit max-w-full">
    <Image ... className={`block ${config.rounded} ...`} style={{ width: display.width, height: display.height }} />
  </div>
</div>
```

Delete old `fitDimensions` function entirely.

- [ ] **Step 4: Typecheck**

```bash
pnpm exec tsc --noEmit 2>&1 | grep adaptive-project-image || true
```

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/adaptive-project-image.tsx src/lib/project-image-fit.ts
git commit -m "feat: intrinsic sizing and orientation callback for project images"
```

---

## Task 3: Orientation-based `ProjectHero`

**Files:**
- Modify: `src/components/work/project-detail/project-hero.tsx`

- [ ] **Step 1: Add `"use client"` and orientation state**

```typescript
"use client";

import { useState } from "react";
import { AdaptiveProjectImage, type ProjectImageFitState } from "@/components/ui/adaptive-project-image";
import type { ImageOrientation } from "@/lib/project-image-fit";
```

```typescript
const [orientation, setOrientation] = useState<ImageOrientation>("landscape");

const handleFit = (fit: ProjectImageFitState) => {
  setOrientation(fit.orientation);
};
```

- [ ] **Step 2: Extract copy block component (inline in same file)**

```typescript
function HeroCopy({ project, hero }: { project: ProjectContent; hero: ProjectContent["detail"]["hero"] }) {
  return (
    <div className="space-y-4 max-w-4xl">
      {hero.eyebrow && (
        <p className="text-sm uppercase tracking-wide text-neutral-400">{hero.eyebrow}</p>
      )}
      <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-900 leading-[0.95]">
        {hero.title || project.title}
      </h1>
      <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl">
        {hero.subtitle || project.headline}
      </p>
    </div>
  );
}
```

- [ ] **Step 3: Hero image element (reused)**

```typescript
const heroImageEl = heroImage ? (
  <AdaptiveProjectImage
    src={heroImage}
    alt={project.title}
    variant="hero"
    priority
    onFit={handleFit}
    align={orientation === "square" ? "center" : "start"}
    frameClassName="border border-neutral-200 shadow-sm"
  />
) : null;
```

- [ ] **Step 4: Layout branches**

```tsx
<header className="space-y-10 animate-clip-in">
  {orientation === "portrait" ? (
    <div className="grid gap-10 md:grid-cols-2 md:gap-12 md:items-center max-w-5xl">
      <HeroCopy project={project} hero={hero} />
      {heroImageEl && <div className="flex justify-center md:justify-end">{heroImageEl}</div>}
    </div>
  ) : orientation === "square" ? (
    <div className="space-y-10">
      <HeroCopy project={project} hero={hero} />
      {heroImageEl && <div className="max-w-3xl mx-auto w-full">{heroImageEl}</div>}
    </div>
  ) : (
    <div className="space-y-10">
      <HeroCopy project={project} hero={hero} />
      {heroImageEl}
    </div>
  )}

  {/* CTAs unchanged below */}
</header>
```

Default `landscape` until `onFit` fires — matches stacked layout (no flash of 2-col).

- [ ] **Step 5: Typecheck + commit**

```bash
git add src/components/work/project-detail/project-hero.tsx
git commit -m "feat: orientation-based project hero layout"
```

---

## Task 4: Work cards and gallery frames

**Files:**
- Modify: `src/components/work/work-content.tsx`
- Modify: `src/components/work/project-detail/project-gallery.tsx`

- [ ] **Step 1: `work-content.tsx` — center intrinsic image**

Inside the `<Link>` where `AdaptiveProjectImage` is used, wrap:

```tsx
<div className="flex w-full justify-center">
  <AdaptiveProjectImage
    src={project.image}
    alt={project.title}
    variant="card"
    hoverScale
    align="center"
  />
</div>
```

Keep placeholder `aspect-[16/10]` only when **no** image.

- [ ] **Step 2: `project-gallery.tsx` — figure hugs image**

Change `<figure>` from full bleed to:

```tsx
<figure className="inline-flex w-fit max-w-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
  <AdaptiveProjectImage
    src={item.image}
    alt={item.alt}
    variant="gallery"
    align="center"
    className="w-full"
  />
  ...
</figure>
```

Grid cell: add `justify-items-start` on grid container:

```tsx
<div className="grid gap-6 md:grid-cols-2 justify-items-start">
```

- [ ] **Step 3: Commit**

```bash
git add src/components/work/work-content.tsx src/components/work/project-detail/project-gallery.tsx
git commit -m "feat: intrinsic frames on work cards and project gallery"
```

---

## Task 5: Featured work carousel

**Files:**
- Modify: `src/components/home/featured-work.tsx`

- [ ] **Step 1: Remove `next/image` fill + object-cover**

Replace inner mockup block (lines ~77-87):

```tsx
<div className="relative flex h-full w-full items-center justify-center p-6">
  {card.image ? (
    <AdaptiveProjectImage
      src={card.image}
      alt={card.title}
      variant="card"
      align="center"
      className="max-h-full"
      frameClassName="rounded-lg border border-neutral-100 shadow-2xl"
    />
  ) : null}
</div>
```

Add import:

```typescript
import { AdaptiveProjectImage } from "@/components/ui/adaptive-project-image";
```

Remove unused `import Image from "next/image"` if no longer used.

Remove nested `w-[80%] h-[70%]` white box if it causes double framing — use single `AdaptiveProjectImage` with `frameClassName` only.

- [ ] **Step 2: Typecheck + commit**

```bash
git add src/components/home/featured-work.tsx
git commit -m "feat: use adaptive project images in featured carousel"
```

---

## Task 6: Verification and spec status

**Files:**
- Modify: `docs/superpowers/specs/2026-05-27-adaptive-project-images-design.md` (status line only)

- [ ] **Step 1: Run typecheck**

```bash
pnpm exec tsc --noEmit
```

Note: pre-existing `tina/config.ts` errors may remain; ensure no new errors under `src/components` / `src/lib/project-image-fit.ts`.

- [ ] **Step 2: Manual browser checklist**

With `pnpm dev` running:

| URL | Check |
|-----|--------|
| `/work/gudang-distribusi-store` | Landscape hero fills width; border hugs image; no white side bands inside frame |
| `/work/mobile-fb` | md+: 2-column hero; portrait image large on right; no full-width side gutters |
| `/work` | Cards show true aspect ratio; no inner letterbox |
| `/` | Featured carousel images not cropped (`object-cover` gone) |
| 375px / 1280px | Portrait hero stacks on mobile; split on desktop |

- [ ] **Step 3: Update spec status**

In design spec front matter:

```markdown
**Status:** Implemented
```

- [ ] **Step 4: Commit docs**

```bash
git add docs/superpowers/specs/2026-05-27-adaptive-project-images-design.md
git commit -m "docs: mark adaptive project images spec as implemented"
```

---

## Plan self-review (spec coverage)

| Spec requirement | Task |
|------------------|------|
| Intrinsic sizing, no upscale | Task 1, 2 |
| Remove fillWidth letterboxing | Task 2 |
| Orientation classification | Task 1, 2 (`onFit`) |
| Hero portrait 2-col | Task 3 |
| Hero landscape stack | Task 3 |
| Hero square centered | Task 3 |
| Work cards intrinsic | Task 4 |
| Gallery intrinsic | Task 4 |
| Featured no object-cover | Task 5 |
| Manual verification | Task 6 |
| Tina phase 2 | Out of scope |

No placeholders remain in task steps.
