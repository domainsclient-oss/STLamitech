import Image from "next/image"
import { cn } from "@/lib/utils"

// Cropped from /images/stl_logo.svg (the official artwork). The light variant swaps the black
// lettering for white so the logo stays legible on dark backgrounds.
const sources = {
  dark: "/images/stl-logo.svg",
  light: "/images/stl-logo-light.svg",
} as const

/** STLamitech logo. Size it with a height class (e.g. `h-12`); width follows the 826×440 artwork. */
export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Image
      src={sources[tone]}
      alt="ST Lamitech"
      width={826}
      height={440}
      unoptimized
      loading="eager"
      className={cn("h-12 w-auto", className)}
    />
  )
}
