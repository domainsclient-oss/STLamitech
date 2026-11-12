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

/** One infinite, CSS-only logo row. `reverse` scrolls left-to-right; `decorative` hides the whole row from assistive tech. */
function MarqueeRow({
  items,
  reverse = false,
  decorative = false,
  duration,
  className,
}: {
  items: readonly Customer[]
  reverse?: boolean
  decorative?: boolean
  duration: string
  className?: string
}) {
  return (
    <div
      aria-hidden={decorative ? "true" : undefined}
      className={cn(
        "marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn("marquee-track flex w-max", reverse && "marquee-track-reverse")}
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 ? "true" : undefined} className="flex shrink-0">
            {items.map((customer) => {
              const { width, height } = logoSize(customer.ratio)
              const hidden = decorative || copy === 1
              return (
                <li
                  key={`${copy}-${customer.file}`}
                  className="flex h-24 w-48 shrink-0 items-center justify-center border-r border-border px-6 md:h-28 md:w-60"
                >
                  <Image
                    src={`/images/customers/${customer.file}`}
                    alt={hidden ? "" : customer.name}
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

/**
 * Two logo rows moving in opposite directions. Both rows carry every customer (the second in reverse
 * order) so each row is always wider than the viewport and loops without gaps. The second row is a
 * visual duplicate, so it is hidden from screen readers and dropped for reduced-motion users.
 */
export function CustomerCarousel() {
  const reversed = [...customers].reverse()
  return (
    <div>
      <MarqueeRow items={customers} duration="55s" />
      <MarqueeRow items={reversed} reverse decorative duration="60s" className="marquee-secondary border-t border-border" />
    </div>
  )
}
