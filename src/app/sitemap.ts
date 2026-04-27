import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";
import { SERVICE_CONTENT } from "@/content/services";
import { CITY_CONTENT } from "@/content/cities";
import { BLOG_POSTS } from "@/content/blog";

/**
 * Dynamic sitemap. Pulls every routable page from the registries so the
 * file stays in sync as content grows. Priorities follow the spec:
 *   home 1.0, cost guide & top services 0.9, other services 0.8,
 *   cities 0.7, blog posts 0.6, legal 0.3.
 *
 * Trailing-slash applied to match `trailingSlash: true`.
 */

type SitemapEntry = MetadataRoute.Sitemap[number];

function url(path: string): string {
  const withSlash = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  return `${BUSINESS.url}${withSlash}`;
}

const TODAY = new Date();

const TOP_PRIORITY_SERVICES = new Set([
  "roof-replacement",
  "roof-repair",
  "storm-damage-roofing",
  "emergency-roofing",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: SitemapEntry[] = [];

  // Home + cost guide (top of priority hierarchy)
  entries.push({
    url: url("/"),
    lastModified: TODAY,
    changeFrequency: "weekly",
    priority: 1.0,
  });
  entries.push({
    url: url("/roofing-cost-guide"),
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.9,
  });

  // Conversion / contact pages
  for (const path of [
    "/about",
    "/contact",
    "/free-estimate",
    "/financing",
    "/reviews",
    "/faq",
  ]) {
    entries.push({
      url: url(path),
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Service hub + 9 service pages
  entries.push({
    url: url("/services"),
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.8,
  });
  for (const service of SERVICE_CONTENT) {
    entries.push({
      url: url(`/services/${service.slug}`),
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: TOP_PRIORITY_SERVICES.has(service.slug) ? 0.9 : 0.8,
    });
  }

  // Service-area hub + 10 city pages
  entries.push({
    url: url("/service-areas"),
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.7,
  });
  for (const city of CITY_CONTENT) {
    entries.push({
      url: url(`/service-areas/${city.slug}`),
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Blog hub + posts
  entries.push({
    url: url("/blog"),
    lastModified: TODAY,
    changeFrequency: "weekly",
    priority: 0.6,
  });
  for (const post of BLOG_POSTS) {
    entries.push({
      url: url(`/blog/${post.frontmatter.slug}`),
      lastModified: new Date(post.frontmatter.dateModified),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Utility / legal (low priority, but should be discoverable)
  for (const path of ["/sitemap"]) {
    entries.push({
      url: url(path),
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 0.4,
    });
  }
  for (const path of ["/privacy-policy", "/terms-of-service"]) {
    entries.push({
      url: url(path),
      lastModified: TODAY,
      changeFrequency: "yearly",
      priority: 0.3,
    });
  }

  return entries;
}
