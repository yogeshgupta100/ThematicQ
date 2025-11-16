import { Suspense } from "react";
import ThemeEventHeader from "@/components/theme-event/ThemeEventHeader";
import ThemeEventIntro from "@/components/theme-event/ThemeEventIntro";
import CuratorsSection from "@/components/theme-event/CuratorsSection";
import ThemeSolutionsSection from "@/components/theme-event/ThemeSolutionsSection";
import ServicesShowcase from "@/components/theme-event/ServicesShowcase";
import WhyChooseThemeSection from "@/components/theme-event/WhyChooseThemeSection";
import PortraitGallery from "@/components/theme-event/PortraitGallery";

// All theme-event components are located in @/components/theme-event/

export const metadata = {
  title: "Theme Events - ThematicQ",
  description:
    "Designing Events Around Your Narrative - Masters of Theme Perfection",
};

export default async function ThemeEventPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={<HeaderSkeleton />}>
        <ThemeEventHeader />
      </Suspense>
      <ThemeEventIntro />
      <CuratorsSection />
      <ThemeSolutionsSection />
      <ServicesShowcase />
      <WhyChooseThemeSection />
      <PortraitGallery />
    </main>
  );
}

function HeaderSkeleton() {
  return <div className="w-full h-[40vh] bg-gray-900 animate-pulse"></div>;
}
