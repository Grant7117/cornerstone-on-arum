"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  onEnquire: () => void
}

export function Navigation({ onEnquire }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false)
    // Small delay so menu closes before scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Apartments", id: "properties" },
    { label: "Floor Plans", id: "floor-plans" },
    { label: "Features", id: "features" },
    { label: "Financing", id: "financing" },
    { label: "Location", id: "contact" },
    { label: "Documents", id: "documents" },
  ]

  return (
    <nav className="bg-[#1e293b] text-white px-4 sm:px-6 py-4 relative z-[100]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <div className="text-lg sm:text-xl font-bold leading-tight uppercase tracking-wider">CORNERSTONE</div>
          <div className="text-[10px] sm:text-xs text-blue-400 font-semibold tracking-[0.2em] leading-tight">ON ARUM</div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-blue-400 transition-colors text-sm lg:text-base font-medium"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={onEnquire}
            className="bg-blue-600 hover:bg-blue-700 text-white border-0 font-bold px-6"
          >
            Enquire Now
          </Button>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onEnquire}
            className="text-[10px] bg-blue-600 text-white px-4 py-2.5 rounded shadow-lg font-bold hover:bg-blue-700 uppercase tracking-wide"
          >
            Enquire
          </button>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-full hover:bg-white/10 transition-colors bg-white/5"
          >
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1e293b] border-t border-white/10 shadow-2xl z-50 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col py-2 px-4 shadow-inner">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left px-4 py-4 text-sm font-semibold hover:text-blue-400 transition-colors border-b border-white/5 last:border-0"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

