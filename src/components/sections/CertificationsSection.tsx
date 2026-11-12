import { certifications } from "@/lib/site"
import { CertificationCard } from "@/components/ui/CertificationCard"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="border-t border-border bg-white py-24 md:py-32"
    >
      <div className="container-page">
        <SectionHeading
          id="certifications-title"
          eyebrow="Certifications"
          title="Quality You Can Sit On"
          description="Seating materials made under internationally recognised quality management standards, so comfort and finish stay consistent from vehicle to vehicle."
        />
        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 md:gap-6">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.code} index={i} {...cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
