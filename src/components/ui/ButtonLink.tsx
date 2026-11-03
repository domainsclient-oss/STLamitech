import { ArrowUpRight } from "lucide-react"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const variants = {
  solid: "bg-charcoal text-white hover:bg-black",
  light: "bg-white text-charcoal hover:bg-mist",
  outlineLight: "border border-white/40 text-white hover:border-white hover:bg-white/10",
  outlineDark: "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white",
} as const

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: keyof typeof variants
  icon?: boolean
}

export function ButtonLink({ variant = "solid", icon = true, className, children, ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group/btn relative inline-flex h-13 items-center justify-center gap-3 overflow-hidden px-7 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
        variants[variant],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 ease-(--ease-premium) group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        />
      )}
    </a>
  )
}

/** Minimal underline-style text link with arrow. */
export function TextLink({ className, children, tone = "dark", ...props }: ComponentProps<"a"> & { tone?: "dark" | "light" }) {
  return (
    <a
      className={cn(
        "group/link inline-flex items-center gap-3 text-sm font-medium tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4",
        tone === "dark" ? "text-charcoal" : "text-white",
        className,
      )}
      {...props}
    >
      <span className="relative">
        {children}
        <span className="absolute inset-x-0 -bottom-1 h-px origin-left bg-current transition-transform duration-500 ease-(--ease-premium) group-hover/link:scale-x-0" />
      </span>
      <span className="inline-flex size-9 items-center justify-center border border-current/25 transition-colors duration-300 group-hover/link:bg-current">
        <ArrowUpRight
          aria-hidden="true"
          className={cn(
            "size-4 transition-colors duration-300",
            tone === "dark" ? "group-hover/link:text-white" : "group-hover/link:text-charcoal",
          )}
        />
      </span>
    </a>
  )
}
