import type { Metadata } from "next";
import Image from "next/image";
import { Award, ShieldCheck, Users, HandHeart } from "lucide-react";
import { CTABand } from "@/components/cta/CTABand";
import { FAQSection } from "@/components/content/FAQSection";
import { CitationLink } from "@/components/content/CitationLink";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import type { Faq } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "About All Weather Roofing Systems | St. Louis Roofing Contractor",
  description:
    "Locally owned roofing contractor serving St. Louis and the Metro East. Meet the team behind All Weather Roofing Systems and the standards we hold ourselves to.",
  canonical: "/about",
});

const ABOUT_FAQS: Faq[] = [
  {
    question: "How long have you been in business?",
    answer:
      "All Weather Roofing Systems was founded in St. Louis and has been serving homeowners and businesses across the metro and Metro East ever since. The exact founding year is on the homepage and in our Google Business Profile — and the same crew who started this company is still on the trucks today.",
  },
  {
    question: "Are you licensed in both Missouri and Illinois?",
    answer:
      "Yes. We hold active roofing licenses in both Missouri and Illinois and carry general liability plus workers' compensation insurance on every job. We're happy to email you our certificate of insurance and license numbers before any work begins — just ask when you call.",
  },
  {
    question: "Do you subcontract any work?",
    answer:
      "No. Every roofer who sets foot on your home is a W-2 employee of All Weather Roofing Systems. That matters because subcontracted crews aren't bound by the same workmanship warranty, the same training, or the same safety protocols. When we say we control the quality of every job, we mean it literally.",
  },
  {
    question: "What's your warranty?",
    answer:
      "You receive two warranties on every roof we install: a workmanship warranty from us (covering the install itself), and a manufacturer warranty on the materials (asphalt, metal, underlayment, accessories — backed by GAF, Owens Corning, CertainTeed, IKO, and others depending on system). Both are written, both are transferable in most cases, and both are explained line-by-line in your estimate.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes. We work with approved lending partners who offer flexible terms for roof replacement and major repair projects, including soft-pull pre-qualification (which doesn't affect your credit). See our financing page for current options, or call (314) 834-6556 and we'll walk you through what's available.",
  },
];

const TEAM_PLACEHOLDER = [
  { role: "Owner / Founder", years: "20+ years in roofing" },
  { role: "Lead Estimator", years: "15+ years on St. Louis roofs" },
  { role: "Crew Foreman", years: "12+ years installing" },
  { role: "Office Manager", years: "Customer service lead" },
];

