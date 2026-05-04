import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1B3054",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
          <path
            d="M6 30 L24 12 L42 30"
            stroke="#D97B2B"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 32 L12 40 L36 40 L36 32"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
