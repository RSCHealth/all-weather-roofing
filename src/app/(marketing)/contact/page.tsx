import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { PhoneCTA } from "@/components/cta/PhoneCTA";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { FAQSection } from "@/components/content/FAQSection";
import { CTABand } from "@/components/cta/CTABand";
import { ServiceAreasSection } from "@/components/content/ServiceAreasSection";
import { BUSINESS, DAY_KEYS } from "@/lib/constants";
import { formatTime12 } from "@/lib/hours";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import type { Faq } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Contact All Weather Roofing Systems | Call (314) 834-6556",
  description:
    "Reach All Weather Roofing Systems by phone at (314) 834-6556 or request a callback. Locally owned roofing contractor serving St. Louis and the Metro East.",
  canonical: "/contact",
});

const CONTACT_FAQS: Faq[] = [
  {
    question: "What's the best way to reach you?",
    answer:
      "By phone. Call (314) 834-6556 during business hours and you'll reach a real person on our team — usually on the second ring. Most questions are answered in under five minutes, and we can usually schedule an inspection same-week. If you can't call, the callback form is the fastest fallback; we typically reach back out within two business hours.",
  },
  {
    question: "Do you offer after-hours service?",
    answer:
      "Yes — we offer 24/7 emergency response, 365 days a year. If you have an active leak, an open hole in your roof, missing shingles after a storm, or any condition that's actively letting water inside, call (314) 834-6556 anytime. A live dispatcher will get a crew rolling. Routine quotes and inspections are scheduled during regular business hours.",
  },
  {
    question: "Where's your office?",
    answer: `Our office is in downtown St. Louis at ${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postal}. Most communication happens by phone or on-site at your home — we don't typically meet at the office unless you specifically prefer that. We serve the entire St. Louis metro and the Metro East.`,
  },
];

function getDayName(day: string): string {
  return day.charAt(0).toUpperCase() + day.slice(1);
}

function CurrentDayHoursTable() {
  return (
    <table className="w-full text-sm">
      <thead className="sr-only">
        <tr>
          <th>Day</th>
          <th>Hours</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200">
        {DAY_KEYS.map((day) => {
          const hours = BUSINESS.hours.regular[day];
          const display =
            !hours.open || !hours.close
              ? "Closed"
              : `${formatTime12(hours.open)} – ${formatTime12(hours.close)}`;
          return (
            <tr key={day}>
              <td className="py-2 font-medium text-slate-700">
                {getDayName(day)}
              </td>
              <td className="py-2 text-right text-slate-700">{display}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-hearthstone">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl lg:text-h1 lg:leading-tight">
            Contact All Weather Roofing Systems
          </h1>
          <div className="mt-6 max-w-3xl">
            <DirectAnswer eyebrow="The fastest way to reach us">
              <p>
                The fastest way to reach All Weather Roofing Systems is by
                phone at <strong>{BUSINESS.phone}</strong>, Monday–Friday 7 AM
                to 6 PM and Saturday 8 AM to 2 PM. For roof emergencies —
                active leaks, storm damage, anything letting water inside —
                we answer <strong>24/7, 365 days a year</strong>. Call the
                same number anytime.
              </p>
            </DirectAnswer>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          {/* Left: phone + address + hours */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-heading text-h3 font-bold text-storm-navy">
                Call us first
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Most calls are answered live. We&rsquo;ll triage what you need
                in five minutes or less.
              </p>
              <div className="mt-4">
                <PhoneCTA
                  size="hero"
                  variant="amber"
                  trackingLocation="contact_hero"
                />
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-signal-amber"
                  />
                  <div>
                    <p className="font-heading font-semibold text-storm-navy">
                      Our office
                    </p>
                    <address className="mt-1 not-italic text-sm text-slate-700">
                      {BUSINESS.address.street}
                      <br />
                      {BUSINESS.address.city}, {BUSINESS.address.region}{" "}
                      {BUSINESS.address.postal}
                    </address>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 text-signal-amber"
                  />
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-sm font-medium text-storm-navy underline-offset-4 hover:underline"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-card">
              <h3 className="font-heading text-base font-semibold text-storm-navy">
                Hours of operation
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                All times {BUSINESS.hours.timezone.replace("_", " ")}
              </p>
              <div className={cn("mt-3")}>
                <CurrentDayHoursTable />
              </div>
              {BUSINESS.hours.emergency24_7 ? (
                <div className="mt-4 rounded-md border-l-4 border-signal-amber bg-signal-amber/5 px-3 py-2">
                  <p className="text-sm font-semibold text-storm-navy">
                    24/7 emergency response
                  </p>
                  <p className="mt-0.5 text-xs text-slate-700">
                    Active leaks, storm damage, or anything letting water
                    inside? Call {BUSINESS.phone} any time — day, night,
                    weekend, holiday.
                  </p>
                </div>
              ) : (
                <p className="mt-3 text-xs text-slate-500">
                  Note: emergency-response availability outside these hours is
                  handled by phone. Confirm 24/7 emergency status when you
                  call.
                </p>
              )}
            </div>
          </div>

          {/* Right: callback form */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-heading text-h3 font-bold text-storm-navy">
              Can&rsquo;t call right now?
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Leave us your info — we&rsquo;ll call you back during your
              preferred window.
            </p>
            <div className="mt-4">
              <CallbackForm compact />
            </div>
          </div>
        </div>
      </section>

      <ServiceAreasSection
        headline="Where we work"
        description="Crews dispatched from downtown St. Louis cover the entire metro and Metro East. Click any city to see specific service notes for your area."
      />

      <FAQSection faqs={CONTACT_FAQS} />

      <CTABand
        headline="Still easier to talk?"
        subtext={`Call ${BUSINESS.phone}. We pick up.`}
        ctaClass="B"
        background="hearthstone"
        trackingLocation="contact_final_cta"
      />
    </>
  );
}
