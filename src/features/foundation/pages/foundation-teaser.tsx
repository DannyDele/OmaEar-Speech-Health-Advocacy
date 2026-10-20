import FadeInSection from "@/components/shared/FadeInSection";
import EarLogo from "@/components/shared/EarLogo";
import WaveDivider from "@/components/shared/WaveDivider";
import { RouteNames } from "@/constants/routes";
import { FOUNDATION } from "@/constants/site";
import { COLORS } from "@/constants/colors";
import { ArrowRight } from "@/assets/icons";
import Link from "next/link";

/** Homepage corner that introduces the foundation without making it the main identity. */
export default function FoundationTeaser() {
  return (
    <section
      id="advocacy"
      className="relative pt-0 pb-0 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)",
      }}
    >
      {/* One blended watermark — sits in the background, not as a foreground blob. */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 flex items-center pointer-events-none select-none opacity-[0.07]"
      >
        <EarLogo size={280} color="white" />
      </div>

      <div className="section-container relative z-10 py-10 md:py-16">
        <FadeInSection>
          <p
            className="mb-3 font-semibold uppercase tracking-[0.16em]"
            style={{ fontSize: "var(--text-xs)", color: "var(--color-accent)" }}
          >
            Our Foundation
          </p>
          <h2 className="font-bold mb-4 text-white" style={{ fontSize: "var(--text-3xl)" }}>
            {FOUNDATION.name}
          </h2>
          <p
            className="max-w-xl mb-6"
            style={{ fontSize: "var(--text-base)", color: COLORS.onDark80 }}
          >
            {FOUNDATION.about} Open this page for vision, programmes, partnerships, and account details.
          </p>
          <Link
            href={RouteNames.Foundation}
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white"
            style={{
              background: "var(--color-accent)",
              borderRadius: "16px 8px 16px 8px",
            }}
          >
            Visit the Foundation <ArrowRight size={16} />
          </Link>
        </FadeInSection>
      </div>

      <WaveDivider fill="var(--color-surface-2)" variant="curve" />
    </section>
  );
}
