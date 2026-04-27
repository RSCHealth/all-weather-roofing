import * as React from "react";
import { CallOrCallbackBlock } from "@/components/cta/CallOrCallbackBlock";
import { cn } from "@/lib/utils";
import type { CtaClass } from "@/types";

export type CTABandBackground = "navy" | "amber-tint" | "hearthstone";

export type CTABandProps = {
  headline: string;
  subtext?: string;
  ctaClass: CtaClass;
  background?: CTABandBackground;
  trackingLocation: string;
  className?: string;
};

const backgroundClasses: Record<CTABandBackground, string> = {
  navy: "bg-storm-navy text-white",
  "amber-tint": "bg-signal-amber/10 text-storm-navy",
  hearthstone: "bg-hearthstone text-storm-navy",
};

const subtextClasses: Record<CTABandBackground, string> = {
  navy: "text-slate-200",
  "amber-tint": "text-slate-700",
  hearthstone: "text-slate-700",
};

export function CTABand({
  headline,
  subtext,
  ctaClass,
  background = "hearthstone",
  trackingLocation,
  className,
}: CTABandProps) {
  return (
    <section className={cn("w-full", backgroundClasses[background], className)}>
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <div className="lg:max-w-2xl">
          <h2 className="font-heading text-h2 font-bold leading-tight">
            {headline}
          </h2>
          {subtext ? (
            <p className={cn("mt-3 text-base", subtextClasses[background])}>
              {subtext}
            </p>
          ) : null}
        </div>
        <div className="lg:shrink-0">
          <CallOrCallbackBlock
            ctaClass={ctaClass}
            trackingLocation={trackingLocation}
          />
        </div>
      </div>
    </section>
  );
}

export default CTABand;
