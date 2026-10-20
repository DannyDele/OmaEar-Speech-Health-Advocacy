import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/constants/seo";
import AboutDetailsPage from "@/features/about/pages/about-details";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata = buildPageMetadata("about", "/about");

/** Thin App Router entry — detailed About page UI lives in the about feature. */
export default function AboutRoute() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <AboutDetailsPage />
    </>
  );
}
