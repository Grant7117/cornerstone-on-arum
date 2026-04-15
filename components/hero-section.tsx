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
          {/* Buttons removed securely as per instruction */}
        </div>
      </div>
    </section>
  )
}
