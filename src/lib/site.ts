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

export const certifications = [
  {
    code: "IATF",
    title: "IATF Certification",
    description:
      "Quality management aligned with the automotive industry’s internationally recognised standard.",
  },
  {
    code: "ISO",
    title: "ISO Certification",
    description:
      "Quality management practices aligned with internationally recognised ISO standards.",
  },
] as const

export type ProductCategory = {
  id: string
  index: string
  title: string
  summary: string
  image: string
  imageAlt: string
  products: string[]
}

export const productCategories: ProductCategory[] = [
  {
    id: "laminations",
    index: "01",
    title: "Laminations",
    summary: "Bonding processes that combine materials into engineered composites.",
    image: "/images/laminations-v2.webp",
    imageAlt: "Rows of material rolls on an industrial production line",
    products: ["Flame Laminations", "Hot Melt Lamination", "PUR Lamination"],
  },
  {
    id: "foam",
    index: "02",
    title: "Foam",
    summary: "A broad portfolio of foam materials for diverse industrial requirements.",
    image: "/images/foam-car-seat.webp",
    imageAlt: "Close-up of a padded car seat cushion and headrest",
    products: [
      "Mesh",
      "Reticulated Foam",
      "PU Slab Foam",
      "FR Foam",
      "Non FR Foam",
      "Insulation Foams",
      "EPDM Foam",
    ],
  },
  {
    id: "scrim",
    index: "03",
    title: "Scrim",
    summary: "Reinforcement textiles in a range of constructions.",
    image: "/images/scrim-v2.webp",
    imageAlt: "Rolls of woven fiberglass reinforcement fabric",
    products: ["Mono Scrim", "Warp Netted Scrim", "Circular Knitted Scrim"],
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
