/**
 * Centralized JSON-LD schema generators. Every page composes its schema
 * from these helpers — no hand-rolled JSON-LD anywhere else in the
 * codebase. Returns plain objects; serialize with `<JsonLd />` (or
 * inline if you prefer).
 */
import { BUSINESS, DAY_KEYS, type DayKey } from "./constants";
import { SERVICES, CITIES } from "./navigation";
import type { Faq, Testimonial, ProcessStep } from "@/types";

// ---------------------------------------------------------------------------
// Identity helpers — single source for the Organization @id graph node
// ---------------------------------------------------------------------------

const ORG_ID = `${BUSINESS.url}/#organization`;
const SITE_ID = `${BUSINESS.url}/#website`;
const PHONE_E164 = BUSINESS.phoneHref.replace("tel:", "");

const BUSINESS_DAY_TO_SCHEMA: Record<DayKey, string> = {
  sunday: "Sunday",
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
};

function openingHoursSpecification() {
  return DAY_KEYS.map((day) => {
    const hours = BUSINESS.hours.regular[day];
    if (!hours.open || !hours.close) return null;
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS_DAY_TO_SCHEMA[day],
      opens: hours.open,
      closes: hours.close,
    };
  }).filter((x): x is NonNullable<typeof x> => x !== null);
}

// ---------------------------------------------------------------------------
// WebSite
// ---------------------------------------------------------------------------

export function buildWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: BUSINESS.name,
    url: BUSINESS.url,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ---------------------------------------------------------------------------
// Organization (canonical entity for the site)
// ---------------------------------------------------------------------------

export type OrganizationOptions = {
  /** Override sameAs at build time when GBP / Facebook / etc. URLs land. */
  sameAs?: string[];
  /** ISO date — owner-supplied, e.g. "2003-05-15". */
  foundingDate?: string;
  founder?: string;
  /** License #, certifications, etc. */
  hasCredential?: string[];
  slogan?: string;
  /** Path to logo on this domain. */
  logoPath?: string;
};

export function buildOrganization(options: OrganizationOptions = {}) {
  const sameAs = options.sameAs ?? BUSINESS.sameAs;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    telephone: PHONE_E164,
    email: BUSINESS.email,
    ...(options.logoPath
      ? { logo: `${BUSINESS.url}${options.logoPath}` }
      : {}),
    ...(options.foundingDate ? { foundingDate: options.foundingDate } : {}),
    ...(options.founder
      ? { founder: { "@type": "Person", name: options.founder } }
      : {}),
    ...(options.slogan ? { slogan: options.slogan } : {}),
    knowsAbout: [
      "residential roofing",
      "commercial roofing",
      "roof repair",
      "roof replacement",
      "metal roofing",
      "storm damage restoration",
      "emergency roofing",
      "roof inspection",
    ],
    ...(options.hasCredential && options.hasCredential.length > 0
      ? {
          hasCredential: options.hasCredential.map((c) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: c,
          })),
        }
      : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postal,
      addressCountry: BUSINESS.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_E164,
      contactType: "customer service",
      areaServed: ["US-MO", "US-IL"],
      availableLanguage: ["en"],
    },
    ...(sameAs && sameAs.length > 0 ? { sameAs } : {}),
  };
}

// ---------------------------------------------------------------------------
// LocalBusiness / RoofingContractor
// ---------------------------------------------------------------------------

export type LocalBusinessOptions = OrganizationOptions & {
  /** Optional override for the "city" the LocalBusiness is scoped to —
   *  used by city pages to emit a city-scoped LocalBusiness with
   *  areaServed limited to that city. */
  scopedToCity?: string;
  /** When ≥5 verified reviews exist, pass them to emit aggregateRating. */
  reviews?: Testimonial[];
  priceRange?: string;
  paymentAccepted?: string[];
};

