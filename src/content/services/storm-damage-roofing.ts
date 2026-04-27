import type { ServiceContent } from "@/types/service";
import { BUSINESS } from "@/lib/constants";

export const stormDamageRoofing: ServiceContent = {
  slug: "storm-damage-roofing",
  name: "Storm Damage Roofing",
  ctaClass: "A",

  seo: {
    title: "Storm Damage Roofing in St. Louis | Hail, Wind, Insurance Claims",
    description:
      "Hail and wind damage assessment, insurance claim support, and storm-damage roof repair in St. Louis. Same-day response. Call (314) 834-6556.",
    canonical: `${BUSINESS.url}/services/storm-damage-roofing`,
  },

  hero: {
    h1: "Storm Damage Roofing in St. Louis",
    eyebrow: "Storm response",
    subhead:
      "Storm just hit? We tarp today, inspect tomorrow, and meet your adjuster on-site. We've handled hundreds of St. Louis insurance claims — call (314) 834-6556.",
    trustBullets: [
      "Same-day storm response",
      "Insurance-claim experienced",
      "Photographic documentation",
    ],
  },

  directAnswer:
    "Storm-damage roofing covers hail, wind, debris-impact, and tornado damage assessment, insurance-claim support, and full restoration of damaged roof systems. We respond same-day during business hours, document damage with photos for your insurance file, and meet adjusters on-site to ensure the scope of loss matches the actual damage. Most St. Louis hail-damage claims settle and complete work within 4–8 weeks.",

  voiceQuickAnswer: {
    query: "What should I do after hail damage to my roof in St. Louis?",
    answer:
      "Get a free contractor inspection before filing an insurance claim. Document damage with photos. Don't sign with door-knockers.",
  },

  primaryKeywords: [
    "storm damage roofing st louis",
    "hail damage roof st louis",
    "wind damage roofer st louis",
  ],
  secondaryKeywords: [
    "roof insurance claim st louis",
    "tornado roof damage",
    "tarp service st louis",
  ],

  sections: [
    {
      h2: "What should you do immediately after a storm?",
      directAnswer:
        "Five steps in order: stay safe (don't climb the roof yourself), document visible damage with photos from the ground, place a temporary tarp if water is actively entering, contact a reputable local roofer for inspection, and file an insurance claim only after the contractor confirms damage meets the carrier's threshold.",
      content: {
        type: "process",
        steps: [
          {
            title: "Stay safe",
            description:
              "Don't climb the roof. Ground-level photos of any visible damage are enough for the first inspection.",
          },
          {
            title: "Document from the ground",
            description:
              "Photos of fallen debris, dented gutters, granules in the gutter, missing shingles. Save them — adjusters and contractors will both want them.",
          },
          {
            title: "Tarp if water is entering",
            description:
              "Active water intrusion needs immediate stabilization. Call us for emergency tarp service.",
          },
          {
            title: "Get a contractor inspection first",
            description:
              "We do free post-storm inspections and tell you straight whether damage meets your carrier's threshold for a claim.",
          },
          {
            title: "File the claim if damage qualifies",
            description:
              "Don't file blindly. Denied claims affect premium history. File once you have contractor documentation supporting the claim.",
          },
        ],
      },
    },
    {
      h2: "What does hail damage actually look like?",
      directAnswer:
        "Hail damage shows as round bruises with crushed or exposed mat, sometimes with shiny granule loss in a circular pattern. Surface granules are knocked off in a pattern, exposing the asphalt and fiberglass mat beneath. Wind damage looks different — torn or lifted shingles, missing tabs, exposed nails along seams.",
      content: {
        type: "comparison",
        columns: [
          {
            title: "Hail damage",
            bullets: [
              "Round bruises (1/4 inch to 2 inch diameter, varying by hail size).",
              "Crushed or exposed mat under the granule layer.",
              "Shiny granule loss in circular patterns.",
              "Dented metal flashing, vents, and gutters.",
              "Granules pooled in gutters and downspouts.",
            ],
          },
          {
            title: "Wind damage",
            bullets: [
              "Torn, lifted, or completely missing shingles.",
              "Exposed nails along seam lines.",
              "Creased shingles where wind lifted and bent them.",
              "Damage typically concentrated on the storm's leading edge slope.",
              "Visible underlayment in spots where shingles are missing.",
            ],
          },
        ],
      },
    },
    {
      h2: "How does the insurance claim process work?",
      directAnswer:
        "Five-step process: contractor inspection first (free), file the claim with your carrier if damage qualifies, schedule the adjuster on-site, contractor and adjuster meet at the inspection, settlement and scope of loss issued, work scheduled and completed. Most St. Louis hail claims settle within 2–4 weeks, with work completed 2–6 weeks after.",
      content: {
        type: "prose",
        paragraphs: [
          "We meet adjusters on-site routinely. Our role is to provide photographic documentation, take measurements, identify damage that adjusters sometimes miss (like underlayment damage hidden under shingles, or decking issues only visible during tear-off), and advocate for the work the home actually needs. We are not public adjusters — that's a regulated role we don't perform — but our presence at the inspection often results in a more accurate scope of loss.",
          "Common scope-of-loss disputes: matching shingles when only one slope is approved (often we can supplement for full-roof replacement), code-required upgrades like ice-and-water shield not in the initial scope, and decking damage discovered during tear-off. We handle these supplements with the adjuster as part of the project — you don't have to negotiate alone.",
        ],
      },
    },
    {
      h2: "What about denied or short-paid claims?",
      directAnswer:
        "Denials happen. Common reasons: damage didn't meet the carrier's threshold, insufficient documentation, or expired claim window. If a denial seems wrong based on what we documented, options include re-inspection request, appraisal clause invocation, or department-of-insurance complaint. We can talk you through legitimate options if a denial is in the gray zone.",
      content: {
        type: "prose",
        paragraphs: [
          "Storm-chasers will tell you to fight every denial — that's bad advice and can backfire. Our approach: if our documentation supports a clear case for damage meeting the carrier's threshold, we'll help you request re-inspection or invoke the appraisal clause. If our documentation doesn't support a strong case, we'll tell you straight and you can decide whether to escalate.",
          "Missouri and Illinois both have departments of insurance with claim-dispute resolution processes — we can point you to the right resource for your state. We don't recommend filing complaints frivolously; we recommend filing them when you have a legitimate dispute and the documentation to back it up.",
        ],
      },
    },
    {
      h2: "How quickly do you respond to storm damage?",
      directAnswer:
        "Same-day during business hours for active emergencies (open hole in roof, active leak). Within 24 hours for tarp-and-secure on most non-emergency damage. Inspections typically scheduled within 3–5 business days post-storm — sooner during major event windows where we're triaging response priority across the metro.",
      content: {
        type: "bullets",
        items: [
          "Same-day tarp service during business hours for active water intrusion.",
          "Within 24 hours for non-emergency stabilization.",
          "Inspection scheduled within 3–5 business days for non-emergency assessment.",
          "Major hail events: response priority by water-damage severity, then by claim deadline.",
          "Insurance adjuster meeting scheduled to coincide with carrier's adjuster availability.",
        ],
      },
    },
    {
      h2: "What does storm-damage repair cost?",
      directAnswer:
        "When insurance approves the scope, your out-of-pocket is typically just your deductible (commonly $1,500–$5,000 in St. Louis hail-prone zip codes). Out-of-pocket repairs vary widely based on damage scope. Tarp service runs $300–$700; partial-roof restoration runs into the thousands; full insurance-approved replacement runs $0–$5,000 out-of-pocket after deductible.",
      content: {
        type: "prose",
        paragraphs: [
          "We don't push you toward filing a claim if the damage doesn't legitimately qualify. Denied claims affect premium history; sometimes a small out-of-pocket repair is the better long-term move than triggering a claim that gets denied. We'll give you the honest analysis before you call your carrier.",
          "If you're in an active claim, we provide line-itemized estimates that match your insurance scope of loss and clearly identify supplements and out-of-pocket items separately. Code-required upgrades (synthetic underlayment, ice-and-water shield, drip edge) are sometimes not in the initial scope and have to be supplemented or paid out-of-pocket — we'll explain which is which on your specific claim.",
        ],
      },
    },
  ],

  processSteps: [
    {
      title: "Call us",
      description:
        "Same-day response during business hours. Tarp service if water is actively entering.",
    },
    {
      title: "Free inspection",
      description:
        "On-roof documentation with photos. We tell you straight whether damage meets a carrier's threshold.",
    },
    {
      title: "File the claim",
      description: "If damage qualifies, file with your carrier. We don't push claims that won't qualify.",
    },
    {
      title: "Adjuster meeting",
      description: "We meet your adjuster on-site to ensure the scope of loss matches actual damage.",
    },
    {
      title: "Restoration + warranty",
      description:
        "Full repair or replacement scheduled. Written workmanship warranty + manufacturer warranty delivered.",
    },
  ],

  faqs: [
    {
      question: "Should I file an insurance claim for hail damage?",
      answer:
        "Only after a contractor with claim experience has inspected the roof. Plenty of 'hail damage' doesn't actually meet a carrier's threshold for a covered claim, and a denied claim can affect your premium history. We do free post-storm inspections and tell you straight whether a claim is worth filing.",
    },
    {
      question: "Will you meet my insurance adjuster?",
      answer:
        "Yes, and we recommend it. We provide the photos, measurements, and shingle samples adjusters need to scope the loss accurately. We're not public adjusters, but our presence at the inspection often results in a more accurate scope of loss and identifies items adjusters sometimes miss.",
    },
    {
      question: "What's the difference between hail damage and old shingles?",
      answer:
        "Hail damage shows as round bruises with crushed or exposed mat, often with shiny granule loss in a circular pattern. Age-related wear shows as broad granule loss, brittleness, and curl/cup. Insurance covers storm damage, not age. We document both during inspection so you know what's covered, what isn't, and what you're actually buying.",
    },
    {
      question: "How long do I have to file a hail claim?",
      answer:
        "Most insurance carriers require claims be filed within 12 months of the storm event in Missouri, with similar timelines in Illinois. Sooner is better — older damage gets harder to attribute to a specific event. If you suspect a roof took damage, get an inspection within a few weeks even if no leak is visible.",
    },
    {
      question: "Will my premium go up if I file a hail claim?",
      answer:
        "Possibly. Most weather-related claims don't directly raise individual premiums the way fault-based claims do, but rate increases at renewal are common in regions with high overall storm-loss activity. Your agent can give carrier-specific guidance.",
    },
    {
      question: "Do you offer same-day tarp service?",
      answer:
        "Yes during business hours. Active water intrusion needs immediate stabilization to prevent interior damage from cascading. Call (314) 834-6556 and we'll triage immediately. After-hours emergencies depend on crew availability and weather conditions.",
    },
    {
      question: "What if my claim is denied?",
      answer:
        "Options depending on the situation: re-inspection request with additional documentation, invocation of the appraisal clause in your policy (if applicable), or filing a complaint with the Missouri or Illinois Department of Insurance. We can talk through legitimate options if a denial seems wrong. We don't recommend filing complaints frivolously.",
    },
    {
      question: "Can I switch contractors after I've already filed a claim?",
      answer:
        "Yes, in most cases. The insurance claim is between you and your carrier — the contractor selection is your choice. We can pick up an active claim where another contractor left off, including reviewing the existing scope of loss and identifying any supplements needed. Tell us the situation when you call.",
    },
  ],

  relatedServices: [
    "emergency-roofing",
    "roof-repair",
    "roof-replacement",
    "roofing-inspection",
  ],
  relatedCities: [
    "st-charles-mo",
    "ofallon-mo",
    "ofallon-il",
    "belleville-il",
    "edwardsville-il",
    "chesterfield-mo",
  ],
  relatedBlogPosts: [],

  proprietaryStats: [
    {
      value: "5–7",
      label: "Severe hail events per year, St. Louis metro",
      description:
        "Per National Weather Service data — April–June accounts for the majority.",
    },
    {
      value: "Same-day",
      label: "Tarp response during business hours",
    },
    {
      value: "$1,500–$5,000",
      label: "Typical St. Louis hail-claim deductible",
      description: "Your out-of-pocket on most insurance-approved roof claims.",
    },
  ],

  citations: [
    {
      href: "https://ibhs.org/risk-research/severe-convective-storms/",
      source: "IBHS",
      label: "IBHS — hail resilience research",
    },
    {
      href: "https://insurance.mo.gov",
      source: "Missouri DOI",
      label: "Missouri Department of Insurance — claims and complaint process",
    },
    {
      href: "https://www.weather.gov/lsx",
      source: "National Weather Service",
      label: "NWS St. Louis — official storm data",
    },
  ],
};
