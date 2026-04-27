"use client";

import * as React from "react";
import { trackEvent } from "@/lib/tracking";

const THRESHOLDS = [25, 50, 75, 100] as const;

/**
 * Fires `scroll_depth` events at 25/50/75/100% page-scroll. Each threshold
 * fires at most once per page navigation. Mounted once via the marketing
 * layout so it covers every content page without per-page wiring.
 */
export function ScrollDepthTracker() {
  React.useEffect(() => {
    const fired = new Set<number>();

    const handler = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop + window.innerHeight;
      const total = doc.scrollHeight;
      if (total <= window.innerHeight) return;
      const pct = (scrolled / total) * 100;
      for (const t of THRESHOLDS) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          trackEvent("scroll_depth", { percent: t });
        }
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return null;
}

export default ScrollDepthTracker;
