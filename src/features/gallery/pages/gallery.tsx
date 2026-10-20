"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "@/assets/icons";

import { RouteNames } from "@/constants/routes";
import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/shared/SectionHeader";
import ImageFrame from "@/components/shared/ImageFrame";
import WaveDivider from "@/components/shared/WaveDivider";
import { GALLERY_PREVIEW } from "../gallery.constants";
import { COLORS } from "@/constants/colors";

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(null);

  return (
    <section
      id="gallery"
      className="relative pt-0 pb-0 overflow-hidden"
      style={{ background: "var(--color-surface-2)" }}
    >
      <div className="section-container py-16 md:py-20">
        <FadeInSection>
          <SectionHeader
            label="Our Clinic"
            title="A Look Inside Our World"
            subtitle="Modern facilities, advanced equipment, and a warm environment, designed with your comfort and care in mind."
            className="mb-12"
          />
        </FadeInSection>

        {/* Masonry-style asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_PREVIEW.map((item, i) => {
            /* Alternate organic border-radius shapes for each card */
            const shapes = [
              "60% 40% 55% 45% / 50% 60% 40% 50%",
              "40% 60% 45% 55% / 60% 40% 55% 45%",
              "55% 45% 60% 40% / 40% 55% 50% 60%",
              "45% 55% 40% 60% / 55% 45% 60% 40%",
              "50% 50% 55% 45% / 45% 55% 40% 60%",
              "60% 40% 45% 55% / 50% 50% 60% 40%",
            ];
            const borderRadius = shapes[i % shapes.length];

            return (
              <FadeInSection
                key={item.src}
                delay={i * 0.07}
                className={i === 0 ? "row-span-2 md:row-span-2" : ""}
              >
                <button
                  onClick={() => setLightbox(item)}
                  className="group relative w-full block overflow-hidden cursor-pointer focus-visible:ring-2 focus-visible:ring-primary transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    aspectRatio: i === 0 ? "3/5" : "4/3",
                    borderRadius,
                    boxShadow: "var(--shadow-card)",
                  }}
                  aria-label={`View: ${item.alt}`}
                >
                  <ImageFrame
                    src={item.src}
                    alt={item.alt}
                    aspect={i === 0 ? "aspect-[3/5]" : "aspect-[4/3]"}
                    rounded="lg"
                    className="transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: COLORS.primaryOverlay }}
                  >
                    <ZoomIn size={28} color="white" />
                  </div>
                </button>
              </FadeInSection>
            );
          })}
        </div>

        <FadeInSection delay={0.18}>
          <div className="mt-10 flex justify-center">
            <Link
              href={RouteNames.OurWorld}
              className="inline-flex items-center justify-center px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                color: "var(--color-primary)",
                background: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "18px 8px 18px 8px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              View More
            </Link>
          </div>
        </FadeInSection>
      </div>

      <WaveDivider fill="var(--color-primary-dark)" variant="wave" flip />

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-6"
            style={{ background: COLORS.lightbox, backdropFilter: "blur(8px)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageFrame
                src={lightbox.src}
                alt={lightbox.alt}
                aspect="aspect-[4/3]"
                rounded="xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <p
                className="text-center mt-3 text-white/70"
                style={{ fontSize: "var(--text-sm)" }}
              >
                {lightbox.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
