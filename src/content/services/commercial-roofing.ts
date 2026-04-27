import type { ServiceContent } from "@/types/service";
import { BUSINESS } from "@/lib/constants";

export const commercialRoofing: ServiceContent = {
  slug: "commercial-roofing",
  name: "Commercial Roofing",
  ctaClass: "B",

  seo: {
    title: "Commercial Roofing in St. Louis | Flat Roof, TPO, EPDM, Metal",
    description:
      "Commercial roofing for property managers and business owners across St. Louis. Single-ply, modified bitumen, metal, restoration coatings. (314) 834-6556.",
    canonical: `${BUSINESS.url}/services/commercial-roofing`,
  },

  hero: {
    h1: "Commercial Roofing in St. Louis",
    eyebrow: "Commercial roofing",
    subhead:
      "Single-ply, modified bitumen, metal, and restoration coatings for office, retail, multi-family, and light industrial properties. We coordinate around your tenants and your insurance.",
    trustBullets: ["Insurance experienced", "Tenant-coordinated scheduling", "20-year manufacturer warranties"],
  },

  directAnswer:
    "Commercial roofing covers flat and low-slope roof systems on office, retail, multi-family, and light industrial buildings. We install and repair TPO, EPDM, PVC single-ply systems, modified bitumen, metal panels, and silicone restoration coatings — with manufacturer warranties up to 20 years and our written 2-year workmanship warranty on labor.",

  primaryKeywords: [
    "commercial roofing st louis",
    "commercial roofer st louis",
    "flat roof contractor st louis",
  ],
  secondaryKeywords: [
    "TPO roof st louis",
    "EPDM roofing",
    "modified bitumen roof",
    "commercial roof restoration coating",
  ],

  sections: [
    {
      h2: "Who is commercial roofing for?",
      directAnswer:
        "Property managers, business owners, facility directors, and multi-family asset managers. The buildings are typically flat or low-slope and the work has to coordinate around tenants, business hours, deliveries, and access requirements that residential projects don't share.",
      content: {
        type: "prose",
        paragraphs: [
          "We work on office buildings, retail centers, restaurants, multi-family residential (3+ stories), warehouses, and light industrial facilities across the St. Louis metro and Metro East. Project size ranges from a single roof-section repair on a strip-mall storefront to full-system replacement on a 50,000 sq ft warehouse.",
          "Commercial work is different from residential in three ways: scheduling has to coordinate around the building's actual operations, the systems are different (single-ply membranes, not shingles), and the warranty structure includes both manufacturer and contractor obligations that have to be properly documented for insurance and tax purposes.",
        ],
      },
    },
    {
      h2: "What commercial roofing systems do you install?",
      directAnswer:
        "TPO (thermoplastic polyolefin), EPDM (rubber), PVC single-ply, modified bitumen, standing-seam and corrugated metal, and silicone or acrylic restoration coatings for roofs that aren't quite ready for full replacement. System choice depends on roof size, slope, exposure, and budget.",
      content: {
        type: "table",
        data: {
          caption: "Commercial roofing systems we install",
          headers: ["System", "Typical lifespan", "Best for"],
          rows: [
            ["TPO single-ply", "20–25 yr", "Reflective, energy-efficient, most popular new commercial install"],
            ["EPDM (rubber)", "25–30 yr", "Durable, lower-cost, well-suited to harsh climates"],
            ["PVC single-ply", "20–30 yr", "Chemical-resistant, premium single-ply option"],
            ["Modified bitumen", "20 yr", "Multi-ply, asphalt-based, good for retrofit work"],
            ["Standing-seam metal", "40–60 yr", "Long-life, low-maintenance, taller commercial"],
            ["Silicone restoration coating", "10–15 yr (extends existing)", "Roofs not yet ready for full replacement"],
          ],
        },
      },
    },
    {
      h2: "How do you coordinate around tenants and business hours?",
      directAnswer:
        "We schedule around your operations. Most flat-roof work is non-disruptive to the inside of the building, but loading, deliveries, and tenant access often require off-hours or weekend scheduling. We map dumpster placement, equipment staging, and crew access to minimize tenant impact — and confirm logistics in writing before the start date.",
      content: {
        type: "bullets",
        items: [
          "Pre-project walk-through to identify tenant impact zones, parking implications, and access requirements.",
          "Equipment staging and dumpster placement coordinated with property management.",
          "Off-hours and weekend work scheduled when the project requires it.",
          "Tenant notifications drafted with property management before the project starts.",
          "Daily progress reports during multi-day projects so building management is never out of the loop.",
        ],
      },
    },
    {
      h2: "What does commercial roofing cost?",
      directAnswer:
        "Commercial roofing pricing is highly project-specific. Single-ply replacements typically run $7–$14 per square foot installed; modified bitumen runs $8–$13; restoration coatings on existing roofs run $3–$6 per square foot. Project size, access, and existing-system tear-off determine the final number.",
      content: {
        type: "prose",
        paragraphs: [
          "We provide free, line-itemized estimates for every commercial project, including a detailed scope of work, material specifications, manufacturer warranty terms, our workmanship warranty, project timeline, and access logistics. Larger projects may include phased pricing, milestone payment schedules, and coordination with your insurance carrier or financing partner.",
          "For commercial property managers and asset owners, we provide consolidated documentation in formats that work with insurance claims, capital expenditure approvals, and 1099 contractor reporting. If you have a specific format requirement, tell us at the estimate — we'll match.",
        ],
      },
    },
    {
      h2: "Do you handle commercial emergency response?",
      directAnswer:
        "Yes. We respond to active commercial leaks and storm damage during business hours, typically same-day for property-management clients with active service relationships. We tarp-and-secure to stop water intrusion, document the damage with photos, and schedule the actual repair with proper system materials.",
      content: {
        type: "prose",
        paragraphs: [
          "Commercial leaks frequently start small and escalate fast — water gets into ceiling tiles, electrical, and tenant inventory. We treat commercial emergency calls with the same urgency as residential: fast triage, immediate stabilization, full documentation for the insurance file.",
          "If you're a property manager with multiple buildings, we can establish a service relationship that prioritizes your portfolio for emergency response. Call us to discuss specifics.",
        ],
      },
    },
  ],

  processSteps: [
    {
      title: "Site assessment",
      description:
        "On-roof inspection, system identification, photographic documentation, infrared scan if leak source unclear.",
    },
    {
      title: "Itemized estimate",
      description: "Scope, materials, labor, warranty, schedule, access logistics — all in writing.",
    },
    {
      title: "Coordination",
      description: "Tenant notifications, equipment staging, dumpster placement, off-hours scheduling if needed.",
    },
    {
      title: "Install",
      description: "W-2 crew on-site, manufacturer-spec install, daily progress reports for multi-day projects.",
    },
    {
      title: "Warranty + documentation",
      description:
        "Written workmanship warranty, manufacturer warranty registration, and full project documentation delivered.",
    },
  ],

  faqs: [
    {
      question: "What's the difference between TPO and EPDM?",
      answer:
        "TPO is a white reflective thermoplastic — energy-efficient, currently the most popular new commercial install, 20–25 year lifespan. EPDM is a black rubber membrane — extremely durable, lower upfront cost, 25–30 year lifespan, but absorbs heat. Choice depends on energy goals, budget, and roof exposure.",
    },
    {
      question: "What's a roof restoration coating and when does it make sense?",
      answer:
        "Silicone or acrylic coatings are spray-applied over existing roof systems to extend their life by 10–15 years without full replacement. Best on roofs that are mid-life with intact substrate but worn surface. Restoration is typically 30–50% the cost of full replacement and can sometimes be expensed for tax purposes (consult your accountant).",
    },
    {
      question: "How long does commercial roofing work take?",
      answer:
        "Project-specific. A single-section repair is often same-day. A 10,000 sq ft TPO replacement typically runs 5–10 working days. A 50,000 sq ft phased replacement on a warehouse can run 3–8 weeks depending on weather and access. We commit to specific dates in writing on every project.",
    },
    {
      question: "Can you work around our tenants and business hours?",
      answer:
        "Yes — and we do, on most commercial projects. Off-hours, weekend, and phased scheduling are routine. We coordinate parking, deliveries, and crew access with property management before work begins. Tenant notifications go out under the property's branding, drafted by us if needed.",
    },
    {
      question: "What warranty do you provide on commercial work?",
      answer:
        "Manufacturer warranties run 15–25 years on modern commercial systems (TPO, EPDM, PVC) and are registered after install. Our workmanship warranty covers labor and installation defects — typically 2 years on commercial work, longer for repeat property-management clients. Both are documented in your project package.",
    },
    {
      question: "Do you handle insurance claims on commercial properties?",
      answer:
        "Yes — commercial insurance work is a regular part of our practice. We document storm damage with photos and infrared scans where useful, meet adjusters on-site, and provide the line-item scope insurers need. We are not public adjusters, but our presence at the inspection often results in a more accurate scope of loss.",
    },
  ],

  relatedServices: [
    "industrial-roofing",
    "metal-roofing",
    "storm-damage-roofing",
    "roof-repair",
  ],
  relatedCities: [
    "st-charles-mo",
    "ofallon-mo",
    "edwardsville-il",
    "belleville-il",
  ],
  relatedBlogPosts: [],

  proprietaryStats: [
    {
      value: "20-year",
      label: "Typical TPO manufacturer warranty",
      description: "Plus our written 2-year workmanship warranty on labor.",
    },
    {
      value: "$7–$14",
      label: "TPO installed price per sq ft (St. Louis, 2026)",
    },
  ],

  citations: [
    {
      href: "https://www.nrca.net",
      source: "NRCA",
      label: "NRCA — commercial roofing best practices",
    },
  ],
};
