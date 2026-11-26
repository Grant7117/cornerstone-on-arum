"use client"

import { useEffect, useRef, useState } from "react"
import { Share2, Link2, Mail, Check } from "lucide-react"
import { trackShare } from "@/lib/meta-pixel"

// Share button for the final unit (Unit 304).
// Phones: opens the native share sheet (WhatsApp, SMS, Instagram, etc.).
// Desktop / no share support: small menu with WhatsApp, Facebook, Email and Copy link.

const SHARE_URL = "https://www.cornerstoneonarum.co.za/?utm_source=share&utm_medium=visitor&utm_campaign=unit_304#properties"
const SHARE_TITLE = "Cornerstone on Arum: Unit 304, the final unit"
const SHARE_TEXT =
  "Have a look at this: the last unit at Cornerstone on Arum, Table View. Unit 304 is a 77 m² duplex loft, 2 bed 2 bath, R2,725,000 with no transfer duty."

type Variant = "compact" | "large"

const styles: Record<Variant, string> = {
  compact:
    "inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans text-xs font-bold uppercase tracking-wider py-3 px-3.5 rounded-sm transition-all text-center",
  large:
    "inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-sans text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-sm shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95",
}

export function ShareUnitButton({ variant = "compact", source }: { variant?: Variant; source: string }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close the desktop menu when clicking outside it
  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [open])

  const handleClick = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url: SHARE_URL })
        trackShare(`${source}_native`)
      } catch {
        /* visitor cancelled the share sheet */
      }
      return
    }
    setOpen((v) => !v)
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL)
      setCopied(true)
      trackShare(`${source}_copy`)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked: the visitor can still use the other options */
    }
  }

  const encoded = encodeURIComponent(SHARE_URL)
  const options = [
    { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${SHARE_URL}`)}`, key: "whatsapp" },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`, key: "facebook" },
    { label: "Email", href: `mailto:?subject=${encodeURIComponent(SHARE_TITLE)}&body=${encodeURIComponent(`${SHARE_TEXT}\n\n${SHARE_URL}`)}`, key: "email" },
  ]

  return (
    <div ref={ref} className="relative inline-flex">
      <button type="button" onClick={handleClick} className={styles[variant]} aria-haspopup="menu" aria-expanded={open}>
        <Share2 className="w-3.5 h-3.5 text-amber-400" />
        <span>{variant === "large" ? "Share with a friend" : "Share"}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 z-50 w-48 rounded-md border border-white/10 bg-[#16171e] shadow-2xl p-1.5 font-sans text-sm"
        >
          {options.map((o) => (
            <a
              key={o.key}
              role="menuitem"
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackShare(`${source}_${o.key}`)
                setOpen(false)
              }}
              className="flex items-center gap-2 px-3 py-2 rounded text-slate-200 hover:bg-white/10"
            >
              {o.key === "email" ? <Mail className="w-4 h-4 text-muted-bronze" /> : <Share2 className="w-4 h-4 text-muted-bronze" />}
              {o.label}
            </a>
          ))}
          <button
            type="button"
            role="menuitem"
            onClick={copyLink}
            className="w-full flex items-center gap-2 px-3 py-2 rounded text-slate-200 hover:bg-white/10 text-left"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Link2 className="w-4 h-4 text-muted-bronze" />}
            {copied ? "Link copied" : "Copy link"}
          </button>
        </div>
      )}
    </div>
  )
}
