import { ShieldCheck, Microscope, Heart, Clock, Award, Users } from "@/assets/icons";

import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/shared/SectionHeader";
import EarLogo from "@/components/shared/EarLogo";
import WaveDivider from "@/components/shared/WaveDivider";
import { TRUST_ITEMS } from "../why-choose.constants";
import { COLORS } from "@/constants/colors";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  ShieldCheck, Microscope, Heart, Clock, Award, Users,
};

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="relative pt-0 pb-0 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)",
      }}
    >
      {/* Decorative blob */}
      <div
        aria-hidden
        className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--color-accent)" }}
      />
      {/* Watermark ear icon */}
      <div
        aria-hidden
        className="absolute bottom-8 left-4 opacity-[0.06] pointer-events-none select-none"
      >
        <EarLogo size={180} color="white" />
      </div>

      <div className="section-container relative z-10 py-20">
        <FadeInSection>
          <SectionHeader
            label="Why Choose Us"
            title="Why Patients Choose This Clinic"
            subtitle="Ear, speech, and hearing care led by a specialist. Hearing aid sales, clear communication, and a community foundation behind the work."
            className="mb-12"
          />
        </FadeInSection>

        {/* Override heading + subtitle to white for dark bg */}
        <style>{`
          #why-choose h2,
          #why-choose .section-label { color: ${COLORS.textInverse} !important; }
          #why-choose p { color: ${COLORS.onDark70} !important; }
        `}</style>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <FadeInSection key={item.title} delay={i * 0.07}>
                <div
                  className="flex flex-col gap-4 p-6 rounded-[var(--radius-lg)] h-full transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: COLORS.onDark06,
                    border: `1px solid ${COLORS.onDark12}`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center"
                    style={{ background: COLORS.accent, color: COLORS.textInverse }}
                  >
                    {Icon && <Icon size={22} />}
                  </div>
                  <h3
                    className="font-bold"
                    style={{ fontSize: "var(--text-lg)", color: COLORS.textInverse }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: "var(--text-sm)", color: COLORS.onDark65 }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>

      {/* Bottom wave into gallery */}
      <WaveDivider fill={COLORS.surface} variant="zigzag" />
    </section>
  );
}
