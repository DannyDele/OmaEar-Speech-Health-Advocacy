import { CONTACT, CLINIC, FOUNDER, FOUNDATION } from "@/constants/site";
import { SITE_URL } from "@/constants/seo";
import { FAQ_ITEMS } from "@/features/faq/faq.constants";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: CLINIC.name,
    alternateName: CLINIC.shortName,
    url: SITE_URL,
    inLanguage: "en-NG",
    publisher: {
      "@type": "MedicalClinic",
      name: CLINIC.name,
    },
  };
}

export function clinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: CLINIC.name,
    alternateName: CLINIC.shortName,
    url: SITE_URL,
    description: CLINIC.summary,
    telephone: `+${CONTACT.whatsapp}`,
    email: CONTACT.email,
    image: `${SITE_URL}/brand/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Lokoja",
      addressRegion: "Kogi State",
      addressCountry: "NG",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Kogi State",
    },
    medicalSpecialty: ["Otolaryngologic", "Audiology", "SpeechPathology"],
    founder: {
      "@type": "Person",
      name: FOUNDER.name,
      jobTitle: FOUNDER.title,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Clinical services",
      itemListElement: CLINIC.focusAreas.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
    department: {
      "@type": "NGO",
      name: FOUNDATION.name,
      url: `${SITE_URL}/foundation`,
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    ],
  };
}
