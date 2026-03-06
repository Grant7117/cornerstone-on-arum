import FinancePartners from "./FinancePartners";
import FloorPlans from "./FloorPlans";
import { UnitsCarousel } from "./units-carousel";

export default function WiredSections() {
  return (
    <>
      {/* Financing partners */}
      <FinancePartners />

      {/* Floor plans */}
      <FloorPlans />

      {/* All Units Gallery/Grid */}
      <UnitsCarousel />
    </>
  );
}
