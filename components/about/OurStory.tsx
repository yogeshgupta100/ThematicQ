"use client";

import AnimatedSection from "../AnimatedSection";

export default function OurStory() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Our Story - From Spark to Story
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
            <p>
              Our journey began in 2017 with college festivals, where we
              discovered our passion for creating memorable experiences. What
              started as a small venture organizing campus events quickly grew
              into something much larger.
            </p>
            <p>
              The year 2020 brought unprecedented challenges, but it also became
              a turning point. We adapted, evolved, and reimagined what event
              management could be. It was during this time that our vision
              crystallized into something more profound.
            </p>
            <p>
              Today, ThematicQ represents the perfect fusion of strategy,
              storytelling, and creativity. We&apos;ve transformed from festival
              organizers into event storytellers, dedicated to turning every
              moment into a memory and every gathering into an experience that
              resonates long after the event ends.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
