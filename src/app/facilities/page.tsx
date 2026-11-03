import { PageHero } from "@/components/sections/PageHero"
import { FacilitiesSection } from "@/components/sections/FacilitiesSection"
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection"
import { CtaBand } from "@/components/sections/CtaBand"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/facilities",
  title: "Facilities",
  description:
    "STLamitech’s manufacturing facilities in Chennai and Pune, supported by lab, storage, transport and automotive packing capabilities.",
})

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        path="/facilities"
        eyebrow="Facilities"
        title="Manufacturing Presence."
        description="Two manufacturing facilities in India — Chennai and Pune — supported by in-house laboratory, storage and logistics infrastructure."
        image="/images/hero-production-line-v3.webp"
        imageAlt="Bright, modern manufacturing hall with CNC machining cells and automated workstations"
      />
      <FacilitiesSection />
      <CapabilitiesSection />
      <CtaBand />
    </>
  )
}
