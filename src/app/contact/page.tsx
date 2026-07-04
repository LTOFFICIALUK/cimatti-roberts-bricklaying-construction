import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/seo/metadata";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Contact Us",
    description: `Contact ${siteConfig.name} for a free quote. Call Sam on 07872 463390 or Jason on 07861 140795. Based in Deganwy, Conwy, North Wales.`,
    path: "/contact",
  }),
  keywords: [
    "contact builders Deganwy",
    "free quote bricklaying Conwy",
    "construction quote North Wales",
    "builders phone number Conwy",
  ],
};

export default function ContactPage() {
  return (
    <>
      <FaqJsonLd />
      <section className="bg-charcoal py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-charcoal">
            Contact
          </span>
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Free advice and no-obligation quotations. Contact Sam or Jason directly — available Mon–Sat.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Contact Details"
                description="We're based in Deganwy and cover all of North Wales."
                align="left"
              />

              <div className="space-y-6">
                {siteConfig.founders.map((founder) => (
                  <div
                    key={founder.name}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <h2 className="font-bold text-charcoal">{founder.name}</h2>
                    <p className="text-sm text-gold-dark">{founder.role}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={`tel:${founder.phone}`}
                        className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-gold-dark"
                        aria-label={`Call ${founder.name} on ${founder.phoneDisplay}`}
                      >
                        {founder.phoneDisplay}
                      </a>
                      <a
                        href={`https://wa.me/${founder.whatsapp}?text=${encodeURIComponent("Hi, I'd like to request a free quote for a project.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-green-600 px-5 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-50"
                        aria-label={`WhatsApp ${founder.name}`}
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="font-bold text-charcoal">Other Details</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-medium text-gray-500">Email</dt>
                      <dd>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-charcoal hover:text-gold"
                        >
                          {siteConfig.email}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">Address</dt>
                      <dd className="text-charcoal">{siteConfig.address.full}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">Hours</dt>
                      <dd className="text-charcoal">{siteConfig.hours}</dd>
                    </div>
                  </dl>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-100">
                  <iframe
                    title="Cimatti & Roberts location map"
                    src="https://maps.google.com/maps?q=57+Parc+Pentywyn,+Deganwy,+Conwy,+LL31+9FP&output=embed"
                    className="h-64 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                title="Send Us a Message"
                description="Fill in the form below and we'll get back to you as soon as possible."
                align="left"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
