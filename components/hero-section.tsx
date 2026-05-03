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

      <div className="absolute inset-0 bg-gradient-to-b from-deep-obsidian/20 via-transparent to-deep-obsidian/40"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-6xl md:text-8xl text-sand-drift tracking-tighter leading-none mb-6">
          Designed For Living, <br /> Crafted For Life
        </h1>
        <p className="font-sans text-sand-drift/80 max-w-xl mx-auto text-sm uppercase tracking-[0.3em] mb-12">
          A Benchmark for Residential Excellence in Table View
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={handleScrollToProperties}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center bg-sand-drift text-deep-obsidian px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-muted-bronze transition-colors"
          >
            View Portfolio
          </button>
          <button
            onClick={handleScrollToAbout}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center border border-sand-drift text-sand-drift px-10 py-4 text-xs uppercase tracking-widest backdrop-blur-sm hover:bg-sand-drift/10 transition-colors"
          >
            Our Vision
          </button>
        </div>
      </div>
    </section>
  )
}
