"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { PhoneCTA } from "@/components/cta/PhoneCTA";
import { useHours } from "@/components/cta/BusinessHoursBadge";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { CtaClass } from "@/types";

/**
 * CallbackForm is dynamically imported so phone-primary code paths
 * don't ship react-hook-form / zod / the form UI to clients who never
 * expand the callback. The form renders eagerly only when the page is
 * in closed-hours state on a Class B/C page (where the form is the
 * primary CTA), or when the user clicks "Or request a callback".
 */
const CallbackForm = dynamic(
  () =>
    import("@/components/forms/CallbackForm").then((m) => ({
      default: m.CallbackForm,
    })),
  {
    loading: () => (
      <div
        aria-hidden="true"
        className="w-full max-w-md min-h-64 rounded-lg border border-slate-200 bg-white shadow-card"
      />
    ),
  },
);

export type CallOrCallbackBlockProps = {
  ctaClass: CtaClass;
  trackingLocation: string;
  className?: string;
  /** Pulled into the CallbackForm's hidden source fields. */
  sourceCity?: string;
  sourceService?: string;
  /** When true the callback form starts expanded inline. */
  defaultExpanded?: boolean;
};

/**
 * Adaptive dual CTA used in every hero and most CTA bands.
 * - Class A (Emergency) or 24/7: phone-primary regardless of hours.
 * - Open business hours (Class B/C): phone primary, callback link secondary.
 * - Closed (Class B/C): callback form primary, phone link secondary.
 */
export function CallOrCallbackBlock({
  ctaClass,
  trackingLocation,
  className,
  sourceCity,
  sourceService,
  defaultExpanded,
}: CallOrCallbackBlockProps) {
  const hours = useHours();
  const [callbackExpanded, setCallbackExpanded] = React.useState(!!defaultExpanded);

  const phonePrimary =
    ctaClass === "A" ||
    BUSINESS.hours.emergency24_7 ||
    !hours.ready ||
    hours.isOpen;

  if (phonePrimary) {
    return (
      <div className={cn("flex flex-col items-start gap-3", className)}>
        <PhoneCTA
          size="lg"
          variant={ctaClass === "A" ? "emergency" : "amber"}
          showHours
          trackingLocation={trackingLocation}
        />
        {!callbackExpanded ? (
          <button
            type="button"
            onClick={() => setCallbackExpanded(true)}
            className="text-sm font-medium text-slate-700 underline-offset-4 hover:text-storm-navy hover:underline focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-storm-navy"
          >
            Or request a callback
          </button>
        ) : (
          <CallbackForm
            compact
            sourceCity={sourceCity}
            sourceService={sourceService}
            className="w-full max-w-md"
          />
        )}
      </div>
    );
  }

  // Closed state — callback primary
  return (
    <div className={cn("flex flex-col items-start gap-3", className)}>
      <CallbackForm
        sourceCity={sourceCity}
        sourceService={sourceService}
        className="w-full max-w-md"
      />
      <PhoneCTA
        size="md"
        variant="outline"
        showHours={false}
        label={`Or call anyway — ${BUSINESS.phone}`}
        trackingLocation={`${trackingLocation}_after_hours`}
      />
    </div>
  );
}

export default CallOrCallbackBlock;
