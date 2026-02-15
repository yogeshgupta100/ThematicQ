"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  smtitle?: string;
}

const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: "/assets/images/carousel1.webp",
    alt: "Modern workspace",
    title: "The Event Story Tellers",
    subtitle: "Question quality qoutient",
    smtitle: "At the end of the day, people might forget the menu, but they will never forget how your story made them feel.",
  },
  {
    id: 2,
    src: "/assets/images/carousel2.webp",
    alt: "Business growth",
    title: "We turn your 'What If' into 'What Just Happened'.",
    subtitle: " ",
     smtitle: " ",
  },
  {
    id: 3,
    src: "/assets/images/carousel3.webp",
    alt: "Team collaboration",
    title: "From Mice to Marketing We got you covered.",
    subtitle: "",
     smtitle: " ",
  },
];

const AUTO_SLIDE_INTERVAL = 3000;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTextRefreshing, setIsTextRefreshing] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { ref: heroAnimationRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setIsTextRefreshing(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setIsTextRefreshing(false), 100);
    }, 1000);
  }, [isAnimating]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setIsTextRefreshing(true);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setIsTextRefreshing(false), 100);
    }, 1000);
  }, [isAnimating]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index !== currentIndex && !isAnimating) {
        setIsAnimating(true);
        setIsTextRefreshing(true);
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
        setTimeout(() => {
          setIsAnimating(false);
          setTimeout(() => setIsTextRefreshing(false), 100);
        }, 1000);
      }
    },
    [currentIndex, isAnimating]
  );

  useEffect(() => {
    const interval = setInterval(goToNext, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [goToNext]);

  const getSlidePosition = (index: number) => {
    if (index === currentIndex) return "translate-x-0";

    const diff = index - currentIndex;

    if (direction === "right") {
      if (diff < 0) return "-translate-x-full";
      return "translate-x-full";
    } else {
      if (diff > 0) return "translate-x-full";
      return "-translate-x-full";
    }
  };

  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden">
      <div
        ref={heroAnimationRef}
        className={`relative w-full h-full transition-all duration-1000 ease-out ${
          heroVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-8 opacity-0 scale-95"
        }`}
      >
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

              {isActive && (
                <div className="max-wde  absolute inset-0 flex items-center justify-center">
                  <div
                    className={`text-left text-white px-4 z-10 max-w-9xl mx-auto transition-all duration-1000 ease-out ${
                      isTextRefreshing
                        ? "opacity-0 translate-y-8 scale-95"
                        : "opacity-100 translate-y-0 scale-100"
                    }`}
                    style={{
                      transitionDelay: isTextRefreshing ? "0ms" : "200ms",
                    }}
                  >
                    {image.title && (
                      <h1 className="slidertxt max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-medium mb-4 md:mb-6">
                        {image.title}
                      </h1>
                    )}
                    {image.subtitle && (
                      <p
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light transition-all duration-1000 ease-out"
                        style={{
                          transitionDelay: isTextRefreshing ? "0ms" : "400ms",
                        }}
                      >
                        {image.subtitle}
                      </p>
                    )}

                        {image.smtitle && (
                      <p
                        className="text-lg mt-6 sm:text-xl md:text-1xl lg:text-1xl font-light transition-all duration-1000 ease-out"
                        style={{
                          transitionDelay: isTextRefreshing ? "0ms" : "400ms",
                        }}
                      >
                        {image.smtitle}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

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
