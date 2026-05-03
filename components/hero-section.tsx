"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onEnquire?: () => void
}

export function HeroSection({ onEnquire }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-[#1a1c23]">
      <Image
        src="/images/Cornerstone-on-arum-hero-image.png"
        alt="Cornerstone on Arum"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-center pb-10 md:pb-20 lg:pb-32">
        <div className="flex flex-col sm:flex-row gap-4 px-6 w-full max-w-lg justify-center">
          
          {/* VIP ALERTS - Direct WhatsApp */}
          <Button 
            asChild
            variant="outline"
            className="bg-[#b39373] hover:bg-[#a08265] text-white border-none h-14 px-8 text-lg font-bold rounded-xl shadow-xl transition-all active:scale-95"
          >
            <a 
              href="https://wa.me/27724503626?text=I'm%20interested%20in%20joining%20the%20VIP%20Alerts%20list%20for%20Cornerstone%20on%20Arum."
              target="_blank"
              rel="noopener noreferrer"
            >
              SIGN UP FOR VIP ALERTS
            </a>
          </Button>

          {/* ENQUIRE NOW - Direct WhatsApp (The fast fix to bypass Privyr) */}
          <Button 
            asChild
            className="bg-[#0066ff] hover:bg-[#0052cc] text-white h-14 px-8 text-lg font-bold rounded-xl shadow-xl transition-all active:scale-95"
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