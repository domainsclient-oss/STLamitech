"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { contactDetails, navLinks } from "@/lib/site"
import { cn } from "@/lib/utils"

type MobileNavigationProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  light: boolean
}

export function MobileNavigation({ open, onOpenChange, light }: MobileNavigationProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"
    panelRef.current?.querySelector<HTMLElement>("a")?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false)
        buttonRef.current?.focus()
      }
    }
    const onResize = () => window.innerWidth >= 1024 && onOpenChange(false)
    window.addEventListener("keydown", onKey)
    window.addEventListener("resize", onResize)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onResize)
    }
  }, [open, onOpenChange])

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => onOpenChange(!open)}
        className={cn(
          "relative z-50 flex size-11 items-center justify-center transition-colors duration-300 lg:hidden",
          open || light ? "text-white" : "text-charcoal",
        )}
      >
        <span className="relative block h-3.5 w-6" aria-hidden="true">
          <span
            className={cn(
              "absolute left-0 h-px w-6 bg-current transition-transform duration-500 ease-(--ease-premium)",
              open ? "top-1.5 rotate-45" : "top-0",
            )}
          />
          <span
            className={cn(
              "absolute left-0 h-px bg-current transition-all duration-500 ease-(--ease-premium)",
              open ? "top-1.5 w-6 -rotate-45" : "top-3.5 w-4",
            )}
          />
        </span>
      </button>

      <div
        id="mobile-navigation"
        ref={panelRef}
        inert={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-charcoal-deep text-white transition-[clip-path] duration-700 ease-(--ease-premium) lg:hidden",
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]",
        )}
      >
        <nav aria-label="Mobile" className="container-page flex flex-1 flex-col justify-center pt-24">
          <ul className="space-y-1">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={cn(
                  "overflow-hidden transition-[opacity,transform] duration-700 ease-(--ease-premium)",
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                )}
                style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={() => onOpenChange(false)}
                  className="group flex items-baseline gap-4 border-b border-white/10 py-4 font-heading text-3xl font-medium tracking-tight sm:text-4xl"
                >
                  <span className="text-xs font-normal tracking-widest text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="transition-transform duration-500 ease-(--ease-premium) group-hover:translate-x-2">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={cn(
            "container-page flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/60 transition-opacity duration-700",
            open ? "opacity-100 delay-500" : "opacity-0",
          )}
        >
          <a href={`mailto:${contactDetails.email}`} className="hover:text-white">
            {contactDetails.email}
          </a>
          <a
            href="#contact"
            onClick={() => onOpenChange(false)}
            className="inline-flex items-center gap-2 bg-white px-5 py-3 font-medium text-charcoal"
          >
            Get in Touch <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </>
  )
}
