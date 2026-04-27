import type { ServiceContent } from "@/types/service";
import { BUSINESS } from "@/lib/constants";

export const emergencyRoofing: ServiceContent = {
  slug: "emergency-roofing",
  name: "Emergency Roofing",
  ctaClass: "A",

  seo: {
    title: "Emergency Roofing in St. Louis | Same-Day Tarp & Leak Response",
    description:
      "Active leak or storm damage? Same-day tarp service in St. Louis. Average 3-hour on-site arrival during business hours. Call (314) 834-6556.",
    canonical: `${BUSINESS.url}/services/emergency-roofing`,
  },

  hero: {
    h1: "Emergency Roofing in St. Louis",
    eyebrow: "24-hour response",
    subhead:
      "Leak right now? Storm just hit? Tree on the roof? Call (314) 834-6556. Same-day tarping in St. Louis during business hours, average 3-hour arrival.",
    trustBullets: [
      "Same-day tarp",
      "~3 hr arrival (business hours)",
      "Real person answers",
    ],
    imagePath: "/images/service-emergency.jpg",
    imageAlt: "Blue emergency tarp covering active storm damage on a residential roof.",
  },

  directAnswer:
    "Emergency roofing is immediate-response stabilization for active water intrusion or structural roof damage. We tarp-and-secure the roof to stop further damage, document the situation for your insurance file, and schedule the actual repair within days. Average on-site arrival in the St. Louis metro core is under 3 hours during business hours — call (314) 834-6556 immediately.",

  voiceQuickAnswer: {
    query: "Who do I call for an emergency roof leak in St. Louis?",
    answer:
      "Call (314) 834-6556 for same-day tarp service in the St. Louis metro. Average on-site arrival under 3 hours during business hours.",
  },

  primaryKeywords: [
    "emergency roofing st louis",
    "emergency roofer st louis",
    "24 hour roofer st louis",
  ],
  secondaryKeywords: [
    "tarp service st louis",
    "active leak roofer",
    "storm tarp st louis",
  ],

  sections: [
    {
      h2: "When should you call for emergency roofing?",
      directAnswer:
        "Call immediately for: active water entering the home, a hole in the roof from a fallen tree or wind damage, missing shingles exposing underlayment, a tarp that's failed mid-storm, or any roof situation where waiting until tomorrow means significantly more interior damage.",
      content: {
        type: "bullets",
        items: [
          "Active leak — water dripping or pouring inside the home.",
          "Tree, branch, or debris through the roof.",
          "Wind damage — entire shingle sections torn off, exposing underlayment.",
          "Tarp failure — temporary tarp from a previous storm has come loose.",
          "Vehicle impact — exterior damage to roof structure.",
          "Storm just hit and you can see daylight from inside the attic.",
        ],
      },
    },
    {
      h2: "What happens when you call?",
      directAnswer:
        "Real person answers. We triage the situation by phone in under five minutes — what's happening, where you are, how active the water is. We dispatch a crew with tarps and tools, typical arrival under 3 hours during business hours. After-hours: voicemail returned within an hour during severe weather events.",
      content: {
        type: "process",
        steps: [
          {
            title: "Phone triage",
            description:
              "Five-minute call to understand the situation, your location, and the urgency level.",
          },
          {
            title: "Dispatch",
            description:
              "Crew dispatched with tarps, fasteners, and emergency materials. Typical arrival under 3 hours during business hours.",
          },
          {
            title: "Stabilize",
            description:
              "Tarp-and-secure the affected area to stop water intrusion. Secure any structural concerns.",
          },
          {
            title: "Document",
            description:
              "Photos for your insurance file. Written summary of what we did and what's needed for the actual repair.",
          },
          {
            title: "Schedule the repair",
            description:
              "Actual repair scheduled within days, often same-week. Insurance claim coordination if applicable.",
          },
        ],
      },
    },
    {
      h2: "What does emergency roofing cost?",
      directAnswer:
        "Emergency tarp service runs $300–$700 in the St. Louis metro depending on access, roof complexity, and tarp size needed. The actual repair (separate scope) is quoted after the situation is stable. Insurance often covers both the tarp service and the repair when storm damage is the cause.",
      content: {
        type: "prose",
        paragraphs: [
          "Tarp service is a stabilization fee, not the repair itself. The repair scope (replace damaged shingles, repair decking, rebuild flashing) is quoted separately once we can fully assess the damage in daylight and stable conditions. Both are itemized on your invoice for insurance documentation.",
          "We don't gouge on emergency calls. The same per-hour labor rate that applies to non-emergency repairs applies on emergency calls. The cost difference is mostly access logistics (after-hours crew dispatch, expedited material runs) and risk premium for working in active or freshly-passed weather.",
        ],
      },
    },
    {
      h2: "Is the tarp permanent?",
      directAnswer:
        "No. Tarps are designed for 30–90 days of weatherproofing while the actual repair is scheduled and completed. Don't leave a tarp in place long-term — UV exposure, wind cycling, and water pooling all cause tarp failure. The actual roof repair should follow within days or weeks.",
      content: {
        type: "prose",
        paragraphs: [
          "We secure tarps with proper fasteners (not just sandbags or weights) that hold through normal weather but don't damage the roof structure. Tarps are designed for short-term use; if a project gets delayed beyond 60 days due to insurance approval or material lead time, we re-inspect and re-secure as needed.",
          "If you've inherited a tarp from a previous storm and don't know how long it's been there, call us. We'll assess whether it's still doing its job or whether the underlying roof has been getting wetter than you realize.",
        ],
      },
    },
  ],

  processSteps: [
    {
      title: "Triage",
      description: "Phone call to assess severity. Real person answers — usually on the second ring.",
    },
    {
      title: "Dispatch",
      description: "Crew on-site with tarps and materials. ~3 hr typical arrival during business hours.",
    },
    {
      title: "Stabilize",
      description: "Tarp-and-secure to stop water intrusion. Address any structural concerns.",
    },
    {
      title: "Document",
      description: "Photos for your insurance file. Written summary of work done and next steps.",
    },
    {
      title: "Schedule repair",
      description: "Actual repair scheduled within days. Insurance coordination if applicable.",
    },
  ],

  faqs: [
    {
      question: "How quickly can you get to my home in an emergency?",
      answer:
        "Average on-site arrival in the St. Louis metro core is under 3 hours during business hours. Outer-suburb response can run longer based on traffic and crew location. After-hours: voicemail callbacks typically within an hour during severe weather events; on-site response depends on crew availability and conditions.",
    },
    {
      question: "Do you respond after hours?",
      answer:
        "We respond to active emergencies — like an open hole in a roof or active water intrusion — outside normal business hours when crews are available. After-hours calls roll to voicemail; we return voicemails typically within an hour during severe weather, longer on quiet nights. For confirmed 24/7 status, ask when you call.",
    },
    {
      question: "Will insurance cover the tarp service?",
      answer:
        "Often yes — if storm damage is the underlying cause and you have the appropriate coverage. Most homeowners policies cover emergency mitigation as part of the broader claim. We provide itemized documentation for the tarp service alongside the eventual repair scope so your carrier has everything needed.",
    },
    {
      question: "Should I tarp the roof myself first?",
      answer:
        "Not unless you absolutely have to and you're confident on a roof. Roofs are dangerous, especially when wet. Most homeowners shouldn't climb up — call us first, and place buckets or move belongings inside while you wait. If water is severe and you can safely lay a tarp from a window or with someone supporting from below, that's better than nothing.",
    },
    {
      question: "What if the storm damaged my whole roof, not just one spot?",
      answer:
        "We tarp the worst areas first to stop active water entry, then assess the broader damage. If the storm requires a full replacement, we'll begin the insurance claim process while the tarp is doing its job. Don't try to make storm-damage repairs piecemeal — wait for the full assessment, then proceed with the right scope.",
    },
  ],

  relatedServices: [
    "storm-damage-roofing",
    "roof-repair",
    "roofing-inspection",
    "residential-roofing",
  ],
  relatedCities: [
    "st-charles-mo",
    "ofallon-mo",
    "kirkwood-mo",
    "clayton-mo",
    "ladue-mo",
    "creve-coeur-mo",
  ],
  relatedBlogPosts: [],

  proprietaryStats: [
    {
      value: "<3 hrs",
      label: "Average on-site arrival, St. Louis metro core",
      description: "Business hours; outer-suburb response runs longer.",
    },
    {
      value: "$300–$700",
      label: "Typical emergency tarp cost",
      description: "Depends on access, roof complexity, and tarp size.",
    },
    {
      value: "Real person",
      label: "Answers your call — not voicemail (business hours)",
    },
  ],

  citations: [
    {
      href: "https://www.weather.gov/lsx",
      source: "National Weather Service",
      label: "NWS St. Louis — current weather and storm information",
    },
  ],
};
