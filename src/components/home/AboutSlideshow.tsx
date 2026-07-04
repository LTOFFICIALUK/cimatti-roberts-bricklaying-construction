"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

interface AboutSlide {
  src: string;
  alt: string;
  caption: string;
}

interface AboutSlideshowProps {
  slides: AboutSlide[];
}

export const AboutSlideshow = ({ slides }: AboutSlideshowProps) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideCount = slides.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (slideCount === 0) return;
      setCurrent((index + slideCount) % slideCount);
    },
    [slideCount],
  );

  const handlePrevious = useCallback(() => {
    goToSlide(current - 1);
  }, [current, goToSlide]);

  const handleNext = useCallback(() => {
    goToSlide(current + 1);
  }, [current, goToSlide]);

  useEffect(() => {
    if (isPaused || slideCount <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, slideCount]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") handlePrevious();
      if (event.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrevious]);

  if (slideCount === 0) return null;

  const slide = slides[current];

  return (
    <div
      className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-charcoal shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {slides.map((item, index) => (
        <div
          key={item.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
            index === current
              ? "z-10 opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover object-center scale-[1.15]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent px-6 pb-16 pt-20 sm:px-8">
        <p className="text-sm font-semibold text-white sm:text-base">
          {slide.caption}
        </p>
      </div>

      {slideCount > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal opacity-0 shadow-md transition-all hover:bg-white focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold group-hover:opacity-100 sm:opacity-100"
            aria-label="Previous project photo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal opacity-0 shadow-md transition-all hover:bg-white focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold group-hover:opacity-100 sm:opacity-100"
            aria-label="Next project photo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2"
            role="tablist"
            aria-label="Project photos"
          >
            {slides.map((item, index) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={index === current}
                aria-label={`Show project photo ${index + 1}`}
                onClick={() => setCurrent(index)}
                className="flex h-8 w-8 items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all ${
                    index === current
                      ? "h-2 w-8 bg-gold"
                      : "h-2 w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
