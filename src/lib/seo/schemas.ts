import { areas } from "@/lib/areas";
import { faqs, type FaqItem } from "@/lib/faq";
import type { Service } from "@/lib/services";
import { services } from "@/lib/services";
import { BUSINESS_ID, WEBSITE_ID } from "@/lib/seo/ids";
import { siteConfig } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

const baseAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: siteConfig.address.street,
  addressLocality: siteConfig.address.town,
  addressRegion: siteConfig.address.county,
  postalCode: siteConfig.address.postcode,
  addressCountry: "GB",
};

const baseGeo = {
  "@type": "GeoCoordinates" as const,
  latitude: 53.3035,
  longitude: -3.8267,
};

const areaServed = areas.map((area) => ({
  "@type": "City" as const,
  name: area.name,
}));

export const buildGlobalSchemaGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.intro,
      inLanguage: "en-GB",
      publisher: { "@id": BUSINESS_ID },
    },
    {
      "@type": ["GeneralContractor", "LocalBusiness"],
      "@id": BUSINESS_ID,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      image: `${siteConfig.url}/logo.png`,
      url: siteConfig.url,
      telephone: siteConfig.founders.map((f) => f.phone),
      email: siteConfig.email,
      address: baseAddress,
      geo: baseGeo,
      areaServed,
      description: siteConfig.intro,
      slogan: siteConfig.tagline,
      priceRange: "££",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
      ],
      sameAs: [
        siteConfig.social.facebook,
        siteConfig.social.facebookReviews,
        siteConfig.social.google,
      ],
      founder: siteConfig.founders.map((f) => ({
        "@type": "Person",
        name: f.name,
        jobTitle: f.role,
        telephone: f.phone,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Construction Services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.shortDescription,
            url: `${siteConfig.url}/services/${service.slug}`,
          },
        })),
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: String(testimonials.length),
        bestRating: "5",
        worstRating: "5",
      },
      review: testimonials.map((testimonial) => ({
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: testimonial.author,
        },
        reviewBody: testimonial.quote,
        publisher: {
          "@type": "Organization",
          name: testimonial.source,
        },
      })),
    },
  ],
});

export const buildBreadcrumbSchema = (
  items: { name: string; path: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteConfig.url}${item.path}`,
  })),
});

export const buildServiceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.shortDescription,
  url: `${siteConfig.url}/services/${service.slug}`,
  image: `${siteConfig.url}${service.image}`,
  provider: { "@id": BUSINESS_ID },
  areaServed,
  serviceType: service.title,
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/contact`,
  },
});

export const buildFaqSchema = (items: FaqItem[] = faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
