import { MessageCircle, Phone, Mail, MapPin } from "@/assets/icons";
import EarLogo from "@/components/shared/EarLogo";

import { CLINIC, SOCIAL } from "@/constants/site";
import { COLORS } from "@/constants/colors";
import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { CONTACT_CHANNELS } from "../contact.constants";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  MessageCircle, Phone, Mail, MapPin,
};

type ContactSectionProps = {
  headingAs?: "h1" | "h2";
  title?: string;
};

export default function ContactSection({
  headingAs = "h2",
  title = "We're All Ears",
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="relative pt-0 pb-16 md:pb-20 overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Watermark ear */}
      <div
        aria-hidden
        className="absolute bottom-16 left-4 opacity-[0.04] pointer-events-none select-none"
      >
        <EarLogo size={200} color="var(--color-primary)" />
      </div>

      <div className="section-container py-16 md:py-20">
        <FadeInSection>
          <SectionHeader
            as={headingAs}
            label="Get In Touch"
            title={title}
            subtitle={`Reach ${CLINIC.name} by WhatsApp, phone, email, or visit. WhatsApp is usually the fastest way to enquire.`}
            className="mb-12"
          />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {CONTACT_CHANNELS.map((channel, i) => {
            const Icon = ICON_MAP[channel.icon];
            const isWhatsApp = channel.icon === "MessageCircle";

            return (
              <FadeInSection key={channel.label} delay={i * 0.09}>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-5 p-6 rounded-[var(--radius-lg)] group h-full transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: isWhatsApp ? COLORS.whatsappGradient : COLORS.surface2,
                    border: isWhatsApp ? "none" : `1px solid ${COLORS.border}`,
                    boxShadow: "var(--shadow-card)",
                    color: isWhatsApp ? COLORS.textInverse : "inherit",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: isWhatsApp ? COLORS.onDark20 : COLORS.primary,
                      color: COLORS.textInverse,
                    }}
                  >
                    {Icon && <Icon size={20} />}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1">
                    <p
                      className="font-bold"
                      style={{
                        fontSize: "var(--text-base)",
                        color: isWhatsApp ? COLORS.textInverse : COLORS.textPrimary,
                      }}
                    >
                      {channel.label}
                    </p>
                    <p
                      className="leading-snug break-all"
                      style={{
                        fontSize: "var(--text-sm)",
                        color: isWhatsApp ? COLORS.onDark80 : COLORS.textSecondary,
                      }}
                    >
                      {channel.value}
                    </p>
                    <span
                      className="mt-2 inline-flex items-center font-semibold transition-all group-hover:underline"
                      style={{
                        fontSize: "var(--text-xs)",
                        color: isWhatsApp ? COLORS.textInverse : COLORS.primary,
                      }}
                    >
                      {channel.cta} →
                    </span>
                  </div>
                </a>
              </FadeInSection>
            );
          })}
        </div>

        {/* ── CTA Banner ── */}
        <FadeInSection delay={0.4}>
          <div
            className="mt-14 p-8 md:p-12 rounded-[var(--radius-xl)] text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary-light))",
              color: "white",
            }}
          >
            {/* Decorative blob */}
            <div
              aria-hidden
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-20"
              style={{ background: "var(--color-accent)" }}
            />
            <p
              className="font-bold mb-2 relative z-10"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              Ready to take the first step?
            </p>
            <p
              className="mb-6 relative z-10"
              style={{ fontSize: "var(--text-base)", color: COLORS.onDark75 }}
            >
              Contact {CLINIC.name} today to ask about services, hearing aids, or an appointment.
            </p>
            <a
              href={SOCIAL.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              /* import SOCIAL directly to avoid TS issue */
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-md)] font-bold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98]"
              style={{ background: COLORS.whatsapp, fontSize: "var(--text-base)" }}
            >
              <MessageCircle size={20} />
              Message the Clinic
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
