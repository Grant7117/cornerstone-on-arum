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
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Master Hero Image Foundation */}
      <Image
        src="/images/Cornerstone-on-arum-hero-image.png"
        alt="Cornerstone Architecture"
        fill
        className="absolute inset-0 w-full h-full object-cover scale-105"
        priority
        sizes="100vw"
      />

      {/* Hero overlay */}
      <div className="absolute inset-0 bg-deep-obsidian/30"></div>

      {/* Text removed as per request - "Designed For Living, Crafted For Life" moved to ManifestoSection below */}
    </section>
  )
}