export default function AboutPage() {
  return (
    <>
      {/* Story-driven hero */}
      <section className="bg-hearthstone">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-signal-amber">
            About us
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl lg:text-h1 lg:leading-tight">
            About All Weather Roofing Systems
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            We&rsquo;re a locally owned roofing contractor built around one
            stubborn idea: that the easiest way to earn a customer is to do the
            work right the first time, charge a fair price, and answer the
            phone five years later when something needs a closer look.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto w-full max-w-4xl px-6 py-12 lg:py-16">
        <h2 className="font-heading text-h2 font-bold text-storm-navy">
          Our story
        </h2>
        <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-slate-700">
          <p>
            All Weather Roofing Systems started where most good local
            contractors start — on a roof, with a hammer, and a customer who
            had been burned by a previous roofer. After years working under
            other contractors and watching corners get cut, our founder built
            this company with a few non-negotiables: no subcontractors, written
            warranties on every job, transparent pricing, and a real person
            answering the phone.
          </p>
          <p>
            Today we work across the entire St. Louis metropolitan area and
            the Illinois Metro East — from St. Charles to Edwardsville,
            Belleville to Ladue, with a heavy concentration in older homes and
            historic neighborhoods where a roof has to be done right because
            you can see every shingle from the curb. We&rsquo;ve replaced
            tornado-damaged roofs, navigated insurance claims for hundreds of
            homeowners, and installed everything from architectural asphalt to
            standing-seam metal to slate.
          </p>
          <p>
            What we don&rsquo;t do: high-pressure sales pitches, storm-chasing
            from out of state, or estimates with surprise add-ons after the
            tear-off starts. The roofers on our trucks live in St. Louis. We
            see your house from the highway. We&rsquo;re not going anywhere,
            and that&rsquo;s exactly the point.
          </p>
        </div>
      </section>

      {/* Team + truck visual */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-12 lg:pb-16">
        <Image
          src="/images/about-team-truck.jpg"
          alt="All Weather Roofing Systems crew with their work truck."
          width={1600}
          height={1067}
          sizes="(min-width: 1024px) 960px, 100vw"
          className="aspect-[3/2] w-full rounded-xl object-cover shadow-card"
        />
      </section>

      {/* Meet the Team */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <h2 className="font-heading text-h2 font-bold text-storm-navy">
            Meet the team
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-700">
            Real faces, real years on St. Louis roofs. (Owner-supplied photos
            replace these placeholders pre-launch.)
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_PLACEHOLDER.map((member) => (
              <li
                key={member.role}
                className="flex flex-col rounded-lg border border-slate-200 bg-hearthstone p-5"
              >
                <div
                  aria-hidden="true"
                  className="flex h-32 w-full items-center justify-center rounded-md bg-storm-navy/5"
                >
                  <Users size={36} className="text-storm-navy/30" />
                </div>
                <p className="mt-4 font-heading text-base font-semibold text-storm-navy">
                  [Name TBD]
                </p>
                <p className="text-sm text-slate-700">{member.role}</p>
                <p className="text-xs text-slate-500">{member.years}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-heading text-h2 font-bold text-storm-navy">
              Certifications &amp; accreditations
            </h2>
            <p className="mt-3 text-base text-slate-700">
              Manufacturer-certified for the systems we install most often.
              Licensed in both states we serve. Insurance and licensure
              documents available on request before we book a job.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-slate-700">
              <li className="inline-flex items-center gap-2">
                <ShieldCheck size={18} aria-hidden="true" className="text-success" />
                Licensed: Missouri &amp; Illinois (license # supplied on request)
              </li>
              <li className="inline-flex items-center gap-2">
                <ShieldCheck size={18} aria-hidden="true" className="text-success" />
                General liability + workers&rsquo; compensation insurance
              </li>
              <li className="inline-flex items-center gap-2">
                <Award size={18} aria-hidden="true" className="text-signal-amber" />
                Manufacturer-certified installer for major asphalt &amp; metal systems
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              For storm-resilience standards we follow on retrofits, see{" "}
              <CitationLink href="https://ibhs.org/fortified" source="IBHS">
                the IBHS FORTIFIED Roof program
              </CitationLink>
              .
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {["GAF", "Owens Corning", "CertainTeed", "IKO", "BBB", "Tamko"].map(
              (label) => (
                <div
                  key={label}
                  aria-label={`${label} certified`}
                  className="flex h-24 items-center justify-center rounded-md border border-slate-200 bg-white text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-card"
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-storm-navy text-white">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-signal-amber">
            <HandHeart size={16} aria-hidden="true" />
            Community
          </span>
          <h2 className="mt-2 font-heading text-h2 font-bold text-white">
            St. Louis is where we live and where we work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-200">
            We sponsor local youth sports teams, partner with neighborhood
            associations on storm-recovery efforts, and donate roofing labor
            to vetted St. Louis-area nonprofits when we have the bandwidth.
            Specific partnerships are listed in the footer once formalized
            with the owner.
          </p>
        </div>
      </section>

      <CTABand
        headline="Talk to a real local roofer"
        subtext={`The phone goes to our office in downtown St. Louis. Call ${BUSINESS.phone} and you'll get a real person who can answer real questions.`}
        ctaClass="C"
        background="hearthstone"
        trackingLocation="about_cta"
      />

      <FAQSection faqs={ABOUT_FAQS} />
    </>
  );
}
