"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { navLinks } from "@/lib/site"
import { cn } from "@/lib/utils"
import { ButtonLink } from "@/components/ui/ButtonLink"
import { Logo } from "@/components/ui/Logo"
import { MobileNavigation } from "./MobileNavigation"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

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
        <Link href="/" aria-label="STLamitech — home" className="relative z-50">
          <Logo tone={solid ? "dark" : "light"} className="transition-colors duration-500" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-10">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative py-2 text-[0.9375rem] font-medium tracking-wide xl:text-base transition-colors duration-300",
                      solid
                        ? active ? "text-charcoal" : "text-charcoal/80 hover:text-charcoal"
                        : active ? "text-white" : "text-white/80 hover:text-white",
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute inset-x-0 bottom-0 h-px bg-current transition-[scale] duration-500 ease-(--ease-premium)",
                        active ? "scale-x-100" : "origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100",
                      )}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="/contact"
            variant={solid ? "solid" : "light"}
            className="hidden h-11 px-5 sm:inline-flex"
          >
            Get in Touch
          </ButtonLink>
          <MobileNavigation open={menuOpen} onOpenChange={setMenuOpen} light={!solid} pathname={pathname} />
        </div>
      </div>
    </header>
  )
}
