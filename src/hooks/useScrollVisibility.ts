"use client";

import { useEffect, useRef, useState } from "react";

const SCROLL_THRESHOLD = 8;
const TOP_OFFSET = 64;

export const useScrollVisibility = (forceVisible = false) => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;

        if (currentScrollY <= TOP_OFFSET) {
          setIsVisible(true);
        } else if (delta > SCROLL_THRESHOLD) {
          setIsVisible(false);
        } else if (delta < -SCROLL_THRESHOLD) {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return forceVisible || isVisible;
};
