import * as React from "react";
import {
  CalloutBox,
  CostTable,
  HowToList,
  PhoneCTAInline,
  PhoneInline,
} from "@/components/mdx";
import type { BlogPost } from "@/types/blog";

const SLUG = "signs-you-need-a-new-roof";

function Body() {
  return (
    <>
      <p>
        St. Louis homes don&rsquo;t always tell you up front when their roofs
        are done. Some signs are obvious — water stains on the ceiling, missing
        shingles after a storm — but plenty of red flags are quieter, and
        catching them early is the difference between a measured replacement
        plan and an emergency. Below are the 10 signs we look for during free
        roof inspections across the metro, why they matter, and what each one
        usually means for your timeline and budget.
      </p>

      <h2 id="age" className="font-heading text-h3 font-bold text-storm-navy">
        1. Your roof is past 20 years old
      </h2>
      <p>
        <strong>The single strongest signal that replacement is on the
        horizon: age.</strong> St. Louis asphalt roofs typically average 18–22
        years of service life because of summer heat exposure, freeze-thaw
        cycles, and spring hail. If your roof is past 20, even one that looks
        OK from the curb is in active end-of-life territory — and if a major
        storm hits, you&rsquo;ll likely move from &ldquo;monitoring&rdquo; to
        &ldquo;replacing&rdquo; the same day.
      </p>

      <h2 id="granules" className="font-heading text-h3 font-bold text-storm-navy">
        2. Granules are pooling in your gutters
      </h2>
      <p>
        <strong>Granule loss is your shingle&rsquo;s aging clock.</strong>{" "}
        Asphalt shingles shed granules across their entire lifespan, but heavy
        loss accelerates near end-of-life. A handful of granules in the gutter
        is normal; a cup or more after a single rainstorm means the protective
        layer is wearing through, the underlying mat is more exposed to UV, and
        the roof is on a noticeably steeper decline.
      </p>

      <h2 id="curl" className="font-heading text-h3 font-bold text-storm-navy">
        3. Shingles are curling or buckling
      </h2>
      <p>
        <strong>Curl and cup mean the shingles are losing their flex and
        seal.</strong> Curling is when the edges lift; cupping is when the
        center rises. Either way, the shingles are no longer lying flat, no
        longer sealed against wind uplift, and no longer reliably waterproof in
        a hard rain. Localized curl can sometimes be addressed with focused
        repair; widespread curl across multiple slopes is a replacement signal.
      </p>

      <h2 id="missing" className="font-heading text-h3 font-bold text-storm-navy">
        4. Missing or torn shingles after recent storms
      </h2>
      <p>
        <strong>One missing shingle is a repair; multiple missing shingles
        across multiple slopes is a roof.</strong> St. Louis spring and summer
        wind events routinely lift shingles, and a roof in good condition
        loses few. A roof in declining condition loses many at once because
        the seal strip has weakened across the field.
      </p>

      <CalloutBox
        variant="warn"
        title="If you can see daylight from the attic"
      >
        That&rsquo;s past warning — that&rsquo;s a hole. Get an inspection
        immediately, regardless of the rest of the roof&rsquo;s condition.
        Active water entry at scale is hours away.
      </CalloutBox>

      <h2 id="leaks" className="font-heading text-h3 font-bold text-storm-navy">
        5. You&rsquo;ve had two or more leaks in the last 12 months
      </h2>
      <p>
        <strong>Recurring leaks across different parts of the roof signal
        systemic failure rather than localized damage.</strong> One leak in one
        spot is a repair conversation; two leaks in two spots within a year
        usually means the underlying sealing system (underlayment, flashing
        details, ridge venting) is breaking down. Patch repairs at that point
        often just chase the next leak.
      </p>

      <h2 id="flashing" className="font-heading text-h3 font-bold text-storm-navy">
        6. Flashing around chimneys, vents, or skylights is failing
      </h2>
      <p>
        <strong>Flashing is the most common slow-leak source on St. Louis
        roofs.</strong> Around chimneys, vent pipes, skylights, and roof-to-wall
        transitions, the metal flashing pieces seal joints that the shingle
        field can&rsquo;t handle alone. As flashing ages, sealants dry out and
        edges lift. Repairs are often possible if the rest of the roof has
        life left; on aged roofs, replacement is the cleaner answer.
      </p>

      <h2 id="sag" className="font-heading text-h3 font-bold text-storm-navy">
        7. Visible sag in the roof line
      </h2>
      <p>
        <strong>A roof that visibly dips between rafters is telling you about
        structural moisture damage.</strong> By the time the sag is visible
        from the ground, decking has likely been wet for years, framing may be
        compromised, and tear-off will reveal more work than the surface
        suggests. This is past replacement consideration into structural
        evaluation territory.
      </p>

      <h2 id="moss" className="font-heading text-h3 font-bold text-storm-navy">
        8. Heavy moss or algae growth, especially on north-facing slopes
      </h2>
      <p>
        <strong>Moss isn&rsquo;t cosmetic — it traps moisture against the roof
        surface.</strong> St. Louis homes with mature canopy, particularly in
        Creve Coeur, Webster Groves, and Kirkwood, see moss growth on
        north-facing slopes. Light moss can be cleaned and treated; heavy moss
        on aging shingles indicates the surface has been holding moisture long
        enough to accelerate the decline.
      </p>

      <h2 id="energy" className="font-heading text-h3 font-bold text-storm-navy">
        9. Your energy bills have crept up year over year
      </h2>
      <p>
        <strong>A failing roof and inadequate ventilation can quietly add to
        your cooling load.</strong> When attic ventilation is wrong or
        underlayment has degraded, summer heat builds in the attic, your AC
        works harder, and your bills go up. It&rsquo;s never the only factor,
        but in St. Louis summers with average attic temperatures over 130°F,
        the contribution can be meaningful.
      </p>

      <h2 id="neighbors" className="font-heading text-h3 font-bold text-storm-navy">
        10. Your neighbors are getting new roofs
      </h2>
      <p>
        <strong>Subdivisions installed at the same time tend to need
        replacement at the same time.</strong> If your house was built between
        1995 and 2010 in a production-builder neighborhood (especially in
        O&rsquo;Fallon, MO, Wentzville, Lake Saint Louis-area subdivisions), and
        you&rsquo;re seeing dumpsters appear on neighbor driveways, you&rsquo;re
        probably on the same timeline. That&rsquo;s a good moment for a free
        inspection — even if you don&rsquo;t replace today, you&rsquo;ll have a
        baseline.
      </p>

      <PhoneCTAInline
        ctaClass="C"
        trackingLocation={`blog_${SLUG}_inline`}
      />

      <h2 id="costs" className="font-heading text-h3 font-bold text-storm-navy">
        What does roof replacement cost in St. Louis?
      </h2>
      <p>
        Below are 2026 St. Louis price ranges by material on a typical 2,000
        sq ft single-family home. For a full breakdown of how each line item
        affects the total, see our{" "}
        <a
          href="/roofing-cost-guide"
          className="font-semibold text-signal-amber underline-offset-4 hover:underline"
        >
          St. Louis roofing cost guide
        </a>
        .
      </p>

      <CostTable
        caption="Typical St. Louis roof replacement cost by material, 2,000 sq ft home, 2026"
        headers={["Material", "Installed cost", "Lifespan"]}
        rows={[
          ["Architectural asphalt", "$9,000 – $15,000", "20–28 yr"],
          ["Designer / luxury asphalt", "$14,000 – $21,000", "25–35 yr"],
          ["Standing-seam metal", "$18,000 – $32,000", "40–70 yr"],
          ["Synthetic slate", "$21,000 – $33,000", "40–50 yr"],
        ]}
      />

      <h2 id="self-check" className="font-heading text-h3 font-bold text-storm-navy">
        How to self-check your roof from the ground in 5 steps
      </h2>
      <p>
        You don&rsquo;t need to climb anything. Most warning signs are visible
        from the ground or from inside the attic. Here&rsquo;s a 5-step routine
        we recommend doing once a year and after any major storm.
      </p>

      <HowToList
        name="How to self-check your roof from the ground"
        steps={[
          {
            title: "Walk the perimeter",
            description:
              "Stand back from the house and look at each slope. Note any visibly missing, lifted, or curled shingles.",
          },
          {
            title: "Check the gutters",
            description:
              "Look for granule pooling and any visible shingle pieces. Heavy granule loss is a strong end-of-life signal.",
          },
          {
            title: "Look at flashings",
            description:
              "From the ground, glance at chimney bases, vent stacks, and skylights. Lifted, rusted, or sealant-cracked flashing is a yellow flag.",
          },
          {
            title: "Inspect the attic",
            description:
              "Climb up if accessible and look for daylight, water staining, or sagging decking. Bring a flashlight and check the underside of the deck.",
          },
          {
            title: "Photograph what you see",
            description:
              "Before you call a contractor, take photos. They help us triage what kind of inspection or repair makes sense — and help on insurance claims later.",
          },
        ]}
      />

      <CalloutBox variant="tip" title="Don't climb the roof yourself">
        Roofs are dangerous, especially when wet, dusty, or pitched. Most
        warning signs are visible from the ground or attic — and a free
        professional inspection covers the rest. The risk of falling
        isn&rsquo;t worth the value of an extra-close look.
      </CalloutBox>

      <h2 id="next-steps" className="font-heading text-h3 font-bold text-storm-navy">
        What to do if you&rsquo;ve got 3 or more of these signs
      </h2>
      <p>
        If you&rsquo;ve got three or more of the signs above, get a free
        on-roof inspection. We document everything with photos, give you a
        written report within 48 hours, and tell you straight whether
        you&rsquo;re looking at repair, near-term replacement, or simply
        annual monitoring. The inspection is free, the report is yours, and
        there&rsquo;s no obligation either way. Call <PhoneInline trackingLocation={`blog_${SLUG}_body`} /> to
        schedule.
      </p>
    </>
  );
}

