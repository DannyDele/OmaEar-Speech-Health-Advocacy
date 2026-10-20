"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "@/assets/icons";

import BackLink from "@/components/shared/BackLink";
import EarLogo from "@/components/shared/EarLogo";
import SectionHeader from "@/components/shared/SectionHeader";
import ImageFrame from "@/components/shared/ImageFrame";
import { RouteNames } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { COLORS } from "@/constants/colors";
import {
  GALLERY_FILTERS,
  GALLERY_PAGE_SIZE,
  GALLERY_PHOTOS,
} from "../gallery.constants";
import type { GalleryCategory } from "../gallery.types";

type FilterId = "all" | GalleryCategory;

const BLOB_SHAPES = [
  "60% 40% 55% 45% / 50% 60% 40% 50%",
  "40% 60% 45% 55% / 60% 40% 55% 45%",
  "55% 45% 60% 40% / 40% 55% 50% 60%",
  "45% 55% 40% 60% / 55% 45% 60% 40%",
  "50% 50% 55% 45% / 45% 55% 40% 60%",
  "60% 40% 45% 55% / 50% 50% 60% 40%",
];

const SWIPE_THRESHOLD = 45;

export default function OurWorldPage() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [visibleCount, setVisibleCount] = useState(GALLERY_PAGE_SIZE);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [slideDir, setSlideDir] = useState(1);
  const [dragX, setDragX] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? GALLERY_PHOTOS
        : GALLERY_PHOTOS.filter((item) => item.category === filter),
    [filter],
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const active = activeIndex !== null ? filtered[activeIndex] : null;

  const goTo = (nextIndex: number, direction: number) => {
    setSlideDir(direction);
    setDragX(0);
    setActiveIndex(nextIndex);
  };

  const goNext = () => {
    if (activeIndex === null) return;
    goTo((activeIndex + 1) % filtered.length, 1);
  };

  const goPrev = () => {
    if (activeIndex === null) return;
    goTo((activeIndex - 1 + filtered.length) % filtered.length, -1);
  };

  useEffect(() => {
    setVisibleCount(GALLERY_PAGE_SIZE);
    setActiveIndex(null);
  }, [filter]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }
      if (event.key === "ArrowRight") {
        setSlideDir(1);
        setActiveIndex((index) =>
          index === null ? 0 : (index + 1) % filtered.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setSlideDir(-1);
        setActiveIndex((index) =>
          index === null ? 0 : (index - 1 + filtered.length) % filtered.length,
        );
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, filtered.length]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = (event.touches[0]?.clientX ?? 0) - touchStartX.current;
    setDragX(touchDeltaX.current);
  };

  const handleTouchEnd = () => {
    const deltaX = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setDragX(0);

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    if (deltaX < 0) goNext();
    else goPrev();
  };

  const handleShowMore = () => {
    setVisibleCount((count) => Math.min(count + GALLERY_PAGE_SIZE, filtered.length));
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--color-surface)" }}>
      <div
        aria-hidden
        className="absolute top-10 right-4 opacity-[0.04] pointer-events-none select-none"
      >
        <EarLogo size={200} />
      </div>

      <div className="section-container relative z-10 pt-8 pb-16 md:pt-10 md:pb-24">
        <BackLink href={RouteNames.Gallery} label="Back to Gallery" className="mb-8" />

        <SectionHeader
          as="h1"
          label="Gallery"
          title="A closer look at the clinic"
          subtitle="Rooms, care, and programme days. Tap a photo to view it larger."
          className="mb-8"
        />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery filters">
            {GALLERY_FILTERS.map((item) => {
              const isActive = item.id === filter;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(item.id)}
                  className={cn(
                    "px-4 py-2 font-semibold transition-colors duration-300",
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]",
                  )}
                  style={{
                    fontSize: "var(--text-sm)",
                    background: isActive ? "var(--color-surface-2)" : "transparent",
                    borderRadius: "14px 6px 14px 6px",
                    border: isActive
                      ? "1px solid var(--color-border)"
                      : "1px solid transparent",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
            {visible.length} of {filtered.length}
          </p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
        >
          <AnimatePresence initial={false}>
            {visible.map((item, index) => {
              const isTall = index % 5 === 0;
              const blob = BLOB_SHAPES[index % BLOB_SHAPES.length];
              /* Stagger only the newly revealed batch so Show more eases in. */
              const batchOffset = Math.max(0, index - (visibleCount - GALLERY_PAGE_SIZE));
              const enterDelay = batchOffset < GALLERY_PAGE_SIZE ? batchOffset * 0.05 : 0;

              return (
                <motion.button
                  layout
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSlideDir(1);
                    setActiveIndex(index);
                  }}
                  aria-label={`View ${item.alt}`}
                  className={cn(
                    "group relative overflow-hidden text-left",
                    isTall ? "row-span-2" : "",
                  )}
                  style={{
                    borderRadius: blob,
                    boxShadow: "var(--shadow-card)",
                  }}
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.5,
                    delay: enterDelay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ImageFrame
                    src={item.src}
                    alt={item.alt}
                    aspect={isTall ? "aspect-[3/5]" : "aspect-[4/3]"}
                    rounded="none"
                    className="h-full"
                  />
                  <span
                    className="absolute inset-x-0 bottom-0 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(transparent, ${COLORS.inkOverlay})`,
                      color: COLORS.textInverse,
                      fontSize: "var(--text-xs)",
                    }}
                  >
                    {item.alt}
                  </span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35 }}
              className="mt-10 flex justify-center"
            >
              <button
                type="button"
                onClick={handleShowMore}
                className="px-6 py-3 font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  color: "var(--color-primary)",
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "18px 8px 18px 8px",
                  fontSize: "var(--text-sm)",
                }}
              >
                Show more
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {active && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8"
            style={{ background: COLORS.inkScrim }}
            onClick={() => setActiveIndex(null)}
          >
            <div
              className="relative w-full max-w-4xl"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="overflow-hidden" style={{ borderRadius: "28px 12px 28px 12px" }}>
                <AnimatePresence mode="wait" custom={slideDir}>
                  <motion.div
                    key={active.id}
                    custom={slideDir}
                    initial={{ opacity: 0, x: slideDir * 48 }}
                    animate={{ opacity: 1, x: dragX }}
                    exit={{ opacity: 0, x: slideDir * -48 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ImageFrame
                      src={active.src}
                      alt={active.alt}
                      aspect="aspect-[16/10]"
                      rounded="none"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <p style={{ fontSize: "var(--text-sm)", color: COLORS.onDark80 }}>
                  {active.alt}
                </p>
                <p style={{ fontSize: "var(--text-sm)", color: COLORS.onDark55 }}>
                  {activeIndex + 1} / {filtered.length}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute -top-3 -right-1 w-9 h-9 rounded-full flex items-center justify-center text-white"
                style={{ background: "rgba(0,0,0,0.55)" }}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {filtered.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center text-white"
                    style={{ background: "rgba(0,0,0,0.4)" }}
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center text-white"
                    style={{ background: "rgba(0,0,0,0.4)" }}
                    aria-label="Next photo"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
