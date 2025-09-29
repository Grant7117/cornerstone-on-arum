"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500"
      case "Sold":
        return "bg-red-500"
      case "Prequalified":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const nextImage = () => {
    if (unit.images && unit.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % unit.images.length)
    }
  }

  const prevImage = () => {
    if (unit.images && unit.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + unit.images.length) % unit.images.length)
    }
  }

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48 bg-gray-700">
        <div
          className="absolute top-4 left-4 w-6 h-6 rounded-full border-2 border-white z-10"
          style={{ backgroundColor: unit.color }}
        ></div>

        {unit.images && unit.images.length > 0 ? (
          <>
            <img
              src={unit.images[currentImageIndex] || "/placeholder.svg"}
              alt={`Unit ${unit.unitNo} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {unit.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 h-8 w-8"
                  onClick={prevImage}
                >
                  <ChevronLeft />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 h-8 w-8"
                  onClick={nextImage}
                >
                  <ChevronRight />
                </Button>

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {unit.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">Unit Interior Image</div>
        )}
      </div>

      {/* Unit Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Unit {unit.unitNo}</h3>
            <p className="text-gray-400">{unit.floor} Floor</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(unit.status)}`}>
            {unit.status}
          </span>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Bedrooms:</span>
            <span className="text-white">{unit.bedrooms}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Bathrooms:</span>
            <span className="text-white">{unit.bathrooms}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Size:</span>
            <span className="text-white">{unit.size}m²</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-600">
          <p className="text-lg font-semibold text-white">{unit.price}</p>
        </div>
      </div>
    </div>
  )
}
