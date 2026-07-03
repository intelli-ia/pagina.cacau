import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,900",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    }
  ).then((r) => r.text());

  const fontUrl = css.match(/url\((.+?)\)/)?.[1] ?? "";
  const fontData = await fetch(fontUrl).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            fontFamily: "Merriweather",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: 24,
            color: "#e59f14",
            lineHeight: 1,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          R
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Merriweather",
          data: fontData,
          style: "italic",
          weight: 900,
        },
      ],
    }
  );
}
