import type { Faq, CtaClass } from "./index";

export type BlogCategory =
  | "repair"
  | "replacement"
  | "storm"
  | "materials"
  | "cost"
  | "local";

export type BlogTocEntry = {
  /** id matches an `<h2 id={...}>` rendered in the post body. */
  id: string;
  label: string;
};

export type BlogAuthor = {
  name: string;
  role: string;
};

export type BlogFrontmatter = {
  title: string;
  slug: string;
  description: string; // ~155 chars
  datePublished: string; // ISO yyyy-mm-dd
  dateModified: string; // ISO yyyy-mm-dd
  author: BlogAuthor;
  category: BlogCategory;
  keywords: string[];
  heroImage?: string;
  heroImageAlt?: string;
  tags: string[];
  featured?: boolean;
  /** 40–60 word direct answer. Rendered above the body for AEO. */
  directAnswer: string;
  /** Auto-generated table of contents from the body's H2s. */
  toc: BlogTocEntry[];
  relatedServices: string[];
  relatedCities: string[];
  /** Body-level FAQs — emitted as FAQPage schema. 4–6 items typical. */
  faqs: Faq[];
  /** Optional outbound link bank used in the closing "Sources" panel. */
  citations?: { source: string; href: string; label: string }[];
  /** Word count — used for read time and Article schema. */
  wordCount: number;
  /** CTA class for inline CTAs (research-tier posts default to C). */
  ctaClass?: CtaClass;
};

export type BlogPost = {
  frontmatter: BlogFrontmatter;
  /** React component that renders the post body. */
  Body: React.ComponentType;
};

/** Reading time at 230 wpm, rounded to the nearest minute (min 1). */
export function readingTimeMinutes(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 230));
}
