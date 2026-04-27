import { ImageResponse } from "next/og";
import { getCityBySlug, listCitySlugs } from "@/content/cities";
import { BUSINESS } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "All Weather Roofing Systems";

export async function generateImageMetadata() {
  return listCitySlugs().map((slug) => ({ id: slug, contentType, size }));
}

export default async function CityOG({
  params,
}: {
  params: { slug: string };
}) {
  const content = getCityBySlug(params.slug);
  const headline = content?.hero.h1 ?? "Roofing in the St. Louis area";

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
            gap: "12px",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: "#FFFFFF",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            <span style={{ color: "#D97B2B" }}>A</span>
            <span style={{ color: "#1B3054" }}>W</span>
          </div>
          <span style={{ fontSize: 22, fontWeight: 700 }}>
            All Weather <span style={{ color: "#D97B2B" }}>Roofing Systems</span>
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#D97B2B",
            }}
          >
            Service area
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 1040,
            }}
          >
            {headline}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              fontWeight: 700,
              color: "#D97B2B",
            }}
          >
            Call {BUSINESS.phone}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
