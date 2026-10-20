import { CLINIC } from "@/constants/site";
import { IMAGES } from "@/constants/images";
import { cn } from "@/lib/utils";

interface EarLogoProps {
  /** Rendered height in pixels. Width follows the logo’s portrait ratio. */
  size?: number;
  className?: string;
  /**
   * Pass "white" (or an inverse token) on dark backgrounds.
   * The mark is inverted. No white box is needed.
   */
  color?: string;
  /** Circular crop for small badges on light photos. */
  badge?: boolean;
}

/** Cropped mark is slightly taller than it is wide (535 × 635). */
const LOGO_RATIO = 535 / 635;

/**
 * Clinic brand mark from /public/brand/logo.svg.
 * Default is the coloured SVG. Use color="white" on dark sections.
 */
export default function EarLogo({
  size = 40,
  className,
  color,
  badge = false,
}: EarLogoProps) {
  const width = Math.round(size * LOGO_RATIO);
  const invertToWhite = shouldRenderWhite(color);
  const filter = invertToWhite ? "brightness(0) invert(1)" : undefined;

  const image = (
    // SVG from /public. next/image does not optimize vectors.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={IMAGES.logo}
      alt={`${CLINIC.name} logo`}
      width={width}
      height={size}
      className={cn("object-contain", className)}
      style={{ width, height: size, filter }}
    />
  );

  if (!badge) return image;

  return (
    <div
      className={cn("flex items-center justify-center rounded-full shrink-0 overflow-hidden bg-white", className)}
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMAGES.logo}
        alt={`${CLINIC.name} logo`}
        width={size}
        height={size}
        className="object-contain p-[12%]"
        style={{ width: size, height: size }}
      />
    </div>
  );
}

/** True when the caller asked for a white mark on a dark background. */
function shouldRenderWhite(color?: string) {
  if (!color) return false;
  const value = color.toLowerCase();
  return (
    value === "white" ||
    value === "inverse" ||
    value.includes("text-inverse") ||
    value.includes("on-dark") ||
    value === "#fff" ||
    value === "#ffffff" ||
    value.includes("255,255,255")
  );
}
