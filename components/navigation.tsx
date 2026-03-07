"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"


export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="bg-[#1e293b] text-white px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-lg sm:text-xl font-bold leading-tight">CORNERSTONE</div>
          <div className="text-xs sm:text-sm text-gray-300 leading-tight">ON ARUM</div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("about")} className="hover:text-gray-300 transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("properties")} className="hover:text-gray-300 transition-colors">
            Apartments
          </button>
          <button onClick={() => scrollToSection("floor-plans")} className="hover:text-gray-300 transition-colors">
            Floor Plans
          </button>
          <button onClick={() => scrollToSection("features")} className="hover:text-gray-300 transition-colors">
            Features
          </button>
          <button onClick={() => scrollToSection("financing")} className="hover:text-gray-300 transition-colors">
            Financing
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-gray-300 transition-colors">
            Location
          </button>
          <button onClick={() => scrollToSection("documents")} className="hover:text-gray-300 transition-colors">
            Documents
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white border-0"
          >
            Enquire Now
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">

          <button
            onClick={() => scrollToSection("contact")}
            className="text-xs bg-blue-600 text-white px-3 py-2 rounded font-semibold hover:bg-blue-700"
          >
            Enquire
          </button>
        </div>
      </div>
    </nav>
  )
}
