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


      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent flex items-end justify-center pb-12 md:pb-24 lg:pb-32">
        <div className="hero-content text-center px-6 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 md:mb-10 tracking-tight leading-[0.9]">
            A Rare Second Chance: 5 Premium Homes Return
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-800 mb-10 md:mb-12 leading-relaxed font-semibold max-w-3xl mx-auto">
            Step into a meticulously crafted sanctuary in Table View. Designed for living, crafted for life, and engineered to protect your wealth.
          </p>


          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center">

            <a href="#available-units" className="btn-premium-primary">Claim One of the Final Five</a>
            <a href="#financing" className="btn-premium-secondary">Unlock 100 Percent Financing</a>
          </div>

        </div>
      </div>


    </section>
  )
}
