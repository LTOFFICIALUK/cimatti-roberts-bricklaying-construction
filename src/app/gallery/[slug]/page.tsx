import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/gallery/ProjectCaseStudy";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildProjectSchema } from "@/lib/seo/project-schema";
import { getProjectPath } from "@/lib/project-utils";
import { getProjectBySlug, projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({
  params,
}: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const path = getProjectPath(project.slug);

  return {
    ...createPageMetadata({
      title: `${project.title} | Project Gallery`,
      description: `${project.description} View ${project.images.length} project photos from ${siteConfig.shortName}.`,
      path,
      image: project.coverImage,
      keywords: [
        project.title,
        `${project.category} North Wales`,
        `${project.category} Conwy`,
        `${siteConfig.shortName} projects`,
      ],
    }),
    title: { absolute: `${project.title} | ${siteConfig.shortName}` },
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const path = getProjectPath(project.slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
          { name: project.title, path },
        ]}
      />
      <JsonLdScript data={buildProjectSchema(project)} />
      <ProjectCaseStudy project={project} />
    </>
  );
}
