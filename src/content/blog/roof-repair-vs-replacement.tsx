import * as React from "react";
import {
  CalloutBox,
  ComparisonTable,
  CostTable,
  PhoneCTAInline,
  PhoneInline,
} from "@/components/mdx";
import type { BlogPost } from "@/types/blog";

const SLUG = "roof-repair-vs-replacement";

function Body() {
  return (
    <>
      <p>
        It&rsquo;s the question every St. Louis homeowner asks at some point:
        is this a fix, or is this a new roof? Get it wrong in either direction
        and it costs you. Repair a roof that should be replaced and
        you&rsquo;ll spend $1,200 chasing the next leak in 18 months. Replace
        a roof that had years of life left and you&rsquo;ve made a five-figure
        decision a few years too early. The good news: there&rsquo;s a clear
        decision framework, and most of it doesn&rsquo;t require a roofer to
        figure out.
      </p>

      <h2 id="framework" className="font-heading text-h3 font-bold text-storm-navy">
        The decision framework: 4 questions, in order
      </h2>
      <p>
        <strong>Most repair-versus-replacement decisions come down to four
        questions, answered in this order.</strong> If you can answer the
        first three, the fourth (cost math) usually decides itself.
      </p>
      <ol className="list-decimal pl-6 text-base text-slate-700">
        <li className="mb-1">
          <strong>How old is the roof?</strong> Past 20 years on asphalt? Lean
          toward replacement.
        </li>
        <li className="mb-1">
          <strong>Is the damage localized or widespread?</strong> One spot is a
          repair conversation; multiple spots is a replacement conversation.
        </li>
        <li className="mb-1">
          <strong>How is the rest of the roof aging?</strong> Granule loss,
          curl, missing shingles, flashing decay across the whole field push
          you toward replacement.
        </li>
        <li>
          <strong>What does the cost math say over 5 years?</strong> A repair
          that buys you 18 months on a roof that needs full replacement
          isn&rsquo;t a value.
        </li>
      </ol>

      <h2 id="when-repair" className="font-heading text-h3 font-bold text-storm-navy">
        5 scenarios where repair is the right call
      </h2>
      <ol className="list-decimal pl-6 text-base leading-relaxed text-slate-700">
        <li className="mb-3">
          <strong>Wind-lifted shingles on one slope after a recent storm.</strong>{" "}
          Six shingles torn off the back slope after a thunderstorm? That&rsquo;s
          a focused repair — replace the missing pieces, check the surrounding
          shingles, done. $400–$700 typical.
        </li>
        <li className="mb-3">
          <strong>A single failed pipe boot causing a ceiling leak.</strong>{" "}
          Pipe boots dry-rot in 10–15 years and crack. The leak is real and
          urgent, but the fix is replacing the boot — not replacing the roof.
          $300–$550.
        </li>
        <li className="mb-3">
          <strong>A failed chimney flashing on a roof under 15 years old.</strong>{" "}
          Chimney flashing rebuilds are common 12–18 years into an asphalt
          roof&rsquo;s life. Repair the flashing properly and you can get
          another decade out of the roof.
        </li>
        <li className="mb-3">
          <strong>A fallen branch puncturing one section of the roof.</strong>{" "}
          Tree-strike damage typically affects a localized area. Patch the
          decking, replace the shingles in that area, blend with surrounding
          material. Insurance often covers it.
        </li>
        <li>
          <strong>A small valley leak on an otherwise-sound roof.</strong>{" "}
          Valleys see concentrated water flow and can fail before the
          surrounding field. Rework the valley with new ice-and-water shield
          and replacement shingles — buys you the life of the rest of the
          roof.
        </li>
      </ol>

      <h2 id="when-replace" className="font-heading text-h3 font-bold text-storm-navy">
        5 scenarios where replacement is the right call
      </h2>
      <ol className="list-decimal pl-6 text-base leading-relaxed text-slate-700">
        <li className="mb-3">
          <strong>The roof is past 20 years old AND showing wear across
          multiple slopes.</strong> Once both age and breadth are present,
          repair dollars are catch-up money on something that needs to be
          replaced soon anyway.
        </li>
        <li className="mb-3">
          <strong>You&rsquo;ve had two or more leaks in 12 months.</strong>{" "}
          Recurring leaks across different parts of the roof signal systemic
          underlayment or sealant failure, not localized damage.
        </li>
        <li className="mb-3">
          <strong>Hail damage that meets your insurance carrier&rsquo;s
          threshold.</strong> If insurance approves replacement and your
          deductible is reasonable, the math is rarely close — replace,
          collect the new-roof benefit, and move on.
        </li>
        <li className="mb-3">
          <strong>Visible sag in the roof line.</strong> By the time sag is
          visible from the ground, decking has been wet for years.
          Replacement plus structural inspection is the only honest answer.
        </li>
        <li>
          <strong>Heavy granule loss across the field with shingles in the
          gutter.</strong> The protective layer is gone, the mat is exposed
          to UV, and the roof is in the last year or two of its useful life.
          Plan replacement on your terms before a storm forces it.
        </li>
      </ol>

      <PhoneCTAInline
        ctaClass="C"
        trackingLocation={`blog_${SLUG}_inline`}
      />

      <h2 id="comparison" className="font-heading text-h3 font-bold text-storm-navy">
        Repair vs. replacement at a glance
      </h2>
      <ComparisonTable
        caption="Repair vs. replacement decision factors"
        columns={[
          {
            title: "Repair when",
            items: [
              "Damage is localized — one slope, one valley, one flashing.",
              "Roof is under 15–18 years old.",
              "Granule loss is normal across the rest of the field.",
              "No widespread shingle curl or systemic wear.",
              "Decking is sound under the failure point.",
              "You've had 0–1 leaks in the last 12 months.",
            ],
          },
          {
            title: "Replace when",
            items: [
              "Multiple slopes show damage or wear.",
              "Roof is past 20 years old.",
              "Visible granule loss across the field.",
              "Daylight visible from the attic in multiple spots.",
              "Two or more leaks in the last 12 months.",
              "Insurance has approved replacement after a storm event.",
            ],
          },
        ]}
      />

      <h2 id="costs" className="font-heading text-h3 font-bold text-storm-navy">
        Cost math: when does repair actually save you money?
      </h2>
      <p>
        <strong>The five-year rule.</strong> If a repair costs $X and gives you
        5+ years of additional life on the rest of the roof, that&rsquo;s
        usually a strong value. If the repair costs $X but you&rsquo;ll need
        full replacement within 18 months anyway, you&rsquo;re paying twice for
        what should have been one project.
      </p>
      <CostTable
        caption="Repair vs. replacement cost ranges in St. Louis, 2026"
        headers={["Project", "Typical St. Louis cost"]}
        rows={[
          ["Shingle replacement (small section)", "$400 – $700"],
          ["Pipe boot or vent flashing", "$300 – $550"],
          ["Chimney flashing rebuild", "$700 – $1,400"],
          ["Valley leak repair", "$600 – $1,200"],
          ["Architectural asphalt replacement (2,000 sq ft)", "$9,000 – $15,000"],
          ["Standing-seam metal replacement (2,000 sq ft)", "$18,000 – $32,000"],
        ]}
      />

      <CalloutBox variant="info" title="Insurance changes the math entirely">
        If a storm has produced damage that meets your carrier&rsquo;s
        threshold, replacement-via-insurance often costs you only your
        deductible plus any out-of-scope items. That&rsquo;s a different
        calculation than out-of-pocket replacement, and one worth running
        carefully.
      </CalloutBox>

      <h2 id="middle-ground" className="font-heading text-h3 font-bold text-storm-navy">
        The middle ground: partial replacement
      </h2>
      <p>
        Some roofs sit between &ldquo;repair this&rdquo; and &ldquo;replace everything&rdquo; — and a
        partial replacement of one slope or one section is the right
        intermediate. Common when storm damage hit one face of the roof and
        the others have plenty of life. We&rsquo;ll spell out partial
        replacement vs. full replacement on the estimate when both are
        legitimate options, with the trade-offs of each.
      </p>

      <h2 id="how-to-decide" className="font-heading text-h3 font-bold text-storm-navy">
        How to make the call with a contractor
      </h2>
      <p>
        Get a free inspection from a contractor whose business model
        doesn&rsquo;t depend on you replacing immediately. Storm-chasers who
        knock your door after a hailstorm have an obvious incentive; established
        local roofers who&rsquo;ll be here in 10 years generally don&rsquo;t.
        Ask for written documentation of what they found, what they&rsquo;d
        recommend, and what they&rsquo;d recommend if cost weren&rsquo;t a
        factor versus if you wanted the most cost-effective path.
      </p>
      <p>
        Call <PhoneInline trackingLocation={`blog_${SLUG}_body`} /> for a free
        inspection. We&rsquo;ll tell you straight whether you&rsquo;re looking
        at repair, near-term replacement, or simply ongoing monitoring — and
        we&rsquo;ll give you the math behind the answer.
      </p>
    </>
  );
}

