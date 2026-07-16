"use client"

import Image from "next/image"

interface HeroSectionProps {
  onEnquire?: () => void
}

export function HeroSection({ onEnquire }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-[#1a1c23] flex flex-col">
      <div className="relative w-full overflow-hidden aspect-[4/3] sm:aspect-[1920/1080]">
        {/* Day Image */}
        <Image
          src="/images/Cornerstone-on-arum-hero-image.png"
          alt="Cornerstone on Arum Day"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        
        {/* Dusk Image - fading in and out */}
        <Image
          src="/images/cornerstone-on-arum-hero-image-dusk.png"
          alt="Cornerstone on Arum Dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover dusk-fade"
        />

        {/* Features Badges Overlay */}
        <div className="absolute top-3 right-3 sm:top-12 sm:right-12 z-20 flex flex-col gap-1.5 sm:gap-3 items-end">
          <div className="bg-slate-900/50 backdrop-blur-md border border-white/20 px-2.5 py-1 sm:px-5 sm:py-2.5 rounded-full shadow-lg">
            <span className="text-white text-[8px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase whitespace-nowrap">
              New Apartments, Table View
            </span>
          </div>
          <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-2.5 py-1 sm:px-5 sm:py-2.5 rounded-full shadow-lg">
            <span className="text-emerald-400 text-[8px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase whitespace-nowrap">
              No Transfer Duties
            </span>
          </div>
        </div>

        {/* Glassmorphic Banner Overlay */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:top-12 sm:bottom-auto sm:left-12 sm:translate-x-0 z-20 w-max max-w-[92vw] sm:max-w-[90vw]">
          <a 
            href="https://wa.me/27724503626?text=Hello,%20I'd%20like%20to%20book%20a%20viewing%20for%20Cornerstone%20on%20Arum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-4 sm:gap-0 bg-slate-900/50 backdrop-blur-md border border-white/20 p-2 sm:p-6 rounded-lg sm:rounded-2xl shadow-2xl hover:bg-slate-900/60 sm:hover:scale-105 active:scale-95 sm:active:scale-100 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex flex-col items-start">
              <span className="text-white text-[10px] sm:text-base font-semibold tracking-wide uppercase mb-0.5 sm:mb-1 whitespace-nowrap">
                Viewings Now Available
              </span>
              <span className="text-white/80 text-[8px] sm:text-sm font-medium">
                By Appointment
              </span>
            </div>
            <span className="text-[#0066FF] font-bold text-[9px] sm:text-sm bg-white px-2.5 py-1 sm:px-4 sm:py-2 rounded-full shadow-md group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300 shrink-0">
              Click Here
            </span>
          </a>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes crossfade {
          0%, 20% { opacity: 0; }
          40%, 60% { opacity: 1; }
          80%, 100% { opacity: 0; }
        }
        .dusk-fade {
          animation: crossfade 12s infinite ease-in-out;
        }
      `}} />
    </section>
  )
}