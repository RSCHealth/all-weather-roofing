import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // AVIF first (smallest), WebP fallback for older browsers, JPEG/PNG as last-resort.
    formats: ["image/avif", "image/webp"],
    // Owner-supplied photos may live on a CDN once delivered. Add hostnames here.
    remotePatterns: [],
  },
  // Strip console.* statements from the production bundle (keeps error/warn).
  compiler: {
    removeConsole: { exclude: ["error", "warn"] },
  },
  // Trim what's bundled to the client when these large libs ship server-only.
  experimental: {
    optimizePackageImports: ["lucide-react", "date-fns"],
  },
  async redirects() {
    return [
      // Legacy Hostinger URL: old site had /locations/. New site uses
      // /service-areas/. 301 preserves rankings and routes inbound
      // traffic to the equivalent hub page.
      {
        source: "/locations",
        destination: "/service-areas",
        permanent: true,
      },
      {
        source: "/locations/:path*",
        destination: "/service-areas",
        permanent: true,
      },
      // Legitimate WordPress pages from the prior site that GSC still
      // has indexed. Each one points at the closest equivalent on the
      // new site. (Hacked spam URLs get 410 from middleware.)
      {
        source: "/residential-roofing-services-2",
        destination: "/services/residential-roofing",
        permanent: true,
      },
      {
        source: "/beyond-the-gates-of-grants-farm-in-st-louis",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/beyond-the-gates-of-grants-farm-in-st-louis/:page*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/wonders-of-saint-louis-science-center",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/wonders-of-saint-louis-science-center/:page*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/exploring-st-louiss-iconic-gateway-arch",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/exploring-st-louiss-iconic-gateway-arch/:page*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
