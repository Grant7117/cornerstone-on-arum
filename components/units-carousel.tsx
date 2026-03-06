"use client";

import { UnitCard } from "./unit-card";
import { units } from "@/data/units";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/button";

export function UnitsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="units" className="bg-slate-50 py-16 px-4">
      <div className="mx-auto max-w-7xl relative">
        <h2 className="mb-12 text-center text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
          Featured Units
        </h2>

        <div className="relative group px-4 md:px-12">
          {/* Snap Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth' }}
          >
            {units.map((unit) => (
              <div key={unit.unitNo} className="flex-none w-[280px] sm:w-[320px] md:w-[340px] snap-center">
                <UnitCard unit={unit} />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-2 md:left-4 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full shadow-2xl border border-slate-200 bg-white/95 hover:bg-white text-slate-900 transition-all hover:scale-110 active:scale-95"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-2 md:right-4 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full shadow-2xl border border-slate-200 bg-white/95 hover:bg-white text-slate-900 transition-all hover:scale-110 active:scale-95"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="h-1.5 w-12 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-slate-900 w-1/3 transition-all"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black">
            * All data is accurate as of current inventory *
          </p>
        </div>
      </div>
    </section>
  );
}
