"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  onEnquire: () => void
}

export function Navigation({ onEnquire }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false)
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
    { label: "Features", id: "features" },
    { label: "Financing", id: "financing" },
    { label: "Location", id: "contact" },
    { label: "Documents", id: "documents" },
  ]

  return (
    <nav className="bg-[#1e293b] text-white px-4 sm:px-6 py-4 relative z-[100]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-lg sm:text-xl font-bold leading-tight uppercase tracking-wider">CORNERSTONE</div>
          <div className="text-[10px] sm:text-xs text-blue-400 font-semibold tracking-[0.2em] leading-tight">ON ARUM</div>
        </div>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="min-h-[44px] flex items-center hover:text-blue-400 transition-colors text-sm lg:text-base font-medium"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={onEnquire}
            className="bg-[#0066FF] hover:bg-[#0052cc] text-white border-0 font-bold px-6 py-2 rounded-lg transition-all shadow-md active:scale-95"
          >
            Enquire Now
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onEnquire}
            className="text-sm bg-[#0066FF] text-white px-5 py-2.5 rounded-lg shadow-lg font-bold hover:bg-[#0052cc] uppercase tracking-wide transition-all active:scale-95"
          >
            Enquire
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/10 transition-colors bg-white/5"
          >
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1e293b] border-t border-white/10 shadow-2xl z-50">
          <div className="flex flex-col py-2 px-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left px-4 py-5 text-base font-bold hover:text-blue-400 transition-colors border-b border-white/5 last:border-0"
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

