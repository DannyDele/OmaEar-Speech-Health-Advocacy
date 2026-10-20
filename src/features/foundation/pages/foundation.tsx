import Link from "next/link";
import { Handshake, Landmark, Target, Users } from "@/assets/icons";

import BackLink from "@/components/shared/BackLink";
import EarLogo from "@/components/shared/EarLogo";
import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/shared/SectionHeader";
import WaveDivider from "@/components/shared/WaveDivider";
import { RouteNames } from "@/constants/routes";
import { FOUNDATION, SOCIAL } from "@/constants/site";
import { COLORS } from "@/constants/colors";
import { FOUNDATION_PROGRAMS, PARTNER_PATHS } from "../foundation.constants";
import CopyAccountNumber from "../components/copy-account-number";

/** One faint background mark per band — alternate sides so they don’t all hug the right. */
function SectionMark({
  side = "right",
  onDark = false,
}: {
  side?: "left" | "right";
  onDark?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={
        side === "left"
          ? "absolute top-8 left-4 pointer-events-none select-none opacity-[0.05]"
          : "absolute top-8 right-4 pointer-events-none select-none opacity-[0.05]"
      }
    >
      <EarLogo size={200} color={onDark ? "white" : undefined} />
    </div>
  );
}

export default function FoundationPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--color-surface)" }}>
        <SectionMark side="left" />

        <div className="section-container relative z-10 pt-8 pb-16 md:pt-10 md:pb-20">
          <BackLink href={RouteNames.Home} label="Back to Clinic" className="mb-8" />

          <FadeInSection>
            <SectionHeader
              as="h1"
              label="Foundation"
              title={FOUNDATION.name}
              subtitle={FOUNDATION.about}
              className="mb-0"
            />
          </FadeInSection>
        </div>

        <WaveDivider fill="var(--color-surface-2)" variant="wave" />
      </section>

      <section className="relative overflow-hidden" style={{ background: "var(--color-surface-2)" }}>
        <SectionMark side="right" />

        <div className="section-container relative z-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeInSection direction="left">
              <article
                className="h-full p-7"
                style={{
                  background: "white",
                  border: "1px solid var(--color-border)",
                  borderRadius: "24px 12px 24px 12px",
                }}
              >
                <div className="mb-4 text-[var(--color-primary)]">
                  <Target size={26} />
                </div>
                <h2 className="font-bold mb-3" style={{ fontSize: "var(--text-xl)" }}>
                  Vision
                </h2>
                <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-secondary)" }}>
                  {FOUNDATION.vision}
                </p>
              </article>
            </FadeInSection>

            <FadeInSection direction="right">
              <article
                className="h-full p-7"
                style={{
                  background: "white",
                  border: "1px solid var(--color-border)",
                  borderRadius: "12px 24px 12px 24px",
                }}
              >
                <div className="mb-4 text-[var(--color-primary)]">
                  <Users size={26} />
                </div>
                <h2 className="font-bold mb-3" style={{ fontSize: "var(--text-xl)" }}>
                  Mission
                </h2>
                <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-secondary)" }}>
                  {FOUNDATION.mission}
                </p>
              </article>
            </FadeInSection>
          </div>
        </div>

        <WaveDivider fill="var(--color-surface)" variant="tilt" />
      </section>

      <section className="relative overflow-hidden" style={{ background: "var(--color-surface)" }}>
        <SectionMark side="left" />

        <div className="section-container relative z-10 py-16 md:py-20">
          <FadeInSection>
            <h2 className="font-bold mb-6" style={{ fontSize: "var(--text-2xl)" }}>
              Objectives
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FOUNDATION.objectives.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 p-5"
                  style={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "16px 8px 16px 8px",
                  }}
                >
                  <span
                    className="font-extrabold"
                    style={{ fontSize: "var(--text-xl)", color: "var(--color-accent)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </FadeInSection>
        </div>

        <WaveDivider fill="var(--color-surface-2)" variant="curve" />
      </section>

      <section className="relative overflow-hidden" style={{ background: "var(--color-surface-2)" }}>
        <SectionMark side="right" />

        <div className="section-container relative z-10 py-16 md:py-20">
          <FadeInSection>
            <h2 className="font-bold mb-6" style={{ fontSize: "var(--text-2xl)" }}>
              Programmes Done
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FOUNDATION_PROGRAMS.map((program) => (
                <article
                  key={program.title}
                  className="p-6"
                  style={{
                    background: "white",
                    borderRadius: "20px 10px 20px 10px",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <h3 className="font-bold mb-2" style={{ fontSize: "var(--text-lg)" }}>
                    {program.title}
                  </h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>
                    {program.summary}
                  </p>
                </article>
              ))}
            </div>
          </FadeInSection>
        </div>

        <WaveDivider fill="var(--color-surface)" variant="zigzag" />
      </section>

      <section className="relative overflow-hidden" style={{ background: "var(--color-surface)" }}>
        <SectionMark side="left" />

        <div className="section-container relative z-10 py-16 md:py-20">
          <FadeInSection>
            <h2 className="font-bold mb-3" style={{ fontSize: "var(--text-2xl)" }}>
              Partnership
            </h2>
            <p
              className="mb-6 max-w-2xl"
              style={{ fontSize: "var(--text-base)", color: "var(--color-text-secondary)" }}
            >
              Organisations and individuals can work with the foundation in several ways. Final partnership names and logos can be added when they are confirmed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PARTNER_PATHS.map((path) => (
                <article
                  key={path.title}
                  className="flex gap-4 p-6"
                  style={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "18px 8px 18px 8px",
                  }}
                >
                  <Handshake className="shrink-0 mt-1" size={22} style={{ color: "var(--color-primary)" }} />
                  <div>
                    <h3 className="font-bold mb-2" style={{ fontSize: "var(--text-md)" }}>
                      {path.title}
                    </h3>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>
                      {path.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </FadeInSection>
        </div>

        <WaveDivider fill="var(--color-primary-dark)" variant="wave" />
      </section>

      {/* Own dark band after Partnership — full-bleed, straight into the footer */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--color-primary-dark)", color: "white" }}
      >
        <SectionMark side="right" onDark />

        <div className="section-container relative z-10 py-16 md:py-20">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-4">
              <Landmark size={24} />
              <h2 className="font-bold" style={{ fontSize: "var(--text-2xl)" }}>
                Account Details
              </h2>
            </div>
            <p className="mb-6 max-w-2xl" style={{ fontSize: "var(--text-sm)", color: COLORS.onDark75 }}>
              Support the foundation through the account below. These details will be replaced with the confirmed bank information before launch.
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              <div>
                <dt style={{ fontSize: "var(--text-xs)", color: "var(--color-accent)" }}>Bank</dt>
                <dd className="font-semibold">{FOUNDATION.bank.bankName}</dd>
              </div>
              <div>
                <dt style={{ fontSize: "var(--text-xs)", color: "var(--color-accent)" }}>Account Name</dt>
                <dd className="font-semibold">{FOUNDATION.bank.accountName}</dd>
              </div>
              <CopyAccountNumber value={FOUNDATION.bank.accountNumber} />
            </dl>
            <p className="mb-8" style={{ fontSize: "var(--text-xs)", color: COLORS.onDark55 }}>
              {FOUNDATION.bank.note}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={RouteNames.Home}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold"
                style={{
                  color: "var(--color-primary-dark)",
                  background: "white",
                  borderRadius: "18px 8px 18px 8px",
                }}
              >
                Back to Clinic
              </Link>
              <a
                href={SOCIAL.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white"
                style={{
                  background: COLORS.whatsapp,
                  borderRadius: "18px 8px 18px 8px",
                }}
              >
                Talk to Us
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
