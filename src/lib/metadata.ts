import type { Metadata } from "next"
import { site } from "./site"

const ogImage = {
  url: "/images/og-image.png",
  type: "image/png",
  width: 1200,
  height: 630,
  alt: "ST Lamitech logo",
}

/**
 * Metadata for an inner page. Open Graph and Twitter objects are replaced (not merged)
 * by child segments, so the shared image is repeated here.
 */
export function pageMetadata({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  const fullTitle = `${title} — ${site.name}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      locale: "en_IN",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  }
}
