"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Settings } from "@/components/icons"

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
          <Link href="/documents" className="hover:text-gray-300 transition-colors">
            Documents
          </Link>
          <Link href="/admin/documents" className="hover:text-gray-300 transition-colors" title="Admin">
            <Settings className="h-5 w-5" />
          </Link>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-amber-600 hover:bg-amber-700 text-white border-0"
          >
            Enquire Now
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Link href="/admin/documents" className="text-white" title="Admin">
            <Settings className="h-5 w-5" />
          </Link>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-xs bg-amber-600 text-white px-3 py-2 rounded font-semibold hover:bg-amber-700"
          >
            Enquire
          </button>
        </div>
      </div>
    </nav>
  )
}
