import type { Metadata } from "next";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | All Weather Roofing Systems",
  description:
    "Terms governing the use of allweatherroofingsystems.com and roofing services provided by All Weather Roofing Systems.",
  canonical: "/terms-of-service",
  noindex: true,
});

const EFFECTIVE_DATE = "April 25, 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <div className="bg-hearthstone">
        <div className="mx-auto max-w-4xl px-6 pt-6">
          <Breadcrumb items={[{ label: "Terms of Service" }]} />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-10">
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Effective: <time dateTime="2026-04-25">{EFFECTIVE_DATE}</time>
          </p>
        </div>
      </div>

      <article className="mx-auto w-full max-w-3xl px-6 py-12 lg:py-16">
        <div className="flex flex-col gap-5 text-base leading-relaxed text-slate-700">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
            the website at <strong>{BUSINESS.url}</strong> and the roofing
            services provided by <strong>{BUSINESS.name}</strong>. By using
            the site, requesting an estimate, or engaging us for services,
            you agree to these Terms.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Service scope
          </h2>
          <p>
            We provide residential and commercial roofing services across the
            St. Louis, Missouri metropolitan area and the Illinois Metro
            East. Specific services include roof repair, full replacement,
            storm-damage restoration, emergency response, metal roofing,
            commercial flat-roof systems, industrial roofing, and roofing
            inspections. The exact scope of work for any project is defined
            in a written, signed estimate or contract; nothing on this
            website constitutes a contractual offer until a written
            agreement is signed by both parties.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Estimates and pricing
          </h2>
          <p>
            Estimates are provided free and without obligation, based on
            visible roof condition at the time of inspection and reasonable
            assumptions about decking and substrate condition. Decking and
            structural damage that cannot be observed before tear-off may
            result in additional charges, billed at the per-sheet or per-hour
            rate specified on your estimate. We will document any change in
            scope in writing and obtain your approval before performing
            additional work that changes the contract total.
          </p>
          <p>
            Estimates are valid for 30 days from the date issued unless
            otherwise stated. Material prices and lead times are subject to
            change after that window.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Warranty
          </h2>
          <p>
            <strong>Workmanship warranty.</strong> We provide a written
            workmanship warranty on every installation, covering installation
            defects for the period specified in your contract (typically 5–10
            years on residential replacement, 2 years on commercial work, with
            specific terms varying by project). The workmanship warranty does
            not cover damage caused by acts of God (severe storms exceeding
            material ratings), subsequent owner alterations, neglect, or
            normal wear and tear.
          </p>
          <p>
            <strong>Manufacturer warranty.</strong> Roofing materials carry
            warranties from the manufacturer (GAF, Owens Corning, CertainTeed,
            IKO, and others). These warranties cover material defects per the
            manufacturer&rsquo;s specific terms, are administered by the
            manufacturer (not us), and may include registration requirements,
            transferability conditions, and pro-ration schedules. We register
            applicable manufacturer warranties on your behalf at project
            completion.
          </p>
          <p>
            <strong>Disclaimer.</strong> EXCEPT AS EXPRESSLY STATED IN THE
            WRITTEN WORKMANSHIP WARRANTY OR APPLICABLE MANUFACTURER WARRANTY,
            ALL OTHER WARRANTIES — EXPRESS OR IMPLIED, INCLUDING WARRANTIES
            OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE — ARE
            DISCLAIMED TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Insurance claim work
          </h2>
          <p>
            For storm-damage projects involving an insurance claim, we work
            on your behalf to document damage and meet adjusters on-site.
            We are not a public adjuster — that is a regulated role we do
            not perform — and we do not negotiate claim payments. The
            insurance contract remains between you and your carrier; we
            provide documentation, scope-of-loss input, and supplements as
            warranted by the actual project requirements.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Payment
          </h2>
          <p>
            Payment terms are specified in your estimate or contract.
            Typical residential terms include a deposit at scheduling
            (usually 25–35% of contract value) with the balance due on
            completion. Larger or commercial projects may have milestone
            payment structures. We never request full payment up front and
            never start work without a signed, itemized contract. We accept
            check, ACH, and major credit cards; credit-card processing
            surcharges, if any, are disclosed before payment.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Limitation of liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL
            LIABILITY FOR ANY CLAIM ARISING FROM OR RELATED TO THESE TERMS,
            THE WEBSITE, OR THE SERVICES IS LIMITED TO THE AMOUNTS PAID TO
            US UNDER THE APPLICABLE PROJECT CONTRACT. WE ARE NOT LIABLE FOR
            INDIRECT, CONSEQUENTIAL, INCIDENTAL, OR PUNITIVE DAMAGES,
            INCLUDING LOST PROFITS OR LOSS OF USE.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion or limitation of
            certain damages; in such cases the limitation applies only to
            the maximum extent permitted.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Use of the website
          </h2>
          <p>
            You agree to use this website for lawful purposes only. You will
            not attempt to interfere with the site&rsquo;s operation,
            misrepresent your identity, scrape content for redistribution
            without permission, or use the site to send unsolicited
            communications. We reserve the right to refuse or restrict
            access at our discretion.
          </p>
          <p>
            All content on this site — copy, photographs, design, and the
            organized presentation of pricing and service information — is
            owned by All Weather Roofing Systems or licensed to us. You may
            view and reference content for personal, non-commercial purposes;
            republication or redistribution requires written permission.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Third-party links
          </h2>
          <p>
            The site links to third-party resources (manufacturer pages,
            government agencies, certification bodies). We don&rsquo;t
            control those sites and aren&rsquo;t responsible for their
            content, privacy practices, or terms.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Governing law and jurisdiction
          </h2>
          <p>
            These Terms are governed by the laws of the State of Missouri,
            without regard to conflict-of-law principles. Any dispute
            arising from or related to these Terms or the services will be
            brought exclusively in the state or federal courts located in
            St. Louis County, Missouri, and you consent to the personal
            jurisdiction of those courts.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Changes to these Terms
          </h2>
          <p>
            We may update these Terms from time to time. The
            &ldquo;Effective&rdquo; date above reflects the most recent
            update. Continued use of the site after a change constitutes
            acceptance of the updated Terms; if you object to a change,
            stop using the site.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Contact
          </h2>
          <p>
            Questions about these Terms? Contact us at{" "}
            <strong>{BUSINESS.phone}</strong> or{" "}
            <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-signal-amber underline-offset-4 hover:underline">
              {BUSINESS.email}
            </a>
            .
          </p>
        </div>
      </article>
    </>
  );
}
