import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  Wrench,
  Hammer,
  Building2,
  Layers,
  Factory,
  CloudLightning,
  Siren,
  Search,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "residential-roofing": Home,
  "roof-repair": Wrench,
  "roof-replacement": Hammer,
  "commercial-roofing": Building2,
  "metal-roofing": Layers,
  "industrial-roofing": Factory,
  "storm-damage-roofing": CloudLightning,
  "emergency-roofing": Siren,
  "roofing-inspection": Search,
};

export type ServicesGridProps = {
  /** Subset of services to render; defaults to all. */
  slugs?: string[];
  className?: string;
};

export function ServicesGrid({ slugs, className }: ServicesGridProps) {
  const items = slugs
    ? SERVICES.filter((s) => slugs.includes(s.slug))
    : SERVICES;

  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((service) => {
        const Icon = SERVICE_ICONS[service.slug] ?? Home;
        return (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-card transition-shadow hover:shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-md bg-storm-navy/5 text-storm-navy">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-storm-navy">
                {service.label}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-700">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-signal-amber group-hover:underline">
                Learn more
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ServicesGrid;
