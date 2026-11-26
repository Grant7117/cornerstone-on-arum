"use client"
import { useState } from "react"
import { trackContact } from "@/lib/meta-pixel"

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  // DIRECT WHATSAPP LINK - Bypasses Privyr entirely
  const whatsappUrl = "https://wa.me/27724503626?text=Hello,%20I'm%20enquiring%20about%20Cornerstone%20on%20Arum%20via%20the%20website%20navigation."

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 50)
  }

  const scrollToTop = () => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { label: "Video Tour", id: "video-tour" },
    { label: "Apartments", id: "properties" },
    { label: "Floor Plans", id: "floor-plans" },
    { label: "Features", id: "features" },
    { label: "Location", id: "about" },
    { label: "Financing", id: "financing" },
    { label: "Brochure & Media", id: "media-resources" },
  ]

  return (
    <>
      <nav className="bg-[#1e293b]/95 backdrop-blur-md border-b border-white/10 text-white px-4 sm:px-6 py-3.5 sticky top-0 z-[100] shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={scrollToTop} 
            className="flex flex-col text-left focus:outline-none hover:opacity-90 transition-opacity"
            aria-label="Scroll to top of page"
          >
            <div className="text-lg sm:text-xl font-bold leading-tight uppercase tracking-wider text-white">CORNERSTONE</div>
            <div className="text-[10px] sm:text-xs text-slate-300 font-bold tracking-[0.2em] leading-tight">ON ARUM</div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="hover:text-blue-400 transition-colors text-sm font-medium cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            
            {/* UPDATED: DIRECT WHATSAPP BUTTON */}
            <button
              onClick={() => { trackContact("whatsapp_nav"); window.open(whatsappUrl, "_blank") }}
              style={{ 
                backgroundColor: "#0066FF", 
                color: "#ffffff", 
                fontWeight: "600", 
                fontSize: "14px", 
                border: "none", 
                width: "140px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center", 
                borderRadius: "10px",
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
              onClick={() => { trackContact("whatsapp_nav"); window.open(whatsappUrl, "_blank") }}
              style={{ backgroundColor: "#0066FF", color: "#ffffff", fontWeight: "700", padding: "8px 16px", borderRadius: "10px", fontSize: "13px", border: "none", minHeight: "40px" }}
              className="active:scale-95 transition-transform touch-manipulation shadow-md"
              aria-label="Enquire on WhatsApp"
            >
              Enquire
            </button>
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-white/10 active:bg-white/20 rounded-lg transition-colors touch-manipulation"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#1e293b]/98 backdrop-blur-xl border-t border-white/10 p-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => handleNavClick(link.id)} 
                className="block w-full text-left py-3 px-3 font-semibold text-base border-b border-white/5 active:bg-white/10 rounded-md transition-colors touch-manipulation"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}