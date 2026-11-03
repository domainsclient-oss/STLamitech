/**
 * Central content for the STLamitech landing page.
 *
 * Anything marked as a placeholder must be replaced with verified company
 * information before going live. Do not add certification numbers, customer
 * names, statistics or addresses that have not been confirmed by STLamitech.
 */

export const site = {
  name: "STLamitech",
  tagline: "Advanced Material Solutions",
  description:
    "STLamitech delivers advanced lamination, foam and scrim solutions engineered to meet the evolving demands of modern industries, with manufacturing facilities in Chennai and Pune, India.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Certifications", href: "/certifications" },
  { label: "Products & Services", href: "/products" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact", href: "/contact" },
] as const

/**
 * Hero background. The video (licensed, Magnific Premium) plays as a seamless loop;
 * the still image is shown to users who prefer reduced motion. Set `video` to null to
 * fall back to the image only.
 */
export const heroMedia = {
  image: "/images/hero-production-line-v3.webp",
  imageAlt:
    "Bright, modern manufacturing hall with CNC machining cells and automated workstations",
  video: {
    src: "/videos/hero-leather-roller.mp4",
    type: "video/mp4",
    poster: "/images/hero-leather-roller-poster.webp",
  } as null | { src: string; type: "video/mp4" | "video/webm"; poster: string },
}

/**
 * Certificate images are placeholders. Replace `image` with the client-supplied certificate scans
 * (e.g. /images/certificates/iatf.jpg) and update `imageAlt` when they arrive.
 */
export const certifications = [
  {
    code: "IATF",
    title: "IATF Certification",
    description:
      "Quality management aligned with the automotive industry’s internationally recognised standard.",
    image: "/images/certificates/iatf-placeholder.svg",
    imageAlt: "IATF certificate (placeholder)",
  },
  {
    code: "ISO",
    title: "ISO Certification",
    description:
      "Quality management practices aligned with internationally recognised ISO standards.",
    image: "/images/certificates/iso-placeholder.svg",
    imageAlt: "ISO certificate (placeholder)",
  },
] as const

export type Product = {
  /** Anchor id on /products, e.g. /products#flame-lamination */
  id: string
  name: string
  description: string
  applications: string[]
  image: string
  imageAlt: string
}

export type ProductCategory = {
  id: string
  index: string
  title: string
  summary: string
  image: string
  imageAlt: string
  products: Product[]
}

const productImage = (id: string) => `/images/products/${id}.webp`

/**
 * Product descriptions are general explanations of each material or process and its typical uses.
 * Have STLamitech review them before launch, and do not add specifications, grades or test results
 * the company has not confirmed.
 */
