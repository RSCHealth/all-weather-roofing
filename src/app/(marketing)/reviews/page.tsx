import type { Metadata } from "next";
import { Star } from "lucide-react";
import { ReviewsSection } from "@/components/content/ReviewsSection";
import { DirectAnswer } from "@/components/content/DirectAnswer";
import { CTABand } from "@/components/cta/CTABand";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { REVIEWS } from "@/content/reviews";

export const metadata: Metadata = buildMetadata({
  title: "Customer Reviews — All Weather Roofing Systems | St. Louis",
  description:
    "Real customer reviews of All Weather Roofing Systems — a locally owned roofing contractor serving St. Louis and the Metro East.",
  canonical: "/reviews",
});

const REVIEW_THRESHOLD = 5;

const REVIEW_PLATFORMS: { label: string; href?: string }[] = [
  // URLs filled when GBP / BBB / Facebook profiles are confirmed.
  { label: "Google Business Profile" },
  { label: "BBB" },
  { label: "Facebook" },
];

function distribution(reviews: typeof REVIEWS): Record<1 | 2 | 3 | 4 | 5, number> {
  const counts: Record<1 | 2 | 3 | 4 | 5, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const r of reviews) counts[r.rating]++;
  return counts;
}

export default function ReviewsPage() {
  const meetsThreshold = REVIEWS.length >= REVIEW_THRESHOLD;
  const avg =
    REVIEWS.length > 0
      ? REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length
      : 0;
  const counts = distribution(REVIEWS);
  const total = REVIEWS.length;

  return (
    <>
      <section className="bg-hearthstone">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl lg:text-h1 lg:leading-tight">
            What our customers say
          </h1>
          <div className="mt-6">
            <DirectAnswer eyebrow="Quick read">
              {meetsThreshold ? (
                <p>
                  All Weather Roofing Systems holds an average rating of{" "}
                  <strong>{avg.toFixed(1)} / 5</strong> across {total}+ verified
                  customer reviews. Most reviewers cite same-week scheduling,
                  written warranties, and crews that show up when they say
                  they will.
                </p>
              ) : (
                <p>
                  We&rsquo;re a young brand with growing review volume. Real
                  reviews from customers we&rsquo;ve actually worked with go
                  here as fast as we collect permission to publish them — we
                  don&rsquo;t fabricate or stage reviews to pad a page.
                </p>
              )}
            </DirectAnswer>
          </div>
        </div>
      </section>

      {/* Aggregate rating card — only renders ≥5 */}
      {meetsThreshold ? (
        <section className="mx-auto w-full max-w-3xl px-6 pt-8">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-card">
            <div className="flex items-center gap-4">
              <div className="text-5xl font-heading font-bold text-storm-navy">
                {avg.toFixed(1)}
              </div>
              <div>
                <div className="flex items-center gap-0.5" aria-label={`${avg.toFixed(1)} out of 5`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={18}
                      aria-hidden="true"
                      className={
                        i < Math.round(avg)
                          ? "fill-signal-amber text-signal-amber"
                          : "text-slate-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-700">
                  Based on {total}+ verified customer reviews
                </p>
              </div>
            </div>
            <ul className="mt-5 flex flex-col gap-2">
              {[5, 4, 3, 2, 1].map((star) => {
                const c = counts[star as 1 | 2 | 3 | 4 | 5];
                const pct = total === 0 ? 0 : (c / total) * 100;
                return (
                  <li key={star} className="flex items-center gap-3 text-xs text-slate-600">
                    <span className="w-12">{star} stars</span>
                    <span className="relative h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 bg-signal-amber"
                        style={{ width: `${pct}%` }}
                      />
                    </span>
                    <span className="w-10 text-right tabular-nums">{c}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}

      <ReviewsSection reviews={REVIEWS} />

      {/* Leave a review */}
      <section className="mx-auto w-full max-w-4xl px-6 py-12 lg:py-16">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-card lg:p-8">
          <h2 className="font-heading text-h3 font-bold text-storm-navy">
            Worked with us recently? Leave a review.
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Reviews help local families find a roofer they can trust. If we
            did right by you, even a sentence on your favorite platform helps
            the next homeowner make a more informed call.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {REVIEW_PLATFORMS.map((p) => (
              <a
                key={p.label}
                href={p.href ?? "#"}
                aria-disabled={!p.href}
                target={p.href ? "_blank" : undefined}
                rel={p.href ? "noopener noreferrer" : undefined}
                className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-storm-navy px-4 text-sm font-semibold text-storm-navy hover:bg-storm-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
              >
                Leave on {p.label}
              </a>
            ))}
          </div>
          {!meetsThreshold ? (
            <p className="mt-4 text-xs text-slate-500">
              Note: review platform URLs are added once each profile is
              claimed and verified.
            </p>
          ) : null}
        </div>
      </section>

      <CTABand
        headline={`See the work behind the reviews — call ${BUSINESS.phone}`}
        subtext="Schedule a free inspection or just ask the question on your mind. We'll give you a real answer."
        ctaClass="C"
        background="navy"
        trackingLocation="reviews_final_cta"
      />
    </>
  );
}
