"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    alt: "Professional woman",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    alt: "Professional person",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    alt: "Professional woman",
  },
];

export default function CorporateGallery() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 150}>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-500/20 hover:border-500/50 transition-all duration-300 group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
