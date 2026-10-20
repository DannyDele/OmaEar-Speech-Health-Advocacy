import type { Metadata } from "next";

import { CLINIC, CONTACT, FOUNDER, FOUNDATION } from "./site";

export const SITE_URL = `https://${CLINIC.domain}`;

export const SEO = {
  home: {
    title: `${CLINIC.name} | Hearing, Speech and ENT Care in Lokoja`,
    description: `${CLINIC.name} in Lokoja, Kogi State. Hearing assessments, speech therapy, hearing aid sales and fitting, and ENT consultation. Contact us on WhatsApp or visit the clinic.`,
  },
  about: {
    title: "About",
    description: `Learn about ${CLINIC.name} in Lokoja. Ear, speech, and hearing care founded by ${FOUNDER.name}, ${FOUNDER.title}.`,
  },
  foundation: {
    title: FOUNDATION.name,
    description: `${FOUNDATION.about} Based in Lokoja, Kogi State. Vision, programmes, partnerships, and how to support the work.`,
  },
  gallery: {
    title: "Clinic Gallery",
    description: `Photos from ${CLINIC.name} in Lokoja. Clinic rooms, care, and community programmes.`,
  },
  contact: {
    title: "Contact",
    description: `Reach ${CLINIC.name} in Lokoja by WhatsApp, phone, email, or visit. ${CONTACT.address}. Phone ${CONTACT.phone}.`,
  },
} as const;

export const SEO_KEYWORDS = [
  "hearing clinic Lokoja",
  "ENT clinic Kogi",
  "speech therapy Lokoja",
  "hearing aids Nigeria",
  "ear clinic Lokoja",
  "audiology Kogi State",
  CLINIC.name,
  FOUNDATION.name,
] as const;

type IndexablePage = Exclude<keyof typeof SEO, "home">;

/** Unique title, description, canonical, and social tags for an indexable route. */
export function buildPageMetadata(page: IndexablePage, path: string): Metadata {
  const { title, description } = SEO[page];
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
