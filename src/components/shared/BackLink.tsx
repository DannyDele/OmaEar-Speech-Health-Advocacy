import Link from "next/link";
import { ChevronLeft } from "@/assets/icons";
import { COLORS } from "@/constants/colors";
import { cn } from "@/lib/utils";

type BackLinkProps = {
  href: string;
  label: string;
  className?: string;
};

/**
 * Detail-page back control. Matches the clinic’s organic corners and brand colours
 * instead of a plain text arrow.
 */
export default function BackLink({ href, label, className }: BackLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 px-4 py-2.5 font-semibold transition-all duration-300",
        "hover:-translate-x-0.5",
        className,
      )}
      style={{
        fontSize: "var(--text-sm)",
        color: COLORS.primary,
        background: COLORS.surface2,
        border: `1px solid ${COLORS.border}`,
        borderRadius: "18px 8px 18px 8px",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <span
        className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-x-0.5"
        style={{
          width: 28,
          height: 28,
          background: COLORS.primary,
          color: COLORS.textInverse,
          borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%",
        }}
      >
        <ChevronLeft size={16} />
      </span>
      {label}
    </Link>
  );
}
