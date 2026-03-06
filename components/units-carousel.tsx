"use client";

import { UnitCard } from "@/components/unit-card";
import { units } from "@/data/units";

export function UnitsCarousel() {
  return (
    <section id="units" className="bg-white py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Available Units
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit) => (
            <UnitCard key={unit.unitNo} unit={unit} />
          ))}
        </div>
      </div>
    </section>
  );
}

