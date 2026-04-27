import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { CitationLink } from "@/components/content/CitationLink";
import { CallOrCallbackBlock } from "@/components/cta/CallOrCallbackBlock";
import { CTABand } from "@/components/cta/CTABand";
import { FAQSection } from "@/components/content/FAQSection";
import { JsonLd } from "@/components/schema/JsonLd";
import { BUSINESS } from "@/lib/constants";
import { SERVICES, CITIES } from "@/lib/navigation";
import { buildArticle, buildFAQPage, buildSpeakable } from "@/lib/schema";
import { listPostsByCategory, getPostBySlug } from "@/content/blog";
import { readingTimeMinutes, type BlogPost } from "@/types/blog";

const CATEGORY_LABELS: Record<string, string> = {
  repair: "Repair",
  replacement: "Replacement",
  storm: "Storm",
  materials: "Materials",
  cost: "Cost",
  local: "Local",
};

export function BlogPostTemplate({ post }: { post: BlogPost }) {
  const { frontmatter, Body } = post;
  const minutes = readingTimeMinutes(frontmatter.wordCount);

  const schemas = [
    buildArticle({
      headline: frontmatter.title,
      description: frontmatter.description,
      url: `${BUSINESS.url}/blog/${frontmatter.slug}`,
      datePublished: frontmatter.datePublished,
      dateModified: frontmatter.dateModified,
      author: {
        name: frontmatter.author.name,
        jobTitle: frontmatter.author.role,
      },
      imagePath: frontmatter.heroImage,
      wordCount: frontmatter.wordCount,
      articleSection: CATEGORY_LABELS[frontmatter.category],
    }),
    buildFAQPage(frontmatter.faqs),
    buildSpeakable(),
  ];

  const sameCategoryPosts = listPostsByCategory(frontmatter.category)
    .filter((p) => p.frontmatter.slug !== frontmatter.slug)
    .slice(0, 3);

  const relatedServices = frontmatter.relatedServices
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .slice(0, 3);

  const relatedCities = frontmatter.relatedCities
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .slice(0, 2);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <>
      {/* 1. Breadcrumb */}
      <div className="bg-hearthstone">
        <div className="mx-auto max-w-4xl px-6 pt-6">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: CATEGORY_LABELS[frontmatter.category], href: `/blog?category=${frontmatter.category}` },
              { label: frontmatter.title },
            ]}
          />
        </div>

        {/* 2. Title + byline + dates + read time + category chip */}
        <div className="mx-auto max-w-4xl px-6 pt-6 pb-10">
          <span className="inline-flex rounded-full bg-storm-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-storm-navy">
            {CATEGORY_LABELS[frontmatter.category]}
          </span>
          <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl lg:text-h1 lg:leading-tight">
            {frontmatter.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
            <span>
              By <strong className="text-storm-navy">{frontmatter.author.name}</strong>,{" "}
              {frontmatter.author.role}
            </span>
            <span>·</span>
            <span>
              Published <time dateTime={frontmatter.datePublished}>{formatDate(frontmatter.datePublished)}</time>
            </span>
            <span>·</span>
            <span>
              Updated <time dateTime={frontmatter.dateModified}>{formatDate(frontmatter.dateModified)}</time>
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} aria-hidden="true" />
              {minutes} min read
            </span>
          </div>
        </div>
      </div>

      {/* 3. Hero image (priority) */}
      {frontmatter.heroImage ? (
        <div className="mx-auto max-w-4xl px-6">
          <Image
            src={frontmatter.heroImage}
            alt={frontmatter.heroImageAlt ?? frontmatter.title}
            width={1200}
            height={630}
            priority
            className="rounded-xl object-cover shadow-card"
          />
        </div>
      ) : null}

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[260px_1fr] lg:gap-12 lg:py-16">
        {/* 4. Table of Contents */}
        {frontmatter.toc.length > 0 ? (
          <aside className="lg:sticky lg:top-28 lg:self-start lg:order-first">
            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-slate-500">
              On this page
            </p>
            <ol className="mt-3 flex flex-col gap-1.5 text-sm">
              {frontmatter.toc.map((entry, i) => (
                <li key={entry.id} className="flex gap-2">
                  <span aria-hidden="true" className="w-5 shrink-0 text-right text-slate-400 tabular-nums">
                    {i + 1}.
                  </span>
                  <a
                    href={`#${entry.id}`}
                    className="text-slate-700 underline-offset-4 hover:text-storm-navy hover:underline"
                  >
                    {entry.label}
                  </a>
                </li>
              ))}
            </ol>
          </aside>
        ) : null}

        {/* 5–6. Direct Answer + MDX content */}
        <article className="min-w-0 lg:col-start-2">
          <DirectAnswer eyebrow="Quick answer">
            <p>{frontmatter.directAnswer}</p>
          </DirectAnswer>

          <div className="prose-blog mt-8 flex flex-col gap-4 text-base leading-relaxed text-slate-700">
            <Body />
          </div>

          {/* 7. Inline CTA at ~70% scroll — placed after content for natural reading rhythm */}
          <div className="mt-12">
            <CallOrCallbackBlock
              ctaClass={frontmatter.ctaClass ?? "C"}
              trackingLocation={`blog_${frontmatter.slug}_inline`}
            />
          </div>

          {/* Sources panel */}
          {frontmatter.citations && frontmatter.citations.length > 0 ? (
            <aside className="mt-10 rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-card">
              <p className="font-heading font-semibold text-storm-navy">
                Sources we cite
              </p>
              <ul className="mt-2 flex flex-col gap-2">
                {frontmatter.citations.map((c) => (
                  <li key={c.href}>
                    <CitationLink href={c.href} source={c.source}>
                      {c.label}
                    </CitationLink>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </article>
      </div>

      {/* 8. FAQ section */}
      <FAQSection faqs={frontmatter.faqs} emitSchema={false} />

      {/* 9. Author bio + 10/11. Related services / cities / 12. Related posts */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-card">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-slate-500">
              About the author
            </h3>
            <p className="mt-2 font-heading text-base font-semibold text-storm-navy">
              {frontmatter.author.name}
            </p>
            <p className="text-sm text-slate-700">{frontmatter.author.role}</p>
            <p className="mt-3 text-sm text-slate-700">
              {BUSINESS.name} is a locally owned, licensed roofing contractor
              serving the St. Louis metro and Metro East. Posts are written by
              the team and reviewed before publication.
            </p>
            <Link
              href="/about"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-signal-amber underline-offset-4 hover:underline"
            >
              About All Weather <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {relatedServices.length > 0 ? (
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-slate-500">
                Related services
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-storm-navy underline-offset-4 hover:text-signal-amber hover:underline"
                    >
                      {s.label}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
              {relatedCities.length > 0 ? (
                <>
                  <h3 className="mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Cities we serve
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {relatedCities.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/service-areas/${c.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-storm-navy underline-offset-4 hover:text-signal-amber hover:underline"
                        >
                          {c.label}
                          <ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          ) : null}

          {sameCategoryPosts.length > 0 ? (
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-slate-500">
                Related reading
              </h3>
              <ul className="mt-3 flex flex-col gap-3">
                {sameCategoryPosts.map((p) => (
                  <li key={p.frontmatter.slug}>
                    <Link
                      href={`/blog/${p.frontmatter.slug}`}
                      className="block rounded-md border border-slate-200 bg-white p-3 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
                    >
                      <p className="font-heading text-sm font-semibold text-storm-navy">
                        {p.frontmatter.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {readingTimeMinutes(p.frontmatter.wordCount)} min read
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      {/* 13. Final CTA */}
      <CTABand
        headline={`Question we didn't cover? Call ${BUSINESS.phone}.`}
        subtext="A real person on our team will answer — usually on the second ring."
        ctaClass={frontmatter.ctaClass ?? "C"}
        background="navy"
        trackingLocation={`blog_${frontmatter.slug}_final_cta`}
      />

      <JsonLd schemas={schemas} />
    </>
  );
}

// Re-export the loader so this template module is the single import surface
// for blog rendering.
export { getPostBySlug };
