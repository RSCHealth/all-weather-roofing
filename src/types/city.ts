import type { ProcessStep, Faq, CtaClass } from "./index";

export type WeatherEventType =
  | "hail"
  | "tornado"
  | "straight-line wind"
  | "ice storm"
  | "flooding"
  | "heat event";

export type CityResearch = {
  slug: string;
  nameDisplay: string;
  /** Single-sentence thesis distinguishing this city. Drives every content
   *  decision on the page. */
  primaryAngle: string;
  housingStock: {
    dominantEras: string[];
    dominantStyles: string[];
    medianYearBuilt: number | null;
    pctHistoric: number | null;
  };
  neighborhoods: { name: string; profile: string }[];
  weatherEvents: {
    date: string;
    type: WeatherEventType;
    description: string;
  }[];
  regulatoryContext: {
    permitOffice: string;
    notableCodes: string[];
    historicDistrictName: string | null;
  };
  localEntities: {
    landmarks: string[];
    highways: string[];
    suppliers: string[];
  };
  commonRoofingChallenges: string[];
  nearbyCities: string[];
  uniqueAngleElaboration: string;
  sourcesConsulted: string[];
  /** Items in this brief that an AI assistant generated and that a human
   *  must verify before they go live on a page. Treat anything in this list
   *  as provisional. */
  ownerVerifyItems: string[];
};

// ---------------------------------------------------------------------------
// CityContent — flexible per-city page structure
// ---------------------------------------------------------------------------

export type NeighborhoodCard = {
  name: string;
  profile: string;
  /** Optional list of streets / landmarks anchoring the neighborhood. */
  anchors?: string[];
};

export type WeatherTimelineEntry = {
  date: string;
  type: WeatherEventType;
  /** What happened — kept short, factual. */
  description: string;
  /** What it means for the roof system or your insurance options. */
  roofingImplication: string;
};

export type CityTableData = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type CitySectionContent =
  | { type: "prose"; paragraphs: string[] }
  | { type: "bullets"; items: string[] }
  | { type: "table"; data: CityTableData }
  | { type: "neighborhoods"; items: NeighborhoodCard[] }
  | { type: "weather-history"; entries: WeatherTimelineEntry[] }
  | {
      type: "regulatory";
      permitOffice?: string;
      historicDistrictName?: string | null;
      notableCodes: string[];
      paragraph?: string;
    }
  | { type: "quote"; quote: string; attribution?: string }
  | { type: "process"; steps: ProcessStep[] }
  | {
      type: "architectural";
      eras: string[];
      styles: string[];
      paragraph?: string;
      pricingTable?: CityTableData;
    };

export type CitySection = {
  id: string;
  type: CitySectionContent["type"];
  h2: string;
  /** 40–60 word opener for AEO extraction. */
  directAnswer?: string;
  content: CitySectionContent;
};

export type CityContent = {
  slug: string;
  nameDisplay: string;
  ctaClass: CtaClass; // city pages are always B
  research: CityResearch;

  seo: {
    title: string;
    description: string;
    canonical: string;
  };

  hero: {
    h1: string;
    eyebrow: string;
    subhead: string;
    /** 2-4 short trust bullets. */
    trustBullets: string[];
    imagePath?: string;
    imageAlt?: string;
  };

  /** Unique 40–60 word direct answer per city — must reference at least two
   *  research-derived specifics (a neighborhood, a landmark, a regulatory
   *  detail, etc.). */
  directAnswer: string;

  sections: CitySection[];

  processSteps?: ProcessStep[];

  faqs: Faq[];

  /** IDs of testimonials in src/content/reviews.ts that apply to this city. */
  citySpecificTestimonialIds: string[];

  nearbyCities: string[]; // city slugs
  relatedServices: string[]; // service slugs (3–4)
};
