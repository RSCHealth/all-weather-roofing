import * as React from "react";
import Link from "next/link";
import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { Hero } from "@/components/content/Hero";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { VoiceQuickAnswer } from "@/components/content/VoiceQuickAnswer";
import { ProcessSteps } from "@/components/content/ProcessSteps";
import { FAQSection } from "@/components/content/FAQSection";
import { CitationLink } from "@/components/content/CitationLink";
import { TrustBar } from "@/components/content/TrustBar";
import { CTABand } from "@/components/cta/CTABand";
import { JsonLd } from "@/components/schema/JsonLd";
import { BUSINESS } from "@/lib/constants";
import { SERVICES, CITIES } from "@/lib/navigation";
import {
  buildService,
  buildFAQPage,
  buildSpeakable,
  buildHowTo,
} from "@/lib/schema";
import { cn } from "@/lib/utils";
import type { ServiceContent, Section, TableData } from "@/types/service";

const MID_CTA_THRESHOLD = 5;

export function ServicePageTemplate({ content }: { content: ServiceContent }) {
  const midPoint = Math.ceil(content.sections.length / 2);

  const schemas: (Record<string, unknown> | null)[] = [
    buildService({
      name: content.name,
      description: content.seo.description,
      url: content.seo.canonical,
    }),
    buildFAQPage(content.faqs),
    buildSpeakable(),
    content.processSteps.length > 0
      ? buildHowTo(`How we approach ${content.name.toLowerCase()}`, content.processSteps)
      : null,
    content.schemaExtras as Record<string, unknown> | undefined ?? null,
  ];

  return (
    <>
      <div className="bg-hearthstone">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: content.name },
            ]}
          />
        </div>
        <Hero
          eyebrow={content.hero.eyebrow}
          headline={content.hero.h1}
          subhead={content.hero.subhead}
          trustBullets={content.hero.trustBullets}
          ctaClass={content.ctaClass}
          trackingLocation={`service_${content.slug}_hero`}
          media={
            content.hero.imagePath
              ? {
                  kind: "image",
                  src: content.hero.imagePath,
                  alt: content.hero.imageAlt ?? content.hero.h1,
                }
              : undefined
          }
        />
      </div>

      <TrustBar />

      <article className="mx-auto w-full max-w-3xl px-6 py-12 lg:py-16">
        <DirectAnswer eyebrow="Quick answer">
          <p>{content.directAnswer}</p>
        </DirectAnswer>

        {content.voiceQuickAnswer ? (
          <VoiceQuickAnswer
            query={content.voiceQuickAnswer.query}
            answer={content.voiceQuickAnswer.answer}
          />
        ) : null}

        {content.sections.map((section, idx) => (
          <React.Fragment key={`${section.h2}-${idx}`}>
            <SectionRenderer section={section} />
            {content.sections.length > MID_CTA_THRESHOLD && idx === midPoint - 1 ? (
              <CTABand
                headline={`Ready for an estimate on your ${content.name.toLowerCase()} project?`}
                subtext={`Call ${BUSINESS.phone} — free, written, line-itemized.`}
                ctaClass={content.ctaClass}
                background="amber-tint"
                trackingLocation={`service_${content.slug}_mid_cta`}
                className="-mx-6 my-12 sm:rounded-xl"
              />
            ) : null}
          </React.Fragment>
        ))}

        {content.proprietaryStats.length > 0 ? (
          <section className="mt-12 mb-12">
            <h2 className="font-heading text-h2 font-bold text-storm-navy">
              By the numbers
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {content.proprietaryStats.map((stat) => (
                <li
                  key={stat.label}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-card"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-signal-amber/10 text-signal-amber">
                    <Sparkles size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading text-2xl font-bold text-storm-navy">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium text-slate-700">
                      {stat.label}
                    </p>
                    {stat.description ? (
                      <p className="mt-1 text-xs text-slate-500">
                        {stat.description}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {content.citations.length > 0 ? (
          <aside className="rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-card">
            <p className="font-heading font-semibold text-storm-navy">
              Sources we cite
            </p>
            <ul className="mt-2 flex flex-col gap-2">
              {content.citations.map((c) => (
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

      <FinancingCallout />

      <ProcessSteps headline="Our process" steps={content.processSteps} />

      <RelatedLinks
        relatedServices={content.relatedServices}
        relatedCities={content.relatedCities}
        relatedBlogPosts={content.relatedBlogPosts}
      />

      <FAQSection faqs={content.faqs} emitSchema={false} />

      <CTABand
        headline={`Ready to talk about your ${content.name.toLowerCase()} project?`}
        subtext={`Call ${BUSINESS.phone} — most calls are answered on the second ring.`}
        ctaClass={content.ctaClass}
        background="navy"
        trackingLocation={`service_${content.slug}_final_cta`}
      />

      <JsonLd schemas={schemas} />
    </>
  );
}

function SectionRenderer({ section }: { section: Section }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="font-heading text-h2 font-bold text-storm-navy">
        {section.h2}
      </h2>
      {section.directAnswer ? (
        <p
          data-speakable-summary
          className="mt-3 text-base leading-relaxed text-slate-700"
        >
          {section.directAnswer}
        </p>
      ) : null}
      <SectionBody section={section} />
    </section>
  );
}

function SectionBody({ section }: { section: Section }) {
  const c = section.content;
  switch (c.type) {
    case "prose":
      return (
        <div className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-slate-700">
          {c.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      );
    case "bullets":
      return (
        <ul className="mt-4 flex flex-col gap-2 text-base leading-relaxed text-slate-700">
          {c.items.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal-amber" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return <TableRenderer data={c.data} />;
    case "process":
      return (
        <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {c.steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-card"
            >
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-signal-amber font-heading text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-2 font-heading text-base font-semibold text-storm-navy">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      );
    case "comparison":
      return (
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {c.columns.map((col) => (
            <div
              key={col.title}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-card"
            >
              <h3 className="font-heading text-base font-semibold text-storm-navy">
                {col.title}
              </h3>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-slate-700">
                {col.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden="true" className="mt-1.5 size-1 shrink-0 rounded-full bg-storm-navy" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "quote":
      return (
        <figure className="mt-4 rounded-lg border-l-4 border-signal-amber bg-white p-5 shadow-card">
          <Quote
            size={20}
            aria-hidden="true"
            className="text-signal-amber"
          />
          <blockquote className="mt-2 text-base italic text-slate-700">
            &ldquo;{c.quote}&rdquo;
          </blockquote>
          {c.attribution ? (
            <figcaption className="mt-2 text-sm font-medium text-storm-navy">
              — {c.attribution}
            </figcaption>
          ) : null}
        </figure>
      );
  }
}

function TableRenderer({ data }: { data: TableData }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-card">
      <table className="w-full text-left text-sm">
        {data.caption ? (
          <caption className="sr-only">{data.caption}</caption>
        ) : null}
        <thead className="border-b border-slate-200 bg-slate-50">
          <tr>
            {data.headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="px-4 py-3 font-heading text-storm-navy"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {data.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => {
                const value = typeof cell === "string" ? cell : cell.value;
                const isRowHeader =
                  ci === 0 ||
                  (typeof cell !== "string" && cell.rowHeader === true);
                return isRowHeader ? (
                  <th
                    key={ci}
                    scope="row"
                    className="px-4 py-3 font-medium text-slate-700"
                  >
                    {value}
                  </th>
                ) : (
                  <td key={ci} className="px-4 py-3 text-slate-900">
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RelatedLinks({
  relatedServices,
  relatedCities,
  relatedBlogPosts,
}: {
  relatedServices: string[];
  relatedCities: string[];
  relatedBlogPosts: string[];
}) {
  const services = relatedServices
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .slice(0, 3);
  const cities = relatedCities
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .slice(0, 3);

  if (services.length === 0 && cities.length === 0 && relatedBlogPosts.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12">
      <div className="grid gap-6 lg:grid-cols-3">
        {services.length > 0 ? (
          <RelatedColumn title="Related services">
            {services.map((s) => (
              <RelatedLink key={s.slug} href={`/services/${s.slug}`} label={s.label} />
            ))}
          </RelatedColumn>
        ) : null}
        {cities.length > 0 ? (
          <RelatedColumn title="Cities we serve">
            {cities.map((c) => (
              <RelatedLink
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                label={c.label}
              />
            ))}
          </RelatedColumn>
        ) : null}
        {relatedBlogPosts.length > 0 ? (
          <RelatedColumn title="Related reading">
            {relatedBlogPosts.slice(0, 3).map((slug) => (
              <RelatedLink
                key={slug}
                href={`/blog/${slug}`}
                label={slugToTitle(slug)}
              />
            ))}
          </RelatedColumn>
        ) : null}
      </div>
    </section>
  );
}

function RelatedColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h3>
      <ul className={cn("mt-3 flex flex-col gap-2")}>{children}</ul>
    </div>
  );
}

function RelatedLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-semibold text-storm-navy underline-offset-4 hover:text-signal-amber hover:underline"
      >
        {label}
        <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </li>
  );
}

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function FinancingCallout() {
  return (
    <section
      className="border-y border-slate-200 bg-hearthstone"
      aria-label="Financing"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-base font-semibold text-storm-navy">
            Financing available on full roof replacements
          </p>
          <p className="mt-1 text-sm text-slate-700">
            Pay over time with low monthly payments. Same-day decisions on
            most applications.
          </p>
        </div>
        <Link
          href="/financing"
          className="inline-flex items-center gap-1.5 rounded-md border-2 border-storm-navy px-4 py-2 font-heading text-sm font-semibold text-storm-navy hover:bg-storm-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
        >
          See financing options
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default ServicePageTemplate;
