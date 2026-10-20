"use client";

import { useState } from "react";
import { Check, Copy } from "@/assets/icons";
import { COLORS } from "@/constants/colors";

/**
 * Copies the foundation account number. The icon sits after the digits
 * so the bank-details row stays aligned.
 */
export default function CopyAccountNumber({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "absolute";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div>
      <dt style={{ fontSize: "var(--text-xs)", color: COLORS.accent }}>
        Account Number
      </dt>
      <dd>
        <button
          type="button"
          onClick={copyNumber}
          aria-label={copied ? "Account number copied" : "Copy account number"}
          title={copied ? "Copied" : "Copy"}
          className="inline-flex items-center gap-2 font-semibold tracking-wide text-left"
          style={{ fontFamily: "ui-monospace, monospace", letterSpacing: "0.06em" }}
        >
          {value}
          <span style={{ color: COLORS.onDark80 }}>
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </span>
        </button>
      </dd>
    </div>
  );
}
