import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Allow the local network IP so you can preview the dev server on your
   * phone / tablet over WiFi without Next.js blocking the JS bundles.
   * Update the IP here if your router assigns a different one.
   */
  allowedDevOrigins: [
    "192.168.169.75",
    // add more IPs here if needed, e.g. "192.168.1.100"
  ],
};

export default nextConfig;
