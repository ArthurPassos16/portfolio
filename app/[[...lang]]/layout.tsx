import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded } from "next/font/google";
import { content, getLang, type Params, profile } from "@/lib/data";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

// "/" is Portuguese, "/en" is English; anything else 404s
export const dynamicParams = false;
export const generateStaticParams = () => [{ lang: [] }, { lang: ["en"] }];

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const lang = await getLang(params);
  const { ui } = content[lang];
  return {
    metadataBase: new URL("https://www.arthurpassos.com"),
    title: ui.title,
    description: ui.description,
    alternates: { languages: { "pt-BR": "/", en: "/en" } },
    openGraph: {
      type: "website",
      title: ui.title,
      description: ui.description,
      locale: content[lang].locale.replace("-", "_"), images: [{ url: `/og/${lang}`, width: 1200, height: 630, alt: `${profile.name} · Flutter` }] },
  };
}

// runs before paint so the saved/system theme never flashes
const themeScript = `try{document.documentElement.dataset.theme=localStorage.theme||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")}catch(e){}`;

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Params }>) {
  const lang = await getLang(params);
  return (
    <html lang={content[lang].locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} font-sans text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
