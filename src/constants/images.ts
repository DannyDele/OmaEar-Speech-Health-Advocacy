/** Central image manifest — swap file paths here to update any image site-wide. */

export const IMAGES = {
  /* Hero */
  heroDoctorPortrait: "/images/hero-doctor.png",

  /* About */
  aboutDoctor: "/images/about-doctor.jpg",

  /* Gallery — add/remove entries freely */
  gallery: [
    { src: "/images/gallery-1.jpg", alt: "Clinic consultation room" },
    { src: "/images/gallery-2.jpg", alt: "Ear examination procedure" },
    { src: "/images/gallery-3.jpg", alt: "Audiology equipment" },
    { src: "/images/gallery-4.jpg", alt: "Patient consultation" },
    { src: "/images/gallery-5.jpg", alt: "Advanced hearing assessment" },
    { src: "/images/gallery-6.jpg", alt: "Ear care treatment" },
  ],

  /* Logos / brand */
  logo: "/brand/logo.svg",
  /** Tab icon only — original red/purple gradient so it stays visible at 16px. */
  favicon: "/brand/favicon.png",
} as const;
