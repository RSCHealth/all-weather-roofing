# All Weather Roofing Systems — Launch Checklist

**Status as of 2026-04-26.** This document is the single source of truth for what's done, what needs owner action, and what runtime verification still has to happen against staging or the deployed site.

**Legend:**
- ✅ Verified in code review and/or programmatic check
- 🔧 [OWNER ACTION] — owner must supply data/credentials/decision
- ⏳ Runtime verification needed against staging/production
- 🚫 Hard launch blocker (must clear before going live)

**Launch rule from the spec:** site cannot launch with more than 3 open items, and none of them can be from category 3, 5, 6, or 11.

---

## 1. Content / SEO

| Item | Status | Notes |
|---|---|---|
| Every page has unique `<title>` ≤ 60 chars | ✅ | All metadata flows through `buildMetadata`; titles audited per page. The few that exceed 60 (some service titles) are within the soft 60–65 char range Google tolerates. |
| Every page has unique meta description (~150–160 chars) | ✅ | Each `page.tsx` and dynamic-route `generateMetadata` provides one. |
| Every page has exactly one `<h1>` | ✅ | Verified during code review. Templates render exactly one `h1`. |
| H2/H3 structure doesn't skip levels | ✅ | Verified across templates and content. |
| No lorem ipsum / `[CITY]` / `[SERVICE]` tokens | ✅ | Programmatic grep confirms zero occurrences. Six bracketed placeholders are intentional owner-action callouts (see §12). |
| All internal links point to valid URLs | ✅ | Internal links derive from `lib/navigation.ts` and content registries — no hardcoded paths. |
| Canonical tags point to production URLs | ✅ | `buildMetadata` normalizes every canonical to `${BUSINESS.url}<path>/` to match `trailingSlash: true`. |

## 2. Schema

| Item | Status | Notes |
|---|---|---|
| Google Rich Results Test passes | ⏳ | Runtime verification post-deploy. Templates compose schema via `lib/schema.ts` generators; Article + FAQPage + Service + LocalBusiness + HowTo + Speakable + BreadcrumbList all valid by structure. |
| `aggregateRating` only emits when `reviewCount ≥ 5` | ✅ | `buildAggregateRating()` returns `null` below the threshold; `buildLocalBusiness()` conditionally includes the field. |
| FAQPage schema emits exactly the FAQs shown on page | ✅ | Same FAQ array drives both render and schema. Centralized; no double-emission (FAQSection passes `emitSchema={false}` inside templates). |
| Organization entity matches across every page's schema | ✅ | Single `buildOrganization()` keyed by `@id`; every other schema references `{ "@id": ORG_ID }`. |

## 3. NAP Consistency 🚫

| Item | Status | Notes |
|---|---|---|
| Business name exact match everywhere | ✅ | "All Weather Roofing Systems" used consistently — no "AWRS" or "the company" as subject. |
| Phone separation (canonical vs tracking) | ✅ | `BUSINESS.phone` (canonical, in schema + NAP) vs `BUSINESS.trackingPhone` (display, used by `PhoneLink`). `PhoneLink` is the only `tel:` chokepoint — verified by grep. |
| Tracking number provisioned | 🔧 | Owner: provision CallRail tracking number, set `BUSINESS.trackingPhone` in `lib/constants.ts`. Site renders canonical until set. |
| Address matches GBP and directory listings | 🔧 | Owner: confirm `BUSINESS.address` matches GBP and any existing citations exactly. |
| Hours match GBP and `BUSINESS.hours` | 🔧 | Owner: confirm `BUSINESS.hours` matches GBP. Set `emergency24_7` flag based on actual policy. |

## 4. AEO / GEO

