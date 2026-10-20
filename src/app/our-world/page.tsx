import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/constants/seo";
import OurWorldPage from "@/features/gallery/pages/our-world";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata = buildPageMetadata("gallery", "/our-world");

/** Thin App Router entry — detailed gallery/world page UI lives in the gallery feature. */
export default function OurWorldRoute() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Gallery", path: "/our-world" }])} />
      <OurWorldPage />
    </>
  );
}
