import type { GalleryCategory } from "./gallery";

export interface Project {
  slug: string;
  title: string;
  category: Exclude<GalleryCategory, "all">;
  description: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "block-wall-stone-foundation-conwy",
    title: "Block Wall on Stone Foundation — Conwy",
    category: "bricklaying",
    description: "Concrete block wall on stone foundation by Cimatti & Roberts in Conwy",
    coverImage: "/images/projects/block-wall-stone-foundation-conwy/block-wall-stone-foundation-conwy-overview-01.jpg",
    images: [
      "/images/projects/block-wall-stone-foundation-conwy/block-wall-stone-foundation-conwy-overview-01.jpg",
      "/images/projects/block-wall-stone-foundation-conwy/block-wall-stone-foundation-conwy-detail-02.jpg",
      "/images/projects/block-wall-stone-foundation-conwy/block-wall-stone-foundation-conwy-progress-03.jpg"
    ],
  },
  {
    slug: "blockwork-foundation-north-wales",
    title: "Blockwork Foundation — North Wales",
    category: "extensions",
    description: "Concrete block foundation walls by Cimatti & Roberts in rural North Wales",
    coverImage: "/images/projects/blockwork-foundation-north-wales/blockwork-foundation-north-wales-overview-01.jpg",
    images: [
      "/images/projects/blockwork-foundation-north-wales/blockwork-foundation-north-wales-overview-01.jpg",
      "/images/projects/blockwork-foundation-north-wales/blockwork-foundation-north-wales-detail-02.jpg",
      "/images/projects/blockwork-foundation-north-wales/blockwork-foundation-north-wales-progress-03.jpg"
    ],
  },
  {
    slug: "blockwork-garden-wall-conwy",
    title: "Blockwork Garden Wall — Conwy",
    category: "bricklaying",
    description: "Grey blockwork garden wall with brick coping by Cimatti & Roberts in Conwy",
    coverImage: "/images/projects/blockwork-garden-wall-conwy/blockwork-garden-wall-conwy-overview-01.jpg",
    images: [
      "/images/projects/blockwork-garden-wall-conwy/blockwork-garden-wall-conwy-overview-01.jpg",
      "/images/projects/blockwork-garden-wall-conwy/blockwork-garden-wall-conwy-detail-02.jpg",
      "/images/projects/blockwork-garden-wall-conwy/blockwork-garden-wall-conwy-progress-03.jpg",
      "/images/projects/blockwork-garden-wall-conwy/blockwork-garden-wall-conwy-exterior-04.jpg",
      "/images/projects/blockwork-garden-wall-conwy/blockwork-garden-wall-conwy-interior-05.jpg",
      "/images/projects/blockwork-garden-wall-conwy/blockwork-garden-wall-conwy-foundation-06.jpg",
      "/images/projects/blockwork-garden-wall-conwy/blockwork-garden-wall-conwy-blockwork-07.jpg"
    ],
  },
  {
    slug: "boundary-wall-coping-conwy",
    title: "Boundary Wall with Coping — Conwy",
    category: "bricklaying",
    description: "Boundary wall with stone coping by Cimatti & Roberts in Conwy",
    coverImage: "/images/projects/boundary-wall-coping-conwy/boundary-wall-coping-conwy-overview-01.jpg",
    images: [
      "/images/projects/boundary-wall-coping-conwy/boundary-wall-coping-conwy-overview-01.jpg"
    ],
  },
  {
    slug: "brick-garage-construction-conwy",
    title: "Brick Garage Construction — Conwy",
    category: "extensions",
    description: "New brick and block garage by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-overview-01.jpg",
    images: [
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-overview-01.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-detail-02.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-progress-03.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-exterior-04.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-interior-05.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-foundation-06.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-blockwork-07.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-completed-08.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-finishing-09.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-overview-10.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-detail-11.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-progress-12.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-exterior-13.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-interior-14.jpg",
      "/images/projects/brick-garage-construction-conwy/brick-garage-construction-conwy-foundation-15.jpg"
    ],
  },
  {
    slug: "circular-stone-patio-conwy",
    title: "Circular Stone Patio — Conwy",
    category: "paving",
    description: "Decorative circular stone patio by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/circular-stone-patio-conwy/circular-stone-patio-conwy-overview-01.jpg",
    images: [
      "/images/projects/circular-stone-patio-conwy/circular-stone-patio-conwy-overview-01.jpg",
      "/images/projects/circular-stone-patio-conwy/circular-stone-patio-conwy-detail-02.jpg",
      "/images/projects/circular-stone-patio-conwy/circular-stone-patio-conwy-progress-03.jpg",
      "/images/projects/circular-stone-patio-conwy/circular-stone-patio-conwy-exterior-04.jpg",
      "/images/projects/circular-stone-patio-conwy/circular-stone-patio-conwy-interior-05.jpg",
      "/images/projects/circular-stone-patio-conwy/circular-stone-patio-conwy-foundation-06.jpg"
    ],
  },
  {
    slug: "coastal-block-extension-deganwy",
    title: "Coastal Block Extension — Deganwy",
    category: "extensions",
    description: "Coastal home extension blockwork by Cimatti & Roberts in Deganwy, North Wales",
    coverImage: "/images/projects/coastal-block-extension-deganwy/coastal-block-extension-deganwy-overview-01.jpg",
    images: [
      "/images/projects/coastal-block-extension-deganwy/coastal-block-extension-deganwy-overview-01.jpg",
      "/images/projects/coastal-block-extension-deganwy/coastal-block-extension-deganwy-detail-02.jpg"
    ],
  },
  {
    slug: "commercial-brick-wall-north-wales",
    title: "Commercial Brick Wall — North Wales",
    category: "bricklaying",
    description: "Large-scale commercial brick wall by Cimatti & Roberts in North Wales",
    coverImage: "/images/projects/commercial-brick-wall-north-wales/commercial-brick-wall-north-wales-overview-01.jpg",
    images: [
      "/images/projects/commercial-brick-wall-north-wales/commercial-brick-wall-north-wales-overview-01.jpg"
    ],
  },
  {
    slug: "concrete-base-slab-north-wales",
    title: "Concrete Base Slab — North Wales",
    category: "structural",
    description: "Freshly poured concrete base slab by Cimatti & Roberts in North Wales",
    coverImage: "/images/projects/concrete-base-slab-north-wales/concrete-base-slab-north-wales-overview-01.jpg",
    images: [
      "/images/projects/concrete-base-slab-north-wales/concrete-base-slab-north-wales-overview-01.jpg",
      "/images/projects/concrete-base-slab-north-wales/concrete-base-slab-north-wales-detail-02.jpg"
    ],
  },
  {
    slug: "corner-sandstone-patio-conwy",
    title: "Corner Sandstone Patio — Conwy",
    category: "paving",
    description: "Natural stone patio in a walled garden corner by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/corner-sandstone-patio-conwy/corner-sandstone-patio-conwy-overview-01.jpg",
    images: [
      "/images/projects/corner-sandstone-patio-conwy/corner-sandstone-patio-conwy-overview-01.jpg",
      "/images/projects/corner-sandstone-patio-conwy/corner-sandstone-patio-conwy-detail-02.jpg"
    ],
  },
  {
    slug: "courtyard-sandstone-patio-conwy",
    title: "Courtyard Sandstone Patio — Conwy",
    category: "paving",
    description: "Multi-toned sandstone courtyard patio by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/courtyard-sandstone-patio-conwy/courtyard-sandstone-patio-conwy-overview-01.jpg",
    images: [
      "/images/projects/courtyard-sandstone-patio-conwy/courtyard-sandstone-patio-conwy-overview-01.jpg",
      "/images/projects/courtyard-sandstone-patio-conwy/courtyard-sandstone-patio-conwy-detail-02.jpg",
      "/images/projects/courtyard-sandstone-patio-conwy/courtyard-sandstone-patio-conwy-progress-03.jpg",
      "/images/projects/courtyard-sandstone-patio-conwy/courtyard-sandstone-patio-conwy-exterior-04.jpg"
    ],
  },
  {
    slug: "decorative-brick-facing-wall",
    title: "Decorative Brick Facing — North Wales",
    category: "bricklaying",
    description: "Red brick facing over concrete block wall by Cimatti & Roberts in North Wales",
    coverImage: "/images/projects/decorative-brick-facing-wall/decorative-brick-facing-wall-overview-01.jpg",
    images: [
      "/images/projects/decorative-brick-facing-wall/decorative-brick-facing-wall-overview-01.jpg"
    ],
  },
  {
    slug: "decorative-brick-screen-wall-conwy",
    title: "Decorative Brick Screen Wall — Conwy",
    category: "bricklaying",
    description: "Red brick garden wall with decorative screen blocks by Cimatti & Roberts in Conwy",
    coverImage: "/images/projects/decorative-brick-screen-wall-conwy/decorative-brick-screen-wall-conwy-overview-01.jpg",
    images: [
      "/images/projects/decorative-brick-screen-wall-conwy/decorative-brick-screen-wall-conwy-overview-01.jpg",
      "/images/projects/decorative-brick-screen-wall-conwy/decorative-brick-screen-wall-conwy-detail-02.jpg",
      "/images/projects/decorative-brick-screen-wall-conwy/decorative-brick-screen-wall-conwy-progress-03.jpg",
      "/images/projects/decorative-brick-screen-wall-conwy/decorative-brick-screen-wall-conwy-exterior-04.jpg",
      "/images/projects/decorative-brick-screen-wall-conwy/decorative-brick-screen-wall-conwy-interior-05.jpg"
    ],
  },
  {
    slug: "extension-entrance-steps-conwy",
    title: "Extension Entrance Steps — Conwy",
    category: "extensions",
    description: "Brick and stone entrance steps to a new home extension by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/extension-entrance-steps-conwy/extension-entrance-steps-conwy-overview-01.jpg",
    images: [
      "/images/projects/extension-entrance-steps-conwy/extension-entrance-steps-conwy-overview-01.jpg",
      "/images/projects/extension-entrance-steps-conwy/extension-entrance-steps-conwy-detail-02.jpg"
    ],
  },
  {
    slug: "flagstone-steps-brick-risers",
    title: "Flagstone Steps with Brick Risers — Conwy",
    category: "paving",
    description: "Flagstone steps with red brick risers by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/flagstone-steps-brick-risers/flagstone-steps-brick-risers-overview-01.jpg",
    images: [
      "/images/projects/flagstone-steps-brick-risers/flagstone-steps-brick-risers-overview-01.jpg",
      "/images/projects/flagstone-steps-brick-risers/flagstone-steps-brick-risers-detail-02.jpg"
    ],
  },
  {
    slug: "garden-transformation-conwy",
    title: "Garden Transformation — Conwy",
    category: "paving",
    description: "Sandstone patio and timber gazebo garden transformation by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/garden-transformation-conwy/garden-transformation-conwy-overview-01.jpg",
    images: [
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-overview-01.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-detail-02.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-progress-03.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-exterior-04.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-interior-05.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-foundation-06.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-blockwork-07.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-completed-08.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-finishing-09.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-overview-10.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-detail-11.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-progress-12.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-exterior-13.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-interior-14.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-foundation-15.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-blockwork-16.jpg",
      "/images/projects/garden-transformation-conwy/garden-transformation-conwy-completed-17.jpg"
    ],
  },
  {
    slug: "garden-wall-brick-pillars-conwy",
    title: "Garden Wall & Pillars — Conwy",
    category: "bricklaying",
    description: "Multi-toned brick garden wall and pillars by Cimatti & Roberts in Conwy",
    coverImage: "/images/projects/garden-wall-brick-pillars-conwy/garden-wall-brick-pillars-conwy-overview-01.jpg",
    images: [
      "/images/projects/garden-wall-brick-pillars-conwy/garden-wall-brick-pillars-conwy-overview-01.jpg"
    ],
  },
  {
    slug: "garden-wall-hedge-north-wales",
    title: "Garden Wall Construction — North Wales",
    category: "bricklaying",
    description: "New multi-toned brick garden wall by Cimatti & Roberts in North Wales",
    coverImage: "/images/projects/garden-wall-hedge-north-wales/garden-wall-hedge-north-wales-overview-01.jpg",
    images: [
      "/images/projects/garden-wall-hedge-north-wales/garden-wall-hedge-north-wales-overview-01.jpg"
    ],
  },
  {
    slug: "grey-sandstone-patio-conwy",
    title: "Grey Sandstone Patio — Conwy",
    category: "paving",
    description: "Grey natural stone patio slabs by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/grey-sandstone-patio-conwy/grey-sandstone-patio-conwy-overview-01.jpg",
    images: [
      "/images/projects/grey-sandstone-patio-conwy/grey-sandstone-patio-conwy-overview-01.jpg",
      "/images/projects/grey-sandstone-patio-conwy/grey-sandstone-patio-conwy-detail-02.jpg"
    ],
  },
  {
    slug: "home-extension-pebbledash-conwy",
    title: "Home Extension — Conwy",
    category: "extensions",
    description: "Single-storey home extension with red brick base by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/home-extension-pebbledash-conwy/home-extension-pebbledash-conwy-overview-01.jpg",
    images: [
      "/images/projects/home-extension-pebbledash-conwy/home-extension-pebbledash-conwy-overview-01.jpg",
      "/images/projects/home-extension-pebbledash-conwy/home-extension-pebbledash-conwy-detail-02.jpg",
      "/images/projects/home-extension-pebbledash-conwy/home-extension-pebbledash-conwy-progress-03.jpg",
      "/images/projects/home-extension-pebbledash-conwy/home-extension-pebbledash-conwy-exterior-04.jpg"
    ],
  },
  {
    slug: "house-extension-insulation-conwy",
    title: "House Extension with Insulation — Conwy",
    category: "extensions",
    description: "Blockwork home extension with insulation boards by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/house-extension-insulation-conwy/house-extension-insulation-conwy-overview-01.jpg",
    images: [
      "/images/projects/house-extension-insulation-conwy/house-extension-insulation-conwy-overview-01.jpg",
      "/images/projects/house-extension-insulation-conwy/house-extension-insulation-conwy-detail-02.jpg"
    ],
  },
  {
    slug: "indian-sandstone-patio-conwy",
    title: "Indian Sandstone Patio — Conwy",
    category: "paving",
    description: "Indian sandstone patio with circular feature by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/indian-sandstone-patio-conwy/indian-sandstone-patio-conwy-overview-01.jpg",
    images: [
      "/images/projects/indian-sandstone-patio-conwy/indian-sandstone-patio-conwy-overview-01.jpg",
      "/images/projects/indian-sandstone-patio-conwy/indian-sandstone-patio-conwy-detail-02.jpg",
      "/images/projects/indian-sandstone-patio-conwy/indian-sandstone-patio-conwy-progress-03.jpg",
      "/images/projects/indian-sandstone-patio-conwy/indian-sandstone-patio-conwy-exterior-04.jpg",
      "/images/projects/indian-sandstone-patio-conwy/indian-sandstone-patio-conwy-interior-05.jpg",
      "/images/projects/indian-sandstone-patio-conwy/indian-sandstone-patio-conwy-foundation-06.jpg"
    ],
  },
  {
    slug: "industrial-blockwork-wall",
    title: "Industrial Blockwork Wall — North Wales",
    category: "bricklaying",
    description: "Internal concrete block wall construction by Cimatti & Roberts in North Wales",
    coverImage: "/images/projects/industrial-blockwork-wall/industrial-blockwork-wall-overview-01.jpg",
    images: [
      "/images/projects/industrial-blockwork-wall/industrial-blockwork-wall-overview-01.jpg",
      "/images/projects/industrial-blockwork-wall/industrial-blockwork-wall-detail-02.jpg",
      "/images/projects/industrial-blockwork-wall/industrial-blockwork-wall-progress-03.jpg",
      "/images/projects/industrial-blockwork-wall/industrial-blockwork-wall-exterior-04.jpg"
    ],
  },
  {
    slug: "interior-floor-screeding-conwy",
    title: "Interior Floor Screeding — Conwy",
    category: "extensions",
    description: "Self-levelling floor screed during home extension by Cimatti & Roberts in Conwy",
    coverImage: "/images/projects/interior-floor-screeding-conwy/interior-floor-screeding-conwy-overview-01.jpg",
    images: [
      "/images/projects/interior-floor-screeding-conwy/interior-floor-screeding-conwy-overview-01.jpg"
    ],
  },
  {
    slug: "interior-plastering-stud-walls",
    title: "Interior Plastering & Stud Walls — North Wales",
    category: "extensions",
    description: "Fresh plaster ceiling and stud wall framing by Cimatti & Roberts in North Wales",
    coverImage: "/images/projects/interior-plastering-stud-walls/interior-plastering-stud-walls-overview-01.jpg",
    images: [
      "/images/projects/interior-plastering-stud-walls/interior-plastering-stud-walls-overview-01.jpg"
    ],
  },
  {
    slug: "modern-patio-conwy",
    title: "Modern Patio Installation — Conwy",
    category: "paving",
    description: "Light grey porcelain patio by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/modern-patio-conwy/modern-patio-conwy-overview-01.jpg",
    images: [
      "/images/projects/modern-patio-conwy/modern-patio-conwy-overview-01.jpg",
      "/images/projects/modern-patio-conwy/modern-patio-conwy-detail-02.jpg",
      "/images/projects/modern-patio-conwy/modern-patio-conwy-progress-03.jpg",
      "/images/projects/modern-patio-conwy/modern-patio-conwy-exterior-04.jpg",
      "/images/projects/modern-patio-conwy/modern-patio-conwy-interior-05.jpg",
      "/images/projects/modern-patio-conwy/modern-patio-conwy-foundation-06.jpg"
    ],
  },
  {
    slug: "natural-stone-patio-terrace-conwy",
    title: "Natural Stone Patio — Conwy Terrace",
    category: "paving",
    description: "Natural stone patio with masonry walling by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/natural-stone-patio-terrace-conwy/natural-stone-patio-terrace-conwy-overview-01.jpg",
    images: [
      "/images/projects/natural-stone-patio-terrace-conwy/natural-stone-patio-terrace-conwy-overview-01.jpg",
      "/images/projects/natural-stone-patio-terrace-conwy/natural-stone-patio-terrace-conwy-detail-02.jpg"
    ],
  },
  {
    slug: "open-plan-kitchen-renovation-conwy",
    title: "Open-Plan Kitchen Renovation — Conwy",
    category: "structural",
    description: "Interior renovation and plastering by Cimatti & Roberts in Conwy",
    coverImage: "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-overview-01.jpg",
    images: [
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-overview-01.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-detail-02.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-progress-03.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-exterior-04.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-interior-05.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-foundation-06.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-blockwork-07.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-completed-08.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-finishing-09.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-overview-10.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-detail-11.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-progress-12.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-exterior-13.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-interior-14.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-foundation-15.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-blockwork-16.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-completed-17.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-finishing-18.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-overview-19.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-detail-20.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-progress-21.jpg",
      "/images/projects/open-plan-kitchen-renovation-conwy/open-plan-kitchen-renovation-conwy-exterior-22.jpg"
    ],
  },
  {
    slug: "patio-raised-planter-conwy",
    title: "Patio & Raised Planter — Conwy",
    category: "paving",
    description: "Patio paving and raised planter by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/patio-raised-planter-conwy/patio-raised-planter-conwy-overview-01.jpg",
    images: [
      "/images/projects/patio-raised-planter-conwy/patio-raised-planter-conwy-overview-01.jpg",
      "/images/projects/patio-raised-planter-conwy/patio-raised-planter-conwy-detail-02.jpg",
      "/images/projects/patio-raised-planter-conwy/patio-raised-planter-conwy-progress-03.jpg",
      "/images/projects/patio-raised-planter-conwy/patio-raised-planter-conwy-exterior-04.jpg"
    ],
  },
  {
    slug: "porch-extension-foundation-conwy",
    title: "Porch Extension Foundation — Conwy",
    category: "extensions",
    description: "Brick and block porch extension foundation by Cimatti & Roberts in Conwy",
    coverImage: "/images/projects/porch-extension-foundation-conwy/porch-extension-foundation-conwy-overview-01.jpg",
    images: [
      "/images/projects/porch-extension-foundation-conwy/porch-extension-foundation-conwy-overview-01.jpg",
      "/images/projects/porch-extension-foundation-conwy/porch-extension-foundation-conwy-detail-02.jpg",
      "/images/projects/porch-extension-foundation-conwy/porch-extension-foundation-conwy-progress-03.jpg",
      "/images/projects/porch-extension-foundation-conwy/porch-extension-foundation-conwy-exterior-04.jpg",
      "/images/projects/porch-extension-foundation-conwy/porch-extension-foundation-conwy-interior-05.jpg",
      "/images/projects/porch-extension-foundation-conwy/porch-extension-foundation-conwy-foundation-06.jpg",
      "/images/projects/porch-extension-foundation-conwy/porch-extension-foundation-conwy-blockwork-07.jpg",
      "/images/projects/porch-extension-foundation-conwy/porch-extension-foundation-conwy-completed-08.jpg"
    ],
  },
  {
    slug: "raised-block-planter-conwy",
    title: "Raised Block Planter — Conwy",
    category: "bricklaying",
    description: "Raised concrete block planter by Cimatti & Roberts in a Conwy garden",
    coverImage: "/images/projects/raised-block-planter-conwy/raised-block-planter-conwy-overview-01.jpg",
    images: [
      "/images/projects/raised-block-planter-conwy/raised-block-planter-conwy-overview-01.jpg",
      "/images/projects/raised-block-planter-conwy/raised-block-planter-conwy-detail-02.jpg",
      "/images/projects/raised-block-planter-conwy/raised-block-planter-conwy-progress-03.jpg",
      "/images/projects/raised-block-planter-conwy/raised-block-planter-conwy-exterior-04.jpg",
      "/images/projects/raised-block-planter-conwy/raised-block-planter-conwy-interior-05.jpg"
    ],
  },
  {
    slug: "rear-home-extension-conwy",
    title: "Rear Home Extension — Conwy",
    category: "extensions",
    description: "Rear brick home extension by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/rear-home-extension-conwy/rear-home-extension-conwy-overview-01.jpg",
    images: [
      "/images/projects/rear-home-extension-conwy/rear-home-extension-conwy-overview-01.jpg",
      "/images/projects/rear-home-extension-conwy/rear-home-extension-conwy-detail-02.jpg",
      "/images/projects/rear-home-extension-conwy/rear-home-extension-conwy-progress-03.jpg",
      "/images/projects/rear-home-extension-conwy/rear-home-extension-conwy-exterior-04.jpg",
      "/images/projects/rear-home-extension-conwy/rear-home-extension-conwy-interior-05.jpg"
    ],
  },
  {
    slug: "side-extension-blockwork-conwy",
    title: "Side Extension Blockwork — Conwy",
    category: "extensions",
    description: "Single-storey blockwork extension by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/side-extension-blockwork-conwy/side-extension-blockwork-conwy-overview-01.jpg",
    images: [
      "/images/projects/side-extension-blockwork-conwy/side-extension-blockwork-conwy-overview-01.jpg",
      "/images/projects/side-extension-blockwork-conwy/side-extension-blockwork-conwy-detail-02.jpg"
    ],
  },
  {
    slug: "stepped-brick-boundary-wall-conwy",
    title: "Stepped Brick Boundary Wall — Conwy",
    category: "bricklaying",
    description: "Stepped red brick boundary wall by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/stepped-brick-boundary-wall-conwy/stepped-brick-boundary-wall-conwy-overview-01.jpg",
    images: [
      "/images/projects/stepped-brick-boundary-wall-conwy/stepped-brick-boundary-wall-conwy-overview-01.jpg",
      "/images/projects/stepped-brick-boundary-wall-conwy/stepped-brick-boundary-wall-conwy-detail-02.jpg",
      "/images/projects/stepped-brick-boundary-wall-conwy/stepped-brick-boundary-wall-conwy-progress-03.jpg",
      "/images/projects/stepped-brick-boundary-wall-conwy/stepped-brick-boundary-wall-conwy-exterior-04.jpg",
      "/images/projects/stepped-brick-boundary-wall-conwy/stepped-brick-boundary-wall-conwy-interior-05.jpg",
      "/images/projects/stepped-brick-boundary-wall-conwy/stepped-brick-boundary-wall-conwy-foundation-06.jpg",
      "/images/projects/stepped-brick-boundary-wall-conwy/stepped-brick-boundary-wall-conwy-blockwork-07.jpg"
    ],
  },
  {
    slug: "stone-chimney-repointing-north-wales",
    title: "Stone Chimney Repointing — North Wales",
    category: "repointing",
    description: "Stone chimney stack repointing by Cimatti & Roberts in North Wales",
    coverImage: "/images/projects/stone-chimney-repointing-north-wales/stone-chimney-repointing-north-wales-overview-01.jpg",
    images: [
      "/images/projects/stone-chimney-repointing-north-wales/stone-chimney-repointing-north-wales-overview-01.jpg",
      "/images/projects/stone-chimney-repointing-north-wales/stone-chimney-repointing-north-wales-detail-02.jpg",
      "/images/projects/stone-chimney-repointing-north-wales/stone-chimney-repointing-north-wales-progress-03.jpg",
      "/images/projects/stone-chimney-repointing-north-wales/stone-chimney-repointing-north-wales-exterior-04.jpg",
      "/images/projects/stone-chimney-repointing-north-wales/stone-chimney-repointing-north-wales-interior-05.jpg"
    ],
  },
  {
    slug: "stone-patio-rendered-planter-conwy",
    title: "Stone Patio & Rendered Planter — Conwy",
    category: "paving",
    description: "Natural stone patio and rendered raised planter by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/stone-patio-rendered-planter-conwy/stone-patio-rendered-planter-conwy-overview-01.jpg",
    images: [
      "/images/projects/stone-patio-rendered-planter-conwy/stone-patio-rendered-planter-conwy-overview-01.jpg",
      "/images/projects/stone-patio-rendered-planter-conwy/stone-patio-rendered-planter-conwy-detail-02.jpg"
    ],
  },
  {
    slug: "stone-steps-rendered-north-wales",
    title: "Stone Steps with Rendered Risers — North Wales",
    category: "paving",
    description: "Natural stone steps with rendered risers by Cimatti & Roberts in North Wales",
    coverImage: "/images/projects/stone-steps-rendered-north-wales/stone-steps-rendered-north-wales-overview-01.jpg",
    images: [
      "/images/projects/stone-steps-rendered-north-wales/stone-steps-rendered-north-wales-overview-01.jpg",
      "/images/projects/stone-steps-rendered-north-wales/stone-steps-rendered-north-wales-detail-02.jpg",
      "/images/projects/stone-steps-rendered-north-wales/stone-steps-rendered-north-wales-progress-03.jpg"
    ],
  },
  {
    slug: "timber-fence-concrete-posts-conwy",
    title: "Timber Fence with Concrete Posts — Conwy",
    category: "structural",
    description: "Timber fence with concrete posts by Cimatti & Roberts in Conwy",
    coverImage: "/images/projects/timber-fence-concrete-posts-conwy/timber-fence-concrete-posts-conwy-overview-01.jpg",
    images: [
      "/images/projects/timber-fence-concrete-posts-conwy/timber-fence-concrete-posts-conwy-overview-01.jpg"
    ],
  },
  {
    slug: "timber-partition-bedroom-conwy",
    title: "Timber Partition Wall — Conwy",
    category: "structural",
    description: "Custom timber partition wall by Cimatti & Roberts in a Conwy home",
    coverImage: "/images/projects/timber-partition-bedroom-conwy/timber-partition-bedroom-conwy-overview-01.jpg",
    images: [
      "/images/projects/timber-partition-bedroom-conwy/timber-partition-bedroom-conwy-overview-01.jpg",
      "/images/projects/timber-partition-bedroom-conwy/timber-partition-bedroom-conwy-detail-02.jpg",
      "/images/projects/timber-partition-bedroom-conwy/timber-partition-bedroom-conwy-progress-03.jpg"
    ],
  },
  {
    slug: "window-lintel-installation-conwy",
    title: "Window Lintel Installation — Conwy",
    category: "structural",
    description: "Structural concrete lintel and window opening by Cimatti & Roberts in Conwy, North Wales",
    coverImage: "/images/projects/window-lintel-installation-conwy/window-lintel-installation-conwy-overview-01.jpg",
    images: [
      "/images/projects/window-lintel-installation-conwy/window-lintel-installation-conwy-overview-01.jpg",
      "/images/projects/window-lintel-installation-conwy/window-lintel-installation-conwy-detail-02.jpg",
      "/images/projects/window-lintel-installation-conwy/window-lintel-installation-conwy-progress-03.jpg",
      "/images/projects/window-lintel-installation-conwy/window-lintel-installation-conwy-exterior-04.jpg",
      "/images/projects/window-lintel-installation-conwy/window-lintel-installation-conwy-interior-05.jpg"
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
