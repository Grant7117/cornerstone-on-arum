import BetterBondSection from "./betterbond-section";
import FloorPlansSection from "./floor-plans-section";
import { UnitsCarousel } from "./units-carousel";

export default function WiredSections() {
  return (
    <>
      {/* Financing partners */}
      <BetterBondSection />

      {/* Floor plans */}
      <FloorPlansSection />

      {/* All Units Gallery/Grid */}
      <UnitsCarousel />
    </>
  );
}
