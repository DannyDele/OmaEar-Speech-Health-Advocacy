import type { Service } from "./services.types";

/** Homepage services band — label, title, and intro copy. */
export const SERVICES_SECTION = {
  label: "What We Offer",
  title: "Our Clinical Services",
  subtitle:
    "Hearing care, tinnitus management, vestibular rehabilitation, Auditory rehabilitation,  speech, fluency, language therapy, hearing aid sales and fitting, Ear and speech consultation, and community advocacy, all from one clinic.",
} as const;

export const SERVICES: Service[] = [
  {
    id: "hearing-care",
    icon: "Ear",
    title: "Hearing Care",
    description:
      "Hearing assessments, audiometry, and personalised treatment plans for all degrees of hearing loss.",
  },
  {
    id: "speech-therapy",
    icon: "AudioLines",
    title: "Speech Therapy",
    description:
      "Support for speech, language, and communication needs for children and adults.",
  },
  {
    id: "hearing-aids",
    icon: "Volume2",
    title: "Hearing Aid Sales & Fitting",
    description:
      "Supply, fitting, and calibration of hearing aids matched to each patient's hearing profile.",
  },
  {
    id: "earwax-removal",
    icon: "Stethoscope",
    title: "Earwax Removal",
    description:
      "Safe earwax removal using microsuction and irrigation, performed under direct visualisation.",
  },
  {
    id: "ent-consultation",
    icon: "ClipboardList",
    title: "ENT Consultation",
    description:
      "Clinical assessment of ear, nose, and throat conditions with clear diagnosis and next steps.",
  },
  {
    id: "advocacy",
    icon: "HeartHandshake",
    title: "Health Advocacy",
    description:
      "Community education, screening, and advocacy for ear and speech health through our foundation.",
  },
];