export const productCategories: ProductCategory[] = [
  {
    id: "laminations",
    index: "01",
    title: "Laminations",
    summary: "Bonding processes that combine materials into engineered composites.",
    image: "/images/laminations-v2.webp",
    imageAlt: "Rows of material rolls on an industrial production line",
    products: [
      {
        id: "flame-lamination",
        name: "Flame Laminations",
        description:
          "The surface of a polyurethane foam is melted by a controlled flame and immediately pressed onto a second material, so the foam itself forms the bond — no separate adhesive layer is needed.",
        applications: ["Automotive seat fabrics", "Headliners and door panels", "Upholstery composites"],
        image: productImage("flame-lamination"),
        imageAlt: "Close-up of a row of blue gas flames above a steel burner bar",
      },
      {
        id: "hot-melt-lamination",
        name: "Hot Melt Lamination",
        description:
          "A thermoplastic adhesive is applied in a molten state and the layers are joined under heat and pressure. The solvent-free process bonds a wide range of textiles, foams and films.",
        applications: ["Automotive interior trims", "Technical textiles", "Multi-layer composites"],
        image: productImage("hot-melt-lamination"),
        imageAlt: "Wood-grain film being fed over steel rollers on an adhesive-applying laminating machine",
      },
      {
        id: "pur-lamination",
        name: "PUR Lamination",
        description:
          "Reactive polyurethane (PUR) hot melt adhesive cures with moisture after bonding, giving a durable, flexible bond with good resistance to heat and humidity.",
        applications: ["Automotive interiors", "Performance textiles", "Demanding bonding applications"],
        image: productImage("pur-lamination"),
        imageAlt: "White nonwoven textile web running over polished rollers in a brightly lit machine",
      },
    ],
  },
  {
    id: "foam",
    index: "02",
    title: "Foam",
    summary: "A broad portfolio of foam materials for diverse industrial requirements.",
    image: "/images/foam-car-seat.webp",
    imageAlt: "Close-up of a padded car seat cushion and headrest",
    products: [
      {
        id: "mesh",
        name: "Mesh",
        description:
          "Open-structure mesh fabrics that add breathability and air circulation, often combined with foam layers in seating and comfort applications.",
        applications: ["Seat ventilation layers", "Backrests and headrests", "Breathable comfort layers"],
        image: productImage("mesh"),
        imageAlt: "Extreme close-up of grey knitted mesh fabric with round open cells",
      },
      {
        id: "reticulated-foam",
        name: "Reticulated Foam",
        description:
          "Polyurethane foam whose cell membranes are removed to leave a fully open, porous skeleton, giving very high air and fluid permeability.",
        applications: ["Filtration", "Sound absorption", "Air and fluid management"],
        image: productImage("reticulated-foam"),
        imageAlt: "Macro view of pale yellow open-cell foam with a network of interconnected pores",
      },
      {
        id: "pu-slab-foam",
        name: "PU Slab Foam",
        description:
          "Flexible polyurethane foam produced in large blocks and converted into sheets and shapes, available across a range of densities and firmness levels.",
        applications: ["Seating and cushioning", "Lamination substrates", "Comfort and padding layers"],
        image: productImage("pu-slab-foam"),
        imageAlt: "Warehouse racks holding tall stacks of cream and pink flexible foam sheets",
      },
      {
        id: "fr-foam",
        name: "FR Foam",
        description:
          "Foam formulated with flame-retardant properties for applications where fire performance requirements must be met.",
        applications: ["Automotive interiors", "Transport seating", "Fire-sensitive applications"],
        image: productImage("fr-foam"),
        imageAlt: "Close-up of a light grey profiled foam sheet with rows of rounded peaks",
      },
      {
        id: "non-fr-foam",
        name: "Non FR Foam",
        description:
          "General-purpose foam without flame-retardant additives, for cushioning and padding where FR performance is not specified.",
        applications: ["Cushioning and padding", "Protective packaging", "General-purpose uses"],
        image: productImage("non-fr-foam"),
        imageAlt: "Hand lifting from a thick white foam slab, leaving a soft handprint in the surface",
      },
      {
        id: "insulation-foam",
        name: "Insulation Foams",
        description:
          "Foams selected for thermal and acoustic insulation, helping to reduce heat transfer, noise and vibration.",
        applications: ["Thermal insulation", "Acoustic and NVH damping", "HVAC components"],
        image: productImage("insulation-foam"),
        imageAlt: "Pile of grey tubular foam pipe insulation with one hollow end visible",
      },
      {
        id: "epdm-foam",
        name: "EPDM Foam",
        description:
          "Closed-cell synthetic rubber foam with good resistance to weather, ozone and UV, used where a compressible, durable seal is needed.",
        applications: ["Gaskets and seals", "Weatherstripping", "Vibration damping pads"],
        image: productImage("epdm-foam"),
        imageAlt: "Assorted black and blue rubber O-rings, gaskets and seal rings",
      },
    ],
  },
  {
    id: "scrim",
    index: "03",
    title: "Scrim",
    summary: "Reinforcement textiles in a range of constructions.",
    image: "/images/scrim-v2.webp",
    imageAlt: "Rolls of woven fiberglass reinforcement fabric",
    products: [
      {
        id: "mono-scrim",
        name: "Mono Scrim",
        description:
          "A lightweight, open grid of single yarns that adds strength and dimensional stability to laminates while keeping weight low.",
        applications: ["Laminate reinforcement", "Foam backing", "Lightweight composites"],
        image: productImage("mono-scrim"),
        imageAlt: "Close-up of a fine, open square-grid mesh of thin single threads",
      },
      {
        id: "warp-netted-scrim",
        name: "Warp Netted Scrim",
        description:
          "An open net produced by warp knitting, giving a stable, non-fraying structure that reinforces without adding bulk.",
        applications: ["Foam and fabric backing", "Laminate reinforcement", "Technical textiles"],
        image: productImage("warp-netted-scrim"),
        imageAlt: "Close-up of white knitted netting with small hexagonal open cells",
      },
      {
        id: "circular-knitted-scrim",
        name: "Circular Knitted Scrim",
        description:
          "Knitted on circular machines into a tubular fabric, this scrim offers stretch and recovery so it can follow curved and contoured shapes.",
        applications: ["Seat and trim backing", "Contoured components", "Stretch reinforcement"],
        image: productImage("circular-knitted-scrim"),
        imageAlt: "Row of industrial circular knitting machines with yarn feeders in a bright factory hall",
      },
    ],
  },
]

