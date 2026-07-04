"use client";

import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { BUSINESS_ID } from "@/lib/seo/ids";
import { siteConfig, primaryPhone, primaryPhoneDisplay } from "@/lib/site";

const brandSubtitle = siteConfig.name.slice(siteConfig.shortName.length + 1);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/areas", label: "Areas We Cover" },
  { href: "/contact", label: "Contact" },
];

interface HeaderProps {
  isChromeVisible: boolean;
}

export const Header = ({ isChromeVisible }: HeaderProps) => {
  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-100 bg-white transition-transform duration-300 ease-in-out ${
        isChromeVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 bg-white px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          rel="home"
          title={siteConfig.name}
          className="flex min-w-0 shrink items-center gap-2.5 bg-white sm:gap-3"
          aria-label={`${siteConfig.name} — Home`}
          itemScope
          itemType="https://schema.org/GeneralContractor"
          itemID={BUSINESS_ID}
        >
          <meta itemProp="name" content={siteConfig.name} />
          <meta itemProp="alternateName" content={siteConfig.shortName} />
          <meta itemProp="url" content={siteConfig.url} />
          <Image
            src="/logo.png"
            alt=""
            width={1024}
            height={824}
            className="h-10 w-auto shrink-0 sm:h-11"
            priority
            aria-hidden="true"
            itemProp="logo"
          />
          <span className="min-w-0 leading-tight">
            <span className="block text-sm font-bold text-charcoal sm:text-base">
              {siteConfig.shortName}
            </span>
            <span className="block text-xs font-medium text-gray-600 sm:text-sm">
              {brandSubtitle}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${primaryPhone}`}
            className="hidden items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-dark md:inline-flex"
            aria-label={`Call us on ${primaryPhoneDisplay}`}
          >
            <PhoneIcon />
            {primaryPhoneDisplay}
          </a>

          <Link
            href="/contact"
            className="hidden rounded-full border border-charcoal px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-charcoal hover:text-white sm:inline-block"
          >
            Free Quote
          </Link>

          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48 1.01a12.035 12.035 0 007.143 7.143c.455.163.893-.07 1.01-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
      clipRule="evenodd"
    />
  </svg>
);
