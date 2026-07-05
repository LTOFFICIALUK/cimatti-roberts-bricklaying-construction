import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaDetailTemplate } from "@/components/areas/AreaDetailTemplate";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import {
  areasWithPages,
  getAreaBySlug,
  getAreaPath,
} from "@/lib/areas";
import { createPageMetadata } from "@/lib/seo/metadata";

interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  areasWithPages.map((area) => ({ slug: area.slug }));

export const generateMetadata = async ({
  params,
}: AreaPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area?.page) return {};

  const path = getAreaPath(area.slug);

  return {
    ...createPageMetadata({
      title: area.page.seoTitle,
      description: area.page.seoDescription,
      path,
      image: area.page.heroImage,
      keywords: [
        `builders ${area.name}`,
        `bricklayers ${area.name}`,
        `construction ${area.name}`,
        `builders North Wales`,
      ],
    }),
    title: { absolute: `${area.page.seoTitle} | Cimatti & Roberts` },
  };
};

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area?.page) notFound();

  const path = getAreaPath(area.slug);
  const areaWithPage = { ...area, page: area.page };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Areas We Cover", path: "/areas" },
          { name: area.name, path },
        ]}
      />
      <AreaDetailTemplate area={areaWithPage} />
    </>
  );
}
