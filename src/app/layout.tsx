import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "cev.studio — digital agency",
  description:
    "A small studio building web, mobile, brand identity and 3D. Tell us what you're making.",
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
