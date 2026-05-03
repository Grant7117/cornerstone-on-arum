"use client"
import { useState } from "react"

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  // DIRECT WHATSAPP LINK - Bypasses Privyr entirely
  const whatsappUrl = "https://wa.me/27724503626?text=Hello,%20I'm%20enquiring%20about%20Cornerstone%20on%20Arum%20via%20the%20website%20navigation."

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

  return (
    <nav className="bg-[#1e293b] text-white px-4 sm:px-6 py-4 relative z-[100]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-lg sm:text-xl font-bold leading-tight uppercase tracking-wider text-slate-900">CORNERSTONE</div>
          <div className="text-[10px] sm:text-xs text-slate-800 font-bold tracking-[0.2em] leading-tight">ON ARUM</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="hover:text-blue-400 transition-colors text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
          
          {/* UPDATED: DIRECT WHATSAPP BUTTON */}
          <button
            onClick={() => window.open(whatsappUrl, "_blank")}
            style={{ 
              backgroundColor: "#0066FF", 
              color: "#ffffff", 
              fontWeight: "600", 
              fontSize: "14px", 
              border: "none", 
              width: "150px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", 
              borderRadius: "12px",
              cursor: "pointer"
            }}
            className="shadow-md hover:scale-105 transition-all active:scale-95"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => window.open(whatsappUrl, "_blank")}
            style={{ backgroundColor: "#0066FF", color: "#ffffff", fontWeight: "700", padding: "8px 16px", borderRadius: "10px", fontSize: "12px", border: "none" }}
          >
            Enquire
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-white/5 rounded-lg">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1e293b] border-t border-white/10 p-4">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNavClick(link.id)} className="block w-full text-left py-4 font-bold border-b border-white/5">
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}