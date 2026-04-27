import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PhoneCTA } from "@/components/cta/PhoneCTA";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { FAQSection } from "@/components/content/FAQSection";
import { TrustBar } from "@/components/content/TrustBar";
import { ProcessSteps } from "@/components/content/ProcessSteps";
import { CTABand } from "@/components/cta/CTABand";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import type { Faq } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Free Roof Estimate in St. Louis | Call (314) 834-6556",
  description:
    "Free, no-obligation roofing estimates in St. Louis and the Metro East. Most quotes take 10 minutes on the phone. Call (314) 834-6556 or request a callback.",
  canonical: "/free-estimate",
});

const ESTIMATE_STEPS = [
  {
    title: "Phone call",
    description:
      "We listen first — what's going on with your roof, when did you notice it, what does the home need.",
  },
  {
    title: "On-site inspection",
    description:
      "A real roofer climbs the roof, documents the condition with photos, and walks you through what they found. Free, no pressure.",
  },
  {
    title: "Written estimate",
    description:
      "Itemized: materials, labor, dumpster, permit, warranty terms, timeline. The numbers don't move after you sign.",
  },
  {
    title: "Your decision",
    description:
      "Take your time. We don't do the same-day-only price game. Sleep on it, get a second bid, then call us back when you're ready.",
  },
];

const ESTIMATE_INCLUDES = [
  "Itemized materials cost (shingle line, underlayment, ice-and-water shield, drip edge, accessories)",
  "Itemized labor cost",
  "Dumpster delivery + removal fee",
  "Permit fee (where required by your municipality)",
  "Tear-off and disposal scope",
  "Decking allowance for repair or replacement",
  "Workmanship warranty terms (length + transferability)",
  "Manufacturer warranty terms (length + coverage)",
  "Estimated timeline + crew size",
  "Cleanup commitment + magnetic-sweep policy",
];

const ESTIMATE_FAQS: Faq[] = [
  {
    question: "Is the estimate really free?",
    answer:
      "Yes — there's no charge for the inspection or the written estimate, and there's no obligation to move forward. We don't credit a paid inspection back to a job, we don't charge mileage, and we don't require a signature the same day. If the answer is 'don't replace yet,' we'll tell you.",
  },
  {
    question: "How long does the inspection take?",
    answer:
      "Plan on 30–60 minutes for a single-family home. We climb the roof when conditions allow, photograph the condition, check accessible attic ventilation and decking, and walk you through findings before we leave. Larger or commercial properties take longer — we'll set an expectation when scheduling.",
  },
  {
    question: "Do I need to be home for the inspection?",
    answer:
      "Not strictly — we can inspect the roof exterior without anyone home. We do prefer you're available for at least the walkthrough at the end, since most homeowners want to see the photos and ask questions in person. If you can't be home, we'll send the documentation and schedule a follow-up call.",
  },
  {
    question: "Will you meet my insurance adjuster?",
    answer:
      "Yes. We routinely meet adjusters on-site for storm-damage claims, provide the photo and measurement documentation they need, and advocate for the work the home actually requires. We are not public adjusters — that's a regulated role we don't perform — but our presence at the inspection often leads to a more accurate scope of loss.",
  },
  {
    question: "How soon can you come out?",
    answer:
      "Most non-emergency inspections happen within 3–5 business days of your call. For active leaks, storm damage, or insurance-deadline pressure, we usually get someone out the same week — often same- or next-day depending on storm-response volume across the metro.",
  },
];

export default function FreeEstimatePage() {
  return (
    <>
      <section className="bg-hearthstone">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-signal-amber">
              Free roofing estimate
            </p>
            <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl lg:text-h1 lg:leading-tight">
              Get a Free Roofing Estimate — Fastest Way: Call Us
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              The fastest way to get an estimate is to call. Most quotes take
              10 minutes on the phone, with an on-site inspection scheduled
              same-week. No high-pressure pitches, no surprise add-ons.
            </p>
            <div className="mt-6">
              <PhoneCTA
                size="hero"
                variant="amber"
                trackingLocation="free_estimate_hero"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="aspect-[4/3] w-full rounded-xl border border-slate-200 bg-white shadow-card">
              <div className="flex h-full items-center justify-center text-sm text-slate-500">
                [Photo: roofer doing on-site inspection]
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 pt-12 lg:pt-16">
        <DirectAnswer eyebrow="What you'll get">
          <p>
            <strong>{BUSINESS.name}</strong> provides free, no-obligation
            roofing estimates for homes and businesses across the St. Louis
            metro and Metro East Illinois. Call <strong>{BUSINESS.phone}</strong>{" "}
            or submit a callback request below. Most estimates include a free
            21-point inspection of the roof system, decking, ventilation, and
            flashing.
          </p>
        </DirectAnswer>
      </section>

      <ProcessSteps headline="What to expect" steps={ESTIMATE_STEPS} />

      <section className="mx-auto w-full max-w-4xl px-6 py-12 lg:py-16">
        <h2 className="font-heading text-h2 font-bold text-storm-navy">
          What you&rsquo;ll receive
        </h2>
        <p className="mt-3 text-base text-slate-700">
          A real estimate names every line item. Anything missing on this list
          is a question worth asking — of us, or of any other contractor
          you&rsquo;re considering.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {ESTIMATE_INCLUDES.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
              <Check
                size={18}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-success"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <TrustBar />

      <section className="mx-auto w-full max-w-3xl px-6 py-12 lg:py-16">
        <h2 className="font-heading text-h2 font-bold text-storm-navy">
          Prefer a callback instead?
        </h2>
        <p className="mt-3 text-base text-slate-700">
          Drop your info and we&rsquo;ll reach out during your selected
          window — usually within two business hours.
        </p>
        <div className="mt-6">
          <CallbackForm compact />
        </div>
      </section>

      <FAQSection faqs={ESTIMATE_FAQS} />

      <CTABand
        headline={`When you're ready to talk, we're ready to answer: ${BUSINESS.phone}`}
        subtext="Phone goes to our office in downtown St. Louis. Real person, real answers."
        ctaClass="B"
        background="navy"
        trackingLocation="free_estimate_final_cta"
      />
    </>
  );
}
