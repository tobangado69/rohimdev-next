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

/** Scale to container width first; only shrink width if height exceeds maxHeight. */
export function fitWidthFirstDimensions(
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
  const aspect = naturalWidth / naturalHeight;

  let width = maxWidth;
  let height = width / aspect;

  if (height > maxHeight) {
    height = maxHeight;
    width = height * aspect;
  }

  if (!allowUpscale) {
    if (width > naturalWidth || height > naturalHeight) {
      width = naturalWidth;
      height = naturalHeight;
      if (width > maxWidth) {
        width = maxWidth;
        height = width / aspect;
      }
      if (height > maxHeight) {
        height = maxHeight;
        width = height * aspect;
      }
    }
  }

  return {
    width: Math.max(1, Math.round(width)),
    height: Math.max(1, Math.round(height)),
    orientation,
  };
}
