import * as React from "react";
import Link from "next/link";
import { ArrowRight, Cloud, MapPin, FileWarning } from "lucide-react";
import { Hero } from "@/components/content/Hero";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { ProcessSteps } from "@/components/content/ProcessSteps";
import { FAQSection } from "@/components/content/FAQSection";
import { ReviewsSection } from "@/components/content/ReviewsSection";
import { TrustBar } from "@/components/content/TrustBar";
import { CTABand } from "@/components/cta/CTABand";
import { JsonLd } from "@/components/schema/JsonLd";
import { BUSINESS } from "@/lib/constants";
import { SERVICES, CITIES } from "@/lib/navigation";
import {
  buildLocalBusiness,
  buildService,
  buildFAQPage,
  buildSpeakable,
} from "@/lib/schema";
import { cn } from "@/lib/utils";
import { REVIEWS } from "@/content/reviews";
import type { CityContent, CitySection, CityTableData } from "@/types/city";

const FORBIDDEN_PHRASES = [
  "all weather roofing systems is proud to serve",
  "homeowners trust us",
];

function assertNotTemplated(content: CityContent) {
  // Dev-only: throw on build if any forbidden templated phrasing slips into
  // the city's text content. Safer to break the build than to ship boilerplate.
  if (process.env.NODE_ENV === "production") return;
  const haystack = JSON.stringify(content).toLowerCase();
  for (const phrase of FORBIDDEN_PHRASES) {
    if (haystack.includes(phrase)) {
      throw new Error(
        `[CityPageTemplate] Forbidden templated phrase in ${content.slug}: "${phrase}"`,
      );
    }
  }
}

export function CityPageTemplate({ content }: { content: CityContent }) {
  assertNotTemplated(content);

  const cityReviews = REVIEWS.filter((r) =>
    content.citySpecificTestimonialIds.includes(r.id),
  );

  const schemas = [
    buildLocalBusiness({
      scopedToCity: content.nameDisplay,
      reviews: cityReviews,
    }),
    buildService({
      name: `Roofing in ${content.nameDisplay}`,
      description: content.seo.description,
      url: content.seo.canonical,
      scopedToCity: content.nameDisplay,
    }),
    buildFAQPage(content.faqs),
    buildSpeakable(),
  ];

  return (
    <>
      <div className="bg-hearthstone">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <Breadcrumb
            items={[
              { label: "Service Areas", href: "/service-areas" },
              { label: content.nameDisplay },
            ]}
          />
        </div>
        <Hero
          eyebrow={content.hero.eyebrow}
          headline={content.hero.h1}
          subhead={content.hero.subhead}
          trustBullets={content.hero.trustBullets}
          ctaClass={content.ctaClass}
          trackingLocation={`city_${content.slug}_hero`}
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
        <DirectAnswer eyebrow={`Quick read: ${content.nameDisplay}`}>
          <p>{content.directAnswer}</p>
        </DirectAnswer>

        {content.sections.map((section) => (
          <CitySectionRenderer key={section.id} section={section} />
        ))}
      </article>

      {content.processSteps && content.processSteps.length > 0 ? (
        <ProcessSteps
          headline={`Our process for ${content.nameDisplay} projects`}
          steps={content.processSteps}
        />
      ) : null}

      {cityReviews.length > 0 ? (
        <ReviewsSection
          reviews={cityReviews}
          showAggregate={false}
          className="border-t border-slate-200"
        />
      ) : null}

      <RelatedSection
        relatedServices={content.relatedServices}
        nearbyCities={content.nearbyCities}
      />

      <FAQSection faqs={content.faqs} emitSchema={false} />

      <CTABand
        headline={`When your ${content.nameDisplay} home needs a roofer, call ${BUSINESS.phone}`}
        subtext="A real person on our team picks up. Free, written, line-itemized estimates."
        ctaClass={content.ctaClass}
        background="navy"
        trackingLocation={`city_${content.slug}_final_cta`}
      />

      <JsonLd schemas={schemas} />
    </>
  );
}

function CitySectionRenderer({ section }: { section: CitySection }) {
  return (
    <section id={section.id} className="mt-12 scroll-mt-28 first:mt-0">
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
      <CitySectionBody section={section} />
    </section>
  );
}

