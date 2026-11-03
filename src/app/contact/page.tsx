import { PageHero } from "@/components/sections/PageHero"
import { ContactSection } from "@/components/sections/ContactSection"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact",
  description: "Contact STLamitech to discuss your lamination, foam and scrim material requirements.",
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        path="/contact"
        eyebrow="Contact"
        title="Let’s Talk Materials."
        description="Connect with our team to discuss your material requirements and explore the right solutions for your business."
        image="/images/facility-pune-v2.webp"
        imageAlt="Large manufacturing hall with symmetrical production bays"
      />
      <ContactSection />
    </>
  )
}
