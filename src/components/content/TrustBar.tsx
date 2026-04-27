import * as React from "react";
import { ShieldCheck, Star, Award, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export type TrustBarStat = {
  value: string;
  label: string;
};

export type TrustBarProps = {
  /** Override default stat list. */
  stats?: TrustBarStat[];
  /** Display certification logo slots. Strings render as text fallbacks until logos arrive. */
  certifications?: string[];
  /** Aggregate review rating chip — only render when ≥5 real reviews exist. */
  rating?: { value: number; count: number };
  className?: string;
};

const DEFAULT_STATS: TrustBarStat[] = [
  { value: "Licensed", label: "MO + IL" },
  { value: "Fully Insured", label: "Liability + Workers' Comp" },
  { value: "GAF Certified", label: "Manufacturer credentials" },
];

const STAT_ICONS = [ShieldCheck, Award, Calendar, Star];

export function TrustBar({
  stats = DEFAULT_STATS,
  certifications = ["GAF", "Owens Corning", "CertainTeed", "IKO", "BBB"],
  rating,
  className,
}: TrustBarProps) {
  return (
    <section
      className={cn(
        "border-y border-slate-200 bg-white",
        className,
      )}
      aria-label="Trust signals"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          {stats.map((stat, idx) => {
            const Icon = STAT_ICONS[idx % STAT_ICONS.length];
            return (
              <li key={stat.label} className="inline-flex items-center gap-2">
                <Icon size={20} aria-hidden="true" className="text-signal-amber" />
                <span className="flex flex-col leading-tight">
                  <span className="font-heading font-semibold text-storm-navy">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500">{stat.label}</span>
                </span>
              </li>
            );
          })}
          {rating ? (
            <li className="inline-flex items-center gap-2">
              <Star size={20} aria-hidden="true" className="text-signal-amber" />
              <span className="flex flex-col leading-tight">
                <span className="font-heading font-semibold text-storm-navy">
                  {rating.value.toFixed(1)} / 5
                </span>
                <span className="text-xs text-slate-500">{rating.count}+ reviews</span>
              </span>
            </li>
          ) : null}
        </ul>
        <div className="flex flex-wrap items-center gap-3">
          {certifications.map((label) => (
            <span
              key={label}
              aria-label={`${label} certified`}
              className="inline-flex h-10 items-center rounded-md border border-slate-200 bg-slate-50 px-3 text-[11px] font-semibold uppercase tracking-wide text-slate-700"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
