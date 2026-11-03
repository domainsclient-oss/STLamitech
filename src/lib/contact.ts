export const contactFields = ["name", "company", "email", "phone", "interest", "message"] as const

export type ContactField = (typeof contactFields)[number]

export type ContactFormState = {
  status: "idle" | "success" | "error" | "unavailable"
  message: string
  errors: Partial<Record<ContactField, string>>
  values: Partial<Record<ContactField, string>>
}

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: {},
}

export const contactLimits: Record<ContactField, number> = {
  name: 100,
  company: 120,
  email: 254,
  phone: 30,
  interest: 60,
  message: 3000,
}
