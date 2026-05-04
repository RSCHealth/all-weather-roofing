export const BUSINESS = {
  name: "All Weather Roofing Systems",
  legalName: "All Weather Roofing Systems",
  phone: "(314) 834-6556",
  phoneDigits: "13148346556",
  phoneHref: "tel:+13148346556",
  /**
   * Tracking phone (CallRail / CallTrackingMetrics dynamic number) shown
   * to users on the website. Forwards to the canonical number above.
   * Leave null until the CallRail account is provisioned — PhoneLink
   * falls back to the canonical phone when this is null.
   *
   * The canonical `phone` above remains the authority for schema, GBP,
   * citations, and printed materials so NAP consistency stays intact.
   */
  trackingPhone: null as null | {
    phone: string; // formatted display, e.g. "(314) 555-0199"
    phoneDigits: string;
    phoneHref: string;
  },
  email: "info@allweatherroofingsystems.com", // confirm with owner before launch
  address: {
    street: "701 Market St",
    city: "St. Louis",
    region: "MO",
    postal: "63101",
    country: "US",
  },
  coordinates: { lat: 38.6263, lng: -90.1944 },
  url: "https://www.allweatherroofingsystems.com",
  sameAs: [] as string[], // populate with GBP, Facebook, etc. before launch
  hours: {
    // 24-hour format, IANA timezone America/Chicago
    timezone: "America/Chicago",
    regular: {
      monday:    { open: "07:00" as string | null, close: "18:00" as string | null },
      tuesday:   { open: "07:00" as string | null, close: "18:00" as string | null },
      wednesday: { open: "07:00" as string | null, close: "18:00" as string | null },
      thursday:  { open: "07:00" as string | null, close: "18:00" as string | null },
      friday:    { open: "07:00" as string | null, close: "18:00" as string | null },
      saturday:  { open: "08:00" as string | null, close: "14:00" as string | null },
      sunday:    { open: null    as string | null, close: null    as string | null }, // closed
    },
    // If owner offers 24/7 emergency response, set to true; otherwise false.
    // When true, Emergency + Storm Damage pages will keep phone-first CTA regardless of hours.
    emergency24_7: true,
  },
} as const;

/**
 * Resolves the phone digits/href/display the website should render — the
 * tracking number when CallRail is configured, otherwise the canonical
 * line. Single source of truth for PhoneLink and downstream components.
 */
export function getDisplayPhone(): {
  phone: string;
  phoneDigits: string;
  phoneHref: string;
} {
  return BUSINESS.trackingPhone ?? {
    phone: BUSINESS.phone,
    phoneDigits: BUSINESS.phoneDigits,
    phoneHref: BUSINESS.phoneHref,
  };
}

export const PRIMARY_SERVICE_AREAS = [
  "St. Louis, MO", "St. Charles, MO", "Clayton, MO", "O'Fallon, MO",
  "O'Fallon, IL", "Belleville, IL", "Edwardsville, IL", "Creve Coeur, MO",
  "Chesterfield, MO", "Ladue, MO", "Kirkwood, MO",
] as const;

export type DayKey = keyof typeof BUSINESS.hours.regular;

export const DAY_KEYS: readonly DayKey[] = [
  "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
] as const;
