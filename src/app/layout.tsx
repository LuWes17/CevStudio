import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Body / UI — humanist grotesk, warm but precise.
const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Labels, indices, service ticker, meta — technical monospace.
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Display headline + wordmark — heavy industrial grotesque.
const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cev.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "cev.studio — independent digital studio",
    template: "%s",
  },
  description:
    "A small studio building web development, mobile apps, brand identity, and 3D. Tell us what you're making.",
  keywords: [
    "digital studio",
    "web development",
    "mobile apps",
    "brand identity",
    "3D modelling",
    "design agency",
  ],
  authors: [{ name: "cev.studio" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "cev.studio",
    title: "cev.studio — independent digital studio",
    description:
      "Web development, mobile apps, brand identity, and 3D — end to end. Tell us what you're making.",
  },
  twitter: {
    card: "summary_large_image",
    title: "cev.studio — independent digital studio",
    description:
      "Web development, mobile apps, brand identity, and 3D. Tell us what you're making.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1d1d1d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col">
        <div className="atmosphere" aria-hidden />
        {children}
      </body>
    </html>
  );
}
