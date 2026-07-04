import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { createServiceMetadata } from "@/lib/seo/metadata";
import { services, getServiceBySlug } from "@/lib/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  services.map((service) => ({ slug: service.slug }));

export const generateMetadata = async ({
  params,
}: ServicePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createServiceMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    slug: service.slug,
    image: service.image,
    keywords: [
      `${service.title.toLowerCase()} North Wales`,
      `${service.title.toLowerCase()} Conwy`,
      `${service.title.toLowerCase()} Deganwy`,
      `${service.title} builders`,
    ],
  });
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <ServiceJsonLd service={service} />
      <ServiceDetailTemplate service={service} />
    </>
  );
}
