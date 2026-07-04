import { buildFaqSchema } from "@/lib/seo/schemas";
import { JsonLdScript } from "./JsonLdScript";

export const FaqJsonLd = () => <JsonLdScript data={buildFaqSchema()} />;
