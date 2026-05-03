"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onEnquire?: () => void
}

export function HeroSection({ onEnquire }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-[#1a1c23] flex flex-col">
      <div className="relative w-full">
        <Image
          src="/images/Cornerstone-on-arum-hero-image.png"
          alt="Cornerstone on Arum"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
          sizes="100vw"
        />
        {/* Desktop Gradient Overlay to ensure button contrast */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#1a1c23]/80 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative w-full bg-[#1a1c23] md:absolute md:inset-0 md:bg-transparent flex flex-col items-center md:items-end justify-center pt-8 pb-12 md:pt-0 md:pb-20 lg:pb-24 z-10">
        <div className="flex flex-col sm:flex-row gap-4 px-6 w-full max-w-lg justify-center">
          
          {/* VIP ALERTS - Direct WhatsApp */}
          <Button 
            asChild
            variant="outline"
            className="w-full sm:w-auto bg-[#b39373] hover:bg-[#a08265] text-white border-none h-14 px-8 text-[15px] sm:text-lg font-bold rounded-xl shadow-xl transition-all active:scale-95 flex-1"
          >
            <a 
              href="https://wa.me/27724503626?text=I'm%20interested%20in%20joining%20the%20VIP%20Alerts%20list%20for%20Cornerstone%20on%20Arum."
              target="_blank"
              rel="noopener noreferrer"
            >
              SIGN UP FOR VIP ALERTS
            </a>
          </Button>

          {/* ENQUIRE NOW - Direct WhatsApp */}
          <Button 
            asChild
            className="w-full sm:w-auto bg-[#0066ff] hover:bg-[#0052cc] text-white h-14 px-8 text-[15px] sm:text-lg font-bold rounded-xl shadow-xl transition-all active:scale-95 flex-1"
          >
            <a 
              href="https://wa.me/27724503626?text=Hello,%20I'm%20interested%20in%20an%20apartment%20at%20Cornerstone%20on%20Arum.%20Please%20contact%20me%20with%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire Now
            </a>
          </Button>

        </div>
      </div>
    </section>
  )
}