import Image from "next/image"
import { capabilities } from "@/lib/site"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

// Only the capabilities that directly support quality; copy comes from the shared site content.
const practices = capabilities.filter((c) => c.id === "lab" || c.id === "packing")

export function QualityPracticeSection() {
  return (
    <section aria-labelledby="quality-title" className="bg-mist py-24 md:py-32 xl:py-40">
      <div className="container-page">
        <SectionHeading
          id="quality-title"
          eyebrow="Quality in Practice"
          title="Standards Supported by Infrastructure."
          description="Our certified management systems are backed by in-house testing and automotive-oriented packing practices."
        />
        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-6 lg:gap-8">
          {practices.map((practice, i) => (
            <article key={practice.id} aria-labelledby={`${practice.id}-practice-title`} className="group">
              <Reveal
                variant="image"
                delay={i * 150}
                className="relative aspect-[16/10] overflow-hidden bg-charcoal [--curtain:var(--color-mist)]"
              >
                <Image
                  src={practice.image}
                  alt={practice.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-[scale] duration-[1.4s] ease-(--ease-premium) group-hover:scale-[1.04]"
                />
              </Reveal>
              <Reveal delay={i * 150 + 150} className="grid gap-4 pt-8 md:grid-cols-[1fr_1.1fr] md:gap-8">
                <h3
                  id={`${practice.id}-practice-title`}
                  className="font-heading text-2xl font-semibold tracking-tight text-charcoal md:text-3xl"
                >
                  {practice.title}
                </h3>
                <p className="text-sm leading-relaxed text-graphite md:text-base">{practice.description}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
