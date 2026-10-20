"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown } from "@/assets/icons";

import { CLINIC, SOCIAL } from "@/constants/site";
import { COLORS } from "@/constants/colors";
import { HERO_SLIDES, HERO_STATS } from "../home.constants";
import EarLogo from "@/components/shared/EarLogo";
import BrandTagline from "@/components/shared/BrandTagline";
import WaveDivider from "@/components/shared/WaveDivider";

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  /* Auto-advance on a continuous loop — no pause, no manual controls */
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % HERO_SLIDES.length),
    []
  );

  useEffect(() => {
    const id = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(id);
  }, [current, next]);

  return (
    <section
      id="home"
      className="relative w-full min-h-dvh overflow-hidden"
    >
      {/* ── Full-width background image slideshow ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_SLIDES[current].src}
              alt={HERO_SLIDES[current].alt}
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark gradient overlay — left is darker for text legibility, right is lighter */}
        <div
          className="absolute inset-0"
          style={{
            background: COLORS.heroOverlay,
          }}
        />

        {/* Bottom fade into the services section colour before the wave cut */}
        <div
          className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--color-surface-2))",
          }}
        />
      </div>

      {/* ── Main content — top-aligned on mobile so content sits under the header, centred on desktop ── */}
      <div className="relative z-10 section-container min-h-dvh flex items-start lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center pt-20 pb-14 sm:pt-24 sm:pb-16 lg:py-32 w-full">

          {/* ── Left: text ── */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-semibold"
                style={{
                  fontSize: "var(--text-xs)",
                  background: COLORS.accentSoft,
                  color: COLORS.accent,
                  border: `1px solid ${COLORS.accentSoftBorder}`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "var(--color-accent)" }}
                />
                Ear, Speech & Hearing Clinic
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex flex-col gap-2"
            >
              <p
                className="font-medium"
                style={{ fontSize: "var(--text-md)", color: COLORS.onDark70 }}
              >
                Welcome to
              </p>
              <h1
                className="font-extrabold leading-[1.1] text-white"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}
              >
                {CLINIC.name}
              </h1>
              <BrandTagline size="md" className="font-semibold" />
            </motion.div>

            {/* Per-slide tagline — crossfades smoothly on each slide change */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`tagline-${current}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-md leading-relaxed"
                style={{ fontSize: "var(--text-base)", color: COLORS.onDark80 }}
              >
                {HERO_SLIDES[current].tagline}
              </motion.p>
            </AnimatePresence>

            {/* Qualification badges */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="flex flex-wrap gap-2"
            >
              {CLINIC.focusAreas.map((q) => (
                <span
                  key={q}
                  className="px-3 py-1 rounded-full font-semibold"
                  style={{
                    fontSize: "var(--text-xs)",
                    background: COLORS.onDark12,
                    border: `1px solid ${COLORS.onDark25}`,
                    color: COLORS.textInverse,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {q}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={SOCIAL.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-[var(--radius-md)] font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
                style={{ background: COLORS.whatsapp, fontSize: "var(--text-sm)" }}
              >
                <MessageCircle size={17} />
                Talk to the Clinic
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 px-7 py-3.5 rounded-[var(--radius-md)] font-bold transition-all duration-200 hover:bg-white hover:text-[var(--color-primary)] hover:shadow-lg"
                style={{
                  fontSize: "var(--text-sm)",
                  border: `2px solid ${COLORS.onDark70}`,
                  color: COLORS.textInverse,
                  background: "transparent",
                }}
              >
                Our Services
              </a>
            </motion.div>

            {/* Stats — equal-width columns so longer labels wrap without breaking the row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-1 md:gap-x-6 pt-1 w-full max-w-lg sm:max-w-none lg:max-w-none"
            >
              {HERO_STATS.map((stat, i) => (
                <div key={i} className="min-w-0 flex flex-col gap-1 sm:gap-0.5">
                  <span
                    className="font-extrabold leading-none"
                    style={{
                      fontSize: "clamp(1.1rem, 3.5vw, var(--text-2xl))",
                      color: "var(--color-accent)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="leading-snug text-balance"
                    style={{
                      fontSize: "clamp(0.625rem, 2.4vw, var(--text-xs))",
                      color: COLORS.onDark55,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: logo graphic with 3D depth ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Outer glow ring */}
            <div
              className="absolute w-[340px] h-[340px] rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, var(--color-accent), transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Rotating dashed orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] rounded-full"
              style={{
                border: `1px dashed ${COLORS.accentSoftBorder}`,
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-[220px] h-[220px] rounded-full"
              style={{
                border: `1px dashed ${COLORS.onDark18}`,
              }}
            />

            {/* Centre: clinic logo with blob morph */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 blob-morph flex items-center justify-center"
              style={{
                width: 200,
                height: 200,
                background: COLORS.onDark90,
                border: `1px solid ${COLORS.onDark20}`,
                boxShadow: [
                  `0 8px 32px rgba(var(--color-primary-rgb), 0.5)`,
                  `0 0 80px ${COLORS.accentGlow}`,
                  `inset 0 1px 0 ${COLORS.onDark18}`,
                ].join(", "),
              }}
            >
              <EarLogo size={148} />
            </motion.div>

            {/* Floating info chips */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-8 px-4 py-2 rounded-[var(--radius-md)]"
              style={{
                background: COLORS.onDark12,
                backdropFilter: "blur(16px)",
                border: `1px solid ${COLORS.onDark20}`,
                color: COLORS.textInverse,
                fontSize: "var(--text-xs)",
                fontWeight: 600,
              }}
            >
              Ear & Speech Clinic
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-8 flex items-center gap-2 px-4 py-2 rounded-[var(--radius-md)]"
              style={{
                background: COLORS.accentSolid,
                backdropFilter: "blur(16px)",
                color: COLORS.textInverse,
                fontSize: "var(--text-xs)",
                fontWeight: 600,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Hearing Aids Available
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1"
      >
        <p style={{ fontSize: "var(--text-2xs)", color: COLORS.onDark45 }}>
          Scroll to explore
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown size={18} color={COLORS.onDark45} />
        </motion.div>
      </motion.div>

      {/* ── Wave transition into next section ── */}
      <div className="absolute -bottom-px inset-x-0 z-10">
        <WaveDivider fill={COLORS.surface2} variant="wave" />
      </div>
    </section>
  );
}
