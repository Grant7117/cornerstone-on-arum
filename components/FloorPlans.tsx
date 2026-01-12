import Image from "next/image";

export default function FloorPlans() {
  return (
    <section id="floor-plans" className="container mx-auto px-4 py-12">
      <h2 className="mb-6 text-3xl font-semibold">Explore the Layouts</h2>
      <p className="mb-8 text-gray-600">
        Colour-coded plans are linked to unit availability. Select by apartment type or download the full set.
      </p>
      <div className="overflow-hidden rounded-2xl shadow">
        <Image
          src="/images/floor-plans-color-coded.jpg"
          alt="Cornerstone on Arum colour-coded floor plans and elevations"
          width={1920}
          height={1200}
          className="h-auto w-full"
          priority
        />
      </div>
    </section>
  );
}
