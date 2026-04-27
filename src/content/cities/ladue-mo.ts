import type { CityContent, CityResearch } from "@/types/city";
import { BUSINESS } from "@/lib/constants";
import research from "@/content/cities-research/ladue-mo.json";

const r = research as CityResearch;

export const ladueMo: CityContent = {
  slug: "ladue-mo",
  nameDisplay: "Ladue, MO",
  ctaClass: "B",
  research: r,

  seo: {
    title: "Roofing in Ladue, MO | Estate-Scale Premium Roofing",
    description:
      "Ladue estate roofing — historic preservation, premium materials, white-glove project management, strict code compliance. Call (314) 834-6556.",
    canonical: `${BUSINESS.url}/service-areas/ladue-mo`,
  },

  hero: {
    h1: "Roofing in Ladue, MO",
    eyebrow: "Service area: Ladue",
    subhead:
      "Estate-scale houses, premium materials as the baseline, strict code enforcement, and reputation-sensitive clientele. Roofing in Ladue is a different category of contracting.",
    trustBullets: ["Estate-scale projects", "White-glove logistics", "Strict-code compliance"],
  },

  directAnswer:
    "Ladue is St. Louis's oldest-money market, and roofing here looks different from anywhere else in the metro. Estate-scale houses, premium materials as a baseline rather than upgrade, strict municipal code enforcement, and reputation-sensitive clientele who notice every aspect of a project — from the tarp coverage on landscaping to the magnetic-sweep cleanup — make Ladue work a different category of contracting.",

  sections: [
    {
      id: "estate-roofing",
      type: "prose",
      h2: "Ladue estate roofing: historic and high-end",
      directAnswer:
        "Estate-scale houses with premium materials, longer project timelines, larger crews, and more complex logistics. Ladue projects don't fit standard residential roofing pricing or schedules — and shouldn't be expected to.",
      content: {
        type: "prose",
        paragraphs: [
          "Most Ladue homes worth roofing are 4,000+ square feet — often 6,000–10,000+ on the estates north of Clayton Road and along the Litzsinger Road corridor. Premium materials (slate, copper, clay tile, designer asphalt) are the standard recommendation rather than the upgrade tier. Crew size, dumpster logistics, and project timeline all scale up correspondingly.",
          "Ladue homeowners (or their property managers) expect white-glove project management: branded trucks, uniformed crews, scheduled communications, no profanity within earshot, immaculate cleanup. None of that is optional in this market.",
        ],
      },
    },
    {
      id: "code-enforcement",
      type: "regulatory",
      h2: "Ladue's code enforcement and what you should know",
      directAnswer:
        "Ladue runs among the strictest residential code enforcement in the St. Louis metro. The City of Ladue Building Department reviews permits carefully and inspects work thoroughly. Visible exterior changes get scrutiny.",
      content: {
        type: "regulatory",
        permitOffice: r.regulatoryContext.permitOffice,
        notableCodes: r.regulatoryContext.notableCodes,
        paragraph:
          "We pull permits in our name and meet inspectors on every Ladue project. Tree-protection ordinances and other municipal requirements are factored into the project plan, not discovered during work. A contractor unfamiliar with Ladue's code regimen will fail inspections and slow projects; one experienced here moves through the regulatory environment without friction.",
      },
    },
    {
      id: "appropriate-materials",
      type: "architectural",
      h2: "Materials appropriate for Ladue estates",
      content: {
        type: "architectural",
        eras: r.housingStock.dominantEras,
        styles: r.housingStock.dominantStyles,
        paragraph:
          "Ladue's architectural mix — Tudor Revival, Colonial Revival, Georgian, French Eclectic, Manor — informs material selection. Real slate on Tudor estates, copper-accented detailing on Manor-style homes, lifetime-warranty designer asphalt on Colonial Revival, standing-seam metal on Mid-Century Modern stock. We bring samples and a portfolio of comparable Ladue installations to every estimate.",
      },
    },
    {
      id: "neighborhoods",
      type: "neighborhoods",
      h2: "Neighborhoods and properties we serve",
      content: {
        type: "neighborhoods",
        items: r.neighborhoods.map((n) => ({ name: n.name, profile: n.profile })),
      },
    },
    {
      id: "client-experience",
      type: "prose",
      h2: "Discretion, scheduling, and the Ladue client experience",
      directAnswer:
        "Privacy, clean job sites, predictable schedules. Ladue clients tend to coordinate through estate or property managers; we work in that channel comfortably. Reputation referrals matter enormously here — neighbors talk.",
      content: {
        type: "prose",
        paragraphs: [
          "We schedule deliveries and crew arrivals in time windows the homeowner or property manager controls. We coordinate dumpster placement to minimize visual impact and tree-protection considerations. We maintain branded, identifiable presence on the property — uniforms, trucks, badges — so household staff and neighbors can identify our crew at a glance.",
          "Communication runs in writing for Ladue projects: written daily updates on multi-day work, written change orders for any scope adjustments, written final-acceptance documentation. The level of finish quality and procedural precision Ladue homeowners expect aligns with how we like to work.",
        ],
      },
    },
  ],

  faqs: [
    {
      question:
        "How does roofing on a Ladue estate differ from a standard residential project?",
      answer:
        "Larger square footage, premium materials as baseline, longer timelines, more complex logistics, stricter code enforcement, and white-glove project management. Cost scales accordingly — most Ladue projects run $50,000–$200,000+ depending on size and material choice.",
    },
    {
      question: "Can you coordinate through a property manager rather than directly with the homeowner?",
      answer:
        "Yes — Ladue projects routinely run through property or estate managers. We'll structure communications, scheduling, and approvals through whichever channel the homeowner prefers. Written documentation throughout so all parties stay aligned.",
    },
    {
      question: "Are slate and copper installations common in Ladue?",
      answer:
        "Yes — both are part of the regular material mix for Ladue estates. Real slate on Tudor and Colonial Revival homes; copper accents on bay roofs, dormers, ridge caps, and historic detailing. We install both regularly and bring portfolio examples and comparable-project references to every estimate.",
    },
    {
      question: "How does Ladue's strict code enforcement affect project timelines?",
      answer:
        "Permit review and inspection processes in Ladue are thorough — we factor that into project schedules at estimate rather than fighting it during work. A contractor unfamiliar with Ladue's regulatory environment will hit avoidable delays; an experienced one builds the timeline around the city's rhythm.",
    },
    {
      question: "Do you handle tree-protection requirements on heavily-canopied Ladue estates?",
      answer:
        "Yes — Ladue's tree-protection ordinances apply to most large-lot properties. We plan dumpster placement, equipment staging, and crew flow to comply with drip-line protection and other tree-related requirements. Compliance is part of the project plan, not an afterthought.",
    },
    {
      question: "What landmarks orient Ladue addresses?",
      answer:
        "Useful reference points: Ladue Town Hall, John Burroughs School, MICDS (Mary Institute and Saint Louis Country Day School), and Forest Park (adjacent on the eastern boundary). Litzsinger Road and Clayton Road are the major orientation corridors; I-64/Highway 40 is the main highway.",
    },
  ],

  citySpecificTestimonialIds: [],
  nearbyCities: r.nearbyCities,
  relatedServices: ["metal-roofing", "residential-roofing", "roof-replacement", "roofing-inspection"],
};
