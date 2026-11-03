import { Mail, MapPin, Phone } from "lucide-react"
import { contactDetails } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/ui/Reveal"
import { ContactForm } from "./ContactForm"

// Locations without address lines yet are hidden until their details are added.
const locations = contactDetails.locations.filter((location) => location.lines.length > 0)

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-24 md:py-32 xl:py-40">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-16 xl:gap-24">
        <div className="lg:col-span-5">
          <Reveal as="p" className="eyebrow mb-5 flex items-center gap-3 text-graphite">
            <span aria-hidden="true" className="h-px w-8 bg-charcoal/40" />
            Contact
          </Reveal>
          <Reveal
            as="h2"
            id="contact-title"
            delay={80}
            className="text-4xl leading-[1.05] font-semibold tracking-tight text-charcoal md:text-5xl xl:text-6xl"
          >
            Let’s Build Something Better Together.
          </Reveal>
          <Reveal as="p" delay={160} className="mt-8 max-w-md text-lg leading-relaxed text-graphite">
            Connect with our team to discuss your material requirements and explore the right solutions for your
            business.
          </Reveal>

          <Reveal delay={240} className="mt-12 space-y-0 border-t border-border">
            <ContactRow icon={<Mail aria-hidden="true" className="size-4" />} label="Email">
              <a href={`mailto:${contactDetails.email}`} className="hover:underline">
                {contactDetails.email}
              </a>
            </ContactRow>
            <ContactRow icon={<Phone aria-hidden="true" className="size-4" />} label="Phone">
              <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} className="hover:underline">
                {contactDetails.phone}
              </a>
            </ContactRow>
          </Reveal>

          <div className={cn("mt-10 grid gap-4", locations.length > 1 && "sm:grid-cols-2")}>
            {locations.map((location, i) => (
              <Reveal key={location.city} delay={300 + i * 80} className="bg-mist p-6">
                <p className="flex items-center gap-2 font-heading text-lg font-medium text-charcoal">
                  <MapPin aria-hidden="true" className="size-4 text-graphite" />
                  {location.city}
                </p>
                <address className="mt-3 text-sm leading-relaxed text-graphite not-italic">
                  {location.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150} className="relative border border-border bg-white p-6 sm:p-10 lg:col-span-7 xl:p-14">
          <p className="eyebrow mb-10 text-graphite">Send an Inquiry</p>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-border py-5">
      <span className="flex items-center gap-3 text-sm text-graphite">
        {icon}
        {label}
      </span>
      <span className="text-right text-sm font-medium text-charcoal">{children}</span>
    </div>
  )
}
