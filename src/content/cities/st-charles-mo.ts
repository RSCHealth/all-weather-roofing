import type { CityContent } from "@/types/city";
import { BUSINESS } from "@/lib/constants";
import research from "@/content/cities-research/st-charles-mo.json";
import type { CityResearch } from "@/types/city";

const r = research as CityResearch;

export const stCharlesMo: CityContent = {
  slug: "st-charles-mo",
  nameDisplay: "St. Charles, MO",
  ctaClass: "B",
  research: r,

  seo: {
    title: "Roofing in St. Charles, MO | Historic & New Construction Specialists",
    description:
      "Roof repair, replacement, and historic-preservation roofing in St. Charles, MO. Main Street district experience plus HOA-friendly subdivision work. (314) 834-6556.",
    canonical: `${BUSINESS.url}/service-areas/st-charles-mo`,
  },

  hero: {
    h1: "Roofing in St. Charles, MO",
    eyebrow: "Service area: St. Charles County",
    subhead:
      "From the South Main Street historic district to the HOA-governed subdivisions along Highway K, we handle the two distinct realities of roofing in St. Charles.",
    trustBullets: ["Historic-district experienced", "HOA approval support", "St. Louis–based crews"],
    imagePath: "/images/city-historic-home.jpg",
    imageAlt: "Historic American home representative of St. Charles, MO architecture.",
  },

  directAnswer:
    "Roofing in St. Charles, Missouri splits cleanly between two worlds: the pre-1900 stock along South Main Street and Frenchtown — where preservation considerations and material approvals shape every project — and the HOA-governed subdivisions along the Highway K corridor where architectural review boards approve color and material before a single shingle gets ordered. We work in both, and the conversation starts with which side of the city your home is on.",

  sections: [
    {
      id: "what-makes-st-charles-different",
      type: "prose",
      h2: "What makes roofing in St. Charles different?",
      directAnswer:
        "Two parallel housing universes share the same zip code. East-side historic stock — French Colonial, Federal, Victorian — sits inside or near a preservation overlay. West-side subdivisions are post-1990 production housing under HOA architectural review. A roofer working in St. Charles needs to read which world a project falls into and adjust the entire approach.",
      content: {
        type: "prose",
        paragraphs: [
          "Drive South Main Street and you're in 19th-century St. Charles — the city's National Register historic district where homes are evaluated for material and color appropriateness when visible exterior work is proposed. A few miles west along Highway K, you're in 21st-century St. Charles — production-builder subdivisions where the HOA architectural review board has a written palette of approved shingle lines and colors, and material substitutions need formal sign-off.",
          "The roofing recommendations, the timeline, and even the conversation with the homeowner all change between those two worlds. We start every St. Charles estimate by understanding which side of the city the home sits on and what approvals will gate the project — historic preservation, HOA, or neither.",
        ],
      },
    },
    {
      id: "historic-district-rules",
      type: "regulatory",
      h2: "Working with St. Charles's historic district",
      directAnswer:
        "Properties inside or contributing to the South Main Street historic district can be subject to Historic Preservation Commission review for visible material and color changes. Approval timelines vary; planning ahead saves weeks. Materials commonly favored on contributing properties include slate, designer asphalt mimicking historic profiles, and standing-seam metal in heritage colors.",
      content: {
        type: "regulatory",
        permitOffice: r.regulatoryContext.permitOffice,
        historicDistrictName: r.regulatoryContext.historicDistrictName,
        notableCodes: r.regulatoryContext.notableCodes,
        paragraph:
          "If your home is within or contributing to the South Main Street historic district, plan the roofing project around approval timelines, not against them. We can attend Historic Preservation Commission meetings on your behalf when needed and provide manufacturer specs, color samples, and historical-context documentation in the format the commission expects.",
      },
    },
    {
      id: "common-styles",
      type: "architectural",
      h2: "The roofing styles common to St. Charles homes",
      directAnswer:
        "St. Charles housing spans 200 years. The east-side historic core has French Colonial, Federal, and Victorian inventory; the west-side growth corridor is dominated by 1990s–2020s production housing in suburban traditional styles. Material recommendations differ dramatically between the two.",
      content: {
        type: "architectural",
        eras: r.housingStock.dominantEras,
        styles: r.housingStock.dominantStyles,
        paragraph:
          "On a Federal-era home in Frenchtown, the right answer is rarely a 3-tab asphalt shingle — designer asphalt with a historic profile, or where budget allows, real or synthetic slate, will look correct on the home and pass preservation review. On a 2008 production house off Highway K, that same designer profile may not even be in the HOA-approved palette, and architectural asphalt in an HOA-listed color is the right call.",
      },
    },
    {
      id: "approved-materials",
      type: "table",
      h2: "Materials approved for historic St. Charles properties",
      directAnswer:
        "Historic-district homes typically take materials that match the era and original specification. Below are the categories most commonly approved for visible roof replacements on contributing properties — owner-verify the specific manufacturer line and color with the Historic Preservation Commission for your property.",
      content: {
        type: "table",
        data: {
          caption: "Materials commonly approved for historic St. Charles properties",
          headers: ["Material", "Suitability", "Notes"],
          rows: [
            [
              "Real slate",
              "Excellent for Federal/Victorian properties",
              "Heaviest, premium pricing — confirms decking load capacity",
            ],
            [
              "Synthetic slate / composite",
              "Excellent visual match",
              "Lighter weight, often pre-approved for historic context",
            ],
            [
              "Designer asphalt (historic profile)",
              "Good for budget-conscious projects",
              "Manufacturer line and color must match approved palette",
            ],
            [
              "Standing-seam metal (heritage color)",
              "Era-appropriate for some Federal-style stock",
              "Color choice critical for commission review",
            ],
            [
              "Cedar shake",
              "Period-appropriate for some Victorian inventory",
              "Maintenance and ventilation requirements specific to material",
            ],
          ],
        },
      },
    },
    {
      id: "neighborhoods",
      type: "neighborhoods",
      h2: "Neighborhoods we serve in St. Charles",
      content: {
        type: "neighborhoods",
        items: r.neighborhoods.map((n) => ({ name: n.name, profile: n.profile })),
      },
    },
    {
      id: "process",
      type: "process",
      h2: "Our process for St. Charles projects",
      directAnswer:
        "Approval-aware scheduling. We identify upfront whether your project needs historic-preservation review, HOA architectural-board sign-off, both, or neither — and build that timeline into the contract before tear-off is scheduled.",
      content: {
        type: "process",
        steps: [
          {
            title: "Identify the approval path",
            description:
              "Historic preservation? HOA? Both? Neither? We figure this out at the estimate, not after.",
          },
          {
            title: "Prepare submission package",
            description:
              "Manufacturer specs, color samples, historical context, photos — formatted to what the commission or HOA expects.",
          },
          {
            title: "Schedule around the calendar",
            description:
              "Approval cycles can run 1–4+ weeks. We schedule the install to follow approval, not race it.",
          },
          {
            title: "Install with appropriate craft",
            description:
              "Historic-context detailing where applicable. Visible flashings, ridge profiles, and seam alignments treated as visible work — because they are.",
          },
        ],
      },
    },
  ],

  faqs: [
    {
      question:
        "How does roofing in the South Main Street historic district differ from a regular St. Charles roof replacement?",
      answer:
        "South Main Street properties can be subject to Historic Preservation Commission review for visible material or color changes — meaning material and color decisions need approval before the project can proceed. Standard subdivision projects don't have that overlay (though many have HOA review instead). We handle both processes; the difference is mostly timeline and material selection scope.",
    },
    {
      question: "Do most St. Charles subdivisions require HOA approval before a roof replacement?",
      answer:
        "Most post-1990 subdivisions on the west side of St. Charles have HOA architectural review boards that govern color and material changes on visible exterior work, including the roof. WingHaven, communities along Highway K, and similar developments all run on this model. Approval typically takes 1–3 weeks; we help homeowners prepare submission packages.",
    },
    {
      question: "Can you install slate or synthetic slate on a Frenchtown historic property?",
      answer:
        "Yes — both real and synthetic slate are common on St. Charles historic stock and frequently the right call for Federal-era and Victorian homes in Frenchtown and along South Main Street. Synthetic slate is lighter, often more cost-accessible, and visually faithful enough for most historic preservation review. We'll bring samples and walk you through the trade-offs.",
    },
    {
      question: "What permit office handles St. Charles roofing permits?",
      answer:
        "Inside the City of St. Charles, permits go through the City of St. Charles Planning & Building Division. Properties in unincorporated St. Charles County — fairly common on the western fringe — go through the St. Charles County Building Division. We handle the permit on your behalf either way, itemized on your estimate.",
    },
    {
      question: "Do hail and storm events drive a lot of insurance work in St. Charles?",
      answer:
        "Yes — St. Charles County sits in the broader St. Louis severe-weather corridor, and spring hail and wind events drive significant insurance-claim activity, particularly in subdivisions where uniform shingle-line installations all show damage at once. We meet adjusters on-site and document storm damage to the standards carriers expect.",
    },
    {
      question: "What landmarks help me describe my home's location when I call?",
      answer:
        "Useful reference points: First Missouri State Capitol, the Lewis & Clark Boat House, Frontier Park along the Missouri River, and the South Main Street commercial district. For west-side homes, the Highway K and Highway 364 corridors orient most addresses. Just describe what's nearby — we'll find you.",
    },
  ],

  citySpecificTestimonialIds: [],
  nearbyCities: r.nearbyCities,
  relatedServices: ["residential-roofing", "roofing-inspection", "roof-repair", "storm-damage-roofing"],
};
