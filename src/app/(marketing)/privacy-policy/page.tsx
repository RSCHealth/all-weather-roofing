import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | All Weather Roofing Systems",
  description:
    "How All Weather Roofing Systems collects, uses, and protects information from website visitors and customers.",
  canonical: "/privacy-policy",
  noindex: true,
});

const EFFECTIVE_DATE = "April 25, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-hearthstone">
        <div className="mx-auto max-w-4xl px-6 pt-6">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-10">
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Effective: <time dateTime="2026-04-25">{EFFECTIVE_DATE}</time>
          </p>
        </div>
      </div>

      <article className="mx-auto w-full max-w-3xl px-6 py-12 lg:py-16">
        <div className="flex flex-col gap-5 text-base leading-relaxed text-slate-700">
          <p>
            <strong>{BUSINESS.name}</strong> (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
            Privacy Policy explains what information we collect when you visit{" "}
            <Link href="/" className="font-semibold text-signal-amber underline-offset-4 hover:underline">
              {BUSINESS.url}
            </Link>{" "}
            or contact us by phone or form, how we use that information, and
            the choices you have. Questions about this policy can be directed
            to <strong>{BUSINESS.phone}</strong> or{" "}
            <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-signal-amber underline-offset-4 hover:underline">
              {BUSINESS.email}
            </a>
            .
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Information we collect
          </h2>
          <p>
            We collect information you provide directly to us — for example,
            when you fill out the callback form, request an estimate, send us
            an email, or call our office. The information we receive directly
            includes your name, phone number, address, email (if provided),
            and any details you share about your roofing project.
          </p>
          <p>
            We also collect limited information automatically when you browse
            the site, including your IP address, browser type, device type,
            referring URL, and pages visited. This information is used in
            aggregate to understand how visitors use the site and to improve
            content and user experience.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Cookies and analytics
          </h2>
          <p>
            We use cookies and similar technologies to operate the site and
            measure aggregate traffic. We use Google Analytics and may use
            other privacy-respecting analytics tools to understand site usage.
            These tools may set cookies on your browser; you can disable
            cookies in your browser settings or use opt-out tools provided by
            individual analytics services.
          </p>
          <p>
            We may use call-tracking software (such as CallRail) to attribute
            phone calls to the marketing source that drove them. Call-tracking
            assigns dynamic phone numbers and routes calls to our main line.
            Calls may be recorded for quality and training purposes; if you do
            not want a call recorded, you can ask the team member at the
            beginning of the call.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            How we use your information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="ml-6 list-disc text-base text-slate-700">
            <li>Respond to your inquiries and schedule services</li>
            <li>Provide written estimates and project documentation</li>
            <li>Communicate about scheduled appointments and active projects</li>
            <li>Process payments for services rendered</li>
            <li>Comply with legal obligations and protect our legal interests</li>
            <li>
              Send occasional follow-up communications about your project or
              roof maintenance reminders (you can opt out at any time)
            </li>
          </ul>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Sharing your information
          </h2>
          <p>
            We do not sell, rent, or trade your personal information. We share
            information only with:
          </p>
          <ul className="ml-6 list-disc">
            <li>
              <strong>Service providers</strong> who help us operate our
              business — for example, payment processors, accounting software,
              and the call-tracking and analytics tools described above. These
              providers are bound by confidentiality obligations and are only
              authorized to use your information for the specific service they
              provide to us.
            </li>
            <li>
              <strong>Insurance carriers and adjusters</strong> when we are
              working on a storm-damage insurance claim on your behalf, with
              your authorization.
            </li>
            <li>
              <strong>Legal and regulatory authorities</strong> when required
              by law (subpoena, court order, valid governmental request).
            </li>
          </ul>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Your choices
          </h2>
          <p>
            You can request access to, correction of, or deletion of your
            personal information by contacting us at <strong>{BUSINESS.phone}</strong>{" "}
            or{" "}
            <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-signal-amber underline-offset-4 hover:underline">
              {BUSINESS.email}
            </a>
            . We will respond within a reasonable timeframe consistent with
            applicable law.
          </p>
          <p>
            <strong>California residents (CCPA):</strong> California residents
            have specific rights regarding personal information, including the
            right to know what we collect, request deletion, and opt out of
            certain disclosures. We do not sell personal information.
          </p>
          <p>
            <strong>EU/UK residents (GDPR):</strong> If you are in the EU or
            UK, you have rights of access, rectification, erasure, restriction,
            portability, and objection regarding your personal data. We process
            personal data on the basis of consent, contract performance, and
            legitimate interest depending on the context.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Data security
          </h2>
          <p>
            We use reasonable technical and organizational safeguards to
            protect personal information from unauthorized access, disclosure,
            alteration, or destruction. No method of transmission over the
            internet is 100% secure, and we cannot guarantee absolute
            security; we treat your information with the same level of care we
            would expect for our own.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Data retention
          </h2>
          <p>
            We retain customer information for as long as necessary to provide
            services, fulfill legal obligations (including tax and warranty
            records), and resolve disputes. Marketing-only contact information
            is retained until you opt out.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Children&rsquo;s privacy
          </h2>
          <p>
            Our services are intended for adults. We do not knowingly collect
            personal information from children under 13. If you believe a
            child has provided us with personal information, contact us so we
            can delete it.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Third-party links
          </h2>
          <p>
            Our site may link to third-party websites (manufacturer pages,
            certification bodies, government resources). We are not
            responsible for the privacy practices of those sites. Review their
            privacy policies before sharing information.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Changes to this policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The
            &ldquo;Effective&rdquo; date at the top reflects the most recent
            update. We&rsquo;ll post any material changes prominently on this
            page; minor changes (formatting, clarifications) may be made
            without specific notice.
          </p>

          <h2 className="mt-6 font-heading text-h3 font-bold text-storm-navy">
            Contact us
          </h2>
          <p>
            Questions about privacy? Call <strong>{BUSINESS.phone}</strong> or
            email{" "}
            <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-signal-amber underline-offset-4 hover:underline">
              {BUSINESS.email}
            </a>
            . You can also write to us at {BUSINESS.address.street},{" "}
            {BUSINESS.address.city}, {BUSINESS.address.region}{" "}
            {BUSINESS.address.postal}.
          </p>
        </div>
      </article>
    </>
  );
}
