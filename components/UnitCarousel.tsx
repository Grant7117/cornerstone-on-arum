"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  unit: number;
  images: string[];
  caption?: string;
};

export default function UnitCarousel({ unit, images, caption }: Props) {
  const [idx, setIdx] = useState(0);
  const n = images.length;
  if (!n) return null;

  const go = (d: -1 | 1) => setIdx((i) => (i + d + n) % n);

  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-2xl shadow">
        <Image
          key={images[idx]}
          src={images[idx]}
          alt={`Cornerstone Unit ${unit} image ${idx + 1}`}
          width={1920}
          height={1200}
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

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${i === idx ? "bg-white" : "bg-white/50"} shadow`}
            />
          ))}
        </div>
      </div>

      {caption && <p className="mt-3 text-sm text-gray-600">{caption}</p>}
    </section>
  );
}
