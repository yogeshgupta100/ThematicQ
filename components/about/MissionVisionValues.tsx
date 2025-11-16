"use client";

import AnimatedSection from "../AnimatedSection";
import { useParallax } from "@/hooks/useScrollAnimation";
import { useRef } from "react";

export default function MissionVisionValues() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { offset } = useParallax(0.15);

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <div
            ref={parallaxRef}
            style={{ transform: `translateY(${offset}px)` }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Our Mission, Vision & Values
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
              <p>
                We create unforgettable experiences that inspire, connect, and
                are remembered. Our mission is to transform ordinary gatherings
                into powerful moments that leave a lasting impact on everyone
                involved.
              </p>
              <p>
                Our vision is to be the most trusted and innovative event
                storytelling brand, known for turning every moment into a
                memory. We aspire to set new standards in the industry through
                creativity, quality, and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
