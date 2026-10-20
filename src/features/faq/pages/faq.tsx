import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import EarLogo from "@/components/shared/EarLogo";
import WaveDivider from "@/components/shared/WaveDivider";
import { SOCIAL } from "@/constants/site";
import { FAQ_ITEMS } from "../faq.constants";
import FaqAccordionItem from "../components/FaqAccordionItem";

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative pt-0 pb-0 overflow-hidden"
      style={{ background: "var(--color-surface-2)" }}
    >
      {/* Watermark ear */}
      <div
        aria-hidden
        className="absolute top-10 right-6 opacity-[0.04] pointer-events-none select-none"
      >
        <EarLogo size={180} color="var(--color-primary)" />
      </div>
      <div className="section-container py-16 md:py-20">
        <FadeInSection>
          <SectionHeader
            label="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Find quick answers to the most common questions about our services, appointments, and care approach."
            className="mb-12"
          />
        </FadeInSection>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <FadeInSection key={item.question} delay={i * 0.05}>
              <FaqAccordionItem {...item} index={i} />
            </FadeInSection>
          ))}
        </div>

        {/* Bottom CTA — if they still have questions */}
        <FadeInSection delay={0.3}>
          <div
            className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-[var(--radius-xl)]"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div>
              <p
                className="font-bold"
                style={{ fontSize: "var(--text-lg)", color: "var(--color-text-primary)" }}
              >
                Still have a question?
              </p>
              <p
                style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}
              >
                Send us a message and we&apos;ll get back to you quickly.
              </p>
            </div>
            <Button href={SOCIAL.whatsappUrl} size="md" external>
              Ask via WhatsApp
            </Button>
          </div>
        </FadeInSection>
      </div>

      <WaveDivider fill="var(--color-surface)" variant="tilt" flip />
    </section>
  );
}
