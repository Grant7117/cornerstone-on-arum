import BetterBondSection from "./betterbond-section";
import FloorPlans from "./FloorPlans";
import { UnitsCarousel } from "./units-carousel";

export default function WiredSections() {
  return (
    <>
      {/* Financing partners */}
      <BetterBondSection />

      {/* Floor plans */}
      <FloorPlans />

      {/* All Units Gallery/Grid */}
      <UnitsCarousel />
    </>
  );
}
