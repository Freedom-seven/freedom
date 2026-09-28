import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { identity } from "@/content/identity";
import "./globals.css";
import "./chrome.css";

export const metadata: Metadata = {
  title: {
    default: `${identity.name} — ${identity.role}`,
    template: `%s — ${identity.name}`,
  },
  description:
    "The bench of a software engineer. Systems laid open in layers — interface, service, data, platform — with the decisions pinned where they were made, and what each one cost.",
  keywords: [
    "software engineer",
    "full-stack",
    "React",
    "React Native",
    "Node.js",
    "Solidity",
    "portfolio",
  ],
  openGraph: {
    title: `${identity.name} — ${identity.role}`,
    description:
      "A working bench, not a gallery: systems shown in cross-section, decisions pinned where they were made.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f4f1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Link href="#main" className="skip-link">
          Skip to content
        </Link>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
