"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { useParallax } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  rowSpan: number;
  colSpan: number;
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
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      src: "/assets/static/Images/Homepage/Portfolio/img1.jpg",
      alt: "Event Production",
      rowSpan: 2,
      colSpan: 1,
      animationDirection: "left",
    },
    {
      id: 2,
      src: "/assets/static/Images/Homepage/Portfolio/img2.jpg",
      alt: "Stage Setup",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "right",
    },
    {
      id: 3,
      src: "/assets/static/Images/Homepage/Portfolio/img3.avif",
      alt: "Production Event",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "right",
    },
    {
      id: 4,
      src: "/assets/static/Images/Homepage/Portfolio/img4.jpg",
      alt: "Event Setup",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "left",
    },
    {
      id: 5,
      src: "/assets/static/Images/Homepage/Portfolio/img5.jpg",
      alt: "Fashion Show Production",
      rowSpan: 2,
      colSpan: 1,
      animationDirection: "right",
    },
    {
      id: 6,
      src: "/assets/static/Images/Homepage/Portfolio/img6.jpg",
      alt: "Production Stage",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "left",
    },
    {
      id: 7,
      src: "/assets/static/Images/Homepage/Portfolio/img7.jpg",
      alt: "Event Production",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "left",
    },
    {
      id: 8,
      src: "/assets/static/Images/Homepage/Portfolio/img8.jpg",
      alt: "Production Setup",
      rowSpan: 2,
      colSpan: 1,
      animationDirection: "left",
    },
    {
      id: 9,
      src: "/assets/static/Images/Homepage/Portfolio/img9.jpg",
      alt: "Event Production",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "right",
    },
    {
      id: 10,
      src: "/assets/static/Images/Homepage/Portfolio/img10.jpg",
      alt: "Production Event",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "right",
    },
    {
      id: 11,
      src: "/assets/static/Images/Homepage/Portfolio/img11.jpg",
      alt: "Corporate Event Production",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "left",
    },
    {
      id: 12,
      src: "/assets/static/Images/Homepage/Portfolio/img12.jpg",
      alt: "Corporate Stage Setup",
      rowSpan: 2,
      colSpan: 1,
      animationDirection: "right",
    },
    {
      id: 13,
      src: "/assets/static/Images/Homepage/Portfolio/img13.jpg",
      alt: "Corporate Event",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "right",
    },
    {
      id: 14,
      src: "/assets/static/Images/Homepage/Portfolio/img14.jpg",
      alt: "Corporate Production",
      rowSpan: 1,
      colSpan: 1,
      animationDirection: "left",
    },
    {
      id: 15,
      src: "/assets/static/Images/Homepage/Portfolio/img15.jpg",
      alt: "Corporate Event Setup",
      rowSpan: 2,
      colSpan: 1,
      animationDirection: "left",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30"></div>

      <div className="mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-center text-white">
            OUR PORTFOLIO
          </h2>
          <p className="text-xl md:text-2xl text-teal-400 text-center mb-4 font-semibold">
            The Stories We&apos;ve Told
          </p>
          <p className="text-lg md:text-xl text-gray-300 text-center mx-auto mb-12 leading-relaxed">
            Every event we create has its own heartbeat. It&apos;s own colour,
            emotion, and story. To us, every portfolio is more than just
            pictures; it&apos;s made of experiences —experiences that connect
            people and make them remember. Every project, whether an elegant
            corporate conference, a mentalist for corporate events, sangeet
            decoration, a vibrant theme festival, celebrity management, or a
            dreamy wedding, embodies our belief that it is the details that make
            the difference. We never repeat an idea. We always reinvent it for
            each brand, story, and audience. 
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 auto-rows-[300px]">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
