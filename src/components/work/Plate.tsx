import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface PlateProps {
  /** Base name of the generated plate, e.g. "urbanthreads_img". */
  name: string;
  alt: string;
  /** The source ratio, so a screenshot is never cropped or squashed. */
  ratio: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/**
 * Screenshots carry the argument on this site, so they get real treatment:
 * WebP with a srcset, a PNG fallback, an explicit box so nothing reflows while
 * they load and lazy loading for everything below the first plate.
 */
export function Plate({ name, alt, ratio, sizes, priority = false, className }: PlateProps) {
  return (
    <picture>
      <source
        type="image/webp"
        sizes={sizes}
        srcSet={`/plates/${name}-760.webp 760w, /plates/${name}-full.webp 1800w`}
      />
      <img
        src={`/plates/${name}.png`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        style={{ aspectRatio: ratio } as CSSProperties}
        className={cn("h-full w-full bg-paper-deep object-cover object-top", className)}
      />
    </picture>
  );
}
