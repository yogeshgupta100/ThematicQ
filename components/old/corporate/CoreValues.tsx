"use client";

import AnimatedSection from "../AnimatedSection";

export default function CoreValues() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-white">
            Our core values are simple: creativity, precision, and passion.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
            <p>
              We believe every event is unique and deserves a personal touch.
              Our team works closely with you to understand your vision, goals,
              and brand identity, ensuring that every detail reflects your
              values and message.
            </p>
            <p>
              From the initial concept to the final execution, we bring
              creativity, precision, and passion to every project. Each event we
              create is designed to make a lasting impact, fostering connections
              and building your brand&apos;s reputation.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
