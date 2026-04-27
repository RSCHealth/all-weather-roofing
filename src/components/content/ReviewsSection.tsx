import * as React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

export type ReviewsSectionProps = {
  reviews: Testimonial[];
  /** Aggregate chip + schema only emit when ≥ minReviews real reviews exist. */
  minReviews?: number;
  className?: string;
  showAggregate?: boolean;
  aggregateRating?: number;
};

const REVIEW_THRESHOLD = 5;

export function ReviewsSection({
  reviews,
  minReviews = REVIEW_THRESHOLD,
  className,
  showAggregate = true,
  aggregateRating,
}: ReviewsSectionProps) {
  const meetsThreshold = reviews.length >= minReviews;
  const avg =
    aggregateRating ??
    (reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0);

  return (
    <section
      className={cn("mx-auto w-full max-w-7xl px-6 py-12 lg:py-16", className)}
      aria-labelledby="reviews-heading"
    >
      <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2
            id="reviews-heading"
            className="font-heading text-h2 font-bold text-storm-navy"
          >
            What our customers say
          </h2>
          <p className="mt-2 text-base text-slate-700">
            Real St. Louis homeowners and businesses we&rsquo;ve worked with.
          </p>
        </div>
        {showAggregate && meetsThreshold ? (
          <div className="inline-flex items-center gap-2 rounded-full bg-storm-navy/5 px-4 py-2 text-sm font-semibold text-storm-navy">
            <Star size={16} aria-hidden="true" className="text-signal-amber" />
            {avg.toFixed(1)} / 5 · {reviews.length}+ reviews
          </div>
        ) : null}
      </div>

      {reviews.length === 0 ? (
        <p className="mt-8 text-sm text-slate-500">
          More reviews coming soon — check back after we wrap a few more jobs.
        </p>
      ) : (
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-card"
            >
              <div className="flex items-center gap-0.5" aria-label={`${review.rating} of 5 stars`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={16}
                    aria-hidden="true"
                    className={
                      i < review.rating
                        ? "fill-signal-amber text-signal-amber"
                        : "text-slate-300"
                    }
                  />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <footer className="mt-4 text-xs text-slate-500">
                <p className="font-semibold text-storm-navy">{review.name}</p>
                <p>{review.city} · {review.jobType}</p>
                <time dateTime={review.date}>
                  {new Date(review.date).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </footer>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8">
        <Link
          href="/reviews"
          className="inline-flex items-center gap-1 font-semibold text-signal-amber underline-offset-4 hover:underline focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-storm-navy"
        >
          Read all reviews →
        </Link>
      </div>
    </section>
  );
}

export default ReviewsSection;
