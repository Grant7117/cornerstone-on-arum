"use client"

import { useState } from "react"
import Image from "next/image"

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
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRight = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
  </svg>
)

export function UnitCard({ unit }: UnitCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const getStatusBadge = (status: string) => {
    const isSold = status === "Sold" || status === "Clause"
    return (
      <span className={`px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase border ${
        isSold ? "border-red-500/50 text-red-500 bg-red-500/10" : "border-muted-bronze/50 text-muted-bronze bg-muted-bronze/10"
      }`}>
        {status === "Clause" ? "SOLD (72hr)" : status}
      </span>
    )
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (unit.images && unit.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % unit.images!.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (unit.images && unit.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + unit.images!.length) % unit.images!.length)
    }
  }

  return (
    <div className="group relative overflow-hidden bg-deep-obsidian/40 backdrop-blur-md border border-white/10 transition-all duration-500 hover:border-muted-bronze/50">
      <div className="aspect-[4/5] overflow-hidden relative">
        <div 
          className="absolute top-4 left-4 w-4 h-4 rounded-full z-20" 
          style={{ backgroundColor: unit.color, boxShadow: `0 0 15px ${unit.color}` }}
        />
        
        {unit.images && unit.images.length > 0 ? (
          <>
            <Image
              src={unit.images[currentImageIndex] || "/placeholder.svg"}
              alt={`Unit ${unit.unitNo}`}
              fill
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-obsidian via-transparent to-transparent opacity-60" />
            
            {unit.images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-2 opacity-100 transition-opacity">
                <button onClick={prevImage} className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-all z-30 pointer-events-auto"><ChevronLeft /></button>
                <button onClick={nextImage} className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-all z-30 pointer-events-auto"><ChevronRight /></button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-full bg-slate-900 text-warm-stone/20 font-serif italic text-sm">Render Pending</div>
        )}

        <div className="absolute top-4 right-4 z-20">
          {getStatusBadge(unit.status)}
        </div>
      </div>

      <div className="absolute bottom-0 w-full p-6 text-white">
        <span className="font-serif text-5xl font-light tracking-tighter text-warm-stone/90">{unit.unitNo}</span>
        <div className="mt-2 flex items-end justify-between border-t border-white/10 pt-4">
          <div>
            <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-muted-bronze">{unit.floor} Floor</h3>
            <p className="font-sans text-xs text-warm-stone/60">{unit.bedrooms} Bed • {unit.size}m²</p>
          </div>
          <div className="text-right">
            <p className="font-sans text-[8px] uppercase tracking-widest text-warm-stone/40">Starting From</p>
            <p className="font-serif text-lg text-warm-stone">{unit.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
