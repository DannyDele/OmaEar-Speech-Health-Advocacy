import { GraduationCap, HeartHandshake, Stethoscope, Users } from "@/assets/icons";

import BackLink from "@/components/shared/BackLink";
import Button from "@/components/shared/Button";
import EarLogo from "@/components/shared/EarLogo";
import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { COLORS } from "@/constants/colors";
import { RouteNames } from "@/constants/routes";
import { CLINIC, FOUNDER, SOCIAL } from "@/constants/site";
import { ABOUT_DETAILS, ABOUT_VALUES } from "../about.constants";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  GraduationCap,
  HeartHandshake,
  Stethoscope,
  Users,
};

export default function AboutDetailsPage() {
  return (
    <section className="relative overflow-hidden" style={{ background: COLORS.surface }}>
      <div
        aria-hidden
        className="absolute top-12 right-8 opacity-[0.04] pointer-events-none select-none"
      >
        <EarLogo size={220} color={COLORS.primary} />
      </div>

      <div className="section-container pt-8 pb-16 md:pt-10 md:pb-24">
        <BackLink href={RouteNames.About} label="Back to About" className="mb-8" />

        <FadeInSection>
          <SectionHeader
            as="h1"
            label={ABOUT_DETAILS.label}
            title={CLINIC.name}
            subtitle={ABOUT_DETAILS.subtitle}
            className="mb-12"
          />
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          <FadeInSection direction="left">
            <div className="flex flex-col gap-6">
              <div
                className="p-7 md:p-8"
                style={{
                  background: COLORS.surface2,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: "28px 14px 28px 14px",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <h2
                  className="font-bold mb-4"
                  style={{ fontSize: "var(--text-2xl)", color: COLORS.textPrimary }}
                >
                  {ABOUT_DETAILS.offersTitle}
                </h2>
                <div
                  className="space-y-4"
                  style={{ fontSize: "var(--text-base)", color: COLORS.textSecondary }}
                >
                  <p>{CLINIC.summary}</p>
                  <p>
                    {FOUNDER.bio} {ABOUT_DETAILS.offersBody}
                  </p>
                  <p>{ABOUT_DETAILS.advocacyBody}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_VALUES.map((item, index) => {
                  const Icon = ICON_MAP[item.icon];
                  return (
                    <FadeInSection key={item.title} delay={index * 0.06}>
                      <div
                        className="h-full p-5"
                        style={{
                          background: COLORS.surface,
                          border: `1px solid ${COLORS.border}`,
                          borderRadius: "18px 8px 18px 8px",
                          boxShadow: "var(--shadow-sm)",
                        }}
                      >
                        <div
                          className="mb-4 w-11 h-11 flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryLight})`,
                            color: COLORS.textInverse,
                            borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%",
                          }}
                        >
                          {Icon && <Icon size={20} />}
                        </div>
                        <h3
                          className="font-bold mb-2"
                          style={{ fontSize: "var(--text-md)", color: COLORS.textPrimary }}
                        >
                          {item.title}
                        </h3>
                        <p style={{ fontSize: "var(--text-sm)", color: COLORS.textSecondary }}>
                          {item.description}
                        </p>
                      </div>
                    </FadeInSection>
                  );
                })}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.08}>
            <div className="sticky top-28 flex flex-col gap-5">
              <div
                className="overflow-hidden blob-morph"
                style={{
                  minHeight: 420,
                  background: COLORS.placeholderGradient,
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div className="h-full min-h-105 flex flex-col items-center justify-center gap-4 p-8">
                  <EarLogo size={84} badge />
                  <p
                    className="text-center max-w-xs"
                    style={{ fontSize: "var(--text-sm)", color: COLORS.textSecondary }}
                  >
                    {ABOUT_DETAILS.portraitNote}
                  </p>
                </div>
              </div>

              <div
                className="p-6"
                style={{
                  background: COLORS.primary,
                  color: COLORS.textInverse,
                  borderRadius: "26px 12px 26px 12px",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <p className="mb-2 font-bold" style={{ fontSize: "var(--text-lg)" }}>
                  {ABOUT_DETAILS.visitTitle}
                </p>
                <p className="mb-5" style={{ fontSize: "var(--text-sm)", color: COLORS.onDark80 }}>
                  {ABOUT_DETAILS.visitBody}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button href={SOCIAL.whatsappUrl} external variant="accent">
                    {ABOUT_DETAILS.whatsappCta}
                  </Button>
                  <Button
                    href={RouteNames.Home}
                    variant="ghost"
                    className="text-white hover:bg-white/10 hover:text-white"
                  >
                    {ABOUT_DETAILS.homeCta}
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
