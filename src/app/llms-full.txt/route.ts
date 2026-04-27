import { BUSINESS } from "@/lib/constants";
import { SERVICE_CONTENT } from "@/content/services";
import { CITY_CONTENT } from "@/content/cities";
import { BLOG_POSTS } from "@/content/blog";
import { HOMEPAGE_FAQS } from "@/content/homepage-faqs";
import { FAQ_CATEGORIES } from "@/content/faq-categories";
import type { Section } from "@/types/service";
import type { CitySection } from "@/types/city";

/**
 * Full-text assembly of priority pages — homepage summary, cost guide,
 * all 9 service pages, all 10 city pages, all blog posts. Joined with
 * clean H1/H2 markdown hierarchy. Designed for LLM consumption (GEO).
 *
 * Routed as a runtime route handler so it rebuilds whenever content
 * changes. Cached at the edge for 1 hour.
 */

function joinParagraphs(paragraphs: string[]): string {
  return paragraphs.map((p) => p.trim()).join("\n\n");
}

function serviceSectionToMarkdown(section: Section): string {
  const parts: string[] = [`## ${section.h2}`];
  if (section.directAnswer) parts.push(section.directAnswer);
  const c = section.content;
  switch (c.type) {
    case "prose":
      parts.push(joinParagraphs(c.paragraphs));
      break;
    case "bullets":
      parts.push(c.items.map((i) => `- ${i}`).join("\n"));
      break;
    case "table":
      parts.push(
        [
          `| ${c.data.headers.join(" | ")} |`,
          `| ${c.data.headers.map(() => "---").join(" | ")} |`,
          ...c.data.rows.map(
            (row) =>
              `| ${row
                .map((cell) => (typeof cell === "string" ? cell : cell.value))
                .join(" | ")} |`,
          ),
        ].join("\n"),
      );
      break;
    case "process":
      parts.push(
        c.steps.map((s, i) => `${i + 1}. **${s.title}** — ${s.description}`).join("\n"),
      );
      break;
    case "comparison":
      for (const col of c.columns) {
        parts.push(`### ${col.title}`);
        parts.push(col.bullets.map((b) => `- ${b}`).join("\n"));
      }
      break;
    case "quote":
      parts.push(`> ${c.quote}`);
      if (c.attribution) parts.push(`> — ${c.attribution}`);
      break;
  }
  return parts.join("\n\n");
}

function citySectionToMarkdown(section: CitySection): string {
  const parts: string[] = [`## ${section.h2}`];
  if (section.directAnswer) parts.push(section.directAnswer);
  const c = section.content;
  switch (c.type) {
    case "prose":
      parts.push(joinParagraphs(c.paragraphs));
      break;
    case "bullets":
      parts.push(c.items.map((i) => `- ${i}`).join("\n"));
      break;
    case "table":
      parts.push(
        [
          `| ${c.data.headers.join(" | ")} |`,
          `| ${c.data.headers.map(() => "---").join(" | ")} |`,
          ...c.data.rows.map((row) => `| ${row.join(" | ")} |`),
        ].join("\n"),
      );
      break;
    case "neighborhoods":
      parts.push(
        c.items
          .map((n) => `- **${n.name}**: ${n.profile}`)
          .join("\n"),
      );
      break;
    case "weather-history":
      parts.push(
        c.entries
          .map(
            (e) =>
              `- **${e.date} · ${e.type}**: ${e.description} _For your roof:_ ${e.roofingImplication}`,
          )
          .join("\n"),
      );
      break;
    case "regulatory":
      if (c.permitOffice) parts.push(`**Permit office:** ${c.permitOffice}`);
      if (c.historicDistrictName)
        parts.push(`**Historic district:** ${c.historicDistrictName}`);
      if (c.notableCodes.length > 0) {
        parts.push("**Notable codes:**");
        parts.push(c.notableCodes.map((code) => `- ${code}`).join("\n"));
      }
      if (c.paragraph) parts.push(c.paragraph);
      break;
    case "quote":
      parts.push(`> ${c.quote}`);
      if (c.attribution) parts.push(`> — ${c.attribution}`);
      break;
    case "process":
      parts.push(
        c.steps.map((s, i) => `${i + 1}. **${s.title}** — ${s.description}`).join("\n"),
      );
      break;
    case "architectural":
      parts.push(`**Eras:** ${c.eras.join("; ")}`);
      parts.push(`**Styles:** ${c.styles.join("; ")}`);
      if (c.paragraph) parts.push(c.paragraph);
      break;
  }
  return parts.join("\n\n");
}

