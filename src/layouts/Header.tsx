"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone } from "@/assets/icons";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import { NAV_ITEMS, RouteNames } from "@/constants/routes";
import { CLINIC, SOCIAL } from "@/constants/site";
import { COLORS } from "@/constants/colors";
import { scrollToNavTarget, useActiveNav } from "@/hooks/useActiveNav";
import { cn } from "@/lib/utils";
import EarLogo from "@/components/shared/EarLogo";
import BrandTagline from "@/components/shared/BrandTagline";

/* ── Animated hamburger → X icon ───────────────────────────────────
   Three bars that morph smoothly into a diagonal X when open.
   Each bar is an independent motion.span with its own transform. */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center w-6 h-6 gap-[5px]">
      {/* Top bar: rotates +45° and shifts down when open */}
      <motion.span
        animate={
          open
            ? { rotate: 45, y: 7, width: "100%" }
            : { rotate: 0, y: 0, width: "100%" }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block h-[2px] rounded-full origin-center"
        style={{ background: "var(--color-primary)" }}
      />
      {/* Middle bar: shrinks to 60% at rest, fades out when open */}
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 0.6 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="block h-[2px] rounded-full w-full origin-right"
        style={{ background: "var(--color-primary)" }}
      />
      {/* Bottom bar: rotates −45° and shifts up when open */}
      <motion.span
        animate={
          open
            ? { rotate: -45, y: -7, width: "100%" }
            : { rotate: 0, y: 0, width: "80%" }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block h-[2px] rounded-full origin-center"
        style={{ background: "var(--color-primary)" }}
      />
    </div>
  );
}

function isHomeSectionLink(href: string) {
  return href === RouteNames.Home || href.startsWith("/#");
}

export default function Header() {
  const pathname = usePathname();
  const activeHref = useActiveNav();
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true); // controls hide/show
  const [scrolled, setScrolled] = useState(false); // controls bg opacity
  const lastY = useRef(0);
  const isOpenRef = useRef(false);
  isOpenRef.current = isOpen;

  /* Same-page hash links skip Next's jump so we can smooth-scroll under the header. */
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const onHomeHash = pathname === RouteNames.Home && isHomeSectionLink(href);
    if (onHomeHash) event.preventDefault();

    // Close the drawer first so the tap is not cancelled by the hide-on-scroll animation.
    setIsOpen(false);
    setVisible(true);

    if (onHomeHash) {
      window.setTimeout(() => {
        scrollToNavTarget(href);
      }, 80);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      /* A finger drag on an open drawer used to hide the whole header and cancel the tap. */
      if (isOpenRef.current) return;

      const currentY = window.scrollY;
      const delta = currentY - lastY.current;

      /* Hide when scrolling DOWN past 100px, show when scrolling UP */
      if (currentY > 100) {
        if (delta > 6) setVisible(false); // scrolling down  — hide
        if (delta < -4) setVisible(true); // scrolling up    — show
      } else {
        setVisible(true); // always visible at the top
      }

      setScrolled(currentY > 60);
      lastY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Lock page scroll while the drawer is open so a swipe cannot hide the header mid-tap. */
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setVisible(true);
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <motion.header
      /* Slide up to hide, slide back down to show */
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-md"
          : "bg-white/85 backdrop-blur-sm",
      )}
      style={{ transition: "background 0.3s, box-shadow 0.3s" }}
    >
      <div className="section-container">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* ── Brand with ear logo ── */}
          <Link
            href="/"
            aria-label={CLINIC.name}
            className="flex items-center gap-1.5 group"
            onClick={(event) => {
              if (pathname === RouteNames.Home) {
                const scrolledHome = scrollToNavTarget(RouteNames.Home);
                if (scrolledHome) event.preventDefault();
              }
            }}
          >
            <EarLogo
              size={48}
              className="transition-transform duration-300 group-hover:scale-105 shrink-0"
            />
            {/* Tight lockup: name nudged up so the subtitle fits without growing the bar. */}
            <div className="flex flex-col justify-center -translate-y-0.5 leading-none">
              <span
                className="font-extrabold tracking-tight transition-colors group-hover:text-[var(--color-primary)]"
                style={{
                  fontSize: "var(--text-lg)",
                  color: "var(--color-primary)",
                  lineHeight: 1.05,
                }}
              >
                {CLINIC.shortName}
              </span>
              <BrandTagline className="mt-0.5 block whitespace-nowrap" />
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <LayoutGroup>
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Primary"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === activeHref;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    scroll={
                      !(
                        pathname === RouteNames.Home &&
                        isHomeSectionLink(item.href)
                      )
                    }
                    onClick={(event) => handleNavClick(event, item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative px-4 py-2 rounded-[var(--radius-sm)] font-medium",
                      "transition-all duration-300",
                      isActive
                        ? "text-[var(--color-primary)] font-bold"
                        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-primary)]",
                    )}
                    style={{
                      fontSize: "var(--text-sm)",
                      background: isActive
                        ? "color-mix(in srgb, var(--color-primary) 8%, white)"
                        : undefined,
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="clinic-nav-ink"
                        className="absolute left-3 right-3 -bottom-0.5 h-[3px]"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                          borderRadius: "40% 60% 50% 50%",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </LayoutGroup>

          {/* ── Desktop CTAs ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SOCIAL.phoneUrl}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)]",
                "font-semibold border-2 border-[var(--color-border)]",
                "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
                "transition-all duration-200",
              )}
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-text-secondary)",
              }}
            >
              <Phone size={15} />
              Call Now
            </a>
            <a
              href={SOCIAL.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-md)]",
                "font-semibold text-white shadow-md",
                "transition-all duration-200 hover:shadow-lg hover:scale-[1.02]",
                "active:scale-[0.98]",
              )}
              style={{
                fontSize: "var(--text-sm)",
                background: COLORS.whatsapp,
              }}
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          {/* ── Mobile hamburger — animated 3-bar → X ── */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-[var(--radius-md)] transition-colors hover:bg-[var(--color-surface-2)] touch-manipulation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <HamburgerIcon open={isOpen} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-[var(--color-border)] bg-white"
          >
            <nav
              className="section-container flex flex-col py-4 gap-1"
              aria-label="Mobile"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === activeHref;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    scroll={
                      !(
                        pathname === RouteNames.Home &&
                        isHomeSectionLink(item.href)
                      )
                    }
                    onClick={(event) => handleNavClick(event, item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "px-4 py-3.5 rounded-[var(--radius-md)] font-medium transition-colors touch-manipulation",
                      isActive
                        ? "text-[var(--color-primary)] font-bold bg-[var(--color-surface-2)]"
                        : "text-[var(--color-text-secondary)]",
                    )}
                    style={{ fontSize: "var(--text-base)" }}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[var(--color-border)]">
                <a
                  href={SOCIAL.phoneUrl}
                  className="flex items-center justify-center gap-2 py-3 rounded-[var(--radius-md)] font-semibold border-2 border-[var(--color-border)] text-[var(--color-text-primary)]"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  <Phone size={16} /> Call Now
                </a>
                <a
                  href={SOCIAL.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-[var(--radius-md)] font-semibold text-white"
                  style={{
                    fontSize: "var(--text-sm)",
                    background: COLORS.whatsapp,
                  }}
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
