import type { CityContent, CityResearch } from "@/types/city";
import { BUSINESS } from "@/lib/constants";
import research from "@/content/cities-research/edwardsville-il.json";

const r = research as CityResearch;

export const edwardsvilleIl: CityContent = {
  slug: "edwardsville-il",
  nameDisplay: "Edwardsville, IL",
  ctaClass: "B",
  research: r,

  seo: {
    title: "Roofing in Edwardsville, IL | Historic, Rental & New Construction",
    description:
      "Roofing in Edwardsville, IL — Leclaire historic district, SIUE-area rentals, Glen Carbon corridor new builds. IDFPR-licensed. (314) 834-6556.",
    canonical: `${BUSINESS.url}/service-areas/edwardsville-il`,
  },

  hero: {
    h1: "Roofing in Edwardsville, IL",
    eyebrow: "Service area: Edwardsville",
    subhead:
      "Three roofing realities in one city: nationally-registered historic homes, SIUE-area rental property, and Glen Carbon-corridor new construction. We work all three.",
    trustBullets: ["Three-audience experienced", "IDFPR-licensed", "Madison County"],
  },

  directAnswer:
    "Edwardsville is one of Illinois's oldest cities — chartered in 1818 — and that history shows in the housing. The Leclaire Historic District and University District hold significant pre-1930 stock, the SIUE area concentrates rental property where landlords prioritize functional roofing on tight budgets, and the Glen Carbon corridor brings 1990s–2020s subdivision growth and HOA approvals. Roofing in Edwardsville means reading which of those three audiences each project belongs to.",

  sections: [
    {
      id: "three-audiences",
      type: "prose",
      h2: "Roofing in Edwardsville: historic core, rental properties, new builds",
      directAnswer:
        "Three distinct audiences share the Edwardsville zip code. Historic-property owners want material choices that respect the home's era; SIUE-area landlords prioritize function over premium; new-construction homeowners work through HOA approvals on the south and east sides.",
      content: {
        type: "prose",
        paragraphs: [
          "The conversation we have at the estimate changes meaningfully based on which audience the homeowner falls into. A 1900 University District Foursquare gets a designer-asphalt or synthetic-slate recommendation, with conversation about era-appropriate material profile. A SIUE-area rental gets architectural asphalt with a focus on durability per dollar and landlord disclosure obligations. A 2018 Glen Carbon-corridor home gets material chosen from the HOA-approved palette and an approval-package timeline built into the schedule.",
          "We don't bring the same recommendations to all three. Edwardsville's housing reality requires a roofer who's read the situation correctly before opening a sample case.",
        ],
      },
    },
    {
      id: "university-district",
      type: "architectural",
      h2: "University District properties — what to know",
      directAnswer:
        "The University District near downtown Edwardsville holds significant 1880s–1930s housing including American Foursquare, Queen Anne, and early Craftsman. Many are owner-occupied; some are rental conversions. Period-appropriate material choice meaningfully affects resale value.",
      content: {
        type: "architectural",
        eras: ["1880s–1930s historic core", "Pre-WWII established blocks"],
        styles: ["American Foursquare", "Queen Anne Victorian", "Early Craftsman"],
        paragraph:
          "On a 1905 Foursquare, a flat-profile designer asphalt or synthetic slate looks correct on the home and supports resale value among preservation-minded buyers. Cheaper material choices may save short-term cost but leave value on the table at sale.",
      },
    },
    {
      id: "rental-properties",
      type: "prose",
      h2: "Rental property roofing: landlord considerations",
      directAnswer:
        "SIUE-area rental property roofing prioritizes function-per-dollar and minimizes interior disruption — but disclosure obligations and tenant-impact considerations don't disappear because the owner doesn't live in the building.",
      content: {
        type: "prose",
        paragraphs: [
          "Landlord-owned roofs we work on regularly are 1900–1960 frame stock plus some 1970s–1990s small-multifamily. The right material is usually mid-line architectural asphalt — not premium, not 3-tab — that balances 25-year lifespan with reasonable up-front cost. Tenants are notified of project timing per landlord-tenant standards; access to interior areas (attic, ceiling) is coordinated with the property owner.",
          "We provide invoicing and warranty documentation in formats that work with property-management systems, including rent-roll tax records and capital expenditure documentation.",
        ],
      },
    },
    {
      id: "neighborhoods",
      type: "neighborhoods",
      h2: "Neighborhoods and the Glen Carbon corridor",
      content: {
        type: "neighborhoods",
        items: r.neighborhoods.map((n) => ({ name: n.name, profile: n.profile })),
      },
    },
    {
      id: "permits",
      type: "regulatory",
      h2: "Permits and code in Madison County",
      content: {
        type: "regulatory",
        permitOffice: r.regulatoryContext.permitOffice,
        historicDistrictName: r.regulatoryContext.historicDistrictName,
        notableCodes: r.regulatoryContext.notableCodes,
        paragraph:
          "City of Edwardsville handles permits for in-city addresses; Madison County handles unincorporated. The Leclaire Historic District has preservation considerations on visible exterior changes for contributing properties. Glen Carbon corridor subdivisions add HOA approval cycles on top of municipal permitting.",
      },
    },
  ],

  faqs: [
    {
      question:
        "Do you do roofing for SIUE-area rental properties in Edwardsville?",
      answer:
        "Yes — rental property roofing is regular work for us in Edwardsville. We coordinate timing around tenant impact, provide invoicing in formats that work with property-management systems, and deliver materials and warranties documented for capital-expenditure records. Most landlord-owned projects use mid-line architectural asphalt for 25-year lifespan at reasonable cost.",
    },
    {
      question:
        "Is the Leclaire Historic District subject to roofing approval requirements?",
      answer:
        "Properties contributing to the Leclaire Historic District (a National Register-listed district) can be subject to historic preservation considerations on visible exterior changes. We'll determine specific review requirements during the estimate based on your property's historic-context status.",
    },
    {
      question:
        "What about HOA approvals on Glen Carbon corridor subdivisions?",
      answer:
        "Most Glen Carbon-area subdivisions and the south Edwardsville growth corridor run HOA architectural review for material and color changes. Approval cycles typically run 1–3 weeks. We prepare submission packages — manufacturer specs, color samples, photos — in the format the ARB expects.",
    },
    {
      question:
        "What roofing materials look right on a Foursquare or Craftsman in the University District?",
      answer:
        "Designer asphalt with a period-appropriate profile is the most common choice — looks correct on the home, available in colors that match the era, accessible price point. Synthetic slate is a step up for owners who want a more historically faithful look. Real slate and cedar shake are options on premium budgets.",
    },
    {
      question:
        "Are you licensed for Illinois roofing work — separately from Missouri?",
      answer:
        "Yes — All Weather Roofing Systems holds active Illinois IDFPR roofing licensure in addition to our Missouri credentials. Always verify Illinois licensure separately when comparing contractors; Missouri-only licenses don't cover Illinois work.",
    },
    {
      question: "What landmarks orient most Edwardsville addresses?",
      answer:
        "Useful reference points: Southern Illinois University Edwardsville (SIUE), the Leclaire Historic District, the Watershed Nature Center, the Edwardsville Children's Museum, and the I-55 / I-270 interchange. Highway 159 and Highway 143 orient most non-interstate addresses.",
    },
  ],

  citySpecificTestimonialIds: [],
  nearbyCities: r.nearbyCities,
  relatedServices: ["residential-roofing", "roof-replacement", "roofing-inspection", "roof-repair"],
};
