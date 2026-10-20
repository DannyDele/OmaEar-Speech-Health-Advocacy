import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/constants/seo";
import FoundationPage from "@/features/foundation/pages/foundation";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata = buildPageMetadata("foundation", "/foundation");

export default function FoundationRoute() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Foundation", path: "/foundation" }])} />
      <FoundationPage />
    </>
  );
}
