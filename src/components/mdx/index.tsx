/**
 * Shortcode components used inside blog post bodies (and ready for an
 * eventual @next/mdx migration). Re-exports primitives from the content
 * library plus blog-specific helpers.
 */
import * as React from "react";
import { AlertTriangle, Info, Lightbulb, ShieldAlert } from "lucide-react";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { CitationLink } from "@/components/content/CitationLink";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CallOrCallbackBlock } from "@/components/cta/CallOrCallbackBlock";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { CtaClass, ProcessStep } from "@/types";

export { DirectAnswer, CitationLink };

// ---------------------------------------------------------------------------
// CalloutBox — generic in-content callout (info, warn, tip, alert variants)
// ---------------------------------------------------------------------------

export type CalloutBoxVariant = "info" | "warn" | "tip" | "alert";

const calloutMeta: Record<
  CalloutBoxVariant,
  { icon: typeof Info; classes: string; iconClass: string }
> = {
  info: {
    icon: Info,
    classes: "border-storm-navy/30 bg-storm-navy/5",
    iconClass: "text-storm-navy",
  },
  warn: {
    icon: AlertTriangle,
    classes: "border-warning/30 bg-warning/10",
    iconClass: "text-warning",
  },
  tip: {
    icon: Lightbulb,
    classes: "border-success/30 bg-success/10",
    iconClass: "text-success",
  },
  alert: {
    icon: ShieldAlert,
    classes: "border-alert-crimson/30 bg-alert-crimson/10",
    iconClass: "text-alert-crimson",
  },
};

export function CalloutBox({
  variant = "info",
  title,
  children,
  className,
}: {
  variant?: CalloutBoxVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const meta = calloutMeta[variant];
  const Icon = meta.icon;
  return (
    <aside
      className={cn(
        "my-6 rounded-lg border-l-4 p-5 text-sm",
        meta.classes,
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <Icon size={20} aria-hidden="true" className={cn("mt-0.5 shrink-0", meta.iconClass)} />
        <div className="flex-1">
          {title ? (
            <p className="font-heading text-base font-semibold text-storm-navy">{title}</p>
          ) : null}
          <div className={cn("text-slate-700", title && "mt-1")}>{children}</div>
        </div>
      </div>
    </aside>
  );
}

// ---------------------------------------------------------------------------
// ComparisonTable — two-column compare/contrast
// ---------------------------------------------------------------------------

export function ComparisonTable({
  caption,
  columns,
}: {
  caption?: string;
  columns: { title: string; items: string[] }[];
}) {
  return (
    <div className="my-6 grid gap-4 md:grid-cols-2">
      {caption ? <p className="sr-only">{caption}</p> : null}
      {columns.map((col) => (
        <div
          key={col.title}
          className="rounded-lg border border-slate-200 bg-white p-5 shadow-card"
        >
          <h3 className="font-heading text-base font-semibold text-storm-navy">
            {col.title}
          </h3>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm text-slate-700">
            {col.items.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden="true" className="mt-1.5 size-1 shrink-0 rounded-full bg-storm-navy" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// CostTable — semantic cost / pricing table
// ---------------------------------------------------------------------------

export function CostTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-card">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="border-b border-slate-200 bg-slate-50">
          <tr>
            {headers.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-heading text-storm-navy">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) =>
                ci === 0 ? (
                  <th key={ci} scope="row" className="px-4 py-3 font-medium text-slate-700">
                    {cell}
                  </th>
                ) : (
                  <td key={ci} className="px-4 py-3 text-slate-900">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ---------------------------------------------------------------------------
// PhoneCTAInline — drops the adaptive CallOrCallbackBlock into post body
// ---------------------------------------------------------------------------

export function PhoneCTAInline({
  ctaClass = "C",
  trackingLocation,
  className,
}: {
  ctaClass?: CtaClass;
  trackingLocation: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "my-8 rounded-lg border border-slate-200 bg-hearthstone p-5 shadow-card",
        className,
      )}
    >
      <p className="font-heading text-base font-semibold text-storm-navy">
        Ready to talk to a real St. Louis roofer?
      </p>
      <p className="mt-1 text-sm text-slate-700">
        Call <strong>{BUSINESS.phone}</strong> or request a callback below — no pressure.
      </p>
      <div className="mt-4">
        <CallOrCallbackBlock ctaClass={ctaClass} trackingLocation={trackingLocation} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HowToList — emits HowTo schema alongside numbered steps
// ---------------------------------------------------------------------------

export function HowToList({
  name,
  steps,
}: {
  name: string;
  steps: ProcessStep[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };
  return (
    <>
      <ol className="my-6 flex flex-col gap-4">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-card"
          >
            <span
              aria-hidden="true"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-signal-amber font-heading text-base font-bold text-white"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="font-heading text-base font-semibold text-storm-navy">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// PhoneInline — short "call us at X" inline phrasing with tracking
// ---------------------------------------------------------------------------

export function PhoneInline({
  trackingLocation,
  children,
}: {
  trackingLocation: string;
  children?: React.ReactNode;
}) {
  return (
    <PhoneLink
      size="md"
      trackingLocation={trackingLocation}
      className="font-semibold"
      showIcon={false}
    >
      {children ?? BUSINESS.phone}
    </PhoneLink>
  );
}
