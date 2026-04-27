import type { ServiceContent } from "@/types/service";
import { BUSINESS } from "@/lib/constants";

export const residentialRoofing: ServiceContent = {
  slug: "residential-roofing",
  name: "Residential Roofing",
  ctaClass: "B",

  seo: {
    title: "Residential Roofing in St. Louis | All Weather Roofing Systems",
    description:
      "Full-service residential roofing — repair, replacement, inspections — across the St. Louis metro and Metro East. Licensed, insured, GAF-certified.",
    canonical: `${BUSINESS.url}/services/residential-roofing`,
  },

  hero: {
    h1: "Residential Roofing in St. Louis",
    eyebrow: "Residential roofing",
    subhead:
      "From a single-shingle repair to a full architectural-asphalt replacement, we handle every stage of residential roof work — by W-2 employees, with written warranties on both labor and materials.",
    trustBullets: ["Licensed & Insured", "GAF Certified", "No subcontractors"],
    imagePath: "/images/service-residential.jpg",
    imageAlt: "Residential St. Louis home with newly installed asphalt shingle roof.",
  },

  directAnswer:
    "Residential roofing covers any roof work on a single-family home, duplex, or townhome — from leak repair and flashing replacement to full tear-off and replacement. In St. Louis, our typical residential project runs 1–3 days on-site with full tear-off, new decking where needed, synthetic underlayment, ice-and-water shield in valleys, and a written workmanship warranty.",

  primaryKeywords: [
    "residential roofing st louis",
    "residential roofer st louis",
    "home roofing st louis",
  ],
  secondaryKeywords: [
    "asphalt shingle roof st louis",
    "GAF certified roofer st louis",
    "residential roof replacement",
  ],

  sections: [
    {
      h2: "What counts as residential roofing work?",
      directAnswer:
        "Residential roofing is any roof work performed on a single-family home, duplex, townhome, or multi-family building under three stories. The work covers the full roof system — shingles or metal panels, underlayment, flashing, ridge venting, drip edge, and accessories — plus the underlying decking where it's been damaged.",
      content: {
        type: "prose",
        paragraphs: [
          "On a residential project, the contractor is responsible for everything from the decking up: tear-off of the existing roof, inspection of the wood beneath, replacement of damaged sheathing, application of underlayment and ice-and-water shield, installation of new shingles or metal panels, and finishing details like ridge venting, flashing, and drip edge.",
          "Most St. Louis homes use architectural asphalt shingles as the primary material — they balance cost, durability, and aesthetic fit with the region's housing stock. Metal, synthetic slate, and tile systems exist for homeowners who want longer life or a specific look, especially in historic neighborhoods like Lafayette Square, Soulard, and Webster Groves.",
        ],
      },
    },
    {
      h2: "What roofing issues do St. Louis homes deal with most?",
      directAnswer:
        "St. Louis homes deal with three predictable issues: hail-impact damage to shingles (granule loss and bruising), wind-lifted or torn shingles after spring and summer storms, and aged flashing leaks around chimneys, vents, and roof-to-wall transitions. Each of these is addressable with a focused repair if caught early.",
      content: {
        type: "bullets",
        items: [
          "Hail damage — granule loss, bruising, exposed mat. Often eligible for an insurance claim if the storm was significant.",
          "Wind damage — lifted or torn shingles, missing tabs, exposed nails. Common after spring and summer thunderstorms.",
          "Flashing leaks — chimney, skylight, plumbing vent, roof-to-wall transitions. Typical cause of slow ceiling leaks on older roofs.",
          "Pipe boot deterioration — rubber boots dry-rot in 10–15 years and crack. A common cause of bathroom-ceiling leaks in St. Louis.",
          "Ice-dam damage — overhanging eaves can ice up in cold snaps. Proper ice-and-water shield in the eave coverage prevents this.",
          "Aged decking — sustained moisture from a long-undetected leak weakens decking; usually found during tear-off and replaced per sheet.",
        ],
      },
    },
    {
      h2: "How do you approach a residential project?",
      directAnswer:
        "We start with a free, on-roof inspection — photos, attic check where accessible, written findings. Estimate is itemized line by line. Once you sign, we schedule materials, pull the permit, and dispatch a full crew. Most St. Louis residential replacements complete in 1–3 days on-site.",
      content: {
        type: "prose",
        paragraphs: [
          "We don't do drive-by quotes. A real roofer climbs the roof when conditions allow, documents the actual condition with photos, looks at the attic from the inside if accessible, and walks you through what they found before sending an estimate. The estimate itemizes materials, labor, dumpster, permit, decking allowance, warranty, and timeline — with no blanket 'misc' lines.",
          "Once you sign the contract, we schedule the work based on material lead time and crew availability — typically 1–3 weeks out for non-emergency projects. We pull the permit, deliver the dumpster, and dispatch a full crew on the install day. Tear-off and install happen on the same day for most single-family homes; we close up and weatherproof the roof every evening regardless of whether the job is finished.",
          "We don't subcontract. Every roofer on your home is a W-2 employee of All Weather Roofing Systems — which means we control the schedule, the quality, and the chain of accountability for both your project and your warranty.",
        ],
      },
    },
    {
      h2: "What materials do you install for residential projects?",
      directAnswer:
        "We install GAF, Owens Corning, CertainTeed, IKO, and Tamko architectural asphalt shingles; standing-seam and corrugated metal systems; synthetic slate and composite shingles for historic homes; and cedar shake when the homeowner wants the look. For most St. Louis homes, architectural asphalt is the right balance of cost, durability, and aesthetic fit.",
      content: {
        type: "table",
        data: {
          caption: "Residential roofing materials we install most often",
          headers: ["Material", "Typical lifespan", "Strengths"],
          rows: [
            ["Architectural asphalt", "20–28 yr", "Cost-effective, hail/wind-rated options, broadest match for St. Louis homes"],
            ["Designer / luxury asphalt", "25–35 yr", "Best aesthetics in the asphalt category, lifetime warranties common"],
            ["Standing-seam metal", "40–70 yr", "Longest-lived, excellent hail/wind performance, energy-reflective"],
            ["Synthetic slate / composite", "40–50 yr", "Slate look without weight, common in historic neighborhoods"],
            ["Cedar shake", "25–40 yr", "Distinct aesthetic, requires specific maintenance and ventilation"],
          ],
        },
      },
    },
    {
      h2: "What does a residential roof replacement cost in St. Louis?",
      directAnswer:
        "A typical asphalt shingle replacement on a 2,000 sq ft St. Louis home runs $9,000–$15,000 depending on pitch, tear-off scope, and decking condition. Metal systems for the same footprint run $18,000–$32,000. See our cost guide for a full line-item breakdown.",
      content: {
        type: "prose",
        paragraphs: [
          "Cost depends on roof size, pitch, complexity, existing layer count, and material chosen. A 1,800 sq ft single-story ranch with one layer of architectural asphalt is the least expensive baseline; a 2,800 sq ft two-story with steep pitches, dormers, and two existing layers can run nearly twice as much for the same shingle line.",
          "Decking damage is found during tear-off — we specify a per-sheet replacement rate ($80–$140) on every estimate so surprises stay small and visible. Permit fees vary by municipality ($75–$250 in the St. Louis area) and appear as their own line. The full breakdown — including how to read an estimate properly — is in our roofing cost guide.",
        ],
      },
    },
  ],

  processSteps: [
    {
      title: "Free inspection",
      description:
        "On-roof, photos, attic check where accessible. We tell you what we found before we send an estimate.",
    },
    {
      title: "Itemized estimate",
      description:
        "Materials, labor, dumpster, permit, decking allowance, warranty, timeline — every line named.",
    },
    {
      title: "Schedule + permit",
      description:
        "We pull the permit and schedule the install based on material lead time and crew availability.",
    },
    {
      title: "Tear-off + install",
      description:
        "Full crew on-site. Most St. Louis residential projects complete in 1–3 days; weatherproofed every evening.",
    },
    {
      title: "Cleanup + warranty",
      description:
        "Magnetic-sweep for nails, dumpster removed, written workmanship + manufacturer warranties delivered.",
    },
  ],

  faqs: [
    {
      question: "How long does residential roof replacement take?",
      answer:
        "Most St. Louis residential replacements (1,800–2,800 sq ft, asphalt) complete in 1–3 days on-site once materials arrive. Single-day installs are common for straightforward roofs. Steep, complex, or two-layer tear-off projects take longer. Weather can add a day. We weatherproof every evening — your roof is never left open overnight.",
    },
    {
      question: "Do I need to leave my house during the install?",
      answer:
        "No. The work happens on the roof exterior — there's noise (significant noise, honestly), but you can stay home. Many homeowners take the dog to a friend's place for the noisiest hours of tear-off if they have hearing-sensitive pets. We don't need access to the inside of the house for most projects.",
    },
    {
      question: "Will you protect my landscaping?",
      answer:
        "Yes — we tarp and use plywood at access points, and we plan dumpster placement to avoid specialty plants and hardscape. Magnetic-roller sweeps for nails happen at the end of every day plus a final sweep when the dumpster leaves. If you have plants we should be especially careful around, point them out at the estimate.",
    },
    {
      question: "What's your workmanship warranty?",
      answer:
        "Written, transferable in most cases, and detailed line-by-line in your estimate. Length varies by system — typical workmanship warranty is 5–10 years; manufacturer material warranty is separate (20-year through lifetime depending on the line). Both are explained in plain language before you sign.",
    },
    {
      question: "Do you handle HOA approvals?",
      answer:
        "Many HOAs require approval for roofing material changes, especially on historic-district homes. We help by providing manufacturer specs, color samples, and documentation in the format your HOA needs. We don't submit on your behalf, but we make the submission as painless as possible.",
    },
    {
      question: "What's the best roofing material for a St. Louis home?",
      answer:
        "For most St. Louis homes, architectural asphalt is the right balance — cost, durability, hail/wind ratings, and aesthetic fit with the region's housing stock. Standing-seam metal is the long-term winner if budget allows (40–70 year lifespan, exceptional hail performance). Synthetic slate is the right call for historic homes where natural slate's weight or cost is prohibitive.",
    },
  ],

  relatedServices: [
    "roof-repair",
    "roof-replacement",
    "metal-roofing",
    "storm-damage-roofing",
  ],
  relatedCities: ["st-charles-mo", "kirkwood-mo", "clayton-mo", "ladue-mo"],
  relatedBlogPosts: [
    "signs-you-need-new-roof",
    "best-roofing-materials-st-louis",
    "roof-repair-vs-replacement",
  ],

  proprietaryStats: [
    {
      value: "1–3 days",
      label: "Typical on-site time for asphalt replacement",
      description: "1,800–2,800 sq ft single-family home, single layer.",
    },
    {
      value: "85%+",
      label: "Of our residential replacements use architectural asphalt",
      description:
        "The dominant choice for St. Louis homes — wind-rated, hail-resilient, fits regional aesthetics.",
    },
    {
      value: "0",
      label: "Subcontracted roofers on your home",
      description:
        "Every roofer is a W-2 employee — controls quality, training, and warranty obligations.",
    },
  ],

  citations: [
    {
      href: "https://www.nrca.net",
      source: "NRCA",
      label:
        "National Roofing Contractors Association — residential shingle installation guidance",
    },
    {
      href: "https://ibhs.org/risk-research/severe-convective-storms/",
      source: "IBHS",
      label:
        "Insurance Institute for Business & Home Safety — hail and wind resilience research",
    },
  ],
};
