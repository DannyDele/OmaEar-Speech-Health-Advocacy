import { CONTACT, FOUNDER } from "@/constants/site";
import type { AboutHighlight, AboutValue } from "./about.types";

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  { icon: "Star", label: "Focus", value: "Ear, speech and hearing care" },
  {
    icon: "Clock",
    label: "Experience",
    value: `Over ${FOUNDER.yearsExperience} years of clinical practice`,
  },
  { icon: "MapPin", label: "Location", value: CONTACT.address },
  {
    icon: "GraduationCap",
    label: "Leadership",
    value: "ENT specialist at the helm",
  },
];

export const ABOUT_SECTION = {
  label: "About the Clinic",
  title: "Ear, speech, and hearing care in one place",
  body: "Patients come for assessments, speech support, hearing aid fitting, and specialist ENT care. This is a clinic page, not a personal booking page.",
  yearsBadgeLabel: "Years of Expert Care",
  photoHint: "Drop clinic photo at",
  readMore: "Read More",
  talkCta: "Talk to the Clinic",
} as const;

export const ABOUT_DETAILS = {
  label: "About the Clinic",
  subtitle:
    "A specialist clinic for hearing care, speech therapy, hearing aid sales, and community advocacy, led by an ENT specialist.",
  offersTitle: "What the clinic offers",
  offersBody:
    "Care is organised around services first: hearing assessments, speech support, hearing aid sales and fitting, and ENT consultation.",
  advocacyBody:
    "Advocacy is part of that offering. omaEar Speech Health Advocacy is the clinic's foundation arm. That page covers vision, programmes, partnerships, and support. It is not the face of the homepage.",
  portraitNote:
    "This page can later hold a formal portrait, credentials, awards, clinic history, or a short note on how the clinic cares for patients.",
  visitTitle: "Ready to visit the clinic?",
  visitBody:
    "The fastest way to reach omaEar & Speech Clinic is WhatsApp or a direct call.",
  whatsappCta: "Chat on WhatsApp",
  homeCta: "Back Home",
} as const;

export const ABOUT_VALUES: AboutValue[] = [
  {
    icon: "GraduationCap",
    title: "Clinical Excellence",
    description:
      "Every decision is guided by training, precision, and proven ENT care.",
  },
  {
    icon: "HeartHandshake",
    title: "Compassion First",
    description:
      "Patients are treated with empathy, patience, and a real desire to improve quality of life.",
  },
  {
    icon: "Stethoscope",
    title: "Modern Diagnosis",
    description:
      "Advanced techniques and careful assessments help deliver confident, accurate treatment plans.",
  },
  {
    icon: "Users",
    title: "Family Care",
    description:
      "Children, adults, and older patients are all welcomed into a calm and supportive environment.",
  },
];
