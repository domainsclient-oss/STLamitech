import Image from "next/image"
import type { Product } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Reveal } from "./Reveal"

type SubProductCardProps = {
  product: Product
  index: number
  /** Spans both grid columns with the image beside the text (used for an odd last card). */
  wide?: boolean
  /** Card surface; pick the opposite of the section background. */
  surface?: "white" | "mist"
}

export function SubProductCard({ product, index, wide = false, surface = "white" }: SubProductCardProps) {
  const headingId = `${product.id}-title`
  return (
    <Reveal
      as="article"
      id={product.id}
      aria-labelledby={headingId}
      delay={(index % 2) * 100}
      className={cn(
        "group flex scroll-mt-28 flex-col overflow-hidden border border-transparent transition-[border-color,translate] duration-500 ease-(--ease-premium) hover:-translate-y-1 hover:border-charcoal/15",
        surface === "white" ? "bg-white" : "bg-mist",
        wide && "sm:col-span-2 sm:grid sm:grid-cols-2",
      )}
    >
      <div className={cn("relative aspect-[4/3] overflow-hidden bg-charcoal", wide && "sm:aspect-auto sm:min-h-full")}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes={wide ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-[scale] duration-[1.2s] ease-(--ease-premium) group-hover:scale-[1.05]"
        />
        <span className="absolute top-4 left-4 bg-charcoal-deep/65 px-2.5 py-1 font-heading text-xs tracking-widest text-white backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className={cn("flex flex-1 flex-col p-6 md:p-8", wide && "sm:justify-center")}>
        <h4 id={headingId} className="font-heading text-2xl font-semibold tracking-tight text-charcoal">
          {product.name}
        </h4>
        <div className="mt-4 h-px w-10 bg-charcoal/40 transition-[width] duration-700 ease-(--ease-premium) group-hover:w-16 group-hover:bg-charcoal" />
        <p className="mt-4 text-sm leading-relaxed text-graphite">{product.description}</p>

        <div className="mt-auto pt-6">
          <p className="eyebrow text-[0.65rem] text-steel">Typical Applications</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {product.applications.map((application) => (
              <li
                key={application}
                className={cn(
                  "border px-3 py-1.5 text-xs text-charcoal",
                  surface === "white" ? "border-border bg-mist/60" : "border-charcoal/10 bg-white",
                )}
              >
                {application}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  )
}
