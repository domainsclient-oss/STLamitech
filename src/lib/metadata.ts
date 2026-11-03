import type { Metadata } from "next"
import { site } from "./site"

const ogImage = {
  url: "/images/hero-production-line-v3.webp",
  width: 2560,
  height: 1396,
  alt: "STLamitech — advanced material solutions",
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
