import type { MetadataRoute } from "next";

import { CLINIC } from "@/constants/site";

/* Required by `output: "export"` so the file is generated at build time. */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: CLINIC.name,
    short_name: CLINIC.shortName,
    description: CLINIC.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#f8fbff",
    theme_color: "#1a5276",
    lang: "en",
    icons: [
      {
        src: "/brand/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
