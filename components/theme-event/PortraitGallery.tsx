"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const portraits = [
  {
    src: "/assets/static/Images/Themes/lastSection/img1.jpg",
    alt: "Woman with curly dark hair in warm lighting",
  },
  {
    src: "/assets/static/Images/Themes/lastSection/img2.jpg",
    alt: "Person walking through autumn leaves",
  },
  {
    src: "/assets/static/Images/Themes/lastSection/img3.jpg",
    alt: "Woman with long dark hair against textured wall",
  },
];

function PortraitCard({
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
      className={`relative aspect-[3/4] rounded-lg overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-500 group cursor-pointer ${
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
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

export default function PortraitGallery() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {portraits.map((portrait, index) => (
            <PortraitCard
              key={index}
              src={portrait.src}
              alt={portrait.alt}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
