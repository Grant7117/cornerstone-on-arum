"use client"

import Image from "next/image"

export function HeroSection() {
  const handleScrollToProperties = () => {
    const element = document.getElementById('properties')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Master Hero Image Foundation */}
      <div className="absolute inset-0">
        <Image
          src="/images/Cornerstone-on-arum-hero-image.png"
          alt="Cornerstone Architecture"
          fill
          className="object-cover object-[center_35%] scale-105"
          priority
          sizes="100vw"
        />
        {/* Hero overlay */}
        <div className="absolute inset-0 bg-deep-obsidian/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sand-drift/40"></div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 animate-bounce cursor-pointer" onClick={handleScrollToAbout}>
        <span className="font-sans text-[8px] uppercase tracking-[0.4em] text-deep-obsidian/40 font-bold rotate-90 mb-4">Scroll</span>
        <div className="w-[1px] h-12 bg-muted-bronze/40"></div>
      </div>
    </section>
  )
}
