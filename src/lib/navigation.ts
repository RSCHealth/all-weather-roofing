/**
 * Single source of truth for site navigation: services, service areas,
 * primary nav links. Header, Footer, MobileNav, and HTML sitemap all read
 * from here. Slugs match the route folders under src/app/(marketing)/.
 */

export type NavLink = { href: string; label: string };

export type ServiceNavItem = {
  slug: string;
  label: string;
  description: string;
};

export type CityNavItem = {
  slug: string;
  label: string;
  region: "MO" | "IL";
  description: string;
};

export const SERVICES: ServiceNavItem[] = [
  {
    slug: "residential-roofing",
    label: "Residential Roofing",
    description: "Full-service roofing for homes across the St. Louis metro.",
  },
  {
    slug: "roof-repair",
    label: "Roof Repair",
    description: "Targeted fixes for leaks, missing shingles, and storm damage.",
  },
  {
    slug: "roof-replacement",
    label: "Roof Replacement",
    description: "Complete tear-offs and new installations with full warranties.",
  },
  {
    slug: "commercial-roofing",
    label: "Commercial Roofing",
    description: "Flat-roof systems, maintenance, and large-scale projects.",
  },
  {
    slug: "metal-roofing",
    label: "Metal Roofing",
    description: "Standing-seam and ribbed metal systems built to last.",
  },
  {
    slug: "industrial-roofing",
    label: "Industrial Roofing",
    description: "Heavy-duty systems for warehouses and manufacturing.",
  },
  {
    slug: "storm-damage-roofing",
    label: "Storm Damage Roofing",
    description: "Hail, wind, and tornado damage assessment and restoration.",
  },
  {
    slug: "emergency-roofing",
    label: "Emergency Roofing",
    description: "Fast tarp-and-secure response for active leaks and openings.",
  },
  {
    slug: "roofing-inspection",
    label: "Roofing Inspection",
    description: "Detailed inspections for buying, selling, or post-storm review.",
  },
];

export const CITIES: CityNavItem[] = [
  {
    slug: "st-charles-mo",
    label: "St. Charles, MO",
    region: "MO",
    description: "Roofing services across St. Charles County.",
  },
  {
    slug: "clayton-mo",
    label: "Clayton, MO",
    region: "MO",
    description: "Premium residential and historic-home roofing in Clayton.",
  },
  {
    slug: "ofallon-mo",
    label: "O'Fallon, MO",
    region: "MO",
    description: "Roof repair and replacement throughout O'Fallon, Missouri.",
  },
  {
    slug: "ofallon-il",
    label: "O'Fallon, IL",
    region: "IL",
    description: "Metro East coverage including O'Fallon, Illinois.",
  },
  {
    slug: "belleville-il",
    label: "Belleville, IL",
    region: "IL",
    description: "Metro East roofing experts serving Belleville.",
  },
  {
    slug: "edwardsville-il",
    label: "Edwardsville, IL",
    region: "IL",
    description: "Storm damage and full-roof services in Edwardsville.",
  },
  {
    slug: "creve-coeur-mo",
    label: "Creve Coeur, MO",
    region: "MO",
    description: "Residential roofing tailored to Creve Coeur homes.",
  },
  {
    slug: "chesterfield-mo",
    label: "Chesterfield, MO",
    region: "MO",
    description: "Comprehensive roofing for Chesterfield neighborhoods.",
  },
  {
    slug: "ladue-mo",
    label: "Ladue, MO",
    region: "MO",
    description: "Luxury and historic-home roofing in Ladue.",
  },
  {
    slug: "kirkwood-mo",
    label: "Kirkwood, MO",
    region: "MO",
    description: "Trusted roofing for Kirkwood's historic and modern homes.",
  },
];

export const PRIMARY_NAV_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/roofing-cost-guide", label: "Cost Guide" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const RESOURCE_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/roofing-cost-guide", label: "Cost Guide" },
  { href: "/financing", label: "Financing" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/sitemap", label: "Sitemap" },
];

export const SOCIAL_LINKS: { href: string; label: string }[] = [
  // Populated when GBP / Facebook / LinkedIn / Instagram URLs are confirmed pre-launch.
];
