import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.name,
    short_name: "All Weather Roofing",
    description:
      "St. Louis roofing contractor — residential, commercial, storm damage, emergency repair.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5F2",
    theme_color: "#1B3054",
    icons: [
      // Owner replaces these placeholders pre-launch with real PNG/SVG assets
      // generated from the final logo file. The icon at /icon.png is generated
      // dynamically by Next.js — see src/app/icon.tsx.
      { src: "/icon", sizes: "any", type: "image/png", purpose: "any" },
    ],
  };
}
