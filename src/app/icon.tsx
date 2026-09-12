import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#292217",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          border: "1.5px solid #e05a2b40",
        }}
      >
        <span
          style={{
            color: "#e05a2b",
            fontSize: "17px",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            lineHeight: 1,
          }}
        >
          01
        </span>
      </div>
    ),
    { ...size }
  );
}
