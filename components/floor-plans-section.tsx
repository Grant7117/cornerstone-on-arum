"use client";
import Image from "next/image";

export default function FloorPlansSection() {
  return (
    <section id="floorplans" className="bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-800">Colour-Coded Floor Plans</h2>
        <p className="mb-6 text-gray-600">
          Explore the layout of each floor at Cornerstone on Arum. Every level is
          colour-coded for easy reference.
        </p>
        <div className="overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/floor-plans-color-coded.jpg"
            alt="Cornerstone on Arum - Colour Coded Floor Plans"
            width={1600}
            height={1000}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
