import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link href="/" className="inline-flex bg-white">
              <Image
                src="/logo.png"
                alt="Cimatti & Roberts Bricklaying & Construction"
                width={1024}
                height={824}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600">{siteConfig.tagline}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-charcoal">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/areas", label: "Areas We Cover" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-charcoal">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-600 transition-colors hover:text-gold"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-charcoal">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {siteConfig.founders.map((founder) => (
                <li key={founder.name}>
                  <p className="font-medium text-charcoal">{founder.name}</p>
                  <a
                    href={`tel:${founder.phone}`}
                    className="transition-colors hover:text-gold"
                  >
                    {founder.phoneDisplay}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <address className="mt-4 not-italic text-sm text-gray-600">
              <span className="font-medium text-charcoal">{siteConfig.name}</span>
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.town}, {siteConfig.address.county}
              <br />
              {siteConfig.address.postcode}
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-charcoal">
              Follow Us
            </h3>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gold hover:text-gold"
                aria-label="Visit our Facebook page"
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gold hover:text-gold"
                aria-label="View our Google profile"
              >
                Google
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">{siteConfig.hours}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-xs text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.secondaryTagline}</p>
        </div>
      </div>
    </footer>
  );
};
