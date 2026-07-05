import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CTABanner } from "@/components/ui/CTABanner";
import { createPageMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { projects } from "@/lib/projects";
import { buildCategoryGroups } from "@/lib/project-utils";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Project Gallery North Wales",
    description:
      "Browse 40+ real construction projects — bricklaying, extensions, paving, structural work and repointing across Conwy, Deganwy and North Wales.",
    path: "/gallery",
  }),
  keywords: [
    "construction project gallery North Wales",
    "bricklaying photos Conwy",
    "extension projects Deganwy",
    "paving patio gallery North Wales",
    `${siteConfig.name} projects`,
  ],
};

const categoryGroups = buildCategoryGroups(projects);

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />
      <section className="bg-charcoal py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-charcoal">
            Our Work
          </span>
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Project Gallery
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-600">
            {categoryGroups.reduce((total, group) => total + group.projectCount, 0)}{" "}
            projects ·{" "}
            {categoryGroups.reduce((total, group) => total + group.photoCount, 0)}{" "}
            photos across {categoryGroups.length} categories
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            Browse by category and open individual case studies with full
            project photography across North Wales.
          </p>
          <div className="mt-10">
            <GalleryGrid categoryGroups={categoryGroups} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Like What You See?"
        description="Get in touch for a free quotation on your next project."
      />
    </>
  );
}
