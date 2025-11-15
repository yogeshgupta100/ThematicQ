"use client";

import AnimatedSection from "../AnimatedSection";

export default function AboutHeader() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white text-center">
            About Us
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 text-center">
            The Event Storytellers - Turning Moments Into Memories
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
