"use client"

import { useEffect, useRef, type ComponentPropsWithoutRef, type CSSProperties, type ElementType } from "react"

type RevealProps<T extends ElementType> = {
  as?: T
  variant?: "up" | "fade" | "image"
  delay?: number
} & Omit<ComponentPropsWithoutRef<T>, "as">

let observer: IntersectionObserver | null = null

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true")
          observer?.unobserve(entry.target)
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
  )
  return observer
}

/** Scroll-triggered reveal. Animation lives in globals.css and respects reduced motion. */
export function Reveal<T extends ElementType = "div">({
  as,
  variant = "up",
  delay = 0,
  style,
  ...props
}: RevealProps<T>) {
  const ref = useRef<HTMLElement>(null)
  const Component = (as ?? "div") as ElementType

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = getObserver()
    io.observe(el)
    return () => io.unobserve(el)
  }, [])

  return (
    <Component
      ref={ref}
      data-reveal={variant}
      style={{ ...(style as CSSProperties), "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...props}
    />
  )
}
