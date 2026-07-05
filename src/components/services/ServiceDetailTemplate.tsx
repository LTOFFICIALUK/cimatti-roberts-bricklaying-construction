import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { FaqSection } from "@/components/ui/FaqSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServiceFaqs } from "@/lib/faq";
import type { Service } from "@/lib/services";
import { services } from "@/lib/services";
import {
  primaryPhone,
  primaryPhoneDisplay,
  siteConfig,
} from "@/lib/site";

type ServiceDetailTemplateProps = {
  service: Service;
};

export const ServiceDetailTemplate = ({
  service,
}: ServiceDetailTemplateProps) => {
  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
  const serviceFaqs = getServiceFaqs(service.slug);

  return (
    <>
      <article>
      <section className="relative min-h-[380px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/75 to-charcoal/40" />
        <div className="relative mx-auto flex min-h-[380px] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-white">{service.title}</li>
            </ol>
          </nav>

          <span className="mb-4 inline-block w-fit rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-charcoal">
            North Wales
          </span>
          <h1 className="max-w-2xl text-4xl font-bold text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-200">
            {service.shortDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">
              Request a Free Quote
            </Button>
            <Button
              href={`tel:${primaryPhone}`}
              variant="outline"
              ariaLabel={`Call ${primaryPhoneDisplay}`}
            >
              Call {primaryPhoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <SectionHeading
                label={service.title}
                title={`Professional ${service.title} in North Wales`}
                align="left"
              />
              <div className="space-y-4 text-base leading-8 text-gray-700">
                {service.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <h3 className="mt-10 text-xl font-bold text-charcoal">
                What&apos;s Included
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700"
                  >
                    <span className="mr-2 font-bold text-gold-dark">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/contact">Get a Free Quote</Button>
                <Button
                  href={`tel:${primaryPhone}`}
                  variant="secondary"
                  ariaLabel={`Call ${primaryPhoneDisplay}`}
                >
                  Call {primaryPhoneDisplay}
                </Button>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="grid gap-4">
                {service.images.map((src, index) => (
                  <div
                    key={src}
                    className={`relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm ${
                      index === 0 ? "aspect-[4/3]" : "aspect-[3/2]"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${service.title} project photo ${index + 1}`}
                      fill
                      loading="eager"
                      className="object-cover object-center scale-[1.06]"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why choose us"
            title="Trusted local builders"
            description={`${siteConfig.experience} of experience delivering quality workmanship across ${siteConfig.serviceArea}.`}
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.whyChooseUs.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm leading-6 text-gray-600"
              >
                <span aria-hidden="true" className="font-bold text-gold-dark">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection
        items={serviceFaqs}
        description={`Practical questions about ${service.title.toLowerCase()} in North Wales — quotes, coverage and how we work.`}
        showContactLink
        className="border-t border-gray-100 py-16 lg:py-20"
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our services"
            title="Explore more services"
            description="From bricklaying and extensions to paving and plastering — we cover the full range of construction work in North Wales."
          />
          <ul className="grid gap-4 sm:grid-cols-3">
            {relatedServices.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/services/${related.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      loading="eager"
                      className="object-cover object-center scale-[1.08] transition-transform duration-300 group-hover:scale-[1.12]"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-bold text-charcoal group-hover:text-gold-dark">
                      {related.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                      {related.shortDescription}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-charcoal transition-colors group-hover:text-gold-dark">
                      View service →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Need ${service.title}?`}
        description="Free advice and no-obligation quotations across Deganwy, Conwy, Llandudno and all of North Wales."
      />
    </article>
    </>
  );
};
