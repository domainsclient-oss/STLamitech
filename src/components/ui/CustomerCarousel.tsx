import Image from "next/image"
import { customers } from "@/lib/site"

// Size each logo to the same visual area so wide wordmarks and compact marks look balanced.
const LOGO_AREA = 5600

function logoSize(ratio: number) {
  return {
    width: Math.round(Math.sqrt(LOGO_AREA * ratio)),
    height: Math.round(Math.sqrt(LOGO_AREA / ratio)),
  }
}

/** Infinite, CSS-only logo marquee. Pauses on hover/focus; static wrap for reduced-motion users. */
export function CustomerCarousel() {
  return (
    <div className="marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="marquee-track flex w-max" style={{ "--marquee-duration": "55s" } as React.CSSProperties}>
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 ? "true" : undefined} className="flex shrink-0">
            {customers.map((customer) => {
              const { width, height } = logoSize(customer.ratio)
              return (
                <li
                  key={`${copy}-${customer.file}`}
                  className="flex h-28 w-52 shrink-0 items-center justify-center border-r border-border px-6 opacity-60 grayscale transition-[filter,opacity] duration-500 hover:opacity-100 hover:grayscale-0 md:h-32 md:w-64"
                >
                  <Image
                    src={`/images/customers/${customer.file}`}
                    alt={copy === 1 ? "" : customer.name}
                    width={width}
                    height={height}
                    className="h-auto max-w-full scale-[0.82] object-contain md:scale-100"
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
