"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, ChevronDown, ChevronUp, ImageIcon, ChevronLeft, ChevronRight } from "@/components/icons"

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

const floorPlans: FloorPlan[] = [
  {
    id: "1bed-47",
    name: "1 Bedroom - Type A",
    units: "101, 201, 108, 208",
    bedrooms: 1,
    bathrooms: 1,
    size: "47m²",
    price: "R1,600,000",
    imagePath: "/images/floorplans/cs-101-201-floorplan.png",
    description: "Open plan lounge, dining & kitchen with balcony. Perfect for first-time buyers.",
  },
  {
    id: "1bed-45-a",
    name: "1 Bedroom - Type B",
    units: "103, 203",
    bedrooms: 1,
    bathrooms: 1,
    size: "45m²",
    price: "R1,500,000",
    imagePath: "/images/floorplans/cs-103-203-floorplan.png",
    description: "Compact and efficient layout with modern finishes. Most affordable option.",
  },
  {
    id: "1bed-48-a",
    name: "1 Bedroom - Type C",
    units: "104, 204",
    bedrooms: 1,
    bathrooms: 1,
    size: "48m²",
    price: "R1,600,000",
    imagePath: "/images/floorplans/cs-104-204-floorplan.png",
    description: "Spacious 1-bedroom with passage. Best value for size.",
  },
  {
    id: "1bed-48-b",
    name: "1 Bedroom - Type D",
    units: "105, 205",
    bedrooms: 1,
    bathrooms: 1,
    size: "46m²",
    price: "R1,600,000",
    imagePath: "/images/floorplans/cs-105-205-floorplan.png",
    description: "Well-designed layout with excellent flow and natural light.",
  },
  {
    id: "1bed-45-b",
    name: "1 Bedroom - Type E",
    units: "106, 206",
    bedrooms: 1,
    bathrooms: 1,
    size: "45m²",
    price: "R1,500,000",
    imagePath: "/images/floorplans/cs-106-206-floorplan.png",
    description: "Efficient corner unit with great views and balcony access.",
  },
  {
    id: "1bed-47-b",
    name: "1 Bedroom - Type F",
    units: "108, 208",
    bedrooms: 1,
    bathrooms: 1,
    size: "47m²",
    price: "R1,600,000",
    imagePath: "/images/floorplans/cs-108-208-floorplan.png",
    description: "Popular layout with balanced living and bedroom spaces.",
  },
  {
    id: "2bed-67-a",
    name: "2 Bedroom - Type A",
    units: "102, 202",
    bedrooms: 2,
    bathrooms: 1,
    size: "67m²",
    price: "R2,100,000",
    imagePath: "/images/floorplans/cs-102-202-floorplan.png",
    description: "Spacious 2-bedroom with open plan living. Perfect for families.",
  },
  {
    id: "2bed-67-b",
    name: "2 Bedroom - Type B",
    units: "107, 207",
    bedrooms: 2,
    bathrooms: 1,
    size: "67m²",
    price: "R2,100,000",
    imagePath: "/images/floorplans/cs-107-207-floorplan.png",
    description: "Alternative 2-bedroom layout with excellent space utilization.",
  },
  {
    id: "2bed-67-c",
    name: "2 Bedroom - Unit 301",
    units: "301",
    bedrooms: 2,
    bathrooms: 1,
    size: "67m²",
    price: "R2,200,000",
    imagePath: "/images/floorplans/cs-301-floorplan.png",
    description: "Premium third-floor loft unit with double-volume living and enhanced views.",
  },
  {
    id: "2bed-67-d",
    name: "2 Bedroom - Unit 306",
    units: "306",
    bedrooms: 2,
    bathrooms: 1,
    size: "67m²",
    price: "R2,200,000",
    imagePath: "/images/floorplans/cs-306-floorplan.png",
    description: "Exclusive loft with largest balcony (9m²) and double-volume living. Best value loft option.",
  },
  {
    id: "2bed-loft-302",
    name: "2 Bedroom Loft - Unit 302",
    units: "302",
    bedrooms: 2,
    bathrooms: 2,
    size: "77m²",
    price: "R2,600,000",
    imagePath: "/images/floorplans/cs-302-floorplan.png",
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
    imagePath: "/images/floorplans/cs-303-floorplan.png",
    description: "Exclusive loft with double-volume living, 6m² balcony, and sophisticated split-level layout.",
  },
  {
    id: "2bed-loft-304",
    name: "2 Bedroom Loft - Unit 304",
    units: "304",
    bedrooms: 2,
    bathrooms: 2,
    size: "77m²",
    price: "R2,600,000",
    imagePath: "/images/floorplans/cs-304-floorplan.png",
    description: "Premium loft featuring modern internal staircase, 2 bathrooms, and airy double-volume space.",
  },
  {
    id: "2bed-loft-305",
    name: "2 Bedroom Loft - Unit 305",
    units: "305",
    bedrooms: 2,
    bathrooms: 2,
    size: "77m²",
    price: "R2,600,000",
    imagePath: "/images/floorplans/cs-305-floorplan.png",
    description: "Elegant loft with architectural staircase, split-level bedrooms, and contemporary finishes.",
  },
]