export const signsYouNeedANewRoof: BlogPost = {
  frontmatter: {
    title: "10 Signs You Need a New Roof in St. Louis (2026 Guide)",
    slug: SLUG,
    description:
      "10 warning signs that mean it's time to replace your St. Louis roof — from age and granule loss to active leaks. Cost ranges and a 5-step self-check.",
    datePublished: "2026-01-12",
    dateModified: "2026-04-25",
    author: { name: "All Weather Roofing Systems Team", role: "Roofing contractors" },
    category: "replacement",
    keywords: [
      "signs you need a new roof",
      "roof replacement signs",
      "when to replace roof st louis",
      "asphalt shingle lifespan st louis",
    ],
    heroImage: undefined,
    heroImageAlt: "Aged asphalt shingle roof showing granule loss and curling",
    tags: ["replacement", "inspection", "st louis"],
    featured: true,
    directAnswer:
      "Replace your St. Louis roof if you have 3+ of these signs: age past 20 years, heavy granule loss, curling or buckling shingles, multiple missing shingles, recurring leaks, failing flashing, visible sag, heavy moss, rising energy bills, or neighbors replacing theirs. Most St. Louis architectural-asphalt replacements run $9,000–$15,000 in 2026.",
    toc: [
      { id: "age", label: "1. Past 20 years old" },
      { id: "granules", label: "2. Granules in gutters" },
      { id: "curl", label: "3. Curling shingles" },
      { id: "missing", label: "4. Missing shingles" },
      { id: "leaks", label: "5. Recurring leaks" },
      { id: "flashing", label: "6. Failing flashing" },
      { id: "sag", label: "7. Visible sag" },
      { id: "moss", label: "8. Heavy moss" },
      { id: "energy", label: "9. Rising energy bills" },
      { id: "neighbors", label: "10. Neighbors replacing" },
      { id: "costs", label: "Cost ranges" },
      { id: "self-check", label: "5-step self-check" },
      { id: "next-steps", label: "Next steps" },
    ],
    relatedServices: ["roof-replacement", "roof-repair", "roofing-inspection"],
    relatedCities: ["st-charles-mo", "kirkwood-mo"],
    citations: [
      {
        source: "NRCA",
        href: "https://www.nrca.net",
        label: "NRCA — residential roof inspection guidelines",
      },
      {
        source: "IBHS",
        href: "https://ibhs.org/risk-research/severe-convective-storms/",
        label: "IBHS — hail and severe convective storm research",
      },
      {
        source: "Missouri DOI",
        href: "https://insurance.mo.gov",
        label: "Missouri Department of Insurance — claims guidance",
      },
    ],
    wordCount: 1850,
    ctaClass: "C",
    faqs: [
      {
        question: "How long does an asphalt roof last in St. Louis?",
        answer:
          "Architectural asphalt roofs typically average 18–22 years of service life in the St. Louis metro — slightly under the manufacturer's nominal rating because of summer heat, freeze-thaw cycles, and spring hail. 3-tab asphalt averages 15–20 years. Higher-end designer asphalt with proper ventilation can stretch to 25–30 years.",
      },
      {
        question: "Can a 25-year warranty roof actually last 25 years here?",
        answer:
          "Sometimes, with caveats. The manufacturer warranty rating assumes ideal conditions; St. Louis weather (heat, hail, freeze-thaw) tends to shave 3–5 years off the rated lifespan on average. Proper attic ventilation, prompt repair of small issues, and minimal storm exposure all help a roof reach the high end of its rated life.",
      },
      {
        question: "Should I file an insurance claim before getting an inspection?",
        answer:
          "No — get a contractor inspection first. Plenty of damage doesn't actually meet a carrier's threshold for a claim, and a denied claim can affect your premium history. We do free post-storm inspections and tell you straight whether filing is worth it.",
      },
      {
        question: "How long does a roof replacement take?",
        answer:
          "Most St. Louis residential asphalt replacements (1,800–2,800 sq ft, single layer) complete in 1–3 days on-site. Single-day installs are common. Steep, complex, or two-layer tear-off projects take longer. We weatherproof every evening regardless of project length.",
      },
      {
        question: "Will replacing my roof affect my home insurance premium?",
        answer:
          "Often slightly — in your favor. A new roof with current materials, proper ventilation, and especially Class-4 impact-rated systems (common on metal and some designer asphalts) can qualify for hail-resistant roof discounts at renewal. Confirm specifics with your insurance agent.",
      },
      {
        question: "Can I delay replacement if my roof is old but not leaking?",
        answer:
          "You can, but you're playing the odds. An end-of-life roof can hold for years without an active leak — and then a single hail storm or windstorm produces the leak that requires emergency response. Planning replacement on your timeline beats responding to an emergency on the storm's timeline.",
      },
    ],
  },
  Body,
};
