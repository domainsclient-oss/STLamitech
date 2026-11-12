/**
 * Central content for the STLamitech landing page.
 *
 * Anything marked as a placeholder must be replaced with verified company
 * information before going live. Do not add certification numbers, customer
 * names, statistics or addresses that have not been confirmed by STLamitech.
 */

export const site = {
  name: "STLamitech",
  tagline: "Seating Comfort Materials",
  description:
    "STLamitech is a seating lamination company producing the laminated fabrics, foams and scrims behind factory-fitted car seats — engineered for softness, comfort and a clean finish. Manufacturing in Chennai and Pune, India.",
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
    src: "/videos/hero-beige-seats.mp4",
    type: "video/mp4",
    poster: "/images/hero-beige-seats-poster.webp",
  } as null | { src: string; type: "video/mp4" | "video/webm"; poster: string },
}

/**
 * Certificate images are generic illustrations, so they are not zoomable. To show a real
 * certificate scan instead, set `image` to the scan (e.g. /images/certificates/iatf.jpg), update
 * `imageAlt`, and set `zoomable: true` to let visitors open it full size.
 */
export const certifications: {
  code: string
  title: string
  description: string
  image: string
  imageAlt: string
  zoomable: boolean
}[] = [
  {
    code: "IATF",
    title: "IATF Certification",
    description:
      "Quality management aligned with the automotive industry’s standard — the framework that keeps seating materials consistent, batch after batch.",
    image: "/images/certificates/iatf-certificate.svg",
    imageAlt: "Illustration of an IATF certificate",
    zoomable: false,
  },
  {
    code: "ISO",
    title: "ISO Certification",
    description:
      "Quality management aligned with internationally recognised ISO standards, from incoming material to finished laminate.",
    image: "/images/certificates/iso-certificate.svg",
    imageAlt: "Illustration of an ISO certificate",
    zoomable: false,
  },
]

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
    title: "Lamination",
    summary: "Bonding face fabrics, foams and scrims into seat-cover composites that feel soft and finish cleanly.",
    image: "/images/laminations-v2.webp",
    imageAlt: "Rows of material rolls on an industrial production line",
    products: [
      {
        id: "flame-lamination",
        name: "Flame Lamination",
        description:
          "Foam is flame-bonded directly to the seat face fabric, giving the cover a soft, padded feel without a separate adhesive layer — the classic construction behind comfortable automotive seat covers.",
        applications: ["Seat cover fabrics", "Headrest and armrest covers", "Door and trim panels"],
        image: productImage("flame-lamination"),
        imageAlt: "Close-up of a row of blue gas flames above a steel burner bar",
      },
      {
        id: "hot-melt-lamination",
        name: "Hot Melt Lamination",
        description:
          "Molten thermoplastic adhesive joins fabric, foam and scrim under heat and pressure. The solvent-free process keeps the cover supple and breathable, with a clean, even finish.",
        applications: ["Seat cover composites", "Interior trims", "Multi-layer fabrics"],
        image: productImage("hot-melt-lamination"),
        imageAlt: "Wood-grain film being fed over steel rollers on an adhesive-applying laminating machine",
      },
      {
        id: "pur-lamination",
        name: "PUR Lamination",
        description:
          "Reactive PUR adhesive cures into a strong yet flexible bond that resists cabin heat and humidity, keeping seat covers smooth and well bonded in everyday use.",
        applications: ["Premium seat covers", "Performance fabrics", "High-durability bonding"],
        image: productImage("pur-lamination"),
        imageAlt: "White nonwoven textile web running over polished rollers in a brightly lit machine",
      },
    ],
  },
  {
    id: "foam",
    index: "02",
    title: "Foam",
    summary: "The cushioning and breathable layers that give a seat its softness and support.",
    image: "/images/foam-car-seat.webp",
    imageAlt: "Close-up of a padded car seat cushion and headrest",
    products: [
      {
        id: "mesh",
        name: "Mesh",
        description:
          "Breathable mesh layers let air move through the seat, helping occupants stay cooler and more comfortable on longer journeys.",
        applications: ["Seat ventilation layers", "Backrests and cushions", "Breathable comfort zones"],
        image: productImage("mesh"),
        imageAlt: "Extreme close-up of grey knitted mesh fabric with round open cells",
      },
      {
        id: "reticulated-foam",
        name: "Reticulated Foam",
        description:
          "Fully open-cell foam with very high air permeability, used where a seat needs to breathe or where air and sound must pass through freely.",
        applications: ["Ventilated seating", "Sound absorption", "Air management"],
        image: productImage("reticulated-foam"),
        imageAlt: "Macro view of pale yellow open-cell foam with a network of interconnected pores",
      },
      {
        id: "pu-slab-foam",
        name: "PU Slab Foam",
        description:
          "The soft, resilient foam that gives seat covers their padded feel — produced in blocks and converted into sheets across a range of densities and firmness levels.",
        applications: ["Seat cover padding", "Lamination foam layers", "Cushion comfort layers"],
        image: productImage("pu-slab-foam"),
        imageAlt: "Warehouse racks holding tall stacks of cream and pink flexible foam sheets",
      },
      {
        id: "fr-foam",
        name: "FR Foam",
        description:
          "Foam formulated with flame-retardant properties, providing comfort layers for seats and interiors that must meet fire-performance requirements.",
        applications: ["Seat cover laminates", "Automotive interiors", "Transport seating"],
        image: productImage("fr-foam"),
        imageAlt: "Close-up of a light grey profiled foam sheet with rows of rounded peaks",
      },
      {
        id: "non-fr-foam",
        name: "Non FR Foam",
        description:
          "Soft, general-purpose foam for cushioning and padding in components where flame-retardant performance is not specified.",
        applications: ["Cushioning and padding", "Comfort components", "Protective packaging"],
        image: productImage("non-fr-foam"),
        imageAlt: "Hand lifting from a thick white foam slab, leaving a soft handprint in the surface",
      },
      {
        id: "insulation-foam",
        name: "Insulation Foam",
        description:
          "Foam that reduces noise, vibration and heat transfer, contributing to a quieter, more comfortable cabin.",
        applications: ["Acoustic and NVH damping", "Thermal insulation", "Interior components"],
        image: productImage("insulation-foam"),
        imageAlt: "Pile of grey tubular foam pipe insulation with one hollow end visible",
      },
      {
        id: "epdm-foam",
        name: "EPDM Foam",
        description:
          "Durable closed-cell rubber foam that seals and cushions, resisting weather, ozone and UV where a compressible, long-lasting seal is needed.",
        applications: ["Gaskets and seals", "Weatherstripping", "Anti-vibration pads"],
        image: "/images/products/epdm-foam-v2.webp",
        imageAlt: "Close-up of coiled black rubber sealing strips",
      },
    ],
  },
  {
    id: "scrim",
    index: "03",
    title: "Scrim",
    summary: "Backing textiles that give seat-cover laminates strength, stability and a smooth fit.",
    image: "/images/scrim-v2.webp",
    imageAlt: "Rolls of woven fiberglass reinforcement fabric",
    products: [
      {
        id: "mono-scrim",
        name: "Mono Scrim",
        description:
          "A light, open grid of single yarns laminated behind the foam, adding strength and stability so the seat cover holds its shape without becoming stiff.",
        applications: ["Seat cover backing", "Foam reinforcement", "Lightweight laminates"],
        image: productImage("mono-scrim"),
        imageAlt: "Close-up of a fine, open square-grid mesh of thin single threads",
      },
      {
        id: "warp-knitted-scrim",
        name: "Warp Knitted Scrim",
        description:
          "A warp-knitted open net that backs the foam with a stable, non-fraying layer, helping covers sew cleanly and stay smooth.",
        applications: ["Seat cover backing", "Sewing stability", "Laminate reinforcement"],
        image: productImage("warp-knitted-scrim"),
        imageAlt: "Close-up of white knitted netting with small hexagonal open cells",
      },
      {
        id: "circular-knitted-scrim",
        name: "Circular Knitted Scrim",
        description:
          "A stretchable knitted scrim that moves with the cover, following the curves of bolsters and headrests for a clean, wrinkle-free fit.",
        applications: ["Contoured seat covers", "Bolsters and headrests", "Stretch backing"],
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
      "Laboratory infrastructure for testing and evaluating seating materials before they reach the production line.",
    image: "/images/lab-v3.webp",
    imageAlt: "Engineer inspecting a precision component under an industrial microscope",
  },
  {
    id: "storage",
    icon: "storage",
    title: "Storage Facility",
    description:
      "Organised storage that keeps foams and fabrics clean, protected and ready for production.",
    image: "/images/storage-v2.webp",
    imageAlt: "Modern warehouse aisle with tall storage racking",
  },
  {
    id: "transport",
    icon: "transport",
    title: "Own Transport",
    description:
      "Our own transport for dependable delivery to seating and vehicle production lines.",
    image: "/images/transport-v3.webp",
    imageAlt: "White long-haul freight truck on a highway",
  },
  {
    id: "packing",
    icon: "packing",
    title: "Automotive Packing Standard",
    description:
      "Automotive packing standards that protect seating materials in transit, so they arrive in condition for production.",
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
