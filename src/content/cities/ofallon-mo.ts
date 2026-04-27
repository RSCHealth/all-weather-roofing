import type { CityContent, CityResearch } from "@/types/city";
import { BUSINESS } from "@/lib/constants";
import research from "@/content/cities-research/ofallon-mo.json";

const r = research as CityResearch;

export const ofallonMo: CityContent = {
  slug: "ofallon-mo",
  nameDisplay: "O'Fallon, MO",
  ctaClass: "B",
  research: r,

  seo: {
    title: "Roofing in O'Fallon, MO | HOA-Compliant Subdivision Specialists",
    description:
      "Roofing for O'Fallon's HOA-governed subdivisions — WingHaven, Highway K corridor, Lake Saint Louis adjacency. Approval support included. (314) 834-6556.",
    canonical: `${BUSINESS.url}/service-areas/ofallon-mo`,
  },

  hero: {
    h1: "Roofing in O'Fallon, MO",
    eyebrow: "Service area: O'Fallon (Missouri)",
    subhead:
      "WingHaven, Highway K subdivisions, Lake Saint Louis adjacency — O'Fallon's HOA architectural review boards shape every roofing decision. We handle the approval submissions.",
    trustBullets: ["HOA approval support", "Insurance-claim experienced", "Same-week scheduling"],
    imagePath: "/images/city-suburban-home.jpg",
    imageAlt: "Suburban two-story home representative of O'Fallon, MO subdivisions.",
  },

  directAnswer:
    "O'Fallon, MO has been one of the fastest-growing cities in the St. Louis metro for two decades, and the housing reflects it: most homes were built between 1990 and today, and most are in HOA-governed subdivisions where architectural review boards approve color and material before any roof gets replaced. The single most important roofing-specific thing about O'Fallon is starting that approval process early — call us and we'll handle the submission.",

  sections: [
    {
      id: "growth-context",
      type: "prose",
      h2: "Roofing in O'Fallon: what's changed in the last 20 years",
      directAnswer:
        "Two decades of explosive growth produced a city dominated by post-1990 housing in master-planned subdivisions. Production-builder original shingles installed 15–25 years ago are now in active replacement consideration, and most projects flow through HOA architectural review boards.",
      content: {
        type: "prose",
        paragraphs: [
          "O'Fallon has roughly tripled in population since 2000, and most of that growth happened through subdivision construction rather than infill. WingHaven, the Highway K corridor, the Lake Saint Louis-adjacent communities — all of these came online over the last 20–30 years, and the original production-builder asphalt shingles are now reaching the end of their useful life.",
          "What that means practically: O'Fallon roofers see a lot of post-1995, pre-2010 housing in active replacement, and the conversation almost always includes an HOA approval step. Homeowners are sometimes caught off-guard by that — finding out at the estimate that their HOA needs to approve a shingle line is common.",
        ],
      },
    },
    {
      id: "hoa-rules",
      type: "regulatory",
      h2: "Working with O'Fallon HOAs and subdivision rules",
      directAnswer:
        "Most O'Fallon subdivisions have written architectural standards governing roofing color and material. Approval cycles run 1–3 weeks. WingHaven, for example, runs a structured architectural review process that should be initiated early in the project timeline.",
      content: {
        type: "regulatory",
        permitOffice: r.regulatoryContext.permitOffice,
        notableCodes: r.regulatoryContext.notableCodes,
        paragraph:
          "We help O'Fallon homeowners by preparing HOA submission packages in the format the architectural review board expects: manufacturer data sheets, color samples, photos of the existing home, and any context the ARB asks for. Submitting a complete package the first time can shave weeks off the approval cycle.",
      },
    },
    {
      id: "subdivision-approvals",
      type: "table",
      h2: "Color and material approvals in major O'Fallon subdivisions",
      directAnswer:
        "Approval requirements vary by HOA. Below is a general guide — verify your specific subdivision's current requirements before ordering material.",
      content: {
        type: "table",
        data: {
          caption: "HOA approval considerations across O'Fallon subdivisions",
          headers: ["Subdivision / area", "Common approval scope"],
          rows: [
            ["WingHaven", "Material, manufacturer line, color — full architectural review"],
            ["Highway K corridor (varied HOAs)", "Color and material; some allow same-line replacement without re-approval"],
            ["Lake Saint Louis-adjacent communities", "Material, color; some have premium-only material lists"],
            ["Older / non-HOA streets", "City permit only; no architectural board"],
          ],
        },
      },
    },
    {
      id: "storm-patterns",
      type: "weather-history",
      h2: "Storm patterns in O'Fallon, MO",
      directAnswer:
        "Western St. Charles County sits in the active spring hail corridor. Severe-weather events drive heavy insurance-claim work in O'Fallon every year, particularly in subdivisions where uniform shingle-line installations all show damage at once.",
      content: {
        type: "weather-history",
        entries: [
          {
            date: "Spring (recurring)",
            type: "hail",
            description:
              "Spring hail events in western St. Charles County. Specific recent dates: owner-verify.",
            roofingImplication:
              "Whole subdivisions can show simultaneous shingle damage. Insurance-claim work typically spikes in late April through June.",
          },
          {
            date: "Spring/summer (recurring)",
            type: "straight-line wind",
            description:
              "Thunderstorm wind events with periodic shingle and tree damage.",
            roofingImplication:
              "Wind damage often concentrates on the storm's leading-edge slope — checks for lifted or torn shingles after major events.",
          },
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
  ],

  faqs: [
    {
      question: "Does my O'Fallon, MO HOA need to approve my new roof?",
      answer:
        "Most O'Fallon subdivisions do require HOA architectural review for color or material changes on the roof. WingHaven, Highway K corridor communities, and Lake Saint Louis-adjacent subdivisions all run architectural-review processes. Same-line same-color replacements sometimes skip re-approval, but always check before ordering material. We handle submission packages.",
    },
    {
      question: "How long does HOA approval take in O'Fallon?",
      answer:
        "Typically 1–3 weeks from a complete submission. Rush considerations sometimes apply for active leaks. We start the submission as soon as you sign so material lead time and approval can run in parallel.",
    },
    {
      question: "Whose permit office issues O'Fallon roofing permits?",
      answer:
        "Inside city limits, the City of O'Fallon Building Division. For the small share of unincorporated St. Charles County addresses still using O'Fallon mailing addresses, the St. Charles County Building Division. We pull either, itemized on your estimate.",
    },
    {
      question: "Are most O'Fallon homes due for roof replacement now?",
      answer:
        "A meaningful share, yes. Production-builder housing built 1995–2010 used asphalt shingle systems with 25-year nominal lifespans, and St. Louis-area conditions cut a few years off most of those ratings. Plenty of original O'Fallon roofs are now in active replacement consideration whether or not a storm has accelerated the timeline.",
    },
    {
      question: "Will spring hail trigger an insurance claim on my O'Fallon roof?",
      answer:
        "Often, when hail meets your carrier's threshold. We do free post-storm inspections and tell you straight whether damage qualifies. Filing claims that don't qualify can affect your premium history, so we don't push claims unless the damage supports them.",
    },
    {
      question: "What landmarks orient most O'Fallon addresses?",
      answer:
        "Useful reference points: the Highway K commercial corridor, the WingHaven community, Ozzie Smith Sports Complex, and Lake Saint Louis (which is adjacent to but not within O'Fallon). I-64/Highway 40 and Highway K are the main orientation roads.",
    },
  ],

  citySpecificTestimonialIds: [],
  nearbyCities: r.nearbyCities,
  relatedServices: ["residential-roofing", "roof-replacement", "storm-damage-roofing", "roofing-inspection"],
};
