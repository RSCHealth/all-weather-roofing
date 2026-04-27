import * as React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { CITIES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export type ServiceAreasSectionProps = {
  headline?: string;
  description?: string;
  className?: string;
};

export function ServiceAreasSection({
  headline = "Serving the St. Louis metro and Metro East",
  description = "Local crews, local response times. We work in 10 cities across Missouri and Illinois — and the entire metro in between.",
  className,
}: ServiceAreasSectionProps) {
  return (
    <section
      className={cn("mx-auto w-full max-w-7xl px-6 py-12 lg:py-16", className)}
      aria-labelledby="service-areas-heading"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        <div>
          <h2
            id="service-areas-heading"
            className="font-heading text-h2 font-bold text-storm-navy"
          >
            {headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            {description}
          </p>
          <Link
            href="/service-areas"
            className="mt-6 inline-flex items-center gap-1 font-semibold text-signal-amber underline-offset-4 hover:underline focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-storm-navy"
          >
            View all service areas
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {CITIES.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/service-areas/${city.slug}`}
                className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-storm-navy shadow-card transition-shadow hover:shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
              >
                <MapPin size={14} aria-hidden="true" className="text-signal-amber" />
                {city.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ServiceAreasSection;
