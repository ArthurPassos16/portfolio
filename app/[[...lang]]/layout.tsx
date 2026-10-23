import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  // ponytail: swap for the custom domain once it is set up
  metadataBase: new URL("https://portfolio-two-delta-90.vercel.app"),
  title: "Arthur Passos | Desenvolvedor Mobile Flutter",
  description: "Portfólio de Arthur Marinho dos Passos, desenvolvedor mobile Flutter e Dart com +5.500 downloads em 23 apps publicados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} font-sans text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
