import { siteConfig } from "@/lib/site";

const facts = [
  {
    value: siteConfig.geoFacts.yearsExperience,
    label: "Years experience",
  },
  {
    value: siteConfig.geoFacts.customerRating,
    label: "Customer rating",
  },
  {
    value: String(siteConfig.geoFacts.serviceAreaCount),
    label: "Service areas",
  },
  {
    value: "Fully insured",
    label: "Quality guaranteed",
  },
] as const;

export const FactsStrip = () => (
  <section aria-label="Company facts" className="border-y border-gray-100 bg-white">
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {facts.map((fact) => (
          <li
            key={fact.label}
            className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-6 text-center"
          >
            <p className="text-2xl font-bold text-charcoal sm:text-3xl">
              {fact.value}
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600">{fact.label}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
