import type { ServiceContent } from "@/types/service";
import { BUSINESS } from "@/lib/constants";

export const roofRepair: ServiceContent = {
  slug: "roof-repair",
  name: "Roof Repair",
  ctaClass: "B",

  seo: {
    title: "Roof Repair in St. Louis | All Weather Roofing Systems",
    description:
      "Spot-fix repairs, leak diagnosis, and storm-damage repair across St. Louis and the Metro East. Fast scheduling, written estimates. Call (314) 834-6556.",
    canonical: `${BUSINESS.url}/services/roof-repair`,
  },

  hero: {
    h1: "Roof Repair in St. Louis",
    eyebrow: "Roof repair",
    subhead:
      "Active leak, missing shingles, failed flashing — we diagnose what's actually wrong and fix only what needs fixing. Most repairs run $400–$1,800 and complete same-week.",
    trustBullets: ["Same-week scheduling", "Written estimates", "Honest assessments"],
  },

  directAnswer:
    "A roof repair fixes a localized problem — wind-lifted shingles, a failed pipe boot, a leaking valley, a chimney flashing rebuild — without replacing the whole roof. Most St. Louis residential repairs run $400–$1,800 and complete same-week. We'll tell you straight whether repair is the right call or whether the roof has reached the point where replacement makes more sense.",

  primaryKeywords: ["roof repair st louis", "roof leak repair st louis"],
  secondaryKeywords: [
    "shingle repair st louis",
    "flashing repair",
    "emergency roof repair st louis",
  ],

  sections: [
    {
      h2: "When do you need a roof repair?",
      directAnswer:
        "Call for a repair when damage is localized: a few wind-lifted or torn shingles after a storm, a single failed flashing leaking into a ceiling, a popped pipe boot, or a valley showing wear. If damage is widespread or the roof is past 20 years old, replacement is usually the smarter call — we'll give you the honest answer at inspection.",
      content: {
        type: "prose",
        paragraphs: [
          "Repair is the right call when the underlying decking is sound, the rest of the roof has plenty of life left, and the damage is concentrated in one area. A wind storm tore six shingles off the back slope. A pipe boot dry-rotted and started leaking into the bathroom. A chimney flashing finally gave up after 18 years. These are textbook repairs.",
          "Repair stops being the right call when leaks are widespread, when granule loss is heavy across multiple slopes, when daylight is visible from the attic, or when the roof is past 20 years old and showing systemic wear. At that point, repair dollars are better spent on tear-off and replacement.",
        ],
      },
    },
    {
      h2: "What signs mean you need a repair right now?",
      directAnswer:
        "Active drips or stains on ceilings, missing or curled shingles after a storm, exposed underlayment, granules pooling in gutters, daylight from the attic, or a clearly damaged flashing around a chimney or vent. Any of these — call us. The longer water sits, the more it costs to fix.",
      content: {
        type: "bullets",
        items: [
          "Active leak — water dripping or staining a ceiling, even intermittently after rain.",
          "Missing or torn shingles — visible from the ground or driveway after a storm.",
          "Curled or buckling shingles — usually from heat damage, age, or moisture from below.",
          "Granules in the gutter — a handful is normal, a cup is a sign of heavy granule loss.",
          "Daylight from the attic — a clear sign of a hole or torn underlayment somewhere.",
          "Visibly damaged flashing around chimney, vent, or skylight.",
          "Sagging roof line — structural concern that needs immediate inspection.",
        ],
      },
    },
    {
      h2: "What types of roof repairs do you handle?",
      directAnswer:
        "Every common St. Louis residential repair: shingle replacement, pipe boot replacement, chimney flashing rebuild, valley leak repair, decking sheet replacement, skylight reseal, and emergency tarp-and-secure for active water intrusion. Pricing ranges $300–$1,800 depending on scope.",
      content: {
        type: "table",
        data: {
          caption: "Common roof repair types and St. Louis cost ranges",
          headers: ["Repair", "Typical cost", "Typical timeline"],
          rows: [
            ["Replacement shingles (small section)", "$400–$700", "Same-day install"],
            ["Pipe boot or vent flashing", "$300–$550", "Same-day"],
            ["Chimney flashing rebuild", "$700–$1,400", "Half-day to full day"],
            ["Valley leak repair", "$600–$1,200", "Half-day"],
            ["Decking sheet replacement", "$80–$140 per sheet", "Combined with shingle work"],
            ["Skylight reseal", "$450–$900", "Half-day"],
            ["Emergency tarp-and-secure", "$300–$700", "Same-day"],
          ],
        },
      },
    },
    {
      h2: "How do you tell repair from replacement?",
      directAnswer:
        "We climb the roof, document the actual condition with photos, check the attic where accessible, and look at the whole system — not just the failure point. If the rest of the roof has 5+ years of life left and damage is localized, repair is the call. If you're chasing leaks across slopes or the roof is past 20, replacement is the smarter spend.",
      content: {
        type: "comparison",
        columns: [
          {
            title: "Repair makes sense when",
            bullets: [
              "Damage is localized to one area or one failure point.",
              "Decking under the failure is sound (or repairable per-sheet).",
              "Roof is under 15–18 years old.",
              "Granule loss is normal across the rest of the roof.",
              "No widespread shingle curl or cup.",
            ],
          },
          {
            title: "Replacement makes sense when",
            bullets: [
              "Multiple slopes have damage or wear.",
              "Roof is past 20 years old.",
              "Visible granule loss across the field.",
              "Daylight visible from the attic in multiple spots.",
              "You've had 2+ leaks in the last 12 months.",
            ],
          },
        ],
      },
    },
    {
      h2: "What does a roof repair cost in St. Louis?",
      directAnswer:
        "Most St. Louis residential roof repairs run $400–$1,800 in 2026. Simple shingle replacements sit on the low end; multi-flashing rebuilds and emergency tarp-plus-repair sit on the higher end. Our written estimate itemizes materials, labor, and any decking allowance before tools come off the truck.",
      content: {
        type: "prose",
        paragraphs: [
          "Pricing reflects the complexity of the access (steep pitch, two-story), the materials needed (color-match availability, manufacturer line still in production), and any decking damage we find when we lift shingles. We document everything with photos so the estimate matches what you can see on your own roof.",
          "Insurance often covers storm-damage repairs (hail, wind) when the damage meets a carrier's threshold. We meet adjusters on-site routinely and document the scope of loss for insurer review. Out-of-pocket repairs are the rest — we don't push you toward an insurance claim if the damage doesn't legitimately qualify.",
        ],
      },
    },
  ],

  processSteps: [
    {
      title: "Diagnose",
      description:
        "Free on-roof inspection with photos. Attic check where accessible. We tell you what's actually wrong before quoting a fix.",
    },
    {
      title: "Estimate",
      description:
        "Written, itemized — materials, labor, decking allowance, warranty. No 'misc' lines.",
    },
    {
      title: "Schedule",
      description:
        "Most repairs scheduled within the week. Active leaks and emergencies get same-week priority.",
    },
    {
      title: "Repair",
      description:
        "W-2 crew, materials match where possible, photos before-and-after, magnetic-sweep cleanup.",
    },
    {
      title: "Warranty",
      description:
        "Written workmanship warranty on the repair. Most repairs carry 1–5 year coverage on the work performed.",
    },
  ],

  faqs: [
    {
      question: "How much does a roof repair cost in St. Louis?",
      answer:
        "Most residential repairs run $400–$1,800 in 2026. Simple shingle replacement is $400–$700; flashing rebuilds run $700–$1,400; emergency tarp-and-secure is $300–$700 as a stopgap before the actual repair. Our estimate itemizes materials, labor, and any decking allowance.",
    },
    {
      question: "Can a roof be repaired in winter?",
      answer:
        "Yes — most repairs can be performed in winter, with caveats. Asphalt shingles need to be warm enough to seal properly; below ~40°F, the seal strips don't activate fully and may need hand-sealing. Roofs are also slippery and dangerous when wet or icy, which can push scheduling. Active emergencies still get same-day response in winter; cosmetic repairs may wait for milder days.",
    },
    {
      question: "How long does a roof repair last?",
      answer:
        "A correctly performed repair on a roof with life left typically lasts the remaining life of the surrounding roof. Pipe boot replacements last 10–15 years (the rubber's lifespan). Chimney flashing rebuilds, valley repairs, and shingle replacements should last 15+ years if the roof itself has that life remaining. We carry a written workmanship warranty on the repair itself.",
    },
    {
      question: "Is it worth repairing an old roof?",
      answer:
        "Usually not, if the roof is past 20 years old and showing wear across multiple slopes. A $1,200 repair on a roof that needs replacement in 18 months is $1,200 you didn't get full value from. The exception is emergency stabilization — tarp now to stop active water damage, plan replacement on your timeline. We'll tell you straight which case you're in.",
    },
    {
      question: "Will insurance cover my roof repair?",
      answer:
        "Storm-driven damage (hail, wind, fallen tree) is often covered by homeowners insurance when it meets a carrier's threshold. Age-related wear, normal weathering, and routine maintenance are not covered. We document storm damage with photos and meet adjusters on-site to support the claim. We don't push you toward filing a claim if the damage doesn't legitimately qualify — denied claims can affect premium history.",
    },
    {
      question: "Do you repair flat roofs?",
      answer:
        "Yes — we repair flat-roof systems on residential and commercial properties: TPO seam repairs, EPDM patching, modified bitumen blister repair, and parapet flashing fixes. Flat-roof repairs require system-specific materials and techniques; we'll match the existing system on our repair.",
    },
  ],

  relatedServices: [
    "roof-replacement",
    "storm-damage-roofing",
    "emergency-roofing",
    "roofing-inspection",
  ],
  relatedCities: [
    "st-charles-mo",
    "ofallon-mo",
    "kirkwood-mo",
    "belleville-il",
    "chesterfield-mo",
  ],
  relatedBlogPosts: ["signs-you-need-new-roof", "roof-repair-vs-replacement"],

  proprietaryStats: [
    {
      value: "~70%",
      label: "Of our St. Louis repairs are storm-driven",
      description: "Wind, hail, and storm-aged flashing — often insurance-eligible.",
    },
    {
      value: "$400–$1,800",
      label: "Typical St. Louis repair cost range, 2026",
    },
    {
      value: "Same-week",
      label: "Standard repair scheduling for non-emergencies",
    },
  ],

  citations: [
    {
      href: "https://www.nrca.net",
      source: "NRCA",
      label: "NRCA — repair best practices",
    },
    {
      href: "https://insurance.mo.gov",
      source: "Missouri DOI",
      label: "Missouri Department of Insurance — claims process",
    },
  ],
};
