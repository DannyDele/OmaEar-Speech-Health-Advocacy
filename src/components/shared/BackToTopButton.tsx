"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "@/assets/icons";

import EarLogo from "@/components/shared/EarLogo";
import { COLORS } from "@/constants/colors";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-70 group"
        >
          <div className="relative">
            {/* Soft glow behind the button */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-55 transition-opacity"
              style={{ background: "var(--color-accent)" }}
            />

            {/* Main button shell */}
            <div
              className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
              style={{
                borderRadius: "42% 58% 55% 45% / 48% 42% 58% 52%",
                background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                border: `1px solid ${COLORS.onDark18}`,
              }}
            >
              {/* Ear badge in the background for brand personality */}
              <div className="absolute inset-0 flex items-center justify-center opacity-18">
                <EarLogo size={26} color={COLORS.onDark25} />
              </div>

              {/* Arrow remains the main affordance so users understand the action */}
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ArrowUp size={20} color={COLORS.textInverse} strokeWidth={2.6} />
              </motion.div>
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
