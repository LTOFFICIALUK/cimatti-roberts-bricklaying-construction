import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";

type ServiceIndexCardProps = {
  service: Service;
  priority?: boolean;
};

export const ServiceIndexCard = ({
  service,
  priority = false,
}: ServiceIndexCardProps) => {
  const intro = service.description[0];
  const highlights = service.includes.slice(0, 3);

  return (
    <li>
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
        aria-label={`${service.title} — ${service.shortDescription}`}
      >
        <div className="relative aspect-video overflow-hidden bg-gray-200">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority={priority}
            loading="eager"
            className="object-cover object-center scale-[1.08] transition-transform duration-300 group-hover:scale-[1.14]"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 640px"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-charcoal group-hover:text-gold-dark">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">{intro}</p>
          <ul className="mt-4 space-y-2">
            {highlights.map((point) => (
              <li key={point} className="flex gap-2 text-sm leading-6 text-gray-600">
                <span aria-hidden="true" className="font-bold text-gold-dark">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
          <span className="mt-5 inline-flex text-sm font-semibold text-charcoal transition-colors group-hover:text-gold-dark">
            Find out more about {service.title.toLowerCase()} →
          </span>
        </div>
      </Link>
    </li>
  );
};
