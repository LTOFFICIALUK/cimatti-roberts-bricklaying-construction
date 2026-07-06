import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Area, AreaPageContent } from "@/lib/areas";
import { getProjectsForArea } from "@/lib/area-utils";
import { getProjectPath } from "@/lib/project-utils";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import {
  primaryPhone,
  primaryPhoneDisplay,
  siteConfig,
} from "@/lib/site";

type AreaDetailTemplateProps = {
  area: Area & { page: AreaPageContent };
};

const FEATURED_PROJECT_LIMIT = 6;

export const AreaDetailTemplate = ({ area }: AreaDetailTemplateProps) => {
  const areaProjects = getProjectsForArea(area.name, projects);
  const featuredProjects = areaProjects.slice(0, FEATURED_PROJECT_LIMIT);

  return (
    <article>
      <section className="relative min-h-[380px] overflow-hidden">
        <Image
          src={area.page.heroImage}
          alt={`Construction work by ${siteConfig.shortName} in ${area.name}`}
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
                  href="/areas"
                  className="transition-colors hover:text-white"
                >
                  Areas We Cover
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-white">{area.name}</li>
            </ol>
          </nav>

          <span className="mb-4 inline-block w-fit rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-charcoal">
            {area.slug === "deganwy" ? "Our home base" : "Local builders"}
          </span>
          <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Builders in {area.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            {area.page.intro[0]}
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
                label={area.name}
                title={`Construction services in ${area.name}`}
                align="left"
              />
              <div className="space-y-4 text-base leading-8 text-gray-700">
                {area.page.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                <p>{area.page.localNote}</p>
              </div>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {area.page.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700"
                  >
                    <span aria-hidden="true" className="font-bold text-gold-dark">
                      ✓
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-sm font-bold uppercase tracking-wide text-charcoal">
                Contact
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {area.slug === "deganwy"
                  ? `Visit us at ${siteConfig.address.full}. Jason and Sam are available Mon–Sat for free advice and quotations.`
                  : `Based in Deganwy, we reach ${area.name} quickly. Call Jason or Sam directly for a site visit and free quote.`}
              </p>
              <div className="mt-5 flex flex-col gap-2 text-sm">
                {siteConfig.founders.map((founder) => (
                  <a
                    key={founder.name}
                    href={`tel:${founder.phone}`}
                    className="font-medium text-charcoal transition-colors hover:text-gold-dark"
                  >
                    {founder.name}: {founder.phoneDisplay}
                  </a>
                ))}
              </div>
              <Link
                href="/areas"
                className="mt-6 inline-flex text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
              >
                ← All areas we cover
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Our work"
              title={`Projects in ${area.name}`}
              description={
                areaProjects.length > featuredProjects.length
                  ? `${areaProjects.length} documented projects in ${area.name} — here are recent examples from our gallery.`
                  : `Real project photography from our work in ${area.name}.`
              }
              align="left"
            />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={getProjectPath(project.slug)}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                      <Image
                        src={project.coverImage}
                        alt={project.description}
                        fill
                        className="object-cover object-center scale-[1.12] transition-transform duration-300 group-hover:scale-[1.18]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-bold text-charcoal group-hover:text-gold-dark">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                        {project.description}
                      </p>
                      <span className="mt-4 text-sm font-semibold text-gold-dark">
                        View case study →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            {areaProjects.length > featuredProjects.length && (
              <div className="mt-8 text-center">
                <Link
                  href="/gallery"
                  className="text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
                >
                  Browse full gallery →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Services"
            title={`What we build in ${area.name}`}
            description="All eight services from our range — free advice and no-obligation quotes."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-colors hover:border-gold/40 hover:shadow-md"
              >
                <h3 className="font-bold text-charcoal">{service.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                  {service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Need a builder in ${area.name}?`}
        description={`Free advice and no-obligation quotations from Jason or Sam — ${siteConfig.experience} of experience across North Wales.`}
      />
    </article>
  );
};
