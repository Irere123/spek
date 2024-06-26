import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Spek";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "#111827",
          width: "100%",
          color: "white",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 30,
        }}
      >
        Public developer communities
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
