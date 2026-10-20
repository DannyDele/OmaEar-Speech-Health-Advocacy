import type { MetadataRoute } from "next";

import { SITE_URL } from "@/constants/seo";

/* Required by `output: "export"` so the file is generated at build time. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/experience", "/projects"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
