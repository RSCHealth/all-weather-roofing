"use client";

import * as React from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { useHours } from "@/components/cta/BusinessHoursBadge";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { CtaClass } from "@/types";

export type StickyMobilePhoneBarProps = {
  ctaClass?: CtaClass;
};

/**
 * Fixed bottom bar shown on mobile (< lg). Phone-dominant by default; flips
 * to "Request callback" primary when business is closed AND page is not Class A.
 */
export function StickyMobilePhoneBar({ ctaClass = "B" }: StickyMobilePhoneBarProps) {
  const hours = useHours();
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    let lastY = window.scrollY;
    let idleTimer: number | null = null;

    const handleScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      if (delta < -10) {
        // Scrolling up — user is reading; hide the bar.
        setHidden(true);
        if (idleTimer) window.clearTimeout(idleTimer);
        idleTimer = window.setTimeout(() => setHidden(false), 600);
      } else if (delta > 10) {
        // Scrolling down — surface the bar.
        setHidden(false);
      }

      lastY = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimer) window.clearTimeout(idleTimer);
    };
  }, []);

  // Class A (emergency) or 24/7 always keeps phone-primary regardless of hours.
  const keepPhonePrimary =
    ctaClass === "A" || BUSINESS.hours.emergency24_7 || !hours.ready || hours.isOpen;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white shadow-card lg:hidden",
        "transition-transform duration-200",
        hidden ? "translate-y-full" : "translate-y-0",
      )}
      role="region"
      aria-label="Quick contact"
    >
      <div className="flex h-16 items-stretch">
        {keepPhonePrimary ? (
          <>
            <PhoneLink
              variant="button"
              size="md"
              trackingLocation="sticky_mobile_primary"
              aria-label={`Call ${BUSINESS.name}`}
              className="m-2 flex-[7] rounded-md gap-2"
            >
              <span className="font-semibold">Call Now</span>
              <span className="hidden text-xs font-normal sm:inline">
                · {BUSINESS.phone}
              </span>
            </PhoneLink>
            <Link
              href="/free-estimate"
              className="m-2 flex flex-[3] items-center justify-center gap-1.5 rounded-md border-2 border-storm-navy text-sm font-semibold text-storm-navy hover:bg-storm-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
            >
              <MessageSquare size={16} aria-hidden="true" />
              Callback
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/free-estimate"
              className="m-2 flex flex-[7] items-center justify-center gap-2 rounded-md bg-signal-amber px-3 text-base font-semibold text-white shadow-cta hover:bg-signal-amber/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
            >
              <MessageSquare size={18} aria-hidden="true" />
              Request Callback
            </Link>
            <PhoneLink
              variant="inline"
              size="sm"
              trackingLocation="sticky_mobile_after_hours"
              aria-label={`Call ${BUSINESS.name} anyway`}
              className="m-2 flex flex-[3] items-center justify-center rounded-md border-2 border-storm-navy text-storm-navy hover:bg-storm-navy hover:text-white"
              showIcon={true}
            >
              <span className="text-sm font-semibold">Call anyway</span>
            </PhoneLink>
          </>
        )}
      </div>
    </div>
  );
}

export default StickyMobilePhoneBar;
