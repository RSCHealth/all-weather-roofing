"use client";

import * as React from "react";
import Link from "next/link";
import {
  getAnalyticsConsent,
  setAnalyticsConsent,
} from "@/lib/tracking";
import { cn } from "@/lib/utils";

/**
 * Lightweight consent banner. Shown on first visit (consent === "unknown")
 * and dismissed when the user picks Accept or Decline. Decline suppresses
 * GA4 pageview + `trackEvent` dispatches. CallRail continues since call
 * tracking is a core business operation (call recording disclosure lives
 * in the privacy policy).
 */
export function CookieConsentBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Defer the localStorage read off the synchronous effect body so the
    // React 19 lint rule passes and to avoid blocking first paint.
    const id = window.setTimeout(() => {
      if (getAnalyticsConsent() === "unknown") setVisible(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  if (!visible) return null;

  const accept = () => {
    setAnalyticsConsent("accepted");
    setVisible(false);
  };
  const decline = () => {
    setAnalyticsConsent("declined");
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className={cn(
        "fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-lg border border-slate-200 bg-white p-4 shadow-cta",
        "lg:bottom-6 lg:right-6 lg:left-auto lg:mx-0 lg:max-w-md",
      )}
    >
      <p className="text-sm font-medium text-storm-navy">
        We use cookies to measure site performance.
      </p>
      <p className="mt-1 text-xs text-slate-700">
        Analytics cookies help us understand which pages help St. Louis
        homeowners. Decline and we&rsquo;ll skip the analytics — the site
        still works the same.{" "}
        <Link
          href="/privacy-policy"
          className="font-semibold text-signal-amber underline-offset-4 hover:underline"
        >
          Privacy policy
        </Link>
        .
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={accept}
          className="inline-flex h-9 flex-1 items-center justify-center rounded-md bg-storm-navy px-4 text-sm font-semibold text-white hover:bg-storm-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy focus-visible:ring-offset-2"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={decline}
          className="inline-flex h-9 flex-1 items-center justify-center rounded-md border border-storm-navy/20 bg-white px-4 text-sm font-semibold text-storm-navy hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

export default CookieConsentBanner;
