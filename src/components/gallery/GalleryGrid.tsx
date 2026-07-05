import Image from "next/image";
import Link from "next/link";
import { getProjectPath, type CategoryGroup } from "@/lib/project-utils";

interface GalleryGridProps {
  categoryGroups: CategoryGroup[];
}

export const GalleryGrid = ({ categoryGroups }: GalleryGridProps) => {
  return (
    <div className="space-y-16">
      <nav
        aria-label="Gallery categories"
        className="flex flex-wrap justify-center gap-2"
      >
        {categoryGroups.map((group) => (
          <a
            key={group.category}
            href={`#${group.category}`}
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gold hover:text-gold-dark"
          >
            {group.label} ({group.projectCount})
          </a>
        ))}
      </nav>

      {categoryGroups.map((group) => (
        <section
          key={group.category}
          id={group.category}
          className="scroll-mt-28"
        >
          <div className="mb-8 border-b border-gray-100 pb-6">
            <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
              {group.label}
            </h2>
            <p className="mt-2 max-w-3xl text-gray-600">{group.summary}</p>
            <p className="mt-2 text-sm font-medium text-gray-500">
              {group.projectCount}{" "}
              {group.projectCount === 1 ? "project" : "projects"} ·{" "}
              {group.photoCount} photos
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.projects.map((project) => (
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
                      className="object-cover object-center scale-[1.15] transition-transform duration-300 group-hover:scale-[1.22]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="absolute bottom-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-charcoal">
                      {group.label}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-charcoal group-hover:text-gold-dark">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                      {project.description}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-gold-dark">
                      View case study · {project.images.length}{" "}
                      {project.images.length === 1 ? "photo" : "photos"}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