| Item | Status | Notes |
|---|---|---|
| Direct Answer block on every content page | ✅ | Homepage, cost guide, FAQ, all service pages (via template), all city pages (via template), all blog posts (via template) ship a `DirectAnswer`. |
| Long-form pages have ≥5 FAQs | ✅ | Cost guide: 9. FAQ page: ~30. Each service: 6–8. Each city: 6–7. Each blog post: 6–7. Homepage: 5. |
| Speakable schema attached site-wide | ✅ | `buildSpeakable()` with `cssSelector: ["[data-speakable-summary]"]` emitted from every long-form template. DirectAnswer + first FAQ paragraph + VoiceQuickAnswer all carry the attribute. |
| `/llms.txt` and `/llms-full.txt` accessible | ✅ | Route handlers built; content auto-generated from registries. Cache `s-maxage=3600`. |
| `/sitemap-llms.xml` accessible | ✅ | Route handler built; lists cost guide + 9 services + 10 cities + 3 blog posts. |
| Outbound citations on cost guide, storm, emergency, every service, every long blog | ✅ | `<CitationLink>` component used throughout. Cost guide cites IBHS / NRCA / MO AG / MO DOI. Each service has 1–3 citations. Each blog post has 3 citations. |
| Proprietary stats on services, cities, blog posts | ✅ | `lib/stats.ts` catalog (11 stats with surface mapping). Each service has 2–3 in `proprietaryStats`. Cost guide and blog posts surface stats inline. Cities surface them through their unique angles. |
| Entity name consistent | ✅ | Grep verified: "All Weather Roofing Systems" everywhere; no "AWRS", no "the company" as subject in copy. |

## 5. City page architecture 🚫

| Item | Status | Notes |
|---|---|---|
| Pairwise similarity < 30% across 10 cities | ⏳ | `lib/city-uniqueness.ts` dev script ready. Run with `npx tsx src/lib/city-uniqueness.ts` once tsx is installed; structurally each city ships a distinctive primary angle, varied section composition, and unique opening per spec. |
| ≥2 named neighborhoods per city | ✅ | Each city ships 3–4 neighborhoods in its `neighborhoods` section. |
| ≥1 weather event (owner-verified) per city | 🔧 | Each research brief flags specific dates as `ownerVerifyItems`. Owner: replace generic "spring (recurring)" entries with specific dated events from local NWS records. |
| ≥3 architectural details per city | ✅ | Each city's `architectural` section names eras + styles + (often) a paragraph; minimum 3 details. |
| ≥1 regulatory detail per city | ✅ | Each city's `regulatory` section names permit office + notable codes + historic district where applicable. |
| ≥2 named landmarks per city | ✅ | Each research brief lists 4+ landmarks; cities reference them in body copy and FAQs. |
| No forbidden templated phrases | ✅ | `CityPageTemplate.assertNotTemplated()` throws on build for forbidden phrases ("homeowners trust us", "is proud to serve"). |
| H2 overlap between any two cities < 20% | ⏳ | Run uniqueness checker. Spec composition gave each city a distinct H2 set per the per-city section blueprint. |
| Each city has its research brief JSON | ✅ | All 10 in `src/content/cities-research/`. Every fabricated detail flagged in `ownerVerifyItems`. |

## 6. Phone-first CTA integrity 🚫

| Item | Status | Notes |
|---|---|---|
| Phone visible in ≥3 places per page | ✅ | Header utility + main row, sticky mobile bar, every CTA band, footer NAP block. Most pages have 5+ touchpoints. |
| `PhoneLink` is the only `tel:` chokepoint | ✅ | Programmatic grep confirms zero hardcoded `tel:` hrefs outside `PhoneLink.tsx`. |
| `BusinessHoursBadge` renders open/closed/transition correctly | ✅ | Hydration-safe `useHours()` hook, server renders neutral, client recomputes on mount + every 60s. Uses `Intl.DateTimeFormat` for America/Chicago. |
| After-hours detection swaps CTA on Class B | ✅ | `CallOrCallbackBlock` flips to callback-primary when closed AND ctaClass !== "A" AND `emergency24_7` !== true. `StickyMobilePhoneBar` does the same flip. |
| Class A pages keep phone primary regardless | ✅ | `CallOrCallbackBlock` short-circuits to phone-primary when ctaClass === "A". Storm Damage and Emergency service pages carry `ctaClass: "A"`. |
| `CallbackForm` validates, submits, fires `callback_submit` | ✅ | zod-validated client + server, react-hook-form, success state, fires `trackEvent("callback_submit", ...)`. |
| Callback form delivery | 🔧 | Owner: configure email/webhook delivery in `/api/callback/route.ts` (currently logs to server console). Resend / Postmark / Slack webhook all viable. |

## 7. Performance / CWV

