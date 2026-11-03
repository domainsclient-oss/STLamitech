import Image from "next/image"
import { Reveal } from "@/components/ui/Reveal"
import { TextLink } from "@/components/ui/ButtonLink"

const focusAreas = [
  { title: "Manufacturing Capability", text: "Lamination, foam and scrim processes under one organisation." },
  { title: "Quality Focus", text: "Management systems aligned with IATF and ISO standards." },
  { title: "Customer-Focused Solutions", text: "Material solutions shaped around each customer’s requirements." },
]

const defaultImage = {
  src: "/images/about-plant-v4.webp",
  alt: "Engineers reviewing technical data on a tablet beside a CNC machine on the shop floor",
}

/** `image` lets inner pages use a different photo from the home page. */
export function AboutSection({ image = defaultImage }: { image?: { src: string; alt: string } }) {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-24 md:py-32 xl:py-40">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-24">
        <div className="relative lg:col-span-6">
          <Reveal variant="image" className="relative aspect-[4/5] overflow-hidden bg-mist sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale-[40%]"
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
            Built on Precision. Driven by Performance.
          </Reveal>
          <Reveal as="p" delay={160} className="mt-8 text-lg leading-relaxed text-charcoal/85">
            STLamitech is a manufacturer of advanced material solutions, specialising in laminations, foams and
            scrims for modern industrial applications.
          </Reveal>
          <Reveal as="p" delay={220} className="mt-5 leading-relaxed text-graphite">
            From our manufacturing facilities in Chennai and Pune, we bring together process capability, quality
            discipline and a customer-first approach — supported by in-house laboratory, storage and logistics
            infrastructure.
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
            <TextLink href="/products">Discover Our Capabilities</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