function homepageMarkdown(): string {
  const parts: string[] = [];
  parts.push(`# ${BUSINESS.name} — St. Louis roofing contractor`);
  parts.push(
    `${BUSINESS.name} is a licensed residential and commercial roofing contractor based in downtown St. Louis, Missouri. We serve the entire St. Louis metro and Metro East Illinois with roof repair, replacement, storm damage, emergency response, and metal roofing.`,
  );
  parts.push(`Phone: ${BUSINESS.phone}`);
  parts.push(
    `Address: ${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postal}`,
  );
  parts.push(`URL: ${BUSINESS.url}`);

  parts.push("## Homepage FAQ");
  for (const f of HOMEPAGE_FAQS) {
    parts.push(`### ${f.question}`);
    parts.push(f.answer);
  }

  return parts.join("\n\n");
}

function faqsMarkdown(): string {
  const parts: string[] = ["# FAQ — St. Louis roofing"];
  for (const cat of FAQ_CATEGORIES) {
    parts.push(`## ${cat.title}`);
    parts.push(cat.description);
    for (const f of cat.faqs) {
      parts.push(`### ${f.question}`);
      parts.push(f.answer);
    }
  }
  return parts.join("\n\n");
}

function serviceMarkdown(): string {
  const parts: string[] = [];
  for (const service of SERVICE_CONTENT) {
    parts.push(`# ${service.hero.h1}`);
    parts.push(service.directAnswer);
    if (service.voiceQuickAnswer) {
      parts.push(`**Voice answer — ${service.voiceQuickAnswer.query}**`);
      parts.push(service.voiceQuickAnswer.answer);
    }
    for (const section of service.sections) {
      parts.push(serviceSectionToMarkdown(section));
    }
    parts.push("## FAQ");
    for (const f of service.faqs) {
      parts.push(`### ${f.question}`);
      parts.push(f.answer);
    }
    parts.push(`Source: ${service.seo.canonical}`);
    parts.push("---");
  }
  return parts.join("\n\n");
}

function cityMarkdown(): string {
  const parts: string[] = [];
  for (const city of CITY_CONTENT) {
    parts.push(`# ${city.hero.h1}`);
    parts.push(city.directAnswer);
    for (const section of city.sections) {
      parts.push(citySectionToMarkdown(section));
    }
    parts.push("## FAQ");
    for (const f of city.faqs) {
      parts.push(`### ${f.question}`);
      parts.push(f.answer);
    }
    parts.push(`Source: ${city.seo.canonical}`);
    parts.push("---");
  }
  return parts.join("\n\n");
}

function blogMarkdown(): string {
  const parts: string[] = [];
  for (const post of BLOG_POSTS) {
    parts.push(`# ${post.frontmatter.title}`);
    parts.push(
      `Published: ${post.frontmatter.datePublished} | Updated: ${post.frontmatter.dateModified} | Category: ${post.frontmatter.category}`,
    );
    parts.push(post.frontmatter.directAnswer);
    parts.push("## Body");
    parts.push(
      "_Body authored as a React component; see live page for full prose. The frontmatter, FAQs, and direct answer above capture the high-signal content for LLM extraction._",
    );
    parts.push("## FAQ");
    for (const f of post.frontmatter.faqs) {
      parts.push(`### ${f.question}`);
      parts.push(f.answer);
    }
    if (post.frontmatter.citations) {
      parts.push("## Sources");
      for (const c of post.frontmatter.citations) {
        parts.push(`- ${c.label} (${c.source}): ${c.href}`);
      }
    }
    parts.push(`Source: ${BUSINESS.url}/blog/${post.frontmatter.slug}`);
    parts.push("---");
  }
  return parts.join("\n\n");
}

function build(): string {
  return [
    homepageMarkdown(),
    "---",
    faqsMarkdown(),
    "---",
    "# Services",
    serviceMarkdown(),
    "# Service areas",
    cityMarkdown(),
    "# Blog",
    blogMarkdown(),
  ].join("\n\n");
}

export async function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
