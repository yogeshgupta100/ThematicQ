"use client";

import Image from "next/image";
import { useParallax, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef } from "react";

export default function AboutIntro() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { offset } = useParallax(0.3);
  const { ref: imageAnimationRef, isVisible: imageVisible } =
    useScrollAnimation({ threshold: 0.2 });
  const { ref: textAnimationRef, isVisible: textVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={imageAnimationRef}
          className={`transition-all duration-1000 ease-out ${
            imageVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-12 opacity-0 scale-95"
          }`}
        >
          <div
            ref={parallaxRef}
            className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-8 md:mb-12 border border-500/20 bor-yellow-hoeffer"
            style={{ transform: `translateY(${offset}px)` }}
          >
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
        </div>

        <div
          ref={textAnimationRef}
          className={`transition-all duration-1000 ease-out delay-300 ${
            textVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
            Transforming Ordinary Gatherings Into Powerful Experiences That
            Inspire, Connect, And Are Remembered Is What We Do. Creative And
            Dedicated Teams Dream, Design, And Deploy. We Plan And Manage Every
            Detail For Corporate Conferences, Weddings, Festival Productions,
            And Digital Experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
