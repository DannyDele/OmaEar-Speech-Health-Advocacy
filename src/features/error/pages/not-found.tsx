import BackLink from "@/components/shared/BackLink";
import { CLINIC } from "@/constants/site";
import { RouteNames } from "@/constants/routes";
import { COLORS } from "@/constants/colors";

/** Branded 404 so a missed URL still feels like the clinic site. */
export default function NotFoundPage() {
  return (
    <section className="relative overflow-hidden" style={{ background: COLORS.surface }}>
      <div className="section-container flex min-h-[60vh] flex-col items-start justify-center py-16 md:py-24">
        <p
          className="mb-3 font-semibold uppercase tracking-[0.18em]"
          style={{ fontSize: "var(--text-xs)", color: COLORS.accent }}
        >
          404
        </p>
        <h1
          className="mb-3 font-bold"
          style={{ fontSize: "var(--text-3xl)", color: COLORS.textPrimary }}
        >
          Page not found
        </h1>
        <p
          className="mb-8 max-w-md"
          style={{ fontSize: "var(--text-base)", color: COLORS.textSecondary }}
        >
          That page is not on {CLINIC.shortName}. Use the links below to return to the clinic.
        </p>
        <BackLink href={RouteNames.Home} label="Back to home" />
      </div>
    </section>
  );
}
