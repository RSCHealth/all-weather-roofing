import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import {
  getServiceBySlug,
  listServiceSlugs,
} from "@/content/services";
import { buildMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return listServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getServiceBySlug(slug);
  if (!content) return {};
  return buildMetadata({
    title: content.seo.title,
    description: content.seo.description,
    canonical: `/services/${content.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getServiceBySlug(slug);
  if (!content) notFound();
  return <ServicePageTemplate content={content} />;
}
