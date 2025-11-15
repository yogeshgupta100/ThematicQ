"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

// Default images - replace with your actual images
const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
    alt: "Modern workspace",
    title: "Welcome to ThematicQ",
    subtitle: "Innovation at its finest",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    alt: "Business growth",
    title: "Transform Your Business",
    subtitle: "Experience the future today",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
    alt: "Team collaboration",
    title: "Collaborate & Succeed",
    subtitle: "Building tomorrow together",
  },
];

const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index !== currentIndex && !isAnimating) {
        setIsAnimating(true);
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    },
    [currentIndex, isAnimating]
  );

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(goToNext, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [goToNext]);

  const getSlidePosition = (index: number) => {
    if (index === currentIndex) return "translate-x-0";

    // Calculate the difference to determine slide direction
    const diff = index - currentIndex;

    if (direction === "right") {
      // Moving forward: previous slides go left, next slides come from right
      if (diff < 0) return "-translate-x-full";
      return "translate-x-full";
    } else {
      // Moving backward: next slides go right, previous slides come from left
      if (diff > 0) return "translate-x-full";
      return "-translate-x-full";
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {carouselImages.map((image, index) => {
          const isActive = index === currentIndex;
          const slideClass = getSlidePosition(index);

          return (
            <div
              key={image.id}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                isActive ? "z-10" : "z-0"
              } ${slideClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
              {/* Overlay for better text readability - similar to campepicglobal.com */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

              {/* Content Overlay with slide animation - text changes with each slide */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`text-center text-white px-4 z-10 max-w-4xl mx-auto transition-all duration-1000 ease-in-out ${
                    isActive
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                >
                  {image.title && (
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 transform transition-all duration-1000">
                      {image.title}
                    </h1>
                  )}
                  {image.subtitle && (
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light transform transition-all duration-1000 delay-150">
                      {image.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows - styled similar to campepicglobal.com */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40 group"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator - styled similar to campepicglobal.com */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "w-8 md:w-10 h-3 md:h-3 bg-white shadow-lg"
                : "w-3 h-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
