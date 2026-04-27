import type { CityContent, CityResearch } from "@/types/city";
import { BUSINESS } from "@/lib/constants";
import research from "@/content/cities-research/belleville-il.json";

const r = research as CityResearch;

export const bellevilleIl: CityContent = {
  slug: "belleville-il",
  nameDisplay: "Belleville, IL",
  ctaClass: "B",
  research: r,

  seo: {
    title: "Roofing in Belleville, IL | Storm Recovery & Historic Brick Specialists",
    description:
      "Roofing in Belleville, IL — tornado and hail recovery, insurance-claim experience, historic brick-home work. IDFPR-licensed. Call (314) 834-6556.",
    canonical: `${BUSINESS.url}/service-areas/belleville-il`,
  },

  hero: {
    h1: "Roofing in Belleville, IL",
    eyebrow: "Service area: Belleville",
    subhead:
      "Southern Illinois tornado and hail country. Historic brick downtown. We work both — with active IDFPR licensure, insurance-claim experience, and historic-context know-how.",
    trustBullets: ["Storm-recovery focused", "Historic-stock experienced", "IDFPR-licensed"],
  },

  directAnswer:
    "Roofing in Belleville is defined by storm recovery and historic stock in roughly equal measure. Southern Illinois's tornado-and-hail corridor drives heavy spring insurance-claim work; downtown Belleville's federally-registered historic districts shape material decisions on a different set of homes; and the contractor working here needs IDFPR licensure, insurance-claim familiarity, and the experience to handle 19th-century brick stock alongside post-1970 subdivisions.",

  sections: [
    {
      id: "storm-history",
      type: "weather-history",
      h2: "Belleville storm history and roof damage patterns",
      directAnswer:
        "Belleville sits inside southern Illinois's active severe-weather corridor. Spring tornado risk peaks April–June; hail events are common across the season; and major events drive widespread insurance-claim work across the Metro East simultaneously.",
      content: {
        type: "weather-history",
        entries: [
          {
            date: "Spring (recurring)",
            type: "tornado",
            description:
              "Southern Illinois tornado window peaks April–June. Belleville and the broader Metro East have a documented history of tornado events (specific dates and EF ratings: owner-verify).",
            roofingImplication:
              "Tornado damage often hides under apparently intact shingles — wind-driven structural damage can require deeper inspection of decking, framing, and tie-downs, not just the visible surface.",
          },
          {
            date: "Spring (recurring)",
            type: "hail",
            description:
              "Hail events frequently accompany Metro East severe weather, producing widespread shingle damage in subdivisions where uniform installations all show damage at once.",
            roofingImplication:
              "Insurance-claim volume spikes after major hail. Filing early matters — the 12-month claim window starts ticking on the storm date.",
          },
          {
            date: "Summer (recurring)",
            type: "straight-line wind",
            description:
              "Derecho and straight-line wind events have historically caused tree-fall and wind damage across Belleville (specific events: owner-verify).",
            roofingImplication:
              "Tree-strike damage and wind-lifted shingles concentrate on storm-leading-edge slopes; document with photos before any cleanup.",
          },
        ],
      },
    },
    {
      id: "insurance-process",
      type: "prose",
      h2: "Working with Belleville insurance adjusters",
      directAnswer:
        "After a major storm event, Belleville roofing work concentrates around insurance claims. Contractors who can document damage to carrier-acceptable standards, meet adjusters on-site, and supplement scope-of-loss when warranted produce better outcomes than pure tear-off-and-install crews.",
      content: {
        type: "prose",
        paragraphs: [
          "Illinois claim handling follows Illinois rules. The on-site adjuster process feels familiar to anyone who's been through a Missouri-side claim, but back-end timelines and dispute processes go through the Illinois Department of Insurance rather than Missouri DOI. We meet adjusters on either side of the river routinely.",
          "Common scope-of-loss conversations: matching shingles when only one slope is approved (often we can supplement for full-roof replacement when matching can't be achieved), code-required upgrades like ice-and-water shield not in the initial scope, and decking damage discovered during tear-off.",
        ],
      },
    },
    {
      id: "historic-brick",
      type: "architectural",
      h2: "Belleville's historic brick homes and their roofing needs",
      directAnswer:
        "Federally-registered historic districts in downtown Belleville hold significant 19th-century brick stock — Italianate, Victorian, American Foursquare. These homes often have built-in gutters, parapet walls, flat-roof penthouse sections, and detailing that doesn't apply to suburban asphalt work.",
      content: {
        type: "architectural",
        eras: r.housingStock.dominantEras,
        styles: r.housingStock.dominantStyles,
        paragraph:
          "Roofing 19th-century brick stock requires specialty knowledge: built-in box gutters that need lining or replacement, parapet flashings that fail differently than open-eave installations, flat-roof penthouse sections (often EPDM or modified bitumen) that are different systems from the main asphalt roof. Pricing and scope on these homes look nothing like a typical subdivision quote.",
      },
    },
    {
      id: "permits-codes",
      type: "regulatory",
      h2: "Permit and code considerations in Belleville",
      content: {
        type: "regulatory",
        permitOffice: r.regulatoryContext.permitOffice,
        historicDistrictName: r.regulatoryContext.historicDistrictName,
        notableCodes: r.regulatoryContext.notableCodes,
        paragraph:
          "Inside the West Main Street historic district and Old Belleville historic district, visible material and color changes can be subject to historic preservation review. Outside the historic core, standard permit-and-inspect process applies. We handle both.",
      },
    },
    {
      id: "neighborhoods",
      type: "neighborhoods",
      h2: "Neighborhoods we serve",
      content: {
        type: "neighborhoods",
        items: r.neighborhoods.map((n) => ({ name: n.name, profile: n.profile })),
      },
    },
    {
      id: "storm-process",
      type: "process",
      h2: "Our storm response process for Belleville homes",
      content: {
        type: "process",
        steps: [
          {
            title: "Same-day tarp",
            description:
              "Active leak or open hole? We tarp during business hours to stop further water entry.",
          },
          {
            title: "Inspection + documentation",
            description:
              "On-roof photos, written summary, and damage assessment formatted for your insurance file.",
          },
          {
            title: "Adjuster meeting",
            description:
              "We meet your Illinois-side adjuster on-site to ensure scope of loss matches actual damage.",
          },
          {
            title: "Restoration",
            description:
              "Full repair or replacement scheduled. Period-appropriate materials for historic stock; standard architectural for subdivisions.",
          },
        ],
      },
    },
  ],

  faqs: [
    {
      question:
        "Has Belleville had recent tornado activity that's affecting current roofing claims?",
      answer:
        "Belleville sits in an active southern Illinois tornado corridor and has experienced tornado events in recent years. Specific dates, EF ratings, and damage scope vary by event — call us with your address and we'll talk through what we know about the storm history affecting your specific neighborhood. Most carriers accept claims within 12 months of the storm event.",
    },
    {
      question: "Can you work on a brick home with built-in box gutters in downtown Belleville?",
      answer:
        "Yes — built-in box gutter work, parapet flashings, and 19th-century brick-stock roofing are regular work in our Belleville portfolio. These projects are different in scope and pricing from suburban asphalt work; we'll spell out the specifics in writing on your estimate.",
    },
    {
      question: "Do I need historic preservation approval for a roof replacement in downtown Belleville?",
      answer:
        "Possibly. Properties contributing to the West Main Street historic district or Old Belleville historic district can require Historic Preservation Commission review for visible material or color changes. We'll determine which review applies during the estimate and prepare any submission package needed.",
    },
    {
      question: "What's the difference between filing a tornado claim and a hail claim?",
      answer:
        "Both are weather-driven claims, but the documentation focus differs. Tornado damage often includes structural and wind-uplift evidence beyond shingle surface; hail damage focuses on impact bruising and granule loss patterns. We document each appropriately. The claim window (typically 12 months) applies to both.",
    },
    {
      question: "How quickly can you respond to an active leak after a Belleville storm?",
      answer:
        "Same-day tarp service during business hours. After major regional events, response times stretch as we triage across the Metro East — we communicate where you are in the queue and prioritize active water intrusion above non-emergency damage.",
    },
    {
      question: "Are you licensed in Illinois separately from Missouri?",
      answer:
        "Yes — All Weather Roofing Systems holds an active Illinois Department of Financial and Professional Regulation roofing license. Missouri-only licensure doesn't cover Illinois work; always verify Illinois licensure separately when comparing contractors. We can email our IDFPR license number before signing.",
    },
    {
      question: "What landmarks orient most Belleville addresses?",
      answer:
        "Useful reference points: West Main Street historic district, the Belleville Public Square, Hofbräuhaus Belleville, and Scott Air Force Base (just outside the city). I-64, Highway 159, and Highway 161 are the main orientation roads.",
    },
  ],

  citySpecificTestimonialIds: [],
  nearbyCities: r.nearbyCities,
  relatedServices: ["storm-damage-roofing", "emergency-roofing", "roof-repair", "roofing-inspection"],
};
