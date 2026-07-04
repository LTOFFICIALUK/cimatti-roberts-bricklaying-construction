import { buildGlobalSchemaGraph } from "@/lib/seo/schemas";
import { JsonLdScript } from "./JsonLdScript";

export const JsonLd = () => <JsonLdScript data={buildGlobalSchemaGraph()} />;

export { createPageMetadata, createServiceMetadata } from "@/lib/seo/metadata";
