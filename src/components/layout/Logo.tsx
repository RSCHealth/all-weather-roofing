import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type LogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
};

/**
 * Placeholder brandmark for All Weather Roofing Systems.
 * Replace `LogoMark` SVG paths with the final logo file pre-launch.
 */
export function Logo({ size = "md", className, href = "/" }: LogoProps) {
  const dimensions = {
    sm: { width: 32, height: 32, text: "text-base" },
    md: { width: 40, height: 40, text: "text-lg" },
    lg: { width: 48, height: 48, text: "text-xl" },
  }[size];

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-heading font-bold text-storm-navy",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy focus-visible:ring-offset-2 focus-visible:ring-offset-hearthstone rounded-md",
        className,
      )}
      aria-label="All Weather Roofing Systems home"
    >
      <LogoMark width={dimensions.width} height={dimensions.height} />
      <span className={cn("leading-tight", dimensions.text)}>
        <span className="block">All Weather</span>
        <span className="block text-signal-amber">Roofing Systems</span>
      </span>
    </Link>
  );
}

function LogoMark({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="48" height="48" rx="10" fill="#1B3054" />
      <path
        d="M8 28 L24 14 L40 28"
        stroke="#D97B2B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 30 L12 38 L36 38 L36 30"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Logo;
