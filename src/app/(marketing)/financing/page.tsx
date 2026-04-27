import type { Metadata } from "next";
import { CreditCard, ShieldCheck, Calendar } from "lucide-react";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { FAQSection } from "@/components/content/FAQSection";
import { CTABand } from "@/components/cta/CTABand";
import { ProcessSteps } from "@/components/content/ProcessSteps";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import type { Faq } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Roofing Financing Options in St. Louis | All Weather Roofing Systems",
  description:
    "Roof financing made simple in St. Louis. Soft-pull pre-qualification, flexible terms, and 0% intro options for qualifying customers. Call (314) 834-6556.",
  canonical: "/financing",
});

const FINANCING_BENEFITS = [
  {
    icon: CreditCard,
    title: "0% intro options for qualifying customers",
    description:
      "Promotional offers run 6–18 months on certain programs. Final terms depend on lender and credit profile.",
  },
  {
    icon: Calendar,
    title: "Flexible terms 12–84 months",
    description:
      "Match the monthly payment to your budget. Longer terms mean lower payments; shorter terms mean less interest.",
  },
  {
    icon: ShieldCheck,
    title: "Soft-pull pre-qualification",
    description:
      "Find out what you may qualify for without a hard credit pull. Soft pulls don't affect your credit score.",
  },
];

const FINANCING_STEPS = [
  {
    title: "Talk through your project",
    description:
      "Call us with the project scope. We'll quote the work and identify which lending partner makes the most sense for your situation.",
  },
  {
    title: "Pre-qualify (soft pull)",
    description:
      "We send you a secure link to pre-qualify with a soft credit pull. You'll see estimated terms in minutes — no commitment, no credit-score impact.",
  },
  {
    title: "Schedule the work",
    description:
      "Pick the offer that fits, sign the contract, and we schedule the install. Funds disburse to us on completion (or per milestone for larger jobs).",
  },
];

const FINANCING_FAQS: Faq[] = [
  {
    question: "Will applying affect my credit?",
    answer:
      "Pre-qualification uses a soft credit pull, which does not affect your credit score. A hard pull only happens if you accept an offer and proceed with formal application. We'll always tell you which step you're on before any pull. No surprises.",
  },
  {
    question: "What credit score do I need?",
    answer:
      "Lending partners' minimum score requirements vary and are subject to change. Some programs accept scores in the 600s; others target stronger profiles for the best rates. The honest answer is: pre-qualify (it's free, soft pull) and you'll see exactly what's available to you. We don't pre-screen anyone out — let the lender tell you the answer.",
  },
  {
    question: "Do you offer zero-down financing?",
    answer:
      "Many of the financing programs we work with allow $0 down for qualifying customers. We never ask for full payment up front, and we don't require a down payment from financed customers in most program structures. Specifics vary by lender and project — we'll spell it out on your estimate.",
  },
  {
    question: "Can I finance storm-damage work?",
    answer:
      "Yes. Storm-damage projects can be financed in full, or you can finance only the portion not covered by insurance (typically your deductible plus any out-of-scope items). We'll structure the financing alongside the insurance scope so the math is clear before any work begins.",
  },
  {
    question: "Who are your lending partners?",
    answer:
      "We work with established home-improvement lenders that specialize in roofing and exterior projects. Specific partner names and their current promotional terms are confirmed at the time of application — partner programs change, and we want you on whichever offer is actually best when you apply, not which one was best six months ago. Call (314) 834-6556 for current options.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <section className="bg-hearthstone">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-signal-amber">
            Financing
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl lg:text-h1 lg:leading-tight">
            Roofing Financing Made Simple
          </h1>
          <div className="mt-6">
            <DirectAnswer eyebrow="Quick answer">
              <p>
                <strong>{BUSINESS.name}</strong> offers roofing financing
                through approved lending partners for qualifying homeowners
                and businesses across the St. Louis metro and Metro East. Terms
                range from <strong>12 to 84 months</strong> with soft-pull
                pre-qualification (no credit-score impact) and 0% intro options
                on select programs. Call <strong>{BUSINESS.phone}</strong> for
                current offers.
              </p>
            </DirectAnswer>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
        <h2 className="font-heading text-h2 font-bold text-storm-navy">
          What financing does for you
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-700">
          A roof is a home-system replacement, not a discretionary purchase.
          Financing exists so you don&rsquo;t delay a repair that&rsquo;s
          actively letting water in or postpone a replacement past the point
          where deeper damage starts.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {FINANCING_BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <li
                key={b.title}
                className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-card"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-signal-amber/10 text-signal-amber">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-storm-navy">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {b.description}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
          <h2 className="font-heading text-h2 font-bold text-storm-navy">
            Lending partners
          </h2>
          <p className="mt-3 text-base text-slate-700">
            We partner with established home-improvement lenders that
            specialize in roofing and exterior projects. Partner names and
            current promotional terms are confirmed at application — programs
            change frequently, and we&rsquo;d rather put you on the offer
            that&rsquo;s actually best <em>now</em> than recommend one based
            on stale terms.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <li
                key={i}
                aria-label={`Lender partner slot ${i}`}
                className="flex h-20 items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-500"
              >
                Partner logo {i}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-500">
            Partner logos and program details added pre-launch.
          </p>
        </div>
      </section>

      <ProcessSteps headline="How the process works" steps={FINANCING_STEPS} />

      <section className="mx-auto w-full max-w-4xl px-6 py-12 lg:py-16">
        <h2 className="font-heading text-h2 font-bold text-storm-navy">
          Typical payment scenarios
        </h2>
        <p className="mt-3 text-base text-slate-700">
          Illustrative monthly payments for common project sizes. Actual rates
          and terms depend on lender approval and your credit profile —
          contact us at <strong>{BUSINESS.phone}</strong> for current offers.
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-card">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Estimated monthly payment scenarios by project size and term length
            </caption>
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th scope="col" className="px-4 py-3 font-heading text-storm-navy">
                  Project size
                </th>
                <th scope="col" className="px-4 py-3 font-heading text-storm-navy">
                  60-month term
                </th>
                <th scope="col" className="px-4 py-3 font-heading text-storm-navy">
                  84-month term
                </th>
                <th scope="col" className="px-4 py-3 font-heading text-storm-navy">
                  120-month term
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                ["Repair / partial roof — ~$3,500", "[Owner-confirmed]", "[Owner-confirmed]", "[Owner-confirmed]"],
                ["Mid-size replacement — ~$10,000", "[Owner-confirmed]", "[Owner-confirmed]", "[Owner-confirmed]"],
                ["Large / metal — ~$22,000", "[Owner-confirmed]", "[Owner-confirmed]", "[Owner-confirmed]"],
              ].map(([size, ...cells]) => (
                <tr key={size}>
                  <th scope="row" className="px-4 py-3 font-medium text-slate-700">
                    {size}
                  </th>
                  {cells.map((cell, idx) => (
                    <td key={idx} className="px-4 py-3 text-slate-500">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Monthly payment cells populated by owner pre-launch with
          lender-verified rate scenarios. We never publish rates we
          can&rsquo;t honor.
        </p>
      </section>

      <FAQSection faqs={FINANCING_FAQS} />

      <CTABand
        headline="Questions about financing?"
        subtext={`Call ${BUSINESS.phone} — we'll walk you through it. Most questions are answered in five minutes flat.`}
        ctaClass="C"
        background="navy"
        trackingLocation="financing_final_cta"
      />
    </>
  );
}
