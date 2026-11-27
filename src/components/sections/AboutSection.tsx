import Image from "next/image"
import { Reveal } from "@/components/ui/Reveal"
import { TextLink } from "@/components/ui/ButtonLink"

const focusAreas = [
  { title: "Softness", text: "Foam and lamination choices tuned for a soft, welcoming first touch." },
  { title: "Comfort", text: "Cushioning and breathable layers that support occupants mile after mile." },
  { title: "Density", text: "Foam densities matched to each seat zone for lasting shape and support." },
  { title: "Bonding", text: "Strong, even adhesion between fabric, foam and scrim that holds through years of use." },
  { title: "Finish", text: "Smooth, consistent laminates that help seat covers sew and fit cleanly." },
]

type AboutImage = {
  src: string
  alt: string
  /** CSS object-position, to keep the subject in frame when the tall crop trims a wide photo. */
  position?: string
}

const defaultImage: AboutImage = {
  src: "/images/about-luxury-car-seats.webp",
  alt: "Diamond-quilted cognac leather rear seats beside a polished centre armrest in a luxury car",
  position: "85% center",
}

/** `image` lets inner pages use a different photo from the home page. */
export function AboutSection({ image = defaultImage }: { image?: AboutImage }) {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-24 md:py-32 xl:py-40">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-24">
        <div className="relative lg:col-span-6">
          {/* From lg up the image fills the row, so it always matches the height of the text column. */}
          <Reveal
            variant="image"
            className="relative aspect-[4/5] overflow-hidden bg-mist sm:aspect-[4/3] lg:absolute lg:inset-0 lg:aspect-auto"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              // The tall lg crop shows only a slice of the landscape photo, so it needs far more than the column's width.
              sizes="(min-width: 1024px) 150vw, 100vw"
              className="object-cover"
              style={image.position ? { objectPosition: image.position } : undefined}
            />
          </Reveal>
          <Reveal
            delay={300}
            className="absolute -bottom-6 left-6 hidden bg-charcoal px-7 py-6 text-white sm:block lg:-right-10 lg:left-auto"
          >
            <p className="eyebrow text-white/55">Manufacturing in</p>
            <p className="mt-2 font-heading text-2xl font-medium tracking-tight">Chennai &amp; Pune</p>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center lg:col-span-6">
          <Reveal as="p" className="eyebrow mb-5 flex items-center gap-3 text-graphite">
            <span aria-hidden="true" className="h-px w-8 bg-charcoal/40" />
            Who We Are
          </Reveal>
          <Reveal
            as="h2"
            id="about-title"
            delay={80}
            className="text-4xl leading-[1.05] font-semibold tracking-tight text-charcoal md:text-5xl xl:text-6xl"
          >
            The Comfort Behind Every Factory-Fitted Seat.
          </Reveal>
          <Reveal as="p" delay={160} className="mt-8 text-lg leading-relaxed text-charcoal/85">
            STLamitech is a seating lamination company. We produce the automotive-standard, industrial-grade laminated fabrics, foams and scrims that
            vehicle manufacturers and their seating suppliers turn into the standard seat covers and cushions fitted
            to new cars.
          </Reveal>
          <Reveal as="p" delay={220} className="mt-5 leading-relaxed text-graphite">
            From our facilities in Chennai and Pune, we focus on what passengers notice every day — how soft a seat
            feels, how well it supports, and how cleanly its cover is finished — backed by in-house laboratory,
            storage and logistics infrastructure.
          </Reveal>

          <ul className="mt-12 border-t border-border">
            {focusAreas.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={260 + i * 80}
                className="grid gap-1 border-b border-border py-5 sm:grid-cols-[2.5rem_1fr_1.4fr] sm:gap-6"
              >
                <span className="text-xs text-steel tabular-nums">0{i + 1}</span>
                <span className="font-heading font-medium text-charcoal">{item.title}</span>
                <span className="text-sm leading-relaxed text-graphite">{item.text}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={400} className="mt-10">
            <TextLink href="/products">Explore Seating Materials</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
