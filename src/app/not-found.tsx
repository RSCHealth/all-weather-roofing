import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { BUSINESS } from "@/lib/constants";
import { SERVICES } from "@/lib/navigation";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col bg-hearthstone">
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-signal-amber">
          404 · page not found
        </p>
        <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl">
          We couldn&rsquo;t find that page.
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-700">
          The page you&rsquo;re looking for has moved, been renamed, or
          never existed. Here are some pages we definitely <em>do</em> have —
          or call us at <strong>{BUSINESS.phone}</strong> and we&rsquo;ll
          help you find what you need.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-storm-navy px-6 text-base font-semibold text-white hover:bg-storm-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy focus-visible:ring-offset-2"
          >
            <Home size={18} aria-hidden="true" />
            Back to home
          </Link>
          <PhoneLink
            variant="button"
            size="lg"
            trackingLocation="not_found_cta"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-16">
        <h2 className="font-heading text-h3 font-bold text-storm-navy">
          Roofs we did find
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full items-center justify-between rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-storm-navy shadow-card transition-shadow hover:shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
              >
                {s.label}
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="text-signal-amber"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
