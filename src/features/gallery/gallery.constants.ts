import type { GalleryCategory, GalleryItem } from "./gallery.types";

/**
 * Full gallery archive. Append new photos here — the detail page shows
 * them in pages of 12, so 50 images stay light on first load.
 * Reuse placeholder paths until real files are dropped into /public/images/.
 */
export const GALLERY_PHOTOS: GalleryItem[] = [
  { id: "clinic-room", src: "/images/gallery-1.jpg", alt: "Clinic consultation room", category: "clinic" },
  { id: "ear-exam", src: "/images/gallery-2.jpg", alt: "Ear examination", category: "care" },
  { id: "audiology", src: "/images/gallery-3.jpg", alt: "Audiology equipment", category: "clinic" },
  { id: "consult", src: "/images/gallery-4.jpg", alt: "Patient consultation", category: "care" },
  { id: "assessment", src: "/images/gallery-5.jpg", alt: "Hearing assessment", category: "care" },
  { id: "treatment", src: "/images/gallery-6.jpg", alt: "Ear care treatment", category: "care" },
  { id: "waiting", src: "/images/gallery-1.jpg", alt: "Waiting area", category: "clinic" },
  { id: "fitting", src: "/images/gallery-3.jpg", alt: "Hearing aid fitting", category: "care" },
  { id: "screening", src: "/images/gallery-2.jpg", alt: "Community hearing screening", category: "programmes" },
  { id: "school", src: "/images/gallery-5.jpg", alt: "School awareness session", category: "programmes" },
  { id: "reception", src: "/images/gallery-4.jpg", alt: "Clinic reception", category: "clinic" },
  { id: "diagnostics", src: "/images/gallery-3.jpg", alt: "Diagnostic suite", category: "clinic" },
  { id: "child-care", src: "/images/gallery-6.jpg", alt: "Paediatric hearing check", category: "care" },
  { id: "outreach", src: "/images/gallery-2.jpg", alt: "Outreach day", category: "programmes" },
  { id: "advocacy", src: "/images/gallery-1.jpg", alt: "Health advocacy visit", category: "programmes" },
  { id: "follow-up", src: "/images/gallery-4.jpg", alt: "Follow-up appointment", category: "care" },
  { id: "lab", src: "/images/gallery-3.jpg", alt: "Clinic workroom", category: "clinic" },
  { id: "training", src: "/images/gallery-5.jpg", alt: "Training session", category: "programmes" },
  { id: "counsel", src: "/images/gallery-6.jpg", alt: "Family counselling", category: "care" },
  { id: "exterior", src: "/images/gallery-1.jpg", alt: "Clinic exterior", category: "clinic" },
  { id: "group", src: "/images/gallery-2.jpg", alt: "Community group session", category: "programmes" },
  { id: "device", src: "/images/gallery-3.jpg", alt: "Hearing device display", category: "care" },
  { id: "speech", src: "/images/gallery-5.jpg", alt: "Speech therapy room", category: "clinic" },
  { id: "partner", src: "/images/gallery-4.jpg", alt: "Partner programme", category: "programmes" },
];

/** First six photos used on the homepage preview. */
export const GALLERY_PREVIEW = GALLERY_PHOTOS.slice(0, 6);

export const GALLERY_FILTERS: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "clinic", label: "Clinic" },
  { id: "care", label: "Care" },
  { id: "programmes", label: "Programmes" },
];

/** How many thumbnails to render before “Show more”. */
export const GALLERY_PAGE_SIZE = 12;
