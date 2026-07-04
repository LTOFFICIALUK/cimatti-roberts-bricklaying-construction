import { buildBreadcrumbSchema } from "@/lib/seo/schemas";
import { JsonLdScript } from "./JsonLdScript";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

export const BreadcrumbJsonLd = ({ items }: BreadcrumbJsonLdProps) => (
  <JsonLdScript data={buildBreadcrumbSchema(items)} />
);
