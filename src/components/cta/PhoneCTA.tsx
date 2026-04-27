"use client";

import * as React from "react";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { BusinessHoursBadge } from "@/components/cta/BusinessHoursBadge";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Size } from "@/types";

export type PhoneCTAVariant = "amber" | "navy" | "outline" | "emergency";

export type PhoneCTAProps = {
  size?: Size;
  variant?: PhoneCTAVariant;
  showHours?: boolean;
  label?: string;
  trackingLocation: string;
  className?: string;
  fullWidth?: boolean;
};

const variantClasses: Record<PhoneCTAVariant, string> = {
  amber:
    "bg-signal-amber text-white shadow-cta hover:bg-signal-amber/90",
  navy:
    "bg-storm-navy text-white hover:bg-storm-navy/90",
  outline:
    "border-2 border-storm-navy bg-transparent text-storm-navy hover:bg-storm-navy hover:text-white",
  emergency:
    "bg-alert-crimson text-white animate-[pulse-cta_2s_ease-in-out_infinite] hover:bg-alert-crimson/90",
};

export function PhoneCTA({
  size = "lg",
  variant = "amber",
  showHours = true,
  label,
  trackingLocation,
  className,
  fullWidth,
}: PhoneCTAProps) {
  const display = label ?? `Call ${BUSINESS.phone}`;
  return (
    <div className={cn("flex flex-col items-start gap-1.5", fullWidth && "w-full", className)}>
      <PhoneLink
        variant="button"
        size={size}
        trackingLocation={trackingLocation}
        label={display}
        className={cn(
          // Reset PhoneLink's default amber styling so variant classes win.
          "shadow-none bg-transparent",
          variantClasses[variant],
          fullWidth && "w-full",
        )}
      />
      {showHours ? <BusinessHoursBadge /> : null}
    </div>
  );
}

export default PhoneCTA;
