import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageFrameProps {
  src: string;
  alt: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[3/4]" */
  aspect?: string;
  className?: string;
  priority?: boolean;
  rounded?: "none" | "md" | "lg" | "xl" | "full";
  objectFit?: "cover" | "contain";
}

const roundedMap = {
  none: "",
  md:   "rounded-[var(--radius-md)]",
  lg:   "rounded-[var(--radius-lg)]",
  xl:   "rounded-[var(--radius-xl)]",
  full: "rounded-full",
};

/**
 * Centralised image component — all Next.js <Image> calls route through here
 * so responsive behaviour, rounded corners, and fallback styling stay uniform.
 * If the src is a placeholder, the frame renders a branded gradient instead.
 */
export default function ImageFrame({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className,
  priority = false,
  rounded = "lg",
  objectFit = "cover",
}: ImageFrameProps) {
  const isPlaceholder = !src || src.startsWith("/images/");

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        aspect,
        roundedMap[rounded],
        className
      )}
    >
      {isPlaceholder ? (
        /* Branded gradient placeholder shown until real images are added */
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, var(--color-surface-2) 0%, var(--color-border) 100%)",
          }}
        >
          <span
            className="font-semibold tracking-wide"
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
            }}
          >
            {alt}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn(
            "transition-transform duration-500 ease-out group-hover:scale-105",
            objectFit === "cover" ? "object-cover" : "object-contain"
          )}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
    </div>
  );
}
