import Link from "next/link"
import { productCategories } from "@/lib/site"
import { cn } from "@/lib/utils"
import { ButtonLink } from "@/components/ui/ButtonLink"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { SubProductCard } from "@/components/ui/SubProductCard"

/** Full product catalogue: one section per category, with a card for every sub-category. */
export function ProductDetailSection() {
  const total = productCategories.reduce((sum, c) => sum + c.products.length, 0)
  return (
    <>
      <section aria-labelledby="catalogue-title" className="bg-white pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container-page">
          <SectionHeading
            id="catalogue-title"
            eyebrow="Our Portfolio"
            title="Engineered Material Solutions"
            description={`${productCategories.length} solution categories and ${total} product lines, designed for performance, flexibility and diverse industrial applications.`}
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
        </div>
      </section>

      {productCategories.map((category, i) => {
        const tinted = i % 2 === 1
        const odd = category.products.length % 2 === 1
        return (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-category-title`}
            className={cn("scroll-mt-20 py-20 md:py-28", tinted ? "bg-mist" : "border-t border-border bg-white")}
          >
            <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <Reveal as="p" className="eyebrow mb-5 flex items-center gap-3 text-graphite">
                    <span aria-hidden="true" className="h-px w-8 bg-charcoal/40" />
                    {category.index} · Solution Category
                  </Reveal>
                  <Reveal
                    as="h3"
                    id={`${category.id}-category-title`}
                    delay={80}
                    className="text-5xl leading-[1] font-semibold tracking-tight text-charcoal md:text-6xl"
                  >
                    {category.title}
                  </Reveal>
                  <Reveal as="p" delay={160} className="mt-6 max-w-sm text-lg leading-relaxed text-graphite">
                    {category.summary}
                  </Reveal>

                  <Reveal as="ul" delay={220} aria-label={`${category.title} product lines`} className="mt-10 hidden border-t border-border lg:block">
                    {category.products.map((product, p) => (
                      <li key={product.id}>
                        <Link
                          href={`#${product.id}`}
                          className="group flex items-baseline gap-4 border-b border-border py-3 text-sm text-charcoal transition-colors hover:text-black"
                        >
                          <span className="text-xs text-steel tabular-nums">{String(p + 1).padStart(2, "0")}</span>
                          <span className="transition-[translate] duration-500 ease-(--ease-premium) group-hover:translate-x-1">
                            {product.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </Reveal>

                  <Reveal delay={280} className="mt-10">
                    <ButtonLink href="/contact" variant="outlineDark">
                      Enquire About {category.title}
                    </ButtonLink>
                  </Reveal>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
                {category.products.map((product, p) => (
                  <SubProductCard
                    key={product.id}
                    product={product}
                    index={p}
                    surface={tinted ? "white" : "mist"}
                    wide={odd && p === category.products.length - 1}
                  />
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
