import FinancePartners from "@/components/FinancePartners";
import FloorPlans from "@/components/FloorPlans";
import { UnitsCarousel } from "@/components/units-carousel";

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
