import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { CitationLink } from "@/components/content/CitationLink";
import { VoiceQuickAnswer } from "@/components/content/VoiceQuickAnswer";
import { CTABand } from "@/components/cta/CTABand";
import { FAQSection } from "@/components/content/FAQSection";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import type { Faq } from "@/types";

const PUBLISHED = "2026-01-15";
const UPDATED = "2026-04-26";

export const metadata: Metadata = buildMetadata({
  title: "St. Louis Roofing Cost Guide 2026 | Repair & Replacement Prices",
  description:
    "What roofs really cost in St. Louis in 2026 — repair, replacement, and storm damage by line item. Free estimates: (314) 834-6556.",
  canonical: "/roofing-cost-guide",
});

const COST_GUIDE_FAQS: Faq[] = [
  {
    question: "What's the cheapest roof material in St. Louis?",
    answer:
      "3-tab asphalt shingles are the cheapest installed material at roughly $3.50–$4.75 per square foot — but they're rarely the right call for an owner-occupied home. Architectural asphalt costs only $1–$3 more per square foot installed, lasts 10–20 years longer, and carries hail and wind ratings 3-tab can't match. The 'cheapest' material is usually the most expensive over a 25-year ownership window.",
  },
  {
    question: "How much does insurance typically pay for hail damage in St. Louis?",
    answer:
      "When hail damage meets a carrier's threshold, insurance typically covers full replacement of the affected slopes (or the full roof if matching can't be achieved) minus your deductible. Deductibles in St. Louis hail-prone zip codes commonly run $1,500–$5,000. Insurance pays based on the scope they approve — which is why having a contractor at the inspection often results in a more accurate scope.",
  },
  {
    question: "Why are St. Louis roofing estimates so different from each other?",
    answer:
      "Major reasons: material grade (cheap 3-tab vs. high-end architectural), labor source (W-2 employees vs. day-labor subs), warranty terms (1-year vs. lifetime workmanship), inclusion of underlayment / ice-and-water shield / drip edge, permit and dumpster costs (sometimes hidden), and tear-off vs. roof-over decisions. Always read line items, not just totals — a $9,500 estimate that includes everything is cheaper than an $8,000 estimate that quietly excludes decking and permit.",
  },
  {
    question: "Do I need to replace the whole roof or just a section?",
    answer:
      "If damage is localized (one slope from wind, one valley from a tree branch) and the rest of the roof has plenty of life left, partial replacement is reasonable. For a roof that's 18+ years old or showing wear across multiple slopes, partial replacement is usually a poor investment — you're spending real money on a roof you'll replace inside five years anyway. We'll give you the honest answer at inspection.",
  },
  {
    question: "What's the permit fee for a roof in St. Louis County?",
    answer:
      "Permit fees in the St. Louis area generally range $75–$250 for a residential reroof, depending on municipality and project value. The City of St. Louis, St. Louis County, St. Charles County, and the Metro East cities each have slightly different fee schedules and inspection requirements. Permit fees are itemized on every estimate so you see the real cost.",
  },
  {
    question: "Can I finance a roof replacement?",
    answer:
      "Yes — see our financing page. Soft-pull pre-qualification (no credit-score impact), terms from 12 to 84 months, and 0% intro options on select programs for qualifying customers. You can finance the full project, or finance only the portion not covered by insurance on a storm-damage claim.",
  },
  {
    question: "What's the difference between repair and replacement cost?",
    answer:
      "Most repairs run $400–$1,800 in St. Louis. Full replacement runs $9,000–$18,000 for asphalt on a typical home and climbs from there for metal, slate, or large/complex roofs. Repair is the right call for localized damage on a roof with life left; replacement is the right call once you're chasing leaks across multiple slopes or the roof is past 20 years old.",
  },
  {
    question: "Does the cost change between seasons?",
    answer:
      "Yes — modestly. Late fall and winter typically see the lowest material and labor pricing in St. Louis (5–10% softer pricing common) because the industry slows down. Late spring through mid-fall is peak season — material prices are firmer and lead times stretch. Storm-driven demand spikes (post-hail) push pricing up sharply. If your roof can wait, scheduling in the off-season is usually the smartest financial move.",
  },
  {
    question: "How much does a 21-point inspection cost?",
    answer:
      "Free. We don't charge for inspections, we don't credit a paid inspection back to a job, and we don't pressure you for a same-day signature. The inspection covers the roof system, decking (where accessible), ventilation, flashing, and underlayment indicators — and you get the photos and findings whether you hire us or not.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "St. Louis Roofing Cost Guide: What a Roof Really Costs in 2026",
  datePublished: PUBLISHED,
  dateModified: UPDATED,
  author: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.url,
  },
  publisher: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.url,
  },
  mainEntityOfPage: `${BUSINESS.url}/roofing-cost-guide`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COST_GUIDE_FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to read a roofing estimate",
  step: [
    "Check that materials are itemized by line — shingle line, underlayment, ice-and-water shield, drip edge, accessories.",
    "Confirm tear-off scope and disposal are included with a dumpster line.",
    "Verify decking allowance — a per-sheet replacement rate must be specified.",
    "Confirm permit cost is itemized (not buried in 'misc').",
    "Read the workmanship warranty terms and the manufacturer warranty terms separately.",
    "Confirm the timeline and crew commitment in writing.",
  ].map((text, idx) => ({
    "@type": "HowToStep",
    position: idx + 1,
    name: `Step ${idx + 1}`,
    text,
  })),
};

