"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Camera, ExternalLink } from "lucide-react"
import { unitsData, Unit } from "@/data/units"

interface MinimalistUnitCardProps {
  unit: Unit
  onEnquire: () => void
}

function MinimalistUnitCard({ unit, onEnquire }: MinimalistUnitCardProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const images = unit.images || ["/images/Cornerstone-on-arum-hero-image.png"]
  const galleryLink = unit.galleryUrl || "https://photos.app.goo.gl/wWBD4uTkddX7WDAr6"

  // Specific m2 breakdown map based on the user's table
  const m2Map: Record<string, { int: string; bal: string }> = {
    "303": { int: "71", bal: "6" },
    "304": { int: "71", bal: "6" },
  }

  const breakdown = m2Map[unit.unitNo] || { int: "71", bal: "6" }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="group relative w-full bg-[#1e293b]/50 backdrop-blur-md rounded-sm overflow-hidden border border-white/10 hover:border-[#b39373]/50 flex flex-col transition-all duration-500 font-sans shadow-xl">
      {/* Top Image Carousel */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-900 overflow-hidden">
        <Image
          src={images[currentImage]}
          alt={`Unit ${unit.unitNo} Interior`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        
        {/* Navigation Arrows with touch-friendly targets */}
        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
          <button 
            onClick={prevImage} 
            className="pointer-events-auto bg-black/50 backdrop-blur-md p-2.5 sm:p-2 rounded-full text-white hover:bg-black/70 active:scale-90 transition-all z-20 touch-manipulation"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextImage} 
            className="pointer-events-auto bg-black/50 backdrop-blur-md p-2.5 sm:p-2 rounded-full text-white hover:bg-black/70 active:scale-90 transition-all z-20 touch-manipulation"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Unit Badge */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-sm z-10 flex items-center gap-2">
          <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">UNIT {unit.unitNo}</span>
          <span className="text-[10px] text-muted-bronze uppercase tracking-widest font-semibold">• DUPLEX</span>
        </div>
        
        {/* Photo Gallery Direct Link Badge */}
        <a
          href={galleryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-black/75 hover:bg-black/90 backdrop-blur-md border border-white/20 hover:border-muted-bronze px-3 py-1.5 rounded text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 z-20 transition-all transform hover:scale-105"
        >
          <Camera className="w-3.5 h-3.5 text-muted-bronze" />
          <span>View Album ({images.length}+ Photos)</span>
          <ExternalLink className="w-3 h-3 text-muted-bronze" />
        </a>

        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c23] via-transparent to-transparent opacity-60 md:hidden" />
      </div>

      {/* Bottom Spec Column */}
      <div className="w-full flex flex-col p-6 lg:p-8 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex px-3 py-1 mb-2 rounded-sm border border-[#b39373]/50 bg-[#b39373]/10">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#b39373]">
                Available • 2 Bed Duplex (77m²)
              </span>
            </div>
            <p className="font-serif text-3xl sm:text-4xl text-[#d6c5b3] tracking-tight leading-none">
              {unit.price}
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href={galleryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-sm transition-all text-center"
            >
              <Camera className="w-4 h-4 text-muted-bronze" />
              <span>Gallery</span>
            </a>
            <Button
              onClick={onEnquire}
              className="bg-[#0066FF] hover:bg-[#0055DD] text-white font-sans text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-sm shadow-md transition-all active:scale-95"
            >
              Enquire
            </Button>
          </div>
        </div>

        {/* Custom separator */}
        <div className="w-full h-px bg-[#b39373]/20 mb-6"></div>

        {/* Static Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full">
          <div className="border border-white/5 bg-slate-900/40 p-3 rounded text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium block mb-1">Type</span>
            <span className="text-sm font-semibold text-slate-200">Duplex Loft</span>
          </div>
          <div className="border border-white/5 bg-slate-900/40 p-3 rounded text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium block mb-1">Bedrooms</span>
            <span className="text-sm font-semibold text-slate-200">{unit.bedrooms} Bed</span>
          </div>
          <div className="border border-white/5 bg-slate-900/40 p-3 rounded text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium block mb-1">Bathrooms</span>
            <span className="text-sm font-semibold text-slate-200">{unit.bathrooms} Bath</span>
          </div>
          <div className="border border-white/5 bg-slate-900/40 p-3 rounded text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium block mb-1">Interior + Balcony</span>
            <span className="text-sm font-semibold text-slate-200">{breakdown.int}m² + {breakdown.bal}m²</span>
          </div>
          <div className="border border-muted-bronze/30 bg-muted-bronze/10 p-3 rounded text-center col-span-2 sm:col-span-1">
            <span className="text-[10px] text-muted-bronze uppercase tracking-widest font-bold block mb-1">Total Size</span>
            <span className="text-base font-bold text-muted-bronze">{unit.size}m²</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PriorityUnitsGrid({ onEnquire }: { onEnquire: () => void }) {
  // Find specific units from data
  const findUnit = (unitNo: string) => {
    for (const category in unitsData) {
      const unit = unitsData[category].find(u => u.unitNo === unitNo)
      if (unit) return unit
    }
    return null
  }

  const availableUnitsList = ["303", "304"]

  return (
    <div id="properties" className="w-full bg-[#1a1c23] border-b border-white/5 py-12 sm:py-24 scroll-mt-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 sm:mb-16 flex flex-col items-center">
          <div className="inline-flex px-4 py-1.5 mb-4 rounded-full border border-amber-500/40 bg-amber-500/10">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
              Only 2 Units Left • All Other Units Sold
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#d6c5b3] tracking-tight mb-4">
            Final Available Duplex Units
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-light leading-relaxed">
            Units 303 & 304 are luxury 2-bedroom, 2-bathroom duplex apartments measuring 77m² total with private balconies and dedicated parking.
          </p>

          <a
            href="https://photos.app.goo.gl/wWBD4uTkddX7WDAr6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-[#b39373] hover:bg-[#c9a784] text-[#1a1c23] font-sans text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-sm shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            <Camera className="w-4 h-4" />
            <span>View Units 303 & 304 Photo Gallery</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {availableUnitsList.map((unitNo) => {
            const unit = findUnit(unitNo)
            if (!unit) return null
            return (
              <div key={unitNo} className="w-full">
                <MinimalistUnitCard unit={unit} onEnquire={onEnquire} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
