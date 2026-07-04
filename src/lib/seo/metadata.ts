import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const DEFAULT_OG_IMAGE = {
  url: "/logo.png",
  width: 1024,
  height: 824,
  alt: `${siteConfig.name} logo`,
  type: "image/png",
} as const;

export const PAGE_OG_IMAGES: Record<string, string> = {
  "/": "/images/projects/rear-home-extension-conwy/rear-home-extension-conwy-overview-01.jpg",
  "/about": "/images/projects/cover.jpg",
  "/services": "/images/projects/rear-home-extension-conwy/rear-home-extension-conwy-overview-01.jpg",
  "/gallery": "/images/projects/indian-sandstone-patio-conwy/indian-sandstone-patio-conwy-overview-01.jpg",
  "/areas": "/images/projects/garden-transformation-conwy/garden-transformation-conwy-overview-01.jpg",
  "/contact": "/logo.png",
};

const buildOgImage = (path: string, imagePath?: string) => {
  const src = imagePath ?? PAGE_OG_IMAGES[path] ?? DEFAULT_OG_IMAGE.url;
  return [
    {
      url: src,
      width: src === DEFAULT_OG_IMAGE.url ? DEFAULT_OG_IMAGE.width : 1200,
      height: src === DEFAULT_OG_IMAGE.url ? DEFAULT_OG_IMAGE.height : 630,
      alt:
        src === DEFAULT_OG_IMAGE.url
          ? DEFAULT_OG_IMAGE.alt
          : `${siteConfig.shortName} — ${path === "/" ? "bricklaying and construction in North Wales" : path.replace("/", "")}`,
    },
  ];
};

export const buildVerificationMetadata = (): Metadata["verification"] => {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
  const yandex = process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION;

  if (!google && !bing && !yandex) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
    ...(yandex ? { yandex } : {}),
  };
};

export const createPageMetadata = ({
  title,
  description,
  path,
  keywords,
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}): Metadata => {
  const url = `${siteConfig.url}${path}`;
  const ogImages = buildOgImage(path, image);

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title,
      description,
      url,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.map((img) => img.url),
    },
    ...(noIndex
      ? { robots: { index: false, follow: true } }
      : {}),
  };
};

export const createServiceMetadata = ({
  title,
  description,
  slug,
  image,
  keywords,
}: {
  title: string;
  description: string;
  slug: string;
  image: string;
  keywords?: string[];
}): Metadata => {
  const path = `/services/${slug}`;
  const url = `${siteConfig.url}${path}`;

  const pageTitle = `${title} | ${siteConfig.shortName}`;

  return {
    title: { absolute: pageTitle },
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
      url,
      images: [{ url: image, alt: title, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
  };
};
