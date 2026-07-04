import { Button } from "@/components/ui/Button";
import { primaryPhone, primaryPhoneDisplay } from "@/lib/site";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export const CTABanner = ({
  title = "Ready to Start Your Project?",
  description = "Get free advice and a no-obligation quotation from Sam or Jason. We cover all of North Wales.",
}: CTABannerProps) => {
  return (
    <section className="bg-charcoal py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Request a Free Quote
          </Button>
          <Button
            href={`tel:${primaryPhone}`}
            variant="outline"
            ariaLabel={`Call ${primaryPhoneDisplay}`}
          >
            Call {primaryPhoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
};