export function buildLocalBusiness(options: LocalBusinessOptions = {}) {
  const org = buildOrganization(options);
  const reviews = options.reviews ?? [];
  const ratingCount = reviews.length;
  const avg =
    ratingCount > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / ratingCount
      : 0;

  const areaServed = options.scopedToCity
    ? [{ "@type": "City", name: options.scopedToCity }]
    : CITIES.map((c) => ({ "@type": "City", name: c.label }));

  return {
    ...org,
    "@type": ["Organization", "RoofingContractor", "LocalBusiness"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    hasMap: `https://www.google.com/maps?q=${encodeURIComponent(
      `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postal}`,
    )}`,
    openingHoursSpecification: openingHoursSpecification(),
    areaServed,
    priceRange: options.priceRange ?? "$$ – $$$$",
    paymentAccepted:
      options.paymentAccepted ?? ["Cash", "Check", "Credit Card", "Financing"],
    currenciesAccepted: "USD",
    ...(ratingCount >= 5
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: avg.toFixed(1),
            reviewCount: ratingCount,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  };
}

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------

export type ServiceOptions = {
  name: string;
  description: string;
  /** Page URL of this Service. */
  url: string;
  /** Specific city if the service is being scoped (used on city pages). */
  scopedToCity?: string;
  /** Optional offers (e.g., "Free roof inspection"). */
  offers?: { name: string; price?: string; priceCurrency?: string }[];
};

export function buildService(options: ServiceOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    serviceType: options.name,
    url: options.url,
    provider: { "@id": ORG_ID },
    areaServed: options.scopedToCity
      ? { "@type": "City", name: options.scopedToCity }
      : CITIES.map((c) => ({ "@type": "City", name: c.label })),
    ...(options.offers
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${options.name} offerings`,
            itemListElement: options.offers.map((offer) => ({
              "@type": "Offer",
              name: offer.name,
              ...(offer.price ? { price: offer.price } : {}),
              priceCurrency: offer.priceCurrency ?? "USD",
            })),
          },
        }
      : {}),
  };
}

// ---------------------------------------------------------------------------
// BreadcrumbList
// ---------------------------------------------------------------------------

export function buildBreadcrumbList(
  items: { label: string; href?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${BUSINESS.url}${item.href}` } : {}),
    })),
  };
}

// ---------------------------------------------------------------------------
// FAQPage
// ---------------------------------------------------------------------------

export function buildFAQPage(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

// ---------------------------------------------------------------------------
// Article (for cost guide and blog posts)
// ---------------------------------------------------------------------------

export type ArticleOptions = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author?: { name: string; jobTitle?: string };
  imagePath?: string;
  wordCount?: number;
  articleSection?: string;
};

export function buildArticle(options: ArticleOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.headline,
    description: options.description,
    url: options.url,
    mainEntityOfPage: options.url,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    ...(options.author
      ? {
          author: {
            "@type": "Person",
            name: options.author.name,
            ...(options.author.jobTitle
              ? { jobTitle: options.author.jobTitle }
              : {}),
          },
        }
      : {
          author: { "@id": ORG_ID },
        }),
    publisher: { "@id": ORG_ID },
    ...(options.imagePath
      ? { image: `${BUSINESS.url}${options.imagePath}` }
      : {}),
    ...(typeof options.wordCount === "number"
      ? { wordCount: options.wordCount }
      : {}),
    ...(options.articleSection
      ? { articleSection: options.articleSection }
      : {}),
  };
}

// ---------------------------------------------------------------------------
// HowTo
// ---------------------------------------------------------------------------

export function buildHowTo(name: string, steps: ProcessStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };
}

// ---------------------------------------------------------------------------
// Speakable
// ---------------------------------------------------------------------------

export function buildSpeakable() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable-summary]"],
    },
  };
}

// ---------------------------------------------------------------------------
// Review + AggregateRating
// ---------------------------------------------------------------------------

export function buildReview(review: Testimonial) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      "@type": "Person",
      name: review.name,
    },
    datePublished: review.date,
    reviewBody: review.quote,
    itemReviewed: { "@id": ORG_ID },
  };
}

export function buildAggregateRating(reviews: Testimonial[]) {
  if (reviews.length < 5) return null;
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: { "@id": ORG_ID },
    ratingValue: avg.toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };
}

// ---------------------------------------------------------------------------
// ImageObject
// ---------------------------------------------------------------------------

export function buildImageObject(opts: {
  contentUrl: string;
  width?: number;
  height?: number;
  caption?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: opts.contentUrl.startsWith("http")
      ? opts.contentUrl
      : `${BUSINESS.url}${opts.contentUrl}`,
    ...(opts.width ? { width: opts.width } : {}),
    ...(opts.height ? { height: opts.height } : {}),
    ...(opts.caption ? { caption: opts.caption } : {}),
  };
}

// ---------------------------------------------------------------------------
// ItemList (services hub, service-areas hub)
// ---------------------------------------------------------------------------

export function buildItemList(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

// ---------------------------------------------------------------------------
// Blog (blog hub)
// ---------------------------------------------------------------------------

export function buildBlog() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BUSINESS.url}/blog#blog`,
    name: `${BUSINESS.name} blog`,
    url: `${BUSINESS.url}/blog`,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

// ---------------------------------------------------------------------------
// Convenience: pre-built service catalog from registry
// ---------------------------------------------------------------------------

export function buildServicesItemList() {
  return buildItemList(
    SERVICES.map((s) => ({
      name: s.label,
      url: `${BUSINESS.url}/services/${s.slug}`,
    })),
  );
}

export function buildCitiesItemList() {
  return buildItemList(
    CITIES.map((c) => ({
      name: c.label,
      url: `${BUSINESS.url}/service-areas/${c.slug}`,
    })),
  );
}
