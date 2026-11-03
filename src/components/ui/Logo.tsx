import { cn } from "@/lib/utils"

/** STLamitech wordmark with a layered "lamination" mark. Replace with official artwork when available. */
export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-white" : "text-charcoal"
  return (
    <span className={cn("inline-flex items-center gap-2.5", color, className)}>
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-8 shrink-0">
        <rect x="1" y="1" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="7" y="8" width="18" height="3" fill="currentColor" />
        <rect x="7" y="14.5" width="18" height="3" fill="currentColor" opacity="0.6" />
        <rect x="7" y="21" width="18" height="3" fill="currentColor" opacity="0.35" />
      </svg>
      <span className="font-heading text-xl font-semibold tracking-tight">
        STL<span className="font-normal">amitech</span>
      </span>
    </span>
  )
}
