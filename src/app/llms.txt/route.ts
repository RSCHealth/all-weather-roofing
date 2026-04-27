import { BUSINESS, DAY_KEYS } from "@/lib/constants";
import { SERVICES, CITIES } from "@/lib/navigation";
import { BLOG_POSTS } from "@/content/blog";
import { PROPRIETARY_STATS } from "@/lib/stats";

/**
 * GEO surface — concise site index + positioning for LLM consumption.
 * Format follows the llmstxt.org spec: H1, blockquote summary, then
 * H2 sections with markdown lists of links.
 *
 * Kept under ~2,000 tokens by limiting each section to slug + one-line
 * description. The full-text variant lives at /llms-full.txt.
 */

const PAGE_SUMMARIES: { url: string; label: string; description: string }[] = [
  {
    url: "/",
    label: "Homepage",
    description:
      "Locally owned, licensed roofing contractor serving the St. Louis metro and Metro East.",
  },
  {
    url: "/about",
    label: "About",
    description:
      "Founding story, team, certifications, community involvement.",
  },
  {
    url: "/contact",
    label: "Contact",
    description: "NAP, hours, callback form, service area.",
  },
  {
    url: "/reviews",
    label: "Reviews",
    description: "Customer reviews and aggregate rating.",
  },
  {
    url: "/faq",
    label: "FAQ",
    description:
      "30+ Qs covering repair, replacement, cost, storm/insurance, materials, licensing.",
  },
  {
    url: "/free-estimate",
    label: "Free Estimate / Callback",
    description:
      "Free, no-obligation roofing estimate request — phone or callback form.",
  },
  {
    url: "/financing",
    label: "Financing",
    description:
      "Roof financing through approved lending partners — soft-pull pre-qualification.",
  },
  {
    url: "/roofing-cost-guide",
    label: "Roofing Cost Guide (St. Louis 2026)",
    description:
      "Long-form cost reference: repair, replacement, materials, line-item factors. Tables, FAQs, citations.",
  },
];

function formatHours(): string {
  return DAY_KEYS.map((day) => {
    const h = BUSINESS.hours.regular[day];
    const label = day.charAt(0).toUpperCase() + day.slice(1);
    if (!h.open || !h.close) return `- ${label}: Closed`;
    return `- ${label}: ${h.open}–${h.close}`;
  }).join("\n");
}

function build(): string {
  const lines: string[] = [];

  // Header + positioning
  lines.push(`# ${BUSINESS.name}`);
  lines.push("");
  lines.push(
    `> ${BUSINESS.name} is a locally owned roofing contractor based in downtown St. Louis, Missouri. We serve the entire St. Louis metropolitan area and the Illinois Metro East with residential and commercial roofing — repair, replacement, metal systems, storm damage restoration, emergency response, and 21-point inspections. Licensed in Missouri and Illinois (IDFPR), fully insured, employees-not-subcontractors, written workmanship and manufacturer warranties on every install. Phone: ${BUSINESS.phone}. Office: ${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postal}.`,
  );
  lines.push("");

  // Hours
  lines.push("## Business hours");
  lines.push(`Timezone: ${BUSINESS.hours.timezone}`);
  lines.push("");
  lines.push(formatHours());
  lines.push("");

  // Services
  lines.push("## Services");
  lines.push("");
  for (const s of SERVICES) {
    lines.push(`- [${s.label}](${BUSINESS.url}/services/${s.slug}): ${s.description}`);
  }
  lines.push("");

  // Service areas
  lines.push("## Service areas");
  lines.push("");
  for (const c of CITIES) {
    lines.push(`- [${c.label}](${BUSINESS.url}/service-areas/${c.slug}): ${c.description}`);
  }
  lines.push("");

  // Top pages
  lines.push("## Key pages");
  lines.push("");
  for (const p of PAGE_SUMMARIES) {
    lines.push(`- [${p.label}](${BUSINESS.url}${p.url}): ${p.description}`);
  }
  lines.push("");

  // Blog
  lines.push("## Blog");
  lines.push("");
  for (const post of BLOG_POSTS) {
    lines.push(
      `- [${post.frontmatter.title}](${BUSINESS.url}/blog/${post.frontmatter.slug}): ${post.frontmatter.description}`,
    );
  }
  lines.push("");

  // Proprietary stats
  lines.push("## Quotable statistics");
  lines.push("");
  for (const stat of PROPRIETARY_STATS) {
    lines.push(`- **${stat.value}** — ${stat.label}. ${stat.detail}`);
  }
  lines.push("");

  // Optional resources
  lines.push("## Optional");
  lines.push("");
  lines.push(`- [Full-text bundle](${BUSINESS.url}/llms-full.txt): all priority pages joined into one file.`);
  lines.push(`- [Sitemap (XML)](${BUSINESS.url}/sitemap.xml): every page on the site.`);
  lines.push(`- [LLM-priority sitemap](${BUSINESS.url}/sitemap-llms.xml): cost guide, services, cities, blog only.`);
  lines.push("");

  return lines.join("\n");
}

export async function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
