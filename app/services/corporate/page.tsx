import { Suspense } from "react";
import CorporateHeader from "@/components/corporate/CorporateHeader";
import CorporateIntro from "@/components/corporate/CorporateIntro";
import CorporateSolutions from "@/components/corporate/CorporateSolutions";
import CoreValues from "@/components/corporate/CoreValues";
import VisionToLife from "@/components/corporate/VisionToLife";
import TravelHospitality from "@/components/corporate/TravelHospitality";

// All corporate components are located in @/components/corporate/

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
      {/* <CoreValues /> */}
      <VisionToLife />
      <TravelHospitality />
    </main>
  );
}

function HeaderSkeleton() {
  return <div className="w-full h-[60vh] bg-gray-900 animate-pulse"></div>;
}
