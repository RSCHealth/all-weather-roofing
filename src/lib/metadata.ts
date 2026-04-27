import type { Metadata } from "next";
import { BUSINESS } from "./constants";

export type BuildMetadataOptions = {
  title: string;
  description: string;
  /** Path on this site, e.g. "/services/roof-repair". Leading slash
   *  required; trailing slash is added automatically (matches
   *  trailingSlash: true in next.config.ts). Pass a full URL to override. */
  canonical: string;
  /** Override the default OG image. Use absolute URL or a path on this site. */
  image?: string;
  noindex?: boolean;
  ogType?: "website" | "article";
  /** Optional OG-only fields. */
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  /** Optional Article section, e.g. "Cost", "Repair". */
  section?: string;
};

/** Site-wide default OG image lives at /opengraph-image (Next.js convention). */
const DEFAULT_OG = `${BUSINESS.url}/opengraph-image`;

function normalizeCanonical(canonical: string): string {
  // Pass-through if absolute URL.
  if (/^https?:\/\//i.test(canonical)) {
    return canonical.endsWith("/") ? canonical : `${canonical}/`;
  }
  const path = canonical.startsWith("/") ? canonical : `/${canonical}`;
  const withSlash =
    path === "/" || path.endsWith("/") ? path : `${path}/`;
  return `${BUSINESS.url}${withSlash}`;
}

function normalizeImage(image: string | undefined): string {
  if (!image) return DEFAULT_OG;
  if (/^https?:\/\//i.test(image)) return image;
  return `${BUSINESS.url}${image.startsWith("/") ? image : `/${image}`}`;
}

/**
 * Single source of truth for page metadata. Every `page.tsx` (and the
 * `generateMetadata` functions on dynamic routes) calls this — no raw
 * `metadata` objects elsewhere.
 *
 * - Adds trailing slash to every canonical to match `trailingSlash: true`.
 * - Sets OpenGraph + Twitter Card defaults; pages can override image /
 *   ogType for blog Articles.
 * - When `noindex: true`, emits `robots: { index: false, follow: true }`
 *   (search engines don't index but still follow internal links).
 */
export function buildMetadata(opts: BuildMetadataOptions): Metadata {
  const canonicalUrl = normalizeCanonical(opts.canonical);
  const ogImage = normalizeImage(opts.image);
  const ogType = opts.ogType ?? "website";

  return {
    title: opts.title,
    description: opts.description,
    metadataBase: new URL(BUSINESS.url),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: canonicalUrl,
      siteName: BUSINESS.name,
      type: ogType,
      locale: "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: opts.title }],
      ...(ogType === "article" && opts.publishedTime
        ? { publishedTime: opts.publishedTime }
        : {}),
      ...(ogType === "article" && opts.modifiedTime
        ? { modifiedTime: opts.modifiedTime }
        : {}),
      ...(ogType === "article" && opts.authors ? { authors: opts.authors } : {}),
      ...(ogType === "article" && opts.section ? { section: opts.section } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [ogImage],
    },
    robots: opts.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}
