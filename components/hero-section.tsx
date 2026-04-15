"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[560px] h-[70vh] md:h-[800px] lg:h-[850px] overflow-hidden">
      <Image
        src="/images/arum-hero-image.png"
        alt="Cornerstone on Arum - Modern apartment building"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />


      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent flex items-end justify-center pb-16 md:pb-20 lg:pb-24">
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 mb-6 md:mb-16 drop-shadow-2xl">
            Modern Apartments in Table View
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-white/95 mb-6 md:mb-8 drop-shadow-lg leading-relaxed">
            Modern design, premium finishes, and secure living in Table View, Cape Town.
            <span className="hidden sm:inline"> 100% bond financing available through our trusted partners.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="!bg-[#0066FF] hover:!bg-blue-700 text-white font-bold text-lg md:text-xl px-12 py-6 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all transform active:scale-[0.98] h-auto"
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
              size="lg"
              className="bg-white/95 hover:bg-white text-slate-900 border-0 font-bold text-lg md:text-xl px-12 py-6 rounded-xl shadow-2xl transition-all transform active:scale-[0.98] h-auto"
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
    </section>
  )
}
