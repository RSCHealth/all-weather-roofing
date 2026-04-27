import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { CTABand } from "@/components/cta/CTABand";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { listPublishedPosts } from "@/content/blog";
import { readingTimeMinutes, type BlogCategory } from "@/types/blog";

export const metadata: Metadata = buildMetadata({
  title: "St. Louis Roofing Blog | All Weather Roofing Systems",
  description:
    "Roofing tips, guides, and St. Louis-specific advice from All Weather Roofing Systems. Repair, replacement, storm damage, materials, costs.",
  canonical: "/blog",
});

const CATEGORIES: { value: BlogCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "repair", label: "Repair" },
  { value: "replacement", label: "Replacement" },
  { value: "storm", label: "Storm" },
  { value: "materials", label: "Materials" },
  { value: "cost", label: "Cost" },
  { value: "local", label: "Local" },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${BUSINESS.name} blog`,
  url: `${BUSINESS.url}/blog`,
  publisher: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.url,
  },
};

export default async function BlogHubPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const allPosts = listPublishedPosts();
  const posts =
    category && category !== "all"
      ? allPosts.filter((p) => p.frontmatter.category === category)
      : allPosts;
  const featured = posts.find((p) => p.frontmatter.featured) ?? posts[0];
  const rest = posts.filter((p) => p.frontmatter.slug !== featured?.frontmatter.slug);

  return (
    <>
      <div className="bg-hearthstone">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <Breadcrumb items={[{ label: "Blog" }]} />
        </div>
        <div className="mx-auto max-w-4xl px-6 pt-6 pb-10">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-signal-amber">
            Roofing knowledge
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl lg:text-h1 lg:leading-tight">
            Roofing Tips, Guides, and News from All Weather Roofing Systems
          </h1>
          <div className="mt-6">
            <DirectAnswer eyebrow="What's here">
              <p>
                Tips, guides, and St. Louis-specific roofing advice for
                homeowners. Posts are written by our team, reviewed before
                publication, and updated when the underlying facts change. Have
                a question we haven&rsquo;t covered? Call <strong>{BUSINESS.phone}</strong>.
              </p>
            </DirectAnswer>
          </div>
        </div>
      </div>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
        <nav aria-label="Filter by category" className="mb-8">
          <ul className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active =
                (cat.value === "all" && !category) || cat.value === category;
              const href =
                cat.value === "all" ? "/blog" : `/blog?category=${cat.value}`;
              return (
                <li key={cat.value}>
                  <Link
                    href={href}
                    className={
                      active
                        ? "inline-flex rounded-full bg-storm-navy px-3 py-1.5 text-sm font-medium text-white"
                        : "inline-flex rounded-full border border-storm-navy/20 bg-white px-3 py-1.5 text-sm font-medium text-storm-navy hover:bg-storm-navy hover:text-white"
                    }
                  >
                    {cat.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {posts.length === 0 ? (
          <p className="text-base text-slate-500">
            No posts in this category yet — check back soon.
          </p>
        ) : (
          <>
            {featured ? (
              <article className="mb-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-card">
                <Link
                  href={`/blog/${featured.frontmatter.slug}`}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
                >
                  <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:gap-10 lg:p-8">
                    <div className="flex aspect-[16/9] w-full max-w-xl items-center justify-center rounded-lg bg-storm-navy/5 text-sm text-slate-400 lg:order-last lg:max-w-md">
                      [Hero image]
                    </div>
                    <div className="flex-1">
                      <span className="inline-flex rounded-full bg-signal-amber/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-signal-amber">
                        Featured · {featured.frontmatter.category}
                      </span>
                      <h2 className="mt-3 font-heading text-2xl font-bold text-storm-navy lg:text-3xl">
                        {featured.frontmatter.title}
                      </h2>
                      <p className="mt-3 text-base text-slate-700">
                        {featured.frontmatter.description}
                      </p>
                      <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
                        <span>{featured.frontmatter.author.name}</span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={12} aria-hidden="true" />
                          {readingTimeMinutes(featured.frontmatter.wordCount)} min
                        </span>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-signal-amber">
                        Read the full post
                        <ArrowRight size={14} aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ) : null}

            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <li key={p.frontmatter.slug}>
                  <Link
                    href={`/blog/${p.frontmatter.slug}`}
                    className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-card transition-shadow hover:shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
                  >
                    <span className="inline-flex w-fit rounded-full bg-storm-navy/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-storm-navy">
                      {p.frontmatter.category}
                    </span>
                    <h3 className="mt-3 font-heading text-base font-semibold text-storm-navy">
                      {p.frontmatter.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-slate-700">
                      {p.frontmatter.description}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                      <span>{p.frontmatter.author.name}</span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} aria-hidden="true" />
                        {readingTimeMinutes(p.frontmatter.wordCount)} min
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <CTABand
        headline="Ready to talk about your specific roof?"
        subtext={`Posts are useful, but every roof is different. Call ${BUSINESS.phone}.`}
        ctaClass="C"
        background="navy"
        trackingLocation="blog_hub_final_cta"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
    </>
  );
}
