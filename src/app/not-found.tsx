import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Page Not Found",
  description:
    "The page you are looking for could not be found. Return to Cimatti & Roberts Bricklaying & Construction or contact us for help.",
  path: "/404",
  noIndex: true,
});

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <span className="mb-4 inline-block rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold-dark">
        404
      </span>
      <h1 className="text-4xl font-bold text-charcoal sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-gray-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" variant="primary">
          Back to Home
        </Button>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-charcoal px-6 py-3 text-sm font-semibold text-charcoal hover:bg-charcoal hover:text-white"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
