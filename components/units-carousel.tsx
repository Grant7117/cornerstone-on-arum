"use client";
import Image from "next/image";
import { useState } from "react";

const unitImages: Record<number, string[]> = {
  304: [
    "/images/units/304-1.png",
    "/images/units/304-2.png",
    "/images/units/304-3.png",
    "/images/units/304-4.png",
    "/images/units/304-5.png",
  ],
  305: [
    "/images/units/305-1.png",
    "/images/units/305-2.png",
    "/images/units/305-3.png",
    "/images/units/305-4.png",
    "/images/units/305-5.png",
  ],
};

function Carousel({ unit }: { unit: 304 | 305 }) {
  const imgs = unitImages[unit] ?? [];
  const [idx, setIdx] = useState(0);
  const count = imgs.length;
  if (!count) return null;

  const go = (d: -1 | 1) => setIdx((i) => (i + d + count) % count);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-2xl shadow">
        <Image
          key={imgs[idx]}
          src={imgs[idx]}
          alt={`Unit ${unit} image ${idx + 1}`}
          width={1600}
          height={1000}
          className="h-auto w-full"
          priority={idx === 0}
        />
        <button
          aria-label="Previous image"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-xl shadow hover:bg-white"
        >
          ‹
        </button>
        <button
          aria-label="Next image"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-xl shadow hover:bg-white"
        >
          ›
        </button>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {imgs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${i === idx ? "bg-white" : "bg-white/50"} shadow`}
            />
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-gray-600">
        Unit {unit} — 2 bedroom loft
      </p>
    </div>
  );
}

export function UnitsCarousel() {
  return (
    <section id="units" className="bg-white py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Featured Loft Units
        </h2>

        <div className="grid gap-12">
          <Carousel unit={304 as 304} />
          <Carousel unit={305 as 305} />
        </div>
      </div>
    </section>
  );
}
