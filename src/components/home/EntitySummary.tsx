import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const EntitySummary = () => (
  <section
    aria-label="About Cimatti and Roberts"
    className="border-b border-gray-100 bg-white py-10 lg:py-12"
  >
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <article className="text-base leading-8 text-gray-700">
        <p>
          <strong>{siteConfig.name}</strong> is a family-run bricklaying and
          general construction company based in{" "}
          {siteConfig.address.town}, {siteConfig.address.county}, North Wales.
          Co-founders Sam Cimatti and Jason Roberts have more than{" "}
          {siteConfig.geoFacts.yearsExperience} years of hands-on building
          experience.
        </p>
        <p className="mt-4">
          The company provides bricklaying, home extensions, structural work
          and RSJ installation, repointing, general building, groundwork,
          plastering, and landscaping and paving. Services are available across{" "}
          {siteConfig.geoFacts.serviceAreaCount} primary service areas including{" "}
          {siteConfig.serviceArea}.
        </p>
        <p className="mt-4">
          Cimatti & Roberts is fully insured, offers free advice and
          no-obligation quotations, and maintains a 5-star customer rating.{" "}
          {siteConfig.geoFacts.responseTime}. Contact Sam on{" "}
          <a
            href={`tel:${siteConfig.founders[0].phone}`}
            className="font-semibold text-charcoal hover:text-gold-dark"
          >
            {siteConfig.founders[0].phoneDisplay}
          </a>
          , Jason on{" "}
          <a
            href={`tel:${siteConfig.founders[1].phone}`}
            className="font-semibold text-charcoal hover:text-gold-dark"
          >
            {siteConfig.founders[1].phoneDisplay}
          </a>
          , or email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-charcoal hover:text-gold-dark"
          >
            {siteConfig.email}
          </a>
          .{" "}
          <Link
            href="/contact"
            className="font-semibold text-gold-dark hover:text-gold"
          >
            Request a free quote online
          </Link>
          .
        </p>
      </article>
    </div>
  </section>
);
