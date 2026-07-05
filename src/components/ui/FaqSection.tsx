import Link from "next/link";
import type { FaqItem } from "@/lib/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FaqSectionProps = {
  items: FaqItem[];
  id?: string;
  className?: string;
  showContactLink?: boolean;
  description?: string;
};

export const FaqSection = ({
  items,
  id = "faq",
  className = "bg-gray-50 py-16 lg:py-24",
  showContactLink = false,
  description = "Common questions about our bricklaying and construction services in North Wales.",
}: FaqSectionProps) => (
  <section id={id} className={className}>
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="FAQ"
        title="Frequently Asked Questions"
        description={description}
      />
      <div className="space-y-3">
        {items.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-gray-100 bg-white shadow-sm open:shadow-md"
          >
            <summary className="cursor-pointer list-none px-6 py-4 text-base font-semibold text-charcoal marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-gold-dark transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <div className="border-t border-gray-100 px-6 pb-5 pt-4">
              <p className="text-sm leading-7 text-gray-600">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
      {showContactLink && (
        <p className="mt-8 text-center text-sm text-gray-600">
          Still have a question?{" "}
          <Link
            href="/contact"
            className="font-semibold text-gold-dark hover:text-gold"
          >
            Get in touch for a free quote
          </Link>
        </p>
      )}
    </div>
  </section>
);
