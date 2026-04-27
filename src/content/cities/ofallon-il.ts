import type { CityContent, CityResearch } from "@/types/city";
import { BUSINESS } from "@/lib/constants";
import research from "@/content/cities-research/ofallon-il.json";

const r = research as CityResearch;

export const ofallonIl: CityContent = {
  slug: "ofallon-il",
  nameDisplay: "O'Fallon, IL",
  ctaClass: "B",
  research: r,

  seo: {
    title: "Roofing in O'Fallon, IL | Scott AFB Families & Cross-State Insurance",
    description:
      "Roofing for O'Fallon, IL — Scott AFB-adjacent housing, Illinois insurance claim experience, IDFPR-licensed crews. Call (314) 834-6556.",
    canonical: `${BUSINESS.url}/service-areas/ofallon-il`,
  },

  hero: {
    h1: "Roofing in O'Fallon, IL",
    eyebrow: "Service area: O'Fallon (Illinois)",
    subhead:
      "Scott AFB families on PCS timelines, Illinois-side insurance rules, and the Metro East housing mix — we work both states with active IDFPR licensure.",
    trustBullets: [
      "IDFPR-licensed (Illinois)",
      "PCS-timeline experienced",
      "Cross-state insurance",
    ],
    imagePath: "/images/city-suburban-home.jpg",
    imageAlt: "Suburban home representative of O'Fallon, IL housing stock.",
  },

  directAnswer:
    "O'Fallon, Illinois sits adjacent to Scott Air Force Base, and that proximity shapes a meaningful share of the roofing work in the city — military families on PCS timelines, fast pre-sale inspections, and Illinois-specific insurance claim handling. Roofers serving O'Fallon IL need active Illinois IDFPR licensure, comfort with cross-state claim processes, and the ability to move quickly when a sale closing depends on a roof being addressed.",

  sections: [
    {
      id: "scott-afb-context",
      type: "prose",
      h2: "Roofing in O'Fallon, Illinois — including Scott AFB families",
      directAnswer:
        "Scott Air Force Base adjacency creates a unique demand pattern: PCS (Permanent Change of Station) cycles compress real estate timelines for military families, and roof issues identified during a buyer's inspection can derail an otherwise on-time sale. Fast inspections, clear documentation, and rapid repair scheduling are essential here.",
      content: {
        type: "prose",
        paragraphs: [
          "When a military family has 60 days to sell before reporting to a new base, every step in the home-sale process has to fit a tight calendar. We've worked with Scott AFB families enough to understand the rhythm: pre-listing inspections that catch issues before the buyer's inspector finds them, fast-turnaround written reports for negotiations, and repair scheduling that doesn't slip the closing date.",
          "Beyond Scott AFB-related work, O'Fallon IL is a fast-growing Metro East suburb with an 1980s–2010s subdivision profile plus an older downtown core. Routine roofing work — replacement, repair, storm response — is the bulk of what we do here.",
        ],
      },
    },
    {
      id: "cross-state-insurance",
      type: "prose",
      h2: "Cross-state insurance claims: Missouri vs. Illinois",
      directAnswer:
        "Insurance claim handling in Illinois follows Illinois rules — adjusting timelines, scope-of-loss conventions, and certain deductible structures can differ slightly from Missouri-side claims. Same national carriers; different state-level frameworks.",
      content: {
        type: "prose",
        paragraphs: [
          "Most national carriers (State Farm, Allstate, Liberty Mutual, etc.) write policies on both sides of the river, and adjusters often work both states. The differences are at the state-regulation level: Illinois Department of Insurance complaint processes differ from Missouri's, certain mandatory rebuild scope rules vary, and timelines for claim acknowledgment and payment have different statutory windows.",
          "We meet adjusters on either side of the river routinely. For homeowners with active claims, see our storm-damage page for the full claim process and what to expect from an adjuster meeting.",
        ],
      },
    },
    {
      id: "housing-stock",
      type: "architectural",
      h2: "Common O'Fallon IL housing stock and styles",
      content: {
        type: "architectural",
        eras: r.housingStock.dominantEras,
        styles: r.housingStock.dominantStyles,
        paragraph:
          "Most O'Fallon, IL housing was built between 1980 and today, in subdivision development around the city's growth corridors. Production-builder colonial, Craftsman, and ranch styles dominate. Older streets in the downtown core have a smaller stock of pre-1970 frame and brick housing.",
      },
    },
    {
      id: "metro-east-permitting",
      type: "regulatory",
      h2: "What's different about Metro East permitting",
      directAnswer:
        "Illinois roofing licensure is required separately from any Missouri credential — contractors must hold an active IDFPR (Illinois Department of Financial and Professional Regulation) roofing license. Permit offices vary by jurisdiction: City of O'Fallon for in-city addresses, St. Clair County for unincorporated.",
      content: {
        type: "regulatory",
        permitOffice: r.regulatoryContext.permitOffice,
        notableCodes: r.regulatoryContext.notableCodes,
        paragraph:
          "Always verify a contractor's Illinois licensure before signing — Missouri-only licensing doesn't cover Illinois work, and a Missouri-licensed contractor without IDFPR licensure cannot legally roof your home in Illinois.",
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
  ],

  faqs: [
    {
      question: "Are you licensed to do roofing work in Illinois?",
      answer:
        "Yes — All Weather Roofing Systems holds an active Illinois Department of Financial and Professional Regulation (IDFPR) roofing license in addition to our Missouri licensure. We can email the license number directly before any work begins. Always verify Illinois licensure separately when comparing contractors — Missouri-only licensure doesn't cover Illinois jobs.",
    },
    {
      question: "Can you do a fast pre-sale roof inspection for a Scott AFB PCS timeline?",
      answer:
        "Yes — pre-sale inspections are a regular part of our O'Fallon, IL work. Standard turnaround is 3–5 business days; we can sometimes compress to 24–72 hours when a closing date is at stake. Written photo report delivered in formats that work with real estate transactions.",
    },
    {
      question: "How does an Illinois insurance claim differ from a Missouri claim?",
      answer:
        "Same national carriers in most cases, but state-level rules differ — adjusting timelines, certain mandatory scope rules, and the complaint/dispute process all run through the Illinois Department of Insurance rather than Missouri DOI. The on-site adjuster process feels familiar; the back-end framework is state-specific.",
    },
    {
      question: "Do you work with VA loan-related roofing requirements?",
      answer:
        "We can. VA-compliant roof certifications and required-repair scope reports come up regularly with Scott AFB-area sales. We document inspection findings to standards that work with VA appraiser feedback. Confirm specific VA requirements with your lender — we'll match the format they need.",
    },
    {
      question: "What landmarks help me describe my O'Fallon, IL location?",
      answer:
        "Useful reference points: Scott Air Force Base (adjacent on the south side), the I-64 corridor, US Highway 50, Family Sports Park, and the downtown O'Fallon historic district. The Belleville border and the Shiloh boundary also orient many addresses.",
    },
    {
      question: "Do you serve unincorporated areas around O'Fallon?",
      answer:
        "Yes — addresses in unincorporated St. Clair County with O'Fallon mailing routes are included in our service area. Permitting goes through St. Clair County rather than the City of O'Fallon for those addresses; we handle either.",
    },
  ],

  citySpecificTestimonialIds: [],
  nearbyCities: r.nearbyCities,
  relatedServices: ["roofing-inspection", "residential-roofing", "storm-damage-roofing", "roof-repair"],
};
