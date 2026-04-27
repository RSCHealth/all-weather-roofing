import type { CityContent, CityResearch } from "@/types/city";
import { BUSINESS } from "@/lib/constants";
import research from "@/content/cities-research/kirkwood-mo.json";

const r = research as CityResearch;

export const kirkwoodMo: CityContent = {
  slug: "kirkwood-mo",
  nameDisplay: "Kirkwood, MO",
  ctaClass: "B",
  research: r,

  seo: {
    title: "Roofing in Kirkwood, MO | Victorian & Craftsman Period-Appropriate Specialists",
    description:
      "Period-appropriate roofing for Kirkwood's Victorian and Craftsman homes. Walkable historic district experience. Call (314) 834-6556.",
    canonical: `${BUSINESS.url}/service-areas/kirkwood-mo`,
  },

  hero: {
    h1: "Roofing in Kirkwood, MO",
    eyebrow: "Service area: Kirkwood",
    subhead:
      "Victorian, Craftsman, and Foursquare homes anchoring a walkable historic community. Roofing here means period-appropriate materials, tight-block logistics, and respect for an old neighborhood.",
    trustBullets: ["Period-appropriate materials", "Walkable-block logistics", "Decking-aware tear-off"],
  },

  directAnswer:
    "Kirkwood is one of the St. Louis metro's most distinctive historic communities — a walkable downtown anchored by the 19th-century Kirkwood Train Station, surrounded by streets of Victorian, Craftsman, and Foursquare homes that have been continuously lived in since the late 1800s. Roofing here has to respect that — period-appropriate material choices, dust and noise mitigation on dense walkable blocks, and decking-aware tear-off planning for old plank decking.",

  sections: [
    {
      id: "victorian-craftsman",
      type: "prose",
      h2: "Kirkwood's Victorian and Craftsman homes: a roofing overview",
      directAnswer:
        "Significant Queen Anne Victorian, Craftsman bungalow, and American Foursquare stock dating to the 1880s–1930s sits in continuously-occupied blocks across Kirkwood. Material recommendations for these homes are driven by era and style appropriateness more than by raw cost.",
      content: {
        type: "prose",
        paragraphs: [
          "A Queen Anne Victorian doesn't take a 3-tab asphalt shingle — the profile is wrong, the era is wrong, and the home looks visibly off afterward. A Craftsman bungalow looks unbalanced with the wrong shingle profile too. Modern designer asphalt lines, synthetic slate, and where budget allows real slate or cedar shake are common recommendations on Kirkwood's better historic blocks.",
          "Period-appropriate material choice meaningfully affects both the home's curb appeal and its resale value among preservation-minded buyers. We bring sample boards to every Kirkwood estimate and walk through what looks correct on the home alongside what fits the budget.",
        ],
      },
    },
    {
      id: "period-materials",
      type: "architectural",
      h2: "Period-appropriate roofing materials",
      content: {
        type: "architectural",
        eras: r.housingStock.dominantEras,
        styles: r.housingStock.dominantStyles,
        paragraph:
          "Designer asphalt lines from major manufacturers now offer profiles specifically designed to mimic slate and historic shingle silhouettes — these are common on Kirkwood Victorians and Craftsmans where real slate is out of budget. Synthetic slate is the next step up. Real slate and cedar shake are options on premium budgets, with material-specific maintenance considerations.",
      },
    },
    {
      id: "walkable-logistics",
      type: "regulatory",
      h2: "Working around Kirkwood's walkable historic district",
      directAnswer:
        "Tight downtown blocks limit dumpster placement, equipment staging, and crew flow. Dust and noise mitigation matter more in dense walkable Kirkwood than in half-acre suburban subdivisions. Project planning has to factor in the neighborhood, not just the roof.",
      content: {
        type: "regulatory",
        permitOffice: r.regulatoryContext.permitOffice,
        historicDistrictName: r.regulatoryContext.historicDistrictName,
        notableCodes: r.regulatoryContext.notableCodes,
        paragraph:
          "We coordinate dumpster placement with neighbor driveways, schedule deliveries off-peak when streets are quieter, and use compact equipment where space is constrained. On dense walkable blocks we sometimes stage smaller dumpsters with more frequent pickup rather than one large unit.",
      },
    },
    {
      id: "neighborhoods",
      type: "neighborhoods",
      h2: "Neighborhoods and architectural pockets we serve",
      content: {
        type: "neighborhoods",
        items: r.neighborhoods.map((n) => ({ name: n.name, profile: n.profile })),
      },
    },
    {
      id: "older-home-process",
      type: "process",
      h2: "Our process for older Kirkwood homes",
      content: {
        type: "process",
        steps: [
          {
            title: "Decking-aware estimate",
            description:
              "Older Kirkwood homes often have original 1x6 plank decking that hides moisture damage. We specify a clear per-sheet replacement allowance.",
          },
          {
            title: "Period-material sample review",
            description:
              "We bring sample boards to the estimate so you can see how each option looks on your specific home.",
          },
          {
            title: "Tight-block logistics plan",
            description:
              "Dumpster placement, delivery timing, and equipment staging coordinated for the specific block conditions.",
          },
          {
            title: "Dust + noise mitigation",
            description:
              "Tarps over open windows, scheduled break windows during the noisiest tear-off phases, magnetic-sweep cleanup at end of every day.",
          },
          {
            title: "Final acceptance walkthrough",
            description:
              "On older homes, we walk the property with you at completion to confirm everything from gutter alignment to finish detailing.",
          },
        ],
      },
    },
  ],

  faqs: [
    {
      question:
        "What roofing material looks correct on a Kirkwood Victorian?",
      answer:
        "Designer asphalt with a slate-mimicking profile is the most common choice — looks correct on the home, available in colors that match the era, accessible price point. Synthetic slate is the step up; real slate is the premium option. 3-tab asphalt is almost always wrong on a Victorian — the profile flattens the home's character.",
    },
    {
      question:
        "Will tear-off on my older Kirkwood home reveal decking problems?",
      answer:
        "Often, yes. Original 1x6 plank decking from the 1880s–1930s often hides moisture damage that doesn't show until shingles come off. We specify a per-sheet replacement allowance ($80–$140 per 4x8 sheet) on every estimate so the cost of decking work is visible up-front rather than a surprise.",
    },
    {
      question:
        "How do you handle dumpster placement on a tight Kirkwood downtown block?",
      answer:
        "Carefully. We coordinate placement with neighbor driveways, schedule deliveries off-peak, and use compact equipment where space is tight. On especially dense blocks we stage smaller dumpsters with more frequent pickup rather than one large unit. We confirm placement the morning of delivery, not the afternoon.",
    },
    {
      question:
        "Are there historic preservation requirements for roofing in Kirkwood?",
      answer:
        "Some Kirkwood properties have historic-context considerations on visible exterior changes. We'll determine whether your specific property triggers any review during the estimate. The City of Kirkwood Building Department handles permitting for in-city addresses.",
    },
    {
      question:
        "Can you install cedar shake on a Craftsman bungalow?",
      answer:
        "Yes — cedar shake is era-appropriate for Craftsman and some Victorian inventory in Kirkwood. Material-specific maintenance and ventilation considerations apply; cedar performs differently than asphalt and needs proper roof-system design to last. We walk through the trade-offs at estimate.",
    },
    {
      question:
        "What landmarks orient Kirkwood addresses?",
      answer:
        "Useful reference points: the Kirkwood Train Station (a 19th-century landmark in downtown), Kirkwood Park, The Magic House children's museum, Kirkwood High School, and the Webster Groves border. I-44 runs along the southern boundary; Lindbergh Boulevard and Watson Road (Highway 366) are major north-south and east-west arteries.",
    },
    {
      question:
        "Is roofing a Kirkwood home more expensive than a same-size suburban home?",
      answer:
        "Often slightly more. Period-appropriate materials cost more than basic 3-tab asphalt; tight-block logistics add modest labor cost; older decking sometimes needs partial replacement. The trade-off is a roof that looks correct on the home, performs as long as standard materials, and supports rather than detracts from resale value.",
    },
  ],

  citySpecificTestimonialIds: [],
  nearbyCities: r.nearbyCities,
  relatedServices: ["residential-roofing", "roof-replacement", "roofing-inspection", "roof-repair"],
};
