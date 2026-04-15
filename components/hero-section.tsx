"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full aspect-video overflow-hidden bg-[#1a1c23]">
      <Image
        src="/images/Cornerstone-on-arum-hero-image.png"
        alt="Cornerstone on Arum"
        fill
        className="object-contain"
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent flex items-end justify-center pb-10 md:pb-20 lg:pb-24">
        <div className="text-center px-6 max-w-4xl">
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
