import { Suspense } from "react";
import CorporateHeader from "@/components/corporate/CorporateHeader";
import CorporateIntro from "@/components/corporate/CorporateIntro";
import CorporateSolutions from "@/components/corporate/CorporateSolutions";
import VisionToLife from "@/components/corporate/VisionToLife";
import TravelHospitality from "@/components/corporate/TravelHospitality";

export const metadata = {
  title: "Corporate Events - ThematicQ",
  description: "Professional corporate event planning and execution services",
};

export default async function CorporatePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={<HeaderSkeleton />}>
        <CorporateHeader />
      </Suspense>
      <CorporateIntro />
      <CorporateSolutions />
      <VisionToLife />
      <TravelHospitality />
    </main>
  );
}

function HeaderSkeleton() {
  return <div className="w-full h-[60vh] bg-gray-900 animate-pulse"></div>;
}
