import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { navLinks } from "@/lib/site"
import { Parallax } from "@/components/ui/Parallax"

type PageHeroProps = {
  /** Route of the page, used for the breadcrumb and the "02 / 06" page index. */
  path: (typeof navLinks)[number]["href"]
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  /** CSS object-position, to keep the photo's subject in frame when the banner crops it. */
  imagePosition?: string
}

/** Inner-page banner: same photographic, dark-overlay language as the home hero, at a shorter height. */
export function PageHero({ path, eyebrow, title, description, image, imageAlt, imagePosition }: PageHeroProps) {
  const index = navLinks.findIndex((link) => link.href === path)
  const label = navLinks[index]?.label ?? eyebrow
  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <section
      aria-labelledby="page-title"
      className="relative isolate flex min-h-[34rem] flex-col overflow-hidden bg-charcoal-deep text-white md:min-h-[38rem] lg:min-h-[72svh]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Parallax speed={0.15}>
          <div className="hero-zoom absolute inset-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
              style={imagePosition ? { objectPosition: imagePosition } : undefined}
            />
          </div>
        </Parallax>
        <div className="absolute inset-0 bg-charcoal-deep/45 md:bg-charcoal-deep/25" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,20,0.82)_0%,rgba(20,20,20,0.5)_45%,rgba(20,20,20,0.05)_80%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(20,20,20,0.8),transparent)]" />
      </div>

      <div className="container-page flex flex-1 flex-col justify-end pt-32 pb-8 md:pb-10">
        <nav aria-label="Breadcrumb" className="hero-rise mb-10" style={{ "--delay": "100ms" } as React.CSSProperties}>
          <ol className="flex items-center gap-2 text-xs tracking-[0.2em] text-white/60 uppercase">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="text-white">
              {label}
            </li>
          </ol>
        </nav>

        <div className="max-w-4xl">
          <p
            className="hero-rise eyebrow mb-6 flex items-center gap-3 text-white/70"
            style={{ "--delay": "200ms" } as React.CSSProperties}
          >
            <span aria-hidden="true" className="h-px w-10 bg-white/50" />
            {eyebrow}
          </p>
          <h1
            id="page-title"
            className="text-[2.4rem] leading-[1] font-semibold tracking-tight uppercase sm:text-5xl md:text-6xl xl:text-7xl"
          >
            <span className="block overflow-hidden pb-1">
              <span className="hero-rise block" style={{ "--delay": "320ms" } as React.CSSProperties}>
                {title}
              </span>
            </span>
          </h1>
          <p
            className="hero-rise mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
            style={{ "--delay": "480ms" } as React.CSSProperties}
          >
            {description}
          </p>
        </div>

        <div
          className="hero-rise mt-14 flex items-center justify-between gap-6 border-t border-white/15 pt-6 text-xs tracking-[0.2em] text-white/60 uppercase"
          style={{ "--delay": "640ms" } as React.CSSProperties}
        >
          <span>STLamitech · {label}</span>
          {index >= 0 && (
            <span className="shrink-0 whitespace-nowrap tabular-nums">
              <span className="text-white">{pad(index + 1)}</span> / {pad(navLinks.length)}
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