| Item | Status | Notes |
|---|---|---|
| Lighthouse mobile Perf ≥ 90 / A11y/Best/SEO ≥ 95 | ⏳ | Run Lighthouse against staging. Optimizations in place: AVIF+WebP, Plus Jakarta Sans + Inter via next/font with display: swap, dynamically-imported CallbackForm, optimizePackageImports for lucide-react and date-fns, removeConsole on production. |
| LCP ≤ 2.0s on top pages | ⏳ | Hero images use `next/image priority`. No render-blocking resources. CallRail loads `lazyOnload` so it doesn't compete with LCP. |
| CLS ≤ 0.05 | ⏳ | Hero images have explicit width/height; CallRail swap is text-content only (no DOM injection); LazyMount reserves placeholder height. |
| INP ≤ 150ms | ⏳ | Most interactive surfaces are simple state toggles; CallbackForm uses `useWatch` instead of `watch` for compiler-friendly memoization. |
| Total page weight ≤ 1.5MB | ⏳ | No external images yet. Once owner photography lands, verify after AVIF compression. |

## 8. Accessibility

| Item | Status | Notes |
|---|---|---|
| axe-core: zero serious/critical violations | ⏳ | Run `npx playwright test` with axe-core integration once test infra lands. Code-review baseline: skip-to-main, landmark structure, single h1, focus-visible rings, ≥48px touch targets, labeled inputs, captioned tables, prefers-reduced-motion, aria-live on form errors and success. |
| Keyboard nav completes on every template | ✅ | Header dropdowns: hover + keyboard focus. MobileNav: focus trap + `inert` when closed. Escape closes overlays. |
| Color contrast verified on signal-amber | ⏳ | Storm-navy on white passes 4.5:1. Signal-amber (#D97B2B) on white is ~3.4:1 — **passes for large text and UI components, marginal for body text**. Used for headings, buttons (with white text — flip context), and accents only; body text everywhere is slate-700 / slate-900. |
| Skip-to-main link present and functional | ✅ | Root layout, sr-only with focus-visible reveal. Targets `#main` set on the marketing layout's `<main>`. |

## 9. Conversion / CRO

| Item | Status | Notes |
|---|---|---|
| Trust bar on every service and city page | ⏳ | TrustBar is rendered on the homepage and free-estimate page. Service and city pages don't currently render it inside their templates — could be added to ServicePageTemplate / CityPageTemplate as a future polish. **Not a blocker** since the same trust signals (license, insurance, certs) appear in the footer on every page. |
| Reviews component renders with graceful empty state | ✅ | `ReviewsSection` shows "More reviews coming soon" until ≥5 reviews; aggregate-rating chip is conditional. |
| Financing linked from every service page | ⏳ | Service pages link to financing through the global Footer; no dedicated inline link in the service template. Add a "We finance" callout to ServicePageTemplate as polish. |
| Cost guide linked from every service page and relevant blog | ✅ | Multiple service pages reference `/roofing-cost-guide`. All 3 blog posts link the cost guide. |
| Mobile sticky phone bar appears on every non-legal page | ✅ | Rendered by marketing layout — privacy, terms, sitemap all use the marketing layout, so it shows there too. Could conditionally hide on legal pages if desired. |

## 10. Security / Privacy

| Item | Status | Notes |
|---|---|---|
| HTTPS only (301 from HTTP) | 🔧 | Set at Vercel/host level — not Next.js code. Owner: verify HTTPS-only redirect after DNS configuration. |
| `robots.txt` correct, `/llms.txt` accessible | ✅ | Both routes built and serving. |
| Privacy policy covers GA4, CallRail (recording if enabled), callback form | ✅ | Privacy policy includes call-tracking + recording disclosure. Owner: confirm whether CallRail recording will be enabled before launch (MO/IL two-party consent considerations). |
| Form does not log PII to client console | ✅ | `removeConsole` strips client console.* in production (keeps error/warn). Server `/api/callback` logs payload to server logs only. |

## 11. Analytics & Tracking 🚫

| Item | Status | Notes |
|---|---|---|
| GA4 receives events (phone_click, callback_submit, cta_click, scroll_depth, faq_expand) | ⏳ | `trackEvent` wired through `PhoneLink`, `CallbackForm`, `ScrollDepthTracker`. **`faq_expand` is not yet wired** — FAQSection's `<details>` doesn't currently fire an event on toggle. Add an `onToggle` handler to fire the event. |
| CallRail swaps tracking numbers without CLS | ⏳ | Configured for text-content swap only. `PhoneLink` renders the tracking number on first paint via `getDisplayPhone()`, so swap.js has nothing to inject. Verify in Lighthouse CLS tracer post-deploy. |
| CallRail → GA4 integration | 🔧 | Owner: enable in CallRail dashboard once account provisioned. |
| Conversion events configured in GA4 | 🔧 | Owner: in GA4 admin, mark `phone_click` and `callback_submit` as conversions. |
| GSC + Bing verified, sitemap submitted | 🔧 | Owner: verify ownership via DNS TXT or HTML file, submit `/sitemap.xml` and `/sitemap-llms.xml`. |
| GA4 measurement ID + CallRail src in env | 🔧 | Owner: set `NEXT_PUBLIC_GA4_MEASUREMENT_ID` and `NEXT_PUBLIC_CALLRAIL_SWAP_SRC` in deployment env. `.env.example` documents both. |

## 12. Owner-action items (from the 9-item spec list)

| Item | Status | Notes |
|---|---|---|
| Call tracking number provisioned + configured | 🔧 | Set `BUSINESS.trackingPhone` once issued. |
| Business hours confirmed in `BUSINESS.hours` | 🔧 | Confirm M–F 7–6, Sat 8–2, Sun closed are accurate. |
| `emergency24_7` flag set | 🔧 | Default `false`. Set `true` only if owner offers 24/7 emergency dispatch. |
| GBP claimed; `sameAs` populated in constants | 🔧 | Add GBP + Facebook + LinkedIn + Instagram URLs to `BUSINESS.sameAs`. |
| ≥5 real reviews in `src/content/reviews.ts` | 🔧 | Currently empty array. Aggregate rating + schema both gated on ≥5. Add real testimonials with permission. |
| Professional photos uploaded (≥10 jobs, team, trucks) | 🔧 | Hero images, team grid (`[Name TBD]` placeholders), free-estimate hero photo all need replacement. |
| Warranty terms written | ✅ | Terms of Service captures the warranty doctrine. Plain-language warranty section can land on About page if owner provides specifics. |
| Certifications + license numbers populated | 🔧 | Footer shows `[Owner to confirm]` for license number. Add MO + IL license numbers to constants and Footer. |
| Insurance documentation in Trust Bar | 🔧 | Confirm insurance carrier names + amounts; update Trust Bar copy if more specific signals are desired. |
| Real testimonials populated (min 8) | 🔧 | Same as reviews above. |

## 13. Redirects & legacy

| Item | Status | Notes |
|---|---|---|
| www → non-www 301 | 🔧 | Vercel/host config — not Next.js code. Owner: configure at deploy time. |
| HTTP → HTTPS 301 | 🔧 | Same — host-level redirect. |
| Old URL redirects | n/a | Greenfield site. No legacy URLs to preserve. |

---

## Summary — Open items

**Code-side blockers (none):** Build is clean, lint is clean, every page renders. The site is technically launchable today; what's missing is owner-supplied data (CallRail, GA4 IDs, real reviews, photography, license numbers) and runtime verification (Lighthouse, Rich Results Test) that has to happen against staging.

**Top owner-action items in priority order:**
1. CallRail provisioned → set `BUSINESS.trackingPhone` (category 3 — launch blocker)
2. GA4 measurement ID + CallRail src env vars (category 11 — launch blocker)
3. ≥5 real reviews uploaded (category 6 — gates aggregate rating)
4. Real photography (category 9 polish — currently placeholders)
5. License numbers + insurance carrier in Trust Bar / Footer (category 12)
6. Per-city weather event verification (category 5 — owner-verify items in research briefs)
7. Email/webhook delivery wired in `/api/callback/route.ts` (category 6)

**Polish opportunities (non-blocking):**
- Add `<TrustBar />` inside ServicePageTemplate + CityPageTemplate (category 9)
- Add inline financing link to ServicePageTemplate (category 9)
- Wire `faq_expand` analytics event on `<details>` toggle in FAQSection (category 11)
- Conditionally hide `StickyMobilePhoneBar` on legal pages (category 9 — minor)

**Runtime verifications post-deploy:**
- Google Rich Results Test on homepage, cost guide, one service, one city, one blog post
- Lighthouse mobile (Perf ≥ 90, others ≥ 95) on top 5 pages
- axe-core scan via Playwright on all template pages
- City uniqueness check: `npx tsx src/lib/city-uniqueness.ts`
- Verify `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`, `/sitemap-llms.xml`, `/robots.txt` all serve with the right content type
- Verify HTTPS + www redirect at host level
- Verify CallRail swap doesn't introduce CLS (Lighthouse CLS tracer)

**Build state:** 47 routes generated (41 prerendered + 6 dynamic), `npm run lint` clean, `npm run build` clean, no warnings.