export default function RoofingCostGuidePage() {
  const formattedUpdated = new Date(UPDATED).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="bg-hearthstone">
        <div className="mx-auto max-w-4xl px-6 pt-8 pb-12 lg:pt-10 lg:pb-16">
          <Breadcrumb items={[{ label: "Roofing Cost Guide" }]} />
          <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-signal-amber">
            Cost guide · 2026
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl lg:text-h1 lg:leading-tight">
            St. Louis Roofing Cost Guide: What a Roof Really Costs in 2026
          </h1>
          <p className="mt-3 text-xs text-slate-500">
            <span>Published: <time dateTime={PUBLISHED}>January 15, 2026</time></span>
            <span className="mx-2">·</span>
            <span>Updated: <time dateTime={UPDATED}>{formattedUpdated}</time></span>
          </p>
          <div className="mt-6">
            <DirectAnswer eyebrow="The short version">
              <p>
                In St. Louis, a typical asphalt shingle roof replacement on a
                2,000 sq ft home costs <strong>$8,500–$14,500</strong> in 2026.
                Repairs range <strong>$400–$1,800</strong> depending on scope.
                Metal roofing runs <strong>$16,000–$28,000</strong> for a
                comparable footprint. Storm damage is often covered by
                homeowners insurance. Below we break down every line item —
                labor, materials, permits, and the St. Louis-specific factors
                that move prices up or down.
              </p>
            </DirectAnswer>
          </div>
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl px-6 py-12 lg:py-16">
        <VoiceQuickAnswer
          query="How much does a roof cost in St. Louis?"
          answer="A typical asphalt shingle replacement runs $8,500 to $14,500. Repairs start around $400. Metal systems run $16,000 to $28,000."
        />

        {/* Table 1: Repair costs */}
        <section className="mb-12 scroll-mt-28" id="repair-costs">
          <h2 className="font-heading text-h2 font-bold text-storm-navy">
            How much do common roof repairs cost in St. Louis?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700" data-speakable-summary>
            Most St. Louis residential roof repairs run <strong>$400–$1,800</strong>{" "}
            depending on scope. Simple shingle replacements sit on the low end;
            multi-layer flashing rebuilds and decking patches sit on the higher
            end. Below are 2026 ranges for the repair types we quote most.
          </p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Common roof repair cost ranges in St. Louis, 2026
              </caption>
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">
                    Repair type
                  </th>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">
                    Typical cost
                  </th>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ["Blown-off / replacement shingles (small section)", "$400 – $700", "Color match approximate on aged roofs."],
                  ["Pipe boot or vent flashing replacement", "$300 – $550", "Common cause of slow ceiling leaks."],
                  ["Chimney flashing rebuild", "$700 – $1,400", "Step + counter-flashing replaced together."],
                  ["Valley leak repair", "$600 – $1,200", "Often involves ice-and-water shield rework."],
                  ["Decking sheet replacement (per 4x8)", "$80 – $140", "Rate per sheet; quantity varies."],
                  ["Emergency tarp-and-secure", "$300 – $700", "Stopgap to stop active water intrusion."],
                  ["Skylight reseal", "$450 – $900", "Full replacement billed separately."],
                ].map(([type, price, note]) => (
                  <tr key={type}>
                    <th scope="row" className="px-4 py-3 font-medium text-slate-700">
                      {type}
                    </th>
                    <td className="px-4 py-3 text-slate-900 tabular-nums">{price}</td>
                    <td className="px-4 py-3 text-slate-500">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Table 2: Replacement costs */}
        <section className="mb-12 scroll-mt-28" id="replacement-costs">
          <h2 className="font-heading text-h2 font-bold text-storm-navy">
            How much does a new roof cost in St. Louis?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700" data-speakable-summary>
            Full replacement on a typical 2,000 sq ft St. Louis home runs{" "}
            <strong>$8,500–$14,500 for architectural asphalt</strong>,{" "}
            <strong>$16,000–$28,000 for standing-seam metal</strong>, and
            climbs from there for designer materials, slate, and tile. The
            table below shows installed price per square foot and a typical
            full-house cost for each material.
          </p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Roof replacement cost by material in St. Louis, 2026
              </caption>
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">Material</th>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">Installed / sq ft</th>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">2,000 sq ft home</th>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">Warranty</th>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">Lifespan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ["3-tab asphalt", "$3.50 – $4.75", "$7,000 – $9,500", "20–25 yr", "15–20 yr"],
                  ["Architectural asphalt", "$4.50 – $7.50", "$9,000 – $15,000", "30–50 yr", "20–28 yr"],
                  ["Designer / luxury asphalt", "$7.00 – $10.50", "$14,000 – $21,000", "Lifetime", "25–35 yr"],
                  ["Standing-seam metal", "$9.00 – $16.00", "$18,000 – $32,000", "40–50 yr", "40–70 yr"],
                  ["Corrugated metal", "$6.50 – $10.50", "$13,000 – $21,000", "30–40 yr", "30–50 yr"],
                  ["Synthetic slate / composite", "$10.50 – $16.50", "$21,000 – $33,000", "Lifetime", "40–50 yr"],
                  ["Cedar shake", "$9.50 – $15.00", "$19,000 – $30,000", "25–40 yr", "25–40 yr"],
                  ["Natural slate / tile", "$18.00 – $35.00+", "$36,000 – $70,000+", "Lifetime", "75–100 yr"],
                ].map(([material, sqft, total, warranty, lifespan]) => (
                  <tr key={material}>
                    <th scope="row" className="px-4 py-3 font-medium text-slate-700">{material}</th>
                    <td className="px-4 py-3 tabular-nums text-slate-900">{sqft}</td>
                    <td className="px-4 py-3 tabular-nums text-slate-900">{total}</td>
                    <td className="px-4 py-3 text-slate-700">{warranty}</td>
                    <td className="px-4 py-3 text-slate-700">{lifespan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Ranges reflect current St. Louis market pricing. Steep-pitch,
            two-story, multi-layer tear-off, and complex roofs cost more — see
            the add-on factor table below.
          </p>
        </section>

        {/* Table 3: Add-on factors */}
        <section className="mb-12 scroll-mt-28" id="cost-factors">
          <h2 className="font-heading text-h2 font-bold text-storm-navy">
            What drives roofing costs up or down in St. Louis?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700" data-speakable-summary>
            The base price tells you part of the story. Pitch, height,
            existing layer count, decking condition, and permit jurisdiction
            each move the final number. Below are the typical St. Louis
            adjustments we apply on estimates.
          </p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                St. Louis add-on cost factors and typical pricing
              </caption>
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">Factor</th>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">Typical adjustment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ["Steep pitch (8/12 or higher)", "+15–35% labor"],
                  ["Two-story access", "+5–15% labor"],
                  ["Tear-off of two existing layers", "+$1,200–$2,500"],
                  ["Decking replacement (per 4x8 sheet)", "$80–$140"],
                  ["Drip edge upgrade", "$1.25–$2.50 per linear foot"],
                  ["Synthetic underlayment upgrade", "$0.40–$0.85 per sq ft"],
                  ["Ice-and-water shield (eaves + valleys)", "Included on most estimates; ~$1.10–$1.75 sq ft over coverage area"],
                  ["Permit (St. Louis-area municipality)", "$75–$250"],
                  ["Dumpster delivery + removal", "$350–$600"],
                  ["Skylight remove-and-replace per unit", "$300–$1,200"],
                ].map(([factor, adj]) => (
                  <tr key={factor}>
                    <th scope="row" className="px-4 py-3 font-medium text-slate-700">{factor}</th>
                    <td className="px-4 py-3 text-slate-900">{adj}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Table 4: Timeline */}
        <section className="mb-12 scroll-mt-28" id="timeline">
          <h2 className="font-heading text-h2 font-bold text-storm-navy">
            How long does each kind of roofing project take?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700" data-speakable-summary>
            Most St. Louis residential replacements complete in{" "}
            <strong>1–3 days on-site</strong> once materials arrive. Repairs are
            usually same-day or next-day. Below is a typical timeline for the
            project types we quote.
          </p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Typical project timeline</caption>
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">Project</th>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">From call to completion</th>
                  <th scope="col" className="px-4 py-3 font-heading text-storm-navy">On-site days</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ["Emergency tarp", "Same day (during business hours)", "Hours"],
                  ["Minor repair (1–2 leaks)", "Same week", "0.5–1 day"],
                  ["Asphalt replacement (1,800–2,800 sq ft)", "1–3 weeks", "1–2 days"],
                  ["Metal standing-seam install", "3–6 weeks", "3–6 days"],
                  ["Storm-damage insurance work", "2–8 weeks (claim-dependent)", "1–3 days"],
                ].map(([project, end, onsite]) => (
                  <tr key={project}>
                    <th scope="row" className="px-4 py-3 font-medium text-slate-700">{project}</th>
                    <td className="px-4 py-3 text-slate-900">{end}</td>
                    <td className="px-4 py-3 text-slate-700">{onsite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Band — auto-inserted mid-page */}
        <CTABand
          headline="Want an accurate number for YOUR roof?"
          subtext={`Tables are useful, but every roof is different. Call ${BUSINESS.phone} for a free, written estimate on your specific home.`}
          ctaClass="C"
          background="amber-tint"
          trackingLocation="cost_guide_mid_cta"
          className="-mx-6 mb-12 sm:rounded-xl"
        />

        {/* Insurance vs. out-of-pocket */}
        <section className="mb-12 scroll-mt-28" id="insurance-vs-oop">
          <h2 className="font-heading text-h2 font-bold text-storm-navy">
            How does insurance change the cost picture?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700" data-speakable-summary>
            For storm-driven work in St. Louis, insurance often pays the
            majority of the project cost minus your deductible — meaning
            your <em>out-of-pocket</em> cost is far smaller than the headline
            number on the contract. The catch is the scope: what insurance
            approves often differs from what your roof actually needs.
          </p>
          <div className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-slate-700">
            <p>
              When hail or wind damage meets a carrier&rsquo;s threshold, the
              insurance scope of loss specifies what the carrier will pay for —
              usually shingle replacement on the affected slopes, and sometimes
              the entire roof if matching can&rsquo;t be achieved. Items like
              code-required upgrades (synthetic underlayment, ice-and-water
              shield, drip edge), decking damage hidden under shingles, and
              ventilation upgrades are often <em>not</em> in the initial scope —
              and have to be supplemented or paid out-of-pocket.
            </p>
            <p>
              See our <Link href="/services/storm-damage-roofing" className="font-semibold text-signal-amber underline-offset-4 hover:underline">storm damage</Link>{" "}
              and <Link href="/services/emergency-roofing" className="font-semibold text-signal-amber underline-offset-4 hover:underline">emergency roofing</Link>{" "}
              pages for how we handle insurance work specifically — including
              which conversations to have with your adjuster on-site.
            </p>
          </div>
        </section>

        {/* How to read an estimate (HowTo) */}
        <section className="mb-12 scroll-mt-28" id="how-to-read-estimate">
          <h2 className="font-heading text-h2 font-bold text-storm-navy">
            How do I read a roofing estimate?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700" data-speakable-summary>
            A real roofing estimate names every line item — materials, labor,
            tear-off, decking allowance, dumpster, permit, warranty terms, and
            timeline. Anything missing is a question worth asking the
            contractor.
          </p>
          <ol className="mt-6 flex flex-col gap-4">
            {[
              [
                "Confirm materials are itemized by line",
                "Shingle line, underlayment, ice-and-water shield, drip edge, ridge cap, accessories. A blanket 'materials' line is a yellow flag.",
              ],
              [
                "Confirm tear-off scope and disposal are included",
                "Look for an explicit 'tear-off' line and a separate 'dumpster' line. Reroof-over (no tear-off) should be flagged in writing if proposed.",
              ],
              [
                "Verify the decking allowance",
                "Decking damage is found during tear-off, not before. The estimate must specify a per-sheet replacement rate so surprises stay small.",
              ],
              [
                "Confirm permit cost is itemized",
                "Permit fees vary $75–$250 in the St. Louis area. They should appear as their own line, not buried in 'misc.'",
              ],
              [
                "Read both warranty terms separately",
                "Workmanship warranty (from the contractor) and manufacturer warranty (from the shingle/metal maker) are different things with different terms.",
              ],
              [
                "Confirm timeline and crew commitment",
                "How many days on-site, with how many roofers — in writing. A vague 'we'll start in a couple weeks' is hard to hold accountable.",
              ],
            ].map(([title, body], idx) => (
              <li
                key={title}
                className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-card"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-signal-amber font-heading text-base font-bold text-white"
                >
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-storm-navy">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* St. Louis-specific notes */}
        <section className="mb-12 scroll-mt-28" id="st-louis-specific">
          <h2 className="font-heading text-h2 font-bold text-storm-navy">
            What&rsquo;s specific to St. Louis pricing?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700" data-speakable-summary>
            St. Louis pricing is driven by hail frequency, freeze-thaw cycles,
            historic-neighborhood roof styles, and the difference between
            permit jurisdictions on either side of the river.
          </p>
          <div className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-slate-700">
            <p>
              <strong>Seasonality:</strong> Late fall and winter typically see
              5–10% softer pricing on materials and labor as the industry
              slows. Late spring through mid-fall is peak season, and major
              hail events spike pricing for weeks afterward.
            </p>
            <p>
              <strong>Metro East vs. Missouri side:</strong> Permit fees and
              inspection requirements differ between St. Louis County, the
              City of St. Louis, and Illinois Metro East cities. Labor cost is
              broadly similar across the metro, but project lead times can
              vary by jurisdiction.
            </p>
            <p>
              <strong>Hail history:</strong> St. Louis sits in a high-hail
              corridor. Insurance-covered work makes up a significant share of
              projects in zip codes like 63017, 63044, and parts of St. Charles
              County in seasons with severe storm activity.
            </p>
            <p>
              <strong>Historic-neighborhood styles:</strong> Older homes in
              Lafayette Square, Soulard, the Central West End, and Webster
              Groves often have steep pitches, multiple slopes, and dormers
              that push labor cost above the standard 2,000 sq ft ranch
              baseline. 1970s ranches in Chesterfield are usually the least
              expensive per square foot to replace.
            </p>
          </div>
        </section>

        {/* Citations */}
        <aside className="rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-card">
          <p className="font-heading font-semibold text-storm-navy">
            Sources we cite
          </p>
          <ul className="mt-2 flex flex-col gap-2">
            <li>
              <CitationLink href="https://ibhs.org/risk-research/severe-convective-storms/" source="IBHS">
                Insurance Institute for Business &amp; Home Safety — hail
                resilience research
              </CitationLink>
            </li>
            <li>
              <CitationLink href="https://www.nrca.net" source="NRCA">
                National Roofing Contractors Association — installation best
                practices
              </CitationLink>
            </li>
            <li>
              <CitationLink href="https://ago.mo.gov" source="Missouri AG">
                Missouri Attorney General — contractor fraud guidance
              </CitationLink>
            </li>
            <li>
              <CitationLink href="https://insurance.mo.gov" source="Missouri DOI">
                Missouri Department of Insurance — claims process
              </CitationLink>
            </li>
          </ul>
        </aside>
      </article>

      <FAQSection faqs={COST_GUIDE_FAQS} />

      <CTABand
        headline={`Ready for an accurate estimate on YOUR roof?`}
        subtext={`Call ${BUSINESS.phone}. Free, written, line-itemized — no surprise add-ons.`}
        ctaClass="C"
        background="navy"
        trackingLocation="cost_guide_final_cta"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}