export function FloorPlansSection() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<"all" | "1bed" | "2bed" | "loft">("all")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const filteredPlans = floorPlans.filter((plan) => {
    if (selectedCategory === "all") return true
    if (selectedCategory === "1bed") return plan.bedrooms === 1
    if (selectedCategory === "2bed") return plan.bedrooms === 2 && plan.bathrooms === 1
    if (selectedCategory === "loft") return plan.bathrooms === 2
    return true
  })

  const handleDownload = (imagePath: string, name: string) => {
    const link = document.createElement("a")
    link.href = imagePath
    link.download = `${name.replace(/\s+/g, "-").toLowerCase()}-floorplan.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadAll = () => {
    filteredPlans.forEach((plan, index) => {
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
    <div id="floor-plans" className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-foreground">Explore the Layouts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Colour-coded plans are linked to unit availability. Select by apartment type or download the full set.
          </p>
        </div>

        <div className="mb-8 max-w-6xl mx-auto">
          <img
            src="/images/cornerstone-color-coded-floor-plans.png"
            alt="Cornerstone on Arum Color-Coded Floor Plans showing 1st & 2nd Floor, 3rd Floor, Lofts, and Front Elevations"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="mb-8 max-w-5xl mx-auto bg-[#FFF8E7] border border-[#D4A574] rounded-lg p-4">
          <p className="text-sm text-[#8B4513] text-center leading-relaxed">
            <span className="font-semibold">Important Notice:</span> The images shown are photorealistic architectural
            renders and artist's impressions. While every effort has been made to ensure accuracy, these renders may
            differ from the finished product. Final specifications, finishes, and layouts may vary. Please refer to the
            official plans and specifications for exact details.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className={`min-w-[120px] ${selectedCategory === "all" ? "!bg-black hover:!bg-gray-800 text-white" : ""}`}
          >
            All
          </Button>
          <Button
            variant={selectedCategory === "1bed" ? "default" : "outline"}
            onClick={() => setSelectedCategory("1bed")}
            className={`min-w-[120px] ${selectedCategory === "1bed" ? "!bg-black hover:!bg-gray-800 text-white" : ""}`}
          >
            1 Bedroom
          </Button>
          <Button
            variant={selectedCategory === "2bed" ? "default" : "outline"}
            onClick={() => setSelectedCategory("2bed")}
            className={`min-w-[120px] ${selectedCategory === "2bed" ? "!bg-black hover:!bg-gray-800 text-white" : ""}`}
          >
            2 Bedroom
          </Button>
          <Button
            variant={selectedCategory === "loft" ? "default" : "outline"}
            onClick={() => setSelectedCategory("loft")}
            className={`min-w-[120px] ${selectedCategory === "loft" ? "!bg-black hover:!bg-gray-800 text-white" : ""}`}
          >
            Loft
          </Button>
        </div>

        <div className="flex justify-center mb-8">
          <Button onClick={handleDownloadAll} size="lg" className="gap-2 !bg-black hover:!bg-gray-800 text-white">
            <Download className="h-5 w-5" />
            Download All {selectedCategory !== "all" ? `${selectedCategory.toUpperCase()} Plans` : "Floor Plans"}
          </Button>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredPlans.map((plan) => (
              <Card key={plan.id} className="flex-shrink-0 w-80 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-muted flex items-center justify-center p-2">
                  <img
                    src={plan.imagePath || "/placeholder.svg"}
                    alt={plan.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-xl mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Units: {plan.units}</p>

                  <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Bedrooms</p>
                      <p className="font-semibold">{plan.bedrooms}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Bathrooms</p>
                      <p className="font-semibold">{plan.bathrooms}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Price</p>
                      <p className="font-semibold text-primary">{plan.price}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <button
                      onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                      className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>Details</span>
                      {expandedPlan === plan.id ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {expandedPlan === plan.id && (
                      <p className="text-sm text-muted-foreground mt-2 animate-fade-in">{plan.description}</p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleDownload(plan.imagePath, plan.name)}
                      className="flex-1 gap-2 !bg-black hover:!bg-gray-800 text-white"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                    <Button
                      onClick={() => window.open(plan.imagePath, "_blank")}
                      variant="outline"
                      size="icon"
                      title="View full size"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>
    </div>
  )
}
