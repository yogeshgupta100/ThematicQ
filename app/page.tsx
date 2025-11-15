import HeroCarousel from "@/components/HeroCarousel";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<HeroCarouselSkeleton />}>
        <HeroCarousel />
      </Suspense>
      {/* Add other sections here */}
    </main>
  );
}

function HeroCarouselSkeleton() {
  return (
    <div className="w-full h-screen bg-gray-200 animate-pulse flex items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  );
}
