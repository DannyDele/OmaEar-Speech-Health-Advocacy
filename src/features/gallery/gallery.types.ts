export type GalleryCategory = "clinic" | "care" | "programmes";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
};
