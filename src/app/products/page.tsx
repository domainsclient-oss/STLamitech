import { PageHero } from "@/components/sections/PageHero"
import { ProductDetailSection } from "@/components/sections/ProductDetailSection"
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection"
import { CtaBand } from "@/components/sections/CtaBand"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/products",
  title: "Products & Services",
  description:
    "Flame, hot melt and PUR lamination, seating foams and backing scrims from STLamitech, engineered for the softness, support and finish of automotive seats.",
})

export default function ProductsPage() {
  return (
    <>
      <PageHero
        path="/products"
        eyebrow="Products & Services"
        title="Every Layer of the Seat."
        description="Laminations, foams and scrims engineered for the softness, support and finish of factory-fitted seating."
        image="/images/products-banner.webp"
        imageAlt="Worker loading yarn spools onto an industrial knitting machine in a textile factory"
      />
      <ProductDetailSection />
      <CapabilitiesSection />
      <CtaBand
        title="Not Sure Which Material Fits?"
        description="Share your seat cover or cushion requirements and our team will help you find the right combination."
      />
    </>
  )
}
