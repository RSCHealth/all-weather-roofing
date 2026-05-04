"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";
import type { Faq } from "@/types";

export type FAQSectionProps = {
  headline?: string;
  intro?: string;
  faqs: Faq[];
  className?: string;
  /** Emit FAQPage JSON-LD inline. Defaults to true; set false when a page-level
   *  schema generator (Prompt 28) handles emission centrally. */
  emitSchema?: boolean;
};

export function FAQSection({
  headline = "Frequently asked questions",
  intro,
  faqs,
  className,
  emitSchema = true,
}: FAQSectionProps) {
  const schema = emitSchema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      }
    : null;

  return (
    <section
      className={cn("mx-auto w-full max-w-3xl px-6 py-12 lg:py-16", className)}
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" className="font-heading text-h2 font-bold text-storm-navy">
        {headline}
      </h2>
      {intro ? (
        <p className="mt-3 text-base text-slate-700">{intro}</p>
      ) : null}
      <ul className="mt-6 flex flex-col gap-2">
        {faqs.map((faq) => (
          <li key={faq.question} className="rounded-lg border border-slate-200 bg-white shadow-card">
            <details
              className="group"
              onToggle={(e) => {
                if ((e.currentTarget as HTMLDetailsElement).open) {
                  trackEvent("faq_expand", { question: faq.question });
                }
              }}
            >
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
      {schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}
    </section>
  );
}

export default FAQSection;
