"use client";

import * as React from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

export type CitationLinkProps = {
  href: string;
  /** Visible source name, e.g. "IBHS". */
  source: string;
  children: React.ReactNode;
  className?: string;
};

function domainOf(href: string): string {
  try {
    const u = new URL(href);
    return u.hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

/**
 * GEO primitive — styled outbound link to authoritative sources (.gov, .edu,
 * .org, manufacturer sites). Renders as: "<text> — according to <source> (<domain>)".
 */
export function CitationLink({ href, source, children, className }: CitationLinkProps) {
  const domain = domainOf(href);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("cta_click", { kind: "citation", href, source })
      }
      className={cn(
        "group inline-flex items-baseline gap-1 text-storm-navy underline decoration-signal-amber decoration-2 underline-offset-4 hover:text-signal-amber",
        className,
      )}
    >
      <span>{children}</span>
      <span className="text-xs text-slate-500">
        — according to {source} ({domain})
      </span>
      <ExternalLink size={12} aria-hidden="true" className="self-center" />
    </a>
  );
}

export default CitationLink;
