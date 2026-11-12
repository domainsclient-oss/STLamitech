import { productCategories } from "@/lib/site"
import { ButtonLink } from "@/components/ui/ButtonLink"
import { ProductCard } from "@/components/ui/ProductCard"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function ProductsSection() {
  const total = productCategories.reduce((sum, c) => sum + c.products.length, 0)
  return (
    <section id="products" aria-labelledby="products-title" className="bg-white py-24 md:py-32 xl:py-40">
      <div className="container-page">
        <SectionHeading
          id="products-title"
          eyebrow="Products & Services"
          title="Every Layer of a Comfortable Seat"
          description="The foam that cushions, the scrim that supports and the lamination that brings them together with the face fabric."
        />
        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {productCategories.map((category, i) => (
            <ProductCard key={category.id} category={category} order={i} />
          ))}
        </div>
        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-graphite">
            {productCategories.length} solution categories · {total} product lines
          </p>
          <ButtonLink href="/contact">Talk to Our Team</ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
