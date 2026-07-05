"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getImageAlt } from "@/lib/project-utils";
import type { Project } from "@/lib/projects";

type ProjectPhotoGridProps = {
  project: Project;
};

export const ProjectPhotoGrid = ({ project }: ProjectPhotoGridProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || lightboxIndex === null) return;
      setLightboxIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const handlePrevious = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + project.images.length) % project.images.length,
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % project.images.length);
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.images.map((imageSrc, index) => (
          <button
            key={imageSrc}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label={`View full size: ${getImageAlt(project, imageSrc, index)}`}
          >
            <Image
              src={imageSrc}
              alt={getImageAlt(project, imageSrc, index)}
              fill
              className="object-cover object-center scale-[1.1] transition-transform duration-300 group-hover:scale-[1.16]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Full size project photo"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close photo viewer"
          >
            <CloseIcon />
          </button>

          {project.images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Previous photo"
            >
              <ChevronLeft />
            </button>
          )}

          <div
            className="relative h-[72vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={project.images[lightboxIndex]}
              alt={getImageAlt(
                project,
                project.images[lightboxIndex],
                lightboxIndex,
              )}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {project.images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Next photo"
            >
              <ChevronRight />
            </button>
          )}

          <p className="absolute bottom-4 left-4 right-4 text-center text-sm text-gray-200">
            {getImageAlt(
              project,
              project.images[lightboxIndex],
              lightboxIndex,
            )}{" "}
            · {lightboxIndex + 1} of {project.images.length}
          </p>
        </div>
      )}
    </>
  );
};

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);
