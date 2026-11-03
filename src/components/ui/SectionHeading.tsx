import { cn } from "@/lib/utils"
import { Reveal } from "./Reveal"

type SectionHeadingProps = {
  id?: string
  eyebrow: string
  title: string
  description?: string
  tone?: "dark" | "light"
  align?: "split" | "left"
  className?: string
}

/** Editorial section heading: eyebrow + large title, with the description set beside it on wide screens. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "split",
  className,
}: SectionHeadingProps) {
  const light = tone === "light"
  return (
    <div
      className={cn(
        "grid gap-6",
        align === "split" && "lg:grid-cols-12 lg:items-end lg:gap-10",
        className,
      )}
    >
      <div className={cn(align === "split" && "lg:col-span-7")}>
        <Reveal as="p" className={cn("eyebrow mb-5 flex items-center gap-3", light ? "text-white/60" : "text-graphite")}>
          <span aria-hidden="true" className={cn("h-px w-8", light ? "bg-white/40" : "bg-charcoal/40")} />
          {eyebrow}
        </Reveal>
        <Reveal
          as="h2"
          id={id}
          delay={80}
          className={cn(
            "text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl xl:text-6xl",
            light ? "text-white" : "text-charcoal",
          )}
        >
          {title}
        </Reveal>
      </div>
      {description && (
        <Reveal
          as="p"
          delay={160}
          className={cn(
            "max-w-xl text-base leading-relaxed md:text-lg",
            align === "split" && "lg:col-span-5 lg:justify-self-end",
            light ? "text-white/70" : "text-graphite",
          )}
        >
          {description}
        </Reveal>
      )}
    </div>
  )
}
