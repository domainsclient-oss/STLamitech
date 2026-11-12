"use client"

import { useActionState, useEffect, useRef, useState, type FocusEvent, type FormEvent } from "react"
import { AlertCircle, ArrowUpRight, CheckCircle2, Info, LoaderCircle } from "lucide-react"
import { submitInquiry } from "@/app/actions/contact"
import { contactLimits, initialContactState, type ContactField } from "@/lib/contact"
import { inquiryOptions } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const clientMessages: Partial<Record<ContactField, string>> = {
  name: "Please enter your full name.",
  company: "Please enter your company name.",
  email: "Please enter a valid email address.",
  phone: "Please enter a valid phone number.",
  interest: "Please select an option.",
  message: "Please tell us a little more (at least 10 characters).",
}

const fieldClass =
  "h-12 rounded-none border-0 border-b border-charcoal/20 bg-transparent px-0 text-base text-charcoal shadow-none transition-colors placeholder:text-charcoal/35 focus-visible:border-charcoal focus-visible:ring-0 aria-invalid:border-destructive aria-invalid:ring-0 md:text-base"

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialContactState)
  const [clientErrors, setClientErrors] = useState<Partial<Record<ContactField, string>>>({})
  const startedAtRef = useRef<HTMLInputElement>(null)
  const startTime = useRef(0)
  const statusRef = useRef<HTMLDivElement>(null)

  // Timestamp for the server-side time-to-complete spam check. Re-applied after each
  // submission because React resets the form once the action settles.
  useEffect(() => {
    if (!startTime.current) startTime.current = Date.now()
    if (startedAtRef.current) startedAtRef.current.value = String(startTime.current)
    if (state.status !== "idle") statusRef.current?.focus()
  }, [state])

  const errors = { ...state.errors, ...clientErrors }

  const validateField = (el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
    const name = el.name as ContactField
    if (!(name in clientMessages)) return
    setClientErrors((prev) => ({ ...prev, [name]: el.validity.valid ? undefined : clientMessages[name] }))
  }

  const onBlur = (e: FocusEvent<HTMLFormElement>) => {
    const t = e.target
    if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) validateField(t)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const fields = Array.from(form.elements).filter(
      (el): el is HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement =>
        (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement) &&
        el.name in clientMessages,
    )
    fields.forEach(validateField)
    const firstInvalid = fields.find((el) => !el.validity.valid)
    if (firstInvalid) {
      e.preventDefault()
      firstInvalid.focus()
    }
  }

  const describedBy = (name: ContactField) => (errors[name] ? `${name}-error` : undefined)

  return (
    <form action={formAction} onSubmit={onSubmit} onBlur={onBlur} noValidate className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
      {/* Spam protection */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />

      <Field name="name" label="Name" error={errors.name}>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          minLength={2}
          maxLength={contactLimits.name}
          defaultValue={state.values.name}
          aria-invalid={!!errors.name}
          aria-describedby={describedBy("name")}
          placeholder="Your full name"
          className={fieldClass}
        />
      </Field>

      <Field name="company" label="Company Name" error={errors.company}>
        <Input
          id="company"
          name="company"
          autoComplete="organization"
          required
          minLength={2}
          maxLength={contactLimits.company}
          defaultValue={state.values.company}
          aria-invalid={!!errors.company}
          aria-describedby={describedBy("company")}
          placeholder="Company"
          className={fieldClass}
        />
      </Field>

      <Field name="email" label="Email Address" error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={contactLimits.email}
          defaultValue={state.values.email}
          aria-invalid={!!errors.email}
          aria-describedby={describedBy("email")}
          placeholder="name@company.com"
          className={fieldClass}
        />
      </Field>

      <Field name="phone" label="Phone Number" optional error={errors.phone}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          pattern="[+()\-.\s\d]{7,30}"
          maxLength={contactLimits.phone}
          defaultValue={state.values.phone}
          aria-invalid={!!errors.phone}
          aria-describedby={describedBy("phone")}
          placeholder="+91"
          className={fieldClass}
        />
      </Field>

      <Field name="interest" label="Product / Service Interested In" error={errors.interest} className="sm:col-span-2">
        <div className="relative">
          <select
            id="interest"
            name="interest"
            required
            defaultValue={state.values.interest ?? ""}
            aria-invalid={!!errors.interest}
            aria-describedby={describedBy("interest")}
            className={cn(fieldClass, "w-full appearance-none border-b pr-8 outline-none invalid:text-charcoal/40")}
          >
            <option value="" disabled>
              Select a solution category
            </option>
            {inquiryOptions.map((option) => (
              <option key={option} value={option} className="text-charcoal">
                {option}
              </option>
            ))}
          </select>
          <svg aria-hidden="true" viewBox="0 0 12 8" className="pointer-events-none absolute top-1/2 right-1 h-2 w-3 -translate-y-1/2 text-charcoal/60">
            <path d="m1 1 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </Field>

      <Field name="message" label="Message" error={errors.message} className="sm:col-span-2">
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={contactLimits.message}
          rows={5}
          defaultValue={state.values.message}
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message")}
          placeholder="Tell us about your seat cover, cushion or backing requirements"
          className={cn(fieldClass, "min-h-32 resize-y py-3")}
        />
      </Field>

      <div className="flex flex-col gap-6 sm:col-span-2">
        <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
          {state.status !== "idle" && state.message && <StatusMessage status={state.status} message={state.message} />}
        </div>
        <Button
          type="submit"
          disabled={pending}
          className="group/btn h-14 w-full rounded-none bg-charcoal px-8 text-sm font-medium tracking-wide text-white hover:bg-black sm:w-auto sm:justify-self-start"
        >
          {pending ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send Inquiry
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

function Field({
  name,
  label,
  optional,
  error,
  className,
  children,
}: {
  name: ContactField
  label: string
  optional?: boolean
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={name} className="eyebrow text-[0.6875rem] text-graphite">
        {label}
        {optional ? (
          <span className="font-normal tracking-normal normal-case text-charcoal/45">(optional)</span>
        ) : (
          <span aria-hidden="true">*</span>
        )}
      </Label>
      {children}
      {error && (
        <p id={`${name}-error`} className="flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle aria-hidden="true" className="size-3.5" />
          {error}
        </p>
      )}
    </div>
  )
}

function StatusMessage({ status, message }: { status: "success" | "error" | "unavailable"; message: string }) {
  const Icon = status === "success" ? CheckCircle2 : status === "error" ? AlertCircle : Info
  return (
    <p
      role={status === "error" ? "alert" : "status"}
      className={cn(
        "flex items-start gap-3 border-l-2 px-4 py-3 text-sm leading-relaxed",
        status === "success" && "border-charcoal bg-mist text-charcoal",
        status === "error" && "border-destructive bg-destructive/5 text-destructive",
        status === "unavailable" && "border-steel bg-mist text-charcoal",
      )}
    >
      <Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      {message}
    </p>
  )
}
