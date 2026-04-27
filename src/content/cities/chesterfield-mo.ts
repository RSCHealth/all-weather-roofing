import type { CityContent, CityResearch } from "@/types/city";
import { BUSINESS } from "@/lib/constants";
import research from "@/content/cities-research/chesterfield-mo.json";

const r = research as CityResearch;

export const chesterfieldMo: CityContent = {
  slug: "chesterfield-mo",
  nameDisplay: "Chesterfield, MO",
  ctaClass: "B",
  research: r,

  seo: {
    title: "Roofing in Chesterfield, MO | Slate, Tile, Copper & Designer Specialists",
    description:
      "Premium roofing in Chesterfield — slate, clay tile, copper, designer asphalt. ARB-experienced. West County luxury. Call (314) 834-6556.",
    canonical: `${BUSINESS.url}/service-areas/chesterfield-mo`,
  },

  hero: {
    h1: "Roofing in Chesterfield, MO",
    eyebrow: "Service area: Chesterfield",
    subhead:
      "West County's premium roofing market — slate, clay tile, copper accents, and designer asphalt as the baseline rather than the upgrade. ARB-experienced.",
    trustBullets: ["Premium-material installer", "ARB-experienced", "West County focused"],
    imagePath: "/images/city-luxury-home.jpg",
    imageAlt: "Premium luxury home representative of Chesterfield, MO architecture.",
  },

  directAnswer:
    "Chesterfield is one of West County's premium roofing markets — slate, clay tile, copper, and designer asphalt are common materials here, and the average Chesterfield roof costs significantly more than the metro median because the houses are larger, the materials are higher-end, and architectural review boards in the better subdivisions enforce a level of finish quality you don't see on standard production housing.",

  sections: [
    {
      id: "luxury-roofing",
      type: "prose",
      h2: "Luxury roofing in Chesterfield: what sets it apart",
      directAnswer:
        "Three things distinguish Chesterfield from the West County average: premium materials as the baseline rather than the upgrade, larger square footage roofs, and ARB-governed subdivisions where finish quality is reviewed in writing before final acceptance.",
      content: {
        type: "prose",
        paragraphs: [
          "Roofers working Chesterfield need installer experience on premium materials specifically — slate and clay tile work isn't the same as architectural asphalt, and a contractor who treats them the same will produce visible problems on a roof that's supposed to last 50+ years. Standing-seam metal, copper accents on bay roofs and dormers, and lifetime-warranty designer asphalt are all common scope.",
          "Larger square footage roofs (3,500+ sq ft on many Chesterfield homes vs. 2,000–2,500 metro median) increase materials, labor, and dumpster logistics proportionally. Project timelines on premium materials run longer; manufacturer lead times on slate, tile, and copper can extend 4–8 weeks beyond standard architectural asphalt.",
        ],
      },
    },
    {
      id: "premium-materials",
      type: "table",
      h2: "Premium materials we install in Chesterfield",
      directAnswer:
        "Pricing varies with project size, material grade, and access. Below are typical installed price ranges for premium materials on Chesterfield-scale homes (3,000–4,500 sq ft) — call for a specific written estimate.",
      content: {
        type: "table",
        data: {
          caption: "Premium roofing materials and Chesterfield installed prices",
          headers: ["Material", "Per sq ft installed", "Typical Chesterfield home"],
          rows: [
            ["Designer / luxury asphalt", "$7.00 – $10.50", "$22,000 – $42,000"],
            ["Standing-seam metal", "$10.00 – $17.00", "$32,000 – $68,000"],
            ["Synthetic slate / composite", "$11.00 – $17.00", "$35,000 – $68,000"],
            ["Real slate", "$18.00 – $35.00", "$58,000 – $140,000"],
            ["Clay tile", "$15.00 – $25.00", "$48,000 – $100,000"],
            ["Copper accents (bay, dormer, cap)", "Project-specific", "Add-on cost"],
          ],
        },
      },
    },
    {
      id: "arb-process",
      type: "regulatory",
      h2: "Working with Chesterfield HOAs and architectural review boards",
      directAnswer:
        "Most premium Chesterfield subdivisions run architectural review boards that approve material, color, and finish details before exterior work begins. ARB cycles add 1–3 weeks to most projects. Substitutions on slate, tile, or copper installations may require additional review.",
      content: {
        type: "regulatory",
        permitOffice: r.regulatoryContext.permitOffice,
        notableCodes: r.regulatoryContext.notableCodes,
        paragraph:
          "We prepare ARB submission packages — manufacturer specs, color samples, photographs of the existing home, written context — in the format the architectural review board expects. Submitting a complete package the first time is the difference between a 1-week and a 4-week approval cycle.",
      },
    },
    {
      id: "neighborhoods",
      type: "neighborhoods",
      h2: "Neighborhoods and subdivisions we serve",
      content: {
        type: "neighborhoods",
        items: r.neighborhoods.map((n) => ({ name: n.name, profile: n.profile })),
      },
    },
    {
      id: "warranty-callout",
      type: "quote",
      h2: "Warranty terms on Chesterfield installations",
      content: {
        type: "quote",
        quote:
          "Premium materials carry premium warranties. Real slate roofs are commonly warranted 75+ years. Standing-seam metal manufacturers offer 40–50 year material warranties. Our written workmanship warranty runs alongside — both transferable in most cases, both detailed line-by-line in the estimate.",
        attribution: `${BUSINESS.name}`,
      },
    },
  ],

  faqs: [
    {
      question: "Are you experienced with slate and clay tile installation in Chesterfield?",
      answer:
        "Yes — slate and clay tile installations are a regular part of our Chesterfield work. These materials require installer experience that asphalt-only contractors don't have: load assessment for the roof structure, specialized fastening, valley and ridge detailing specific to the material. We bring slate and tile portfolio examples to the estimate.",
    },
    {
      question: "How long does an HOA architectural review board take to approve material in Chesterfield?",
      answer:
        "Typically 1–3 weeks from a complete submission. Premium-subdivision ARBs that meet only monthly can stretch the cycle. Submitting a complete package — manufacturer specs, color samples, photos, written context — the first time avoids round-trip revisions that add weeks. We prepare submissions in the format your specific ARB expects.",
    },
    {
      question: "How much does a designer-asphalt replacement cost on a 3,500 sq ft Chesterfield home?",
      answer:
        "Designer-asphalt installations on Chesterfield-scale homes typically run $25,000–$40,000 for the architectural lines, more for true luxury / lifetime-warranty product. Pricing depends on pitch, complexity, decking condition, and access. Itemized written estimate available.",
    },
    {
      question: "Can you install copper accents on a Chesterfield bay or dormer?",
      answer:
        "Yes — copper accents on bay roofs, dormers, and ridge caps are common detail work in Chesterfield. We install copper as a feature element on Tudor, French Country, and Manor-style homes. Premium-pricing scope; lifespan 75+ years; we bring samples and historical-context references.",
    },
    {
      question: "Does hail damage trigger especially expensive claims on Chesterfield homes?",
      answer:
        "Yes — premium material replacement costs make hail events particularly costly in Chesterfield. Insurance scope-of-loss conversations frequently focus on whether matching slate, tile, or designer asphalt is available; if not, full-roof replacement is often required. We meet adjusters on-site and document scope appropriately for premium materials.",
    },
    {
      question: "Will Chesterfield Valley flood-zone considerations affect roofing work?",
      answer:
        "Floodplain considerations apply to portions of Chesterfield Valley, but they're typically structural / foundation-level concerns rather than roofing-specific. Roof projects proceed on standard timelines; we'll flag any unusual scope considerations during the estimate if applicable.",
    },
    {
      question: "What landmarks orient most Chesterfield addresses?",
      answer:
        "Useful reference points: Faust Park, the Chesterfield Amphitheater, the former Chesterfield Mall site, St. Luke's Hospital, and the Chesterfield Valley Athletic Complex. I-64/Highway 40, Highway 141, and Olive Boulevard (Highway 340) orient most addresses.",
    },
  ],

  citySpecificTestimonialIds: [],
  nearbyCities: r.nearbyCities,
  relatedServices: ["metal-roofing", "residential-roofing", "roof-replacement", "roofing-inspection"],
};
