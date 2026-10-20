/** Typography scale — use these CSS-var strings as Tailwind arbitrary values
 *  or inline style refs for consistency across all components.
 *  All sizes are defined once in globals.css :root and referenced here. */

export const FONT_SIZE = {
  "2xs": "var(--text-2xs)",   // 10px
  xs:    "var(--text-xs)",    // 12px
  sm:    "var(--text-sm)",    // 14px
  base:  "var(--text-base)",  // 16px
  md:    "var(--text-md)",    // 18px
  lg:    "var(--text-lg)",    // 20px
  xl:    "var(--text-xl)",    // 24px
  "2xl": "var(--text-2xl)",   // 30px
  "3xl": "var(--text-3xl)",   // 36px
  "4xl": "var(--text-4xl)",   // 48px
  "5xl": "var(--text-5xl)",   // 60px
} as const;

export const FONT_FAMILY = {
  sans:  "var(--font-sans)",
  serif: "var(--font-serif)",
} as const;
