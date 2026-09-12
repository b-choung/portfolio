import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#26243a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          border: "1.5px solid #8b6bf040",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "9999px",
            background: "#8b6bf0",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
