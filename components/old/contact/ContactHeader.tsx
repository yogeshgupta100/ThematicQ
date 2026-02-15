"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactHeader() {
  const { ref: titleAnimationRef, isVisible: titleVisible } =
    useScrollAnimation({ threshold: 0.2 });
  const { ref: subtitleAnimationRef, isVisible: subtitleVisible } =
    useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleAnimationRef}
          className={`transition-all duration-1000 ease-out ${
            titleVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-white text-center">
            Contact Us
          </h1>
        </div>
        <div
          ref={subtitleAnimationRef}
          className={`transition-all duration-1000 ease-out delay-300 ${
            subtitleVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 text-center">
            Let&apos;s Create Unforgettable Events Together
          </p>
        </div>
      </div>
    </section>
  );
}
