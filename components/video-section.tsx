"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "@/components/icons"
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

  useEffect(() => {
    const timer = setInterval(() => { goToNext() }, 6000)
    return () => clearInterval(timer)
  }, [goToNext])

  return (
    <section id="about" className="py-32 bg-deep-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">The Location</span>
              <h2 className="font-serif text-5xl md:text-7xl text-warm-stone leading-[0.9] tracking-tighter">
                Quietly <br/>
                <span className="italic text-muted-bronze font-light">Connected</span>
              </h2>
            </div>
            
            <p className="text-warm-stone/50 text-xl leading-relaxed font-sans max-w-lg font-light">
              Positioned at the pulse of Table View, Cornerstone on Arum serves as the starting point for your daily lifestyle journey. You are situated just 2.4 km from the world-renowned Blaauwbergstrand coastline and the vibrant Kite Beach surfing scene.
            </p>

            <Button
              onClick={() => {
                const message = encodeURIComponent("I am interested in VIP Alerts for Cornerstone on Arum")
                window.open(`https://wa.me/27724503626?text=${message}`, '_blank')
              }}
              className="bg-muted-bronze text-deep-obsidian hover:bg-warm-stone transition-all duration-500 rounded-none px-16 py-10 font-sans uppercase tracking-[0.3em] text-[10px] font-bold h-auto shadow-2xl"
            >
              Sign up for VIP alerts
            </Button>
          </div>

          <div className="relative aspect-square sm:aspect-video lg:aspect-square group order-1 lg:order-2">
            {/* Architectural Frame Decoration */}
            <div className="absolute inset-0 border border-muted-bronze/20 translate-x-6 translate-y-6 z-0" />
            
            <div className="relative z-10 w-full h-full glass-panel overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
              <Image
                src={areaImages[currentIndex].image}
                alt={areaImages[currentIndex].title}
                fill
                className="object-cover transition-all duration-[2000ms] ease-out scale-110 group-hover:scale-100"
              />
              
              {/* Cinematic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-obsidian via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 bg-deep-obsidian/10 mix-blend-overlay" />
              
              <div className="absolute bottom-10 left-10 text-white space-y-2">
                <p className="font-serif text-3xl tracking-tight">{areaImages[currentIndex].title}</p>
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-muted-bronze" />
                  <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-bronze font-bold">Explore Table View</p>
                </div>
              </div>

              {/* Decorative "Play" button following carousel structural guidance */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-sand-drift/20 backdrop-blur-sm p-6 rounded-full border border-sand-drift/30 text-sand-drift">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
