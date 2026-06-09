import type { Metadata, Viewport } from "next";
import { Geist, Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Body / UI — clean neutral grotesk.
const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Labels, service ticker, meta — editorial monospace.
const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Display headline + wordmark — characterful editorial grotesque.
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
  themeColor: "#f4f3ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${plexMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
