import type { Testimonial } from "@/types";

/**
 * Owner-supplied testimonials. Empty until at least 8 real reviews are
 * collected. Each entry must have the customer's permission to publish.
 *
 * Do NOT fabricate or fill placeholder review data — the spec is strict on
 * this: render the empty state until real reviews exist.
 */
export const REVIEWS: Testimonial[] = [];
