import { Reveal } from "./Reveal"

type CertificationCardProps = {
  code: string
  title: string
  description: string
  index: number
}

/** Certificate-style card. Intentionally contains no certificate numbers or issuer details. */
export function CertificationCard({ code, title, description, index }: CertificationCardProps) {
  return (
    <Reveal
      as="article"
      delay={index * 120}
      className="group relative flex min-h-[22rem] flex-col justify-between overflow-hidden border border-border bg-mist p-8 transition-[translate,box-shadow,background-color] duration-500 ease-(--ease-premium) hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] md:p-12"
    >
      {/* Certificate seal motif */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -top-10 -right-10 size-64 text-charcoal/[0.06] transition-transform duration-[1.2s] ease-(--ease-premium) group-hover:rotate-45"
      >
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {Array.from({ length: 24 }, (_, i) => (
          <line
            key={i}
            x1="100"
            y1="4"
            x2="100"
            y2="16"
            stroke="currentColor"
            strokeWidth="1.5"
            transform={`rotate(${i * 15} 100 100)`}
          />
        ))}
      </svg>

      <div className="relative flex items-start justify-between">
        <span className="flex size-14 items-center justify-center border border-charcoal/20 bg-white">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 text-charcoal" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M12 2.5 4.5 5.5v6c0 4.6 3.2 8.6 7.5 10 4.3-1.4 7.5-5.4 7.5-10v-6L12 2.5Z" />
            <path d="m8.5 12 2.5 2.5 4.5-5" />
          </svg>
        </span>
        <span className="eyebrow text-steel">Certified</span>
      </div>

      <div className="relative">
        <p className="font-heading text-7xl leading-none font-semibold tracking-tighter text-charcoal md:text-8xl">
          {code}
        </p>
        <div className="mt-6 h-px w-12 bg-charcoal transition-[width] duration-700 ease-(--ease-premium) group-hover:w-24" />
        <h3 className="mt-6 font-heading text-xl font-medium text-charcoal md:text-2xl">{title}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-graphite md:text-base">{description}</p>
      </div>
    </Reveal>
  )
}
