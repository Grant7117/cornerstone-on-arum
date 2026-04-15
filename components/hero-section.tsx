"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[800px] lg:h-[850px] overflow-hidden">
      <Image
        src="/images/arum-hero-image.png"
        alt="Cornerstone on Arum - Modern apartment building"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />


      <div className="absolute inset-0 flex items-center justify-center pt-20">
        <div className="text-center px-6 max-w-4xl bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] border border-white/20 shadow-2xl mx-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 md:mb-10 tracking-tight leading-[0.9]">
            Modern Apartments <br className="hidden md:block" /> in Table View
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-800 mb-10 md:mb-12 leading-relaxed font-medium">
            Modern design, premium finishes, and secure living in Table View, Cape Town.
            <span className="hidden sm:inline"> 100% bond financing available through our trusted partners.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="!bg-black hover:!bg-slate-900 text-white font-bold text-xl px-14 py-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all transform hover:-translate-y-1 active:scale-[0.98] h-auto border-0"
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
              className="bg-transparent hover:bg-black/5 text-slate-900 border-2 border-slate-900 font-bold text-xl px-14 py-8 rounded-2xl transition-all transform hover:-translate-y-1 active:scale-[0.98] h-auto"
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
