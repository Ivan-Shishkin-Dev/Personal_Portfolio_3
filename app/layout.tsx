import type { Metadata } from "next";
import { Spectral, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--ser",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ivanshishkin.com"),
  title: { default: "Ivan Shishkin", template: "%s — Ivan Shishkin" },
  description: "Computer Science student at UC Irvine. AI and safe systems.",
  openGraph: {
    title: "Ivan Shishkin",
    description: "Computer Science student at UC Irvine. AI and safe systems.",
    url: "/",
    siteName: "Ivan Shishkin",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Ivan Shishkin" },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
