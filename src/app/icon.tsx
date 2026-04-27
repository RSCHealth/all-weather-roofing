import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Site favicon, generated dynamically. Storm-navy field with a signal-amber
 * roof glyph and "AW" wordmark — matches the placeholder Logo component.
 * Replace this with a static asset once the owner ships the final logo.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B3054",
          fontSize: 28,
          fontWeight: 800,
          color: "#FFFFFF",
          fontFamily: "system-ui, sans-serif",
          letterSpacing: -1,
        }}
      >
        <span style={{ color: "#D97B2B" }}>A</span>
        <span>W</span>
      </div>
    ),
    { ...size },
  );
}
