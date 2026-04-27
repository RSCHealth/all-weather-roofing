import type { BlogPost } from "@/types/blog";
import { signsYouNeedANewRoof } from "./signs-you-need-a-new-roof";
import { roofRepairVsReplacement } from "./roof-repair-vs-replacement";
import { bestRoofingMaterialsStLouis } from "./best-roofing-materials-st-louis";

/**
 * Registry of all blog posts. The dynamic /blog/[slug] route reads from
 * here. Hub renders post cards directly off this list.
 */
export const BLOG_POSTS: BlogPost[] = [
  signsYouNeedANewRoof,
  roofRepairVsReplacement,
  bestRoofingMaterialsStLouis,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.frontmatter.slug === slug);
}

export function listPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.frontmatter.slug);
}

export function listPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.frontmatter.category === category);
}

export function listPublishedPosts(): BlogPost[] {
  // Sorted newest-first by datePublished.
  return [...BLOG_POSTS].sort((a, b) =>
    b.frontmatter.datePublished.localeCompare(a.frontmatter.datePublished),
  );
}
