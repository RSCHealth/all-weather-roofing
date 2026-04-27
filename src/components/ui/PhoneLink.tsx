"use client";

import * as React from "react";
import { Phone } from "lucide-react";
import { BUSINESS, getDisplayPhone } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

export type PhoneLinkVariant = "inline" | "button";
export type PhoneLinkSize = "sm" | "md" | "lg" | "hero";

export type PhoneLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  variant?: PhoneLinkVariant;
  size?: PhoneLinkSize;
  showIcon?: boolean;
  /** Optional override for the visible text. Defaults to BUSINESS.phone. */
  label?: string;
  /** Page/section identifier passed to trackEvent('phone_click', { location }). */
  trackingLocation: string;
};

const buttonSizeClasses: Record<PhoneLinkSize, string> = {
  sm:   "h-9 px-3 text-sm gap-1.5",
  md:   "h-11 px-4 text-base gap-2",
  lg:   "min-h-12 px-6 text-base sm:text-lg gap-2",
  hero: "min-h-14 px-7 text-lg sm:text-xl gap-2.5",
};

const buttonIconSizes: Record<PhoneLinkSize, number> = {
  sm: 16, md: 18, lg: 20, hero: 24,
};

const inlineSizeClasses: Record<PhoneLinkSize, string> = {
  sm:   "text-sm gap-1",
  md:   "text-base gap-1.5",
  lg:   "text-lg gap-2",
  hero: "text-xl gap-2",
};

const inlineIconSizes: Record<PhoneLinkSize, number> = {
  sm: 14, md: 16, lg: 18, hero: 20,
};

export function PhoneLink({
  variant = "inline",
  size = "md",
  showIcon = true,
  label,
  trackingLocation,
  className,
  children,
  onClick,
  ...props
}: PhoneLinkProps) {
  const displayPhone = getDisplayPhone();
  const display = label ?? displayPhone.phone;

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    trackEvent("phone_click", { location: trackingLocation, variant, size });
    onClick?.(e);
  };

  if (variant === "button") {
    const iconSize = buttonIconSizes[size];
    return (
      <a
        href={displayPhone.phoneHref}
        data-canonical-phone={BUSINESS.phoneDigits}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-heading font-semibold",
          "bg-signal-amber text-white shadow-cta",
          "transition-colors hover:bg-signal-amber/90",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy focus-visible:ring-offset-2 focus-visible:ring-offset-hearthstone",
          buttonSizeClasses[size],
          className,
        )}
        {...props}
      >
        {showIcon ? <Phone size={iconSize} aria-hidden="true" /> : null}
        {children ?? display}
      </a>
    );
  }

  const iconSize = inlineIconSizes[size];
  return (
    <a
      href={displayPhone.phoneHref}
      data-canonical-phone={BUSINESS.phoneDigits}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center font-heading font-semibold text-signal-amber",
        "underline-offset-4 hover:underline",
        "focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-storm-navy focus-visible:ring-offset-2 focus-visible:ring-offset-hearthstone",
        inlineSizeClasses[size],
        className,
      )}
      {...props}
    >
      {showIcon ? <Phone size={iconSize} aria-hidden="true" /> : null}
      {children ?? display}
    </a>
  );
}

export default PhoneLink;
