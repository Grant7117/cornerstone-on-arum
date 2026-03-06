"use client";

import { UnitCard } from "./unit-card";
import { units } from "../data/units";
import { ChevronLeft, ChevronRight } from "./icons";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";

export function UnitsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const nextUnit = () => {
    setCurrentIndex((prev) => (prev + 1) % units.length);
  };

  const prevUnit = () => {
    setCurrentIndex((prev) => (prev - 1 + units.length) % units.length);
  };

  return (
    <section id="properties" className="bg-white py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Available Units
        </h2>

        {/* Carousel for Mobile/Tablet, Grid for Desktop */}
        <div className="relative group">
          <div
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {units.map((unit) => (
              <div key={unit.unitNo} className="min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-center">
                <UnitCard unit={unit} />
              </div>
            ))}
          </div>

          {/* Navigation for Mobile Carousel */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <Button variant="outline" size="icon" onClick={() => {
              const el = document.querySelector('.overflow-x-auto');
              el?.scrollBy({ left: -300, behavior: 'smooth' });
            }}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => {
              const el = document.querySelector('.overflow-x-auto');
              el?.scrollBy({ left: 300, behavior: 'smooth' });
            }}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm italic">
            * Prices and availability are subject to change without notice.
          </p>
        </div>
      </div>
    </section>
  );
}
