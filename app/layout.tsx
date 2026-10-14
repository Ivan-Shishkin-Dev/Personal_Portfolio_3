import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Terminal from "@/components/Terminal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
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
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        {children}
        <Terminal />
      </body>
    </html>
  );
}
