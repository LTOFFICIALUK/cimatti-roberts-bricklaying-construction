import type { Metadata } from "next";
import Image from "next/image";
import { FactsStrip } from "@/components/ui/FactsStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { createPageMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "About Us",
    description:
      "Meet Sam Cimatti and Jason Roberts — co-founders with 30+ years of bricklaying and construction experience serving Deganwy, Conwy and North Wales.",
    path: "/about",
  }),
  keywords: [
    "about Cimatti Roberts builders",
    "family builders North Wales",
    "bricklaying company Conwy",
    "experienced builders Deganwy",
  ],
};

const heroImage = {
  src: "/images/projects/cover.jpg",
  alt: "Cimatti & Roberts branded work vans in Deganwy, North Wales",
};

const aboutImages = [
  {
    src: "/images/projects/stone-chimney-repointing-north-wales/stone-chimney-repointing-north-wales-overview-01.jpg",
    alt: "Stone chimney repointing by Cimatti & Roberts in North Wales",
  },
  {
    src: "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-overview-01.jpg",
    alt: "Open-plan kitchen renovation by Cimatti & Roberts in Conwy",
  },
  {
    src: "/images/projects/modern-patio-conwy/modern-patio-conwy-overview-01.jpg",
    alt: "Modern patio installation by Cimatti & Roberts in Conwy, North Wales",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
      />
      <section className="relative min-h-[360px] overflow-hidden lg:min-h-[400px]">
        <Image
          src={heroImage.src}
          alt=""
          fill
          priority
          className="object-cover object-center scale-110 blur-sm"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50" />
        <div className="relative mx-auto flex min-h-[360px] max-w-7xl flex-col justify-center px-4 py-16 text-white sm:px-6 lg:min-h-[400px] lg:px-8 lg:py-20">
          <span className="mb-4 inline-block w-fit rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-charcoal">
            About Us
          </span>
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            {siteConfig.secondaryTagline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            {siteConfig.tagline}
          </p>
        </div>
      </section>

      <FactsStrip />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <article>
              <h2 className="text-2xl font-bold text-charcoal">Our Story</h2>
              {siteConfig.aboutStory.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mt-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
              <p className="mt-4 text-gray-700">{siteConfig.intro}</p>
              <p className="mt-4 text-gray-700">{siteConfig.keyMessage}</p>
              <p className="mt-4 text-gray-700">
                Based in {siteConfig.address.town}, {siteConfig.address.county}, we serve homeowners and small commercial clients across {siteConfig.serviceArea}. The team holds a {siteConfig.geoFacts.customerRating}-star customer rating.
              </p>
            </article>
            <div className="grid grid-cols-2 gap-3">
              {aboutImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`relative overflow-hidden rounded-2xl ${
                    index === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center scale-[1.12]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Meet the Team"
            title="Sam Cimatti & Jason Roberts"
            description="Co-founders with over 30 years of combined hands-on experience. Both are contactable directly for advice and quotations."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {siteConfig.founders.map((founder) => (
              <article
                key={founder.name}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-charcoal">{founder.name}</h3>
                <p className="text-sm font-medium text-gold-dark">{founder.role}</p>
                <p className="mt-4 text-gray-600">
                  Contact {founder.name.split(" ")[0]} directly for free advice and quotations on any bricklaying or construction project in North Wales.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`tel:${founder.phone}`}
                    className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-gold-dark"
                  >
                    {founder.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${founder.whatsapp}?text=${encodeURIComponent("Hi, I'd like to request a free quote.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-green-600 hover:text-green-700"
                  >
                    WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="Quality You Can Trust"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...siteConfig.whyChooseUs, ...siteConfig.trustPoints.slice(0, 1)].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 h-1 w-10 rounded-full bg-gold" />
                  <p className="font-medium text-charcoal">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
