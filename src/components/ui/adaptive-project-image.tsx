"use client";

import {
  fitIntrinsicDimensions,
  type ImageOrientation,
} from "@/lib/project-image-fit";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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

  const onLoadingComplete = useCallback((img: HTMLImageElement) => {
    if (img.naturalWidth > 0 && img.naturalHeight > 0) {
      setNatural({ width: img.naturalWidth, height: img.naturalHeight });
    }
  }, []);

  useEffect(() => {
    if (!natural || !wrapperRef.current) return;

    const update = () => {
      const maxWidth = wrapperRef.current?.clientWidth ?? natural.width;
      const isPortrait = natural.height > natural.width;
      const maxHeight = getMaxHeightPx(variant, isPortrait);

      const result = fitIntrinsicDimensions({
        naturalWidth: natural.width,
        naturalHeight: natural.height,
        maxWidth,
        maxHeight,
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
  }, [natural, variant]);

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
          onLoadingComplete={onLoadingComplete}
          className="pointer-events-none absolute h-0 w-0 opacity-0"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className={`flex w-full ${alignClass} ${className}`}
    >
      <div className="w-fit max-w-full">
        <Image
          src={src}
          alt={alt}
          width={display.width}
          height={display.height}
          priority={priority}
          sizes={sizes ?? config.defaultSizes}
          className={`block ${config.rounded} ${frameClassName} ${
            hoverScale
              ? "transition-transform duration-500 group-hover:scale-[1.01]"
              : ""
          }`}
          style={{ width: display.width, height: display.height }}
        />
      </div>
    </div>
  );
}
