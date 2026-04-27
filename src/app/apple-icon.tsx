import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 96,
          fontWeight: 800,
          color: "#FFFFFF",
          fontFamily: "system-ui, sans-serif",
          letterSpacing: -3,
        }}
      >
        <span style={{ color: "#D97B2B" }}>A</span>
        <span>W</span>
      </div>
    ),
    { ...size },
  );
}
