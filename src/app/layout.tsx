import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { identity } from "@/content/identity";
import "./globals.css";
import "./chrome.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(identity.baseUrl),
  title: {
    default: `${identity.name} · ${identity.role}`,
    template: `%s · ${identity.name}`,
  },
  description:
    "Shipped work, published decisions. A software engineer's record — web, mobile, and the systems underneath them — with the cost of every decision printed next to it.",
  openGraph: {
    type: "website",
    siteName: identity.name,
    url: identity.baseUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f5f7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${plexMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
