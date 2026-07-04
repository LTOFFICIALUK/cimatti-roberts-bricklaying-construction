#!/usr/bin/env python3
"""Organize Facebook project photos into SEO-named project folders."""

from __future__ import annotations

import json
import os
import re
import shutil
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FB_DIR = ROOT / "public/images/projects/facebook"
OUT_DIR = ROOT / "public/images/projects"
MANIFEST_PATH = ROOT / "src/lib/projects-manifest.json"

# cluster_id -> project definition (merged clusters share slug)
PROJECTS: dict[int, dict] = {
    1: {"slug": "coastal-block-extension-deganwy", "category": "extensions", "title": "Coastal Block Extension — Deganwy", "altPrefix": "Coastal home extension blockwork by Cimatti & Roberts in Deganwy, North Wales"},
    2: {"slug": "extension-entrance-steps-conwy", "category": "extensions", "title": "Extension Entrance Steps — Conwy", "altPrefix": "Brick and stone entrance steps to a new home extension by Cimatti & Roberts in Conwy, North Wales"},
    3: {"slug": "decorative-brick-facing-wall", "category": "bricklaying", "title": "Decorative Brick Facing — North Wales", "altPrefix": "Red brick facing over concrete block wall by Cimatti & Roberts in North Wales"},
    4: {"slug": "garden-wall-brick-pillars-conwy", "category": "bricklaying", "title": "Garden Wall & Pillars — Conwy", "altPrefix": "Multi-toned brick garden wall and pillars by Cimatti & Roberts in Conwy"},
    5: {"slug": "garden-wall-hedge-north-wales", "category": "bricklaying", "title": "Garden Wall Construction — North Wales", "altPrefix": "New multi-toned brick garden wall by Cimatti & Roberts in North Wales"},
    6: {"slug": "timber-partition-bedroom-conwy", "category": "structural", "title": "Timber Partition Wall — Conwy", "altPrefix": "Custom timber partition wall by Cimatti & Roberts in a Conwy home"},
    7: {"slug": "interior-floor-screeding-conwy", "category": "extensions", "title": "Interior Floor Screeding — Conwy", "altPrefix": "Self-levelling floor screed during home extension by Cimatti & Roberts in Conwy"},
    8: {"slug": "interior-plastering-stud-walls", "category": "extensions", "title": "Interior Plastering & Stud Walls — North Wales", "altPrefix": "Fresh plaster ceiling and stud wall framing by Cimatti & Roberts in North Wales"},
    9: {"slug": "house-extension-insulation-conwy", "category": "extensions", "title": "House Extension with Insulation — Conwy", "altPrefix": "Blockwork home extension with insulation boards by Cimatti & Roberts in Conwy, North Wales"},
    10: {"slug": "blockwork-foundation-north-wales", "category": "extensions", "title": "Blockwork Foundation — North Wales", "altPrefix": "Concrete block foundation walls by Cimatti & Roberts in rural North Wales"},
    11: {"slug": "rear-home-extension-conwy", "category": "extensions", "title": "Rear Home Extension — Conwy", "altPrefix": "Rear brick home extension by Cimatti & Roberts in Conwy, North Wales"},
    12: {"slug": "flagstone-steps-brick-risers", "category": "paving", "title": "Flagstone Steps with Brick Risers — Conwy", "altPrefix": "Flagstone steps with red brick risers by Cimatti & Roberts in Conwy, North Wales"},
    13: {"slug": "stone-patio-rendered-planter-conwy", "category": "paving", "title": "Stone Patio & Rendered Planter — Conwy", "altPrefix": "Natural stone patio and rendered raised planter by Cimatti & Roberts in Conwy, North Wales"},
    14: {"slug": "boundary-wall-coping-conwy", "category": "bricklaying", "title": "Boundary Wall with Coping — Conwy", "altPrefix": "Boundary wall with stone coping by Cimatti & Roberts in Conwy"},
    15: {"slug": "stone-steps-rendered-north-wales", "category": "paving", "title": "Stone Steps with Rendered Risers — North Wales", "altPrefix": "Natural stone steps with rendered risers by Cimatti & Roberts in North Wales"},
    16: {"slug": "garden-transformation-conwy", "category": "paving", "title": "Garden Transformation — Conwy", "altPrefix": "Sandstone patio and timber gazebo garden transformation by Cimatti & Roberts in Conwy, North Wales"},
    17: {"slug": "grey-sandstone-patio-conwy", "category": "paving", "title": "Grey Sandstone Patio — Conwy", "altPrefix": "Grey natural stone patio slabs by Cimatti & Roberts in Conwy, North Wales"},
    18: {"slug": "concrete-base-slab-north-wales", "category": "structural", "title": "Concrete Base Slab — North Wales", "altPrefix": "Freshly poured concrete base slab by Cimatti & Roberts in North Wales"},
    19: {"slug": "decorative-brick-screen-wall-conwy", "category": "bricklaying", "title": "Decorative Brick Screen Wall — Conwy", "altPrefix": "Red brick garden wall with decorative screen blocks by Cimatti & Roberts in Conwy"},
    20: {"slug": "industrial-blockwork-wall", "category": "bricklaying", "title": "Industrial Blockwork Wall — North Wales", "altPrefix": "Internal concrete block wall construction by Cimatti & Roberts in North Wales"},
    21: {"slug": "commercial-brick-wall-north-wales", "category": "bricklaying", "title": "Commercial Brick Wall — North Wales", "altPrefix": "Large-scale commercial brick wall by Cimatti & Roberts in North Wales"},
    22: {"slug": "company-branding", "category": "bricklaying", "title": "Cimatti & Roberts — 30 Years Experience", "altPrefix": "Cimatti & Roberts bricklaying and construction — 30 years experience in North Wales", "excludeFromGallery": True},
    23: {"slug": "blockwork-garden-wall-conwy", "category": "bricklaying", "title": "Blockwork Garden Wall — Conwy", "altPrefix": "Grey blockwork garden wall with brick coping by Cimatti & Roberts in Conwy"},
    24: {"slug": "stone-chimney-repointing-north-wales", "category": "repointing", "title": "Stone Chimney Repointing — North Wales", "altPrefix": "Stone chimney stack repointing by Cimatti & Roberts in North Wales"},
    25: {"slug": "circular-stone-patio-conwy", "category": "paving", "title": "Circular Stone Patio — Conwy", "altPrefix": "Decorative circular stone patio by Cimatti & Roberts in Conwy, North Wales"},
    26: {"slug": "block-wall-stone-foundation-conwy", "category": "bricklaying", "title": "Block Wall on Stone Foundation — Conwy", "altPrefix": "Concrete block wall on stone foundation by Cimatti & Roberts in Conwy"},
    27: {"slug": "side-extension-blockwork-conwy", "category": "extensions", "title": "Side Extension Blockwork — Conwy", "altPrefix": "Single-storey blockwork extension by Cimatti & Roberts in Conwy, North Wales"},
    28: {"slug": "courtyard-sandstone-patio-conwy", "category": "paving", "title": "Courtyard Sandstone Patio — Conwy", "altPrefix": "Multi-toned sandstone courtyard patio by Cimatti & Roberts in Conwy, North Wales"},
    29: {"slug": "natural-stone-patio-terrace-conwy", "category": "paving", "title": "Natural Stone Patio — Conwy Terrace", "altPrefix": "Natural stone patio with masonry walling by Cimatti & Roberts in Conwy, North Wales"},
    30: {"slug": "indian-sandstone-patio-conwy", "category": "paving", "title": "Indian Sandstone Patio — Conwy", "altPrefix": "Indian sandstone patio with circular feature by Cimatti & Roberts in Conwy, North Wales"},
    31: {"slug": "garden-transformation-conwy", "category": "paving", "title": "Garden Transformation — Conwy", "altPrefix": "Back garden before patio transformation by Cimatti & Roberts in Conwy, North Wales"},
    32: {"slug": "window-lintel-installation-conwy", "category": "structural", "title": "Window Lintel Installation — Conwy", "altPrefix": "Structural concrete lintel and window opening by Cimatti & Roberts in Conwy, North Wales"},
    33: {"slug": "corner-sandstone-patio-conwy", "category": "paving", "title": "Corner Sandstone Patio — Conwy", "altPrefix": "Natural stone patio in a walled garden corner by Cimatti & Roberts in Conwy, North Wales"},
    34: {"slug": "stepped-brick-boundary-wall-conwy", "category": "bricklaying", "title": "Stepped Brick Boundary Wall — Conwy", "altPrefix": "Stepped red brick boundary wall by Cimatti & Roberts in Conwy, North Wales"},
    35: {"slug": "rear-home-extension-conwy", "category": "extensions", "title": "Rear Home Extension — Conwy", "altPrefix": "Rear brick home extension progress by Cimatti & Roberts in Conwy, North Wales"},
    36: {"slug": "raised-block-planter-conwy", "category": "bricklaying", "title": "Raised Block Planter — Conwy", "altPrefix": "Raised concrete block planter by Cimatti & Roberts in a Conwy garden"},
    37: {"slug": "timber-fence-concrete-posts-conwy", "category": "structural", "title": "Timber Fence with Concrete Posts — Conwy", "altPrefix": "Timber fence with concrete posts by Cimatti & Roberts in Conwy"},
    38: {"slug": "modern-patio-conwy", "category": "paving", "title": "Modern Patio Installation — Conwy", "altPrefix": "Light grey porcelain patio by Cimatti & Roberts in Conwy, North Wales"},
    39: {"slug": "modern-patio-conwy", "category": "paving", "title": "Modern Patio Installation — Conwy", "altPrefix": "Completed light grey patio by Cimatti & Roberts in Conwy, North Wales"},
    40: {"slug": "porch-extension-foundation-conwy", "category": "extensions", "title": "Porch Extension Foundation — Conwy", "altPrefix": "Brick and block porch extension foundation by Cimatti & Roberts in Conwy"},
    41: {"slug": "patio-raised-planter-conwy", "category": "paving", "title": "Patio & Raised Planter — Conwy", "altPrefix": "Patio paving and raised planter by Cimatti & Roberts in Conwy, North Wales"},
    42: {"slug": "open-plan-kitchen-renovation-conwy", "category": "structural", "title": "Open-Plan Kitchen Renovation — Conwy", "altPrefix": "Interior renovation and plastering by Cimatti & Roberts in Conwy"},
    43: {"slug": "open-plan-kitchen-renovation-conwy", "category": "structural", "title": "Open-Plan Kitchen Renovation — Conwy", "altPrefix": "Structural wall removal for open-plan kitchen by Cimatti & Roberts in Conwy, North Wales"},
    44: {"slug": "brick-garage-construction-conwy", "category": "extensions", "title": "Brick Garage Construction — Conwy", "altPrefix": "New brick and block garage by Cimatti & Roberts in Conwy, North Wales"},
    45: {"slug": "brick-garage-construction-conwy", "category": "extensions", "title": "Brick Garage Construction — Conwy", "altPrefix": "Red brick outbuilding construction by Cimatti & Roberts in Conwy"},
    46: {"slug": "home-extension-pebbledash-conwy", "category": "extensions", "title": "Home Extension — Conwy", "altPrefix": "Concrete blockwork home extension by Cimatti & Roberts in Conwy, North Wales"},
    47: {"slug": "home-extension-pebbledash-conwy", "category": "extensions", "title": "Home Extension — Conwy", "altPrefix": "Home extension blockwork with structural lintel by Cimatti & Roberts in Conwy, North Wales"},
    48: {"slug": "home-extension-pebbledash-conwy", "category": "extensions", "title": "Home Extension — Conwy", "altPrefix": "Rear home extension with steel lintel by Cimatti & Roberts in Conwy"},
    49: {"slug": "home-extension-pebbledash-conwy", "category": "extensions", "title": "Home Extension — Conwy", "altPrefix": "Single-storey home extension with red brick base by Cimatti & Roberts in Conwy, North Wales"},
}

