import Image from "next/image";
import Link from "next/link";
import { ProjectPhotoGrid } from "@/components/gallery/ProjectPhotoGrid";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryCategoryDetails } from "@/lib/gallery";
import {
  categoryToServiceSlug,
  getProjectLocation,
  getProjectPath,
  getRelatedProjects,
  type ProjectCategory,
} from "@/lib/project-utils";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { getServiceBySlug } from "@/lib/services";
import {
  primaryPhone,
  primaryPhoneDisplay,
  siteConfig,
} from "@/lib/site";

type ProjectCaseStudyProps = {
  project: Project;
};

export const ProjectCaseStudy = ({ project }: ProjectCaseStudyProps) => {
  const location = getProjectLocation(project);
  const category = project.category as ProjectCategory;
  const categoryMeta = galleryCategoryDetails[category];
  const serviceSlug = categoryToServiceSlug[category];
  const service = getServiceBySlug(serviceSlug);
  const relatedProjects = getRelatedProjects(project, projects);

  return (
    <article>
      <section className="relative min-h-[380px] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.description}
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
                  href="/gallery"
                  className="transition-colors hover:text-white"
                >
                  Gallery
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-white">{project.title}</li>
            </ol>
          </nav>

          <span className="mb-4 inline-block w-fit rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-charcoal">
            {categoryMeta.label}
            {location ? ` · ${location}` : ""}
          </span>
          <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            {project.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">
              Request a Free Quote
            </Button>
            {service && (
              <Button href={`/services/${service.slug}`} variant="outline">
                View {service.title}
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <SectionHeading
                label="Case study"
                title={`${categoryMeta.label} project${location ? ` in ${location}` : ""}`}
                align="left"
              />
              <div className="space-y-4 text-base leading-8 text-gray-700">
                <p>{project.description}</p>
                <p>
                  This {categoryMeta.label.toLowerCase()} project was completed
                  by {siteConfig.name}
                  {location ? ` in ${location}` : " across North Wales"}, part of
                  our portfolio of real construction work across Conwy, Deganwy
                  and the wider region.
                </p>
                <p>{categoryMeta.summary}</p>
              </div>

              {service && (
                <div className="mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-gold-dark">
                    Related service
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-charcoal">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {service.shortDescription}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button href={`/services/${service.slug}`}>
                      Learn about {service.title}
                    </Button>
                    <Button
                      href={`tel:${primaryPhone}`}
                      variant="secondary"
                      ariaLabel={`Call ${primaryPhoneDisplay}`}
                    >
                      Call {primaryPhoneDisplay}
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <aside className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-sm font-bold uppercase tracking-wide text-charcoal">
                Project details
              </h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-gray-500">Category</dt>
                  <dd className="mt-1 text-gray-800">{categoryMeta.label}</dd>
                </div>
                {location && (
                  <div>
                    <dt className="font-medium text-gray-500">Location</dt>
                    <dd className="mt-1 text-gray-800">{location}</dd>
                  </div>
                )}
                <div>
                  <dt className="font-medium text-gray-500">Photos</dt>
                  <dd className="mt-1 text-gray-800">
                    {project.images.length}{" "}
                    {project.images.length === 1 ? "image" : "images"}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-500">Builder</dt>
                  <dd className="mt-1 text-gray-800">{siteConfig.name}</dd>
                </div>
              </dl>
              <Link
                href="/gallery"
                className="mt-6 inline-flex text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
              >
                ← Back to gallery
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Project photos"
            title="On-site photography"
            description={`${project.images.length} photos from this ${categoryMeta.label.toLowerCase()} project. Click any image to view full size.`}
            align="left"
          />
          <ProjectPhotoGrid project={project} />
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="More projects"
              title={`More ${categoryMeta.label.toLowerCase()} work`}
              description="Explore similar projects from our North Wales portfolio."
              align="left"
            />
            <ul className="grid gap-4 sm:grid-cols-3">
              {relatedProjects.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={getProjectPath(related.slug)}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <Image
                        src={related.coverImage}
                        alt={related.description}
                        fill
                        className="object-cover object-center scale-[1.08] transition-transform duration-300 group-hover:scale-[1.12]"
                        sizes="(max-width: 640px) 100vw, 400px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-bold text-charcoal group-hover:text-gold-dark">
                        {related.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                        {related.description}
                      </p>
                      <span className="mt-4 text-sm font-semibold text-charcoal transition-colors group-hover:text-gold-dark">
                        View case study →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTABanner
        title={`Planning a similar ${categoryMeta.label.toLowerCase()} project?`}
        description={`Free advice and no-obligation quotations from Jason or Sam${location ? ` — including ${location} and across North Wales` : " across North Wales"}.`}
      />
    </article>
  );
};
