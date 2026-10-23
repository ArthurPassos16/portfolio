import { ImageResponse } from "next/og";
import { publishedApps } from "@/lib/data";

export const alt = "Arthur Passos — Desenvolvedor Mobile Flutter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#000", color: "#fff" }}>
        <div style={{ fontSize: 120, fontWeight: 900, lineHeight: 1 }}>ARTHUR PASSOS</div>
        <div style={{ fontSize: 40, marginTop: 30, color: "#a1a1aa" }}>Desenvolvedor Mobile · Flutter e Dart</div>
        <div style={{ fontSize: 32, marginTop: 60, color: "#71717a" }}>{`+5.500 downloads em ${publishedApps().length} apps · App Store + Google Play`}</div>
      </div>
    ),
    size,
  );
}
