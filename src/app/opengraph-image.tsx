import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "cev.studio — independent digital studio";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f4f3ee",
          color: "#16150f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "flex-end", fontSize: 40, fontWeight: 800 }}>
          <span>cev</span>
          <span
            style={{
              width: 12,
              height: 12,
              background: "#ff3a1d",
              margin: "0 6px 8px",
            }}
          />
          <span style={{ color: "#6b6a60", fontWeight: 500 }}>studio</span>
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            fontSize: 116,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: -4,
            maxWidth: 900,
          }}
        >
          Tell us what you&rsquo;re making.
        </div>

        {/* services */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 3,
            color: "#6b6a60",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Web Development&nbsp;&nbsp;·&nbsp;&nbsp;Mobile Apps&nbsp;&nbsp;·&nbsp;&nbsp;Brand
          Identity&nbsp;&nbsp;·&nbsp;&nbsp;3D Modelling
        </div>
      </div>
    ),
    size,
  );
}
