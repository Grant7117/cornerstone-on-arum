"use client";

import { UnitCard } from "./unit-card";
import { units } from "../data/units";
import { ChevronLeft, ChevronRight } from "./icons";
import { useState, useRef, useEffect } from "react";
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
    <section id="properties" className="bg-slate-50 py-16 px-4">
      <div className="mx-auto max-w-7xl relative">
        <h2 className="mb-12 text-center text-4xl font-black text-slate-900 tracking-tight">
          Available Units
        </h2>

        <div className="relative group px-4 md:px-12">
          {/* Native scroll container with snap */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth' }}
          >
            {units.map((unit) => (
              <div key={unit.unitNo} className="flex-none w-[280px] sm:w-[320px] md:w-[340px] snap-center">
                <UnitCard unit={unit} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Always visible but more prominent on hover */}
          <div className="absolute top-1/2 -left-2 md:left-0 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full shadow-xl border border-slate-200 bg-white/90 hover:bg-white text-slate-900 transition-all hover:scale-110"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-2 md:right-0 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full shadow-xl border border-slate-200 bg-white/90 hover:bg-white text-slate-900 transition-all hover:scale-110"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-[11px] uppercase tracking-widest font-bold">
            * Prices and availability are subject to change without notice.
          </p>
        </div>
      </div>
    </section>
  );
}
