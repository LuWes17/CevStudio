import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon derived from the wordmark: lowercase "c" on near-black ink with the
// signature accent square standing in for the dot.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#16150f",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            paddingBottom: 5,
          }}
        >
          <span
            style={{
              color: "#f4f3ee",
              fontSize: 24,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -1,
            }}
          >
            c
          </span>
          <span
            style={{
              width: 5,
              height: 5,
              background: "#ff3a1d",
              marginLeft: 1,
              marginBottom: 3,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
