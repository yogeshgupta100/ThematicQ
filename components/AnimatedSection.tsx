"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate-y-12 opacity-0";
        case "down":
          return "-translate-y-12 opacity-0";
        case "left":
          return "translate-x-12 opacity-0";
        case "right":
          return "-translate-x-12 opacity-0";
        case "fade":
          return "opacity-0";
        default:
          return "translate-y-12 opacity-0";
      }
    }
    return "translate-y-0 translate-x-0 opacity-100";
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${getTransform()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={className}>{children}</div>
    </div>
  );
}
