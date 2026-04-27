/**
 * Analytics configuration. Pulled from public env vars so values can be
 * swapped per-environment (preview vs. production) without redeploying
 * source.
 */

export const ANALYTICS_CONFIG = {
  /** GA4 measurement ID, e.g. "G-XXXXXXXXXX". Empty disables GA4 entirely. */
  ga4Id: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "",

  /**
   * CallRail account + container IDs for swap.js. Empty disables CallRail.
   * Format: "https://cdn.callrail.com/companies/<account>/<container>/12/swap.js".
   * Owner fills in once CallRail account is provisioned.
   */
  callRailSrc: process.env.NEXT_PUBLIC_CALLRAIL_SWAP_SRC ?? "",

  /** localStorage key for cookie/analytics consent. */
  consentStorageKey: "awr-analytics-consent",
} as const;

export type AnalyticsConsent = "accepted" | "declined" | "unknown";
