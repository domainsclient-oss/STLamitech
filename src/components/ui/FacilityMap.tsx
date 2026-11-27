import { facilities } from "@/lib/site"
import { indiaMap } from "@/lib/india-map"
import { cn } from "@/lib/utils"
import { Reveal } from "./Reveal"

type FacilityId = (typeof facilities)[number]["id"]

/** How far the highlighted states are raised off the map, in canvas units. Mirrored in globals.css. */
const LIFT = { x: -4, y: -10 }

/**
 * Where each facility's callout sits on the canvas. The leader line runs from the pin to (`edgeX`,
 * `edgeY`), where it meets the top border of the text block. Chennai's line steps up before heading
 * east so it clears the Andaman Islands.
 */
const placements: Record<FacilityId, { state: string; side: "left" | "right"; edgeX: number; rise: number }> = {
  chennai: { state: "tamil-nadu", side: "right", edgeX: 800, rise: 60 },
  pune: { state: "maharashtra", side: "left", edgeX: 236, rise: 0 },
}

/** Below `lg` only the map itself is shown, cropped from the wider canvas, with the callouts stacked beneath. */
const CROP_PAD = 12
const cropWidth = indiaMap.mapWidth + CROP_PAD * 2
const cropStyle = {
  "--map-zoom": `${(indiaMap.width / cropWidth) * 100}%`,
  "--map-shift": `${(-(indiaMap.mapX - CROP_PAD) / cropWidth) * 100}%`,
} as React.CSSProperties

const pct = (value: number, total: number) => `${(value / total) * 100}%`

export function FacilityMap() {
  const liftedStates = new Set(Object.values(placements).map((p) => p.state))
  const markers = facilities.map((facility, i) => {
    const placement = placements[facility.id]
    const [pinX, pinY] = indiaMap.pins[facility.id]
    // Leader lines start from the raised pin, not its footprint on the base map.
    const x = pinX + LIFT.x
    const y = pinY + LIFT.y
    const edgeY = y - placement.rise
    const diagonal = placement.rise ? `l${placement.side === "right" ? placement.rise : -placement.rise} ${-placement.rise}` : ""
    return { facility, placement, number: `0${i + 1}`, pinX, pinY, x, y, edgeY, line: `M${x} ${y}${diagonal}H${placement.edgeX}` }
  })

  return (
    <div className="relative mt-14 md:mt-20 lg:mt-8">
      <Reveal variant="fade" className="facility-map overflow-hidden lg:overflow-visible">
        <div className="ml-(--map-shift) w-(--map-zoom) lg:ml-0 lg:w-full" style={cropStyle}>
          <svg
            viewBox={`0 0 ${indiaMap.width} ${indiaMap.height}`}
            role="img"
            aria-label="Map of India with the Chennai and Pune manufacturing facilities marked"
            className="block h-auto w-full"
          >
            <defs>
              <filter id="facility-map-shadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="5" dy="12" stdDeviation="7" floodColor="#000" floodOpacity="0.3" />
              </filter>
            </defs>

            {/* Base map. The raised states leave a darker footprint behind. */}
            <g className="stroke-mist" strokeWidth="0.8" strokeLinejoin="round">
              {indiaMap.states.map((state) => (
                <path key={state.id} d={state.d} className={liftedStates.has(state.id) ? "fill-[#c4c4c4]" : "fill-[#dedede]"} />
              ))}
            </g>

            {/* Wide screens: leader lines out to the callouts, drawn beneath the raised states so each emerges from its pin. */}
            <g className="hidden fill-none stroke-charcoal lg:block" strokeWidth="1">
              {markers.map(({ facility, line }) => (
                <path key={facility.id} d={line} pathLength={1} className="facility-map-line" />
              ))}
            </g>

            {/* Raised states, each carrying its pin. */}
            {markers.map(({ facility, placement, pinX, pinY }) => (
              <g key={facility.id} className="facility-map-lift">
                <path
                  d={indiaMap.states.find((state) => state.id === placement.state)?.d}
                  className="fill-charcoal stroke-charcoal"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                  filter="url(#facility-map-shadow)"
                />
                <circle cx={pinX} cy={pinY} r="13" className="fill-white/25" />
                <circle cx={pinX} cy={pinY} r="5.5" className="fill-white" />
              </g>
            ))}

            {/* Small screens: numbered tags that match the list below the map. */}
            <g aria-hidden="true" className="font-heading text-[26px] font-semibold lg:hidden">
              {markers.map(({ facility, placement, number, x, y }) => {
                const dir = placement.side === "right" ? 1 : -1
                return (
                  <g key={facility.id}>
                    <path d={`M${x + dir * 16} ${y}h${dir * 34}`} className="stroke-charcoal" strokeWidth="1.5" />
                    <text
                      x={x + dir * 58}
                      y={y}
                      dominantBaseline="central"
                      textAnchor={dir === 1 ? "start" : "end"}
                      className="fill-charcoal"
                    >
                      {number}
                    </text>
                  </g>
                )
              })}
            </g>
          </svg>
        </div>
      </Reveal>

      <ol className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-0 lg:block">
        {markers.map(({ facility, placement, number, edgeY }, i) => (
          <Reveal
            as="li"
            key={facility.id}
            delay={500 + i * 150}
            className={cn(
              "border-t border-charcoal pt-5 lg:absolute lg:top-(--callout-top) lg:w-(--callout-width)",
              placement.side === "right" ? "lg:right-0" : "lg:left-0",
            )}
            style={
              {
                "--callout-top": pct(edgeY, indiaMap.height),
                "--callout-width": pct(
                  placement.side === "right" ? indiaMap.width - placement.edgeX : placement.edgeX,
                  indiaMap.width,
                ),
              } as React.CSSProperties
            }
          >
            <article aria-labelledby={`${facility.id}-title`}>
              <p className="eyebrow flex items-center gap-3 text-graphite">
                <span className="text-steel tabular-nums lg:hidden">{number}</span>
                {facility.location}
              </p>
              <h3
                id={`${facility.id}-title`}
                className="mt-3 font-heading text-2xl font-semibold tracking-tight text-charcoal lg:text-xl xl:text-2xl"
              >
                {facility.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite xl:text-base">{facility.description}</p>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}
