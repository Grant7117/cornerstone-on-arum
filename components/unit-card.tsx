"use client"

import { useState } from "react"
import { Button } from "./ui/button"

interface Unit {
  unitNo: string
  floor: string
  bedrooms: number
  bathrooms: number
  size: number
  color: string
  status: string
  price: string
  images?: string[]
}

interface UnitCardProps {
  unit: Unit
}

const ChevronLeft = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRight = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function UnitCard({ unit }: UnitCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Move floorplan images to the end
  const sortedImages = unit.images ? [
    ...unit.images.filter(img => !img.toLowerCase().includes('floorplan')),
    ...unit.images.filter(img => img.toLowerCase().includes('floorplan'))
  ] : []

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500"
      case "Sold":
      case "Sold (Red)":
        return "bg-red-500"
      case "SOLD - 72hr clause":
      case "Offers Welcome - 72hr Clause":
        return "bg-orange-500"
      case "Prequalified":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const nextImage = () => {
    if (sortedImages.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % sortedImages.length)
    }
  }

  const prevImage = () => {
    if (sortedImages.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + sortedImages.length) % sortedImages.length)
    }
  }

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 max-w-[340px] mx-auto transition-all hover:shadow-2xl hover:border-slate-600">
      <div className="relative h-48 bg-gray-900">
        {/* Color Indicator */}
        <div
          className="absolute top-3 left-3 w-5 h-5 rounded-full border-2 border-white z-10 shadow-md"
          style={{ backgroundColor: unit.color }}
        ></div>

        {sortedImages.length > 0 ? (
          <>
            <img
              src={sortedImages[currentImageIndex] || "/placeholder.svg"}
              alt={`Unit ${unit.unitNo} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />

            {sortedImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-0 h-8 w-8 rounded-full"
                  onClick={prevImage}
                >
                  <ChevronLeft />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-0 h-8 w-8 rounded-full"
                  onClick={nextImage}
                >
                  <ChevronRight />
                </Button>

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {sortedImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${index === currentImageIndex ? "bg-white" : "bg-white/40"}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs italic">
            Interior renders coming soon
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-4">
          <div className="min-w-0">
            <h3 className="text-xl font-black text-white truncate tracking-tight">
              Unit {unit.unitNo.replace("CS", "")}
            </h3>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
              {unit.floor} Floor
            </p>
          </div>

          {/* Compact multi-line Status Badge */}
          <div className={`shrink-0 px-2 py-1 rounded-md text-[9px] font-black tracking-tighter uppercase text-white ${getStatusColor(unit.status)} shadow-lg flex flex-col items-center justify-center leading-none text-center min-w-[75px] h-[34px]`}>
            {unit.status === "SOLD - 72hr clause" ? (
              <>
                <span className="mb-0.5">SOLD</span>
                <span className="text-[7px] opacity-90 font-bold whitespace-nowrap">72hr clause</span>
              </>
            ) : (
              <span className="font-black">{unit.status}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-700/50">
          <div className="text-center">
            <span className="block text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Beds</span>
            <span className="text-lg font-black text-white leading-none">{unit.bedrooms}</span>
          </div>
          <div className="text-center border-x border-slate-700/50">
            <span className="block text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Baths</span>
            <span className="text-lg font-black text-white leading-none">{unit.bathrooms}</span>
          </div>
          <div className="text-center">
            <span className="block text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Size</span>
            <span className="text-lg font-black text-white leading-none">{unit.size}m²</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-black text-white tracking-tighter">{unit.price}</p>
          <Button variant="link" size="sm" className="h-auto p-0 text-[11px] font-black uppercase text-blue-400 hover:text-blue-300 tracking-widest">
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  )
}
