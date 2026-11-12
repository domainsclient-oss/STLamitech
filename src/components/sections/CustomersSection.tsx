import { CustomerCarousel } from "@/components/ui/CustomerCarousel"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Reveal } from "@/components/ui/Reveal"

export function CustomersSection() {
  return (
    <section id="customers" aria-labelledby="customers-title" className="bg-mist py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="customers-title"
          eyebrow="Customers"
          title="Trusted by Vehicle & Seating Manufacturers"
          description="Long-term partnerships built on consistent quality, dependable supply and seating materials that perform."
        />
      </div>
      <Reveal variant="fade" delay={200} className="mt-14 border-y border-border bg-white md:mt-20">
        <CustomerCarousel />
      </Reveal>
    </section>
  )
}
