import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;          // small upper label e.g. "Our Services"
  title: string;           // main heading
  subtitle?: string;       // optional body copy below heading
  align?: "left" | "center";
  className?: string;
  /** Detail pages need a page-level h1; homepage sections stay h2. */
  as?: "h1" | "h2";
}

/**
 * Reusable section header used across all major sections.
 * Keeps heading styles consistent site-wide from one component.
 */
export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className,
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {label && <span className="section-label">{label}</span>}

      <Heading
        className="font-bold leading-tight"
        style={{ fontSize: "var(--text-3xl)" }}
      >
        {title}
      </Heading>

      {subtitle && (
        <p
          className="max-w-2xl"
          style={{
            fontSize: "var(--text-md)",
            color: "var(--color-text-secondary)",
            lineHeight: "1.8",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
