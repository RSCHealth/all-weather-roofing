import type { ServiceContent } from "@/types/service";
import { BUSINESS } from "@/lib/constants";

export const industrialRoofing: ServiceContent = {
  slug: "industrial-roofing",
  name: "Industrial Roofing",
  ctaClass: "B",

  seo: {
    title: "Industrial Roofing in St. Louis | Warehouses, Manufacturing, Plants",
    description:
      "Industrial-scale roofing for warehouses, manufacturing facilities, and distribution centers across the St. Louis metro. (314) 834-6556.",
    canonical: `${BUSINESS.url}/services/industrial-roofing`,
  },

  hero: {
    h1: "Industrial Roofing in St. Louis",
    eyebrow: "Industrial roofing",
    subhead:
      "Large-format flat-roof systems for warehouses, manufacturing, and distribution facilities. Phased installs, OSHA-compliant safety protocols, coordinated with your operations.",
    trustBullets: [
      "OSHA-compliant safety",
      "Phased install scheduling",
      "20-year manufacturer warranties",
    ],
  },

  directAnswer:
    "Industrial roofing covers large-format flat and low-slope roofs on warehouses, manufacturing facilities, distribution centers, and light-industrial buildings. We install single-ply (TPO, EPDM, PVC), modified bitumen, metal, and restoration coating systems on roofs ranging from 20,000 to 500,000+ square feet, with phased scheduling that works around production and shipping operations.",

  primaryKeywords: [
    "industrial roofing st louis",
    "warehouse roofing st louis",
    "industrial roof contractor",
  ],
  secondaryKeywords: [
    "manufacturing facility roof",
    "distribution center roofing",
    "large flat roof contractor st louis",
  ],

  sections: [
    {
      h2: "What's different about industrial roofing?",
      directAnswer:
        "Scale, safety, and operations. Industrial roofs are measured in tens or hundreds of thousands of square feet. The work has to navigate active production, shipping schedules, and OSHA-regulated safety protocols. Material logistics, crew size, and project phasing look nothing like residential or small-commercial work.",
      content: {
        type: "prose",
        paragraphs: [
          "On a 100,000 sq ft warehouse, a full system replacement might involve 8–14 weeks of phased work, multiple material deliveries, and a rotating crew managed against production schedules. Mid-project, the building is often still loading trucks, running production lines, and shipping product. Our scheduling, equipment staging, and safety protocols are designed for that reality.",
          "We hold full liability and workers' comp insurance at industrial-project limits, follow OSHA fall-protection and confined-space protocols, and carry the documentation any compliance-conscious facility manager will ask for before we set foot on the property.",
        ],
      },
    },
    {
      h2: "What industrial roofing systems do you install?",
      directAnswer:
        "Single-ply membranes (TPO, EPDM, PVC) for most large flat roofs, modified bitumen for retrofit work, standing-seam metal for taller industrial profiles, and silicone restoration coatings to extend mid-life roofs without full replacement.",
      content: {
        type: "table",
        data: {
          caption: "Industrial roofing systems",
          headers: ["System", "Best fit", "Typical lifespan"],
          rows: [
            ["TPO single-ply", "Energy-efficient new install on large flat roofs", "20–25 yr"],
            ["EPDM (rubber)", "Durable budget choice on stable substrate", "25–30 yr"],
            ["PVC single-ply", "Chemical-exposure roofs, food/beverage facilities", "20–30 yr"],
            ["Modified bitumen", "Retrofit over existing systems", "20 yr"],
            ["Standing-seam metal", "Tall industrial, long-life applications", "40–60 yr"],
            ["Silicone restoration coating", "Roofs at 60–80% of life — extension instead of replacement", "10–15 yr added"],
          ],
        },
      },
    },
    {
      h2: "How do you handle phased projects?",
      directAnswer:
        "We section the roof into phases that match production realities — building wings, equipment zones, shipping schedules. Each phase is its own mini-project: dumpster placement, material staging, crew rotation, weatherproofing at section boundaries. We commit to phase dates in writing so building operations can plan around them.",
      content: {
        type: "bullets",
        items: [
          "Pre-project walk-through with facility maintenance, EHS, and operations leads.",
          "Phase plan with specific date ranges per section, mapped to production and shipping calendars.",
          "Material staging plan that doesn't block dock doors, fire lanes, or fork-lift routes.",
          "Daily progress reports during active phases — facility management never out of the loop.",
          "Weatherproofing at every phase boundary so partially-completed sections are water-tight.",
          "Final acceptance and warranty registration at project completion.",
        ],
      },
    },
    {
      h2: "What safety protocols do you follow?",
      directAnswer:
        "OSHA-compliant fall protection on every roof, regardless of slope. Hot-work permits for any flame or torch application. Confined-space protocols where applicable. Daily safety briefings. Documented crew certifications available on request to your EHS team before the project starts.",
      content: {
        type: "prose",
        paragraphs: [
          "We carry full liability insurance plus workers' compensation at industrial-project policy limits. We can provide our certificate of insurance, OSHA training certifications, and project-specific safety plan to your facility's EHS or risk management team before any crew arrives. If your facility has its own contractor onboarding requirements (drug screening, badge access, site orientation), we'll complete them.",
          "We've worked on facilities with active heavy-equipment operations, food-grade requirements, and sensitive electronics — and we've passed the safety audits each one required. If you have specific compliance requirements, tell us at the estimate.",
        ],
      },
    },
  ],

  processSteps: [
    {
      title: "Site assessment",
      description:
        "Roof inspection, system identification, infrared scan if leak source unclear, photographic documentation of existing condition.",
    },
    {
      title: "Project plan + estimate",
      description:
        "Itemized scope, phased timeline, material specifications, safety protocols, insurance documentation.",
    },
    {
      title: "Onboarding + scheduling",
      description:
        "Compliance documentation submitted to EHS, contractor onboarding completed, phase dates locked.",
    },
    {
      title: "Phased install",
      description:
        "Section-by-section work coordinated with production schedules. Daily progress reports.",
    },
    {
      title: "Acceptance + warranty",
      description:
        "Final walk-through, manufacturer warranty registered, full project documentation delivered for capital expense records.",
    },
  ],

  faqs: [
    {
      question: "How large of a roof can you handle?",
      answer:
        "We've completed industrial roofing projects from 20,000 to 500,000+ square feet across the St. Louis metro and Metro East. Larger projects use phased scheduling and rotating crews to maintain quality and safety across long timelines. We'll discuss specific capacity at the estimate based on your project size and timeline.",
    },
    {
      question: "Can you work around our production schedule?",
      answer:
        "Yes. Industrial projects almost always require coordination with active operations. We section roofs into phases that align with production zones, schedule around shipping windows, and stage equipment to avoid dock doors and fork-lift routes. Phase dates are committed in writing.",
    },
    {
      question: "How long does an industrial roofing project take?",
      answer:
        "Project-specific. A 30,000 sq ft TPO replacement typically runs 3–5 weeks. A 100,000 sq ft phased project can run 8–14 weeks depending on weather and access. A 500,000 sq ft multi-phase replacement may run 6–12 months. We commit to specific phase and completion dates in writing.",
    },
    {
      question: "Do you handle insurance claims on industrial properties?",
      answer:
        "Yes — including large storm-damage events. We document damage with photos, infrared scans, and detailed scope reports for the carrier's adjuster. We can coordinate with your risk-management team and outside loss consultants if your insurance program uses them.",
    },
    {
      question: "What documentation do you provide for capital expense records?",
      answer:
        "Itemized invoice with line-item materials, labor, and disposal; manufacturer warranty registration; our written workmanship warranty; project completion photographs; and any compliance documentation your facility requires (insurance certificates, OSHA training records, contractor onboarding completion). Format adjusted to match your facility's CapEx requirements.",
    },
    {
      question: "Can you do roof restoration coatings on industrial properties?",
      answer:
        "Yes — silicone and acrylic restoration coatings can extend mid-life industrial roofs by 10–15 years at 30–50% the cost of full replacement. Best on roofs with intact substrate but worn surface, typically 8–15 years old depending on the original system. Some facilities can expense the coating instead of capitalizing it (consult your accountant). We'll evaluate whether restoration is the right call during inspection.",
    },
  ],

  relatedServices: [
    "commercial-roofing",
    "metal-roofing",
    "roof-repair",
    "storm-damage-roofing",
  ],
  relatedCities: [
    "edwardsville-il",
    "ofallon-mo",
    "belleville-il",
    "st-charles-mo",
  ],
  relatedBlogPosts: [],

  proprietaryStats: [
    {
      value: "20,000–500,000+ sq ft",
      label: "Industrial project size range",
    },
    {
      value: "Phased scheduling",
      label: "Standard for projects over 50,000 sq ft",
    },
  ],

  citations: [
    {
      href: "https://www.osha.gov/roofing",
      source: "OSHA",
      label: "OSHA — roofing safety regulations and fall protection",
    },
  ],
};
