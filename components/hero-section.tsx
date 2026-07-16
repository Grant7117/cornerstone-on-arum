"use client"

import Image from "next/image"

interface HeroSectionProps {
  onEnquire?: () => void
}

export function HeroSection({ onEnquire }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-[#1a1c23] flex flex-col">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1920/1080" }}>
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

        {/* Glassmorphic Banner Overlay */}
        <div className="absolute top-6 left-6 sm:top-12 sm:left-12 z-20">
          <a 
            href="https://wa.me/27724503626?text=Hello,%20I'd%20like%20to%20book%20a%20viewing%20for%20Cornerstone%20on%20Arum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start bg-slate-900/40 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-2xl shadow-2xl hover:bg-slate-900/50 hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            <span className="text-white text-sm sm:text-base font-semibold tracking-wide uppercase mb-1">
              Viewings Now Available
            </span>
            <span className="text-white/80 text-xs sm:text-sm font-medium mb-3">
              By Appointment
            </span>
            <span className="text-[#0066FF] font-bold text-sm bg-white px-4 py-2 rounded-full shadow-md group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
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