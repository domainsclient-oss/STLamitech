"use server"

import { contactFields, contactLimits, type ContactField, type ContactFormState } from "@/lib/contact"
import { inquiryOptions } from "@/lib/site"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+()\-.\s\d]{7,30}$/
// Strip control characters (keeps newlines/tabs for the message body).
const CONTROL_RE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g
const MIN_FILL_MS = 2500

function clean(value: FormDataEntryValue | null, max: number, multiline = false) {
  if (typeof value !== "string") return ""
  let v = value.replace(CONTROL_RE, "").trim()
  if (!multiline) v = v.replace(/\s+/g, " ")
  return v.slice(0, max)
}

export async function submitInquiry(_prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const values = Object.fromEntries(
    contactFields.map((field) => [field, clean(formData.get(field), contactLimits[field], field === "message")]),
  ) as Record<ContactField, string>

  // Spam protection: honeypot field + minimum time-to-complete.
  const honeypot = formData.get("website")
  const startedAt = Number(formData.get("startedAt"))
  const tooFast = !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS
  if ((typeof honeypot === "string" && honeypot.length > 0) || tooFast) {
    return {
      status: "error",
      message: "We couldn’t verify this submission. Please wait a moment and try again.",
      errors: {},
      values,
    }
  }

  const errors: ContactFormState["errors"] = {}
  if (values.name.length < 2) errors.name = "Please enter your full name."
  if (values.company.length < 2) errors.company = "Please enter your company name."
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address."
  if (values.phone && !PHONE_RE.test(values.phone)) errors.phone = "Please enter a valid phone number."
  if (!(inquiryOptions as readonly string[]).includes(values.interest)) errors.interest = "Please select an option."
  if (values.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters)."

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please review the highlighted fields.", errors, values }
  }

  // Delivery is only attempted when a server-side endpoint is configured.
  // Set CONTACT_WEBHOOK_URL (and optionally CONTACT_WEBHOOK_TOKEN) in the server environment
  // to forward inquiries to an email service, CRM or automation webhook.
  const endpoint = process.env.CONTACT_WEBHOOK_URL
  if (!endpoint) {
    return {
      status: "unavailable",
      message:
        "Online inquiries are not connected yet, so this message was not sent. Please contact our team directly using the details on this page.",
      errors: {},
      values,
    }
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CONTACT_WEBHOOK_TOKEN && { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` }),
      },
      body: JSON.stringify({ ...values, submittedAt: new Date().toISOString(), source: "stlamitech-website" }),
      signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok) throw new Error(`Webhook responded with ${res.status}`)
  } catch (error) {
    console.error("[contact] delivery failed", error)
    return {
      status: "error",
      message: "Something went wrong while sending your inquiry. Please try again shortly.",
      errors: {},
      values,
    }
  }

  return {
    status: "success",
    message: "Thank you — your inquiry has been received. Our team will be in touch.",
    errors: {},
    values: {},
  }
}
