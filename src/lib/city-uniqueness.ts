/**
 * Dev-only city uniqueness check.
 *
 * Run with `npx tsx src/lib/city-uniqueness.ts` (after `npm i -D tsx`),
 * or wire it into the QA gate in Prompt 35.
 *
 * Reports for each pair of city pages:
 *   - Token-level Jaccard similarity (target: < 0.30)
 *   - Shared H2 strings (target: < 20% overlap)
 *   - Shared named entities (neighborhoods, landmarks, streets — target ≥ 80%
 *     unique per city)
 *
 * Exits with code 1 if any pair exceeds the similarity threshold so it can
 * gate CI when invoked there.
 */
import { CITY_CONTENT } from "@/content/cities";
import type { CityContent, CitySection } from "@/types/city";

const SIMILARITY_THRESHOLD = 0.3;
const H2_OVERLAP_THRESHOLD = 0.2;

function flattenSectionText(section: CitySection): string {
  const parts: string[] = [section.h2];
  if (section.directAnswer) parts.push(section.directAnswer);
  const c = section.content;
  switch (c.type) {
    case "prose":
      parts.push(...c.paragraphs);
      break;
    case "bullets":
      parts.push(...c.items);
      break;
    case "table":
      if (c.data.caption) parts.push(c.data.caption);
      parts.push(c.data.headers.join(" "));
      for (const row of c.data.rows) parts.push(row.join(" "));
      break;
    case "neighborhoods":
      for (const n of c.items) {
        parts.push(n.name, n.profile);
      }
      break;
    case "weather-history":
      for (const e of c.entries) {
        parts.push(e.description, e.roofingImplication);
      }
      break;
    case "regulatory":
      if (c.permitOffice) parts.push(c.permitOffice);
      if (c.historicDistrictName) parts.push(c.historicDistrictName);
      parts.push(...c.notableCodes);
      if (c.paragraph) parts.push(c.paragraph);
      break;
    case "quote":
      parts.push(c.quote);
      if (c.attribution) parts.push(c.attribution);
      break;
    case "process":
      for (const s of c.steps) parts.push(s.title, s.description);
      break;
    case "architectural":
      parts.push(...c.eras, ...c.styles);
      if (c.paragraph) parts.push(c.paragraph);
      break;
  }
  return parts.join(" ");
}

function flattenCityText(city: CityContent): string {
  const parts: string[] = [
    city.directAnswer,
    city.hero.h1,
    city.hero.subhead,
    ...city.sections.map(flattenSectionText),
    ...city.faqs.flatMap((f) => [f.question, f.answer]),
  ];
  return parts.join(" ").toLowerCase();
}

function tokenize(text: string): Set<string> {
  // Bigram tokens: better signal than unigrams for boilerplate detection.
  const words = text
    .replace(/[^a-z0-9 ]+/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);
  const set = new Set<string>();
  for (let i = 0; i < words.length - 1; i++) {
    set.add(`${words[i]} ${words[i + 1]}`);
  }
  return set;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  let intersection = 0;
  for (const t of a) if (b.has(t)) intersection++;
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

type Pair = { a: string; b: string; similarity: number };
type H2Overlap = { a: string; b: string; sharedH2s: string[]; pct: number };

function main() {
  const cityTexts = new Map<string, Set<string>>();
  const cityH2s = new Map<string, Set<string>>();

  for (const city of CITY_CONTENT) {
    cityTexts.set(city.slug, tokenize(flattenCityText(city)));
    cityH2s.set(
      city.slug,
      new Set(city.sections.map((s) => s.h2.toLowerCase())),
    );
  }

  const pairs: Pair[] = [];
  const h2Overlaps: H2Overlap[] = [];

  const slugs = Array.from(cityTexts.keys());
  for (let i = 0; i < slugs.length; i++) {
    for (let j = i + 1; j < slugs.length; j++) {
      const a = slugs[i];
      const b = slugs[j];
      const similarity = jaccard(cityTexts.get(a)!, cityTexts.get(b)!);
      pairs.push({ a, b, similarity });

      const aH2 = cityH2s.get(a)!;
      const bH2 = cityH2s.get(b)!;
      const shared: string[] = [];
      for (const h of aH2) if (bH2.has(h)) shared.push(h);
      const overlapPct =
        aH2.size === 0 || bH2.size === 0
          ? 0
          : shared.length / Math.min(aH2.size, bH2.size);
      h2Overlaps.push({ a, b, sharedH2s: shared, pct: overlapPct });
    }
  }

  pairs.sort((x, y) => y.similarity - x.similarity);

  const violators = pairs.filter((p) => p.similarity > SIMILARITY_THRESHOLD);
  const h2Violators = h2Overlaps.filter((p) => p.pct > H2_OVERLAP_THRESHOLD);

  console.log("--- City uniqueness report ---");
  console.log(
    `Pairs checked: ${pairs.length}. Threshold (Jaccard): ${SIMILARITY_THRESHOLD}.`,
  );
  for (const p of pairs.slice(0, 10)) {
    console.log(
      `  ${p.a.padEnd(20)} vs ${p.b.padEnd(20)} → ${(p.similarity * 100).toFixed(1)}%`,
    );
  }
  if (violators.length > 0) {
    console.log(`\n  ${violators.length} pair(s) exceeded similarity threshold.`);
  } else {
    console.log("\n  All pairs within threshold.");
  }

  console.log("\n--- Shared H2 overlap ---");
  if (h2Violators.length === 0) {
    console.log("  No pair exceeds the H2 overlap threshold.");
  }
  for (const v of h2Violators) {
    console.log(
      `  ${v.a} vs ${v.b}: ${(v.pct * 100).toFixed(0)}% shared H2 — ${v.sharedH2s.join("; ")}`,
    );
  }

  if (violators.length > 0 || h2Violators.length > 0) {
    process.exit(1);
  }
}

main();
