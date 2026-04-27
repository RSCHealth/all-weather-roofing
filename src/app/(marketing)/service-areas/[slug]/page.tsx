import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { getCityBySlug, listCitySlugs } from "@/content/cities";
import { buildMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return listCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getCityBySlug(slug);
  if (!content) return {};
  return buildMetadata({
    title: content.seo.title,
    description: content.seo.description,
    canonical: `/service-areas/${content.slug}`,
  });
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getCityBySlug(slug);
  if (!content) notFound();
  return <CityPageTemplate content={content} />;
}
