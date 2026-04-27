import type { CityContent } from "@/types/city";
import { stCharlesMo } from "./st-charles-mo";
import { claytonMo } from "./clayton-mo";
import { ofallonMo } from "./ofallon-mo";
import { ofallonIl } from "./ofallon-il";
import { bellevilleIl } from "./belleville-il";
import { edwardsvilleIl } from "./edwardsville-il";
import { creveCoeurMo } from "./creve-coeur-mo";
import { chesterfieldMo } from "./chesterfield-mo";
import { ladueMo } from "./ladue-mo";
import { kirkwoodMo } from "./kirkwood-mo";

/**
 * Registry of all city content modules. The dynamic /service-areas/[slug]
 * route reads from this registry to render via CityPageTemplate.
 */
export const CITY_CONTENT: CityContent[] = [
  stCharlesMo,
  claytonMo,
  ofallonMo,
  ofallonIl,
  bellevilleIl,
  edwardsvilleIl,
  creveCoeurMo,
  chesterfieldMo,
  ladueMo,
  kirkwoodMo,
];

export function getCityBySlug(slug: string): CityContent | undefined {
  return CITY_CONTENT.find((c) => c.slug === slug);
}

export function listCitySlugs(): string[] {
  return CITY_CONTENT.map((c) => c.slug);
}
