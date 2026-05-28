"use client";

import {
  fitIntrinsicDimensions,
  fitWidthFirstDimensions,
  type ImageOrientation,
} from "@/lib/project-image-fit";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
} from "react";

type Dimensions = { width: number; height: number };

export type AdaptiveProjectImageVariant = "card" | "hero" | "gallery";

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
    fallbackMaxWidthPx: number;
    portraitTargetWidthPx?: number;
    portraitAllowUpscale?: boolean;
    landscapeFillWidth?: boolean;
    landscapeAllowUpscale?: boolean;
  }
> = {
  card: {
    landscapeMaxHeightVh: 0,
    landscapeMaxHeightPx: 560,
    landscapeFillWidth: true,
    landscapeAllowUpscale: true,
    portraitMaxHeightVh: 0.75,
    portraitMaxHeightPx: 520,
    portraitTargetWidthPx: 300,
    portraitAllowUpscale: true,
    rounded: "rounded-lg",
    defaultSizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px",
    skeletonMinHeight: "min-h-[12rem]",
    fallbackMaxWidthPx: 800,
  },
  hero: {
    landscapeMaxHeightVh: 0.78,
    landscapeMaxHeightPx: 820,
    portraitMaxHeightVh: 0.85,
    portraitMaxHeightPx: 900,
    rounded: "rounded-2xl",
    defaultSizes: "(max-width: 768px) 100vw, 1200px",
    skeletonMinHeight: "min-h-[16rem]",
    fallbackMaxWidthPx: 1200,
  },
  gallery: {
    landscapeMaxHeightVh: 0,
    landscapeMaxHeightPx: 480,
    portraitMaxHeightVh: 0.82,
    portraitMaxHeightPx: 520,
    rounded: "rounded-none",
    defaultSizes: "(max-width: 768px) 100vw, 600px",
    skeletonMinHeight: "min-h-[10rem]",
    fallbackMaxWidthPx: 560,
  },
};

function getMaxHeightPx(
  variant: AdaptiveProjectImageVariant,
  isPortrait: boolean,
): number {
  const config = variantConfig[variant];

  if (typeof window === "undefined") {
    return isPortrait ? config.portraitMaxHeightPx : config.landscapeMaxHeightPx;
  }

  if (isPortrait) {
    if (config.portraitMaxHeightVh > 0) {
      return Math.min(
        window.innerHeight * config.portraitMaxHeightVh,
        config.portraitMaxHeightPx,
      );
    }
    return config.portraitMaxHeightPx;
  }

  if (config.landscapeMaxHeightVh > 0) {
    return Math.min(
      window.innerHeight * config.landscapeMaxHeightVh,
      config.landscapeMaxHeightPx,
    );
  }

  return config.landscapeMaxHeightPx;
}

export type ProjectImageFitState = {
  width: number;
  height: number;
  orientation: ImageOrientation;
};

type AdaptiveProjectImageProps = {
  src: string;
  alt: string;
  variant?: AdaptiveProjectImageVariant;
  priority?: boolean;
  sizes?: string;
  className?: string;
  frameClassName?: string;
  hoverScale?: boolean;
  align?: "start" | "center";
  onFit?: (fit: ProjectImageFitState) => void;
};

