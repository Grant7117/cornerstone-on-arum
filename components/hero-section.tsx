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
    <section className="relative min-h-[60vh] md:h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Master Hero Image Foundation */}
      <div className="relative w-full h-full min-h-[60vh] md:h-screen">
        <Image
          src="/images/Cornerstone-on-arum-hero-image.png"
          alt="Cornerstone Architecture"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Hero overlay */}
        <div className="absolute inset-0 bg-deep-obsidian/10"></div>
      </div>
    </section>
  )
}
