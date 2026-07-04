"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5 shrink-0 text-gold"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

const TrustBarItems = forwardRef<
  HTMLUListElement,
  { items: readonly string[]; ariaHidden?: boolean }
>(({ items, ariaHidden = false }, ref) => (
  <ul
    ref={ref}
    className="flex shrink-0 items-center gap-10 whitespace-nowrap px-5 sm:gap-12 sm:px-6"
    aria-hidden={ariaHidden || undefined}
  >
    {items.map((item) => (
      <li
        key={`${ariaHidden ? "clone-" : ""}${item}`}
        className="flex shrink-0 items-center gap-3 text-sm font-medium text-charcoal"
      >
        <CheckIcon />
        {item}
      </li>
    ))}
  </ul>
));

TrustBarItems.displayName = "TrustBarItems";

export const TrustBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLUListElement>(null);
  const [shouldScrollDesktop, setShouldScrollDesktop] = useState(false);

  const items = siteConfig.whyChooseUs;

  useEffect(() => {
    const container = containerRef.current;
    const set = setRef.current;
    if (!container || !set) return;

    const checkOverflow = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setShouldScrollDesktop(set.scrollWidth > container.clientWidth + 1);
      }
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(container);
    observer.observe(set);
    window.addEventListener("resize", checkOverflow);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <section
      className="border-y border-gray-100 bg-gray-50 py-6"
      aria-label="Why choose us"
    >
      <div ref={containerRef} className="overflow-hidden">
        {/* Mobile: always scroll endlessly */}
        <div className="trust-marquee-track trust-marquee-mobile flex w-max md:hidden">
          <TrustBarItems items={items} />
          <TrustBarItems items={items} ariaHidden />
        </div>

        {/* Desktop: scroll only when content overflows */}
        <div
          className={`hidden w-max md:flex ${
            shouldScrollDesktop ? "trust-marquee-track" : "mx-auto"
          }`}
        >
          <TrustBarItems ref={setRef} items={items} />
          {shouldScrollDesktop && (
            <TrustBarItems items={items} ariaHidden />
          )}
        </div>
      </div>
    </section>
  );
};

export const CheckList = ({
  items,
  className = "",
}: {
  items: readonly string[] | string[];
  className?: string;
}) => {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-700">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};
