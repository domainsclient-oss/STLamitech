import { PageHero } from "@/components/sections/PageHero"
import { CertificationsSection } from "@/components/sections/CertificationsSection"
import { QualityPracticeSection } from "@/components/sections/QualityPracticeSection"
import { CustomersSection } from "@/components/sections/CustomersSection"
import { CtaBand } from "@/components/sections/CtaBand"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/certifications",
  title: "Certifications",
  description:
    "STLamitech’s seating materials are made under quality management aligned with internationally recognised IATF and ISO standards.",
})

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        path="/certifications"
        eyebrow="Certifications"
        title="Consistent Comfort, Certified."
        description="IATF and ISO aligned quality management, so every seating material feels and finishes the way it should."
        image="/images/certifications-banner.webp"
        imageAlt="Factory worker in a safety helmet checking the quality of produced material samples"
        imagePosition="center 20%"
      />
      <CertificationsSection />
      <QualityPracticeSection />
      <CustomersSection />
      <CtaBand />
    </>
  )
}
