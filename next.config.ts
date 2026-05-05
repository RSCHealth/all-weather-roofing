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
      // Legacy Hostinger URL — old site had /locations/ which Google
      // indexed. New site uses /service-areas/. 301 preserves rankings
      // and routes inbound traffic to the equivalent hub page.
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
    ];
  },
};

export default nextConfig;
