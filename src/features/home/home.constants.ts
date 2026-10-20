import type { HeroSlide, StatItem } from "./home.types";

export const HERO_STATS: StatItem[] = [
  { value: "Ear", label: "Hearing tinnitus-balance Care" },
  { value: "Speech", label: "speech and language therapy" },
  { value: "Aids", label: "Hearing Aid Sales" },
];

/** Swap these for real clinic photos before launch. */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=1600&q=80",
    alt: "Doctor examining patient's ear",
    tagline: "Specialist ear, speech, and hearing care in one clinic.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
    alt: "Modern ENT clinic interior",
    tagline:
      "Clinical services, hearing aid sales, and speech support under one roof.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80",
    alt: "Medical consultation with patient",
    tagline:
      "From assessment to fitting, care that patients and families can trust.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=80",
    alt: "Advanced audiological equipment",
    tagline:
      "A clinic in Lokoja serving patients, schools, and community partners.",
  },
];
