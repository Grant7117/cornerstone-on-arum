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
    <div className="group relative w-full bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row transition-all hover:shadow-2xl md:aspect-[16/9]">
      {/* Left 2/3: Image Carousel */}
      <div className="relative w-full md:w-[66.6%] aspect-video md:aspect-auto h-auto md:h-full bg-gray-50 overflow-hidden">
        <Image
          src={images[currentImage]}
          alt={`Unit ${unit.unitNo} Interior`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={parseInt(unit.unitNo) < 200}
        />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 md:group-hover:opacity-100 transition-opacity">
          <button onClick={prevImage} className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-900" />
          </button>
          <button onClick={nextImage} className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-900" />
          </button>
        </div>

        {/* Unit Badge */}
        <div className="absolute top-4 left-4 bg-white px-5 py-2 rounded-full shadow-sm">
          <span className="text-sm font-black text-gray-900 uppercase">UNIT {unit.unitNo}</span>
        </div>
      </div>

      {/* Right 1/3: Minimalist Spec Column */}
      <div className="w-full md:w-[33.4%] flex flex-col p-6 sm:p-8 sm:px-10 bg-white">
        <div className="flex-grow flex flex-col justify-center">
          <div className="text-center md:text-left mb-8">
            <h3 className="text-3xl font-black text-[#00C853] mb-2 leading-none">Available<br/>Now!</h3>
            <p className="text-3xl font-black text-gray-900 tracking-tight">{unit.price}</p>
          </div>

          <div className="space-y-4 w-full max-w-[200px] mx-auto md:mx-0">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Bedrooms</span>
              <span className="text-sm font-black text-gray-900">{unit.bedrooms}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Bathrooms</span>
              <span className="text-sm font-black text-gray-900">{unit.bathrooms}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Interior</span>
              <span className="text-sm font-black text-gray-900">{breakdown.int}m²</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Balcony</span>
              <span className="text-sm font-black text-gray-900">{breakdown.bal}m²</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Total Size</span>
              <span className="text-sm font-black text-gray-900">{unit.size}m²</span>
            </div>
          </div>
        </div>

        <Button 
          onClick={onEnquire}
          className="w-full mt-8 bg-gray-900 hover:bg-blue-600 text-white font-bold rounded-xl py-6 transition-all shadow-lg transform active:scale-[0.98] h-auto"
        >
          Secure Unit
        </Button>
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
