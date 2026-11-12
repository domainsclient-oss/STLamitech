import Image from "next/image"
import { heroMedia } from "@/lib/site"
import { ButtonLink } from "@/components/ui/ButtonLink"
import { Parallax } from "@/components/ui/Parallax"

const pillars = ["Softness", "Comfort", "Finish"]

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-charcoal-deep text-white"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Parallax speed={0.18}>
          <div className="hero-zoom absolute inset-0">
            <Image
              src={heroMedia.image}
              alt={heroMedia.imageAlt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              className="object-cover grayscale-[55%]"
            />
            {heroMedia.video && (
              <video
                className="absolute inset-0 size-full object-cover motion-reduce:hidden"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={heroMedia.video.poster}
                aria-hidden="true"
              >
                <source src={heroMedia.video.src} type={heroMedia.video.type} />
              </video>
            )}
          </div>
        </Parallax>
        {/* Light overlays: keep the footage bright and colourful, darken only behind the text. */}
        <div className="absolute inset-0 bg-charcoal-deep/40 md:bg-charcoal-deep/15" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,20,0.78)_0%,rgba(20,20,20,0.45)_40%,rgba(20,20,20,0)_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,rgba(20,20,20,0.75),transparent)]" />
      </div>

      <div className="container-page flex flex-1 flex-col justify-end pt-32 pb-8 md:pb-10">
        <div className="max-w-5xl">
          <p className="hero-rise eyebrow mb-8 flex items-center gap-3 text-white/70" style={{ "--delay": "150ms" } as React.CSSProperties}>
            <span aria-hidden="true" className="h-px w-10 bg-white/50" />
            Automotive Seating Materials
          </p>
          <h1
            id="hero-title"
            className="text-[2.6rem] leading-[0.98] font-semibold tracking-tight uppercase sm:text-6xl md:text-7xl xl:text-[min(6.5rem,9.5vh)]"
          >
            <span className="block overflow-hidden pb-1">
              <span className="hero-rise block" style={{ "--delay": "300ms" } as React.CSSProperties}>
                Comfort You Feel.
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-rise block text-white/55" style={{ "--delay": "450ms" } as React.CSSProperties}>
                Layer by Layer.
              </span>
            </span>
          </h1>
          <p
            className="hero-rise mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
            style={{ "--delay": "650ms" } as React.CSSProperties}
          >
            The first thing a new car owner feels is the seat. We laminate the fabrics, foams and scrims that vehicle makers build into their standard seat covers and cushions — so factory-fitted seating feels soft, supportive and finely finished from day one.
          </p>
          <div
            className="hero-rise mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ "--delay": "800ms" } as React.CSSProperties}
          >
            <ButtonLink href="/products" variant="light">
              Explore Seating Materials
            </ButtonLink>
            <ButtonLink href="/contact" variant="outlineLight">
              Contact Our Team
            </ButtonLink>
          </div>
        </div>

        <div
          className="hero-rise mt-16 flex items-end justify-between gap-6 border-t border-white/15 pt-6 md:mt-14"
          style={{ "--delay": "1000ms" } as React.CSSProperties}
        >
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-[0.2em] text-white/60 uppercase" aria-label="What we engineer">
            {pillars.map((pillar, i) => (
              <li key={pillar} className="flex items-center gap-3">
                <span className="text-white/35">0{i + 1}</span>
                {pillar}
              </li>
            ))}
          </ul>
          <a
            href="#about"
            className="group hidden items-center gap-4 text-xs tracking-[0.2em] text-white/60 uppercase transition-colors hover:text-white md:flex"
          >
            Scroll
            <span aria-hidden="true" className="relative block h-12 w-px overflow-hidden bg-white/20">
              <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
