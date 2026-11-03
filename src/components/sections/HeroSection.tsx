import Image from "next/image"
import { heroMedia } from "@/lib/site"
import { ButtonLink } from "@/components/ui/ButtonLink"
import { Parallax } from "@/components/ui/Parallax"

const pillars = ["Laminations", "Foam", "Scrim"]

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
                className="absolute inset-0 size-full object-cover grayscale-[55%] motion-reduce:hidden"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={heroMedia.image}
                aria-hidden="true"
              >
                <source src={heroMedia.video.src} type={heroMedia.video.type} />
              </video>
            )}
          </div>
        </Parallax>
        {/* Overlay layers for legibility and cinematic depth */}
        <div className="absolute inset-0 bg-charcoal-deep/65" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,20,0.85)_0%,rgba(20,20,20,0.35)_60%,rgba(20,20,20,0.1)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,rgba(20,20,20,0.9),transparent)]" />
      </div>

      <div className="container-page flex flex-1 flex-col justify-end pt-32 pb-8 md:pb-10">
        <div className="max-w-5xl">
          <p className="hero-rise eyebrow mb-8 flex items-center gap-3 text-white/70" style={{ "--delay": "150ms" } as React.CSSProperties}>
            <span aria-hidden="true" className="h-px w-10 bg-white/50" />
            Advanced Material Solutions
          </p>
          <h1
            id="hero-title"
            className="text-[2.6rem] leading-[0.98] font-semibold tracking-tight uppercase sm:text-6xl md:text-7xl xl:text-[min(6.5rem,9.5vh)]"
          >
            <span className="block overflow-hidden pb-1">
              <span className="hero-rise block" style={{ "--delay": "300ms" } as React.CSSProperties}>
                Engineering Materials.
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-rise block text-white/55" style={{ "--delay": "450ms" } as React.CSSProperties}>
                Delivering Excellence.
              </span>
            </span>
          </h1>
          <p
            className="hero-rise mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
            style={{ "--delay": "650ms" } as React.CSSProperties}
          >
            Advanced lamination, foam and scrim solutions engineered to meet the evolving demands of modern industries.
          </p>
          <div
            className="hero-rise mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ "--delay": "800ms" } as React.CSSProperties}
          >
            <ButtonLink href="#products" variant="light">
              Explore Our Capabilities
            </ButtonLink>
            <ButtonLink href="#contact" variant="outlineLight">
              Contact Our Team
            </ButtonLink>
          </div>
        </div>

        <div
          className="hero-rise mt-16 flex items-end justify-between gap-6 border-t border-white/15 pt-6 md:mt-14"
          style={{ "--delay": "1000ms" } as React.CSSProperties}
        >
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-[0.2em] text-white/60 uppercase" aria-label="Solution areas">
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
