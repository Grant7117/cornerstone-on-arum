"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
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
    <nav className="bg-[#1e293b] text-white px-4 sm:px-6 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <div className="text-lg sm:text-xl font-bold leading-tight">CORNERSTONE</div>
          <div className="text-xs sm:text-sm text-gray-300 leading-tight">ON ARUM</div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-gray-300 transition-colors text-sm lg:text-base"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white border-0"
          >
            Enquire Now
          </Button>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => scrollToSection("contact")}
            className="text-xs bg-blue-600 text-white px-3 py-2 rounded font-semibold hover:bg-blue-700"
          >
            Enquire
          </button>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded hover:bg-white/10 transition-colors"
          >
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1e293b] border-t border-white/10 shadow-xl z-50">
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
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
