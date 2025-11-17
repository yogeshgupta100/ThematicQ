"use client";

import AnimatedSection from "../AnimatedSection";
import { useParallax } from "@/hooks/useScrollAnimation";
import { useRef } from "react";

const qFactors = [
  {
    letter: "Q",
    title: "Q for Question",
    description:
      "Every event starts with a query; what feeling do we want to evoke in the audience?",
  },
  {
    letter: "Q",
    title: "Q for Quality",
    description: "Perfection is a prerequisite, no matter the size.",
  },
  {
    letter: "Q",
    title: "Q for Quotient",
    description:
      "Every event should have a visible and tangible emotional quotient.",
  },
];

interface QFactorItemProps {
  factor: { letter: string; title: string; description: string };
  index: number;
}

function QFactorItem({ factor, index }: QFactorItemProps) {
  const itemParallaxRef = useRef<HTMLDivElement>(null);
  const { offset: itemOffset } = useParallax(0.1 + index * 0.05);

  return (
    <AnimatedSection direction="left" delay={index * 100}>
      <div
        ref={itemParallaxRef}
        className="flex gap-6 md:gap-8 items-start"
        style={{ transform: `translateY(${itemOffset}px)` }}
      >
        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal-500 flex items-center justify-center">
          <span className="text-3xl md:text-4xl font-bold text-black">
            {factor.letter}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-medium mb-3 text-white">
            {factor.title}
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {factor.description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Philosophy() {
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-12 text-white">
              Our Philosophy - The &apos;Q&apos; Factor
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-8 md:space-y-12">
          {qFactors.map((factor, index) => (
            <QFactorItem key={index} factor={factor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
