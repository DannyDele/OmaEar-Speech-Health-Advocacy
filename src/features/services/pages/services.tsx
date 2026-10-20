"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  ClipboardList,
  Volume2,
  AudioLines,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
} from "@/assets/icons";

import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/shared/SectionHeader";
import EarLogo from "@/components/shared/EarLogo";
import WaveDivider from "@/components/shared/WaveDivider";
import { SERVICES, SERVICES_SECTION } from "../services.constants";
import { COLORS } from "@/constants/colors";

/* ── Custom Ear icon */
function EarIcon({ size = 24 }: { size?: number }) {
  return <EarLogo size={size} color="white" />;
}

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Ear: EarIcon,
  Stethoscope,
  ClipboardList,
  Volume2,
  AudioLines,
  HeartHandshake,
};

/* Cards visible per breakpoint — managed in JS for carousel logic */
const VISIBLE = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
};

export default function ServicesSection() {
  const total = SERVICES.length;
  const duplicatedServices = [...SERVICES, ...SERVICES, ...SERVICES];
  const [perView, setPerView] = useState(VISIBLE.desktop);
  const [paused, setPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  /**
   * Start in the middle copy of the tripled array so we can move left or right
   * and then silently jump back to the middle when we cross an edge.
   */
  const [index, setIndex] = useState(total);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchDeltaXRef = useRef(0);

  /* Responsive per-view count */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640)       setPerView(VISIBLE.mobile);
      else if (window.innerWidth < 1024) setPerView(VISIBLE.tablet);
      else                               setPerView(VISIBLE.desktop);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const next = useCallback(() => {
    setTransitionEnabled(true);
    setIndex((i) => i + 1);
  }, []);

  const prev = useCallback(() => {
    setTransitionEnabled(true);
    setIndex((i) => i - 1);
  }, []);

  /* Auto-advance every 4s */
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, next]);

  /**
   * Keep the active index in the middle copy of the tripled list. This prevents
   * visible empty space because users never reach the actual start/end of the track.
   */
  useEffect(() => {
    if (index >= total * 2) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(total);
      }, 420);
      return () => clearTimeout(timeout);
    }

    if (index < total) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(total * 2 - 1);
      }, 420);
      return () => clearTimeout(timeout);
    }
  }, [index, total]);

  useEffect(() => {
    if (!transitionEnabled) {
      const id = requestAnimationFrame(() => setTransitionEnabled(true));
      return () => cancelAnimationFrame(id);
    }
  }, [transitionEnabled]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 640) return;

    const storageKey = "services-swipe-hint-seen";
    const hasSeenHint = window.localStorage.getItem(storageKey) === "true";
    if (hasSeenHint) return;

    setShowSwipeHint(true);
    const timeout = window.setTimeout(() => {
      setShowSwipeHint(false);
      window.localStorage.setItem(storageKey, "true");
    }, 3200);

    return () => window.clearTimeout(timeout);
  }, []);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
    touchDeltaXRef.current = 0;
    setPaused(true);
    setShowSwipeHint(false);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;
    touchDeltaXRef.current = (event.touches[0]?.clientX ?? 0) - touchStartXRef.current;
  };

  const handleTouchEnd = () => {
    const deltaX = touchDeltaXRef.current;
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
    setPaused(false);

    /**
     * Require a clear horizontal gesture before changing slides so vertical page
     * scrolling still feels natural on touch devices.
     */
    if (Math.abs(deltaX) < 45) return;

    if (deltaX < 0) next();
    else prev();
  };

  /**
   * On phones, show a deliberate "peek" of the next card by making a single
   * card slightly narrower than the viewport. Tablet/desktop keep the normal
   * full-width slot math.
   */
  const trackPerView = perView === 1 ? 1.12 : perView;

  return (
    <section
      id="services"
      className="pt-0 pb-0 overflow-hidden relative"
      style={{ background: "var(--color-surface-2)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="section-container py-16 md:py-20">
        <FadeInSection>
          <SectionHeader
            label={SERVICES_SECTION.label}
            title={SERVICES_SECTION.title}
            subtitle={SERVICES_SECTION.subtitle}
            className="mb-10"
          />
        </FadeInSection>

        {/* ── Carousel viewport ── */}
        <div className="relative">
          {/* Arrow: prev */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
            style={{
              background: "var(--color-primary)",
              color: "white",
            }}
            aria-label="Previous service"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Arrow: next */}
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
            style={{
              background: "var(--color-primary)",
              color: "white",
            }}
            aria-label="Next service"
          >
            <ChevronRight size={18} />
          </button>

          {/* Sliding track */}
          <div
            className="overflow-hidden mx-3 sm:mx-5"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {showSwipeHint ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-4 flex justify-center sm:hidden"
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    background: COLORS.primarySoft,
                    color: COLORS.primary,
                    border: `1px solid ${COLORS.primarySoftBorder}`,
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                  }}
                >
                  <motion.span
                    animate={{ x: [0, -5, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden
                  >
                    ↔
                  </motion.span>
                  Swipe to explore services
                </div>
              </motion.div>
            ) : null}

            <motion.div
              animate={{ x: `-${index * (100 / duplicatedServices.length)}%` }}
              transition={
                transitionEnabled
                  ? { type: "spring", stiffness: 280, damping: 30 }
                  : { duration: 0 }
              }
              className="flex"
              style={{ width: `${(duplicatedServices.length / trackPerView) * 100}%` }}
            >
              {duplicatedServices.map((service, i) => {
                const Icon = ICON_MAP[service.icon];
                return (
                  <div
                    key={`${service.id}-${i}`}
                    className="px-3"
                    style={{ width: `${100 / duplicatedServices.length}%` }}
                  >
                    <motion.article
                      className="group relative flex flex-col gap-5 p-7 h-full overflow-hidden"
                      style={{
                        background: "var(--color-surface)",
                        borderRadius: "var(--radius-xl)",
                        border: "1px solid var(--color-border)",
                        boxShadow: "var(--shadow-card)",
                        minHeight: 280,
                      }}
                    >
                      {/* Decorative blob bg on hover */}
                      <div
                        className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500"
                        style={{ background: "var(--color-primary)" }}
                      />

                      {/* Icon */}
                      <div
                        className="w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                          color: "white",
                          borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%",
                          boxShadow: "var(--shadow-md)",
                        }}
                      >
                        {Icon && <Icon size={24} />}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-2 relative z-10">
                        <h3
                          className="font-bold transition-colors group-hover:text-primary"
                          style={{ fontSize: "var(--text-lg)", color: "var(--color-text-primary)" }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="leading-relaxed"
                          style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}
                        >
                          {service.description}
                        </p>
                      </div>

                      {/* Animated bottom line */}
                      <div
                        className="mt-auto h-0.5 w-0 rounded-full transition-all duration-500 ease-out group-hover:w-full"
                        style={{
                          background: "linear-gradient(90deg, var(--color-primary-light), var(--color-accent))",
                        }}
                      />

                      {/* Card number — subtle watermark */}
                      <span
                        className="absolute bottom-4 right-5 font-extrabold select-none"
                        style={{
                          fontSize: "var(--text-4xl)",
                          color: "var(--color-border)",
                          lineHeight: 1,
                        }}
                      >
                        {String((i % total) + 1).padStart(2, "0")}
                      </span>
                    </motion.article>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setTransitionEnabled(true);
                  setIndex(total + i);
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === (index % total) ? 28 : 8,
                  height: 8,
                  background: i === (index % total) ? "var(--color-primary)" : "var(--color-border)",
                }}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Wave sits flush on the section edge — no margin above it. */}
      <WaveDivider fill="var(--color-primary-dark)" variant="curve" />
    </section>
  );
}
