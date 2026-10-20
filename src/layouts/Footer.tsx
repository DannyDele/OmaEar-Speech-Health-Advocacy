import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "@/assets/icons";

import { NAV_ITEMS } from "@/constants/routes";
import { CONTACT, CLINIC, SOCIAL } from "@/constants/site";
import { COLORS } from "@/constants/colors";
import EarLogo from "@/components/shared/EarLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--color-primary-dark)", color: "var(--color-text-inverse)" }}
    >
      {/* Decorative top-border accent */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, var(--color-primary-light), var(--color-accent))" }}
      />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <EarLogo size={52} color="white" />
              <span
                className="font-extrabold"
                style={{ fontSize: "var(--text-xl)", color: "var(--color-text-inverse)" }}
              >
                {CLINIC.shortName}
              </span>
            </div>
            <p
              className="max-w-sm leading-relaxed"
              style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.65)" }}
            >
              {CLINIC.tagline} {CLINIC.summary}
            </p>

            {/* Social / contact pills */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={SOCIAL.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: COLORS.whatsapp, fontSize: "var(--text-sm)" }}
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href={SOCIAL.emailUrl}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all hover:bg-white/10"
                style={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  fontSize: "var(--text-sm)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <Mail size={14} /> Email Us
              </a>
            </div>
          </div>

          {/* ── Quick links ── */}
          <div className="flex flex-col gap-4">
            <h4
              className="font-bold tracking-wide uppercase"
              style={{ fontSize: "var(--text-xs)", color: "var(--color-accent)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                    style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.65)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact info ── */}
          <div className="flex flex-col gap-4">
            <h4
              className="font-bold tracking-wide uppercase"
              style={{ fontSize: "var(--text-xs)", color: "var(--color-accent)" }}
            >
              Contact
            </h4>
            <address className="not-italic">
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={SOCIAL.phoneUrl}
                    className="flex items-start gap-2 transition-colors hover:text-white"
                    style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.65)" }}
                  >
                    <Phone size={14} className="mt-0.5 shrink-0" />
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL.emailUrl}
                    className="flex items-start gap-2 transition-colors hover:text-white"
                    style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.65)" }}
                  >
                    <Mail size={14} className="mt-0.5 shrink-0" />
                    {CONTACT.email}
                  </a>
                </li>
                <li
                  className="flex items-start gap-2"
                  style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.65)" }}
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  {CONTACT.address}
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-12 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p
            style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.45)" }}
          >
            © {year} {CLINIC.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
