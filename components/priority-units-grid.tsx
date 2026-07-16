"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Camera } from "lucide-react"
import { unitsData, Unit } from "@/data/units"

interface MinimalistUnitCardProps {
  unit: Unit
  onEnquire: () => void
}

function MinimalistUnitCard({ unit, onEnquire }: MinimalistUnitCardProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const images = unit.images || ["/images/Cornerstone-on-arum-hero-image.png"]

  // Specific m2 breakdown map based on the user's table
  const m2Map: Record<string, { int: string; bal: string }> = {
    "101": { int: "43", bal: "4" },
    "201": { int: "43", bal: "4" },
    "203": { int: "39", bal: "6" },
    "204": { int: "44", bal: "4" },
    "205": { int: "44", bal: "4" },
    "302": { int: "72", bal: "5" },
    "303": { int: "71", bal: "6" },
    "304": { int: "71", bal: "6" },
  }

  const breakdown = m2Map[unit.unitNo] || { int: unit.size.toString(), bal: "0" }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="group relative w-full bg-[#1e293b]/50 backdrop-blur-md rounded-sm overflow-hidden border border-white/10 hover:border-[#b39373]/50 flex flex-col md:flex-row transition-all duration-500 font-sans shadow-xl">
      {/* Left Image Carousel */}
      <div className="relative w-full md:w-[55%] aspect-[4/3] md:aspect-auto md:min-h-[280px] bg-slate-900 overflow-hidden">
        <Image
          src={images[currentImage]}
          alt={`Unit ${unit.unitNo} Interior`}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority={parseInt(unit.unitNo) < 200}
        />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
          <button onClick={prevImage} className="bg-black/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/50 transition-colors z-20">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextImage} className="bg-black/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/50 transition-colors z-20">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Unit Badge */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-sm z-10">
          <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">UNIT {unit.unitNo}</span>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c23] via-transparent to-transparent opacity-60 md:hidden" />
      </div>

      {/* Right Premium Spec Column */}
      <div className="w-full md:w-[45%] flex flex-col p-6 lg:p-8 relative">
        
        <div className="flex-grow flex flex-col justify-center items-start">
          <div className="inline-flex px-3 py-1 mb-4 rounded-sm border border-[#b39373]/50 bg-[#b39373]/10">
            <span className="text-[9px] font-bold tracking-widest uppercase text-[#b39373]">Available Now</span>
          </div>
          
          <p className="font-serif text-3xl sm:text-4xl text-[#d6c5b3] tracking-tight leading-none mb-6">
            {unit.price}
          </p>
          
          {/* Custom separator */}
          <div className="w-12 h-px bg-[#b39373]/30 mb-6"></div>
        </div>

        {/* Static Specs Block */}
        <div className="space-y-2 w-full mt-auto">
          <div className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Bedrooms</span>
            <span className="text-sm font-semibold text-slate-200">{unit.bedrooms}</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Bathrooms</span>
            <span className="text-sm font-semibold text-slate-200">{unit.bathrooms}</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Interior</span>
            <span className="text-sm font-semibold text-slate-200">{breakdown.int}m²</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Balcony</span>
            <span className="text-sm font-semibold text-slate-200">{breakdown.bal}m²</span>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-[10px] text-[#b39373] uppercase tracking-widest font-bold">Total Size</span>
            <span className="text-sm font-bold text-[#b39373]">{unit.size}m²</span>
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

  const rows = [
    { units: ["101", "201"] },
    { units: ["203", "204"] },
    { units: ["205", "302"] },
    { units: ["303", "304"] },
  ]

  return (
    <div id="properties" className="w-full bg-[#1a1c23] border-b border-white/5 py-12 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 sm:mb-20 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#d6c5b3] tracking-tight">
            Available Units
          </h2>
          <a
            href="#media-resources"
            className="mt-8 inline-flex items-center gap-2 bg-[#b39373] hover:bg-[#c9a784] text-[#1a1c23] font-sans text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-sm shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            <Camera className="w-4 h-4" />
            Photo Gallery
          </a>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {row.units.map(unitNo => {
                const unit = findUnit(unitNo)
                if (!unit) return null
                return (
                  <div key={unitNo} className={row.units.length === 1 ? "md:col-span-2 md:max-w-[calc(50%-1.5rem)] md:mx-auto w-full" : "w-full"}>
                    <MinimalistUnitCard unit={unit} onEnquire={onEnquire} />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
