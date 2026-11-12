import { PageHero } from "@/components/sections/PageHero"
import { AboutSection } from "@/components/sections/AboutSection"
import { CtaBand } from "@/components/sections/CtaBand"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/about",
  title: "About Us",
  description:
    "STLamitech is a seating lamination company producing fabrics, foams and scrims for factory-fitted car seats, from facilities in Chennai and Pune, India.",
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        path="/about"
        eyebrow="Who We Are"
        title="Comfort Starts Here."
        description="A seating lamination company producing the fabrics, foams and scrims behind factory-fitted car seats."
        image="/images/laminations-v2.webp"
        imageAlt="Rows of material rolls on an industrial production line"
      />
      <AboutSection
        image={{
          src: "/images/about-foam-cutting.webp",
          alt: "Technician cutting a block of foam on a band-saw foam cutting machine",
        }}
      />
      <CtaBand />
    </>
  )
}
