import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          border: "1.5px solid #00ff8840",
        }}
      >
        <span
          style={{
            color: "#00ff88",
            fontSize: "13px",
            fontWeight: 700,
            fontFamily: "monospace",
            letterSpacing: "-0.5px",
            lineHeight: 1,
          }}
        >
          {">" + "_"}
        </span>
      </div>
    ),
    { ...size }
  );
}
