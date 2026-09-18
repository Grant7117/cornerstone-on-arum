"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Camera, Download, Sparkles, CheckCircle2, Video } from "lucide-react"
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
  const [activeTab, setActiveTab] = useState<"video" | "location">("video")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const cloudflareIframeUrl = "https://customer-2qsi4jrxewznhq17.cloudflarestream.com/40d24c91d37fc98b6f7f135ca3261bb0/iframe?preload=metadata&poster=https%3A%2F%2Fcustomer-2qsi4jrxewznhq17.cloudflarestream.com%2F40d24c91d37fc98b6f7f135ca3261bb0%2Fthumbnails%2Fthumbnail.jpg"

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === areaImages.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? areaImages.length - 1 : prevIndex - 1))
  }, [])

  useEffect(() => {
    if (activeTab === "location") {
      const timer = setInterval(() => { goToNext() }, 6000)
      return () => clearInterval(timer)
    }
  }, [activeTab, goToNext])

  return (
    <section id="video-tour" className="w-full bg-[#0d0e12] py-16 sm:py-24 px-4 sm:px-6 relative border-y border-white/10 overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-muted-bronze/10 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-amber-500/40 bg-amber-500/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-amber-400">
              Only 2 Units Left • Units 303 & 304
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-4">
            Duplex Loft Video Walkthrough
          </h2>
          
          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-light">
            Take an exclusive virtual video tour of the remaining top floor loft apartments (77m² duplexes). Experience the double-volume living area, sleek kitchen, and private balcony.
          </p>

          {/* Tab Switcher: Video Tour vs Location Highlights */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab("video")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "video"
                  ? "bg-muted-bronze text-deep-obsidian shadow-lg scale-105"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Unit 303 & 304 Video Tour</span>
            </button>
            <button
              onClick={() => setActiveTab("location")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "location"
                  ? "bg-muted-bronze text-deep-obsidian shadow-lg scale-105"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Table View Location</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CLOUDFLARE VIDEO TOUR */}
        {activeTab === "video" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Cloudflare Stream Video Player (7 Columns) */}
            <div className="lg:col-span-7 w-full flex flex-col">
              <div className="relative w-full rounded-2xl overflow-hidden border-2 border-muted-bronze/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-black group aspect-video">
                
                {/* Cloudflare Stream iFrame Player */}
                <iframe
                  src={cloudflareIframeUrl}
                  title="Cornerstone on Arum Units 303 & 304 Video Walkthrough"
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                  onLoad={() => setIsVideoLoaded(true)}
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 pointer-events-none">
                  <span className="bg-black/80 backdrop-blur-md border border-white/20 text-white font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Units 303 & 304 • Cloudflare Stream
                  </span>
                </div>
              </div>

              {/* Video Quick Controls & Direct Links */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 px-1">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Sparkles className="w-3.5 h-3.5 text-muted-bronze" />
                  High Definition 1080p Stream
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://customer-2qsi4jrxewznhq17.cloudflarestream.com/40d24c91d37fc98b6f7f135ca3261bb0/manifest/video.m3u8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-muted-bronze transition-colors flex items-center gap-1"
                  >
                    <span>HLS (.m3u8)</span>
                  </a>
                  <span>•</span>
                  <a
                    href="https://photos.app.goo.gl/wWBD4uTkddX7WDAr6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Google Photos Album</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Video Specs & Call to Action (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-muted-bronze/10 border border-muted-bronze/30 text-muted-bronze text-[10px] font-extrabold uppercase tracking-widest rounded-sm">
                    Final 2 Units Available
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold uppercase tracking-widest rounded-sm">
                    Immediate Occupation
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-tight">
                  Top Floor Loft Duplex Suites
                </h3>

                <p className="font-serif text-3xl sm:text-4xl text-warm-stone font-semibold">
                  R2,725,000
                  <span className="text-xs font-sans text-zinc-400 font-normal ml-2 uppercase tracking-wider">
                    (No Transfer Duty)
                  </span>
                </p>
              </div>

              {/* Feature Specifications List */}
              <div className="grid grid-cols-2 gap-3 py-2">
                <div className="bg-[#16171e] border border-white/10 rounded-xl p-3.5">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mb-0.5">Layout</span>
                  <p className="text-white text-sm font-bold">2 Bed • 2 Bath</p>
                </div>
                <div className="bg-[#16171e] border border-white/10 rounded-xl p-3.5">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mb-0.5">Total Size</span>
                  <p className="text-white text-sm font-bold">77m² (71m² + 6m² Balcony)</p>
                </div>
                <div className="bg-[#16171e] border border-white/10 rounded-xl p-3.5">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mb-0.5">Floor Level</span>
                  <p className="text-white text-sm font-bold">Third Floor + Loft</p>
                </div>
                <div className="bg-[#16171e] border border-white/10 rounded-xl p-3.5">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mb-0.5">Parking</span>
                  <p className="text-white text-sm font-bold">1 Dedicated Bay Included</p>
                </div>
              </div>

              {/* Key Highlights Checkmarks */}
              <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-muted-bronze flex-shrink-0" />
                  <span>Double-volume open-plan lounge with soaring natural light</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-muted-bronze flex-shrink-0" />
                  <span>Modern kitchen with gas hob, electric oven & quartz surfaces</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-muted-bronze flex-shrink-0" />
                  <span>Private balcony with expansive Table View & mountain views</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-muted-bronze flex-shrink-0" />
                  <span>Only R5,000 deposit secures your unit</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  onClick={() => {
                    const message = encodeURIComponent("Hello Grant, I watched the video for Units 303 & 304 and would like to book a private viewing.")
                    window.open(`https://wa.me/27724503626?text=${message}`, '_blank')
                  }}
                  className="bg-[#0066FF] hover:bg-[#0055DD] text-white font-sans font-bold text-xs uppercase tracking-widest py-6 px-6 rounded-lg shadow-xl hover:scale-105 active:scale-95 transition-all w-full sm:flex-1 text-center"
                >
                  Book Private Viewing
                </Button>

                <a
                  href="https://photos.app.goo.gl/wWBD4uTkddX7WDAr6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans font-bold text-xs uppercase tracking-widest py-3.5 px-5 rounded-lg transition-all text-center w-full sm:w-auto"
                >
                  <Camera className="w-4 h-4 text-muted-bronze" />
                  <span>Photos</span>
                </a>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: TABLE VIEW LOCATION SHOWCASE */}
        {activeTab === "location" && (
          <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            
            <div className="space-y-8 lg:space-y-10 order-2 lg:order-1 px-4 sm:px-0">
              <div className="space-y-3 sm:space-y-4">
                <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-bronze font-bold">The Location</span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.0] tracking-tighter">
                  Designed For Living, <br/> 
                  <span className="italic text-muted-bronze font-light">Crafted For Life</span>
                </h2>
              </div>
              
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans max-w-lg font-light">
                Cornerstone on Arum sets a benchmark for residential living in Table View. 
                The development offers premium apartments within a secure community, 
                designed to deliver long-term value through superior design and sustainability.
              </p>

              <Button
                onClick={() => {
                  const message = encodeURIComponent("I am interested in VIP Alerts for Cornerstone on Arum")
                  window.open(`https://wa.me/27724503626?text=${message}`, '_blank')
                }}
                className="bg-muted-bronze text-deep-obsidian hover:bg-warm-stone transition-all duration-500 rounded-none px-10 sm:px-16 py-7 sm:py-9 font-sans uppercase tracking-[0.3em] text-[10px] font-bold h-auto shadow-2xl w-full sm:w-auto text-center"
              >
                Sign up for VIP alerts
              </Button>
            </div>

            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square group order-1 lg:order-2">
              <div className="hidden sm:block absolute inset-0 border border-muted-bronze/20 translate-x-6 translate-y-6 z-0" />
              
              <div className="relative z-10 w-full h-full overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] rounded-xl sm:rounded-none">
                <Image
                  src={areaImages[currentIndex].image}
                  alt={areaImages[currentIndex].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-[2000ms] ease-out scale-110 group-hover:scale-100 brightness-110 contrast-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                
                {/* Navigation Buttons */}
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
        )}

      </div>
    </section>
  )
}