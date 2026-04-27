import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { CitationLink } from "@/components/content/CitationLink";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CTABand } from "@/components/cta/CTABand";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { FAQ_CATEGORIES } from "@/content/faq-categories";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions | All Weather Roofing Systems",
  description:
    "Roofing FAQs for St. Louis homeowners — repair vs replace, cost, storm damage, materials, warranty. Real answers from a locally owned roofing contractor.",
  canonical: "/faq",
});

const allFaqs = FAQ_CATEGORIES.flatMap((c) => c.faqs);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-hearthstone">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-signal-amber">
            Knowledge base
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl lg:text-h1 lg:leading-tight">
            Roofing FAQ — St. Louis Roofing Contractor Answers
          </h1>
          <div className="mt-6">
            <DirectAnswer eyebrow="The short version">
              <p>
                Most roofing questions in St. Louis come down to six areas:
                repair vs. replace, cost, timing, storm and insurance,
                materials, and contractor vetting. The answers below cover the
                questions we hear most — call <strong>{BUSINESS.phone}</strong>{" "}
                if yours isn&rsquo;t listed.
              </p>
            </DirectAnswer>
          </div>

          {/* Category jump links */}
          <nav aria-label="FAQ categories" className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {FAQ_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <a
                    href={`#${cat.slug}`}
                    className="inline-flex rounded-full border border-storm-navy/20 bg-white px-3 py-1.5 text-sm font-medium text-storm-navy hover:bg-storm-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="mx-auto w-full max-w-3xl px-6 py-12 lg:py-16">
        {FAQ_CATEGORIES.map((category) => (
          <section
            key={category.slug}
            id={category.slug}
            aria-labelledby={`${category.slug}-heading`}
            className="mb-14 scroll-mt-28"
          >
            <h2
              id={`${category.slug}-heading`}
              className="font-heading text-h2 font-bold text-storm-navy"
            >
              {category.title}
            </h2>
            <p className="mt-2 text-base text-slate-700">{category.description}</p>

            <ul className="mt-5 flex flex-col gap-2">
              {category.faqs.map((faq) => (
                <li
                  key={faq.question}
                  className="rounded-lg border border-slate-200 bg-white shadow-card"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-heading text-base font-semibold text-storm-navy [&::-webkit-details-marker]:hidden">
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className="shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="border-t border-slate-200 px-5 py-4 text-sm leading-relaxed text-slate-700">
                      <p data-speakable-summary>{faq.answer}</p>
                    </div>
                  </details>
                </li>
              ))}
            </ul>

            {/* Per-category CTA */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-md border border-slate-200 bg-hearthstone px-4 py-3 text-sm">
              <span className="text-slate-700">
                Still have questions about {category.title.toLowerCase()}?
              </span>
              <PhoneLink
                size="sm"
                trackingLocation={`faq_${category.slug}_cta`}
              />
            </div>
          </section>
        ))}

        {/* Citations footer */}
        <aside className="mt-12 rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-card">
          <p className="font-heading font-semibold text-storm-navy">
            Helpful resources we cite
          </p>
          <ul className="mt-2 flex flex-col gap-2">
            <li>
              <CitationLink href="https://ibhs.org" source="IBHS">
                Insurance Institute for Business &amp; Home Safety — storm
                resilience and FORTIFIED standards
              </CitationLink>
            </li>
            <li>
              <CitationLink
                href="https://pr.mo.gov"
                source="Missouri Division of Professional Registration"
              >
                Missouri licensing verification (state regulator)
              </CitationLink>
            </li>
            <li>
              <CitationLink href="https://www.nrca.net" source="NRCA">
                National Roofing Contractors Association — best-practice
                installation guidance
              </CitationLink>
            </li>
          </ul>
        </aside>
      </div>

      <CTABand
        headline={`Question we didn't cover? Call ${BUSINESS.phone}.`}
        subtext="A real person on our team will answer — usually on the second ring."
        ctaClass="C"
        background="navy"
        trackingLocation="faq_final_cta"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
