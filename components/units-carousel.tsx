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
    <div id="properties" className="flex flex-col py-24 overflow-hidden bg-deep-obsidian">
      <h2 className="font-serif text-4xl md:text-6xl text-center mb-16 text-warm-stone px-4 tracking-tighter">
        Available Apartments
      </h2>

      {/* Architectural Tab Navigation */}
      <div className="max-w-5xl mx-auto w-full px-4 mb-16">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 border-b border-white/10 pb-10">
          {[
            { id: "1-bedroom", label: "1 Bedroom", size: "45-48m²" },
            { id: "2-bedroom", label: "2 Bedroom", size: "67m²" },
            { id: "2-bedroom-loft", label: "2 Bedroom Loft", size: "77m²" }
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id as any)}
              className={`group flex flex-col items-center sm:items-start transition-all relative pb-4 ${
                selectedType === type.id ? "text-warm-stone" : "text-warm-stone/30 hover:text-warm-stone/60"
              }`}
            >
              <span className="font-serif text-2xl md:text-3xl tracking-tight">{type.label}</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] mt-2 text-muted-bronze font-bold">
                {type.size}
              </span>
              {selectedType === type.id && (
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-muted-bronze shadow-[0_0_15px_rgba(156,132,108,0.6)]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="relative px-4 lg:px-20">
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-deep-obsidian/40 backdrop-blur-xl border border-white/10 text-warm-stone hover:bg-muted-bronze/20 shadow-2xl rounded-full p-6 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-12"
        >
          {units?.map((unit, index) => (
            <div key={`${unit.unitNo}-${index}`} className="flex-shrink-0 w-[85vw] sm:w-[380px] snap-center">
              <UnitCard unit={unit} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-deep-obsidian/40 backdrop-blur-xl border border-white/10 text-warm-stone hover:bg-muted-bronze/20 shadow-2xl rounded-full p-6 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center mt-12 px-4">
        <Button
          onClick={onEnquire}
          className="w-full sm:w-auto bg-transparent border border-muted-bronze/50 text-muted-bronze hover:bg-muted-bronze hover:text-deep-obsidian font-sans uppercase tracking-[0.3em] py-10 px-20 text-[10px] font-bold transition-all duration-700 rounded-none h-auto"
        >
          Request Private Portfolio
        </Button>
      </div>
    </div>
  )
}
