"use client";

import AnimatedSection from "./AnimatedSection";

export default function CTASection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <AnimatedSection direction="fade" delay={0}>
          <button className="px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-semibold border-2 border-teal-500 text-white rounded-lg hover:bg-teal-500 transition-all duration-300">
            Lets Talk
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
