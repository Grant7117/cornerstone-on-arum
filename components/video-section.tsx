"use client"

import { useState } from "react"
import { Play, Camera, Sparkles, CheckCircle2, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackContact } from "@/lib/meta-pixel"

export function VideoSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const cloudflareIframeUrl = "https://customer-2qsi4jrxewznhq17.cloudflarestream.com/40d24c91d37fc98b6f7f135ca3261bb0/iframe?preload=metadata&poster=https%3A%2F%2Fcustomer-2qsi4jrxewznhq17.cloudflarestream.com%2F40d24c91d37fc98b6f7f135ca3261bb0%2Fthumbnails%2Fthumbnail.jpg"

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
              Final Unit Left • Unit 304
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-4">
            Duplex Loft Video Walkthrough
          </h2>
          
          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-light">
            Take an exclusive virtual video tour of the remaining top floor loft apartments (77m² duplexes). Experience the double-volume living area, sleek kitchen, and private balcony.
          </p>
        </div>

        {/* CLOUDFLARE VIDEO TOUR SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Cloudflare Stream Video Player (7 Columns) */}
          <div className="lg:col-span-7 w-full flex flex-col">
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-muted-bronze/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-black group aspect-video">
              
              {/* Cloudflare Stream iFrame Player */}
              <iframe
                src={cloudflareIframeUrl}
                title="Cornerstone on Arum Unit 304 Duplex Video Walkthrough"
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
                onLoad={() => setIsVideoLoaded(true)}
              />
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
                  href="https://photos.app.goo.gl/3YutHUQom4YbtCsD6"
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
                  Final Unit Available
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
                <span>Only R5,000 deposit secures your unit</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={() => {
                  const message = encodeURIComponent("Hello Grant, I watched the video for Unit 304 and would like to book a private viewing.")
                  trackContact("whatsapp_video")
                  window.open(`https://wa.me/27724503626?text=${message}`, '_blank')
                }}
                className="bg-[#0066FF] hover:bg-[#0055DD] text-white font-sans font-bold text-xs uppercase tracking-widest py-6 px-6 rounded-lg shadow-xl hover:scale-105 active:scale-95 transition-all w-full sm:flex-1 text-center"
              >
                Book Private Viewing
              </Button>

              <a
                href="https://photos.app.goo.gl/3YutHUQom4YbtCsD6"
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

      </div>
    </section>
  )
}