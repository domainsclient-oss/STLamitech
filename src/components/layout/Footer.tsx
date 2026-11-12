import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { contactDetails, navLinks, productCategories } from "@/lib/site"
import { Logo } from "@/components/ui/Logo"
import { SocialIcon } from "@/components/ui/SocialIcon"

async function CopyrightYear() {
  "use cache"
  return <>{new Date().getFullYear()}</>
}

export function Footer() {
  return (
    <footer className="bg-charcoal-deep text-white">
      <div className="container-page grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
            Laminations, foams and scrims engineered for the softness, comfort and finish of automotive
            seating.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Social media">
            {contactDetails.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="inline-flex h-10 items-center gap-2 border border-white/15 px-4 text-xs tracking-wide text-white/70 transition-colors hover:border-white hover:text-white"
                >
                  <SocialIcon network={social.network} className="size-4 shrink-0" />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title="Navigate" className="lg:col-span-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <FooterLink href={link.href}>{link.label}</FooterLink>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Solutions" className="lg:col-span-2">
          {productCategories.map((category) => (
            <li key={category.id}>
              <FooterLink href={`/products#${category.id}`}>{category.title}</FooterLink>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact Us" className="lg:col-span-4">
          {contactDetails.locations
            .filter((location) => location.city !== "Pune")
            .map((location) => (
              <li key={location.city} className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-white/45" />
                <div>
                  <p className="text-sm text-white">{location.city}</p>
                  <address className="mt-1 text-xs leading-relaxed text-white/50 not-italic">
                    {location.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </li>
            ))}
          <li className="flex items-center gap-3 pt-2">
            <Mail aria-hidden="true" className="size-4 shrink-0 text-white/45" />
            <FooterLink href={`mailto:${contactDetails.email}`}>{contactDetails.email}</FooterLink>
          </li>
          <li className="flex items-center gap-3">
            <Phone aria-hidden="true" className="size-4 shrink-0 text-white/45" />
            <FooterLink href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}>{contactDetails.phone}</FooterLink>
          </li>
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> ST LAMITECH INDIA PRIVATE LIMITED. All rights reserved.
          </p>
          <a href="#top" className="transition-colors hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h2 className="eyebrow mb-6 font-sans text-white/45">{title}</h2>
      <ul className="space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-white/75 transition-colors duration-300 hover:text-white">
      {children}
    </Link>
  )
}
