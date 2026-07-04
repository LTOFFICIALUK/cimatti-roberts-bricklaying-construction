import type { Metadata } from "next";
import Link from "next/link";
import { ServiceIndexCard } from "@/components/services/ServiceIndexCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { createPageMetadata } from "@/lib/seo/metadata";
import { services } from "@/lib/services";
import {
  primaryPhone,
  primaryPhoneDisplay,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Our Services",
    description: `Full range of bricklaying and construction services from ${siteConfig.name} in North Wales — extensions, repointing, RSJs, paving, plastering, groundwork and more. Free quotes.`,
    path: "/services",
  }),
  keywords: [
    "construction services North Wales",
    "bricklaying services Conwy",
    "building services Deganwy",
    "extensions repointing paving North Wales",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-charcoal py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-charcoal">
            Our Services
          </span>
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Complete Construction Services in North Wales
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            All 8 services from our range — delivered with {siteConfig.experience}{" "}
            of experience. Free advice and no-obligation quotations on every job.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Trusted Local Builders"
            title="Why choose Cimatti & Roberts?"
            align="left"
          />
          <p className="-mt-4 mb-6 max-w-3xl text-base leading-8 text-gray-600">
            {siteConfig.intro} Sam and Jason are contactable directly on every
            project — from garden walls and repointing to full extensions and new
            builds across Deganwy, Conwy and wider North Wales.
          </p>

          <ul className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.whyChooseUs.map((point) => (
              <li
                key={point}
                className="flex gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-600"
              >
                <span aria-hidden="true" className="font-bold text-gold-dark">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <p className="mb-10 max-w-3xl text-base leading-8 text-gray-600">
            Select a service below for full details and related project photos,
            then get in touch for free advice and a no-obligation quotation.
          </p>

          <ul className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <ServiceIndexCard
                key={service.slug}
                service={service}
                priority={index < 2}
              />
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact">Request a Free Quote</Button>
            <Button
              href={`tel:${primaryPhone}`}
              variant="secondary"
              ariaLabel={`Call ${primaryPhoneDisplay}`}
            >
              Call {primaryPhoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-2xl font-bold text-charcoal">
                  Serving North Wales
                </h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {siteConfig.serviceArea}
                </p>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {siteConfig.address.full}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/areas"
                    className="text-sm font-semibold text-gold-dark hover:text-gold"
                  >
                    View areas we cover →
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-charcoal hover:text-gold-dark"
                  >
                    Get in touch →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Speak to us directly
                </p>
                <ul className="mt-4 space-y-4">
                  {siteConfig.founders.map((founder) => (
                    <li key={founder.name}>
                      <p className="font-semibold text-charcoal">{founder.name}</p>
                      <a
                        href={`tel:${founder.phone}`}
                        className="text-sm text-gray-600 transition-colors hover:text-gold-dark"
                      >
                        {founder.phoneDisplay}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500">{siteConfig.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};
