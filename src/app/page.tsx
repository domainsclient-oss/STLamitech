import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { CertificationsSection } from "@/components/sections/CertificationsSection"
import { CustomersSection } from "@/components/sections/CustomersSection"
import { ProductsSection } from "@/components/sections/ProductsSection"
import { FacilitiesSection } from "@/components/sections/FacilitiesSection"
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { site } from "@/lib/site"

// Organization structured data limited to verified details (company name and description).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
      />
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <CustomersSection />
      <ProductsSection />
      <FacilitiesSection />
      <CapabilitiesSection />
      <ContactSection />
    </>
  )
}
