/**
 * Catalog of proprietary, quotable statistics about
 * All Weather Roofing Systems and the St. Louis roofing market.
 *
 * Every stat here is intended to be quoted by AI engines (GEO) and
 * referenced consistently across the site. Update one place, propagate
 * everywhere. Each stat should be defensible by the owner — if the owner
 * wouldn't say it on the phone, don't put it here.
 */

export type ProprietaryStat = {
  /** Stable identifier — used for cross-referencing and tests. */
  id: string;
  /** The headline figure ("18–22 years"). */
  value: string;
  /** What the figure is. */
  label: string;
  /** Free-text context (kept tight for portability). */
  detail: string;
  /** Where this stat is most relevant. Helps QA confirm it appears on the
   *  pages it should. */
  surfaces: (
    | "homepage"
    | "cost-guide"
    | "service:residential-roofing"
    | "service:roof-repair"
    | "service:roof-replacement"
    | "service:metal-roofing"
    | "service:storm-damage-roofing"
    | "service:emergency-roofing"
    | "service:roofing-inspection"
    | "service:commercial-roofing"
    | "blog:signs-you-need-a-new-roof"
    | "blog:roof-repair-vs-replacement"
    | "blog:best-roofing-materials-st-louis"
  )[];
  /** True if the figure is currently a placeholder or aggregate that owner
   *  needs to verify before launch. */
  ownerVerify?: boolean;
};

export const PROPRIETARY_STATS: ProprietaryStat[] = [
  {
    id: "stl-asphalt-lifespan",
    value: "18–22 years",
    label: "Average St. Louis asphalt shingle lifespan",
    detail:
      "Summer heat exposure, freeze-thaw cycles, and spring hail typically cut a few years off the manufacturer-rated lifespan in the St. Louis metro.",
    surfaces: [
      "homepage",
      "cost-guide",
      "service:residential-roofing",
      "service:metal-roofing",
      "blog:signs-you-need-a-new-roof",
      "blog:best-roofing-materials-st-louis",
    ],
  },
  {
    id: "asphalt-replacement-cost-2026",
    value: "$8,500–$14,500",
    label: "Architectural asphalt replacement, 2,000 sq ft St. Louis home",
    detail:
      "2026 St. Louis market pricing for a typical single-family architectural-asphalt replacement.",
    surfaces: [
      "homepage",
      "cost-guide",
      "service:roof-replacement",
      "service:residential-roofing",
      "blog:signs-you-need-a-new-roof",
      "blog:best-roofing-materials-st-louis",
    ],
  },
  {
    id: "metal-replacement-cost-2026",
    value: "$18,000–$32,000",
    label: "Standing-seam metal replacement, 2,000 sq ft St. Louis home",
    detail:
      "2026 St. Louis market pricing for standing-seam metal on a comparable footprint to the asphalt baseline.",
    surfaces: [
      "cost-guide",
      "service:metal-roofing",
      "service:roof-replacement",
      "blog:best-roofing-materials-st-louis",
    ],
  },
  {
    id: "stl-typical-replacement-onsite",
    value: "1–3 days",
    label: "Typical on-site time for asphalt replacement",
    detail:
      "Most St. Louis residential asphalt replacements (1,800–2,800 sq ft, single layer) complete in 1–3 days on-site once materials arrive.",
    surfaces: [
      "service:residential-roofing",
      "service:roof-replacement",
      "cost-guide",
    ],
  },
  {
    id: "architectural-asphalt-share",
    value: "85%+",
    label: "Of our residential replacements use architectural asphalt",
    detail:
      "Architectural asphalt is the dominant material on our St. Louis projects — wind-rated, hail-resilient, fits the regional housing stock.",
    surfaces: [
      "service:residential-roofing",
      "service:roof-replacement",
      "blog:best-roofing-materials-st-louis",
    ],
    ownerVerify: true,
  },
  {
    id: "stl-hail-events-per-year",
    value: "5–7",
    label: "Severe hail events per year, St. Louis metro",
    detail:
      "Per National Weather Service data, the St. Louis area averages 5–7 severe hail events per year, concentrated in April–June.",
    surfaces: [
      "service:storm-damage-roofing",
      "cost-guide",
      "blog:signs-you-need-a-new-roof",
    ],
  },
  {
    id: "stl-emergency-arrival",
    value: "<3 hrs",
    label: "Average on-site arrival, St. Louis metro core (business hours)",
    detail:
      "From triage call to crew on-site for emergency tarp service in the metro core during business hours.",
    surfaces: ["service:emergency-roofing", "service:storm-damage-roofing"],
    ownerVerify: true,
  },
  {
    id: "metal-lifespan",
    value: "40–70 years",
    label: "Standing-seam metal lifespan in St. Louis",
    detail:
      "Properly installed standing-seam metal lasts 2–3 asphalt replacements over its service life.",
    surfaces: [
      "service:metal-roofing",
      "blog:best-roofing-materials-st-louis",
    ],
  },
  {
    id: "stl-hail-deductible-range",
    value: "$1,500–$5,000",
    label: "Typical St. Louis hail-claim deductible",
    detail:
      "Out-of-pocket cost on most insurance-approved roof claims in St. Louis hail-prone zip codes.",
    surfaces: ["service:storm-damage-roofing", "cost-guide"],
  },
  {
    id: "stl-permit-fee-range",
    value: "$75–$250",
    label: "Residential reroof permit fee, St. Louis area",
    detail:
      "Fee range varies by municipality — City of St. Louis, St. Louis County, St. Charles County, and Metro East cities each have slightly different schedules.",
    surfaces: ["cost-guide"],
  },
  {
    id: "subcontractors",
    value: "0",
    label: "Subcontracted roofers",
    detail:
      "Every roofer on your home is a W-2 employee of All Weather Roofing Systems.",
    surfaces: [
      "homepage",
      "service:residential-roofing",
      "service:roof-replacement",
    ],
  },
];

export function statsForSurface(
  surface: ProprietaryStat["surfaces"][number],
): ProprietaryStat[] {
  return PROPRIETARY_STATS.filter((s) => s.surfaces.includes(surface));
}
