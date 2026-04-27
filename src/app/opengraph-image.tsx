import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Site-wide default OpenGraph image. Used by every page that doesn't ship
 * a per-route override (e.g. service pages, city pages, blog posts can each
 * generate their own image with the page-specific headline).
 *
 * Storm-navy background, signal-amber accent, brand lockup, phone number.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#1B3054",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              background: "#FFFFFF",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            <span style={{ color: "#D97B2B" }}>A</span>
            <span style={{ color: "#1B3054" }}>W</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.1 }}>
              All Weather
            </span>
            <span
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: "#D97B2B",
                lineHeight: 1.1,
              }}
            >
              Roofing Systems
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#D97B2B",
            }}
          >
            St. Louis · Metro East
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Roofing Done Right — the First Time, On Time.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "24px",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            <span style={{ color: "#D97B2B" }}>Call {BUSINESS.phone}</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span style={{ opacity: 0.7, fontSize: 22, fontWeight: 500 }}>
              Licensed MO + IL · Fully insured
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
