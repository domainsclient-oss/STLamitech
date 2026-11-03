import { PageHero } from "@/components/sections/PageHero"
import { AboutSection } from "@/components/sections/AboutSection"
import { ProductsSection } from "@/components/sections/ProductsSection"
import { CtaBand } from "@/components/sections/CtaBand"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/about",
  title: "About Us",
  description:
    "STLamitech manufactures advanced lamination, foam and scrim solutions from facilities in Chennai and Pune, India.",
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        path="/about"
        eyebrow="Who We Are"
        title="Built on Precision."
        description="A manufacturer of advanced material solutions, specialising in laminations, foams and scrims for modern industrial applications."
        image="/images/laminations-v2.webp"
        imageAlt="Rows of material rolls on an industrial production line"
      />
      <AboutSection
        image={{
          src: "/images/about-foam-cutting.webp",
          alt: "Technician cutting a block of foam on a band-saw foam cutting machine",
        }}
      />
      <ProductsSection />
      <CtaBand />
    </>
  )
}
