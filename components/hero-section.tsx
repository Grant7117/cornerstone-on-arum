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
      <Image
        src="/images/arum-hero-clean.png"
        alt="Cornerstone Architecture"
        fill
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] scale-105"
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-6xl md:text-8xl text-slate-shadow tracking-tighter leading-none mb-6 drop-shadow-sm">
          Designed For Living, <br /> Crafted For Life
        </h1>
        <p className="font-sans text-slate-shadow/90 font-semibold max-w-xl mx-auto text-sm uppercase tracking-[0.3em] mb-12 drop-shadow-sm">
          A Benchmark for Residential Excellence in Table View
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={handleScrollToProperties}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center bg-slate-shadow text-sand-drift px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-deep-obsidian transition-colors"
          >
            View Portfolio
          </button>
          <button
            onClick={handleScrollToAbout}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center border border-slate-shadow text-slate-shadow px-10 py-4 text-xs uppercase tracking-widest backdrop-blur-sm hover:bg-slate-shadow/10 transition-colors"
          >
            Our Vision
          </button>
        </div>
      </div>
    </section>
  )
}