export const roofRepairVsReplacement: BlogPost = {
  frontmatter: {
    title: "Roof Repair vs. Replacement: How to Decide (St. Louis Homeowners)",
    slug: SLUG,
    description:
      "How to decide between roof repair and replacement in St. Louis — 4-question framework, 5 repair scenarios, 5 replacement scenarios, real cost ranges.",
    datePublished: "2026-02-08",
    dateModified: "2026-04-25",
    author: { name: "All Weather Roofing Systems Team", role: "Roofing contractors" },
    category: "repair",
    keywords: [
      "roof repair vs replacement",
      "should I repair or replace my roof",
      "when to replace roof st louis",
      "partial roof replacement",
    ],
    heroImage: undefined,
    heroImageAlt: "Side-by-side: a localized roof repair area next to a full roof replacement",
    tags: ["repair", "replacement", "decision"],
    featured: false,
    directAnswer:
      "Repair if damage is localized to one area on a roof under 18 years old with the rest of the field still in good shape. Replace if you're past 20 years and seeing wear on multiple slopes, you've had 2+ leaks in the last year, or insurance has approved replacement after a storm. Most St. Louis repairs run $400–$1,800; replacements run $9,000–$15,000 for asphalt.",
    toc: [
      { id: "framework", label: "Decision framework" },
      { id: "when-repair", label: "5 repair scenarios" },
      { id: "when-replace", label: "5 replacement scenarios" },
      { id: "comparison", label: "Side-by-side comparison" },
      { id: "costs", label: "Cost math" },
      { id: "middle-ground", label: "Partial replacement" },
      { id: "how-to-decide", label: "Making the call" },
    ],
    relatedServices: ["roof-repair", "roof-replacement", "roofing-inspection", "storm-damage-roofing"],
    relatedCities: ["st-charles-mo", "kirkwood-mo"],
    citations: [
      {
        source: "NRCA",
        href: "https://www.nrca.net",
        label: "NRCA — repair vs. replacement guidance",
      },
      {
        source: "IBHS",
        href: "https://ibhs.org/risk-research/severe-convective-storms/",
        label: "IBHS — storm damage assessment standards",
      },
      {
        source: "Missouri AG",
        href: "https://ago.mo.gov",
        label: "Missouri Attorney General — contractor fraud guidance",
      },
    ],
    wordCount: 1700,
    ctaClass: "C",
    faqs: [
      {
        question: "Is it ever worth replacing only half the roof?",
        answer:
          "Sometimes — when storm damage hit one slope and the others have plenty of life. Partial replacement (one face, one section) is a legitimate intermediate between repair and full replacement. We'll evaluate during inspection and tell you straight which approach makes financial sense.",
      },
      {
        question: "Will partial replacement create color-match issues?",
        answer:
          "On older roofs, yes — the new shingles will appear brighter than the weathered surrounding material. We pull from the same manufacturer line where possible to minimize the difference, but partial replacement on a 12+ year roof typically shows visible color variation. Worth knowing before you decide.",
      },
      {
        question: "How long should a roof repair last?",
        answer:
          "A correctly performed repair on a roof with life remaining typically lasts the remaining life of the surrounding roof. Pipe boot replacements last 10–15 years (the rubber's lifespan); chimney flashing rebuilds and shingle repairs last 15+ years if the roof itself has that life remaining. We carry a workmanship warranty on the repair.",
      },
      {
        question: "If I have insurance approval for replacement, should I always take it?",
        answer:
          "Almost always, yes. An insurance-approved replacement typically costs you only your deductible plus any out-of-scope items — a fraction of the project's actual cost. The exception is if the deductible is unusually high relative to your repair scope; we'll run the math with you.",
      },
      {
        question: "Is the cheapest repair quote always the best deal?",
        answer:
          "No — and often no. The cheapest quote often skips items the better quote includes (proper underlayment, full flashing replacement, decking allowance). Read the line items, not just the totals. A $600 repair done correctly is cheaper than a $400 repair you'll redo in two years.",
      },
      {
        question: "Can I get a second opinion if a contractor recommends full replacement?",
        answer:
          "Absolutely — and we'd encourage it on a five-figure decision. Get a written report from the first contractor, then get an independent second inspection. Reputable contractors won't pressure you against doing this; storm-chasers will. That alone is a useful filter.",
      },
    ],
  },
  Body,
};
