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

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="group relative w-full aspect-[16/9] bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col transition-all hover:shadow-2xl">
      {/* Top 2/3: Image Carousel */}
      <div className="relative h-[66.6%] w-full bg-gray-50 overflow-hidden">
        <Image
          src={images[currentImage]}
          alt={`Unit ${unit.unitNo} Interior`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={parseInt(unit.unitNo) < 200}
        />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={prevImage} className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white">
            <ChevronLeft className="w-5 h-5 text-gray-900" />
          </button>
          <button onClick={nextImage} className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white">
            <ChevronRight className="w-5 h-5 text-gray-900" />
          </button>
        </div>

        {/* Unit Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
          <span className="text-sm font-bold text-gray-900">Unit {unit.unitNo}</span>
        </div>
      </div>

      {/* Bottom 1/3: Minimalist Info */}
      <div className="h-[33.4%] w-full flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 text-gray-600 mb-1">
            <span className="text-sm font-medium">{unit.bedrooms} Bed</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-sm font-medium">{unit.bathrooms} Bath</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-sm font-medium">{unit.size}m²</span>
          </div>
          <p className="text-xl font-black text-gray-900">{unit.price}</p>
        </div>

        <Button 
          onClick={onEnquire}
          className="bg-gray-900 hover:bg-blue-600 text-white font-bold rounded-xl px-6 transition-colors shadow-sm"
        >
          Enquire
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
