import * as React from "react";

export type FactualClaimProps = {
  /** The cited claim text. */
  children: React.ReactNode;
  /** URL of the authoritative source backing the claim. */
  citationHref: string;
  /** Optional: short label for the source ("IBHS", "Missouri DOI", etc.). */
  citationSource?: string;
};

/**
 * Wraps an inline factual claim with `data-citation-href` so the markup is
 * ClaimReview-ready. The claim renders as plain text — no visual
 * decoration — to avoid disrupting reading flow. Future Prompt 35 QA will
 * verify each `factual-claim` has a corresponding citation on the page.
 */
export function FactualClaim({
  children,
  citationHref,
  citationSource,
}: FactualClaimProps) {
  return (
    <span
      className="factual-claim"
      data-citation-href={citationHref}
      data-citation-source={citationSource}
    >
      {children}
    </span>
  );
}

export default FactualClaim;
