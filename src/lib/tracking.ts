/**
 * Conversion + behavior tracking. Single chokepoint for all
 * `gtag('event', ...)` dispatches. Other modules call `trackEvent(...)` —
 * never `window.gtag` directly.
 *
 * Behavior:
 *  - On the server (no `window`): no-op.
 *  - On the client with consent === "declined": no-op (cookie-banner respect).
 *  - On the client with consent === "accepted" or unset: dispatches via gtag
 *    if available, otherwise enqueues onto `dataLayer` so events landed
 *    before GA loaded still fire.
 */

import { ANALYTICS_CONFIG, type AnalyticsConsent } from "./analytics-config";

export type EventName =
  | "phone_click"
  | "callback_submit"
  | "directions_click"
  | "scroll_depth"
  | "cta_click"
  | "faq_expand"
  | "blog_read_complete"
  | "after_hours_callback_view"
  | "mobile_sticky_phone_click";

export type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    awrConsent?: AnalyticsConsent;
  }
}

// ---------------------------------------------------------------------------
// Consent — read/write a localStorage flag the cookie banner manages.
// ---------------------------------------------------------------------------

export function getAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") return "unknown";
  if (window.awrConsent) return window.awrConsent;
  try {
    const stored = window.localStorage.getItem(
      ANALYTICS_CONFIG.consentStorageKey,
    );
    if (stored === "accepted" || stored === "declined") {
      window.awrConsent = stored;
      return stored;
    }
  } catch {
    // localStorage may be unavailable (private mode, embedded contexts).
  }
  return "unknown";
}

export function setAnalyticsConsent(consent: AnalyticsConsent): void {
  if (typeof window === "undefined") return;
  window.awrConsent = consent;
  try {
    if (consent === "unknown") {
      window.localStorage.removeItem(ANALYTICS_CONFIG.consentStorageKey);
    } else {
      window.localStorage.setItem(
        ANALYTICS_CONFIG.consentStorageKey,
        consent,
      );
    }
  } catch {
    // ignore
  }
  // Notify GA of the new consent state so it can adjust pageview behavior
  // mid-session (consent mode v2 update).
  if (window.gtag) {
    if (consent === "accepted") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    } else if (consent === "declined") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }
}

// ---------------------------------------------------------------------------
// Dispatch
// ---------------------------------------------------------------------------

export function trackEvent(name: EventName, params?: EventParams): void {
  if (typeof window === "undefined") return;
  if (getAnalyticsConsent() === "declined") return;

  const payload = {
    ...(params ?? {}),
    page_location: window.location.href,
    page_path: window.location.pathname,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  } else {
    // gtag.js may not have loaded yet (lazyOnload / afterInteractive). The
    // dataLayer is the persistent queue; events drained on script load.
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: name, ...payload });
  }
}
