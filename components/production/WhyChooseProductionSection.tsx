"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const advantageImages = [
  {
    src: "/assets/static/Images/Production/Production/Bottom Pics/img1.jpg",
    alt: "Creative and technical mastery in event production",
  },
  {
    src: "/assets/static/Images/Production/Production/Bottom Pics/img2.jpg",
    alt: "Experienced production team at work",
  },
  {
    src: "/assets/static/Images/Production/Production/Bottom Pics/img3.jpg",
    alt: "In-house fabrication and equipment",
  },
];

function AdvantageImageCard({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative aspect-square rounded-lg overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-500 group cursor-pointer ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-12 opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

export default function WhyChooseProductionSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-center text-white">
            Why Choose ThematicQ for Your Events
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-4 leading-relaxed">
            Where creativity meets flawless execution
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Event production requires experience and precision, and ThematicQ
            incorporates storytelling.
          </p>
        </AnimatedSection>

        <div className="space-y-8 md:space-y-10 mb-12">
          <AnimatedSection direction="up" delay={300}>
            <div className="bg-gray-900 p-6 md:p-8 rounded-lg border border-gray-800 hover:border-teal-500 transition-all duration-300 group hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-2">
              <h3 className="text-base md:text-lg font-medium mb-3 text-teal-400 group-hover:text-teal-300 transition-colors">
                Creative and Technical Mastery
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                Our team combines design artistry with technical engineering,
                setting stages with bold lighting, custom AV design, and
                integrated cutting-edge tech. The result is world-class
                productions that inspire and motivate, creating experiences that
                leave lasting impressions.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={400}>
            <div className="bg-gray-900 p-6 md:p-8 rounded-lg border border-gray-800 hover:border-teal-500 transition-all duration-300 group hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-2">
              <h3 className="text-base md:text-lg font-medium mb-3 text-teal-400 group-hover:text-teal-300 transition-colors">
                Experienced Production Team
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                World-class production supervision from seasoned veterans, with
                event planners, coordinators, and techs acting in the same
                performance. We ensure flawless execution with smooth
                transitions, perfect timing, and zero errors on show day.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={500}>
            <div className="bg-gray-900 p-6 md:p-8 rounded-lg border border-gray-800 hover:border-teal-500 transition-all duration-300 group hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-2">
              <h3 className="text-base md:text-lg font-medium mb-3 text-teal-400 group-hover:text-teal-300 transition-colors">
                In-House Fabrication and Equipment
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                We own lights, tools, and setups, allowing control over quality,
                timing, and level of customisation. Custom stage builds and
                audiovisual rigs enable us to deliver innovative results more
                safely and quickly, ensuring your event is exactly as
                envisioned.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {advantageImages.map((image, index) => (
            <AdvantageImageCard
              key={index}
              src={image.src}
              alt={image.alt}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
