import type { CityContent, CityResearch } from "@/types/city";
import { BUSINESS } from "@/lib/constants";
import research from "@/content/cities-research/clayton-mo.json";

const r = research as CityResearch;

export const claytonMo: CityContent = {
  slug: "clayton-mo",
  nameDisplay: "Clayton, MO",
  ctaClass: "B",
  research: r,

  seo: {
    title: "Roofing in Clayton, MO | Premium Materials, Detailed Workmanship",
    description:
      "Roofing for Clayton's architecturally diverse housing — Tudor, Mid-Century, Contemporary. Premium materials, detail-oriented crews. Call (314) 834-6556.",
    canonical: `${BUSINESS.url}/service-areas/clayton-mo`,
  },

  hero: {
    h1: "Roofing in Clayton, MO",
    eyebrow: "Service area: Clayton",
    subhead:
      "Tudor Revival next to Mid-Century Modern next to a 2018 luxury rebuild — Clayton's blocks demand individualized roofing recommendations and the workmanship to match.",
    trustBullets: ["Premium materials", "Detail-oriented crews", "Tight-block logistics"],
    imagePath: "/images/city-luxury-home.jpg",
    imageAlt: "Premium home with architectural detailing representative of Clayton, MO.",
  },

  directAnswer:
    "Clayton's defining trait for roofing is architectural diversity inside individual blocks — a Wydown-area street can show a 1920s Tudor next to a 1960s Mid-Century Modern next to a contemporary teardown. Material recommendations have to match each home individually, workmanship has to be visible-from-the-curb good, and dumpster placement has to respect tight residential streets and mature canopy.",

  sections: [
    {
      id: "architectural-diversity",
      type: "architectural",
      h2: "Clayton's architectural mix and why it matters for roofing",
      directAnswer:
        "Clayton blocks routinely span 90+ years of architectural change. A roofing recommendation that's right for one home can be visibly wrong on its neighbor — designer asphalt that flatters a Mid-Century is the wrong shingle profile for the Tudor next door.",
      content: {
        type: "architectural",
        eras: r.housingStock.dominantEras,
        styles: r.housingStock.dominantStyles,
        paragraph:
          "We approach every Clayton home individually rather than running a city-wide template. Old Town Clayton blocks reward designer asphalt or synthetic slate; Wydown estates frequently take real slate, copper accents, or cedar shake; DeMun rowhouses and small-lot stock benefit from carefully chosen architectural asphalt that respects the urban-village context.",
      },
    },
    {
      id: "premium-materials",
      type: "table",
      h2: "Premium materials we install for Clayton homes",
      directAnswer:
        "Designer asphalt, synthetic slate, real slate, copper accents, and standing-seam metal are all common in Clayton. The right call depends on the home's era, the surrounding block, and the homeowner's plans.",
      content: {
        type: "table",
        data: {
          caption: "Premium materials for Clayton roofs",
          headers: ["Material", "Best fit", "Lifespan"],
          rows: [
            ["Designer asphalt (luxury line)", "Most Clayton blocks; lifetime-warranty options", "25–35 yr"],
            ["Synthetic slate / composite", "Tudor, Colonial Revival, Foursquare", "40–50 yr"],
            ["Real slate", "Wydown estates and historically-significant homes", "75–100 yr"],
            ["Standing-seam metal", "Mid-Century Modern + Contemporary", "40–70 yr"],
            ["Copper accents (bay roofs, dormers)", "Detailed Tudor and Victorian work", "75+ yr"],
          ],
        },
      },
    },
    {
      id: "client-experience",
      type: "prose",
      h2: "The Clayton client experience",
      directAnswer:
        "Detail-oriented homeowners notice everything — flashing alignment, magnetic-sweep cleanup, dumpster placement, even crew uniforms. Clayton work is partly about the roof and partly about how the project shows up to the rest of the block.",
      content: {
        type: "prose",
        paragraphs: [
          "We treat Clayton work like Clayton homeowners expect: branded trucks, uniformed crews, scheduled communications, and a magnetic-sweep cleanup pass at the end of every day. Tarps go down before tear-off, plywood protects driveways and walkways, and dumpster placement gets confirmed with the homeowner the morning of delivery rather than the afternoon.",
          "We don't rush Clayton estimates. Architectural diversity means individual material recommendations, and the time we spend understanding which Clayton block we're working on usually saves time and money over the life of the roof.",
        ],
      },
    },
    {
      id: "neighborhoods",
      type: "neighborhoods",
      h2: "Neighborhoods and areas in Clayton",
      content: {
        type: "neighborhoods",
        items: r.neighborhoods.map((n) => ({ name: n.name, profile: n.profile })),
      },
    },
    {
      id: "warranty",
      type: "quote",
      h2: "Our workmanship warranty for Clayton homeowners",
      content: {
        type: "quote",
        quote:
          "Every Clayton install ships with a written workmanship warranty plus the manufacturer warranty on the system — both transferable in most cases, both detailed line-by-line in the estimate. We answer the phone five years from now.",
        attribution: `${BUSINESS.name}`,
      },
    },
  ],

  faqs: [
    {
      question:
        "Why do you spend so much time on the Clayton estimate compared to a basic subdivision quote?",
      answer:
        "Because Clayton blocks are architecturally individual — a recommendation that's right for the Mid-Century next door is wrong for your Tudor. Material profile, color, and even ridge venting style change between Clayton homes that share a sidewalk. We spend the time at estimate to avoid spending it on regrets later.",
    },
    {
      question: "Can you install copper accents on a Clayton bay roof or dormer?",
      answer:
        "Yes — copper accents on bay roofs, dormers, and turret caps are common detail work in Clayton. We install copper as a feature element on Tudor, Victorian, and Colonial Revival homes. Lifespan is 75+ years; pricing depends on scope. We bring samples and historical-context references to the estimate.",
    },
    {
      question: "Will dumpster placement be a problem on my Wydown-area street?",
      answer:
        "Tight Clayton residential streets do require careful dumpster planning. We coordinate placement with you the morning of delivery, work with neighbor driveways where needed, and schedule pickup to minimize curb time. On especially tight blocks we sometimes use smaller staged dumpsters rather than one large one.",
    },
    {
      question: "Do you handle storm-driven branch-strike repairs in Clayton's tree canopy?",
      answer:
        "Yes — tree-strike repairs from Clayton's mature canopy are recurring work, especially after summer wind events. We assess decking damage that often hides under intact-looking shingles, document for insurance where applicable, and complete repairs that match the home's existing material rather than patching with mismatched product.",
    },
    {
      question: "How do you coordinate access on small-lot DeMun blocks?",
      answer:
        "DeMun's walkable urban-village blocks need careful logistics — limited driveway access, narrow streets, close-set neighbors. We schedule deliveries off-peak, stage materials minimally, and use compact equipment. We've worked these blocks before and know what coordination they need.",
    },
  ],

  citySpecificTestimonialIds: [],
  nearbyCities: r.nearbyCities,
  relatedServices: ["residential-roofing", "metal-roofing", "roof-replacement", "roofing-inspection"],
};
