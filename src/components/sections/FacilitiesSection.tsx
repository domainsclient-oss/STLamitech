import { facilities } from "@/lib/site"
import { FacilityCard } from "@/components/ui/FacilityCard"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function FacilitiesSection() {
  return (
    <section id="facilities" aria-labelledby="facilities-title" className="bg-mist py-24 md:py-32 xl:py-40">
      <div className="container-page">
        <SectionHeading
          id="facilities-title"
          eyebrow="Facilities"
          title="Where Seating Comfort Is Made."
          description="Two manufacturing facilities in India — Chennai and Pune — in two of the country’s major automotive hubs."
        />
        <div className="mt-14 grid gap-16 md:mt-20 md:grid-cols-2 md:gap-6 lg:gap-8">
          {facilities.map((facility, i) => (
            <FacilityCard key={facility.id} index={i} {...facility} />
          ))}
        </div>
      </div>
    </section>
  )
}
