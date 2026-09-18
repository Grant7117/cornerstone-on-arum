"use client"

import Image from "next/image"
import { Download, ExternalLink, FileText, Camera, ArrowUpRight, Play, Video } from "lucide-react"

export function MediaAssetsSection() {
  const scrollToVideoTour = () => {
    const element = document.getElementById("video-tour")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="media-resources" className="w-full bg-[#0d0e12] py-16 sm:py-24 px-4 flex flex-col items-center border-t border-white/10 relative overflow-hidden scroll-mt-20">
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
            Watch the video walkthrough, download high-resolution documents, and browse actual photo galleries of the property interiors, finishes, and exterior build progress.
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
                Download the official marketing brochure to view comprehensive unit elevations, layouts, specifications, and pricing structures.
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
            </div>
          </div>
        </div>

        {/* Gallery Section Divider / Subheader */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <h3 className="text-lg sm:text-2xl font-serif text-white tracking-wide font-medium">
            Video Tour & Interactive Photo Galleries
          </h3>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-bronze font-bold text-right ml-2">
            Cloudflare Stream & Google Photos
          </span>
        </div>

        {/* External Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Card 0 (FEATURED VIDEO): Cloudflare Video Tour (Units 303 & 304) */}
          <div
            onClick={scrollToVideoTour}
            className="group flex flex-col justify-between bg-[#16171e] border-2 border-amber-500/80 hover:border-amber-400 rounded-2xl p-5 transition-all duration-300 shadow-2xl min-h-[400px] sm:min-h-[440px] transform hover:-translate-y-1 hover:shadow-glow active:scale-[0.98] relative overflow-hidden cursor-pointer"
          >
            {/* Visual Preview Image with Play Button */}
            <div className="w-full h-40 sm:h-48 rounded-xl border border-white/10 relative flex items-center justify-center overflow-hidden mb-5 select-none pointer-events-none bg-black">
              <Image
                src="/images/units/303-a.jpg"
                alt="Cloudflare Stream Video Walkthrough Preview (Units 303 & 304)"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

              {/* Play Button Overlay */}
              <div className="absolute z-20 bg-amber-500 text-slate-950 p-4 rounded-full group-hover:scale-110 group-hover:bg-amber-400 transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.6)]">
                <Play className="w-6 h-6 fill-current translate-x-0.5" />
              </div>

              {/* Top Right Tag */}
              <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 font-black text-[9px] sm:text-[10px] tracking-widest uppercase px-2.5 py-1 rounded z-20 shadow-md">
                Featured Video
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-amber-400 font-bold block mb-1">
                  HD Video Tour • Cloudflare Stream
                </span>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif text-white font-semibold group-hover:text-amber-300 transition-colors duration-200">
                    Units 303 & 304 Video Walkthrough
                  </h4>
                  <Video className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  Stream the 1080p full walk-through video showcasing the double-volume living area, sleek kitchen, and panoramic loft views of the remaining duplex units.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-amber-300 border-t border-white/10 pt-4">
                <span>Watch Video Walkthrough</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          </div>

          {/* Card 1 (PRIMARY FEATURED): Premium Suites Gallery (Units 303 & 304) */}
          <a
            href="https://photos.app.goo.gl/wWBD4uTkddX7WDAr6"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-[#16171e] border-2 border-muted-bronze hover:border-amber-400 rounded-2xl p-5 transition-all duration-300 shadow-2xl min-h-[400px] sm:min-h-[440px] transform hover:-translate-y-1 hover:shadow-glow active:scale-[0.98] relative overflow-hidden"
          >
            {/* Visual Preview Image */}
            <div className="w-full h-40 sm:h-48 rounded-xl border border-white/10 relative flex items-center justify-center overflow-hidden mb-5 select-none pointer-events-none">
              <Image
                src="/images/units/303-a.jpg"
                alt="Available Duplex Suites Photo Gallery (Units 303 & 304)"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-110 contrast-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />

              {/* Camera Focal Icon overlay */}
              <div className="absolute z-20 bg-black/60 backdrop-blur-md border border-white/30 p-3 sm:p-3.5 rounded-full text-white group-hover:scale-110 group-hover:bg-muted-bronze group-hover:text-deep-obsidian group-hover:border-muted-bronze transition-all duration-300 shadow-xl">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Top Right Tag */}
              <div className="absolute top-3 right-3 bg-amber-400 text-deep-obsidian font-black text-[9px] sm:text-[10px] tracking-widest uppercase px-2.5 py-1 rounded z-20 shadow-md">
                Available: Units 303 & 304
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-amber-400 font-bold block mb-1">
                  Only 2 Units Left • 77m² Duplex
                </span>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif text-white font-semibold group-hover:text-muted-bronze transition-colors duration-200">
                    Units 303 & 304 Duplex Album
                  </h4>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:text-muted-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  Browse real walkthrough photography of the final 2-bedroom, 2-bathroom duplex suites (77m² total) showing double-volume living spaces, designer kitchens, and private balconies.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-muted-bronze border-t border-white/10 pt-4">
                <span>Open Google Photos Album</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>
          
          {/* Card 2: Main Cornerstone on Arum Gallery (Exterior & Build) */}
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
              />
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

          {/* Card 3: Unit 302 Gallery (Duplex Suite 302 - Sold Reference) */}
          <a
            href="https://photos.app.goo.gl/ob9zzgqMguQT2y649"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-[#16171e] border-2 border-white/10 hover:border-muted-bronze/80 rounded-2xl p-5 transition-all duration-300 shadow-lg min-h-[400px] sm:min-h-[440px] transform hover:-translate-y-1 hover:shadow-glow active:scale-[0.98] active:border-muted-bronze/60 touch-manipulation opacity-85 hover:opacity-100"
          >
            {/* Visual Preview Image */}
            <div className="w-full h-40 sm:h-48 rounded-xl border border-white/10 relative flex items-center justify-center overflow-hidden mb-5 select-none pointer-events-none">
              <Image
                src="/images/units/302-a.jpg"
                alt="Unit 302 Gallery Preview"
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
              <div className="absolute top-3 right-3 bg-red-500/80 text-white font-extrabold text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 rounded z-20 shadow-md">
                Unit 302 (SOLD)
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">Duplex Reference</span>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif text-white font-semibold group-hover:text-muted-bronze transition-colors duration-200">
                    Duplex Suite 302
                  </h4>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 group-hover:text-muted-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  Reference photography of duplex loft Unit 302 showcasing double-volume lounge design, modern kitchen layout, loft bedroom, and balcony finishes.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-bronze border-t border-white/5 pt-4">
                <span>Open Shared Album</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>

          {/* Card 4: Unit 101 Gallery (Sold Reference) */}
          <a
            href="https://photos.app.goo.gl/myq39rDCjSqgvQ7w5"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-[#16171e] border-2 border-white/10 hover:border-muted-bronze/80 rounded-2xl p-5 transition-all duration-300 shadow-lg min-h-[400px] sm:min-h-[440px] transform hover:-translate-y-1 hover:shadow-glow active:scale-[0.98] active:border-muted-bronze/60 touch-manipulation opacity-85 hover:opacity-100"
          >
            {/* Visual Preview Image */}
            <div className="w-full h-40 sm:h-48 rounded-xl border border-white/10 relative flex items-center justify-center overflow-hidden mb-5 select-none pointer-events-none">
              <Image
                src="/images/units/101-a.jpg"
                alt="Unit 101 Gallery Preview"
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
              <div className="absolute top-3 right-3 bg-red-500/80 text-white font-extrabold text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 rounded z-20 shadow-md">
                Unit 101 (SOLD)
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">Finished Portfolio</span>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif text-white font-semibold group-hover:text-muted-bronze transition-colors duration-200">
                    Unit 101 Interior
                  </h4>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 group-hover:text-muted-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  Inspect the finishes of Unit 101, showcasing modern open-plan spaces, bedroom design, and private balcony detail.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-bronze border-t border-white/5 pt-4">
                <span>Open Shared Album</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>

          {/* Card 5: Unit 106 Gallery (Sold Reference) */}
          <a
            href="https://photos.app.goo.gl/65sWTTTdoX46ne7v8"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-[#16171e] border-2 border-white/10 hover:border-muted-bronze/80 rounded-2xl p-5 transition-all duration-300 shadow-lg min-h-[400px] sm:min-h-[440px] transform hover:-translate-y-1 hover:shadow-glow active:scale-[0.98] active:border-muted-bronze/60 touch-manipulation opacity-85 hover:opacity-100"
          >
            {/* Visual Preview Image */}
            <div className="w-full h-40 sm:h-48 rounded-xl border border-white/10 relative flex items-center justify-center overflow-hidden mb-5 select-none pointer-events-none">
              <Image
                src="/images/units/106-a.jpg"
                alt="Unit 106 Gallery Preview"
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
              <div className="absolute top-3 right-3 bg-red-500/80 text-white font-extrabold text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 rounded z-20 shadow-md">
                Unit 106 (SOLD)
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">Finished Portfolio</span>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif text-white font-semibold group-hover:text-muted-bronze transition-colors duration-200">
                    Unit 106 Interior
                  </h4>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 group-hover:text-muted-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  Inspect the layout and premium finishes of Unit 106, showcasing modern open-plan spaces, bedroom design, and private balcony detail.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-bronze border-t border-white/5 pt-4">
                <span>Open Shared Album</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>

          {/* Card 6: Unit 102 Gallery (Sold Reference) */}
          <a
            href="https://photos.app.goo.gl/K1fr1PhvXDoAbQ8Q7"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-[#16171e] border-2 border-white/10 hover:border-muted-bronze/80 rounded-2xl p-5 transition-all duration-300 shadow-lg min-h-[400px] sm:min-h-[440px] transform hover:-translate-y-1 hover:shadow-glow active:scale-[0.98] active:border-muted-bronze/60 touch-manipulation opacity-85 hover:opacity-100"
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
              <div className="absolute top-3 right-3 bg-red-500/80 text-white font-extrabold text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 rounded z-20 shadow-md">
                Unit 102 (SOLD)
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">Finished Portfolio</span>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base sm:text-lg md:text-xl font-serif text-white font-semibold group-hover:text-muted-bronze transition-colors duration-200">
                    Unit 102 Interior
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

        </div>
      </div>
    </section>
  )
}
