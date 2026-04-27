import * as React from "react";
import { cn } from "@/lib/utils";

export type DirectAnswerProps = {
  children: React.ReactNode;
  /** Optional eyebrow above the answer (e.g. "Quick answer"). */
  eyebrow?: string;
  className?: string;
};

/**
 * AEO primitive — a 40–60 word direct answer at the top of content pages.
 * The first sentence carries `data-speakable-summary` so a future Speakable
 * schema generator (Prompt 28) can target the most quotable chunk.
 */
export function DirectAnswer({ children, eyebrow = "Quick answer", className }: DirectAnswerProps) {
  return (
    <aside
      role="note"
      data-speakable-summary
      className={cn(
        "rounded-lg border-l-4 border-signal-amber bg-white p-5 shadow-card sm:p-6",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-signal-amber">
        {eyebrow}
      </p>
      <div className="mt-1 text-base leading-relaxed text-slate-900">
        {children}
      </div>
    </aside>
  );
}

export default DirectAnswer;
