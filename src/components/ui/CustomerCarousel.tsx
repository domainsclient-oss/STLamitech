import Image from "next/image"
import { customers } from "@/lib/site"
import { cn } from "@/lib/utils"

// Size each logo to the same visual area so wide wordmarks and compact marks look balanced.
const LOGO_AREA = 5600

function logoSize(ratio: number) {
  return {
    width: Math.round(Math.sqrt(LOGO_AREA * ratio)),
    height: Math.round(Math.sqrt(LOGO_AREA / ratio)),
  }
}

type Customer = (typeof customers)[number]

// Seconds per logo, so the shorter row moves at the same speed as the longer one.
const SECONDS_PER_LOGO = 5.5

/**
 * One infinite, CSS-only logo row; `reverse` scrolls left-to-right. Tiles are at least 21vw wide, so
 * even a 5-logo row is wider than the screen: it loops without a gap and never shows a logo twice.
 */
function MarqueeRow({
  items,
  reverse = false,
  className,
}: {
  items: readonly Customer[]
  reverse?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        "marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn("marquee-track flex w-max", reverse && "marquee-track-reverse")}
        style={{ "--marquee-duration": `${items.length * SECONDS_PER_LOGO}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 ? "true" : undefined} className="flex shrink-0">
            {items.map((customer) => {
              const { width, height } = logoSize(customer.ratio)
              return (
                <li
                  key={`${copy}-${customer.file}`}
                  className="flex h-24 w-[max(12rem,21vw)] shrink-0 items-center justify-center border-r border-border px-6 md:h-28"
                >
                  <Image
                    src={`/images/customers/${customer.file}`}
                    alt={copy === 1 ? "" : customer.name}
                    width={width}
                    height={height}
                    className="h-auto max-w-full scale-[0.78] object-contain md:scale-[0.92]"
                  />
                </li>
              )
            })}
          </ul>
        ))}
      </div>
    </div>
  )
}

/** Two logo rows moving in opposite directions, with the customers split between them (6 + 5 for 11). */
export function CustomerCarousel() {
  const half = Math.ceil(customers.length / 2)
  return (
    <div>
      <MarqueeRow items={customers.slice(0, half)} />
      <MarqueeRow items={customers.slice(half)} reverse className="border-t border-border" />
    </div>
  )
}
