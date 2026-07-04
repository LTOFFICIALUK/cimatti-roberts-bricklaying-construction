import { serviceDescriptions } from "@/lib/service-descriptions";

export type ServiceCategory =
  | "bricklaying"
  | "extensions"
  | "structural"
  | "repointing"
  | "general-building"
  | "groundwork"
  | "plastering"
  | "landscaping";

export interface Service {
  slug: ServiceCategory;
  title: string;
  shortDescription: string;
  description: string[];
  includes: string[];
  flyerServices: string[];
  image: string;
  images: string[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: "bricklaying",
    title: "Bricklaying",
    shortDescription:
      "Expert bricklaying for garden walls, new build brickwork, feature walls and cavity walls across North Wales.",
    description: serviceDescriptions.bricklaying,
    includes: [
      "Garden and boundary walls",
      "New build brickwork",
      "Feature and decorative walls",
      "Cavity wall construction",
      "Bricklaying specialists for all project sizes",
    ],
    flyerServices: ["Bricklaying specialists"],
    image: "/images/projects/stepped-brick-boundary-wall-conwy/stepped-brick-boundary-wall-conwy-overview-01.jpg",
    images: [
      "/images/projects/stepped-brick-boundary-wall-conwy/stepped-brick-boundary-wall-conwy-overview-01.jpg",
      "/images/projects/garden-wall-brick-pillars-conwy/garden-wall-brick-pillars-conwy-overview-01.jpg",
      "/images/projects/decorative-brick-screen-wall-conwy/decorative-brick-screen-wall-conwy-overview-01.jpg"
    ],
    seoTitle: "Bricklaying North Wales",
    seoDescription:
      "Professional bricklaying in Deganwy, Conwy and North Wales. Garden walls, new build brickwork and feature walls. Free quotes from trusted local bricklayers.",
  },
  {
    slug: "extensions",
    title: "Extensions & New Build",
    shortDescription:
      "Single and double storey extensions and new build homes built to a high standard across North Wales.",
    description: serviceDescriptions.extensions,
    includes: [
      "Single-storey extensions",
      "Double-storey extensions",
      "New build homes",
      "Kitchen and living space extensions",
      "Full project management",
    ],
    flyerServices: ["Extensions", "New build homes"],
    image: "/images/projects/rear-home-extension-conwy/rear-home-extension-conwy-overview-01.jpg",
    images: [
      "/images/projects/rear-home-extension-conwy/rear-home-extension-conwy-overview-01.jpg",
      "/images/projects/home-extension-pebbledash-conwy/home-extension-pebbledash-conwy-overview-01.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-overview-01.jpg"
    ],
    seoTitle: "Extensions & New Build North Wales",
    seoDescription:
      "Home extensions and new build homes in Conwy, Deganwy and North Wales. 30+ years experience. Free quotes from trusted local builders.",
  },
  {
    slug: "structural",
    title: "Structural Work & RSJs",
    shortDescription:
      "Wall openings, RSJ and steel installation, and structural alterations carried out safely and professionally.",
    description: serviceDescriptions.structural,
    includes: [
      "Wall openings and removals",
      "RSJ and steel beam installation",
      "Structural alterations",
      "Load-bearing wall modifications",
      "Building regulations compliance",
    ],
    flyerServices: [
      "Structural alterations",
      "Wall openings & RSJ installation",
    ],
    image: "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-overview-01.jpg",
    images: [
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-overview-01.jpg",
      "/images/projects/window-lintel-installation-conwy/window-lintel-installation-conwy-overview-01.jpg",
      "/images/projects/concrete-base-slab-north-wales/concrete-base-slab-north-wales-overview-01.jpg"
    ],
    seoTitle: "RSJ & Structural Work North Wales",
    seoDescription:
      "RSJ installation, wall openings and structural alterations in North Wales. Professional, insured builders in Conwy and Deganwy. Free quotes.",
  },
  {
    slug: "repointing",
    title: "Repointing & Brick Repairs",
    shortDescription:
      "Repointing, brick repairs, replacements and chimney work to restore and protect your property.",
    description: serviceDescriptions.repointing,
    includes: [
      "Repointing",
      "Brick repairs and replacements",
      "Chimney repointing and repairs",
      "Lime mortar work",
      "Heritage and period property repairs",
    ],
    flyerServices: ["Repointing", "Brick repairs and replacements"],
    image: "/images/projects/stone-chimney-repointing-north-wales/stone-chimney-repointing-north-wales-overview-01.jpg",
    images: [
      "/images/projects/stone-chimney-repointing-north-wales/stone-chimney-repointing-north-wales-overview-01.jpg",
      "/images/projects/stone-chimney-repointing-north-wales/stone-chimney-repointing-north-wales-detail-02.jpg",
      "/images/projects/stone-chimney-repointing-north-wales/stone-chimney-repointing-north-wales-progress-03.jpg"
    ],
    seoTitle: "Repointing & Brick Repairs Conwy",
    seoDescription:
      "Professional repointing and brick repairs in Conwy and North Wales. Chimney work, lime mortar and brick replacements. Free quotes from local specialists.",
  },
  {
    slug: "general-building",
    title: "General Building & Joinery",
    shortDescription:
      "General building work, joinery and refurbishments for domestic and small commercial projects.",
    description: serviceDescriptions["general-building"],
    includes: [
      "General building work",
      "Joinery",
      "Property refurbishments",
      "Alterations and renovations",
      "Domestic and small commercial projects",
    ],
    flyerServices: ["General building work", "Joinery"],
    image: "/images/projects/industrial-blockwork-wall/industrial-blockwork-wall-overview-01.jpg",
    images: [
      "/images/projects/industrial-blockwork-wall/industrial-blockwork-wall-overview-01.jpg",
      "/images/projects/timber-partition-bedroom-conwy/timber-partition-bedroom-conwy-overview-01.jpg",
      "/images/projects/interior-plastering-stud-walls/interior-plastering-stud-walls-overview-01.jpg"
    ],
    seoTitle: "General Building & Joinery North Wales",
    seoDescription:
      "General building work and joinery in North Wales. Refurbishments, alterations and renovations. Free quotes from trusted local builders in Conwy.",
  },
  {
    slug: "groundwork",
    title: "Groundwork & Drainage",
    shortDescription:
      "Footings, groundwork and drainage solutions for extensions, new builds and landscaping projects.",
    description: serviceDescriptions.groundwork,
    includes: [
      "Footings and foundations",
      "Groundwork preparation",
      "Drainage installation",
      "Land drainage solutions",
      "Site preparation for extensions and builds",
    ],
    flyerServices: ["Footings and groundwork", "Drainage"],
    image: "/images/projects/concrete-base-slab-north-wales/concrete-base-slab-north-wales-overview-01.jpg",
    images: [
      "/images/projects/concrete-base-slab-north-wales/concrete-base-slab-north-wales-overview-01.jpg",
      "/images/projects/porch-extension-foundation-conwy/porch-extension-foundation-conwy-overview-01.jpg",
      "/images/projects/blockwork-foundation-north-wales/blockwork-foundation-north-wales-overview-01.jpg"
    ],
    seoTitle: "Groundwork & Drainage North Wales",
    seoDescription:
      "Footings, groundwork and drainage in North Wales. Professional foundations and drainage solutions. Free quotes from local builders in Conwy and Deganwy.",
  },
  {
    slug: "plastering",
    title: "Plastering & Rendering",
    shortDescription:
      "Internal plastering and external rendering for a smooth, durable finish on any project.",
    description: serviceDescriptions.plastering,
    includes: [
      "Internal plastering",
      "External rendering",
      "Skimming and re-plastering",
      "Extension and new build plastering",
      "Repair and patch work",
    ],
    flyerServices: ["Plastering & rendering"],
    image: "/images/projects/interior-plastering-stud-walls/interior-plastering-stud-walls-overview-01.jpg",
    images: [
      "/images/projects/interior-plastering-stud-walls/interior-plastering-stud-walls-overview-01.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-detail-02.jpg",
      "/images/projects/interior-floor-screeding-conwy/interior-floor-screeding-conwy-overview-01.jpg"
    ],
    seoTitle: "Plastering & Rendering North Wales",
    seoDescription:
      "Professional plastering and rendering in North Wales. Internal plastering and external rendering. Free quotes from trusted builders in Conwy and Deganwy.",
  },
  {
    slug: "landscaping",
    title: "Landscaping & Paving",
    shortDescription:
      "Paving, slabbing, patios, driveways and landscaping to transform your outdoor space.",
    description: serviceDescriptions.landscaping,
    includes: [
      "Paving and slabbing",
      "Patios and sitting areas",
      "Driveways",
      "Block paving",
      "Landscaping and garden work",
    ],
    flyerServices: ["Landscaping", "Paving and slabbing"],
    image: "/images/projects/garden-transformation-conwy/garden-transformation-conwy-overview-01.jpg",
    images: [
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-overview-01.jpg",
      "/images/projects/indian-sandstone-patio-conwy/indian-sandstone-patio-conwy-overview-01.jpg",
      "/images/projects/modern-patio-conwy/modern-patio-conwy-overview-01.jpg"
    ],
    seoTitle: "Block Paving & Landscaping North Wales",
    seoDescription:
      "Paving, slabbing and landscaping in North Wales. Patios, driveways and garden work. Free quotes from professional builders in Conwy and Deganwy.",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);

export const serviceOptions = services.map((service) => ({
  value: service.slug,
  label: service.title,
}));
