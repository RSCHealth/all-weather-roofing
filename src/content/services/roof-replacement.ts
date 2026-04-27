import type { ServiceContent } from "@/types/service";
import { BUSINESS } from "@/lib/constants";

export const roofReplacement: ServiceContent = {
  slug: "roof-replacement",
  name: "Roof Replacement",
  ctaClass: "B",

  seo: {
    title: "Roof Replacement in St. Louis | All Weather Roofing Systems",
    description:
      "Full roof replacement in the St. Louis metro and Metro East. W-2 crews, written warranties, no subcontractors. Free estimates: (314) 834-6556.",
    canonical: `${BUSINESS.url}/services/roof-replacement`,
  },

  hero: {
    h1: "Roof Replacement in St. Louis",
    eyebrow: "Roof replacement",
    subhead:
      "Full tear-off, fresh underlayment, new roof system, and written warranties on both labor and materials. Most St. Louis residential replacements complete in 1–3 days on-site.",
    trustBullets: [
      "Written warranties",
      "No subcontractors",
      "1–3 day install",
    ],
    imagePath: "/images/service-roof-replacement.jpg",
    imageAlt: "Roofing crew installing new shingles on a residential St. Louis tear-off project.",
  },

  directAnswer:
    "Roof replacement is a full tear-off and re-roof: existing shingles removed, decking inspected and repaired where needed, new underlayment and ice-and-water shield applied, new shingles or metal panels installed, and finishing details (flashing, ridge venting, drip edge) completed. In St. Louis, most architectural-asphalt replacements complete in 1–3 days on-site and run $9,000–$15,000 for a typical 2,000 sq ft home.",

  primaryKeywords: [
    "roof replacement st louis",
    "new roof st louis",
    "roof installation st louis",
  ],
  secondaryKeywords: [
    "asphalt shingle replacement st louis",
    "tear off roof replacement",
    "GAF roof installation",
  ],

  sections: [
    {
      h2: "When does a roof need full replacement vs. repair?",
      directAnswer:
        "Replace when the roof is past 20 years old, when wear is showing across multiple slopes, when you've had two or more leaks in the last year, or when granule loss is heavy across the field. Repair makes more sense for localized damage on a roof with 5+ years of life left.",
      content: {
        type: "comparison",
        columns: [
          {
            title: "Replacement signals",
            bullets: [
              "Age past 20 years (asphalt) or system at end-of-life.",
              "Multiple slopes showing wear — not just one failure point.",
              "Visible granule loss across the field, exposed mat in spots.",
              "Two or more leaks in the last 12 months.",
              "Daylight visible from the attic in multiple locations.",
              "Heavy curl, cup, or buckling across the roof.",
            ],
          },
          {
            title: "Repair-first signals",
            bullets: [
              "Damage localized to one slope, valley, or flashing.",
              "Roof is under 15–18 years old.",
              "Granule loss is normal across the rest of the field.",
              "No widespread shingle curl or systemic wear.",
              "Decking is sound under the failure point.",
            ],
          },
        ],
      },
    },
    {
      h2: "What's our replacement process?",
      directAnswer:
        "Seven steps from inspection to warranty: free on-roof inspection, written itemized estimate, contract + permit + scheduling, dumpster delivery, full tear-off and decking inspection, install of underlayment + roof system, and final cleanup with delivered warranties. Most St. Louis residential projects complete in 1–3 days on-site.",
      content: {
        type: "process",
        steps: [
          {
            title: "Inspection",
            description:
              "On-roof inspection with photos, attic check where accessible, full system review.",
          },
          {
            title: "Estimate",
            description:
              "Written, itemized — every line named: materials, labor, decking, dumpster, permit, warranty.",
          },
          {
            title: "Scheduling + permit",
            description:
              "Material lead time confirmed, permit pulled with your municipality, install date locked.",
          },
          {
            title: "Tear-off",
            description:
              "Existing roof removed to decking. Damaged sheathing replaced per-sheet at the rate on your estimate.",
          },
          {
            title: "Decking + underlayment",
            description:
              "Synthetic underlayment installed, ice-and-water shield in eaves and valleys, drip edge applied.",
          },
          {
            title: "Install",
            description:
              "Shingles or metal panels installed per manufacturer spec. Ridge venting, flashing, and accessories finished.",
          },
          {
            title: "Cleanup + warranty",
            description:
              "Magnetic-sweep for nails, dumpster removed, written workmanship + manufacturer warranties delivered.",
          },
        ],
      },
    },
    {
      h2: "What materials do you install for replacements?",
      directAnswer:
        "Architectural and designer asphalt shingles (GAF, Owens Corning, CertainTeed, IKO, Tamko), standing-seam and corrugated metal systems, synthetic slate, cedar shake, and natural slate or tile when specified. Architectural asphalt is the dominant choice — over 85% of our St. Louis residential replacements use it.",
      content: {
        type: "table",
        data: {
          caption: "Replacement materials and St. Louis cost ranges",
          headers: [
            "Material",
            "2,000 sq ft installed cost",
            "Lifespan",
          ],
          rows: [
            ["Architectural asphalt", "$9,000–$15,000", "20–28 yr"],
            ["Designer / luxury asphalt", "$14,000–$21,000", "25–35 yr"],
            ["Standing-seam metal", "$18,000–$32,000", "40–70 yr"],
            ["Corrugated metal", "$13,000–$21,000", "30–50 yr"],
            ["Synthetic slate / composite", "$21,000–$33,000", "40–50 yr"],
            ["Cedar shake", "$19,000–$30,000", "25–40 yr"],
          ],
        },
      },
    },
    {
      h2: "How long does a replacement take?",
      directAnswer:
        "Most St. Louis residential asphalt replacements (1,800–2,800 sq ft, single layer) complete in 1–3 days on-site once materials arrive. Single-day installs are common for straightforward roofs. Steep, complex, or two-layer tear-off projects take longer. Metal installations run 3–6 days on-site. Weather can add a day.",
      content: {
        type: "prose",
        paragraphs: [
          "From the moment you sign the contract: 1–3 weeks until material lead time and permit issuance complete. Then the on-site work begins. We dispatch a full crew per project — your roof isn't a side job we squeeze between other work.",
          "We weatherproof every evening regardless of where the work stands. Even if a multi-day project gets paused by weather, your home is closed up and water-tight before the crew leaves for the day. We don't leave roofs open overnight.",
        ],
      },
    },
    {
      h2: "What does a roof replacement cost in St. Louis?",
      directAnswer:
        "Architectural-asphalt replacement on a typical 2,000 sq ft St. Louis home runs $9,000–$15,000 in 2026. Steep, complex, two-story homes climb from there. Metal systems run $18,000–$32,000 for the same footprint. Our cost guide breaks every line item down — materials, labor, decking, permit, dumpster.",
      content: {
        type: "prose",
        paragraphs: [
          "Cost depends on size, pitch, complexity, existing layer count, and material. A 1,800 sq ft single-story ranch with one layer of architectural asphalt is the least expensive baseline; a 2,800 sq ft two-story with steep pitches, dormers, and two existing layers can run nearly twice as much for the same shingle line.",
          "Decking damage isn't visible until tear-off. We specify a per-sheet replacement rate ($80–$140) on every estimate so surprises stay small and visible. Permit fees ($75–$250 in the St. Louis area) and dumpster fees ($350–$600) appear as their own lines. The full breakdown is in our roofing cost guide.",
        ],
      },
    },
  ],

  processSteps: [
    {
      title: "Inspect",
      description: "Free on-roof inspection with photos and attic check.",
    },
    {
      title: "Estimate",
      description: "Written, itemized — every line named.",
    },
    {
      title: "Tear-off",
      description: "Existing roof removed; damaged decking replaced per-sheet.",
    },
    {
      title: "Install",
      description: "New underlayment, ice-and-water shield, shingles or metal, accessories.",
    },
    {
      title: "Warranty",
      description: "Written workmanship + manufacturer warranties delivered.",
    },
  ],

  faqs: [
    {
      question: "How long does a roof replacement take?",
      answer:
        "Most St. Louis residential asphalt replacements (1,800–2,800 sq ft, single layer) complete in 1–3 days on-site. Single-day is common for straightforward roofs. Two-layer tear-offs, complex roofs, and metal installations take longer. Weather can add a day. We weatherproof every evening regardless.",
    },
    {
      question: "Do I need to leave my house during the replacement?",
      answer:
        "No. The work happens entirely on the roof exterior. There's significant noise during tear-off and install — many homeowners take pets to a friend's place for the noisiest hours. We don't need access to the inside of the house for the install itself.",
    },
    {
      question: "Will you protect my landscaping?",
      answer:
        "Yes — tarps, plywood at access points, careful dumpster placement. Magnetic-roller sweeps for nails happen at the end of every day plus a final sweep when the dumpster leaves. Point out any specialty plants or hardscape at the estimate so we can plan around them.",
    },
    {
      question: "Do you tear off the old roof?",
      answer:
        "Yes. We strongly prefer full tear-off for any roof we're replacing. Reroofs (installing over existing shingles) trap problems, double weight loads, void manufacturer warranties on most modern shingles, and obscure decking damage that needs addressing. We'll recommend tear-off unless there's a very specific reason otherwise — and we'll explain why in writing.",
    },
    {
      question: "Do you handle the permit?",
      answer:
        "Yes. We pull the permit on your behalf in any St. Louis-area municipality that requires one (most do for full replacement). Permit fees are itemized on your estimate. We schedule the inspection and meet the inspector — you don't need to be home for that step.",
    },
    {
      question: "Do you offer financing for roof replacement?",
      answer:
        "Yes — through approved lending partners. Soft-pull pre-qualification (no credit-score impact), 12–84 month terms, and 0% intro options on select programs for qualifying customers. See our financing page for details.",
    },
    {
      question: "What warranty do you provide on a replacement?",
      answer:
        "Two warranties: a written workmanship warranty from us (typically 5–10 years, transferable in most cases) and a manufacturer warranty on the materials (20-year through lifetime depending on the line). Both are explained line-by-line in your estimate before you sign.",
    },
    {
      question: "What's the best time of year to replace a roof in St. Louis?",
      answer:
        "Late spring through mid-fall is ideal — temperatures are warm enough for shingles to seal properly and crews can move quickly. Late fall and winter installs are possible (and often 5–10% cheaper) but shingle sealing needs to be hand-managed in cold weather. Active emergencies still get scheduled regardless of season.",
    },
  ],

  relatedServices: [
    "residential-roofing",
    "roof-repair",
    "metal-roofing",
    "roofing-inspection",
  ],
  relatedCities: [
    "st-charles-mo",
    "kirkwood-mo",
    "clayton-mo",
    "ladue-mo",
    "chesterfield-mo",
  ],
  relatedBlogPosts: [
    "signs-you-need-new-roof",
    "best-roofing-materials-st-louis",
    "roof-repair-vs-replacement",
  ],

  proprietaryStats: [
    {
      value: "85%+",
      label: "Of replacements use architectural asphalt",
      description:
        "Dominant choice for St. Louis homes — wind/hail-rated, fits regional housing stock.",
    },
    {
      value: "1–3 days",
      label: "Typical on-site time, single-family asphalt replacement",
    },
    {
      value: "$9k–$15k",
      label: "Architectural asphalt replacement, 2,000 sq ft St. Louis home (2026)",
    },
  ],

  citations: [
    {
      href: "https://www.nrca.net",
      source: "NRCA",
      label: "NRCA — installation best practices for residential roofing",
    },
    {
      href: "https://ibhs.org/fortified",
      source: "IBHS",
      label: "IBHS FORTIFIED Roof program — storm resilience standards",
    },
  ],
};
