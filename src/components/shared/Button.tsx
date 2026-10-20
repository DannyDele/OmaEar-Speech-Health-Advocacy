import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost" | "accent";
type ButtonSize    = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-[var(--color-primary)] text-white",
    "hover:bg-[var(--color-primary-dark)]",
    "shadow-md hover:shadow-lg",
  ].join(" "),

  accent: [
    "bg-[var(--color-accent)] text-white",
    "hover:bg-[var(--color-accent-dark)]",
    "shadow-md hover:shadow-lg",
  ].join(" "),

  outline: [
    "border-2 border-[var(--color-primary)] text-[var(--color-primary)]",
    "hover:bg-[var(--color-primary)] hover:text-white",
  ].join(" "),

  ghost: [
    "text-[var(--color-primary)]",
    "hover:bg-[var(--color-surface-2)]",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-[var(--radius-sm)] gap-1.5",
  md: "px-6 py-3 text-sm rounded-[var(--radius-md)] gap-2",
  lg: "px-8 py-4 text-base rounded-[var(--radius-lg)] gap-2.5",
};

/**
 * Reusable button / link button.
 * Renders an <a> via Next/Link when `href` is passed, otherwise a <button>.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  external,
  type = "button",
  disabled,
  icon,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center font-semibold",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "active:scale-[0.97] select-none cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={base}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {content}
    </button>
  );
}
