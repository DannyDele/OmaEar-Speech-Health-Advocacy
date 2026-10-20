import JsonLd from "@/components/seo/JsonLd";
import { CLINIC } from "@/constants/site";
import { buildPageMetadata } from "@/constants/seo";
import ContactPage from "@/features/contact/pages/contact";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata = buildPageMetadata("contact", "/contact");

/** Thin App Router entry — UI lives in the contact feature. */
export default function ContactRoute() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <ContactPage headingAs="h1" title={`Contact ${CLINIC.name}`} />
    </>
  );
}