PREFIX_TO_CLUSTER = {
    "122154480": 1, "122155298": 2, "122159134": 3, "122159272": 4, "122159487": 5,
    "122169111": 6, "122169509": 7, "122170029": 8, "122177624": 9, "122177625": 10,
    "122177627": 11, "122179845": 12, "122183121": 13, "122187957": 14, "122193342": 15,
    "122195191": 16, "122195193": 17, "122195201": 18, "122195202": 19, "122196109": 20,
    "122196270": 21, "122198210": 22, "122198319": 23, "122198562": 24, "122200104": 25,
    "122200895": 26, "122201448": 27, "122203500": 28, "122203503": 29, "122204323": 30,
    "122205190": 31, "122205743": 32, "122206321": 33, "122206910": 34, "122206911": 35,
    "122208280": 36, "122208776": 37, "122208962": 38, "122208963": 39, "122211217": 40,
    "122211854": 41, "122212365": 42, "122212366": 43, "122213358": 44, "122213359": 45,
    "135498019": 46, "154011882": 47, "204304221": 48, "206540816": 49,
}

PHASE_WORDS = [
    "overview", "detail", "progress", "exterior", "interior",
    "foundation", "blockwork", "completed", "finishing",
]


def get_post_prefix(filename: str) -> str:
    match = re.search(r"_(\d{10,})_", filename)
    return match.group(1)[:9] if match else "unknown"


