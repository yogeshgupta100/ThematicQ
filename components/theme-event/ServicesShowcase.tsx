"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const showcaseItems = [
  {
    src: "/assets/static/Images/Themes/themeSection/collegeEvents.jpg",
    alt: "College event with traditional attire",
    label: "College Event & Stalls",
  },
  {
    src: "/assets/static/Images/Themes/themeSection/floralDecoration.jpg",
    alt: "Floral decoration setup",
    label: "Floral Decoration",
  },
  {
    src: "/assets/static/Images/Themes/themeSection/festivalEvents.jpg",
    alt: "Masquerade mask with feathers",
    label: "Festival Events",
  },
  {
    src: "/assets/static/Images/Themes/images/wedding.jpg",
    alt: "Serene landscape scene",
    label: "Wedding Theme Concept",
  },
];

function ShowcaseCard({
  item,
  index,
}: {
  item: (typeof showcaseItems)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative group ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-500 cursor-pointer">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <p className="text-white text-center mt-4 text-lg font-medium">
        {item.label}
      </p>
    </div>
  );
}

export default function ServicesShowcase() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {showcaseItems.map((item, index) => (
            <ShowcaseCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
