import { ImageResponse } from "next/og";

import { CLINIC, CONTACT } from "@/constants/site";

export const alt = `${CLINIC.name} in Lokoja`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
/* Required by `output: "export"` so the image is generated at build time. */
export const dynamic = "force-static";

/** Social preview image. ImageResponse only allows a limited CSS subset. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#154360",
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#1abc9c",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {CLINIC.shortName}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 900,
              marginTop: 16,
            }}
          >
            {CLINIC.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(255,255,255,0.8)",
              marginTop: 16,
            }}
          >
            {CLINIC.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Hearing care, speech therapy, and ENT consultation. {CONTACT.address}
        </div>
      </div>
    ),
    { ...size },
  );
}
