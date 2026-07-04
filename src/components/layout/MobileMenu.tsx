"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "@/components/layout/MobileShell";
import { siteConfig } from "@/lib/site";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
}

const contactBarPadding =
  "pb-[calc(5rem+env(safe-area-inset-bottom,0px))]";

export const MobileMenu = ({ navLinks }: MobileMenuProps) => {
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, setIsMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen]);

  const handleOpen = () => setIsMenuOpen(true);
  const handleClose = () => setIsMenuOpen(false);

  const menuOverlay = (
    <div
      className={`fixed inset-0 z-60 transition-opacity duration-300 ${
        isMenuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isMenuOpen}
    >
      <button
        type="button"
        className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
        onClick={handleClose}
        aria-label="Close menu"
        tabIndex={isMenuOpen ? 0 : -1}
      />

      <nav
        id="mobile-menu"
        className={`absolute right-0 top-0 bottom-0 flex w-full max-w-[min(100vw,22rem)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="h-1 shrink-0 bg-gold" aria-hidden="true" />

        <div className="shrink-0 border-b border-gray-100 px-5 pb-4 pt-5">
          <div className="flex items-start justify-between gap-4">
            <Link
              href="/"
              onClick={handleClose}
              className="min-w-0 flex-1"
              tabIndex={isMenuOpen ? 0 : -1}
              aria-label={`${siteConfig.shortName} — Home`}
            >
              <Image
                src="/logo.png"
                alt=""
                width={1024}
                height={824}
                className="h-10 w-auto"
                aria-hidden="true"
              />
              <p className="mt-2.5 text-xs font-medium leading-snug text-gray-500">
                {siteConfig.secondaryTagline}
              </p>
            </Link>
            <button
              type="button"
              onClick={handleClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-gold/40 hover:bg-gold/5 hover:text-charcoal"
              aria-label="Close menu"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          <div className="px-5 pt-5">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
              Navigation
            </p>
            <ul className="space-y-0.5">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={handleClose}
                      className={`group flex items-center justify-between rounded-lg border-l-[3px] py-3 pl-3.5 pr-2 text-[15px] font-medium transition-colors ${
                        isActive
                          ? "border-gold bg-gold/10 text-charcoal"
                          : "border-transparent text-gray-600 hover:border-gold/30 hover:bg-gray-50 hover:text-charcoal"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                      tabIndex={isMenuOpen ? 0 : -1}
                    >
                      {link.label}
                      <ChevronIcon
                        className={`h-4 w-4 shrink-0 transition-transform ${
                          isActive
                            ? "text-gold-dark"
                            : "text-gray-300 group-hover:translate-x-0.5 group-hover:text-gold"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={`mt-auto px-5 pt-6 ${contactBarPadding}`}>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <p className="text-sm font-medium leading-snug text-charcoal">
                {siteConfig.tagline}
              </p>
              <ul className="mt-3 space-y-2">
                {siteConfig.trustPoints.slice(0, 2).map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-xs text-gray-600"
                  >
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                onClick={handleClose}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-dark"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Get a Free Quote
              </Link>
            </div>
            <p className="mt-3 text-center text-[11px] text-gray-400">
              {siteConfig.hours}
            </p>
          </div>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={handleOpen}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-charcoal transition-colors hover:border-gold/40 hover:bg-gold/5"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        <MenuIcon />
      </button>

      {isMounted ? createPortal(menuOverlay, document.body) : null}
    </div>
  );
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
