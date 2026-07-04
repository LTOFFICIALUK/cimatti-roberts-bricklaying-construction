"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/TrustBar";
import { siteConfig } from "@/lib/site";

const slides = [
  {
    image:
      "/images/projects/coastal-block-extension-deganwy/coastal-block-extension-deganwy-overview-01.jpg",
    alt: "Coastal home extension blockwork by Cimatti & Roberts in Deganwy, North Wales — overview",
    headline: "North Wales' Trusted Bricklaying Specialists",
    subtext:
      "Over 30 years of hands-on experience delivering quality brickwork and construction across Conwy and beyond.",
    trustPoints: [
      "Fully insured",
      "Quality guaranteed",
      "Free, no-obligation quotes",
    ],
  },
  {
    image:
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-overview-10.jpg",
    alt: "New brick and block garage by Cimatti & Roberts in Conwy, North Wales — overview",
    headline: "Building the Future, Restoring the Past",
    subtext:
      "From new builds and extensions to repointing and brick repairs — professional results every time.",
    trustPoints: [
      "Expert bricklaying",
      "Structural work & RSJs",
      "Professional, tidy service",
    ],
  },
  {
    image:
      "/images/projects/indian-sandstone-patio-conwy/indian-sandstone-patio-conwy-detail-02.jpg",
    alt: "Indian sandstone patio with circular feature by Cimatti & Roberts in Conwy, North Wales — detail",
    headline: "No Job Too Big or Too Small",
    subtext: siteConfig.keyMessage,
    trustPoints: [
      "Extensions & new builds",
      "Paving & landscaping",
      "Contact Sam or Jason directly",
    ],
  },
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[520px] overflow-hidden lg:h-[600px]">
      {slides.map((s, index) => (
        <div
          key={s.headline}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            className="object-cover object-center scale-[1.15]"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </div>
      ))}

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative h-[22rem] max-w-2xl sm:h-[20rem] lg:h-[24rem]">
          {slides.map((s, index) => (
            <div
              key={s.headline}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
              aria-hidden={index !== current}
            >
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {index === current ? s.headline : null}
              </h1>
              {index !== current && (
                <p className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {s.headline}
                </p>
              )}
              <p className="mt-4 text-lg text-gray-200">{s.subtext}</p>
              <div className="mt-6">
                <CheckList
                  items={s.trustPoints}
                  className="[&_span]:text-gray-100 [&_svg]:text-gold"
                />
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Request a Free Quote
                </Button>
                <Button href="/services" variant="outline">
                  View Our Services
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2"
          role="tablist"
          aria-label="Hero slides"
        >
          {slides.map((s, index) => (
            <button
              key={s.headline}
              type="button"
              role="tab"
              aria-selected={index === current}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "w-8 bg-gold"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