export function AdaptiveProjectImage({
  src,
  alt,
  variant = "card",
  priority = false,
  sizes,
  className = "",
  frameClassName = "",
  hoverScale = false,
  align = "start",
  onFit,
}: AdaptiveProjectImageProps) {
  const config = variantConfig[variant];
  const wrapperRef = useRef<HTMLDivElement>(null);
  const onFitRef = useRef(onFit);
  onFitRef.current = onFit;
  const [natural, setNatural] = useState<Dimensions | null>(null);
  const [display, setDisplay] = useState<ProjectImageFitState | null>(null);

  const captureNaturalSize = useCallback((img: HTMLImageElement) => {
    if (img.naturalWidth > 0 && img.naturalHeight > 0) {
      setNatural({ width: img.naturalWidth, height: img.naturalHeight });
    }
  }, []);

  const handleImageLoad = useCallback(
    (event: SyntheticEvent<HTMLImageElement>) => {
      captureNaturalSize(event.currentTarget);
    },
    [captureNaturalSize],
  );

  useEffect(() => {
    if (!natural || !wrapperRef.current) return;

    const update = () => {
      const measured = wrapperRef.current?.clientWidth ?? 0;
      const maxWidth =
        measured >= 48
          ? measured
          : Math.min(natural.width, config.fallbackMaxWidthPx);
      const isPortrait = natural.height > natural.width;
      const maxHeight = getMaxHeightPx(variant, isPortrait);

      let fitMaxWidth = maxWidth;
      let allowUpscale = false;

      if (variant === "card" && !isPortrait && config.landscapeFillWidth) {
        fitMaxWidth = maxWidth;
        allowUpscale = config.landscapeAllowUpscale ?? false;
      } else if (
        variant === "card" &&
        isPortrait &&
        config.portraitTargetWidthPx
      ) {
        fitMaxWidth = Math.min(
          config.portraitTargetWidthPx,
          Math.round(maxWidth * 0.88),
        );
        allowUpscale = config.portraitAllowUpscale ?? false;
      }

      const useWidthFirst =
        variant === "card" && !isPortrait && config.landscapeFillWidth;

      const result = useWidthFirst
        ? fitWidthFirstDimensions({
            naturalWidth: natural.width,
            naturalHeight: natural.height,
            maxWidth: fitMaxWidth,
            maxHeight,
            allowUpscale,
          })
        : fitIntrinsicDimensions({
            naturalWidth: natural.width,
            naturalHeight: natural.height,
            maxWidth: fitMaxWidth,
            maxHeight,
            allowUpscale,
          });

      setDisplay(result);
      onFitRef.current?.(result);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(wrapperRef.current);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [natural, variant, config]);

  const alignClass =
    align === "center" ? "justify-center" : "justify-start";

  if (!display) {
    return (
      <div
        ref={wrapperRef}
        className={`relative flex w-full ${alignClass} ${className}`}
      >
        <div
          className={`w-full max-w-full ${config.skeletonMinHeight} animate-pulse bg-neutral-100 ${config.rounded}`}
          aria-hidden
        />
        <Image
          src={src}
          alt=""
          width={16}
          height={10}
          priority={priority}
          sizes={sizes ?? config.defaultSizes}
          onLoad={handleImageLoad}
          onLoadingComplete={captureNaturalSize}
          className="pointer-events-none absolute h-0 w-0 opacity-0"
          aria-hidden
        />
      </div>
    );
  }

  const isPortraitCard =
    variant === "card" && display.orientation === "portrait";
  const isLandscapeCard =
    variant === "card" && display.orientation === "landscape";

  return (
    <div
      ref={wrapperRef}
      className={`flex w-full ${alignClass} ${className}`}
    >
      <div
        className={`${
          isLandscapeCard ? "w-full" : "w-fit max-w-full"
        } overflow-hidden ${config.rounded} ${
          isPortraitCard ? "border border-neutral-200/80 shadow-sm" : ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          width={display.width}
          height={display.height}
          priority={priority}
          sizes={sizes ?? config.defaultSizes}
          onLoad={handleImageLoad}
          onLoadingComplete={captureNaturalSize}
          className={`block ${isLandscapeCard ? "h-auto w-full" : ""} ${config.rounded} ${frameClassName} ${
            hoverScale
              ? "transition-transform duration-500 group-hover:scale-[1.01]"
              : ""
          }`}
          style={
            isLandscapeCard
              ? { width: "100%", height: "auto", aspectRatio: `${display.width} / ${display.height}` }
              : { width: display.width, height: display.height }
          }
        />
      </div>
    </div>
  );
}
