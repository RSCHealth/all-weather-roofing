import type { Testimonial } from "@/types";

/**
 * Owner-supplied testimonials sourced from the public Google Business
 * Profile. Each entry must have the customer's permission to publish.
 *
 * Do NOT fabricate or fill placeholder review data: the spec is strict on
 * this. Render the empty state until real reviews exist.
 */
export const REVIEWS: Testimonial[] = [
  {
    id: "kimberly-henderson-2025-05",
    name: "Kimberly Henderson",
    city: "St. Louis Metro",
    jobType: "Free estimate",
    date: "2025-05-01",
    rating: 5,
    quote:
      "This is a great place to get a free estimate and 24 hour support! The website is very organized and easy to navigate! Check these folks out! You won't be disappointed!!",
  },
  {
    id: "brandon-janis-2026-02",
    name: "Brandon Janis",
    city: "St. Louis Metro",
    jobType: "Emergency support",
    date: "2026-02-01",
    rating: 5,
    quote:
      "I just wanted to say that you guys having a 24 hr support line is something hella special. It's nice to be able to not have to worry about when mother nature might decide to throw a curve ball your way.",
  },
  {
    id: "toni-marie-spera-2025-08",
    name: "Toni-Marie Spera",
    city: "St. Louis Metro",
    jobType: "Quote inquiry",
    date: "2025-08-01",
    rating: 5,
    quote:
      "After reviewing the business on Google this company has a pretty good website. I could easily contact them for a quote and I would if I had a roofing repair job.",
  },
  {
    id: "devon-cole-2025-05",
    name: "Devon Cole",
    city: "St. Louis Metro",
    jobType: "General services",
    date: "2025-05-01",
    rating: 4,
    quote:
      "I know a couple people who have used this place, and they said nothing but good things about this company. They mean what they say and they get the job done within the time frame they say they will. They were very honest, and hard working.",
  },
  {
    id: "haris-hassan-2026-01",
    name: "Haris Hassan",
    city: "St. Louis Metro",
    jobType: "Quote inquiry",
    date: "2026-01-01",
    rating: 4,
    quote:
      "It acknowledges the 24-hour service which I love. They have many different services that utilize roofing.",
  },
  {
    id: "aron-frazier-2025-09",
    name: "Aron Frazier",
    city: "St. Louis Metro",
    jobType: "Roofing services",
    date: "2025-09-01",
    rating: 5,
    quote: "Clear choice for all my roofing needs.",
  },
  {
    id: "rob-butler-2025-05",
    name: "Rob Butler",
    city: "St. Louis Metro",
    jobType: "Roof project",
    date: "2025-05-01",
    rating: 5,
    quote:
      "This is a company that will stay with it from beginning to end of each project they take on.",
  },
  {
    id: "kricket-powers-2025-05",
    name: "Kricket Powers",
    city: "St. Louis Metro",
    jobType: "General services",
    date: "2025-05-01",
    rating: 4,
    quote: "Easy to find help with all roofing needs.",
  },
  {
    id: "brandon-lundmark-2025-07",
    name: "Brandon Lundmark",
    city: "St. Louis Metro",
    jobType: "Online inquiry",
    date: "2025-07-01",
    rating: 5,
    quote: "Very easy business page.",
  },
  {
    id: "don-ward-2025-05",
    name: "Don Ward",
    city: "St. Louis Metro",
    jobType: "General services",
    date: "2025-05-01",
    rating: 4,
    quote: "This company seems to go the extra mile.",
  },
  {
    id: "karissa-sorensen-2025-05",
    name: "Karissa Sorensen",
    city: "St. Louis Metro",
    jobType: "General services",
    date: "2025-05-01",
    rating: 5,
    quote: "All encompassing business to cover all of your roofing needs.",
  },
];
