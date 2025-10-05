import FinancePartners from "@/components/FinancePartners";
import FloorPlans from "@/components/FloorPlans";
import UnitCarousel from "@/components/UnitCarousel";

const unit304Images = [
  "/images/units/304-1.png",
  "/images/units/304-2.png",
  "/images/units/304-3.png",
  "/images/units/304-4.png",
  "/images/units/304-5.png",
];

const unit305Images = [
  "/images/units/305-1.png",
  "/images/units/305-2.png",
  "/images/units/305-3.png",
  "/images/units/305-4.png",
  "/images/units/305-5.png",
];

export default function WiredSections() {
  return (
    <>
      {/* Financing partners */}
      <FinancePartners />

      {/* Floor plans */}
      <FloorPlans />

      {/* Unit 304 gallery */}
      <UnitCarousel unit={304} images={unit304Images} caption="Unit 304 — 2 bedroom loft" />

      {/* Unit 305 gallery */}
      <UnitCarousel unit={305} images={unit305Images} caption="Unit 305 — 2 bedroom loft" />
    </>
  );
}
