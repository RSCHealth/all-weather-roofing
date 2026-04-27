import type { CtaClass, ProcessStep, Faq } from "./index";

export type TableData = {
  caption?: string;
  headers: string[];
  rows: (string | { value: string; rowHeader?: boolean })[][];
};

export type SectionContent =
  | { type: "prose"; paragraphs: string[] }
  | { type: "bullets"; items: string[] }
  | { type: "table"; data: TableData }
  | { type: "process"; steps: ProcessStep[] }
  | {
      type: "comparison";
      columns: { title: string; bullets: string[] }[];
    }
  | { type: "quote"; quote: string; attribution?: string };

export type Section = {
  h2: string;
  /** 40–60 word direct answer used as the section's first paragraph for AEO. */
  directAnswer?: string;
  content: SectionContent;
};

export type Stat = {
  value: string;
  label: string;
  description?: string;
};

export type Citation = {
  href: string;
  source: string;
  /** Anchor text shown to readers. */
  label: string;
};

export type ServiceContent = {
  slug: string;
  name: string;
  ctaClass: CtaClass;

  seo: {
    title: string;
    description: string;
    canonical: string;
  };

  hero: {
    h1: string;
    eyebrow: string;
    subhead: string;
    trustBullets: string[];
    /** Optional. Set when an owner-supplied image lands; otherwise template
     *  renders a placeholder. */
    imagePath?: string;
    imageAlt?: string;
  };

  /** 40–60 word direct answer rendered above the article body. */
  directAnswer: string;

  /** Optional voice-search Quick Answer block — for high-volume voice
   *  queries (cost, storm damage, emergency). Renders below DirectAnswer. */
  voiceQuickAnswer?: { query: string; answer: string };

  primaryKeywords: string[];
  secondaryKeywords?: string[];

  sections: Section[];

  processSteps: ProcessStep[];

  faqs: Faq[];

  relatedServices: string[]; // service slugs
  relatedCities: string[]; // city slugs
  relatedBlogPosts: string[]; // blog slugs

  proprietaryStats: Stat[];
  citations: Citation[];

  /** Hook for service pages that need extra schema beyond the template defaults. */
  schemaExtras?: Record<string, unknown>;
};
