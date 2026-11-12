import { PageHero } from "@/components/sections/PageHero"
import { ContactSection } from "@/components/sections/ContactSection"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact",
  description: "Contact STLamitech to discuss laminations, foams and scrims for your automotive seating programme.",
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        path="/contact"
        eyebrow="Contact"
        title="Let’s Talk Seating."
        description="Connect with our team about seat cover materials, cushioning and backing for your next programme."
        image="/images/facility-pune-v2.webp"
        imageAlt="Large manufacturing hall with symmetrical production bays"
      />
      <ContactSection />
    </>
  )
}
