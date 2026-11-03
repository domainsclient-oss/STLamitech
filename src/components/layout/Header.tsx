"use client"

import { useEffect, useState } from "react"
import { navLinks } from "@/lib/site"
import { cn } from "@/lib/utils"
import { ButtonLink } from "@/components/ui/ButtonLink"
import { Logo } from "@/components/ui/Logo"
import { MobileNavigation } from "./MobileNavigation"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const solid = scrolled && !menuOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ease-(--ease-premium)",
        solid
          ? "border-b border-black/5 bg-white/90 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)] backdrop-blur-md"
          : "border-b border-white/10 bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-charcoal"
      >
        Skip to content
      </a>
      <div
        className={cn(
          "container-page flex items-center justify-between transition-[height] duration-500 ease-(--ease-premium)",
          solid ? "h-18" : "h-20 md:h-24",
        )}
      >
        <a href="#home" aria-label="STLamitech — back to top" className="relative z-50">
          <Logo tone={solid ? "dark" : "light"} className="transition-colors duration-500" />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative py-2 text-[0.8125rem] font-medium tracking-wide transition-colors duration-300",
                    solid ? "text-charcoal/80 hover:text-charcoal" : "text-white/80 hover:text-white",
                  )}
                >
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-current transition-transform duration-500 ease-(--ease-premium) group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="#contact"
            variant={solid ? "solid" : "light"}
            className="hidden h-11 px-5 sm:inline-flex"
          >
            Get in Touch
          </ButtonLink>
          <MobileNavigation open={menuOpen} onOpenChange={setMenuOpen} light={!solid} />
        </div>
      </div>
    </header>
  )
}
