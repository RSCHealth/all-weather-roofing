import type { Faq } from "@/types";

export type FaqCategory = {
  slug: string;
  title: string;
  description: string;
  faqs: Faq[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    slug: "roof-repair",
    title: "Roof repair",
    description: "Spot-fixes, leak diagnosis, and when a repair is the right call.",
    faqs: [
      {
        question: "How do I know if my roof needs a repair or a full replacement?",
        answer:
          "If the underlying decking is sound and the damage is localized — a few wind-lifted shingles, a single failed flashing, a popped nail or two — repair is almost always the right call and runs $400–$1,800 in St. Louis. Replace when leaks are widespread, when granule loss is heavy across the field, when you can see daylight from the attic, or when the roof is past 20 years old. We give you the honest answer on inspection, even when repair is the smaller invoice.",
      },
      {
        question: "How quickly can you respond to an active leak?",
        answer:
          "Same day for active leaks during business hours, weather permitting. Our typical sequence is: tarp-and-secure within 24 hours to stop further water intrusion, then schedule the actual repair within a few business days. If the leak coincides with a storm event we're responding to across the metro, response time stretches but we communicate proactively about your place in queue.",
      },
      {
        question: "What does a typical roof repair cost in St. Louis?",
        answer:
          "Most residential roof repairs run between $400 and $1,800. Common repairs: replace blown-off shingles ($400–$700), reseal flashing around a chimney or vent ($500–$900), replace a section of damaged decking ($800–$1,500), repair a valley leak ($600–$1,200). Prices vary with roof pitch, material match, and access. We provide written, itemized estimates so you know what you're paying for before any tools come off the truck.",
      },
      {
        question: "Will a roof repair match my existing shingles?",
        answer:
          "Color match is rarely perfect on older roofs — sun, granule loss, and weathering shift the original shade. We pull from the same manufacturer line where possible and explain what to expect on color match before we order. For visible repairs (front-facing slope), we sometimes recommend repairing a wider area with new shingles to blend transitions, especially on historic homes in Clayton, Ladue, or Kirkwood.",
      },
      {
        question: "Is it worth repairing a roof that's near the end of its life?",
        answer:
          "Usually not. If your roof is 20+ years old and showing wear across multiple slopes, repair dollars are better spent on tear-off and replacement. We'll tell you straight: a $1,000 repair on a roof that needs replacement in 18 months is $1,000 you didn't get value from. The exception is emergency stabilization — tarp now, plan replacement on your timeline.",
      },
    ],
  },
  {
    slug: "roof-replacement",
    title: "Roof replacement",
    description: "Tear-off, materials, and what a full replacement actually involves.",
    faqs: [
      {
        question: "How long does a roof replacement take?",
        answer:
          "Most St. Louis residential replacements (1,800–2,800 sq. ft.) are completed in one to three days once materials are on site. Single-day installs are common for straightforward asphalt projects. Steep-slope, complex, or metal roofs take longer. Weather, decking repairs, and permitting can each add a day. We schedule full crews per job — your roof is closed up and weatherproof every evening, never left open overnight.",
      },
      {
        question: "Do you handle the permit?",
        answer:
          "Yes. We pull the permit on your behalf in any St. Louis-area municipality that requires one (most do for full replacement). Permit fees are itemized on your estimate so you can see the line cost. We also schedule the inspection and meet the inspector — you don't need to be home for that step.",
      },
      {
        question: "What roofing material is best for St. Louis?",
        answer:
          "Architectural asphalt shingle is the workhorse — affordable, hail-rated options available, and well-suited to the St. Louis climate's freeze-thaw cycles. For longer life and storm resilience, consider standing-seam metal (40–70 year systems, excellent hail performance). Synthetic slate and tile options exist for historic neighborhoods. We walk you through the material trade-offs in plain language during the estimate.",
      },
      {
        question: "Can you tear off and replace in one day?",
        answer:
          "On most single-family homes under ~2,500 sq. ft. with a single layer of existing shingles, yes. We bring a full crew, a dumpster, and enough materials to complete the job in one push. Two-layer tear-offs, complex roofs, or homes with significant decking damage typically run two days. We'll tell you which category your home falls into during the estimate.",
      },
      {
        question: "What happens to my landscaping during a replacement?",
        answer:
          "We protect with tarps and plywood where it matters. Magnetic-roller sweeps for nails happen at the end of every day plus a final sweep when the dumpster leaves. If you have specialty plants or hardscape we should be careful around, point them out at the estimate — we'll plan the dumpster placement and crew flow to protect them.",
      },
      {
        question: "Do you remove the old roof or just install over it?",
        answer:
          "We strongly prefer full tear-off for any roof we're replacing. Reroofs (installing over existing) save short-term cost but trap problems, double the weight load, void manufacturer warranties on most modern shingles, and obscure decking damage that needs to be addressed. We'll recommend tear-off unless there's a very specific reason to consider otherwise — and we'll say so explicitly in writing.",
      },
    ],
  },
  {
    slug: "cost-pricing",
    title: "Cost & pricing",
    description: "What roofing costs in St. Louis and why prices vary.",
    faqs: [
      {
        question: "How much does a new roof cost in St. Louis?",
        answer:
          "A typical asphalt shingle replacement on a single-family home in the St. Louis metro runs $9,000–$18,000 depending on roof size, pitch, tear-off scope, and decking condition. Architectural shingles average $4.50–$7.50 per square foot installed; metal and synthetic systems run $9–$16 per square foot. Larger or complex homes climb from there. Free, written estimates show you exactly where each dollar goes.",
      },
      {
        question: "Why do roofing estimates vary so much between contractors?",
        answer:
          "Major drivers: material quality (cheap 3-tab vs. high-end architectural), labor source (W-2 employees vs. day-labor subs), warranty terms (one year vs. lifetime workmanship), permit and dumpster cost (sometimes hidden), and the quality of the underlayment / ice-and-water shield. The cheapest bid often skips items the better bid includes — read line items, not just totals.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Typically yes — usually 25–35% of the contract at scheduling, balance on completion. We never ask for full payment up front, and we never start work without a signed, itemized contract. Larger commercial projects may have a different milestone structure. The deposit and payment schedule are spelled out in writing on every estimate.",
      },
      {
        question: "What forms of payment do you accept?",
        answer:
          "Check, ACH/bank transfer, and major credit cards. Card payments may carry a small processing surcharge — we'll disclose any surcharge before you choose how to pay. We also offer financing through approved lending partners for full replacements and major repairs; soft-pull pre-qualification doesn't affect your credit.",
      },
      {
        question: "Are estimates really free?",
        answer:
          "Yes — every estimate is free and there's no obligation. Our estimator climbs the roof when safe, documents the actual condition, and sends you a written, itemized quote. We don't charge inspection fees, we don't credit a paid inspection back to your job, and we won't pressure you for a same-day signature. If the answer is 'don't replace yet,' we'll say so.",
      },
    ],
  },
  {
    slug: "storm-insurance",
    title: "Storm damage & insurance",
    description: "Hail, wind, and how insurance claims actually work.",
    faqs: [
      {
        question: "Should I file an insurance claim for hail damage?",
        answer:
          "Only after a contractor with claim experience has inspected the roof. Plenty of \"hail damage\" doesn't actually meet a carrier's threshold for a covered claim, and a denied claim can affect your premium history. We do free post-storm inspections and tell you straight whether a claim is worth filing. Don't sign anything with door-knockers offering \"free roofs\" — that's the storm-chaser playbook and rarely ends well.",
      },
      {
        question: "Will you meet my insurance adjuster on-site?",
        answer:
          "Yes, and we recommend it. We provide the photos, measurements, and shingle samples adjusters need to scope the loss accurately. We are not public adjusters — that's a regulated role we don't perform — but our role is to advocate for the work the home actually needs and to spot items adjusters sometimes miss (like underlayment damage or hidden decking issues).",
      },
      {
        question: "What's the difference between hail damage and old shingles?",
        answer:
          "Hail damage shows as round bruises with crushed or exposed mat, sometimes with shiny granule loss in a circular pattern. Age-related wear shows as broad granule loss, brittleness, and curl/cup. Insurance covers storm damage (hail/wind), not age. We document both during inspection so you know what's covered, what isn't, and what you're actually buying with a roof investment.",
      },
      {
        question: "How long do I have to file a storm-damage claim?",
        answer:
          "Most insurance carriers require claims be filed within 12 months of the storm event in Missouri, with similar timelines in Illinois. Sooner is always better — older damage gets harder to attribute to a specific event. If you suspect a roof took damage, get an inspection within a few weeks, even if no leak is visible.",
      },
      {
        question: "Will my premium go up if I file a hail claim?",
        answer:
          "Possibly, depending on your carrier and claim history. Most weather-related (act-of-nature) claims don't directly raise premiums in the way fault-based claims do, but rate increases can follow at renewal due to broader regional loss trends. Your agent can give you carrier-specific guidance. For{' '} more info on hail claim handling and storm resilience, see published guidance from independent industry research.",
      },
    ],
  },
  {
    slug: "materials-options",
    title: "Materials & options",
    description: "Asphalt, metal, synthetic — and which is right for your home.",
    faqs: [
      {
        question: "What's the difference between 3-tab and architectural shingles?",
        answer:
          "3-tab shingles are the older, flat-profile budget option — typically 20–25 year warranties and minimal hail rating. Architectural (or dimensional) shingles are thicker, layered, and offer 30–50 year warranties plus better wind/hail performance. For St. Louis, architectural is the standard recommendation; 3-tab is mostly a rental-property cost play these days.",
      },
      {
        question: "Is metal roofing worth the extra cost in St. Louis?",
        answer:
          "Often yes. Standing-seam metal lasts 40–70 years, performs exceptionally well against hail (Class 4 impact-rated when properly installed), and reflects summer heat better than asphalt — which matters in Missouri summers. The upfront cost is roughly 2–3× asphalt, but lifecycle cost over 40+ years often comes out lower. Visual aesthetics matter too: not every neighborhood is right for metal.",
      },
      {
        question: "Do you offer synthetic slate or composite shingles?",
        answer:
          "Yes — we install synthetic slate and composite shingles (e.g., DaVinci, Brava, Inspire) for homeowners who want the look of slate or shake without the weight, fragility, or maintenance of natural materials. Common picks for historic-district homes in Clayton, Ladue, and Kirkwood where neighborhood standards prefer slate-style appearance.",
      },
      {
        question: "Can I install solar after a roof replacement?",
        answer:
          "Absolutely — and timing matters. If solar is in your 5-year plan, tell us up front so we can ensure the roof is ready (especially decking and load specs). We coordinate with most reputable solar installers in the St. Louis area. We strongly recommend completing roof replacement before solar install, not after — a 25-year roof under a 25-year solar array is a much smoother ownership experience.",
      },
      {
        question: "What about ridge vents, gutters, and accessories?",
        answer:
          "Every full replacement includes ridge venting (or whatever existing system needs), drip edge, ice-and-water shield in the appropriate zones, and starter strips. Gutters are a separate scope but we coordinate replacement timing with our partner crews. We don't cut corners on the small parts — they're what determines whether the roof actually performs in St. Louis weather.",
      },
    ],
  },
  {
    slug: "licensing-warranty-company",
    title: "Licensing, warranty & company",
    description: "Credentials, warranties, and how we run our business.",
    faqs: [
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes — All Weather Roofing Systems is licensed in both Missouri and Illinois, carries general liability insurance, and maintains workers' compensation coverage on every employee. We're happy to email license numbers and a current certificate of insurance directly to you or your property manager before any work begins.",
      },
      {
        question: "What warranty do you provide?",
        answer:
          "Two warranties on every install: a workmanship warranty from us (covers install defects), and a manufacturer warranty on the materials (covers material failure). Both are written, both are explained line-by-line in your estimate, and most are transferable if you sell the home — which can be a nice feature at resale. Specific terms vary by manufacturer system.",
      },
      {
        question: "Do you subcontract work?",
        answer:
          "No. Every roofer who sets foot on your roof is a W-2 employee of All Weather Roofing Systems. Subcontracted crews don't carry the same training, safety standards, or workmanship-warranty obligations. We control the schedule, the quality, and the chain of accountability — start to finish.",
      },
      {
        question: "How long have you been in business?",
        answer:
          "We're locally owned and have been in St. Louis longer than most of our customers' current roofs. Specific founding date is on the homepage and in our Google Business Profile. The same founder is still on the trucks today and answers the phone often enough that you'll likely talk to him at some point during your project.",
      },
      {
        question: "What happens if I have a problem after install?",
        answer:
          "Call us. The same number you used the first time still rings the same office. We respond to warranty calls within one business day, and we don't charge for warranty inspections during the workmanship-warranty period. We've been to plenty of homes 5+ years post-install for minor adjustments — that's how the business works when you don't subcontract.",
      },
    ],
  },
];
