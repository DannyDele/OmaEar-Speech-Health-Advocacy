import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";

import JsonLd from "@/components/seo/JsonLd";
import { SEO, SEO_KEYWORDS, SITE_URL } from "@/constants/seo";
import { CLINIC } from "@/constants/site";
import SiteLayout from "@/layouts/SiteLayout";
import { clinicJsonLd, websiteJsonLd } from "@/lib/json-ld";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1a5276",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.home.title,
    template: `%s | ${CLINIC.shortName}`,
  },
  description: SEO.home.description,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: CLINIC.name }],
  creator: CLINIC.name,
  publisher: CLINIC.name,
  applicationName: CLINIC.name,
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: CLINIC.name,
    title: SEO.home.title,
    description: SEO.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.home.title,
    description: SEO.home.description,
  },
  icons: {
    icon: [{ url: "/brand/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/brand/favicon.png", type: "image/png", sizes: "512x512" }],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    "geo.region": "NG-KO",
    "geo.placename": "Lokoja",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NG" className={`${manrope.variable} h-full scroll-smooth`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={[clinicJsonLd(), websiteJsonLd()]} />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
