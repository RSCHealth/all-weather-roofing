import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobilePhoneBar } from "@/components/layout/StickyMobilePhoneBar";
import { CookieConsentBanner } from "@/components/analytics/CookieConsentBanner";
import { ScrollDepthTracker } from "@/components/analytics/ScrollDepthTracker";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildWebSite, buildOrganization } from "@/lib/schema";

// WebSite + Organization render once per marketing page — they're the
// canonical entity nodes the rest of the schema graph references via @id.
const SITE_WIDE_SCHEMA = [buildWebSite(), buildOrganization()];

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main" className="flex flex-1 flex-col pb-16 lg:pb-0">
        {children}
      </main>
      <Footer />
      <StickyMobilePhoneBar />
      <CookieConsentBanner />
      <ScrollDepthTracker />
      <JsonLd schemas={SITE_WIDE_SCHEMA} />
    </>
  );
}
