export interface Testimonial {
  quote: string;
  author: string;
  source: string;
  verified?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Landscaped and fitted paving slabs. Utmost professionalism, cleanliness and precision… Over the moon with my new sitting area in my garden.",
    author: "Anwen Williams Roberts",
    source: "Facebook",
    verified: true,
  },
  {
    quote:
      "A very hard working and professional team. Everything was done to a very high standard and left tidy every day. Always punctual and very polite. We are extremely happy with our new patio and would highly recommend them to anyone.",
    author: "Craig Williams",
    source: "Facebook",
    verified: true,
  },
  {
    quote:
      "Fantastic job done by the boys, very reliable, professional and hard working. Highly recommend them to anyone looking for brickwork or construction.",
    author: "Sarah Thomas",
    source: "Facebook",
    verified: true,
  },
];
