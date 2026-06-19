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
          background: "#1d1d1d",
          backgroundImage:
            "radial-gradient(900px 700px at 100% -10%, rgba(179,230,17,0.16), transparent 60%), radial-gradient(700px 600px at 110% 30%, rgba(51,63,0,0.7), transparent 62%)",
          color: "#f2f2ea",
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
              background: "#b3e611",
              margin: "0 6px 8px",
            }}
          />
          <span style={{ color: "#8c8c81", fontWeight: 500 }}>studio</span>
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 116,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: -4,
            maxWidth: 940,
          }}
        >
          <span>Tell us what you&rsquo;re&nbsp;</span>
          <span style={{ color: "#b3e611" }}>making.</span>
        </div>

        {/* services */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 3,
            color: "#8c8c81",
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
