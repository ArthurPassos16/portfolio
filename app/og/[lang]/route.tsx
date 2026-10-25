import { ImageResponse } from "next/og";
import { content, publishedApps } from "@/lib/data";

// served as /og/pt and /og/en; referenced from generateMetadata in app/[[...lang]]/layout.tsx
// (an opengraph-image file can't live inside the optional catch-all)
export const dynamicParams = false;
export const generateStaticParams = () => [{ lang: "pt" }, { lang: "en" }];

export async function GET(_: Request, { params }: { params: Promise<{ lang: "pt" | "en" }> }) {
  const { ui } = content[(await params).lang];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#000", color: "#fff" }}>
        <div style={{ fontSize: 120, fontWeight: 900, lineHeight: 1 }}>ARTHUR PASSOS</div>
        <div style={{ fontSize: 40, marginTop: 30, color: "#a1a1aa" }}>{ui.ogTagline}</div>
        <div style={{ fontSize: 32, marginTop: 60, color: "#71717a" }}>{ui.ogStats(publishedApps().length)}</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
