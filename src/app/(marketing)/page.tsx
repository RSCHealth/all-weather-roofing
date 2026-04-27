import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  FileText,
  Tag,
  Users,
  Wrench,
} from "lucide-react";
import { Hero } from "@/components/content/Hero";
import { TrustBar } from "@/components/content/TrustBar";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { ServicesGrid } from "@/components/content/ServicesGrid";
import { ServiceAreasSection } from "@/components/content/ServiceAreasSection";
import { ReviewsSection } from "@/components/content/ReviewsSection";
import { ProcessSteps } from "@/components/content/ProcessSteps";
import { FAQSection } from "@/components/content/FAQSection";
import { CitationLink } from "@/components/content/CitationLink";
import { CTABand } from "@/components/cta/CTABand";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { REVIEWS } from "@/content/reviews";
import { HOMEPAGE_FAQS } from "@/content/homepage-faqs";

export const metadata: Metadata = buildMetadata({
  title: "St. Louis Roofing Contractor | All Weather Roofing Systems",
  description:
    "Locally owned, licensed, insured roofing contractor serving the St. Louis metro and Metro East. Repair, replacement, storm damage. Call (314) 834-6556.",
  canonical: "/",
});

const PROCESS_STEPS = [
  {
    title: "Call",
    description:
      "Pick up the phone. We'll listen, ask the right questions, and tell you whether you need an inspection, a repair, or just a roofer's opinion.",
  },
  {
    title: "Inspection",
    description:
      "A real roofer climbs your roof, documents the actual condition with photos, and walks you through what they found. Free, no pressure.",
  },
  {
    title: "Estimate",
    description:
      "You get a written, itemized quote — materials, labor, warranty terms, timeline, cleanup. The numbers don't move after you sign.",
  },
  {
    title: "Install",
    description:
      "Our crew — employees, not subcontractors — shows up on the scheduled date with the right materials and works the job to completion.",
  },
  {
    title: "Warranty",
    description:
      "You receive workmanship and manufacturer warranties in writing. We still answer the phone five years from now if anything's off.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Users,
    title: "Locally owned, locally answered",
    description:
      "When you call, you reach a real person in St. Louis — not a national call center routing your roof emergency to whoever's available.",
  },
  {
    icon: Clock,
    title: "Same-day emergency response",
    description:
      "Active leak or storm damage? Call us and we'll have a crew tarp-and-secure your home, often the same day.",
  },
  {
    icon: FileText,
    title: "Written warranties — workmanship + manufacturer",
    description:
      "Every job ships with both warranties in writing. No verbal promises, no fine-print surprises.",
  },
  {
    icon: Tag,
    title: "Transparent, itemized pricing",
    description:
      "Materials, labor, dumpster, permit, cleanup — every line on your estimate is named. Zero surprise add-ons mid-project.",
  },
  {
    icon: Wrench,
    title: "No subcontractors",
    description:
      "Our crews are our employees. We control the schedule, the workmanship, and the warranty — start to finish.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed in MO and IL, fully insured",
    description:
      "Both Missouri and Illinois licensure, liability and workers' comp coverage on every job. We send credentials before we send a crew.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Serving St. Louis, St. Charles, and the Metro East"
        headline="Roofing Done Right — the First Time, On Time"
        subhead="From a single-shingle repair to a full metal roof, we're the locally owned crew St. Louis homeowners and businesses call when they want a roof that lasts and a contractor who shows up."
        trustBullets={[
          "Licensed & Insured",
          "GAF Certified",
          "Locally Owned",
        ]}
        ctaClass="B"
        trackingLocation="homepage_hero"
      />

      <TrustBar />

      <section className="mx-auto w-full max-w-3xl px-6 pt-12 lg:pt-16">
        <DirectAnswer eyebrow="About us">
          <p>
            <strong>{BUSINESS.name}</strong> is a licensed residential and
            commercial roofing contractor based in downtown St. Louis. We serve
            the entire St. Louis metro and Illinois Metro East with roof repair,
            full replacement, storm damage restoration, and metal roofing for
            homes and businesses. In St. Louis, asphalt shingle roofs typically
            average <strong>18–22 years</strong> of service life — summer heat,
            spring hail, and freeze-thaw cycles cut years off the manufacturer
            rating, which is why local experience matters.
          </p>
        </DirectAnswer>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="font-heading text-h2 font-bold text-storm-navy">
            Roofing services for the St. Louis metro
          </h2>
          <p className="mt-3 text-base text-slate-700">
            From a single shingle repair to a full metal roof — we handle every
            kind of roofing work across the St. Louis area.
          </p>
        </div>
        <ServicesGrid />
      </section>

      <CTABand
        headline="Not sure which service you need?"
        subtext={`Call us at ${BUSINESS.phone} — we'll figure it out. No pressure, no upsell.`}
        ctaClass="B"
        background="amber-tint"
        trackingLocation="homepage_services_cta"
      />

      <section
        className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16"
        aria-labelledby="why-heading"
      >
        <div className="mb-10 max-w-3xl">
          <h2
            id="why-heading"
            className="font-heading text-h2 font-bold text-storm-navy"
          >
            Why St. Louis homeowners pick us
          </h2>
          <p className="mt-3 text-base text-slate-700">
            We&rsquo;re not the cheapest roofer in St. Louis, and we&rsquo;re
            not the loudest. We&rsquo;re the one your neighbor recommends after
            we did their roof right the first time.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((d) => {
            const Icon = d.icon;
            return (
              <li
                key={d.title}
                className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-card"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-signal-amber/10 text-signal-amber">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-storm-navy">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {d.description}
                </p>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-sm text-slate-600">
          For storm-readiness research and best-practice retrofits we follow,
          see{" "}
          <CitationLink href="https://ibhs.org" source="IBHS">
            the Insurance Institute for Business &amp; Home Safety
          </CitationLink>
          .
        </p>
      </section>

      <ServiceAreasSection />

      <ReviewsSection reviews={REVIEWS} />

      <ProcessSteps headline="How it works" steps={PROCESS_STEPS} />

      <CTABand
        headline="Ready to talk to a real roofer, not a call center?"
        subtext="Most calls are answered on the second ring. We'll tell you whether you need a repair, a replacement, or just a second opinion."
        ctaClass="B"
        background="hearthstone"
        trackingLocation="homepage_mid_cta"
      />

      <FAQSection
        headline="Common questions, answered"
        intro="Five questions we hear from almost every new caller. If yours isn't listed, the answer is one phone call away."
        faqs={HOMEPAGE_FAQS}
      />

      <CTABand
        headline={`When your roof can't wait, call ${BUSINESS.phone}.`}
        subtext="Active leak, storm damage, or just ready for a free inspection — pick up the phone or leave a callback."
        ctaClass="B"
        background="navy"
        trackingLocation="homepage_final_cta"
      />

      <p className="mx-auto max-w-3xl px-6 pb-8 pt-4 text-xs text-slate-500">
        <Link href="/about" className="underline-offset-4 hover:underline">
          About All Weather Roofing Systems
        </Link>{" "}
        · Last updated:{" "}
        <time dateTime="2026-04-24">April 24, 2026</time>
      </p>
    </>
  );
}
