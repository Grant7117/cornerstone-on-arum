"use client"

import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Download, ChevronDown, ChevronUp, ImageIcon, ChevronLeft, ChevronRight, X } from "@/components/icons"

interface FloorPlan {
  id: string
  name: string
  units: string
  bedrooms: number
  bathrooms: number
  size: string
  price: string
  imagePath: string
  description: string
}

const targetUnits = ["102", "103", "104", "106", "302", "303", "306"]

const floorPlans: FloorPlan[] = [
  {
    id: "2bed-67-b",
    name: "2 Bedroom - Unit 102",
    units: "102",
    bedrooms: 2,
    bathrooms: 1,
    size: "67m²",
    price: "R2,100,000",
    imagePath: "/images/floor-plans/102-floor-plans.png",
    description: "Spacious two-bedroom unit featuring open-plan living and contemporary design.",
  },
  {
    id: "1bed-45-b",
    name: "1 Bedroom - Unit 103",
    units: "103",
    bedrooms: 1,
    bathrooms: 1,
    size: "45m²",
    price: "R1,600,000",
    imagePath: "/images/floor-plans/103-floor- plans.png",
    description: "Compact yet airy 1-bedroom apartment, perfect for investors or first-time buyers.",
  },
  {
    id: "1bed-48-a",
    name: "1 Bedroom - Unit 104",
    units: "104",
    bedrooms: 1,
    bathrooms: 1,
    size: "48m²",
    price: "R1,600,000",
    imagePath: "/images/floor-plans/104-floor-plans.png",
    description: "Well-appointed unit with generous living space and high-end fittings.",
  },
  {
    id: "1bed-45-c",
    name: "1 Bedroom - Unit 106",
    units: "106",
    bedrooms: 1,
    bathrooms: 1,
    size: "45m²",
    price: "R1,500,000",
    imagePath: "/images/floor-plans/106-floor-plans.png",
    description: "Efficiently designed unit maximizing space and light.",
  },
  {
    id: "2bed-loft-302",
    name: "2 Bedroom Loft - Unit 302",
    units: "302",
    bedrooms: 2,
    bathrooms: 2,
    size: "77m²",
    price: "R2,600,000",
    imagePath: "/images/floor-plans/302-floor-plans.png",
    description: "Premium loft with split-level design, internal staircase, and 2 bathrooms (one per level).",
  },
  {
    id: "2bed-loft-303",
    name: "2 Bedroom Loft - Unit 303",
    units: "303",
    bedrooms: 2,
    bathrooms: 2,
    size: "77m²",
    price: "R2,600,000",
    imagePath: "/images/floor-plans/303-floor-plan.png",
    description: "Exclusive loft with double-volume living, 6m² balcony, and sophisticated split-level layout.",
  },
  {
    id: "2bed-67-d",
    name: "2 Bedroom - Unit 306",
    units: "306",
    bedrooms: 2,
    bathrooms: 1,
    size: "67m²",
    price: "R2,200,000",
    imagePath: "/images/floor-plans/306-floor-plans.png",
    description: "Exclusive loft with largest balcony (9m²) and double-volume living. Best value loft option.",
  },
]

interface FloorPlansModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FloorPlansModal({ isOpen, onClose }: FloorPlansModalProps) {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleDownload = (imagePath: string, name: string) => {
    const link = document.createElement("a")
    link.href = imagePath
    link.download = `${name.replace(/\s+/g, "-").toLowerCase()}-floorplan.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadAll = () => {
    floorPlans.forEach((plan, index) => {
      setTimeout(() => {
        handleDownload(plan.imagePath, plan.name)
      }, index * 500)
    })
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
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] w-full lg:max-w-6xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 lg:p-8 bg-zinc-50 border-0 rounded-2xl">
        <DialogTitle className="sr-only">Priority Floor Plans</DialogTitle>
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 bg-white shadow-sm hover:bg-gray-100 transition-colors z-50 text-gray-900"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="py-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 text-black">Priority Unit Floor Plans</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Exclusive look at the floor plans for our priority selection units.
            </p>
          </div>

          <div className="mb-8 max-w-5xl mx-auto bg-[#FFF8E7] border border-[#D4A574] rounded-lg p-4">
            <p className="text-sm text-[#8B4513] text-center leading-relaxed">
              <span className="font-semibold">Important Notice:</span> The images shown are photorealistic architectural
              renders and artist's impressions. While every effort has been made to ensure accuracy, these renders may
              differ from the finished product. Final specifications, finishes, and layouts may vary. Please refer to the
              official plans and specifications for exact details.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <Button onClick={handleDownloadAll} size="lg" className="gap-2 !bg-black hover:!bg-gray-800 text-white shadow-lg">
              <Download className="h-5 w-5" />
              Download All Selected Plans
            </Button>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all border border-gray-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {floorPlans.map((plan) => (
                <Card key={plan.id} className="flex-shrink-0 w-[85vw] sm:w-[22rem] overflow-hidden hover:shadow-xl transition-shadow snap-start rounded-2xl border-gray-100 border bg-white">
                  <div className="relative h-64 bg-gray-50 flex items-center justify-center p-2 border-b border-gray-50">
                    <Image
                      src={plan.imagePath || "/placeholder.svg"}
                      alt={plan.name}
                      fill
                      className="max-w-full max-h-full object-contain p-2"
                      sizes="(max-width: 768px) 85vw, 320px"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1 text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-blue-600 font-bold mb-5 tracking-widest uppercase">Unit {plan.units}</p>

                    <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                      <div className="bg-gray-50 p-2 rounded-lg text-center">
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Beds</p>
                        <p className="font-black text-gray-900 text-base">{plan.bedrooms}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-lg text-center">
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Baths</p>
                        <p className="font-black text-gray-900 text-base">{plan.bathrooms}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-lg text-center">
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Price</p>
                        <p className="font-black text-gray-900 text-sm whitespace-nowrap">{plan.price}</p>
                      </div>
                    </div>

                    <div className="mb-5">
                      <button
                        onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                        className="flex items-center justify-between w-full text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors py-2"
                      >
                        <span className="uppercase tracking-wider text-[11px]">Specific Unit Details</span>
                        {expandedPlan === plan.id ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      {expandedPlan === plan.id && (
                        <p className="text-sm text-gray-600 mt-3 animate-fade-in">{plan.description}</p>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleDownload(plan.imagePath, plan.name)}
                        className="flex-1 gap-2 !bg-gray-900 hover:!bg-blue-600 text-white font-bold transition-all rounded-xl"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                      <Button
                        onClick={() => window.open(plan.imagePath, "_blank")}
                        variant="outline"
                        size="icon"
                        title="View full size"
                        className="rounded-xl border-gray-200 hover:bg-gray-50 text-gray-900"
                      >
                        <ImageIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all border border-gray-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
