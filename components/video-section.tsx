"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "@/components/icons"
import { Button } from "@/components/ui/button"

const areaImages = [
  {
    id: 1,
    title: "Sunset at the Rocks",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-21%20011421-aGbrFUipzTwcEL9Nn7akR1962oGyID.png",
    description: "Dramatic coastal scenery with Table Mountain backdrop",
  },
  {
    id: 2,
    title: "Kite Beach",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kite%20Beach%20Table%20View-sXz7Iva378TCXWEh9pVPFtcFgd5Xxw.jpeg",
    description: "World-renowned kite surfing destination with stunning Table Mountain views",
  },
  {
    id: 3,
    title: "Beach Lifestyle",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0197.JPG-ewxRwplWlWZ1JW0wwxInd74EzKq7c7.jpeg",
    description: "Active beachfront living with pristine sandy beaches",
  },
  {
    id: 5,
    title: "Beachfront Dining",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doodles%20Beachfront-BCLgNta0a0wpg4p0CC9cgcUHf9oo6g.jpg",
    description: "Sunset dining with panoramic ocean and mountain views",
  },
  {
    id: 6,
    title: "Fine Dining",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dining%20at%20Doodles%20Beachfront-R7GaoNFUf1R3oO80cYRWYrL9UWK0gz.jpg",
    description: "Gourmet cuisine at Doodles Beachfront Restaurant",
  },
  {
    id: 7,
    title: "Bayside Mall",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bayside%20Mall-OMkzyt87YzXNqzwCeHVo7ClRebgiFc.jpeg",
    description: "Modern shopping center with ocean views and premium retailers",
  },
  {
    id: 8,
    title: "Table Bay Mall",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Table%20Bay%20Mall-64msZpqcjr5WZKUQtJqqd56qnM1mvK.jpeg",
    description: "Contemporary shopping destination with diverse retail options",
  },
  {
    id: 9,
    title: "Table View High School",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Table%20View%20High%20School-bfaijzidMCPfXdh3c8u2SwS6Ox2ZQj.jpeg",
    description: "Excellent educational facilities with modern sports amenities",
  },
  {
    id: 10,
    title: "MyCiti Transport",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MyCiti%20Table%20View-kz5r198wmDXEsdtLJ9cKPZ5B23XK2x.jpg",
    description: "Convenient public transport connecting you to Cape Town",
  },
  {
    id: 11,
    title: "Pristine Coastal Living",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-21%20011743-liQr9e2YExr53nVUKMPOm76zxRP4pS.png",
    description: "Crystal clear turquoise waters and white sandy beaches at your doorstep",
  },
  {
    id: 12,
    title: "Endless Beach Horizons",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-21%20011435-quXlt9Et4xdBtNuBPcfEQ7Q2EBSAJj.png",
    description: "Miles of pristine coastline with perfect waves and mountain views",
  },
  {
    id: 13,
    title: "Big Bay Viewpoint",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Big%20Bay%20Table%20Mountain%20South%20Africa-vKhzwSz5cnJhILBFESb0IjVivQSdBy.png",
    description: "Iconic Table Mountain photo frame at Big Bay beach promenade",
  },
  {
    id: 14,
    title: "Kite Surfing Action",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0051.JPG-eKEMfi4fzVRAGRvmfWDWf1SaxMjOME.jpeg",
    description: "Experience the thrill of world-class water sports",
  },
  {
    id: 15,
    title: "Atlantic Beach Golf Estate",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Atlantic%20Beach%20Golf%20Estate-VFeRoQgys1T9yjTAFtSgN2K14P93Xr.png",
    description: "Championship golf course with spectacular ocean and mountain views",
  },
  {
    id: 16,
    title: "Atlantic Padel & Tennis",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Atlantic%20Padel-9yXftPQPseMeccJMxMUd5I6LNq973b.png",
    description: "Modern padel and tennis facilities for active lifestyles",
  },
  {
    id: 17,
    title: "The Blue Peter Hotel",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Blue%20Peter%20Hotel-Z4ys9TeVUZWylij4Wsrk1GmYWF6nDD.png",
    description: "Iconic beachfront dining and sunset experiences",
  },
  {
    id: 18,
    title: "Table View Soccer Club",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Table%20View%20Soccer%20Club-10YNIzxkpgNqc512QR4gSdMEBLj8Uo.png",
    description: "Community sports facilities with mountain backdrop",
  },
  {
    id: 19,
    title: "Virgin Active Fitness",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Virgin%20Active-3gXpLRqPa1IT8PM4Ek3BIz3pZkeTXU.png",
    description: "State-of-the-art gym and wellness facilities",
  },
  {
    id: 20,
    title: "Netcare Blaauwberg Hospital",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Netcare%20Blaauwberg%20Hospital-tbk5dFp3qh8MrVfr9xoLOc8uKQLYkW.png",
    description: "Modern healthcare facility with 24hr emergency services",
  },
]

export function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? areaImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === areaImages.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8 md:mb-12">
          Designed For Living, Crafted For Life
        </h2>

        <p className="text-center text-gray-700 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto px-2">
          Cornerstone on Arum sets a benchmark for residential living in Table View. The development offers premium
          apartments within a secure and well-managed community, designed to deliver long-term value through superior
          standards of design, sustainability, and comfort. Featuring 22 thoughtfully designed one- and two-bedroom
          units, the project presents an exceptional investment opportunity.
        </p>

        <div className="relative group">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            {/* Images */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {areaImages.map((item) => (
                <div key={item.id} className="min-w-full">
                  <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] bg-gray-900 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Image Overlay with Title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">{item.title}</h3>
                      <p className="text-white/90 text-xs sm:text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 h-10 w-10 md:h-12 md:w-12"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 h-10 w-10 md:h-12 md:w-12"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {areaImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 !bg-black" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
