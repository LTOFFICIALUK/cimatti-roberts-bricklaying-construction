import type { FaqItem } from "@/lib/faq";
import { buildFaqSchema } from "@/lib/seo/schemas";
import { JsonLdScript } from "./JsonLdScript";

type FaqJsonLdProps = {
  items?: FaqItem[];
};

export const FaqJsonLd = ({ items }: FaqJsonLdProps) => (
  <JsonLdScript data={buildFaqSchema(items)} />
);
