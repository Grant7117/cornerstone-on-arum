"use client"

import { useState, useRef } from "react"
import { UnitCard } from "@/components/unit-card"
import { ChevronLeft, ChevronRight } from "@/components/icons"
import { Button } from "@/components/ui/button"

import { unitsData } from "@/data/units"

interface UnitsCarouselProps {
  onEnquire: () => void
}

export function UnitsCarousel({ onEnquire }: UnitsCarouselProps) {
  const [selectedType, setSelectedType] = useState<"1-bedroom" | "2-bedroom" | "2-bedroom-loft">("1-bedroom")
  const [activeDot, setActiveDot] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const units = unitsData[selectedType]

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft
      const itemWidth = scrollContainerRef.current.offsetWidth
      const index = Math.round(scrollPosition / itemWidth)
      setActiveDot(index)
    }
  }

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth"
      })
    }
  }

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
    <div id="properties" className="flex flex-col py-6 sm:py-8 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-gray-900 px-4">
        Available Apartments
      </h2>

      <div className="bg-white rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 mx-4 sm:mx-auto shadow-sm">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-8">
          {/* 1 Bedroom */}
          <button
            onClick={() => setSelectedType("1-bedroom")}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all w-full sm:w-auto ${selectedType === "1-bedroom" ? "bg-gray-100 ring-2 ring-gray-900 shadow-inner" : "hover:bg-gray-50 bg-gray-50/50"
              }`}
          >
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900">1 Bedroom</h3>
              <p className="text-sm text-gray-600">45-48m²</p>
            </div>
            <div className="flex gap-2 items-center ml-auto sm:ml-0">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: "#7FD957" }}></div>
                <span className="text-[10px] mt-1 font-bold">47m²</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: "#F4E96D" }}></div>
                <span className="text-[10px] mt-1 font-bold">45m²</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: "#FF6B6B" }}></div>
                <span className="text-[10px] mt-1 font-bold">48m²</span>
              </div>
            </div>
          </button>

          {/* 2 Bedroom */}
          <button
            onClick={() => setSelectedType("2-bedroom")}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all w-full sm:w-auto ${selectedType === "2-bedroom" ? "bg-gray-100 ring-2 ring-gray-900 shadow-inner" : "hover:bg-gray-50 bg-gray-50/50"
              }`}
          >
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900">2 Bedroom</h3>
              <p className="text-sm text-gray-600">67m²</p>
            </div>
            <div className="flex gap-2 items-center ml-auto sm:ml-0">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: "#F4C89D" }}></div>
                <span className="text-[10px] mt-1 font-bold">67m²</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: "#6DC5E8" }}></div>
                <span className="text-[10px] mt-1 font-bold">67m²</span>
              </div>
            </div>
          </button>

          {/* 2 Bedroom Loft */}
          <button
            onClick={() => setSelectedType("2-bedroom-loft")}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all w-full sm:w-auto ${selectedType === "2-bedroom-loft" ? "bg-gray-100 ring-2 ring-gray-900 shadow-inner" : "hover:bg-gray-50 bg-gray-50/50"
              }`}
          >
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900">2 Bedroom Loft</h3>
              <p className="text-sm text-gray-600">77m²</p>
            </div>
            <div className="flex gap-2 items-center ml-auto sm:ml-0">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: "#9B9FD8" }}></div>
                <span className="text-[10px] mt-1 font-bold">77m²</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: "#F4B4C4" }}></div>
                <span className="text-[10px] mt-1 font-bold">77m²</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="relative px-4">
        {/* Left Navigation Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-4 transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth sm:px-12 snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {units?.map((unit, index) => (
            <div key={`${unit.unitNo}-${index}`} className="flex-shrink-0 w-[85vw] sm:w-80 snap-center">
              <UnitCard unit={unit} />
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-4 transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-gray-900" />
        </button>

        {/* Mobile Pagination Dots */}
        <div className="flex sm:hidden justify-center gap-2 mt-4">
          {units?.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 transition-all rounded-full ${activeDot === index ? "w-8 bg-blue-600" : "w-2 bg-gray-300"}`}
              aria-label={`Go to unit ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Further Information Request Button */}
      <div className="flex justify-center mt-8 sm:mt-12 px-4">
        <Button
          onClick={onEnquire}
          className="w-full sm:w-auto !bg-[#0066FF] !text-white hover:!bg-blue-700 font-bold py-6 px-12 text-lg md:text-xl rounded-xl shadow-xl transition-all transform active:scale-[0.98] h-auto text-center"
        >
          Request Further Information
        </Button>
      </div>
    </div>
  )
}
