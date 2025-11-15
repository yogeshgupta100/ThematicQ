import { Suspense } from "react";
import AboutHeader from "@/components/about/AboutHeader";
import AboutIntro from "@/components/about/AboutIntro";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import CoreValues from "@/components/about/CoreValues";
import Philosophy from "@/components/about/Philosophy";
import OurStory from "@/components/about/OurStory";
import MeetTheTeam from "@/components/about/MeetTheTeam";

export const metadata = {
  title: "About Us - ThematicQ",
  description:
    "Learn about ThematicQ - The Event Storytellers turning moments into memories",
};

export default async function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={<HeaderSkeleton />}>
        <AboutHeader />
      </Suspense>
      <AboutIntro />
      <MissionVisionValues />
      <CoreValues />
      <Philosophy />
      <OurStory />
      <MeetTheTeam />
    </main>
  );
}

function HeaderSkeleton() {
  return <div className="w-full h-[40vh] bg-gray-900 animate-pulse"></div>;
}