function CitySectionBody({ section }: { section: CitySection }) {
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
      return <CityTableRenderer data={c.data} />;
    case "neighborhoods":
      return (
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {c.items.map((n) => (
            <li
              key={n.name}
              className="flex flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-card"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} aria-hidden="true" className="text-signal-amber" />
                <span className="font-heading text-base font-semibold text-storm-navy">
                  {n.name}
                </span>
              </span>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{n.profile}</p>
              {n.anchors && n.anchors.length > 0 ? (
                <p className="mt-2 text-xs text-slate-500">
                  Near: {n.anchors.join(", ")}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      );
    case "weather-history":
      return (
        <ol className="mt-4 flex flex-col gap-4 border-l-2 border-signal-amber/40 pl-5">
          {c.entries.map((e, i) => (
            <li key={i} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[27px] top-1 inline-flex size-4 items-center justify-center rounded-full border-2 border-signal-amber bg-white text-signal-amber"
              >
                <Cloud size={10} aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-signal-amber">
                {e.date} · {e.type}
              </p>
              <p className="mt-1 text-base font-medium text-slate-900">
                {e.description}
              </p>
              <p className="mt-1 text-sm text-slate-700">
                <strong>For your roof: </strong>
                {e.roofingImplication}
              </p>
            </li>
          ))}
        </ol>
      );
    case "regulatory":
      return (
        <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-signal-amber">
            <FileWarning size={16} aria-hidden="true" />
            Permitting & code notes
          </div>
          <dl className="mt-3 flex flex-col gap-3 text-sm">
            {c.permitOffice ? (
              <div>
                <dt className="font-semibold text-storm-navy">Permit office</dt>
                <dd className="text-slate-700">{c.permitOffice}</dd>
              </div>
            ) : null}
            {c.historicDistrictName ? (
              <div>
                <dt className="font-semibold text-storm-navy">Historic district</dt>
                <dd className="text-slate-700">{c.historicDistrictName}</dd>
              </div>
            ) : null}
            {c.notableCodes.length > 0 ? (
              <div>
                <dt className="font-semibold text-storm-navy">Notable codes &amp; rules</dt>
                <dd>
                  <ul className="mt-1 flex flex-col gap-1.5 text-slate-700">
                    {c.notableCodes.map((code, i) => (
                      <li key={i} className="flex gap-2">
                        <span aria-hidden="true" className="mt-1.5 size-1 shrink-0 rounded-full bg-storm-navy" />
                        <span>{code}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ) : null}
          </dl>
          {c.paragraph ? (
            <p className="mt-4 text-base leading-relaxed text-slate-700">{c.paragraph}</p>
          ) : null}
        </div>
      );
    case "quote":
      return (
        <figure className="mt-4 rounded-lg border-l-4 border-signal-amber bg-white p-5 shadow-card">
          <blockquote className="text-base italic text-slate-700">
            &ldquo;{c.quote}&rdquo;
          </blockquote>
          {c.attribution ? (
            <figcaption className="mt-2 text-sm font-medium text-storm-navy">
              — {c.attribution}
            </figcaption>
          ) : null}
        </figure>
      );
    case "process":
      return (
        <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {c.steps.map((step, i) => (
            <li key={step.title} className="rounded-lg border border-slate-200 bg-white p-4 shadow-card">
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
    case "architectural":
      return (
        <div className="mt-4">
          {c.paragraph ? (
            <p className="text-base leading-relaxed text-slate-700">{c.paragraph}</p>
          ) : null}
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-card">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-slate-500">
                Dominant eras
              </h3>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-slate-700">
                {c.eras.map((era) => (
                  <li key={era}>{era}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-card">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-slate-500">
                Common styles
              </h3>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-slate-700">
                {c.styles.map((style) => (
                  <li key={style}>{style}</li>
                ))}
              </ul>
            </div>
          </div>
          {c.pricingTable ? <CityTableRenderer data={c.pricingTable} /> : null}
        </div>
      );
  }
}

function CityTableRenderer({ data }: { data: CityTableData }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-card">
      <table className="w-full text-left text-sm">
        {data.caption ? <caption className="sr-only">{data.caption}</caption> : null}
        <thead className="border-b border-slate-200 bg-slate-50">
          <tr>
            {data.headers.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-heading text-storm-navy">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {data.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) =>
                ci === 0 ? (
                  <th
                    key={ci}
                    scope="row"
                    className="px-4 py-3 font-medium text-slate-700"
                  >
                    {cell}
                  </th>
                ) : (
                  <td key={ci} className="px-4 py-3 text-slate-900">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RelatedSection({
  relatedServices,
  nearbyCities,
}: {
  relatedServices: string[];
  nearbyCities: string[];
}) {
  const services = relatedServices
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .slice(0, 4);
  const cities = nearbyCities
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .slice(0, 3);

  if (services.length === 0 && cities.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12">
      <div className={cn("grid gap-6", services.length > 0 && cities.length > 0 ? "lg:grid-cols-2" : "")}>
        {services.length > 0 ? (
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-slate-500">
              Services we provide here
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {services.map((s) => (
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
          </div>
        ) : null}
        {cities.length > 0 ? (
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-slate-500">
              Nearby cities we serve
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {cities.map((c) => (
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
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default CityPageTemplate;