def main() -> None:
    files = sorted(
        f for f in os.listdir(FB_DIR)
        if f.lower().endswith((".jpg", ".jpeg", ".png"))
    )

    slug_counters: dict[str, int] = defaultdict(int)
    projects: dict[str, dict] = {}
    gallery_images: list[dict] = []

    for filename in files:
        prefix = get_post_prefix(filename)
        cluster_id = PREFIX_TO_CLUSTER.get(prefix)
        if cluster_id is None:
            raise ValueError(f"No cluster mapping for {filename} (prefix {prefix})")

        meta = PROJECTS[cluster_id]
        slug = meta["slug"]
        slug_counters[slug] += 1
        index = slug_counters[slug]

        phase = PHASE_WORDS[(index - 1) % len(PHASE_WORDS)]
        new_name = f"{slug}-{phase}-{index:02d}.jpg"
        project_dir = OUT_DIR / slug
        project_dir.mkdir(parents=True, exist_ok=True)

        src = FB_DIR / filename
        dest = project_dir / new_name
        shutil.copy2(src, dest)

        src_path = f"/images/projects/{slug}/{new_name}"
        alt = f"{meta['altPrefix']} — {phase.replace('-', ' ')} view"

        if slug not in projects:
            projects[slug] = {
                "slug": slug,
                "title": meta["title"],
                "category": meta["category"],
                "description": meta["altPrefix"],
                "images": [],
                "excludeFromGallery": meta.get("excludeFromGallery", False),
            }

        projects[slug]["images"].append(src_path)

        if not meta.get("excludeFromGallery"):
            gallery_images.append({
                "id": f"{slug}-{index:02d}",
                "src": src_path,
                "alt": alt,
                "category": meta["category"],
                "projectSlug": slug,
                "projectTitle": meta["title"],
            })

    manifest = {
        "projects": sorted(projects.values(), key=lambda p: p["slug"]),
        "galleryImages": gallery_images,
    }

    MANIFEST_PATH.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

    print(f"Organized {len(files)} images into {len(projects)} projects")
    print(f"Gallery images: {len(gallery_images)}")
    print(f"Manifest: {MANIFEST_PATH}")


if __name__ == "__main__":
    main()
