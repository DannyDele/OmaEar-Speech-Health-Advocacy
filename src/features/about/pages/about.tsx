import { GraduationCap, Clock, MapPin, Star } from "@/assets/icons";

import { CLINIC, FOUNDER, SOCIAL } from "@/constants/site";
import { COLORS } from "@/constants/colors";
import { RouteNames } from "@/constants/routes";
import { IMAGES } from "@/constants/images";
import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import EarLogo from "@/components/shared/EarLogo";
import WaveDivider from "@/components/shared/WaveDivider";
import { ABOUT_HIGHLIGHTS, ABOUT_SECTION } from "../about.constants";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  GraduationCap,
  Clock,
  MapPin,
  Star,
};

function FloatingBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute -top-4 -right-4 shadow-lg flex items-center justify-center"
      style={{
        background: COLORS.surface,
        borderRadius: "50%",
        padding: 10,
        boxShadow: "var(--shadow-md)",
      }}
    >
      {children}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative pt-0 pb-0 overflow-hidden"
      style={{ background: COLORS.surface }}
    >
      <div
        aria-hidden
        className="absolute top-12 right-8 opacity-[0.04] pointer-events-none select-none"
      >
        <EarLogo size={220} color={COLORS.primary} />
      </div>

      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInSection direction="left" className="relative flex justify-center">
            <div className="relative">
              <div
                className="relative overflow-hidden blob-morph"
                style={{
                  width: "clamp(280px, 40vw, 400px)",
                  height: "clamp(340px, 52vw, 500px)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center flex-col gap-3"
                  style={{ background: COLORS.placeholderGradient }}
                >
                  <EarLogo size={72} badge />
                  <p
                    className="text-center px-6"
                    style={{ fontSize: "var(--text-xs)", color: COLORS.textMuted }}
                  >
                    {ABOUT_SECTION.photoHint}
                    <br />
                    <code className="bg-white/60 px-1 rounded">{IMAGES.aboutDoctor}</code>
                  </p>
                </div>
              </div>

              <div
                aria-hidden
                className="absolute -bottom-6 -right-6 w-32 h-32 opacity-40 -z-10"
                style={{
                  background: `radial-gradient(circle, ${COLORS.primary} 1.5px, transparent 1.5px)`,
                  backgroundSize: "12px 12px",
                }}
              />

              <div
                className="absolute -bottom-4 -left-4 flex items-center gap-3 px-5 py-4"
                style={{
                  background: COLORS.primary,
                  color: COLORS.textInverse,
                  borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div className="flex flex-col">
                  <span className="font-extrabold leading-tight" style={{ fontSize: "var(--text-2xl)" }}>
                    {FOUNDER.yearsExperience}+
                  </span>
                  <span style={{ fontSize: "var(--text-2xs)", opacity: 0.8 }}>
                    {ABOUT_SECTION.yearsBadgeLabel}
                  </span>
                </div>
              </div>

              <FloatingBadge>
                <EarLogo size={36} badge />
              </FloatingBadge>
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.1}>
            <SectionHeader
              label={ABOUT_SECTION.label}
              title={ABOUT_SECTION.title}
              align="left"
              className="mb-6"
            />

            <p
              className="mb-4 leading-loose"
              style={{ fontSize: "var(--text-base)", color: COLORS.textSecondary }}
            >
              {CLINIC.summary} {ABOUT_SECTION.body}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {ABOUT_HIGHLIGHTS.map((item) => {
                const Icon = ICON_MAP[item.icon];
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-4 transition-all hover:shadow-md"
                    style={{
                      background: COLORS.surface2,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: "16px 6px 16px 6px",
                    }}
                  >
                    <div
                      className="w-9 h-9 flex items-center justify-center shrink-0"
                      style={{
                        background: COLORS.primary,
                        color: COLORS.textInverse,
                        borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%",
                      }}
                    >
                      {Icon && <Icon size={16} />}
                    </div>
                    <div>
                      <p
                        className="font-semibold"
                        style={{ fontSize: "var(--text-xs)", color: COLORS.textMuted }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="font-medium"
                        style={{ fontSize: "var(--text-sm)", color: COLORS.textPrimary }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={RouteNames.AboutPage} size="lg" variant="outline">
                {ABOUT_SECTION.readMore}
              </Button>
              <Button href={SOCIAL.whatsappUrl} size="lg" external>
                {ABOUT_SECTION.talkCta}
              </Button>
            </div>
          </FadeInSection>
        </div>
      </div>

      <WaveDivider fill={COLORS.surface2} variant="wave" />
    </section>
  );
}
