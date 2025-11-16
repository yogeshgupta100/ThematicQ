"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

export default function CuratorsSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-white">
            Curators of Themed Experiences
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              At ThematicQ, we specialize in creating immersive, tailored themes
              that transform your vision into reality. Whether it&apos;s a
              corporate event, social gathering, wedding, or festival, we craft
              experiences that resonate deeply with your narrative and leave
              lasting impressions.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our approach goes beyond decoration—we weave stories through every
              element, from concept development to decor, lighting,
              entertainment, and guest interaction. Every detail is meticulously
              planned to create a cohesive, memorable experience that your
              guests will cherish for years to come.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatedSection direction="left" delay={400}>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-500 group">
              <Image
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80"
                alt="Energetic party scene with masks and dynamic lighting"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={600}>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-500 group">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80"
                alt="Vibrant colorful party setup with decorations"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
