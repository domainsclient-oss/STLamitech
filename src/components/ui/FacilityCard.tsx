import Image from "next/image"
import { MapPin } from "lucide-react"
import { Reveal } from "./Reveal"

type FacilityCardProps = {
  id: string
  location: string
  title: string
  description: string
  image: string
  imageAlt: string
  index: number
}

export function FacilityCard({ id, location, title, description, image, imageAlt, index }: FacilityCardProps) {
  return (
    <article aria-labelledby={`${id}-title`} className="group">
      <Reveal variant="image" delay={index * 150} className="relative aspect-[4/3] overflow-hidden bg-charcoal [--curtain:var(--color-mist)] md:aspect-[5/4]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover grayscale-[50%] transition-[scale,filter] duration-[1.4s] ease-(--ease-premium) group-hover:scale-[1.05] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(28,28,28,0.75),rgba(28,28,28,0)_55%)]" />
        <p className="eyebrow absolute bottom-6 left-6 flex items-center gap-2 text-white md:bottom-8 md:left-8">
          <MapPin aria-hidden="true" className="size-4" />
          {location}
        </p>
        <span className="absolute top-6 right-6 font-heading text-sm tracking-widest text-white/70 md:top-8 md:right-8">
          0{index + 1}
        </span>
      </Reveal>
      <Reveal delay={index * 150 + 150} className="grid gap-4 pt-8 md:grid-cols-[1fr_1.1fr] md:gap-8">
        <h3 id={`${id}-title`} className="font-heading text-2xl font-semibold tracking-tight text-charcoal md:text-3xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-graphite md:text-base">{description}</p>
      </Reveal>
    </article>
  )
}
