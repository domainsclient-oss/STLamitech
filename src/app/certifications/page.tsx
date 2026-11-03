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
    "STLamitech’s quality management is aligned with internationally recognised IATF and ISO standards.",
})

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        path="/certifications"
        eyebrow="Certifications"
        title="Quality to Global Standards."
        description="Our commitment to quality is reflected in internationally recognized management standards."
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
