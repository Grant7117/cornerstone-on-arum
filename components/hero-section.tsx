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
          <span className="font-sans text-xs sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-muted-bronze font-bold">
            Table View
          </span>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl text-white leading-[1.1] tracking-tight">
            New Apartments, <br />
            <span className="italic text-muted-bronze font-light font-serif">No Transfer Duties</span>
          </h1>
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