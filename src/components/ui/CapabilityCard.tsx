import Image from "next/image"
import { FlaskConical, PackageCheck, Truck, Warehouse, type LucideIcon } from "lucide-react"
import type { CapabilityIcon } from "@/lib/site"
import { Reveal } from "./Reveal"

const icons: Record<CapabilityIcon, LucideIcon> = {
  lab: FlaskConical,
  storage: Warehouse,
  transport: Truck,
  packing: PackageCheck,
}

type CapabilityCardProps = {
  icon: CapabilityIcon
  title: string
  description: string
  image: string
  imageAlt: string
  index: number
}

/** Dark capability tile; photography fades in behind the content on hover/focus. */
export function CapabilityCard({ icon, title, description, image, imageAlt, index }: CapabilityCardProps) {
  const Icon = icons[icon]
  return (
    <Reveal
      as="article"
      delay={index * 110}
      className="group relative isolate flex min-h-[24rem] flex-col justify-between overflow-hidden border border-white/10 bg-white/[0.03] p-7 transition-[border-color,transform] duration-500 ease-(--ease-premium) hover:-translate-y-1 hover:border-white/30 md:min-h-[28rem] md:p-9"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="-z-20 scale-110 object-cover grayscale transition-[transform,filter] duration-[1.2s] ease-(--ease-premium) group-hover:scale-100 group-hover:grayscale-[30%]"
      />
      <div className="absolute inset-0 -z-10 bg-charcoal/85 transition-colors duration-700 group-hover:bg-charcoal-deep/60" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[linear-gradient(0deg,rgba(28,28,28,0.9),transparent)]" />

      <div className="flex items-start justify-between">
        <span className="flex size-16 items-center justify-center border border-white/20 transition-colors duration-500 group-hover:border-white group-hover:bg-white">
          <Icon aria-hidden="true" strokeWidth={1.25} className="size-7 text-white transition-colors duration-500 group-hover:text-charcoal" />
        </span>
        <span className="font-heading text-sm tracking-widest text-white/40">0{index + 1}</span>
      </div>

      <div>
        <h3 className="font-heading text-2xl leading-tight font-semibold tracking-tight text-white md:text-3xl">{title}</h3>
        <div className="my-5 h-px w-10 bg-white/40 transition-[width] duration-700 ease-(--ease-premium) group-hover:w-20 group-hover:bg-white" />
        <p className="text-sm leading-relaxed text-white/65 transition-colors duration-500 group-hover:text-white/85">
          {description}
        </p>
      </div>
    </Reveal>
  )
}
