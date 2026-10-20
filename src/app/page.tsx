import JsonLd from "@/components/seo/JsonLd";
import HomePage from "@/features/home/pages/home";
import { faqJsonLd } from "@/lib/json-ld";

/** Thin App Router entry — all UI lives in the home feature. */
export default function HomeRoute() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <HomePage />
    </>
  );
}
