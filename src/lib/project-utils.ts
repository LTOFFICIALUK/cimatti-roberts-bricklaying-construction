import {
  galleryCategories,
  galleryCategoryDetails as categoryDetails,
  type GalleryCategory,
} from "./gallery";
import type { Project } from "./projects";

export type ProjectCategory = Exclude<GalleryCategory, "all">;

export interface CategoryGroup {
  category: ProjectCategory;
  label: string;
  summary: string;
  coverImage: string;
  projectCount: number;
  photoCount: number;
  projects: Project[];
}

export const featuredProjectSlugs = [
  "rear-home-extension-conwy",
  "garden-transformation-conwy",
  "indian-sandstone-patio-conwy",
  "brick-garage-construction-conwy",
  "open-plan-kitchen-renovation-conwy",
  "modern-patio-conwy",
  "home-extension-pebbledash-conwy",
  "stone-chimney-repointing-north-wales",
] as const;

export const sortProjectsForGallery = (items: Project[]): Project[] => {
  const rank = new Map(
    featuredProjectSlugs.map((slug, index) => [slug, index]),
  );

  return [...items].sort((a, b) => {
    const aRank = rank.get(a.slug as (typeof featuredProjectSlugs)[number]);
    const bRank = rank.get(b.slug as (typeof featuredProjectSlugs)[number]);

    if (aRank !== undefined && bRank !== undefined) return aRank - bRank;
    if (aRank !== undefined) return -1;
    if (bRank !== undefined) return 1;
    return b.images.length - a.images.length;
  });
};

export const getImageAlt = (project: Project, imageSrc: string, index: number) => {
  const phaseMatch = imageSrc.match(/-([a-z]+)-\d+\.jpg$/);
  const phase = phaseMatch?.[1]?.replace(/-/g, " ") ?? `photo ${index + 1}`;
  return `${project.description} — ${phase}`;
};

export const buildCategoryGroups = (items: Project[]): CategoryGroup[] => {
  const sorted = sortProjectsForGallery(items);

  return galleryCategories
    .filter((cat) => cat.value !== "all")
    .map((cat) => {
      const category = cat.value as ProjectCategory;
      const projects = sorted.filter((project) => project.category === category);
      const coverProject = projects[0];

      return {
        category,
        label: categoryDetails[category].label,
        summary: categoryDetails[category].summary,
        coverImage: coverProject?.coverImage ?? "",
        projectCount: projects.length,
        photoCount: projects.reduce(
          (total, project) => total + project.images.length,
          0,
        ),
        projects,
      };
    })
    .filter((group) => group.projectCount > 0);
};
