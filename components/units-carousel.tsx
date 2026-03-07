"use client"

import { useState, useRef } from "react"
import { UnitCard } from "@/components/unit-card"
import { ChevronLeft, ChevronRight } from "@/components/icons"

import { unitsData } from "@/data/units"

export function UnitsCarousel() {
  const [selectedType, setSelectedType] = useState<"1-bedroom" | "2-bedroom" | "2-bedroom-loft">("1-bedroom")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const units = unitsData[selectedType]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <div id="properties" className="flex flex-col py-6 sm:py-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-gray-900 px-4">
        Available Apartments
      </h2>

      <div className="bg-white rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 mx-4 sm:mx-auto">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 sm:gap-8">
          {/* 1 Bedroom - Horizontal layout with circles on the right */}
          <button
            onClick={() => setSelectedType("1-bedroom")}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${selectedType === "1-bedroom" ? "bg-gray-100 ring-2 ring-gray-900" : "hover:bg-gray-50"
              }`}
          >
            <div className="text-left">
              <h3 className="text-base font-semibold text-gray-900">1 Bedroom</h3>
              <p className="text-xs text-gray-600">45-48m²</p>
            </div>
            <div className="flex gap-1.5 items-center">
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#7FD957" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">47m²</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#F4E96D" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">45m²</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#FF6B6B" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">48m²</span>
              </div>
            </div>
          </button>

          {/* 2 Bedroom - Horizontal layout with circles on the right */}
          <button
            onClick={() => setSelectedType("2-bedroom")}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${selectedType === "2-bedroom" ? "bg-gray-100 ring-2 ring-gray-900" : "hover:bg-gray-50"
              }`}
          >
            <div className="text-left">
              <h3 className="text-base font-semibold text-gray-900">2 Bedroom</h3>
              <p className="text-xs text-gray-600">67m²</p>
            </div>
            <div className="flex gap-1.5 items-center">
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#F4C89D" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">67m²</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#6DC5E8" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">67m²</span>
              </div>
            </div>
          </button>

          {/* 2 Bedroom Loft - Horizontal layout with circles on the right */}
          <button
            onClick={() => setSelectedType("2-bedroom-loft")}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${selectedType === "2-bedroom-loft" ? "bg-gray-100 ring-2 ring-gray-900" : "hover:bg-gray-50"
              }`}
          >
            <div className="text-left">
              <h3 className="text-base font-semibold text-gray-900">2 Bedroom Loft</h3>
              <p className="text-xs text-gray-600">77m²</p>
            </div>
            <div className="flex gap-1.5 items-center">
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#9B9FD8" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">77m²</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#F4B4C4" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">77m²</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="relative px-4">
        {/* Left Navigation Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth sm:px-12 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {units?.map((unit, index) => (
            <div key={`${unit.unitNo}-${index}`} className="flex-shrink-0 w-[85vw] sm:w-80 snap-start">
              <UnitCard unit={unit} />
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-gray-900" />
        </button>
      </div>
    </div>
  )
}
