"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { unitsData, Unit } from "@/data/units"

interface Hotspot {
  id: string
  unitNos: string[]
  name: string
  color: string
  shapes: { x: number; y: number; width: number; height: number }[]
}

const hotspots: Hotspot[] = [
  {
    id: "101-201",
    unitNos: ["101", "201"],
    name: "Units 101 & 201",
    color: "#7FD957",
    shapes: [
      { x: 85, y: 85, width: 90, height: 90 } // Top-left green (square)
    ]
  },
  {
    id: "203",
    unitNos: ["203"],
    name: "Unit 203",
    color: "#F4E96D",
    shapes: [
      { x: 85, y: 175, width: 180, height: 60 } // Full width yellow
    ]
  },
  {
    id: "204",
    unitNos: ["204"],
    name: "Unit 204",
    color: "#FF6B6B",
    shapes: [
      { x: 45, y: 235, width: 40, height: 35 }, // Protruding stairs
      { x: 85, y: 235, width: 180, height: 35 } // Top red
    ]
  },
  {
    id: "205",
    unitNos: ["205"],
    name: "Unit 205",
    color: "#FF6B6B",
    shapes: [
      { x: 45, y: 270, width: 40, height: 35 }, // Protruding stairs
      { x: 85, y: 270, width: 180, height: 35 } // Bottom red
    ]
  },
  {
    id: "302",
    unitNos: ["302"],
    name: "Unit 302",
    color: "#F4B4C4",
    shapes: [
      { x: 415, y: 175, width: 185, height: 60 }, // 3rd Floor area top pink
      { x: 725, y: 175, width: 155, height: 60 }  // Loft area top pink
    ]
  },
  {
    id: "303",
    unitNos: ["303"],
    name: "Unit 303",
    color: "#9B9FD8",
    shapes: [
      { x: 375, y: 235, width: 40, height: 35 }, // 3rd Floor protruding stairs
      { x: 415, y: 235, width: 185, height: 35 }, // 3rd Floor area middle purple
      { x: 685, y: 235, width: 40, height: 35 }, // Loft protruding stairs
      { x: 725, y: 235, width: 155, height: 35 }  // Loft area bottom purple
    ]
  },
  {
    id: "304",
    unitNos: ["304"],
    name: "Unit 304",
    color: "#9B9FD8",
    shapes: [
      { x: 375, y: 270, width: 40, height: 35 }, // 3rd Floor protruding stairs
      { x: 415, y: 270, width: 185, height: 35 }, // 3rd Floor area bottom purple
      { x: 685, y: 270, width: 40, height: 35 }, // Loft protruding stairs
      { x: 725, y: 270, width: 155, height: 35 }  // Loft area bottom purple? (Wait, loft only has 2 units?)
    ]
  }
]

export function InteractiveFloorPlans() {
  const [hoveredHotspot, setHoveredHotspot] = useState<Hotspot | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Find units matching the hotspot
  const getUnitDetails = (unitNo: string): Unit | null => {
    for (const category in unitsData) {
      const u = unitsData[category].find((item) => item.unitNo === unitNo)
      if (u) return u
    }
    return null
  }

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (containerRef.current) {
      const bounds = containerRef.current.getBoundingClientRect()
      // Position tooltip slightly offset from cursor
      setTooltipPos({
        x: e.clientX - bounds.left + 15,
        y: e.clientY - bounds.top + 15
      })
    }
  }

  const handleMouseOver = (hotspot: Hotspot) => {
    setHoveredHotspot(hotspot)
  }

  const handleMouseOut = () => {
    setHoveredHotspot(null)
  }

  // Get specs of units for rendering the tooltip
  const activeUnits = hoveredHotspot
    ? hoveredHotspot.unitNos
        .map((num) => getUnitDetails(num))
        .filter((u): u is Unit => u !== null)
    : []

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-[850px] mx-auto overflow-visible select-none">
      {/* Base floor plans image */}
      <Image
        src="/images/Colour-coded-plans.png"
        alt="Cornerstone Colour-Coded Floor Plans"
        fill
        sizes="(max-width: 1024px) 100vw, 850px"
        className="object-contain rounded-lg shadow-xl"
        priority
      />

      {/* SVG overlay for interactive hotspots */}
      <svg
        viewBox="0 0 1024 1024"
        className="absolute inset-0 w-full h-full z-10 cursor-pointer"
        onMouseMove={handleMouseMove}
      >
        {hotspots.map((hotspot) =>
          hotspot.shapes.map((shape, sIdx) => {
            const isHovered = hoveredHotspot?.id === hotspot.id
            return (
              <rect
                key={`${hotspot.id}-${sIdx}`}
                x={shape.x}
                y={shape.y}
                width={shape.width}
                height={shape.height}
                fill={isHovered ? `${hotspot.color}33` : "transparent"} // 20% opacity color when hovered
                stroke={isHovered ? hotspot.color : "transparent"}
                strokeWidth={2}
                className="transition-all duration-200"
                onMouseOver={() => handleMouseOver(hotspot)}
                onMouseOut={handleMouseOut}
              />
            )
          })
        )}
      </svg>

      {/* Custom Floating Glassmorphic Tooltip */}
      {hoveredHotspot && activeUnits.length > 0 && (
        <div
          className="absolute z-30 pointer-events-none transition-all duration-75 ease-out"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
            maxWidth: "280px"
          }}
        >
          <div className="bg-slate-950/90 backdrop-blur-md border border-white/10 text-white rounded-xl shadow-2xl p-4 flex flex-col gap-3 font-sans w-64">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-serif text-lg tracking-tight text-warm-stone font-semibold">
                {hoveredHotspot.name}
              </span>
              <span className="text-[9px] font-bold tracking-widest px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 uppercase">
                Available
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              {activeUnits.map((unit) => (
                <div key={unit.unitNo} className="text-xs text-slate-300 flex flex-col gap-0.5 border-b border-white/5 last:border-b-0 pb-1.5 last:pb-0">
                  <div className="flex justify-between font-medium">
                    <span className="text-slate-400">Level:</span>
                    <span>{unit.floor} Floor</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Specs:</span>
                    <span>{unit.bedrooms} Bed • {unit.bathrooms} Bath • {unit.size}m²</span>
                  </div>
                  <div className="flex justify-between text-warm-stone font-semibold mt-0.5">
                    <span>Investment:</span>
                    <span>{unit.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[9px] text-slate-500 text-center tracking-wider uppercase mt-1">
              Click properties below to enquire
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
