"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CorporateHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/assets/static/Images/Corporate/Final/banner-final.jpg"
          alt="Corporate Event"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 transition-opacity duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </section>
  );
}
