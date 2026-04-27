import type { ServiceContent } from "@/types/service";
import { BUSINESS } from "@/lib/constants";

export const metalRoofing: ServiceContent = {
  slug: "metal-roofing",
  name: "Metal Roofing",
  ctaClass: "B",

  seo: {
    title: "Metal Roofing in St. Louis | Standing Seam, Corrugated, Stone-Coated",
    description:
      "Metal roofing systems in St. Louis — standing seam, corrugated, stone-coated steel. 40+ year lifespan, hail-resistant. Free estimates: (314) 834-6556.",
    canonical: `${BUSINESS.url}/services/metal-roofing`,
  },

  hero: {
    h1: "Metal Roofing in St. Louis",
    eyebrow: "Metal roofing",
    subhead:
      "Standing-seam, corrugated, stone-coated steel, and copper installations engineered for St. Louis hail and storm exposure. 40–70 year lifespan with proper installation.",
    trustBullets: ["40+ year lifespan", "Hail-resistant Class 4", "Energy-reflective"],
  },

  directAnswer:
    "Metal roofing systems install over standard wood decking with a specialized fastener and seam configuration that interlocks panels into a weather-tight, long-life surface. In St. Louis — where hail and severe storms are routine — properly installed standing-seam metal can last 40–70 years versus the 18–22 year asphalt average. Cost runs roughly 2–3× asphalt up-front but typically wins on lifecycle cost over 40+ years.",

  primaryKeywords: [
    "metal roofing st louis",
    "standing seam metal roof st louis",
    "metal roof contractor st louis",
  ],
  secondaryKeywords: [
    "corrugated metal roof",
    "stone coated steel roofing",
    "copper roofing st louis",
  ],

  sections: [
    {
      h2: "What types of metal roofing systems are there?",
      directAnswer:
        "The four major metal systems we install: standing-seam (premium, most popular for residential), corrugated steel (cost-effective, high durability), stone-coated steel (asphalt-shingle aesthetics with metal performance), and copper (luxury, decorative, multi-century lifespan with patina).",
      content: {
        type: "table",
        data: {
          caption: "Metal roofing system comparison",
          headers: ["System", "Aesthetic", "Lifespan", "Cost / sq ft installed"],
          rows: [
            ["Standing-seam", "Vertical raised seams, modern", "40–70 yr", "$9–$16"],
            ["Corrugated steel", "Industrial, ribbed", "30–50 yr", "$6.50–$10.50"],
            ["Stone-coated steel", "Resembles shingles or tile", "40–50 yr", "$8–$13"],
            ["Copper", "Patinas to green, premium", "75–100+ yr", "$18–$35+"],
          ],
        },
      },
    },
    {
      h2: "What are the benefits of a metal roof in St. Louis?",
      directAnswer:
        "Three big wins for St. Louis homeowners: hail resistance (Class 4 impact-rated when properly installed), 2–3× longer lifespan vs. asphalt, and energy-reflective surface that reduces summer cooling load. Insurance premium discounts are common for Class-4-rated metal systems in hail-prone zip codes.",
      content: {
        type: "bullets",
        items: [
          "Hail resistance — Class 4 impact-rated metal systems are the highest available; many insurance carriers offer premium discounts.",
          "Lifespan — 40–70 years vs. the 18–22 year average for asphalt in St. Louis. One metal install lasts 2–3 asphalt replacements.",
          "Energy efficiency — reflective metal surface reduces summer cooling load by 10–25% on most homes.",
          "Wind performance — properly installed standing-seam systems handle 150 mph+ wind ratings.",
          "Recyclable — metal is fully recyclable at end-of-life; many systems are made from recycled material.",
          "Snow shedding — metal sheds snow more cleanly than asphalt, reducing ice-dam risk.",
        ],
      },
    },
    {
      h2: "How does metal roofing compare to asphalt over the long run?",
      directAnswer:
        "Up-front, metal costs roughly 2–3× asphalt. Over 40+ years, metal usually wins on lifecycle cost: one metal install replaces 2–3 asphalt replacements. Add insurance discounts, energy savings, and resale value, and the math often favors metal for owners who plan to stay in the home long-term.",
      content: {
        type: "comparison",
        columns: [
          {
            title: "Metal advantages",
            bullets: [
              "40–70 year lifespan vs. 18–22 years for asphalt in St. Louis.",
              "Class 4 hail rating possible with proper system selection.",
              "Reflective surface lowers cooling costs in summer.",
              "Insurance premium discounts in hail-prone zip codes.",
              "Resale value boost in many St. Louis neighborhoods.",
            ],
          },
          {
            title: "Asphalt advantages",
            bullets: [
              "Significantly lower up-front cost (50–60% less per sq ft).",
              "Easier to repair locally — color-match available.",
              "Faster install time on standard residential roofs.",
              "More installer experience available across the metro.",
              "Aesthetic fit with most St. Louis housing stock.",
            ],
          },
        ],
      },
    },
    {
      h2: "Are metal roofs noisy in storms?",
      directAnswer:
        "No. Properly installed metal roofs over solid decking with synthetic underlayment are quieter than most homeowners expect — comparable to asphalt during rain and storms. The 'noisy metal roof' stereotype comes from old farm-building installs over open purlins without insulation. Modern residential metal installs include the same sound-deadening underlayment as asphalt.",
      content: {
        type: "prose",
        paragraphs: [
          "We install metal panels over solid decking (the same OSB or plywood your house would have for asphalt) plus synthetic underlayment. The underlayment dampens sound, decking adds mass, and your attic insulation handles the rest. Most homeowners report the difference between asphalt and metal during storms is barely noticeable.",
          "If sound is a specific concern — for example, a vaulted ceiling room directly under the roof — we can recommend additional sound-deadening underlayment options or insulation upgrades during the install.",
        ],
      },
    },
    {
      h2: "What does metal roofing cost in St. Louis?",
      directAnswer:
        "Standing-seam metal runs $9–$16 per square foot installed in 2026 — meaning $18,000–$32,000 for a typical 2,000 sq ft St. Louis home. Corrugated steel is less ($6.50–$10.50). Copper runs $18+ per sq ft. Insurance discounts and energy savings often offset 10–25% of lifecycle cost.",
      content: {
        type: "prose",
        paragraphs: [
          "The cost gap between metal and architectural asphalt has narrowed considerably over the past decade, and the lifecycle math has shifted in metal's favor for owners who plan long-term occupancy. Insurance discounts on Class-4-rated systems vary by carrier — call your agent before deciding to confirm the specific discount available on your policy.",
          "We install metal year-round in St. Louis with the same 1–3 day on-site cadence for standing-seam systems on standard residential homes. Larger and complex projects run 3–6 days. Material lead time can run 3–6 weeks for custom-color or specialty profiles.",
        ],
      },
    },
  ],

  processSteps: [
    {
      title: "Spec consultation",
      description:
        "Walk through profile options, color, panel width, and Class-4 rating. We bring samples to the estimate.",
    },
    {
      title: "Itemized estimate",
      description: "Materials, labor, decking allowance, warranty terms, lead time — all in writing.",
    },
    {
      title: "Material lead time",
      description: "Typical 3–6 weeks for custom panels. Schedule install to match material delivery.",
    },
    {
      title: "Tear-off + decking",
      description:
        "Existing roof removed, decking inspected and replaced per-sheet where needed. Synthetic underlayment installed.",
    },
    {
      title: "Panel install",
      description:
        "Panels installed per manufacturer spec, seams locked, accessories and trim applied. Manufacturer warranty registered.",
    },
  ],

  faqs: [
    {
      question: "Will a metal roof rust?",
      answer:
        "Modern metal roofing is galvanized steel, galvalume, aluminum, or copper — coated and painted to resist corrosion for the full lifespan of the system. Properly installed metal won't rust during the system's design life. The exception is unprotected raw steel (rare in residential) or panels that have been gouged through to bare metal during install — which proper crew technique avoids.",
    },
    {
      question: "Does a metal roof affect cell phone or WiFi signal inside the home?",
      answer:
        "Generally no. Metal roofs typically don't significantly affect cell or WiFi signals because most signal travels through walls (which aren't metal) rather than the roof. Some homes with marginal cell signal already may notice a small change; mesh WiFi and cell boosters address this if it becomes an issue.",
    },
    {
      question: "Can metal roofing be installed over my existing shingles?",
      answer:
        "Sometimes — but we strongly prefer full tear-off. Going over existing shingles can save short-term cost but obscures decking damage, may void manufacturer warranties, and adds weight load. For a 40+ year metal investment, full tear-off and proper decking inspection is the right call. We'll explain the trade-offs in writing if reroof-over is on the table.",
    },
    {
      question: "Does a metal roof attract lightning?",
      answer:
        "No. Metal roofs do not attract lightning, and they're actually safer than other roof types in a strike: metal conducts the strike to ground without igniting, where wood or asphalt could ignite. Lightning rods (separate system) are still recommended for tall buildings or specific locations, regardless of roof material.",
    },
    {
      question: "Will a metal roof reduce my home insurance premium?",
      answer:
        "Often yes — Class-4 impact-rated metal systems frequently qualify for hail-resistant roof discounts in St. Louis. Discount amount varies by carrier (typical 10–35% off the wind/hail portion of premium). Call your insurance agent with the specific manufacturer, model, and Class-4 certification we'll be installing to confirm your specific discount.",
    },
    {
      question: "How long does a metal roof installation take?",
      answer:
        "Standing-seam metal installations on standard residential roofs run 3–6 days on-site once material arrives. Material lead time is typically 3–6 weeks for custom panels. Larger or complex roofs take longer. Weather can extend the timeline; we weatherproof every evening regardless.",
    },
  ],

  relatedServices: [
    "residential-roofing",
    "roof-replacement",
    "commercial-roofing",
    "storm-damage-roofing",
  ],
  relatedCities: [
    "ladue-mo",
    "clayton-mo",
    "kirkwood-mo",
    "chesterfield-mo",
    "creve-coeur-mo",
  ],
  relatedBlogPosts: ["best-roofing-materials-st-louis"],

  proprietaryStats: [
    {
      value: "40–70 yr",
      label: "Standing-seam lifespan in St. Louis",
      description: "vs. the 18–22 year regional asphalt average.",
    },
    {
      value: "Class 4",
      label: "Hail-impact rating possible",
      description:
        "Highest commercially available — qualifies for insurance premium discounts in many St. Louis zip codes.",
    },
    {
      value: "10–25%",
      label: "Typical summer cooling load reduction",
      description: "From reflective metal surface vs. dark asphalt.",
    },
  ],

  citations: [
    {
      href: "https://ibhs.org/risk-research/severe-convective-storms/",
      source: "IBHS",
      label: "IBHS — hail resilience research and Class 4 ratings",
    },
    {
      href: "https://www.nrca.net",
      source: "NRCA",
      label: "NRCA — metal roof installation best practices",
    },
  ],
};
