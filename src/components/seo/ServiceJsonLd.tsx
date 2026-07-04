import type { Service } from "@/lib/services";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
} from "@/lib/seo/schemas";
import { JsonLdScript } from "./JsonLdScript";

type ServiceJsonLdProps = {
  service: Service;
};

export const ServiceJsonLd = ({ service }: ServiceJsonLdProps) => (
  <>
    <JsonLdScript data={buildServiceSchema(service)} />
    <JsonLdScript
      data={buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path: `/services/${service.slug}` },
      ])}
    />
  </>
);
