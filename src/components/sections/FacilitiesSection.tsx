import { FacilityMap } from "@/components/ui/FacilityMap"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function FacilitiesSection() {
  return (
    <section id="facilities" aria-labelledby="facilities-title" className="bg-mist py-24 md:py-32 xl:py-40">
      <div className="container-page">
        <SectionHeading
          id="facilities-title"
          eyebrow="Facilities"
          title="Where Seating Comfort Is Made."
          description="Two industrial-grade manufacturing facilities in India — Chennai and Pune — in two of the country’s major automotive hubs."
        />
        <FacilityMap />
      </div>
    </section>
  )
}
