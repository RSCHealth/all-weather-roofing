"use client";

import * as React from "react";
import { isOpenNow, closingTimeLabel, nextOpenLabel } from "@/lib/hours";
import { cn } from "@/lib/utils";

type HoursState = {
  ready: boolean;
  isOpen: boolean;
  closingTime: string | null;
  nextOpen: string;
};

/**
 * Centralized hook for the open/closed state. Server renders the neutral
 * `ready: false` state; client recomputes on mount + once per minute. This
 * prevents stale-build hydration where a midnight visitor sees "Open now"
 * because the page was last built at noon.
 */
export function useHours(): HoursState {
  const [state, setState] = React.useState<HoursState>({
    ready: false,
    isOpen: false,
    closingTime: null,
    nextOpen: "",
  });

  React.useEffect(() => {
    const compute = () => {
      const now = new Date();
      setState({
        ready: true,
        isOpen: isOpenNow(now),
        closingTime: closingTimeLabel(now),
        nextOpen: nextOpenLabel(now),
      });
    };
    compute();
    const id = window.setInterval(compute, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return state;
}

export type BusinessHoursBadgeProps = {
  className?: string;
  /** When true, render only the dot + short text (no "Currently closed" prefix). */
  compact?: boolean;
};

export function BusinessHoursBadge({ className, compact }: BusinessHoursBadgeProps) {
  const hours = useHours();

  // Server / pre-hydration: render an invisible placeholder of the same height
  // so the surrounding layout doesn't shift on hydration.
  if (!hours.ready) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 text-xs font-medium text-transparent",
          className,
        )}
        aria-hidden="true"
      >
        <span className="size-2 rounded-full bg-transparent" />
        Loading hours…
      </span>
    );
  }

  if (hours.isOpen) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 text-xs font-medium text-success",
          className,
        )}
      >
        <span className="size-2 rounded-full bg-success" aria-hidden="true" />
        {compact
          ? "Open now"
          : `Open now${hours.closingTime ? ` · closes ${hours.closingTime}` : ""}`}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium text-signal-amber",
        className,
      )}
    >
      <span className="size-2 rounded-full bg-signal-amber" aria-hidden="true" />
      {compact ? "Closed" : `Currently closed · ${hours.nextOpen}`}
    </span>
  );
}

export default BusinessHoursBadge;
