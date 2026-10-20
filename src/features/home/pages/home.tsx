import Hero from "../components/hero";
import AboutSection from "@/features/about/pages/about";
import ServicesSection from "@/features/services/pages/services";
import GallerySection from "@/features/gallery/pages/gallery";
import WhyChooseSection from "@/features/why-choose/pages/why-choose";
import FoundationTeaser from "@/features/foundation/pages/foundation-teaser";
import FAQSection from "@/features/faq/pages/faq";
import ContactSection from "@/features/contact/pages/contact";

/**
 * Clinic homepage — services first, foundation as a dedicated corner later on the page.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseSection />
      <AboutSection />
      <GallerySection />
      <FoundationTeaser />
      <FAQSection />
      <ContactSection />
    </>
  );
}
