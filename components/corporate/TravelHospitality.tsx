"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

const carouselImages = [
  {
    id: 1,
    src: "/assets/static/Images/Corporate/Final/img8.jpg",
    alt: "Corporate conference event",
  },
  {
    id: 2,
    src: "/assets/static/Images/Corporate/Final/img7.jpg",
    alt: "Business conference stage",
  },
  {
    id: 3,
    src: "/assets/static/Images/Corporate/Final/img6.jpg",
    alt: "Corporate event gathering",
  },
  {
    id: 4,
    src: "/assets/static/Images/Corporate/Final/img4.jpg",
    alt: "Corporate meeting and networking",
  },
  {
    id: 5,
    src: "/assets/static/Images/Corporate/img5.jpg",
    alt: "Corporate event setup",
  },
  {
    id: 6,
    src: "/assets/static/Images/Corporate/img6.jpg",
    alt: "Corporate presentation event",
  },
];

// Auto-slide disabled - manual navigation only

export default function TravelHospitality() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index !== currentIndex && !isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 800);
      }
    },
    [currentIndex, isAnimating]
  );

  // Auto-slide functionality disabled - manual navigation only

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Carousel with overlapping images */}
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden sm:overflow-visible">
          <div className="relative w-full max-w-6xl mx-auto h-full flex items-center justify-center">
            {carouselImages.map((image, index) => {
              const isCenter = index === currentIndex;
              const isLeft =
                index ===
                (currentIndex - 1 + carouselImages.length) %
                  carouselImages.length;
              const isRight =
                index === (currentIndex + 1) % carouselImages.length;

              // Calculate positions with overlap - responsive
              let positionClass = "";
              let sizeClass = "";
              let zIndex = "";
              let opacity = "";

              if (isCenter) {
                // On mobile, center image takes more space
                positionClass = "left-1/2 -translate-x-1/2";
                sizeClass = "w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] h-full";
                zIndex = "z-20";
                opacity = "opacity-100";
              } else if (isLeft) {
                // On mobile, hide side images or show smaller
                positionClass = "left-0 sm:left-[2%] md:left-[5%] lg:left-[8%]";
                sizeClass =
                  "hidden sm:block w-[25%] md:w-[32%] lg:w-[28%] h-[80%] sm:h-[85%]";
                zIndex = "z-10";
                opacity = "opacity-100";
              } else if (isRight) {
                positionClass =
                  "right-0 sm:right-[2%] md:right-[5%] lg:right-[8%]";
                sizeClass =
                  "hidden sm:block w-[25%] md:w-[32%] lg:w-[28%] h-[80%] sm:h-[85%]";
                zIndex = "z-10";
                opacity = "opacity-100";
              } else {
                // Hidden images
                positionClass =
                  index < currentIndex ? "-left-full" : "right-full";
                sizeClass = "w-[25%] md:w-[32%] lg:w-[28%] h-[80%] sm:h-[85%]";
                zIndex = "z-0";
                opacity = "opacity-0";
              }

              return (
                <div
                  key={image.id}
                  className={`absolute ${positionClass} ${sizeClass} ${zIndex} ${opacity} transition-all duration-700 ease-in-out rounded-lg overflow-hidden cursor-pointer`}
                  onClick={() => !isCenter && goToSlide(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, (max-width: 1024px) 55vw, 45vw"
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows - Responsive */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            disabled={isAnimating}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40 group active:scale-95 touch-manipulation"
            aria-label="Previous slide"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
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
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            disabled={isAnimating}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40 group active:scale-95 touch-manipulation"
            aria-label="Next slide"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
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

          {/* Dots Indicator - Responsive */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 sm:gap-2 md:gap-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                disabled={isAnimating}
                className={`rounded-full transition-all duration-500 disabled:opacity-50 touch-manipulation ${
                  index === currentIndex
                    ? "w-6 h-2 sm:w-8 sm:h-3 md:w-10 md:h-3 bg-white shadow-lg"
                    : "w-2 h-2 sm:w-3 sm:h-3 bg-white/50 hover:bg-white/75 cursor-pointer"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
