import type { CityContent, CityResearch } from "@/types/city";
import { BUSINESS } from "@/lib/constants";
import research from "@/content/cities-research/creve-coeur-mo.json";

const r = research as CityResearch;

export const creveCoeurMo: CityContent = {
  slug: "creve-coeur-mo",
  nameDisplay: "Creve Coeur, MO",
  ctaClass: "B",
  research: r,

  seo: {
    title: "Roofing in Creve Coeur, MO | Tree-Canopy & Premium Home Specialists",
    description:
      "Roofing in Creve Coeur — branch-strike repairs, gutter protection, premium materials. Mature canopy expertise. Call (314) 834-6556.",
    canonical: `${BUSINESS.url}/service-areas/creve-coeur-mo`,
  },

  hero: {
    h1: "Roofing in Creve Coeur, MO",
    eyebrow: "Service area: Creve Coeur",
    subhead:
      "Mature oaks, premium homes, and recurring branch-strike repairs. Roofing in Creve Coeur is partly damage-response work and partly ongoing canopy management.",
    trustBullets: ["Branch-strike specialists", "Premium-material trained", "Tree-protected logistics"],
  },

  directAnswer:
    "If there's one defining roofing reality in Creve Coeur, it's the tree canopy. Mature oaks, maples, and sycamores tower over many of the city's premium streets — beautiful for the neighborhood, but a recurring source of branch-strike damage, debris-filled gutters, and limited from-the-ground damage assessment under dense shade. Roofing here is partly damage response, partly ongoing maintenance, with premium materials common.",

  sections: [
    {
      id: "tree-canopy",
      type: "prose",
      h2: "Creve Coeur's tree canopy and what it means for your roof",
      directAnswer:
        "Wind events translate to branch strikes. Ice storms bring full limbs onto roofs. Gutters fill with leaves and seed pods that hold moisture against the roof edge for weeks. The canopy that defines Creve Coeur's character also shapes its roofing-service profile.",
      content: {
        type: "prose",
        paragraphs: [
          "Most Creve Coeur premium streets — particularly around Creve Coeur Lake Memorial Park, along Conway Road, and on the larger-lot Schuetz Road area — have mature 60+ year oaks and maples directly overhanging roof lines. That canopy lowers cooling costs, increases property value, and provides the neighborhood's character. It also produces a steady stream of roof maintenance work.",
          "Damage assessment from the ground is genuinely harder under dense canopy than in open suburban subdivisions — what looks fine from the street can have significant hail or branch damage on the upper slopes. Professional inspection (especially post-storm) is more valuable here than in open-canopy neighborhoods.",
        ],
      },
    },
    {
      id: "tree-damage",
      type: "bullets",
      h2: "Common tree-related roof damage in Creve Coeur",
      directAnswer:
        "Five recurring tree-canopy issues we see in Creve Coeur. Most are addressable with focused repair if caught early; the worst can require partial decking replacement and structural assessment.",
      content: {
        type: "bullets",
        items: [
          "Branch-strike punctures — falling limbs penetrating shingle and decking. Common after wind and ice events.",
          "Gutter debris accumulation — leaves, seed pods, and twigs holding water against the roof edge for weeks at a time.",
          "Moss and algae growth — dense canopy creates shade that promotes growth on north-facing slopes; specialized cleaning services available.",
          "Underlying decking moisture — long-term canopy shade can leave roof moisture longer than open-canopy roofs.",
          "Sap and stain damage — sticky sap from overhanging trees can damage shingle granules over time.",
        ],
      },
    },
    {
      id: "lake-and-wooded",
      type: "prose",
      h2: "Roofing near Creve Coeur Lake and heavily-wooded lots",
      directAnswer:
        "Premium streets near Creve Coeur Lake Memorial Park have heavily-wooded large lots where equipment staging, dumpster placement, and tree protection all need careful planning. The roofing scope is also frequently larger — premium materials, larger square footage, complex geometry.",
      content: {
        type: "prose",
        paragraphs: [
          "Working near Creve Coeur Lake means accommodating tree-protection considerations on most large-lot properties. We coordinate dumpster placement to avoid drip-line damage to specimen trees, stage materials on hardscape rather than turf, and time crew flow to minimize impact on landscaped areas.",
          "Premium materials — slate, designer asphalt, copper accents — are common on Creve Coeur's better blocks. We bring samples to the estimate and walk through trade-offs between material lifespan, hail performance, and aesthetic fit with the home and surrounding canopy.",
        ],
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
      id: "gutter-protection",
      type: "prose",
      h2: "Gutter protection and debris management",
      directAnswer:
        "On heavily-canopied properties, gutter protection isn't optional — it's roof maintenance. Standard mesh and reverse-curve guards each have trade-offs; we recommend per-property based on canopy density and gutter access.",
      content: {
        type: "prose",
        paragraphs: [
          "Gutter debris on Creve Coeur properties can plug downspouts in a single fall season. Water that can't flow off the roof edge backs up under the shingles, accelerating decking damage and creating ice-dam risk in winter. We install gutter protection systems alongside roofing projects when canopy density warrants — usually it does.",
          "For homeowners not ready for gutter protection, regular cleaning (typically twice per year on heavily-canopied properties) is the alternative. We can recommend reliable cleaning services or include gutter cleaning as part of routine maintenance scope.",
        ],
      },
    },
  ],

  faqs: [
    {
      question:
        "How often do branch strikes from Creve Coeur's canopy actually damage roofs?",
      answer:
        "Frequently enough that branch-strike repair is recurring work for us in Creve Coeur — particularly after wind and ice events. Most strikes produce repairable damage (shingle and underlying decking patches) rather than full structural replacement, but assessment after any major event is worthwhile.",
    },
    {
      question: "Should I install gutter protection on a heavily-canopied Creve Coeur home?",
      answer:
        "If your gutters fill with debris between cleanings, yes — gutter protection is more cost-effective than the alternative (water-damaged decking and roof edge over time). Specific product recommendations vary by canopy type and gutter access; we evaluate per-property and recommend during the estimate.",
    },
    {
      question:
        "Can you assess damage I can't see from the ground because of the trees?",
      answer:
        "Yes — that's exactly what professional inspection is for. We climb the roof when conditions allow, document with photos, and report what we find. Under dense Creve Coeur canopy, ground-level visibility is limited; on-roof inspection is the only way to catch hail, branch-strike, or wind damage that's been hidden from view.",
    },
    {
      question:
        "What materials work well on premium Creve Coeur homes with heavy tree canopy?",
      answer:
        "Designer asphalt and synthetic slate both perform well under canopy and are common on Creve Coeur's better blocks. Standing-seam metal sheds debris cleanly. Real slate and cedar shake are options on premium budgets, with caveats — cedar shake under heavy canopy needs specific maintenance to prevent moss and algae growth.",
    },
    {
      question:
        "Will tree-protection requirements affect my project timeline?",
      answer:
        "Sometimes. Tree-protection considerations on large-lot properties can constrain dumpster placement and equipment staging, occasionally requiring smaller or differently-staged equipment. We plan around tree-protection at estimate so the project schedule reflects the constraints rather than fighting them.",
    },
    {
      question:
        "What landmarks help me orient my Creve Coeur address?",
      answer:
        "Useful reference points: Creve Coeur Lake Memorial Park, Millennium Park, the Olive Boulevard commercial corridor, and the Conway Road residential spine. I-270 and I-64/Highway 40 are the main highways; Highway 141 runs through the western portion of the city.",
    },
  ],

  citySpecificTestimonialIds: [],
  nearbyCities: r.nearbyCities,
  relatedServices: ["roof-repair", "storm-damage-roofing", "roofing-inspection", "residential-roofing"],
};
