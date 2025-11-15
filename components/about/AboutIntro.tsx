"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

export default function AboutIntro() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-8 md:mb-12 border border-teal-500/20">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
              alt="ThematicQ Event"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="fade" delay={200}>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
            Transforming Ordinary Gatherings Into Powerful Experiences That
            Inspire, Connect, And Are Remembered Is What We Do. Creative And
            Dedicated Teams Dream, Design, And Deploy. We Plan And Manage Every
            Detail For Corporate Conferences, Weddings, Festival Productions,
            And Digital Experiences.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
