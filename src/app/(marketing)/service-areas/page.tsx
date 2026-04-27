import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Hero } from "@/components/content/Hero";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { FAQSection } from "@/components/content/FAQSection";
import { CTABand } from "@/components/cta/CTABand";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import type { Faq } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Roofing Service Areas in St. Louis Metro & Metro East Illinois",
  description:
    "All Weather Roofing Systems serves 10 cities across the St. Louis metro and Metro East. Pick yours for city-specific roofing notes — or call (314) 834-6556.",
  canonical: "/service-areas",
});

// Each card's distinctive angle is unique — no two cities share the same
// descriptor. Pulled from the per-city research briefs in cities-research/.
type CityCard = {
  slug: string;
  label: string;
  region: "MO" | "IL";
  angle: string;
};

const CITY_CARDS: CityCard[] = [
  {
    slug: "st-charles-mo",
    label: "St. Charles, MO",
    region: "MO",
    angle:
      "Historic district preservation codes meet HOA-governed west-side subdivisions.",
  },
  {
    slug: "clayton-mo",
    label: "Clayton, MO",
    region: "MO",
    angle:
      "Block-by-block architectural diversity — Tudor, Mid-Century, Contemporary on the same street.",
  },
  {
    slug: "ofallon-mo",
    label: "O'Fallon, MO",
    region: "MO",
    angle:
      "Fast-growing subdivisions where HOA approvals shape every roofing decision.",
  },
  {
    slug: "ofallon-il",
    label: "O'Fallon, IL",
    region: "IL",
    angle:
      "Scott AFB-adjacent housing, military PCS timelines, and Illinois insurance rules.",
  },
  {
    slug: "belleville-il",
    label: "Belleville, IL",
    region: "IL",
    angle:
      "Storm-recovery work in southern Illinois's tornado and hail corridor.",
  },
  {
    slug: "edwardsville-il",
    label: "Edwardsville, IL",
    region: "IL",
    angle:
      "Historic University District, SIUE-area rentals, and Glen Carbon corridor new builds.",
  },
  {
    slug: "creve-coeur-mo",
    label: "Creve Coeur, MO",
    region: "MO",
    angle:
      "Mature tree canopy that drives branch-strike repairs and gutter-protection work.",
  },
  {
    slug: "chesterfield-mo",
    label: "Chesterfield, MO",
    region: "MO",
    angle:
      "Slate, tile, copper, and designer shingle work for premium West County builds.",
  },
  {
    slug: "ladue-mo",
    label: "Ladue, MO",
    region: "MO",
    angle:
      "Estate-scale roofing with white-glove project management and strict code review.",
  },
  {
    slug: "kirkwood-mo",
    label: "Kirkwood, MO",
    region: "MO",
    angle:
      "Period-appropriate materials for Victorian, Craftsman, and Foursquare homes.",
  },
];

const SERVICE_AREAS_FAQS: Faq[] = [
  {
    question: "Do you serve cities not on this list?",
    answer:
      "Often, yes. We work across the entire St. Louis metropolitan area and Metro East Illinois — these 10 cities are the ones we have dedicated service notes for, but we routinely take projects in adjacent communities like Webster Groves, Glendale, Wildwood, Manchester, Town and Country, Frontenac, and others. Call (314) 834-6556 with your address and we'll tell you straight whether we're a fit.",
  },
  {
    question: "Do you work in both Missouri and Illinois?",
    answer:
      "Yes. We hold active roofing licensure in both states (Illinois licensure verified through IDFPR) and work routinely on both sides of the river. Our office is in downtown St. Louis, which means crews dispatch from the city center — keeping response times reasonable across the metro and the closer Metro East communities.",
  },
  {
    question: "What about insurance claim adjusters on the Illinois side?",
    answer:
      "Illinois insurance claim handling has slight rule and timeline differences from Missouri. We meet adjusters on either side of the river routinely and document storm damage to the standards each carrier expects. If your insurance carrier is licensed in both states (most national carriers are), the adjuster process is largely consistent — local rules affect timelines and certain scope-of-loss conventions.",
  },
  {
    question: "Do you charge extra for farther cities?",
    answer:
      "Mileage isn't a separate line on most estimates within our service area — labor rates and project pricing are consistent across the metro. For projects on the outer edge of our footprint, we may build a small allowance into the labor line for travel time. We'll always show you exactly what's billed where.",
  },
];

export default function ServiceAreasHubPage() {
  return (
    <>
      <div className="bg-hearthstone">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <Breadcrumb items={[{ label: "Service Areas" }]} />
        </div>
        <Hero
          eyebrow="Service areas"
          headline="Where We Work: St. Louis Metro & Metro East"
          subhead="10 cities, two states, one office in downtown St. Louis. Click your city for service notes specific to your neighborhood — or call (314) 834-6556 for anywhere else in the metro."
          trustBullets={["Licensed MO + IL", "St. Louis-based crews", "Metro-wide response"]}
          ctaClass="B"
          trackingLocation="service_areas_hub_hero"
        />
      </div>

      <section className="mx-auto w-full max-w-3xl px-6 pt-12 lg:pt-16">
        <DirectAnswer eyebrow="Quick read">
          <p>
            <strong>{BUSINESS.name}</strong> serves 10 named cities across the
            St. Louis metro and Illinois Metro East: St. Charles, Clayton,
            O&rsquo;Fallon (MO), O&rsquo;Fallon (IL), Belleville, Edwardsville,
            Creve Coeur, Chesterfield, Ladue, and Kirkwood — plus most adjacent
            communities. Our office is in downtown St. Louis at{" "}
            {BUSINESS.address.street}; crews dispatch from there.
          </p>
        </DirectAnswer>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
        <h2 className="font-heading text-h2 font-bold text-storm-navy">
          Cities we serve
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-700">
          Each city has its own roofing realities — historic preservation, HOA
          governance, storm patterns, premium materials, tree canopy. Click
          through to see what&rsquo;s specific to yours.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CITY_CARDS.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/service-areas/${city.slug}`}
                className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-card transition-shadow hover:shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-heading text-base font-semibold text-storm-navy">
                    <MapPin
                      size={16}
                      aria-hidden="true"
                      className="text-signal-amber"
                    />
                    {city.label}
                  </span>
                  <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    {city.region}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                  {city.angle}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-signal-amber group-hover:underline">
                  See city notes
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTABand
        headline="Don't see your city? Call us anyway."
        subtext={`We work across the metro. Call ${BUSINESS.phone} with your address and we'll tell you straight.`}
        ctaClass="B"
        background="amber-tint"
        trackingLocation="service_areas_mid_cta"
      />

      <FAQSection faqs={SERVICE_AREAS_FAQS} />

      <CTABand
        headline="Local crews. Real response times."
        subtext={`Call ${BUSINESS.phone} or request a callback — we'll respond fast either way.`}
        ctaClass="B"
        background="navy"
        trackingLocation="service_areas_final_cta"
      />
    </>
  );
}
