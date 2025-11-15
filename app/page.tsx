import HeroCarousel from "@/components/HeroCarousel";
import TheQSection from "@/components/TheQSection";
import EveryDetailSection from "@/components/EveryDetailSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Suspense fallback={<HeroCarouselSkeleton />}>
        <HeroCarousel />
      </Suspense>
      <TheQSection />
      <EveryDetailSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseSection />
      <CTASection />
    </main>
  );
}

function HeroCarouselSkeleton() {
  return (
    <div className="w-full h-screen bg-black animate-pulse flex items-center justify-center">
      <div className="text-gray-600">Loading...</div>
    </div>
  );
}
