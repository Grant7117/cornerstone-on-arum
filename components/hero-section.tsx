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

        {/* Subtle Vignette Gradient Overlay (Right-side on desktop, full-width on mobile) */}
        <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 bg-gradient-to-l from-black/75 via-black/30 to-transparent pointer-events-none z-10" />

        {/* Features Typography Overlay */}
        <div className="absolute top-4 right-4 sm:top-12 sm:right-12 z-20 flex flex-col gap-1 sm:gap-2 items-end text-right drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          <span className="font-sans text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-muted-bronze font-bold">
            Table View
          </span>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl text-white leading-[1.1] tracking-tight">
            New Apartments, <br />
            <span className="italic text-muted-bronze font-light font-serif">No Transfer Duties</span>
          </h2>
        </div>

        {/* Glassmorphic Banner Overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:top-12 sm:bottom-auto sm:left-12 sm:translate-x-0 z-20 w-max max-w-[90vw]">
          <a 
            href="https://wa.me/27724503626?text=Hello,%20I'd%20like%20to%20book%20a%20viewing%20for%20Cornerstone%20on%20Arum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center bg-slate-950/70 backdrop-blur-md border border-white/10 p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:bg-slate-950/80 sm:hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer w-56 sm:w-64"
          >
            <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-muted-bronze font-bold mb-0.5">
              Cornerstone on Arum
            </span>
            <span className="text-white text-[11px] sm:text-[13px] font-semibold tracking-wider uppercase mb-0.5 whitespace-nowrap">
              Viewings Now Available
            </span>
            <span className="text-white/70 text-[9px] sm:text-xs font-light mb-3">
              By Appointment Only
            </span>
            <span className="w-full text-center text-white bg-[#0066FF] hover:bg-[#0055DD] font-bold text-[10px] sm:text-xs px-4 py-2 sm:py-2.5 rounded-lg shadow-md transition-all duration-300 uppercase tracking-[0.15em]">
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