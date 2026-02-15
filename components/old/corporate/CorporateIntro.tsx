"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";
import { useParallax, useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ImageItem {
  src: string;
  alt: string;
  animationDirection: "left" | "right";
}

interface ImageCardProps {
  item: ImageItem;
  index: number;
  aspectRatio?: "square" | "video";
}

function ImageCard({ item, index, aspectRatio = "square" }: ImageCardProps) {
  const { ref: parallaxRef, offset } = useParallax(0.2);
  const { ref: animationRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={animationRef}
      className={`relative ${
        aspectRatio === "square" ? "aspect-square" : "aspect-video"
      } rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-500 group cursor-pointer ${
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
          sizes={
            aspectRatio === "square"
              ? "(max-width: 768px) 100vw, 33vw"
              : "(max-width: 768px) 100vw, 50vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}

const topRowImages: ImageItem[] = [
  {
    src: "/assets/static/Images/Corporate/Final/img1.jpg",
    alt: "Corporate Conference",
    animationDirection: "left",
  },
  {
    src: "/assets/static/Images/Corporate/Final/img2.jpg",
    alt: "Business Meeting",
    animationDirection: "right",
  },
  {
    src: "/assets/static/Images/Corporate/Final/img3.jpg",
    alt: "Corporate Event",
    animationDirection: "left",
  },
];

const middleRowImages: ImageItem[] = [
  {
    src: "/assets/static/Images/Corporate/Final/img4.jpg",
    alt: "Corporate Gathering",
    animationDirection: "left",
  },
  {
    src: "/assets/static/Images/Corporate/Final/img5.jpg",
    alt: "Event Setup",
    animationDirection: "right",
  },
];

const bottomRowImages: ImageItem[] = [
  {
    src: "/assets/static/Images/Corporate/Final/img6.jpg",
    alt: "Corporate Presentation",
    animationDirection: "right",
  },
  {
    src: "/assets/static/Images/Corporate/Final/img7.jpg",
    alt: "Business Conference",
    animationDirection: "left",
  },
  {
    src: "/assets/static/Images/Corporate/Final/img8.jpg",
    alt: "Corporate Event",
    animationDirection: "right",
  },
];

export default function CorporateIntro() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl text-gray-300 max-w-7xl mx-auto leading-relaxed">
              At ThematicQ, we don&apos;t just plan events; we create
              experiences that flow seamlessly from beginning to end. With five
              years of industry reputation, we specialise in well-organised,
              impactful events that foster community, build your brand, and
              celebrate its essence.
            </p>
          </div>
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-gray-300 max-w-7xl mx-auto leading-relaxed">
              For us, the method is straightforward: effective collaboration,
              innovative planning, and flawless execution. At ThematicQ, we
              don’t just promise an event; we deliver an experience, maintaining
              the flow and easing uncertainty for a memorable time with family
              and friends.
            </p>
          </div>
        </AnimatedSection>
    
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {topRowImages.map((image, i) => (
              <ImageCard key={i} item={image} index={i} aspectRatio="square" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {middleRowImages.map((image, i) => (
              <ImageCard
                key={i}
                item={image}
                index={topRowImages.length + i}
                aspectRatio="video"
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bottomRowImages.map((image, i) => (
              <ImageCard
                key={i}
                item={image}
                index={topRowImages.length + middleRowImages.length + i}
                aspectRatio="square"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
