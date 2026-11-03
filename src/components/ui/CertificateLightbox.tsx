"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { Maximize2, X } from "lucide-react"

type CertificateLightboxProps = {
  title: string
  image: string
  imageAlt: string
}

/** Certificate thumbnail that opens the full certificate in a modal. Uses the native <dialog> for focus and Escape handling. */
export function CertificateLightbox({ title, image, imageAlt }: CertificateLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const svg = image.endsWith(".svg")

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onClose = () => {
      document.documentElement.style.overflow = ""
    }
    dialog.addEventListener("close", onClose)
    return () => dialog.removeEventListener("close", onClose)
  }, [])

  const open = () => {
    document.documentElement.style.overflow = "hidden"
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-label={`View ${title} certificate`}
        className="group/cert relative aspect-[600/848] w-36 shrink-0 cursor-zoom-in overflow-hidden border border-charcoal/10 bg-white shadow-[0_20px_40px_-24px_rgba(0,0,0,0.35)] transition-[translate,rotate] duration-700 ease-(--ease-premium) group-hover:-translate-y-1 group-hover:-rotate-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal md:w-40 xl:w-44"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 176px, 160px"
          unoptimized={svg}
          className="object-cover"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-charcoal-deep/0 transition-colors duration-300 group-hover/cert:bg-charcoal-deep/35 group-focus-visible/cert:bg-charcoal-deep/35">
          <span className="flex size-10 scale-90 items-center justify-center bg-white text-charcoal opacity-0 transition-[opacity,scale] duration-300 group-hover/cert:scale-100 group-hover/cert:opacity-100 group-focus-visible/cert:scale-100 group-focus-visible/cert:opacity-100">
            <Maximize2 aria-hidden="true" className="size-4" />
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${title} certificate`}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="certificate-dialog m-auto max-h-[92svh] w-[min(92vw,40rem,calc((92svh-5.5rem)*0.7075+2rem))] overflow-visible bg-transparent p-0 backdrop:bg-charcoal-deep/85 backdrop:backdrop-blur-sm"
      >
        <div className="relative bg-white p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:p-4">
          {/* Dialog width is capped by viewport height × the certificate's 600:848 ratio, so the portrait page fits without letterboxing. */}
          <div className="relative aspect-[600/848] w-full">
            <Image src={image} alt={imageAlt} fill sizes="(min-width: 640px) 40rem, 92vw" unoptimized={svg} className="object-contain" />
          </div>
          <div className="flex items-center justify-between gap-4 pt-3 sm:pt-4">
            <p className="font-heading text-sm font-medium text-charcoal">{title}</p>
            <button
              type="button"
              onClick={close}
              autoFocus
              className="inline-flex h-10 items-center gap-2 bg-charcoal px-4 text-xs font-medium tracking-wide text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
            >
              <X aria-hidden="true" className="size-4" />
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
