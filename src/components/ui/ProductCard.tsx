import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { ProductCategory } from "@/lib/site"
import { Reveal } from "./Reveal"

export function ProductCard({ category, order }: { category: ProductCategory; order: number }) {
  const headingId = `${category.id}-title`
  return (
    <Reveal
      as="article"
      id={category.id}
      aria-labelledby={headingId}
      delay={order * 120}
      className="group relative isolate flex min-h-[34rem] scroll-mt-28 flex-col overflow-hidden bg-charcoal text-white md:min-h-[38rem]"
    >
      <Image
        src={category.image}
        alt={category.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="-z-20 object-cover grayscale-[65%] transition-[scale,filter] duration-[1.4s] ease-(--ease-premium) group-hover:scale-[1.06] group-hover:grayscale-[20%]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(28,28,28,0.55)_0%,rgba(28,28,28,0.35)_35%,rgba(28,28,28,0.92)_75%)] transition-opacity duration-700 group-hover:opacity-90" />

      <div className="flex items-start justify-between p-7 md:p-9">
        <span className="font-heading text-sm tracking-widest text-white/60">{category.index}</span>
        <span className="flex size-11 items-center justify-center border border-white/30 transition-[background-color,border-color] duration-500 group-hover:border-white group-hover:bg-white">
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-[rotate,color] duration-500 ease-(--ease-premium) group-hover:rotate-45 group-hover:text-charcoal"
          />
        </span>
      </div>

      <div className="mt-auto p-7 md:p-9">
        <h3 id={headingId} className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
          {category.title}
        </h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">{category.summary}</p>
        <ul className="mt-7 border-t border-white/20">
          {category.products.map((product) => (
            <li key={product.id} className="border-b border-white/10">
              <Link
                href={`/products#${product.id}`}
                className="group/item flex items-center justify-between py-2.5 text-sm text-white/90 transition-[padding,color] duration-500 ease-(--ease-premium) group-hover:pl-1 hover:text-white"
              >
                {product.name}
                <span aria-hidden="true" className="h-px w-3 bg-white/40 transition-[width,background-color] duration-500 group-hover/item:w-6 group-hover/item:bg-white" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
