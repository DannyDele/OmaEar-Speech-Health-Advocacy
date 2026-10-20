import type { MetadataRoute } from "next";

import { SITE_URL } from "@/constants/seo";

/* Required by `output: "export"` so the file is generated at build time. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/foundation`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/our-world`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
