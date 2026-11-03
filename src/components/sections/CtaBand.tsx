import { contactDetails } from "@/lib/site"
import { ButtonLink } from "@/components/ui/ButtonLink"
import { Reveal } from "@/components/ui/Reveal"

/** Closing call-to-action used at the end of the inner pages. */
export function CtaBand({
  title = "Discuss Your Material Requirements.",
  description = "Connect with our team to explore the right lamination, foam and scrim solutions for your business.",
}: {
  title?: string
  description?: string
}) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-charcoal-deep py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_right,#000_15%,transparent_70%)]"
      />
      <div className="container-page relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Reveal as="p" className="eyebrow mb-5 flex items-center gap-3 text-white/60">
            <span aria-hidden="true" className="h-px w-8 bg-white/40" />
            Get in Touch
          </Reveal>
          <Reveal
            as="h2"
            id="cta-title"
            delay={80}
            className="text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl xl:text-6xl"
          >
            {title}
          </Reveal>
          <Reveal as="p" delay={160} className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {description}
          </Reveal>
        </div>
        <Reveal delay={240} className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
          <ButtonLink href="/contact" variant="light">
            Contact Our Team
          </ButtonLink>
          <ButtonLink href={`mailto:${contactDetails.email}`} variant="outlineLight" icon={false}>
            {contactDetails.email}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
