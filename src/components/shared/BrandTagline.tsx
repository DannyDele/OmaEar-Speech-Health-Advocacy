import { CLINIC } from "@/constants/site";
import { cn } from "@/lib/utils";

type BrandTaglineProps = {
  className?: string;
  /** Slightly larger for hero lockups. */
  size?: "sm" | "md";
};

/**
 * Header/hero brand line. The ampersand is set in Lora italic with the
 * clinic accent so it feels warmer than a plain "&" in Manrope.
 */
export default function BrandTagline({ className, size = "sm" }: BrandTaglineProps) {
  const parts = CLINIC.tagline.split("&");
  const before = (parts[0] ?? "").trimEnd();
  const after = (parts[1] ?? "").trimStart();

  return (
    <span
      className={cn(
        "font-medium tracking-wide",
        size === "sm" ? "text-[0.625rem] sm:text-xs" : undefined,
        className,
      )}
      style={
        size === "md"
          ? { fontSize: "var(--text-xl)", color: "var(--color-accent)" }
          : { color: "var(--color-text-muted)" }
      }
    >
      {before}
      <span
        className="mx-[0.12em] font-serif italic font-semibold"
        style={{
          color: size === "md" ? "var(--color-accent)" : "var(--color-accent-dark)",
          fontFamily: "var(--font-serif)",
        }}
        aria-hidden
      >
        &
      </span>
      {after}
    </span>
  );
}
