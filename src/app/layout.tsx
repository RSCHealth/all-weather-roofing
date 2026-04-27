import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Analytics } from "@/components/analytics/Analytics";
import { BUSINESS } from "@/lib/constants";
import "@/styles/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: BUSINESS.name,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "St. Louis roofing contractor — residential, commercial, storm damage, emergency repair.",
  applicationName: BUSINESS.name,
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#1B3054",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnects — fonts handled via next/font, but the GTM origin is
            warmed up early so the first GA4 hit doesn't pay the full DNS +
            TLS cost. fonts.googleapis.com / fonts.gstatic.com are added here
            even though next/font self-hosts as a defense for any third-party
            content that might pull from Google Fonts. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-full flex flex-col font-body bg-hearthstone text-slate-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-storm-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
