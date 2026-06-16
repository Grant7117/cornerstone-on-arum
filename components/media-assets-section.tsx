"use client"

import Image from "next/image"
import { Download, ExternalLink, FileText, Camera, ArrowUpRight } from "lucide-react"

export function MediaAssetsSection() {
  return (
    <section id="media-resources" className="w-full bg-[#0d0e12] py-16 sm:py-24 px-4 flex flex-col items-center border-t border-white/10 relative overflow-hidden select-none">
      {/* Structural background lines for architectural feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-muted-bronze/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="w-full max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-bronze font-bold block mb-2 sm:mb-3">
            Resources & Shared Albums
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight font-semibold">
            Media & Documentation
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed px-2">
            Download high-resolution documents and browse actual photo galleries of the property interiors, finishes, and exterior build progress.
          </p>
        </div>

        {/* Brochure & Floor Plan Downloads */}
        <div className="w-full bg-[#16171e] border-2 border-white/10 rounded-2xl p-5 sm:p-10 mb-12 hover:border-muted-bronze/40 transition-colors duration-300 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-xl">
              <h3 className="text-lg sm:text-2xl font-serif text-white mb-2 font-medium">
                Official Project Documentation
              </h3>
              <p className="text-xs sm:text-base text-zinc-300 leading-relaxed">
                Download the official marketing brochure and final color-coded floor plan schematics to view comprehensive unit elevations, layouts, specifications, and pricing structures.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto sm:flex-shrink-0">
              {/* Property Brochure Download */}
              <a
                href="https://drive.google.com/uc?export=download&id=1eLhMZlwAJBFmdEjMsl_HOAczEwSab5nJ"
                download="Cornerstone_on_Arum_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 bg-muted-bronze text-deep-obsidian hover:bg-[#b0967c] hover:shadow-glow font-sans font-bold py-3.5 px-5 sm:py-4 sm:px-6 rounded-lg transition-all duration-200 w-full sm:w-auto transform hover:-translate-y-0.5 active:scale-[0.98] active:brightness-90 touch-manipulation"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 flex-shrink-0" />
                  <div className="text-left">
                    <span className="block text-[9px] uppercase tracking-wider opacity-90 font-bold">Download</span>
                    <span className="text-sm font-extrabold">Property Brochure</span>
                  </div>
                </div>
                <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>

              {/* Floor Plan Document Download */}
              <a
                href="https://drive.google.com/uc?export=download&id=1qkwYhPYXU_pAUPKlxSOmsgX5b342qni-"
                download="Cornerstone_on_Arum_Floor_Plans.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-2 border-muted-bronze text-muted-bronze hover:bg-muted-bronze/10 font-sans font-bold py-3.5 px-5 sm:py-4 sm:px-6 rounded-lg transition-all duration-200 w-full sm:w-auto transform hover:-translate-y-0.5 active:scale-[0.98] active:bg-muted-bronze/20 touch-manipulation"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 flex-shrink-0" />
                  <div className="text-left">
                    <span className="block text-[9px] uppercase tracking-wider opacity-90 font-bold text-zinc-400">Download</span>
                    <span className="text-sm font-extrabold">Detailed Floor Plans</span>
                  </div>
                </div>
                <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Section Divider / Subheader */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <h3 className="text-lg sm:text-2xl font-serif text-white tracking-wide font-medium">
            Interactive Photo Galleries
          </h3>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-bronze font-bold text-right ml-2">
            Albums open in Google Photos
          </span>
        </div>

        {/* External Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card A: Main Cornerstone on Arum Gallery (Exterior & Build) */}
          <a
            href="https://photos.app.goo.gl/U3Ex6DyFJTRKyqXb6"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-[#16171e] border-2 border-white/10 hover:border-muted-bronze/80 rounded-2xl p-5 transition-all duration-300 shadow-lg min-h-[400px] sm:min-h-[440px] transform hover:-translate-y-1 hover:shadow-glow active:scale-[0.98] active:border-muted-bronze/60 touch-manipulation"
          >
            {/* Visual Preview Image */}
            <div className="w-full h-40 sm:h-48 rounded-xl border border-white/10 relative flex items-center justify-center overflow-hidden mb-5 select-none pointer-events-none">
              <Image
                src="/images/Cornerstone-on-arum-hero-image.png"
                alt="Cornerstone on Arum Main Gallery Preview"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-110 contrast-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              {/* Semi-transparent dark gradient overlay just at the bottom for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

              {/* Camera Focal Icon overlay */}
              <div className="absolute z-20 bg-black/60 backdrop-blur-md border border-white/30 p-3 sm:p-3.5 rounded-full text-white group-hover:scale-110 group-hover:bg-muted-bronze group-hover:text-deep-obsidian group-hover:border-muted-bronze transition-all duration-300 shadow-xl">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Top Right Tag */}
              <div className="absolute top-3 right-3 bg-muted-bronze text-deep-obsidian font-extrabold text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 rounded z-20 shadow-md">
                Exterior & General
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-bronze font-bold block mb-1">Main Development</span>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif text-white font-semibold group-hover:text-muted-bronze transition-colors duration-200">
                    Cornerstone Gallery
                  </h4>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 group-hover:text-muted-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  Browse the comprehensive development album featuring building facade renders, site maps, landscaping elevations, and full architectural scopes.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-bronze border-t border-white/5 pt-4">
                <span>Open Shared Album</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>

          {/* Card B: General Development Gallery (Unit 102) */}
          <a
            href="https://photos.app.goo.gl/7xye2HtwmVia9hQX9"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-[#16171e] border-2 border-white/10 hover:border-muted-bronze/80 rounded-2xl p-5 transition-all duration-300 shadow-lg min-h-[400px] sm:min-h-[440px] transform hover:-translate-y-1 hover:shadow-glow active:scale-[0.98] active:border-muted-bronze/60 touch-manipulation"
          >
            {/* Visual Preview Image */}
            <div className="w-full h-40 sm:h-48 rounded-xl border border-white/10 relative flex items-center justify-center overflow-hidden mb-5 select-none pointer-events-none">
              <Image
                src="/images/units/102-a.jpg"
                alt="General Development Gallery Preview (Unit 102)"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-110 contrast-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

              {/* Camera Focal Icon overlay */}
              <div className="absolute z-20 bg-black/60 backdrop-blur-md border border-white/30 p-3 sm:p-3.5 rounded-full text-white group-hover:scale-110 group-hover:bg-muted-bronze group-hover:text-deep-obsidian group-hover:border-muted-bronze transition-all duration-300 shadow-xl">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Top Right Tag */}
              <div className="absolute top-3 right-3 bg-muted-bronze text-deep-obsidian font-extrabold text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 rounded z-20 shadow-md">
                Unit 102 Interior
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-bronze font-bold block mb-1">Finished Portfolio</span>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif text-white font-semibold group-hover:text-muted-bronze transition-colors duration-200">
                    Ground Floor Gallery
                  </h4>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 group-hover:text-muted-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  Explore complete walkthrough photography and finish portfolios of Unit 102, showcasing detailed ground floor layouts, bedrooms, and fixtures.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-bronze border-t border-white/5 pt-4">
                <span>Open Shared Album</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>

          {/* Card C: Premium Suites Gallery (Units 303 & 304) */}
          <a
            href="https://photos.app.goo.gl/8S9PDygvjcX6zg3s7"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-[#16171e] border-2 border-white/10 hover:border-muted-bronze/80 rounded-2xl p-5 transition-all duration-300 shadow-lg min-h-[400px] sm:min-h-[440px] transform hover:-translate-y-1 hover:shadow-glow active:scale-[0.98] active:border-muted-bronze/60 touch-manipulation"
          >
            {/* Visual Preview Image */}
            <div className="w-full h-40 sm:h-48 rounded-xl border border-white/10 relative flex items-center justify-center overflow-hidden mb-5 select-none pointer-events-none">
              <Image
                src="/images/units/303-a.png"
                alt="Premium Suites Gallery Preview (Units 303 & 304)"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-110 contrast-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

              {/* Camera Focal Icon overlay */}
              <div className="absolute z-20 bg-black/60 backdrop-blur-md border border-white/30 p-3 sm:p-3.5 rounded-full text-white group-hover:scale-110 group-hover:bg-muted-bronze group-hover:text-deep-obsidian group-hover:border-muted-bronze transition-all duration-300 shadow-xl">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Top Right Tag */}
              <div className="absolute top-3 right-3 bg-muted-bronze text-deep-obsidian font-extrabold text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 rounded z-20 shadow-md">
                Suite 303 Penthouse
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-bronze font-bold block mb-1">Double Volume Loft</span>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif text-white font-semibold group-hover:text-muted-bronze transition-colors duration-200">
                    Premium Suites Gallery
                  </h4>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 group-hover:text-muted-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  Inspect the premium duplex lofts (Suites 303 & 304) highlighting double-volume layouts, custom open kitchens, balconies, and upper-level views.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-bronze border-t border-white/5 pt-4">
                <span>Open Shared Album</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
