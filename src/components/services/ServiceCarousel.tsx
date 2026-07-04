"use client";

import { useEffect, useLayoutEffect, useRef, useState, type PointerEvent } from "react";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import type { Service } from "@/lib/services";

type ServiceCarouselProps = {
  services: Service[];
};

const SCROLL_DURATION_MS = 36000;
const DRAG_AXIS_THRESHOLD_PX = 8;
const CARD_CLASS = "w-[min(88vw,340px)] shrink-0 sm:w-[380px]";

const mod = (value: number, size: number) => ((value % size) + size) % size;

const MobileServiceCarousel = ({ services }: { services: Service[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const dragRef = useRef<{
    startX: number;
    startY: number;
    startOffset: number;
    axis: "x" | "y" | null;
    pointerId: number | null;
  }>({
    startX: 0,
    startY: 0,
    startOffset: 0,
    axis: null,
    pointerId: null,
  });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const mobileItems = [...services, ...services];
  const setCount = services.length;

  const measureSetWidth = () => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.scrollWidth / 2;
  };

  const applyTransform = () => {
    const track = trackRef.current;
    const setWidth = setWidthRef.current;
    if (!track || setWidth <= 0) return;

    track.style.transform = `translate3d(${-mod(offsetRef.current, setWidth)}px, 0, 0)`;
  };

  const syncMeasurements = () => {
    const previousSetWidth = setWidthRef.current;
    const nextSetWidth = measureSetWidth();
    if (nextSetWidth <= 0) return;

    if (previousSetWidth > 0) {
      const progress = mod(offsetRef.current, previousSetWidth) / previousSetWidth;
      offsetRef.current = progress * nextSetWidth;
    }

    setWidthRef.current = nextSetWidth;
    applyTransform();
  };

  useLayoutEffect(() => {
    syncMeasurements();

    const handleResize = () => syncMeasurements();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [services]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      lastFrameTimeRef.current = null;
      return;
    }

    const tick = (timestamp: number) => {
      const setWidth = setWidthRef.current;

      if (!isPausedRef.current && setWidth > 0) {
        const lastFrameTime = lastFrameTimeRef.current ?? timestamp;
        const delta = timestamp - lastFrameTime;
        lastFrameTimeRef.current = timestamp;

        offsetRef.current += (setWidth / SCROLL_DURATION_MS) * delta;
        applyTransform();
      } else {
        lastFrameTimeRef.current = null;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastFrameTimeRef.current = null;
    };
  }, [prefersReducedMotion]);

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      startOffset: offsetRef.current,
      axis: null,
      pointerId: event.pointerId,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;

    if (!drag.axis) {
      if (Math.abs(deltaX) < DRAG_AXIS_THRESHOLD_PX && Math.abs(deltaY) < DRAG_AXIS_THRESHOLD_PX) {
        return;
      }

      drag.axis = Math.abs(deltaX) > Math.abs(deltaY) ? "x" : "y";

      if (drag.axis === "y") {
        drag.pointerId = null;
        return;
      }

      isPausedRef.current = true;
      lastFrameTimeRef.current = null;
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    if (drag.axis !== "x") return;

    offsetRef.current = drag.startOffset - deltaX;
    applyTransform();
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;

    if (drag.axis === "x") {
      isPausedRef.current = false;
      lastFrameTimeRef.current = null;

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    }

    drag.axis = null;
    drag.pointerId = null;
  };

  return (
    <div className="-mx-4 md:hidden">
      <div className="flex">
        <div aria-hidden="true" className="w-4 shrink-0" />
        <div
          className="min-w-0 flex-1 touch-pan-y overflow-hidden"
          style={{ touchAction: "pan-y" }}
          aria-label="Construction services. Swipe left or right to explore."
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
        >
          <div ref={trackRef} className="flex w-max gap-4 pr-4 will-change-transform">
            {mobileItems.map((service, index) => (
              <ServiceCard
                key={`${service.slug}-${index}`}
                service={service}
                className={CARD_CLASS}
                duplicate={index >= setCount}
                priority={index < 2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServiceCarousel = ({ services }: ServiceCarouselProps) => {
  const tickerItems = [...services, ...services];

  return (
    <div>
      <MobileServiceCarousel services={services} />

      <div
        className="service-ticker-mask relative hidden overflow-hidden md:block"
        aria-label="Construction services"
      >
        <div className="service-ticker-track flex w-max gap-4">
          {tickerItems.map((service, index) => (
            <ServiceCard
              key={`${service.slug}-${index}`}
              service={service}
              className={CARD_CLASS}
              duplicate={index >= services.length}
              priority={index < 2}
            />
          ))}
        </div>
      </div>

      <noscript>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </noscript>

      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                See more
              </p>
              <h3 className="mt-2 text-2xl font-bold text-charcoal">
                Every service from our range, delivered with 30+ years of experience
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                From bricklaying and extensions to paving, plastering and structural work —
                explore everything Cimatti & Roberts offers across North Wales.
              </p>
            </div>
            <Button href="/services">See all services</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
