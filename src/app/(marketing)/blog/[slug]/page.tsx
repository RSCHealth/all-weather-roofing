import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";
import { getPostBySlug, listPostSlugs } from "@/content/blog";
import { buildMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return listPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const { frontmatter } = post;
  return buildMetadata({
    title: `${frontmatter.title} | All Weather Roofing Systems`,
    description: frontmatter.description,
    canonical: `/blog/${slug}`,
    ogType: "article",
    publishedTime: frontmatter.datePublished,
    modifiedTime: frontmatter.dateModified,
    authors: [frontmatter.author.name],
    section: frontmatter.category,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostTemplate post={post} />;
}
