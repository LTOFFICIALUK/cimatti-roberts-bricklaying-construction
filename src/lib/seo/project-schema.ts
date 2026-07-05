import { galleryCategoryDetails } from "@/lib/gallery";
import { getProjectLocation, type ProjectCategory } from "@/lib/project-utils";
import type { Project } from "@/lib/projects";
import { BUSINESS_ID } from "@/lib/seo/ids";
import { siteConfig } from "@/lib/site";

export const buildProjectSchema = (project: Project) => {
  const location = getProjectLocation(project);
  const category = project.category as ProjectCategory;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/gallery/${project.slug}`,
    image: project.images.map((src) => `${siteConfig.url}${src}`),
    creator: { "@id": BUSINESS_ID },
    provider: { "@id": BUSINESS_ID },
    about: galleryCategoryDetails[category].label,
    ...(location
      ? {
          contentLocation: {
            "@type": "Place",
            name: location,
            address: {
              "@type": "PostalAddress",
              addressLocality: location,
              addressRegion: "North Wales",
              addressCountry: "GB",
            },
          },
        }
      : {}),
  };
};
