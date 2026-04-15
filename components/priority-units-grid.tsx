"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
    "102": { int: "59", bal: "8" },
    "103": { int: "39", bal: "6" },
    "104": { int: "44", bal: "4" },
    "106": { int: "39", bal: "6" },
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
    <div className="group relative w-full bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col md:flex-row transition-all duration-300 font-sans" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Left Image Carousel */}
      <div className="relative w-full md:w-[62%] aspect-video md:aspect-auto md:min-h-[300px] bg-gray-50 overflow-hidden">
        <Image
          src={images[currentImage]}
          alt={`Unit ${unit.unitNo} Interior`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={parseInt(unit.unitNo) < 200}
        />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 md:group-hover:opacity-100 transition-opacity">
          <button onClick={prevImage} className="bg-white/90 p-1.5 rounded-full shadow hover:bg-white transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-900" />
          </button>
          <button onClick={nextImage} className="bg-white/90 p-1.5 rounded-full shadow hover:bg-white transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-900" />
          </button>
        </div>

        {/* Unit Badge */}
        <div className="absolute top-3 left-3 bg-white px-4 py-1.5 rounded-full shadow-sm">
          <span className="text-[11px] font-bold text-gray-900 uppercase">UNIT {unit.unitNo}</span>
        </div>
      </div>

      {/* Right Minimalist Spec Column */}
      <div className="w-full md:w-[38%] flex flex-col justify-center p-4 sm:p-5 lg:p-6 bg-white overflow-hidden">
        <div className="mb-3 text-center w-full">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#00E676] mb-0.5 leading-none tracking-tight">Available<br/>Now!</h3>
          <p className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-tight">{unit.price}</p>
        </div>

        <div className="space-y-1.5 w-full max-w-[220px] mx-auto">
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-gray-500 uppercase tracking-widest">Bedrooms</span>
            <span className="text-sm font-medium text-gray-900">{unit.bedrooms}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-gray-500 uppercase tracking-widest">Bathrooms</span>
            <span className="text-sm font-medium text-gray-900">{unit.bathrooms}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-gray-500 uppercase tracking-widest">Interior</span>
            <span className="text-sm font-medium text-gray-900">{breakdown.int}m²</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-gray-500 uppercase tracking-widest">Balcony</span>
            <span className="text-sm font-medium text-gray-900">{breakdown.bal}m²</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-gray-500 uppercase tracking-widest">Total Size</span>
            <span className="text-sm font-medium text-gray-900">{unit.size}m²</span>
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
    { units: ["102", "103"] },
    { units: ["104", "106"] },
    { units: ["302", "303"] },
    { units: ["304"] },
  ]

  return (
    <div id="properties" className="w-full bg-gray-50/30 py-12 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 text-gray-900 tracking-tight">
          Available Selection
        </h2>

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
