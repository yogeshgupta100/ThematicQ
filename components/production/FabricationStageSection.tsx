"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const productionImages = [
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    alt: "Sound, light & visual mixing console",
    label: "Sound, Light & Visual",
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    alt: "Stage sets and fabrication with lighting",
    label: "Stage Sets & Fabrication",
  },
  {
    src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&q=80",
    alt: "Designs and branding materials",
    label: "Designs & Branding",
  },
];

function ProductionImageCard({
  item,
  index,
}: {
  item: (typeof productionImages)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative group ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
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

export default function FabricationStageSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-center text-white">
            Fabrication, Stage, Lighting & AV
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <div className="max-w-5xl mx-auto mb-12 space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our production staff and creative engineers collaborate to design
              and deliver event sets that are both useful and dominant visual
              features. From stage construction and structural design to
              lighting and sound engineering, we create immersive environments
              where light, sound, and structure synchronise with your theme.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We work with choreographers, directors, and performers to provide
              turnkey solutions for corporate shows, concerts, and celebratory
              events. With in-house fabrication and advanced audiovisual
              equipment, ThematicQ crafts experiences rather than just making
              stages.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We focus on premium event design and implementation with
              creativity, accuracy, and experience. With over five years of
              industry experience, we transform concepts into live, memorable
              events with great precision. We construct and integrate all
              components from architectural design and lighting to audio,
              decorations, and performer arrangements, offering flexibility.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {productionImages.map((item, index) => (
            <ProductionImageCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
