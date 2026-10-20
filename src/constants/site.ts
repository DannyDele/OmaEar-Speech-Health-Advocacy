/** Central source of truth for clinic, foundation, and contact details. */

export const CLINIC = {
  name: "OmaEar & Speech Clinic",
  shortName: "OmaClinic",
  tagline: "Ear & Speech Care",
  summary:
    "A specialist clinic for ear, speech, and hearing, tinnitus and balance care. We offer hearing aid sales, clinical services, and community advocacy.",
  focusAreas: ["Hearing Care", "Speech Therapy", "Hearing Aids", "Advocacy"],
  domain: "omaearspeechclinic.com",
} as const;

/** Founder details — used on the About page, not as the homepage identity. */
export const FOUNDER = {
  name: "Dr. Ezekiel Omale",
  shortTitle: "Dr. Omale",
  title: "Consultant Ear, Nose & Throat Specialist",
  qualifications: ["MBBS", "FWACS (ENT)", "Dip. Audiology"],
  yearsExperience: 3,
  bio: "Dr. Ezekiel Omale is a consultant ENT specialist and the founder of OmaEar & Speech Clinic. He leads clinical care at the clinic and the community work of OmaEar Speech Health Advocacy.",
} as const;

export const FOUNDATION = {
  name: "OmaEar Speech Health Advocacy",
  shortName: "The Foundation",
  about:
    "OmaEar Speech Health Advocacy is the community arm of the clinic. We work to improve access to hearing and speech care through outreach, education, and partnerships.",
  vision:
    "A society where every person can hear, speak, and participate fully in family, school, and community life.",
  mission:
    "To advocate for ear, speech, and hearing health through public education, screening programmes, and collaboration with partners who share this cause.",
  objectives: [
    "Increase awareness of ear, speech, and hearing conditions",
    "Support screening and outreach programmes in underserved communities",
    "Train and partner with schools, churches, and health workers",
    "Make hearing aids and speech support more accessible",
    "Build lasting partnerships for sustainable community impact",
  ],
  /** Replace with the real foundation account before launch. */
  bank: {
    bankName: "To be confirmed",
    accountName: "OmaEar Speech Health Advocacy",
    accountNumber: "0000000000",
    note: "Please confirm bank details before publishing this page.",
  },
} as const;

export const CONTACT = {
  phone: "09034564590",
  whatsapp: "2349034564590",
  email: "hello@omaearspeechclinic.com",
  address: "500 Unit House 21, Ganja, Lokoja, Kogi State, Nigeria",
  mapQuery: "Lokoja+Kogi+State+Nigeria",
} as const;

export const SOCIAL = {
  whatsappUrl: `https://wa.me/${CONTACT.whatsapp}?text=Hello%20OmaEar%20%26%20Speech%20Clinic%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`,
  emailUrl: `mailto:${CONTACT.email}`,
  phoneUrl: `tel:${CONTACT.phone}`,
} as const;

export const SITE_NAME = CLINIC.name;
export const SITE_DESCRIPTION = `${CLINIC.name}. ${CLINIC.tagline} ${CLINIC.summary}`;
