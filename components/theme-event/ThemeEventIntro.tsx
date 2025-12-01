"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const introImages = [
  {
    src: "/assets/static/Images/Themes/images/small/img1.jpg",
    alt: "Formal event setup with tables and floral centerpieces",
  },
  {
    src: "/assets/static/Images/Themes/images/small/img2.jpg",
    alt: "Colorful cake with sprinkles",
  },
  {
    src: "/assets/static/Images/Themes/images/small/img3.jpg",
    alt: "Outdoor picnic gathering",
  },
  {
    src: "/assets/static/Images/Themes/images/small/img4.JPG",
    alt: "Birthday celebration with cake and decorations",
  },
  {
    src: "/assets/static/Images/Themes/images/small/img5.jpg",
    alt: "Festive party with people wearing headbands",
  },
  {
    src: "/assets/static/Images/Themes/images/small/img6.jpg",
    alt: "Colorful festival celebration",
  },
];

function ImageCard({
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
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

export default function ThemeEventIntro() {
  return (
    <section className="bg-black text-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {introImages.map((image, index) => (
            <ImageCard
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
