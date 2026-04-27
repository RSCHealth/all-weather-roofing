import { BUSINESS } from "@/lib/constants";
import { SERVICE_CONTENT } from "@/content/services";
import { CITY_CONTENT } from "@/content/cities";
import { BLOG_POSTS } from "@/content/blog";

/**
 * LLM-priority sitemap. Smaller than the main /sitemap.xml — limited to
 * pages with quotable proprietary content for AI synthesis: cost guide,
 * all service pages, all city pages, all blog posts.
 */

type Url = { loc: string; lastmod?: string };

function build(): string {
  const urls: Url[] = [
    { loc: `${BUSINESS.url}/roofing-cost-guide`, lastmod: "2026-04-25" },
    ...SERVICE_CONTENT.map((s) => ({ loc: s.seo.canonical })),
    ...CITY_CONTENT.map((c) => ({ loc: c.seo.canonical })),
    ...BLOG_POSTS.map((p) => ({
      loc: `${BUSINESS.url}/blog/${p.frontmatter.slug}`,
      lastmod: p.frontmatter.dateModified,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""}
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return xml;
}

export async function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
