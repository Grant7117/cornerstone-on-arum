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
        return "bg-red-500"
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
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 max-w-[340px] mx-auto transition-transform hover:scale-[1.02]">
      <div className="relative h-48 bg-gray-900">
        <div
          className="absolute top-3 left-3 w-5 h-5 rounded-full border-2 border-white z-10 shadow-md"
          style={{ backgroundColor: unit.color }}
        ></div>

        {sortedImages.length > 0 ? (
          <>
            <img
              src={sortedImages[currentImageIndex] || "/placeholder.svg"}
              alt={`Unit ${unit.unitNo} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {sortedImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-0 h-7 w-7 rounded-full"
                  onClick={prevImage}
                >
                  <ChevronLeft />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-0 h-7 w-7 rounded-full"
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
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">Unit Interior Image</div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-3">
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-white truncate">Unit {unit.unitNo.replace("CS", "")}</h3>
            <p className="text-xs text-gray-400 font-medium truncate">{unit.floor} Floor</p>
          </div>
          <div className={`shrink-0 px-2 py-1 rounded-md text-[9px] font-black tracking-tighter uppercase text-white ${getStatusColor(unit.status)} shadow-inner flex flex-col items-center justify-center leading-none text-center min-w-[70px] h-[32px]`}>
            {unit.status.includes("-") ? (
              <>
                <span>{unit.status.split("-")[0].trim()}</span>
                <span className="text-[7px] mt-0.5 opacity-90">{unit.status.split("-")[1].trim()}</span>
              </>
            ) : (
              <span>{unit.status}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 pt-1 border-t border-slate-700/50">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Beds</span>
            <span className="text-white font-semibold">{unit.bedrooms}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tight">Baths</span>
            <span className="text-white font-semibold">{unit.bathrooms}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tight">Size</span>
            <span className="text-white font-semibold">{unit.size}m²</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-base font-black text-white tracking-tight">{unit.price}</p>
          <Button variant="ghost" size="sm" className="h-7 text-[10px] uppercase font-bold text-blue-400 hover:text-blue-300 p-0">
            Details
          </Button>
        </div>
      </div>
    </div>
  )
}

