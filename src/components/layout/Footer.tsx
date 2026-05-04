import * as React from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { BusinessHoursBadge } from "@/components/cta/BusinessHoursBadge";
import { BUSINESS, DAY_KEYS } from "@/lib/constants";
import { formatTime12 } from "@/lib/hours";
import { SERVICES, CITIES, RESOURCE_LINKS, SOCIAL_LINKS } from "@/lib/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-200 bg-storm-navy text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* NAP block */}
          <div className="lg:col-span-1">
            <Logo size="md" className="text-white [&>span>span:first-child]:text-white" />
            <address className="mt-4 not-italic text-sm leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-signal-amber" />
                <span>
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postal}
                </span>
              </div>
              <div className="mt-3">
                <PhoneLink
                  size="md"
                  trackingLocation="footer_nap"
                  className="text-signal-amber"
                />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Mail size={16} aria-hidden="true" className="shrink-0 text-signal-amber" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-sm text-slate-200 hover:text-white"
                >
                  {BUSINESS.email}
                </a>
              </div>
              <div className="mt-3">
                <BusinessHoursBadge className="text-slate-200" />
              </div>
              <details className="mt-2 text-xs text-slate-300">
                <summary className="cursor-pointer select-none hover:text-white">
                  View weekly hours
                </summary>
                <table className="mt-2 w-full max-w-[16rem] border-separate border-spacing-y-0.5">
                  <tbody>
                    {DAY_KEYS.map((day) => {
                      const h = BUSINESS.hours.regular[day];
                      const label =
                        !h.open || !h.close
                          ? "Closed"
                          : `${formatTime12(h.open)} – ${formatTime12(h.close)}`;
                      return (
                        <tr key={day}>
                          <td className="capitalize">{day}</td>
                          <td className="text-right">{label}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {BUSINESS.hours.emergency24_7 ? (
                  <p className="mt-2 text-xs font-semibold text-signal-amber">
                    24/7 emergency response — call anytime.
                  </p>
                ) : null}
              </details>
            </address>
          </div>

          <FooterColumn title="Services">
            {SERVICES.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Service Areas">
            {CITIES.map((c) => (
              <FooterLink key={c.slug} href={`/service-areas/${c.slug}`}>
                {c.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Resources">
            {RESOURCE_LINKS.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Trust">
            <ul className="flex flex-col gap-2 text-sm">
              <li>License #: <span className="text-slate-400">[Owner to confirm]</span></li>
              <li>Fully insured · Liability + Workers&rsquo; Comp</li>
            </ul>
            <div className="mt-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">Certifications</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <CertSlot label="GAF" />
                <CertSlot label="Owens Corning" />
                <CertSlot label="CertainTeed" />
                <CertSlot label="IKO" />
                <CertSlot label="BBB" />
              </div>
            </div>
            {SOCIAL_LINKS.length > 0 ? (
              <div className="mt-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Connect</p>
                <ul className="mt-2 flex flex-wrap gap-3 text-sm">
                  {SOCIAL_LINKS.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        className="text-slate-200 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </FooterColumn>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-400">
          <p>
            © {year} {BUSINESS.name} · Proudly serving the St. Louis metro and Metro East.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-sm font-heading font-semibold uppercase tracking-wide text-white">
        {title}
      </h2>
      <ul className="mt-4 flex flex-col gap-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-slate-200 hover:text-white focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-signal-amber"
      >
        {children}
      </Link>
    </li>
  );
}

function CertSlot({ label }: { label: string }) {
  return (
    <div
      aria-label={`${label} certified`}
      className="flex h-12 items-center justify-center rounded-md border border-white/15 bg-white/5 text-[10px] font-semibold uppercase tracking-wide text-slate-200"
    >
      {label}
    </div>
  );
}

export default Footer;
