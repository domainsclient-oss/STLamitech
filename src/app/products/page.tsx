import { PageHero } from "@/components/sections/PageHero"
import { ProductDetailSection } from "@/components/sections/ProductDetailSection"
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection"
import { CtaBand } from "@/components/sections/CtaBand"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/products",
  title: "Products & Services",
  description:
    "Flame, hot melt and PUR lamination, a broad range of foams, and mono, warp netted and circular knitted scrims from STLamitech.",
})

export default function ProductsPage() {
  return (
    <>
      <PageHero
        path="/products"
        eyebrow="Products & Services"
        title="Laminations. Foam. Scrim."
        description="Specialized material solutions designed for performance, flexibility and diverse industrial applications."
        image="/images/products-banner.webp"
        imageAlt="Worker loading yarn spools onto an industrial knitting machine in a textile factory"
      />
      <ProductDetailSection />
      <CapabilitiesSection />
      <CtaBand
        title="Not Sure Which Material Fits?"
        description="Share your application requirements and our team will help you identify the right solution."
      />
    </>
  )
}
