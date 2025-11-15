"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { useParallax } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  rowSpan: number; // 1 or 2
  colSpan: number; // 1
  animationDirection: "left" | "right";
}

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

function PortfolioCard({ item, index }: PortfolioCardProps) {
  const { ref: parallaxRef, offset } = useParallax(0.2);
  const { ref: animationRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={animationRef}
      className={`relative rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-500 group cursor-pointer ${
        item.rowSpan === 2 ? "row-span-2" : "row-span-1"
      } ${
        isVisible
          ? "translate-x-0 opacity-100"
          : item.animationDirection === "left"
          ? "-translate-x-12 opacity-0"
          : "translate-x-12 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div
        ref={parallaxRef}
        className="relative w-full h-full"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  // Portfolio items with layout configuration
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      alt: "Corporate Event",
      rowSpan: 2,
      colSpan: 1,
      animationDirection: "left",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
      alt: "Conference Stage",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "right",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      alt: "Outdoor Event",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "right",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      alt: "Wedding Celebration",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "left",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=800&q=80",
      alt: "Festival Event",
      rowSpan: 2,
      colSpan: 1,
      animationDirection: "right",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
      alt: "Product Launch",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "left",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      alt: "Award Ceremony",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "left",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      alt: "Concert Event",
      rowSpan: 2,
      colSpan: 1,
      animationDirection: "left",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      alt: "Networking Event",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "right",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      alt: "Corporate Gathering",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "right",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-white">
            OUR PORTFOLIO
          </h2>
          <p className="text-xl md:text-2xl text-teal-400 text-center mb-4 font-semibold">
            The Stories We&apos;ve Told
          </p>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Every event we create has its own heartbeat. It&apos;s own colour,
            emotion, and story. To us, every portfolio is more than just photos,
            setups, and smiles you see in our portfolio all remind us of a story
            that began with a simple idea and grew into something wonderful.
            Need a corporate event emcee or celebrity management agency?
            Let&apos;s talk first.
          </p>
        </AnimatedSection>

        {/* Portfolio Grid - 2 columns with masonry layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 auto-rows-[300px]">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
