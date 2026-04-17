"use client"
import { useState } from "react"

interface NavigationProps {
  onEnquire?: () => void
}

export function Navigation({ onEnquire }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const formUrl = "https://www.privyr.com/form/zw8VR1xt#cornerstone-on-arum-contact-form"

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) element.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Apartments", id: "properties" },
    { label: "Features", id: "features" },
    { label: "Financing", id: "financing" },
    { label: "Location", id: "contact" },
    { label: "Documents", id: "documents" },
  ]

  const handleEnquire = () => {
    if (onEnquire) {
      onEnquire()
    } else {
      window.open(formUrl, "_blank")
    }
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-sand-drift/70 backdrop-blur-xl border-b border-deep-obsidian/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="font-serif text-xl tracking-tighter uppercase cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Cornerstone-on-Arum
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-sans text-xs uppercase tracking-widest text-deep-obsidian/60">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="hover:text-muted-bronze transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleEnquire}
            className="bg-deep-obsidian text-sand-drift px-6 py-2 text-xs uppercase tracking-widest hover:bg-muted-bronze transition-colors"
          >
            Enquire
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-deep-obsidian/5 rounded-lg"
          >
            <span className={`block h-0.5 w-6 bg-deep-obsidian transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-deep-obsidian transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-deep-obsidian transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-sand-drift border-t border-deep-obsidian/10 p-4 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left py-4 font-sans text-xs uppercase tracking-widest text-deep-obsidian/60 border-b border-deep-obsidian/5"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
