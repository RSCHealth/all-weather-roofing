import * as React from "react";
import Script from "next/script";
import { ANALYTICS_CONFIG } from "@/lib/analytics-config";

/**
 * Renders GA4 + CallRail third-party scripts.
 *
 * - GA4 is `afterInteractive` so pageviews still fire reliably without
 *   blocking LCP. Consent Mode v2 is initialized in `denied` state; the
 *   cookie banner upgrades to `granted` on acceptance.
 * - CallRail uses `lazyOnload` — the dynamic-number swap touches only
 *   text content of existing elements (PhoneLink renders the tracking
 *   number eagerly), so deferring the script doesn't change the
 *   user-visible number on first paint and avoids CLS.
 *
 * Both scripts no-op when their respective env vars are unset, so the
 * site builds and runs locally without any analytics keys.
 */
export function Analytics() {
  return (
    <>
      {ANALYTICS_CONFIG.ga4Id ? (
        <>
          <Script
            id="gtag-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.ga4Id}`}
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500,
              });
              gtag('js', new Date());
              gtag('config', '${ANALYTICS_CONFIG.ga4Id}', {
                send_page_view: true,
                anonymize_ip: true,
              });
            `}
          </Script>
        </>
      ) : null}

      {ANALYTICS_CONFIG.callRailSrc ? (
        <Script
          id="callrail-swap"
          strategy="lazyOnload"
          src={ANALYTICS_CONFIG.callRailSrc}
        />
      ) : null}
    </>
  );
}

export default Analytics;
