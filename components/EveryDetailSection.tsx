"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const eventImages = [
  {
    src: "/assets/static/Images/Homepage/Grid/img1.jpg",
    alt: "Corporate Event Setup",
  },
  {
    src: "/assets/static/Images/Homepage/Grid/img2.jpg",
    alt: "Event Production",
  },
  {
    src: "/assets/static/Images/Homepage/Grid/img3.jpg",
    alt: "Stage Setup",
  },
  {
    src: "/assets/static/Images/Homepage/Grid/img4.jpg",
    alt: "Event Venue",
  },
  {
    src: "/assets/static/Images/Homepage/Grid/img5.jpg",
    alt: "Production Event",
  },
  {
    src: "/assets/static/Images/Homepage/Grid/img6.jpg",
    alt: "Event Design",
  },
];

export default function EveryDetailSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto">
        {/* 2x3 Grid Layout - 2 rows, 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {eventImages.map((image, index) => (
            <AnimatedSection
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 100}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
