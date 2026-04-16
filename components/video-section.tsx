"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "@/components/icons"
import { Button } from "@/components/ui/button"

const areaImages = [

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
    id: 14,
    title: "Kite Surfing Action",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0051.JPG-eKEMfi4fzVRAGRvmfWDWf1SaxMjOME.jpeg",
    description: "Experience the thrill of world-class water sports",
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

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === areaImages.length - 1 ? 0 : prevIndex + 1))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext()
    }, 4000)

    return () => clearInterval(timer)
  }, [goToNext])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? areaImages.length - 1 : prevIndex - 1))
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

        <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
          <p className="text-center text-gray-700 text-base sm:text-lg leading-relaxed mb-12 sm:mb-16">
            Cornerstone on Arum sets a benchmark for residential living in Table View. The development offers premium
            apartments within a secure and well-managed community, designed to deliver long-term value through superior
            standards of design, sustainability, and comfort. Featuring 22 thoughtfully designed one- and two-bedroom
            units, the project presents an exceptional investment opportunity.
          </p>

          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 px-2">
            {/* Left Column: Foundation & Security */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">A Foundation You Can Trust</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our development features a proprietary full concrete frame. A superior construction method that ensures unmatched structural integrity. For you, this means more than just safety; it means a quieter home with significantly reduced noise transfer and a structure that resists the typical cracks of standard builds. It is an investment in absolute stability and lasting comfort.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Peace of Mind</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">No Airbnb or Short-Term Rental Policy</h4>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      At Cornerstone on Arum, we are implementing a policy that mandates a minimum rental period of six months. Our strategy is to build a superior residential product. We are shielding investors from a volatile market while creating a secure, stable, and desirable community. This commitment to long-term living is the foundation that will make Cornerstone on Arum a landmark success.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">State-of-the-Art, AI-Integrated CCTV</h4>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      Absolute peace of mind is engineered directly into our infrastructure. Your home is protected by an invisible, proactive security shield featuring 24/7 CCTV off-site monitoring directly linked to an armed response team. Coupled with strict access control and dedicated, secure off-street parking for every unit, we guarantee a seamless, undisturbed living experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Financials */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Financial Intelligence</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Zero Transfer Duty</h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Apartments at Cornerstone on Arum are VAT inclusive, and no transfer duties are payable, saving up to R80,000 in costs.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">BetterBond: 100 Percent Financing Available</h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Increase your capital efficiency and experience a frictionless acquisition process. There are absolutely zero transfer duties to pay. Through our exclusive partnership with BetterBond, your home loan application is submitted to multiple leading banks at no cost to you. Benefit from rapid 48-hour pre-approvals and up to 100 percent bond financing with no deposit required for qualifying buyers, ensuring your liquidity remains intact.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Superior Returns</h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Sectional title developments are the clear winner for the Blaauwberg Road Corridor in Table View because they align perfectly with the surging market demand for smaller, more efficient living spaces, which saw a 27% value growth in flats and townhouses over the past year. Table View rental demand remains intensely high and is projected to provide returns of 8% to 10%+.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
                    You are risking far less capital to achieve a functionally superior percentage return, all while maintaining the exact same world-class Cape Town tenant profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                    {/* Image Overlay with Title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">{item.title}</h3>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">{item.description}</p>
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
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 h-11 w-11 md:h-12 md:w-12"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 h-11 w-11 md:h-12 md:w-12"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-4 mt-6">
            {areaImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group p-2 -m-2"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 !bg-black" : "w-2 bg-gray-300 group-hover:bg-gray-400"
                  }`} />
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              onClick={() => {
                const message = encodeURIComponent("I am interested in receiving VIP Availability Alerts for Cornerstone on Arum")
                window.open(`https://wa.me/27724503626?text=${message}`, '_blank')
              }}
              className="w-full sm:w-auto !bg-[#0066FF] !text-white hover:!bg-blue-700 font-bold py-6 px-12 text-lg md:text-xl rounded-xl shadow-xl transition-all transform active:scale-[0.98] h-auto text-center"
            >
              Sign up for VIP alerts
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
