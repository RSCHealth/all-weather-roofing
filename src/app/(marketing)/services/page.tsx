import type { Metadata } from "next";
import { Hero } from "@/components/content/Hero";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { ServicesGrid } from "@/components/content/ServicesGrid";
import { ServiceAreasSection } from "@/components/content/ServiceAreasSection";
import { ReviewsSection } from "@/components/content/ReviewsSection";
import { FAQSection } from "@/components/content/FAQSection";
import { CTABand } from "@/components/cta/CTABand";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { REVIEWS } from "@/content/reviews";
import { ShieldCheck, Wrench, FileText, Users } from "lucide-react";
import type { Faq } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Roofing Services in St. Louis | Residential, Commercial & Storm",
  description:
    "Roof repair, replacement, metal, commercial, storm damage, emergency, and inspections across the St. Louis metro and Metro East. Call (314) 834-6556.",
  canonical: "/services",
});

const SERVICES_HUB_FAQS: Faq[] = [
  {
    question: "What types of roofing services do you offer?",
    answer:
      "Residential and commercial roof repair, full replacement, metal roofing systems, storm and hail damage restoration, 24-hour emergency tarp service, industrial flat-roof systems, and 21-point roofing inspections. Each of those has a dedicated page above with details on scope, materials, warranty, and pricing ranges.",
  },
  {
    question: "Which service do I need — repair or replacement?",
    answer:
      "If damage is localized (one slope, one valley, one flashing failure) and the rest of the roof has plenty of life left, repair is usually the right call. If the roof is past 20 years old or showing wear across multiple slopes, replacement makes more financial sense. We give you the honest answer at inspection.",
  },
  {
    question: "Do you offer emergency or after-hours service?",
    answer:
      "Yes — we respond to active leaks and storm-damage emergencies, often same-day during business hours. Most after-hours calls return a voicemail callback within an hour. For urgent situations, call (314) 834-6556 and we'll triage immediately.",
  },
  {
    question: "How quickly can someone come out for an estimate?",
    answer:
      "Most non-emergency inspections happen within 3–5 business days. For active leaks, storm response, or insurance-deadline pressure, we typically get someone on the roof the same week — often same- or next-day depending on storm-response volume.",
  },
  {
    question: "Do you handle insurance claim work?",
    answer:
      "Yes, regularly. We meet adjusters on-site, document storm damage with photos, and provide the line-item scope insurers need. We are not public adjusters — that's a regulated role we don't perform — but our presence at the inspection often results in a more accurate scope of loss.",
  },
];

const SERVICES_HUB_DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "Licensed in MO + IL, fully insured",
    description: "Documents on request before any crew arrives.",
  },
  {
    icon: Wrench,
    title: "No subcontractors",
    description: "Every roofer on your home is a W-2 employee.",
  },
  {
    icon: FileText,
    title: "Written warranties",
    description: "Workmanship + manufacturer, both in writing.",
  },
  {
    icon: Users,
    title: "Local crews, local response",
    description: "Calls answered by St. Louis-based team — not a call center.",
  },
];

export default function ServicesHubPage() {
  return (
    <>
      <div className="bg-hearthstone">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <Breadcrumb items={[{ label: "Services" }]} />
        </div>
        <Hero
          eyebrow="Services"
          headline="Roofing Services Across the St. Louis Metro"
          subhead="Repair, replacement, metal, commercial, storm, emergency, and inspections — handled in-house by W-2 crews, never subcontractors."
          trustBullets={["Licensed & Insured", "GAF Certified", "Same-week scheduling"]}
          ctaClass="B"
          trackingLocation="services_hub_hero"
        />
      </div>

      <section className="mx-auto w-full max-w-3xl px-6 pt-12 lg:pt-16">
        <DirectAnswer eyebrow="Quick answer">
          <p>
            <strong>{BUSINESS.name}</strong> handles every kind of roofing
            work in the St. Louis metro and Metro East: residential and
            commercial roof repair, full replacement, metal roofing, storm
            and hail damage restoration, 24-hour emergency tarp response,
            industrial flat-roof systems, and 21-point inspections — call{" "}
            <strong>{BUSINESS.phone}</strong> for a free estimate.
          </p>
        </DirectAnswer>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
        <h2 className="font-heading text-h2 font-bold text-storm-navy">
          All services
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-700">
          Each service page covers scope, typical pricing, materials,
          warranty, and FAQs. Click any card to see the details for the work
          you&rsquo;re considering.
        </p>
        <div className="mt-8">
          <ServicesGrid />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <h2 className="font-heading text-h2 font-bold text-storm-navy">
            Why work with All Weather
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_HUB_DIFFERENTIATORS.map((d) => {
              const Icon = d.icon;
              return (
                <li
                  key={d.title}
                  className="flex h-full flex-col rounded-lg border border-slate-200 bg-hearthstone p-5"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-md bg-signal-amber/10 text-signal-amber">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-storm-navy">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">{d.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ServiceAreasSection />

      <ReviewsSection reviews={REVIEWS} showAggregate={false} />

      <CTABand
        headline="Talk to a real roofer about your project"
        subtext={`Call ${BUSINESS.phone}. Real person, real answers.`}
        ctaClass="B"
        background="amber-tint"
        trackingLocation="services_hub_mid_cta"
      />

      <FAQSection faqs={SERVICES_HUB_FAQS} />

      <CTABand
        headline="When you're ready, we're ready"
        subtext={`Call ${BUSINESS.phone} or request a callback — we'll respond fast either way.`}
        ctaClass="B"
        background="navy"
        trackingLocation="services_hub_final_cta"
      />
    </>
  );
}
