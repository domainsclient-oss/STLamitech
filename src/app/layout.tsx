import type { Metadata, Viewport } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const title = "STLamitech — Lamination, Foam & Scrim Material Solutions";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description: site.description,
    url: "/",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-production-line-v3.webp",
        width: 2560,
        height: 1396,
        alt: "STLamitech — advanced material solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/images/hero-production-line-v3.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#292929",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-white">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}[data-reveal=image]::after{display:none}.hero-rise{opacity:1!important;animation:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
