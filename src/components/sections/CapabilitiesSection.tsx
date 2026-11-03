import { capabilities } from "@/lib/site"
import { CapabilityCard } from "@/components/ui/CapabilityCard"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="relative overflow-hidden bg-charcoal py-24 text-white md:py-32 xl:py-40"
    >
      {/* Blueprint grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_75%)]"
      />
      <div className="container-page relative">
        <SectionHeading
          id="capabilities-title"
          tone="light"
          eyebrow="Infrastructure & Capabilities"
          title="Beyond Manufacturing. Built for Excellence."
          description="Operational strengths that support every stage — from material evaluation to protected, dependable delivery."
        />
        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, i) => (
            <CapabilityCard key={capability.id} index={i} {...capability} />
          ))}
        </div>
      </div>
    </section>
  )
}
