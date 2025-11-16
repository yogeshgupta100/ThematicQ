"use client";

import AnimatedSection from "../AnimatedSection";

export default function CustomisingSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-white">
            Customising All End-To-End Event Production With Creativity And
            Phases
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              At ThematicQ, we execute concepts with flawless staging,
              programming every detail from spotlight, sound, setting, and
              layout. Our behind-the-scenes work encompasses stage construction,
              light design, sound and visuals, and artist management.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We blend science and artistry to create evocative and absorbing
              environments. Production Is Not The Arrangement; It Is The
              Choreography Of A Story In Motion.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
