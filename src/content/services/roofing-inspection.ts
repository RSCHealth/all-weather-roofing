import type { ServiceContent } from "@/types/service";
import { BUSINESS } from "@/lib/constants";

export const roofingInspection: ServiceContent = {
  slug: "roofing-inspection",
  name: "Roofing Inspection",
  ctaClass: "B",

  seo: {
    title: "Roofing Inspection in St. Louis | 21-Point Free Inspection",
    description:
      "Free 21-point roofing inspections in St. Louis — pre-listing, post-storm, and annual maintenance. Written photo report. Call (314) 834-6556.",
    canonical: `${BUSINESS.url}/services/roofing-inspection`,
  },

  hero: {
    h1: "Roofing Inspection in St. Louis",
    eyebrow: "21-point inspection",
    subhead:
      "Free, no-pressure inspections for buying, selling, post-storm assessment, or annual maintenance. Written photo report delivered within 48 hours — yours whether you hire us or not.",
    trustBullets: ["Free for most situations", "Written photo report", "No pressure to hire"],
  },

  directAnswer:
    "A roofing inspection is a structured assessment of your roof system — shingles, decking, ventilation, flashing, gutters, and attic — to identify current issues, predict near-term failures, and document condition for insurance, real estate, or maintenance purposes. Our standard inspection covers 21 specific check points and produces a written photo report within 48 hours. Inspections are free for most situations.",

  primaryKeywords: [
    "roof inspection st louis",
    "roofing inspector st louis",
    "free roof inspection st louis",
  ],
  secondaryKeywords: [
    "pre listing roof inspection",
    "post storm roof inspection",
    "21 point roof inspection",
  ],

  sections: [
    {
      h2: "When should you get a roofing inspection?",
      directAnswer:
        "Five common scenarios: before listing your home (so surprises don't kill the sale), before buying a home (independent of the buyer's inspector), after a major storm event (especially hail), as part of annual maintenance on roofs over 10 years old, and any time you suspect a problem you can't see from the ground.",
      content: {
        type: "bullets",
        items: [
          "Pre-listing — fix or disclose issues before they kill a sale.",
          "Pre-purchase — independent assessment beyond the general home inspector.",
          "Post-storm — document hail or wind damage before insurance deadlines pass.",
          "Annual maintenance — for roofs over 10 years old, catch issues before they become leaks.",
          "Insurance renewal — some carriers request periodic roof condition documentation.",
          "Suspected leak — figure out the actual source before water damage worsens.",
        ],
      },
    },
    {
      h2: "What does a 21-point inspection cover?",
      directAnswer:
        "Our standard inspection covers shingle condition, granule loss, fastener integrity, flashing (chimney, vent, valley, roof-to-wall), ridge venting, gutter attachment, downspout drainage, soffit and fascia condition, skylight seal, attic insulation and ventilation (where accessible), decking condition (visual), and underlayment indicators — among other check points.",
      content: {
        type: "table",
        data: {
          caption: "Roofing inspection checklist categories",
          headers: ["Category", "What we check"],
          rows: [
            ["Shingles", "Condition, granule loss, curl/cup, missing/damaged"],
            ["Flashing", "Chimney, vent, valley, roof-to-wall, drip edge"],
            ["Penetrations", "Pipe boots, vent pipes, skylight seals, satellite mounts"],
            ["Gutters", "Attachment, alignment, granule pooling, downspout flow"],
            ["Ventilation", "Ridge vent, soffit vent, attic airflow indicators"],
            ["Underlayment", "Visible seams, lifted or exposed underlayment"],
            ["Decking", "Visible deflection, soft spots, signs of moisture damage"],
            ["Attic (if accessible)", "Insulation, daylight, water staining, mold indicators"],
          ],
        },
      },
    },
    {
      h2: "What's the difference between free and paid inspections?",
      directAnswer:
        "Free inspections are part of an estimate — we look at your roof when you're considering hiring us for repair, replacement, or post-storm work. Paid inspections (typically $150–$400) are standalone reports for real estate, legal, or insurance purposes where you need formal documentation regardless of whether you hire a contractor.",
      content: {
        type: "comparison",
        columns: [
          {
            title: "Free inspection",
            bullets: [
              "Performed as part of an estimate process.",
              "Photo documentation provided.",
              "Written summary of findings and recommendations.",
              "No formal stamped report or detailed write-up.",
              "Best for: post-storm, pre-repair, considering replacement.",
            ],
          },
          {
            title: "Paid inspection ($150–$400)",
            bullets: [
              "Standalone service, no estimate attached.",
              "Detailed written report with photo documentation.",
              "Suitable for real estate transactions, legal disputes, insurance documentation.",
              "Includes pricing recommendations for any identified work.",
              "Best for: pre-listing, pre-purchase, formal documentation.",
            ],
          },
        ],
      },
    },
    {
      h2: "Do you partner with real estate agents?",
      directAnswer:
        "Yes — we work with St. Louis real estate agents on pre-listing inspections, pre-purchase due diligence, and post-inspection negotiations. If your agent has a buyer or seller who needs a roof inspection, we provide turnaround within 3–5 business days with documentation that fits typical real estate timelines.",
      content: {
        type: "prose",
        paragraphs: [
          "Common real estate scenarios: a home inspector flagged 'roof needs further evaluation' on a listing, a buyer wants an independent assessment beyond the general inspector, a seller wants to identify and address issues before listing, or a buyer-seller negotiation needs a written estimate for a credit or repair.",
          "We provide written reports with photos in formats that work with real estate timelines and contracts. We don't pressure agents or buyers/sellers — our role is to give the honest assessment, document it clearly, and let the parties make their own decisions.",
        ],
      },
    },
    {
      h2: "How long does an inspection take?",
      directAnswer:
        "Most residential inspections take 30–60 minutes on-site. We climb the roof when conditions allow, document with photos, check the attic from the inside if accessible, and walk you through findings before leaving. The written report is delivered within 48 hours.",
      content: {
        type: "prose",
        paragraphs: [
          "Larger or commercial properties take longer — 60–120 minutes on-site for buildings over 5,000 square feet. Multi-story or steep-pitched roofs may require additional time for safe access and complete documentation.",
          "We inspect in most weather, but active rain or freezing conditions require rescheduling. Wet roofs are unsafe to walk and produce poor photos. We&rsquo;ll move the inspection to the next clear day if conditions don&rsquo;t cooperate.",
        ],
      },
    },
  ],

  processSteps: [
    {
      title: "Schedule",
      description: "Most inspections scheduled within 3–5 business days. Same-week for post-storm.",
    },
    {
      title: "On-site assessment",
      description:
        "30–60 minutes — roof exterior, attic where accessible, photographic documentation throughout.",
    },
    {
      title: "Walkthrough",
      description: "We walk you through the findings on-site before leaving — what we found, what's urgent, what isn't.",
    },
    {
      title: "Written report",
      description: "Delivered within 48 hours. Photos, findings, recommendations.",
    },
    {
      title: "Decision",
      description:
        "Take your time. The report is yours whether you hire us, another contractor, or no one at all.",
    },
  ],

  faqs: [
    {
      question: "How much does a roof inspection cost?",
      answer:
        "Free for most situations — post-storm, pre-repair, considering replacement. Paid inspections (typically $150–$400) are for situations where you need a standalone formal report: pre-listing real estate, pre-purchase due diligence, legal disputes, or insurance documentation independent of a claim. We&rsquo;ll tell you which type fits your situation when you call.",
    },
    {
      question: "Will you just try to sell me a new roof?",
      answer:
        "No. We get that you&rsquo;re skeptical — that&rsquo;s a smart instinct. Our inspection report tells you what&rsquo;s actually going on with your roof: how many years are left, what repairs are urgent vs. cosmetic, and what to expect over the next 5–10 years. If your roof has plenty of life left, we&rsquo;ll say so. We&rsquo;d rather have a customer for the next 20 years than upsell one and lose them.",
    },
    {
      question: "Do you inspect after a storm?",
      answer:
        "Yes — post-storm inspections are a regular part of our work. We document hail and wind damage with photos that meet insurance carrier requirements, identify damage that adjusters sometimes miss, and tell you straight whether the damage qualifies for an insurance claim. Most post-storm inspections are scheduled within 3–5 business days.",
    },
    {
      question: "Can you inspect my roof if I'm buying a home?",
      answer:
        "Yes. Pre-purchase inspections are independent of the general home inspector and focus specifically on the roof system. We provide written reports with photos in formats that work with real estate transactions. Turnaround is typically 3–5 business days from inspection to report delivery.",
    },
    {
      question: "How often should I get my roof inspected?",
      answer:
        "Annually for roofs over 10 years old. After every major storm event (especially hail). Before listing or buying a home. Beyond that, periodic inspections are good practice for owners who want to maximize the lifespan of their roof — catching small issues before they become leaks adds years to a roof&rsquo;s functional life.",
    },
    {
      question: "What's included in the written report?",
      answer:
        "Photos of every notable area (good and bad), categorized findings (urgent / near-term / cosmetic), estimated remaining life of the roof system, recommendations for any repairs or replacement, and rough pricing ranges if work is needed. Format adjusts based on whether the report is for a real estate transaction, insurance documentation, or general homeowner records.",
    },
  ],

  relatedServices: [
    "roof-repair",
    "roof-replacement",
    "storm-damage-roofing",
    "residential-roofing",
  ],
  relatedCities: [
    "kirkwood-mo",
    "clayton-mo",
    "ladue-mo",
    "chesterfield-mo",
    "creve-coeur-mo",
  ],
  relatedBlogPosts: ["signs-you-need-new-roof"],

  proprietaryStats: [
    {
      value: "21",
      label: "Check points covered in standard inspection",
    },
    {
      value: "<48 hr",
      label: "Written report turnaround",
    },
    {
      value: "Free",
      label: "For most situations",
      description:
        "Free as part of an estimate. Paid reports ($150–$400) for standalone formal documentation.",
    },
  ],

  citations: [
    {
      href: "https://www.nrca.net",
      source: "NRCA",
      label: "NRCA — roof inspection guidelines",
    },
  ],
};
