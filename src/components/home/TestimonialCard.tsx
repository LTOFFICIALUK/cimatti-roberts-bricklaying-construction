import type { Testimonial } from "@/lib/testimonials";

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-4 flex gap-1 text-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="flex-1 text-gray-700">&ldquo;{testimonial.quote}&rdquo;</p>
      <footer className="mt-6 border-t border-gray-100 pt-4">
        <cite className="not-italic">
          <span className="font-semibold text-charcoal">
            {testimonial.author}
          </span>
          <span className="mt-1 block text-sm text-gray-500">
            {testimonial.source}
            {testimonial.verified && (
              <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Verified
              </span>
            )}
          </span>
        </cite>
      </footer>
    </blockquote>
  );
};

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.651l-4.753-.381-1.83-4.401z" clipRule="evenodd" />
  </svg>
);
