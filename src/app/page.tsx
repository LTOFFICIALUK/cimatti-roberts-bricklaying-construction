import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EntitySummary } from "@/components/home/EntitySummary";
import { AboutSlideshow } from "@/components/home/AboutSlideshow";
import { HeroSlider } from "@/components/home/HeroSlider";
import { TestimonialCard } from "@/components/home/TestimonialCard";
import { ServiceCarousel } from "@/components/services/ServiceCarousel";
import { ContactForm } from "@/components/contact/ContactForm";
import { TrustBar, CheckList } from "@/components/ui/TrustBar";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { FaqSection } from "@/components/ui/FaqSection";
import { createPageMetadata } from "@/lib/seo/metadata";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { faqs } from "@/lib/faq";
import { getProjectPath } from "@/lib/project-utils";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Bricklaying & Construction North Wales",
    description:
      "Trusted bricklaying and construction in Deganwy, Conwy and North Wales. 30+ years experience. Free quotes on extensions, repointing, paving and more.",
    path: "/",
  }),
  keywords: [
    "bricklayers North Wales",
    "builders Deganwy",
    "construction Conwy",
    "extensions Llandudno",
    "repointing North Wales",
  ],
};

const featuredProjects = projects.filter((project) =>
  [
    "rear-home-extension-conwy",
    "garden-transformation-conwy",
    "indian-sandstone-patio-conwy",
    "brick-garage-construction-conwy",
  ].includes(project.slug),
);

const aboutSlides = featuredProjects.map((project) => ({
  src: project.coverImage,
  alt: project.description,
  caption: project.title,
}));

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <HeroSlider />
      <EntitySummary />
      <TrustBar />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AboutSlideshow slides={aboutSlides} />

            <div>
              <SectionHeading
                label="About Us"
                title="Trusted Local Builders in North Wales"
                description={siteConfig.intro}
                align="left"
              />
              <CheckList items={siteConfig.trustPoints} className="mb-6" />
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold"
              >
                Learn more about us
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Complete Construction Services"
            description="From bricklaying and extensions to paving and plastering — every service from our flyer, delivered with 30+ years of experience."
          />
        </div>
        <ServiceCarousel services={services} />
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              label="Our Work"
              title="Recent Projects"
              description="Real project photos from our work across North Wales."
              align="left"
            />
            <Link
              href="/gallery"
              className="shrink-0 rounded-full border border-charcoal px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-charcoal hover:text-white"
            >
              View Full Gallery
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={getProjectPath(project.slug)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label={`View case study: ${project.title}`}
              >
                <Image
                  src={project.coverImage}
                  alt={project.description}
                  fill
                  className="object-cover object-center scale-[1.12] transition-transform duration-300 group-hover:scale-[1.18]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View case study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="What Our Customers Say"
            description="Trusted by homeowners across North Wales."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} testimonial={testimonial} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button
              href={siteConfig.social.facebookReviews}
              ariaLabel="Read all customer reviews on Facebook"
            >
              Read all reviews
            </Button>
          </div>
        </div>
      </section>

      <FaqSection
        items={faqs}
        className="border-t border-gray-100 py-16 lg:py-24"
      />

      <section className="py-16 lg:py-24" id="contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label="Get In Touch"
                title="Request a Free Quote"
                description="Fill in the form and Jason or Sam will get back to you. Or call us directly — we're available Mon–Sat."
                align="left"
              />
              <CheckList items={siteConfig.whyChooseUs} />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
