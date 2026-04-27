import * as React from "react";
import { Mic } from "lucide-react";
import { cn } from "@/lib/utils";

export type VoiceQuickAnswerProps = {
  /** The voice-style query, e.g. "How much does a roof cost in St. Louis?" */
  query: string;
  /** ≤30-word direct answer. Kept short by design — voice assistants
   *  truncate longer responses. */
  answer: string;
  className?: string;
};

/**
 * Voice-search Quick Answer block. Designed for voice-assistant extraction
 * (Google Assistant, Siri, Alexa) and Featured Snippet eligibility.
 * Wraps the answer in `[data-speakable-summary]` so the page-level Speakable
 * schema picks it up.
 */
export function VoiceQuickAnswer({
  query,
  answer,
  className,
}: VoiceQuickAnswerProps) {
  return (
    <aside
      className={cn(
        "my-6 rounded-lg border border-storm-navy/20 bg-storm-navy/5 p-5",
        className,
      )}
      aria-label="Voice search quick answer"
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-storm-navy">
        <Mic size={14} aria-hidden="true" />
        Voice search · quick answer
      </div>
      <p className="mt-2 font-heading text-base font-semibold text-storm-navy">
        {query}
      </p>
      <p
        data-speakable-summary
        className="mt-1 text-sm leading-relaxed text-slate-700"
      >
        {answer}
      </p>
    </aside>
  );
}

export default VoiceQuickAnswer;
