"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const areaImages = [
  {
    id: 11,
    title: "Pristine Coastal Living",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-21%20011743-liQr9e2YExr53nVUKMPOm76zxRP4pS.png",
    description: "Crystal clear turquoise waters and white sandy beaches at your doorstep",
  },
  {
    id: 12,
    title: "Endless Beach Horizons",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-21%20011435-quXlt9Et4xdBtNuBPcfEQ7Q2EBSAJj.png",
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doodles%20Beachfront-BCLgNta0a0wpg4p0CC9cgcUHf9oo6g.jpg",
    description: "Sunset dining with panoramic ocean and mountain views",
  },
  {
    id: 15,
    title: "Atlantic Beach Golf Estate",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Atlantic%20Beach%20Golf%20Estate-VFeRoQgys1T9yjTAFtSgN2K14P93Xr.png",
    description: "Championship golf course with spectacular ocean and mountain views",
  }
]

export function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === areaImages.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? areaImages.length - 1 : prevIndex - 1))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => { goToNext() }, 6000)
    return () => clearInterval(timer)
  }, [goToNext])

  return (
    <section id="about" className="pt-0 pb-8 lg:py-32 bg-deep-obsidian overflow-hidden w-full scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-0 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          <div className="space-y-8 lg:space-y-10 order-2 lg:order-1 px-6 sm:px-0">
            <div className="space-y-3 sm:space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">The Location</span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white leading-[0.95] sm:leading-[0.9] tracking-tighter">
                Designed For Living, <br/> 
                <span className="italic text-muted-bronze font-light">Crafted For Life</span>
              </h2>
            </div>
            
            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed font-sans max-w-lg font-light">
              Cornerstone on Arum sets a benchmark for residential living in Table View. 
              The development offers premium apartments within a secure community, 
              designed to deliver long-term value through superior design and sustainability.
            </p>

            <Button
              onClick={() => {
                const message = encodeURIComponent("I am interested in VIP Alerts for Cornerstone on Arum")
                window.open(`https://wa.me/27724503626?text=${message}`, '_blank')
              }}
              className="bg-muted-bronze text-deep-obsidian hover:bg-warm-stone transition-all duration-500 rounded-none px-10 sm:px-16 py-7 sm:py-10 font-sans uppercase tracking-[0.3em] text-[10px] font-bold h-auto shadow-2xl w-full sm:w-auto text-center"
            >
              Sign up for VIP alerts
            </Button>
          </div>

          <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square group order-1 lg:order-2">
            {/* Architectural Frame Decoration (hidden on mobile full-width) */}
            <div className="hidden sm:block absolute inset-0 border border-muted-bronze/20 translate-x-6 translate-y-6 z-0" />
            
            <div className="relative z-10 w-full h-full overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
              <Image
                src={areaImages[currentIndex].image}
                alt={areaImages[currentIndex].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-all duration-[2000ms] ease-out scale-110 group-hover:scale-100 brightness-110 contrast-105"
              />
              
              {/* Cinematic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 bg-black/5 mix-blend-overlay z-10" />
              
              {/* Glass Navigation Buttons */}
              <div className="absolute inset-y-0 left-3 right-3 sm:left-4 sm:right-4 flex items-center justify-between z-20 pointer-events-none">
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                  className="pointer-events-auto flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/60 hover:scale-110 active:scale-90 transition-all duration-300 shadow-lg"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="pointer-events-auto flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/60 hover:scale-110 active:scale-90 transition-all duration-300 shadow-lg"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Indicator Dots */}
              <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex gap-2 z-20">
                {areaImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 pointer-events-auto ${
                      index === currentIndex
                        ? "bg-white w-5 sm:w-6 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white space-y-1 sm:space-y-2 z-20 pr-24 sm:pr-32">
                <p className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight">{areaImages[currentIndex].title}</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-[1px] w-6 sm:w-8 bg-muted-bronze" />
                  <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted-bronze font-bold">Explore Table View</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}