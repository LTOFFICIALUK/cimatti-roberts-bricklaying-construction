import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildVerificationMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Construction",
  classification: "Bricklaying and General Construction Services",
  title: {
    default: `${siteConfig.name} | Bricklaying & Construction North Wales`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} — trusted bricklaying and construction in North Wales. 30+ years experience. Extensions, repointing, paving and more. Free quotes — Deganwy, Conwy, Llandudno.`,
  keywords: [
    "bricklayers North Wales",
    "bricklaying Conwy",
    "extensions North Wales",
    "repointing Conwy",
    "builders Deganwy",
    "construction Llandudno",
    "paving North Wales",
    "general building Conwy",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.tagline,
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 824,
        alt: `${siteConfig.name} logo`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "text/plain": "/llms.txt",
    },
  },
  manifest: "/site.webmanifest",
  verification: buildVerificationMetadata(),
  other: {
    "geo.region": "GB-WLS",
    "geo.placename": "Deganwy, Conwy",
    "geo.position": "53.3035;-3.8267",
    ICBM: "53.3035, -3.8267",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="author" href="/humans.txt" />
      </head>
      <body className={`${plusJakarta.variable} font-sans`}>
        <JsonLd />
        <Header />
        <main className="min-h-screen pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pb-0">{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
