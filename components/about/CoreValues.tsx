"use client";

import AnimatedSection from "../AnimatedSection";
import { useParallax } from "@/hooks/useScrollAnimation";
import { useRef } from "react";

const values = [
  {
    title: "Creativity",
    description:
      "Every event is a blank canvas, and we have the great honour and privilege to dream.",
  },
  {
    title: "Quality",
    description:
      "The finest attention to every detail; each sound, each and every light, and every detail is of supreme importance.",
  },
  {
    title: "Collaboration",
    description:
      "The community, teamwork, healthy discussion, and concerted focus are the pillars of our methodology.",
  },
  {
    title: "Integrity",
    description: "All commitments are fulfilled and promises are kept.",
  },
  {
    title: "Experience",
    description:
      "Every outcome is the creation of emotions; the provision of every project is the only provision.",
  },
];

interface ValueItemProps {
  value: { title: string; description: string };
  index: number;
  animationDirection: "left" | "right";
}

function ValueItem({ value, index, animationDirection }: ValueItemProps) {
  const itemParallaxRef = useRef<HTMLDivElement>(null);
  const { offset: itemOffset } = useParallax(0.1 + index * 0.05);

  return (
    <AnimatedSection direction={animationDirection} delay={index * 100}>
      <div
        ref={itemParallaxRef}
        className="flex gap-6 md:gap-8 items-start"
        style={{ transform: `translateY(${itemOffset}px)` }}
      >
        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bgyllow bg-500 flex items-center justify-center">
          <span className="text-xl md:text-2xl font-bold text-black">
            {index + 1}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-medium mb-3 text-white">
            {value.title}
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {value.description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function CoreValues() {
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl">
              Everything we do revolves around our core values. These principles
              guide every decision, every design, and every detail of the events
              we create.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8 md:space-y-12">
          {values.map((value, index) => (
            <ValueItem
              key={index}
              value={value}
              index={index}
              animationDirection="right"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
