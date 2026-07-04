"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getImageAlt, type CategoryGroup } from "@/lib/project-utils";
import type { Project } from "@/lib/projects";

interface GalleryGridProps {
  categoryGroups: CategoryGroup[];
}

export const GalleryGrid = ({ categoryGroups }: GalleryGridProps) => {
  const [activeCategory, setActiveCategory] = useState<CategoryGroup | null>(
    null,
  );
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow =
      activeCategory || activeProject || lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCategory, activeProject, lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (lightboxIndex !== null) {
        setLightboxIndex(null);
        return;
      }
      if (activeProject) {
        setActiveProject(null);
        return;
      }
      setActiveCategory(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, activeProject]);

  const handleOpenCategory = (group: CategoryGroup) => {
    setActiveCategory(group);
    setActiveProject(null);
    setLightboxIndex(null);
  };

  const handleCloseCategory = () => {
    setActiveCategory(null);
    setActiveProject(null);
    setLightboxIndex(null);
  };

  const handleOpenProject = (project: Project) => {
    setActiveProject(project);
    setLightboxIndex(null);
  };

  const handleCloseProject = () => {
    setActiveProject(null);
    setLightboxIndex(null);
  };

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryGroups.map((group) => (
          <button
            key={group.category}
            type="button"
            onClick={() => handleOpenCategory(group)}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label={`View ${group.label} projects — ${group.projectCount} projects`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
              <Image
                src={group.coverImage}
                alt={`${group.label} projects by Cimatti & Roberts in North Wales`}
                fill
                className="object-cover object-center scale-[1.15] transition-transform duration-300 group-hover:scale-[1.22]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-charcoal">
                {group.label}
              </span>
            </div>
            <div className="p-5">
              <h2 className="text-xl font-bold text-charcoal">{group.label}</h2>
              <p className="mt-2 text-sm text-gray-600">{group.summary}</p>
              <p className="mt-4 text-sm font-semibold text-gold-dark">
                {group.projectCount}{" "}
                {group.projectCount === 1 ? "project" : "projects"} ·{" "}
                {group.photoCount} photos
              </p>
            </div>
          </button>
        ))}
      </div>

      {activeCategory && !activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-charcoal/80 p-0 sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCategory.label} projects`}
          onClick={handleCloseCategory}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-t-3xl bg-white sm:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-gold-dark">
                  {activeCategory.label}
                </p>
                <h3 className="mt-1 text-xl font-bold text-charcoal sm:text-2xl">
                  {activeCategory.label} Projects
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {activeCategory.summary}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-500">
                  {activeCategory.projectCount} projects ·{" "}
                  {activeCategory.photoCount} photos
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseCategory}
                className="rounded-full border border-gray-200 p-2 text-gray-600 hover:bg-gray-50"
                aria-label="Close category"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-6">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {activeCategory.projects.map((project) => (
                  <button
                    key={project.slug}
                    type="button"
                    onClick={() => handleOpenProject(project)}
                    className="group overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    aria-label={`View ${project.title} — ${project.images.length} photos`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                      <Image
                        src={project.coverImage}
                        alt={project.description}
                        fill
                        className="object-cover object-center scale-[1.15] transition-transform duration-300 group-hover:scale-[1.22]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-base font-bold text-charcoal">
                        {project.title}
                      </h4>
                      <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                        {project.description}
                      </p>
                      <p className="mt-3 text-sm font-semibold text-gold-dark">
                        View {project.images.length}{" "}
                        {project.images.length === 1 ? "photo" : "photos"}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeProject && (
        <div
          className="fixed inset-0 z-[55] flex items-end justify-center bg-charcoal/80 p-0 sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} photos`}
          onClick={handleCloseProject}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-t-3xl bg-white sm:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-5 py-4 sm:px-6">
              <div>
                <button
                  type="button"
                  onClick={handleCloseProject}
                  className="mb-2 text-sm font-medium text-gold-dark hover:text-gold"
                >
                  ← Back to {activeCategory?.label ?? "projects"}
                </button>
                <p className="text-xs font-bold uppercase tracking-wide text-gold-dark">
                  {activeProject.category}
                </p>
                <h3 className="mt-1 text-xl font-bold text-charcoal sm:text-2xl">
                  {activeProject.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {activeProject.description}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseProject}
                className="rounded-full border border-gray-200 p-2 text-gray-600 hover:bg-gray-50"
                aria-label="Close project gallery"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {activeProject.images.map((imageSrc, index) => (
                  <button
                    key={imageSrc}
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    aria-label={`View ${getImageAlt(activeProject, imageSrc, index)}`}
                  >
                    <Image
                      src={imageSrc}
                      alt={getImageAlt(activeProject, imageSrc, index)}
                      fill
                      className="object-cover object-center scale-[1.12] transition-transform duration-300 group-hover:scale-[1.18]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeProject && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + activeProject.images.length) %
                  activeProject.images.length,
              );
            }}
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>

          <div
            className="relative h-[72vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeProject.images[lightboxIndex]}
              alt={getImageAlt(
                activeProject,
                activeProject.images[lightboxIndex],
                lightboxIndex,
              )}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex(
                (lightboxIndex + 1) % activeProject.images.length,
              );
            }}
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight />
          </button>

          <p className="absolute bottom-4 left-4 right-4 text-center text-sm text-gray-200">
            {getImageAlt(
              activeProject,
              activeProject.images[lightboxIndex],
              lightboxIndex,
            )}
          </p>
        </div>
      )}
    </>
  );
};

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);
