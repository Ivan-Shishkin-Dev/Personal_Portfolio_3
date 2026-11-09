import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Ivan Shishkin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const headshot = await readFile(join(process.cwd(), "public/headshot.png"));
  const src = `data:image/png;base64,${headshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "#ffffff",
          color: "#37352f",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={300}
          height={400}
          style={{ borderRadius: 24, objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>Ivan Shishkin</div>
          <div style={{ marginTop: 12, fontSize: 36, color: "#787774" }}>
            Computer Science at UC Irvine
          </div>
          <div style={{ fontSize: 36, color: "#787774" }}>AI and safe systems</div>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginTop: 40,
              padding: "10px 20px",
              borderRadius: 10,
              background: "#191919",
              color: "#4ec994",
              fontSize: 28,
            }}
          >
            {">_ ivanshishkin.com"}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
