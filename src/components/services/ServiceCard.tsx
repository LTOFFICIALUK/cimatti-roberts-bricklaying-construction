import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  className?: string;
  duplicate?: boolean;
  priority?: boolean;
};

export const ServiceCard = ({
  service,
  className = "",
  duplicate = false,
  priority = false,
}: ServiceCardProps) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${className}`}
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority={priority}
          loading={duplicate ? "lazy" : "eager"}
          className="object-cover object-center scale-[1.15] transition-transform duration-300 group-hover:scale-[1.22]"
          sizes="(max-width: 768px) 88vw, 380px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-charcoal">
          Learn More
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-charcoal group-hover:text-gold-dark">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {service.shortDescription}
        </p>
      </div>
    </Link>
  );
};
