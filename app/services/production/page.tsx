import { Suspense } from "react";
import ProductionHeader from "@/components/production/ProductionHeader";
import CustomisingSection from "@/components/production/CustomisingSection";
import FabricationStageSection from "@/components/production/FabricationStageSection";
import ProductionServicesSection from "@/components/production/ProductionServicesSection";
import WhyChooseProductionSection from "@/components/production/WhyChooseProductionSection";

export const metadata = {
  title: "Event Production - ThematicQ",
  description:
    "End-to-end event production services with creativity, technical expertise, and flawless execution",
};

export default async function ProductionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={<HeaderSkeleton />}>
        <ProductionHeader />
      </Suspense>
      <CustomisingSection />
      <FabricationStageSection />
      <ProductionServicesSection />
      <WhyChooseProductionSection />
    </main>
  );
}

function HeaderSkeleton() {
  return <div className="w-full h-[60vh] bg-gray-900 animate-pulse"></div>;
}
