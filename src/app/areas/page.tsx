import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { createPageMetadata } from "@/lib/seo/metadata";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Areas We Cover",
    description: `${siteConfig.name} serves Deganwy, Conwy, Llandudno, Colwyn Bay, Abergele, Rhyl, Bangor and wider North Wales. Free quotes on all construction work.`,
    path: "/areas",
  }),
  keywords: [
    "builders Deganwy",
    "bricklayers Conwy",
    "construction Llandudno",
    "builders Colwyn Bay",
    "builders North Wales",
  ],
};

export default function AreasPage() {
  return (
    <>
      <section className="bg-charcoal py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-charcoal">
            Service Area
          </span>
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Areas We Cover in North Wales
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Based in Deganwy, Conwy — serving homeowners and businesses across North Wales with professional bricklaying and construction services.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Local Builders Near You"
            description="Don't see your area? Contact us — we cover wider North Wales."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <article
                key={area.slug}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 h-1 w-8 rounded-full bg-gold" />
                <h2 className="text-lg font-bold text-charcoal">{area.name}</h2>
                <p className="mt-3 text-sm text-gray-600">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Available Across All Areas"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gold hover:text-gold-dark"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