export const facilities = [
  {
    id: "chennai",
    location: "Chennai, India",
    title: "Chennai Manufacturing Facility",
    // Placeholder — replace with an approved facility description.
    description:
      "Facility description to be provided. This space is reserved for an overview of the Chennai site’s operations and capabilities.",
    image: "/images/facility-chennai-v2.webp",
    imageAlt: "Clean, modern manufacturing plant interior",
  },
  {
    id: "pune",
    location: "Pune, India",
    title: "Pune Manufacturing Facility",
    // Placeholder — replace with an approved facility description.
    description:
      "Facility description to be provided. This space is reserved for an overview of the Pune site’s operations and capabilities.",
    image: "/images/facility-pune-v2.webp",
    imageAlt: "Large manufacturing hall with symmetrical production bays",
  },
] as const

export const capabilities = [
  {
    id: "lab",
    icon: "lab",
    title: "Lab Facility",
    description:
      "Professional laboratory infrastructure supporting material testing and quality evaluation.",
    image: "/images/lab-v3.webp",
    imageAlt: "Engineer inspecting a precision component under an industrial microscope",
  },
  {
    id: "storage",
    icon: "storage",
    title: "Storage Facility",
    description:
      "Organized storage infrastructure designed for efficient material handling and inventory management.",
    image: "/images/storage-v2.webp",
    imageAlt: "Modern warehouse aisle with tall storage racking",
  },
  {
    id: "transport",
    icon: "transport",
    title: "Own Transport",
    description:
      "Dedicated transportation capabilities supporting dependable logistics and material movement.",
    image: "/images/transport-v3.webp",
    imageAlt: "White long-haul freight truck on a highway",
  },
  {
    id: "packing",
    icon: "packing",
    title: "Automotive Packing Standard",
    description:
      "Automotive-oriented packing standards and packaging practices designed to support material protection and handling requirements.",
    image: "/images/packing-v2.webp",
    imageAlt: "Pallet of cartons being stretch-wrapped for shipment",
  },
] as const

export type CapabilityIcon = (typeof capabilities)[number]["icon"]

/** Customer logos in /public/images/customers. `ratio` is the artwork's width ÷ height. */
export const customers = [
  { name: "Ashok Leyland", file: "ashok-leyland.svg", ratio: 3.26 },
  { name: "Hyundai", file: "hyundai.svg", ratio: 7.75 },
  { name: "Hyundai Transys", file: "hyundai-transys.svg", ratio: 4.47 },
  { name: "Kia", file: "kia.svg", ratio: 4 },
  { name: "Mahindra", file: "mahindra.svg", ratio: 6.83 },
  { name: "Volvo", file: "volvo.svg", ratio: 7.27 },
  { name: "Isuzu", file: "isuzu.svg", ratio: 5.81 },
  { name: "Lear", file: "lear.svg", ratio: 3.58 },
  { name: "JBM", file: "jbm.png", ratio: 3.35 },
  { name: "NHK", file: "nhk.svg", ratio: 2.86 },
  { name: "Seoyon", file: "seoyon.svg", ratio: 7.53 },
] as const

/** Placeholder contact details — replace before launch. */
export const contactDetails = {
  email: "contact@stlamitech.in",
  phone: "+91 00000 00000",
  locations: [
    {
      city: "Chennai",
      lines: [
        "ST LAMITECH INDIA PRIVATE LIMITED",
        "Old No.178, New No.124, Vallam Village, Eriyoor Road,",
        "Vallakottai, Sriperumbudur Taluk,",
        "Kanchipuram District-602 105",
      ],
    },
    {
      city: "Pune",
      // Add the Pune address lines here to show its card in the Contact section.
      lines: [] as string[],
    },
  ],
  socials: [
    { label: "LinkedIn", network: "linkedin", href: "#" },
    { label: "YouTube", network: "youtube", href: "#" },
    { label: "Instagram", network: "instagram", href: "#" },
  ],
} as const

export const inquiryOptions = [
  ...productCategories.map((c) => c.title),
  "Multiple / Not Sure",
] as const
