import Image from "next/image"
import Link from "next/link"
import { productCategories } from "@/lib/site"
import { cn } from "@/lib/utils"
import { ButtonLink } from "@/components/ui/ButtonLink"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

/** Full product catalogue: one alternating image/list row per solution category. */
export function ProductDetailSection() {
  return (
    <section aria-labelledby="catalogue-title" className="bg-white py-24 md:py-32 xl:py-40">
      <div className="container-page">
        <SectionHeading
          id="catalogue-title"
          eyebrow="Our Portfolio"
          title="Engineered Material Solutions"
          description="Specialized material solutions designed for performance, flexibility and diverse industrial applications."
        />

        <Reveal as="nav" aria-label="Solution categories" delay={200} className="mt-12 md:mt-16">
          <ul className="grid border-y border-border sm:grid-cols-3">
            {productCategories.map((category) => (
              <li key={category.id} className="border-border not-last:border-b sm:not-last:border-r sm:not-last:border-b-0">
                <Link
                  href={`#${category.id}`}
                  className="group flex items-center justify-between gap-4 px-1 py-5 transition-colors hover:bg-mist sm:px-6"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs text-steel tabular-nums">{category.index}</span>
                    <span className="font-heading text-lg font-medium text-charcoal">{category.title}</span>
                  </span>
                  <span className="text-xs text-graphite">{category.products.length} lines</span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-20 space-y-24 md:mt-28 md:space-y-32 xl:space-y-40">
          {productCategories.map((category, i) => {
            const flip = i % 2 === 1
            return (
              <article
                key={category.id}
                id={category.id}
                aria-labelledby={`${category.id}-title`}
                className="grid scroll-mt-28 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16"
              >
                <Reveal
                  variant="image"
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden bg-mist lg:col-span-6 lg:aspect-[5/6]",
                    flip && "lg:order-2",
                  )}
                >
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-6 left-6 bg-charcoal-deep/60 px-2.5 py-1 font-heading text-sm tracking-widest text-white backdrop-blur-sm">
                    {category.index}
                  </span>
                </Reveal>

                <div className={cn("lg:col-span-6", flip ? "lg:order-1 lg:pr-6" : "lg:pl-6")}>
                  <Reveal as="p" className="eyebrow mb-5 flex items-center gap-3 text-graphite">
                    <span aria-hidden="true" className="h-px w-8 bg-charcoal/40" />
                    {category.index} · Solution Category
                  </Reveal>
                  <Reveal
                    as="h3"
                    id={`${category.id}-title`}
                    delay={80}
                    className="text-4xl leading-[1.05] font-semibold tracking-tight text-charcoal md:text-5xl xl:text-6xl"
                  >
                    {category.title}
                  </Reveal>
                  <Reveal as="p" delay={160} className="mt-6 max-w-md text-lg leading-relaxed text-graphite">
                    {category.summary}
                  </Reveal>

                  <ul className="mt-10 grid border-t border-border sm:grid-cols-2 sm:gap-x-8">
                    {category.products.map((product, p) => (
                      <Reveal
                        as="li"
                        key={product}
                        delay={200 + p * 60}
                        className="flex items-baseline gap-4 border-b border-border py-4"
                      >
                        <span className="text-xs text-steel tabular-nums">{String(p + 1).padStart(2, "0")}</span>
                        <span className="font-medium text-charcoal">{product}</span>
                      </Reveal>
                    ))}
                  </ul>

                  <Reveal delay={300} className="mt-10">
                    <ButtonLink href="/contact" variant="outlineDark">
                      Enquire About {category.title}
                    </ButtonLink>
                  </Reveal>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
