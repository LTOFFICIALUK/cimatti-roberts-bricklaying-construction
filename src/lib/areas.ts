export interface AreaPageContent {
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  localNote: string;
  highlights: string[];
  heroImage: string;
}

export interface Area {
  name: string;
  slug: string;
  description: string;
  page?: AreaPageContent;
}

export const areas: Area[] = [
  {
    name: "Deganwy",
    slug: "deganwy",
    description:
      "Based in Deganwy, Cimatti & Roberts is your local bricklaying and construction team. From garden walls to full extensions, we provide free quotes and professional results right on your doorstep.",
    page: {
      seoTitle: "Builders in Deganwy",
      seoDescription:
        "Bricklaying and construction in Deganwy from your local team at 57 Parc Pentywyn. Extensions, repointing, paving and more. Free quotes from Jason and Sam.",
      heroImage:
        "/images/projects/coastal-block-extension-deganwy/coastal-block-extension-deganwy-overview-01.jpg",
      intro: [
        "Cimatti & Roberts is based in Deganwy — our office and yard are at 57 Parc Pentywyn, so local homeowners get fast site visits, direct contact with Jason or Sam, and a team that already knows the area.",
        "Deganwy sits on the coast between Conwy town and the Llandudno headland. Many properties here face Irish Sea weather, sloped gardens and a mix of brick, render and pebbledash — the kind of work we handle every week across North Wales.",
      ],
      localNote:
        "Being on your doorstep means shorter lead times for quotes and easier follow-up during a build. We have completed coastal extension blockwork in Deganwy and regularly travel from here to Conwy, Llandudno and along the coast.",
      highlights: [
        "Home base at 57 Parc Pentywyn, Deganwy",
        "Direct contact with both co-founders",
        "Coastal extension and blockwork experience locally",
        "Free quotes across all eight construction services",
      ],
    },
  },
  {
    name: "Conwy",
    slug: "conwy",
    description:
      "Serving Conwy and the surrounding area, we offer the full range of bricklaying, building, repointing and paving services. Contact us for a free, no-obligation quotation on any project.",
    page: {
      seoTitle: "Builders in Conwy",
      seoDescription:
        "30+ documented construction projects in Conwy — extensions, patios, brickwork, repointing and structural work. Trusted local builders. Free quotes.",
      heroImage:
        "/images/projects/rear-home-extension-conwy/rear-home-extension-conwy-overview-01.jpg",
      intro: [
        "Conwy is where much of our photographed work lives — rear home extensions, brick garages, Indian sandstone patios, open-plan kitchen renovations, garden walls and repointing across the town and surrounding wards.",
        "Properties in Conwy range from period brick and stone to pebbledash and rendered finishes. Matching existing materials, coping with coastal exposure and working on sloped sites are all part of a typical week for our team.",
      ],
      localNote:
        "Our gallery includes dozens of Conwy projects with on-site photography — not stock images. If you are planning similar work, we can often point to a nearby example of how we have approached brick matching, patio levels or extension tie-ins.",
      highlights: [
        "30+ documented projects in Conwy",
        "Extensions, paving, brickwork and structural work",
        "Experience with period and pebbledash properties",
        "15 minutes from our Deganwy base",
      ],
    },
  },
  {
    name: "Llandudno",
    slug: "llandudno",
    description:
      "Homeowners and businesses in Llandudno trust Cimatti & Roberts for quality brickwork, extensions and general building. Over 30 years of experience with free advice and quotes.",
  },
  {
    name: "Llandudno Junction",
    slug: "llandudno-junction",
    description:
      "We regularly work in Llandudno Junction on projects from repointing and brick repairs to extensions and landscaping. Get in touch with Jason or Sam for a free quote.",
  },
  {
    name: "Colwyn Bay",
    slug: "colwyn-bay",
    description:
      "Colwyn Bay clients choose us for reliable, professional construction work including bricklaying, paving, structural alterations and new build projects across North Wales.",
  },
  {
    name: "Abergele",
    slug: "abergele",
    description:
      "Covering Abergele and the wider Conwy coast, Cimatti & Roberts delivers high-quality workmanship on projects of all sizes — from small repairs to full builds.",
  },
  {
    name: "Rhyl",
    slug: "rhyl",
    description:
      "We provide bricklaying, building and landscaping services to Rhyl and Denbighshire. Fully insured with quality guaranteed — contact us for your free quotation.",
  },
  {
    name: "Bangor",
    slug: "bangor",
    description:
      "Serving Bangor and Gwynedd, our experienced team handles bricklaying, extensions, groundwork and more. No job too big or too small — free advice available.",
  },
];

export const getAreaBySlug = (slug: string): Area | undefined =>
  areas.find((area) => area.slug === slug);

export const areasWithPages = areas.filter(
  (area): area is Area & { page: AreaPageContent } => Boolean(area.page),
);

export const getAreaPath = (slug: string) => `/areas/${slug}`;
