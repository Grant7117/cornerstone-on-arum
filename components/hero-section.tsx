"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full aspect-video flex items-center justify-center bg-[#1a1c23] py-8 sm:py-12">
      <div className="container mx-auto px-4 relative w-full aspect-video flex items-center justify-center">
        {/* Inner 900x500 Content Stage */}
        <div className="relative w-full max-w-[900px] aspect-[9/5] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <Image
            src="/images/Cornerstone-on-arum-hero-image.png"
            alt="Cornerstone on Arum"
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-center pb-8">
            <div className="flex flex-col sm:flex-row gap-3 justify-center scale-90 md:scale-100">
              <Button
                asChild
                size="sm"
                className="!bg-[#0066FF] hover:!bg-blue-700 text-white font-bold px-6 py-3 rounded-lg shadow-xl transition-all h-auto"
              >
                <button
                  onClick={() => {
                    const element = document.getElementById("properties")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  }}
                >
                  View Apartments
                </button>
              </Button>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-white/95 hover:bg-white text-slate-900 border-0 font-bold px-6 py-3 rounded-lg shadow-xl transition-all h-auto"
              >
                <Link
                  href="https://digiapp.betterbond.co.za/YolandaKensley/38613/129015"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Pre-Approved
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
