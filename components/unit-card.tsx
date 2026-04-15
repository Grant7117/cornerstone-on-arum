"use client"

import { useState } from "react"
import Image from "next/image"
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

  const getStatusBadge = (status: string) => {
    if (status === "Clause") {
      return (
        <span className="flex flex-col items-center justify-center px-4 py-1.5 rounded-lg text-xs font-bold text-white leading-tight shadow-md"
          style={{ backgroundColor: "#E8720C", minWidth: "80px", textAlign: "center" }}>
          <span>SOLD</span>
          <span style={{ fontSize: "0.7rem", fontWeight: 700 }}>72hr clause</span>
        </span>
      )
    }
    const colorMap: Record<string, string> = {
      Available: "bg-green-500",
      Sold: "bg-red-500",
      Reserved: "bg-yellow-500",
    }
    return (
      <span className={`px-4 py-1.5 rounded-lg text-xs font-bold text-white shadow-md ${colorMap[status] ?? "bg-gray-500"}`}
        style={{ minWidth: "80px", textAlign: "center", display: "inline-block" }}>
        {status === "Sold" ? "SOLD" : status}
      </span>
    )
  }

  const nextImage = () => {
    if (unit.images && unit.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % unit.images!.length)
    }
  }

  const prevImage = () => {
    if (unit.images && unit.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + unit.images!.length) % unit.images!.length)
    }
  }

  return (
    <div className="bg-[#2b292a] rounded-2xl overflow-hidden shadow-2xl border border-[#6d645b]/30 h-full flex flex-col transition-all hover:scale-[1.01] hover:border-[#a89b8c]/50">
      <div className="relative h-64 bg-slate-900">
        <div
          className="absolute top-4 left-4 w-7 h-7 rounded-full border-2 border-white z-10 shadow-lg"
          style={{ backgroundColor: unit.color }}
        ></div>

        {unit.images && unit.images.length > 0 ? (
          <>
            <div className="relative w-full h-full">
              <Image
                src={unit.images[currentImageIndex] || "/placeholder.svg"}
                alt={`Unit ${unit.unitNo} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={unit.unitNo === "101"}
              />
            </div>

            {unit.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white rounded-full h-12 w-12 flex items-center justify-center p-0 border border-white/10 active:scale-90 transition-transform"
                  onClick={prevImage}
                >
                  <ChevronLeft />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white rounded-full h-12 w-12 flex items-center justify-center p-0 border border-white/10 active:scale-90 transition-transform"
                  onClick={nextImage}
                >
                  <ChevronRight />
                </Button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {unit.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"}`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">Unit Interior Image</div>
        )}
      </div>

      {/* Unit Details */}
      <div className="p-8 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Unit {unit.unitNo}</h3>
              <p className="text-[#a89b8c] font-bold text-sm tracking-widest uppercase">{unit.floor} Floor</p>
            </div>
            {getStatusBadge(unit.status)}
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8 py-4 border-y border-[#6d645b]/20">
            <div className="flex flex-col">
              <span className="text-[#cfd2d7]/60 text-[10px] uppercase tracking-[0.2em] font-black mb-2">Beds</span>
              <span className="text-white text-xl font-black">{unit.bedrooms}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#cfd2d7]/60 text-[10px] uppercase tracking-[0.2em] font-black mb-2">Baths</span>
              <span className="text-white text-xl font-black">{unit.bathrooms}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#cfd2d7]/60 text-[10px] uppercase tracking-[0.2em] font-black mb-2">Size</span>
              <span className="text-white text-xl font-black">{unit.size}m²</span>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <p className="text-3xl font-black text-[#a89b8c] tracking-tighter">{unit.price}</p>
          <div className="text-[10px] text-[#cfd2d7]/40 font-black uppercase tracking-[0.3em]">Incl. VAT</div>
        </div>
      </div>
    </div>

  )
}
