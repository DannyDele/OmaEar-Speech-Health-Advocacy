"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "@/assets/icons";

import type { FAQItem } from "../faq.types";

interface Props extends FAQItem {
  index: number;
}

/**
 * Animated accordion. The answer stays in the DOM (height 0 when closed) so
 * crawlers can still read it, while the panel eases open and closed.
 */
export default function FaqAccordionItem({ question, answer, index }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-[var(--radius-md)] transition-[border-color,box-shadow] duration-200"
      style={{
        border: `1px solid ${open ? "var(--color-primary-light)" : "var(--color-border)"}`,
        background: "var(--color-surface)",
        boxShadow: open ? "var(--shadow-md)" : "var(--shadow-sm)",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-bold transition-colors duration-200"
            style={{
              fontSize: "var(--text-xs)",
              background: open ? "var(--color-primary)" : "var(--color-surface-2)",
              color: open ? "white" : "var(--color-text-muted)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="font-semibold transition-colors duration-200"
            style={{
              fontSize: "var(--text-base)",
              color: open ? "var(--color-primary)" : "var(--color-text-primary)",
            }}
          >
            {question}
          </span>
        </div>

        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200"
          style={{
            background: open ? "var(--color-primary)" : "var(--color-surface-2)",
            color: open ? "white" : "var(--color-text-secondary)",
          }}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      {/* Always mounted so the answer is in the HTML. Height animates instead of snapping. */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
      >
        <p
          className="px-6 pb-5 leading-relaxed"
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--color-text-secondary)",
            paddingLeft: "calc(1.5rem + 1.75rem + 1rem)",
          }}
        >
          {answer}
        </p>
      </motion.div>
    </div>
  );
}
