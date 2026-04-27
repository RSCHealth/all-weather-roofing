import type { ServiceContent } from "@/types/service";
import { residentialRoofing } from "./residential-roofing";
import { roofRepair } from "./roof-repair";
import { roofReplacement } from "./roof-replacement";
import { commercialRoofing } from "./commercial-roofing";
import { metalRoofing } from "./metal-roofing";
import { industrialRoofing } from "./industrial-roofing";
import { stormDamageRoofing } from "./storm-damage-roofing";
import { emergencyRoofing } from "./emergency-roofing";
import { roofingInspection } from "./roofing-inspection";

/**
 * Registry of all service content modules. The dynamic /services/[slug]
 * route reads from this registry to render via ServicePageTemplate.
 */
export const SERVICE_CONTENT: ServiceContent[] = [
  residentialRoofing,
  roofRepair,
  roofReplacement,
  commercialRoofing,
  metalRoofing,
  industrialRoofing,
  stormDamageRoofing,
  emergencyRoofing,
  roofingInspection,
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT.find((s) => s.slug === slug);
}

export function listServiceSlugs(): string[] {
  return SERVICE_CONTENT.map((s) => s.slug);
}
