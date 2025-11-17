"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";
import { useParallax, useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TeamMember {
  src: string;
  alt: string;
  animationDirection: "left" | "right";
  aspectRatio: "vertical" | "horizontal" | "large-horizontal";
}

interface TeamImageCardProps {
  member: TeamMember;
  index: number;
}

function TeamImageCard({ member, index }: TeamImageCardProps) {
  const { ref: parallaxRef, offset } = useParallax(0.2);
  const { ref: animationRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const aspectClass =
    member.aspectRatio === "vertical"
      ? "aspect-[6/4]"
      : member.aspectRatio === "large-horizontal"
      ? "aspect-[10/9]"
      : "aspect-[4/3]";

  return (
    <div
      ref={animationRef}
      className={`relative ${aspectClass} rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-500 group cursor-pointer ${
        isVisible
          ? "translate-x-0 opacity-100"
          : member.animationDirection === "left"
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
          src={member.src}
          alt={member.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes={
            member.aspectRatio === "vertical"
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 50vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}

const teamMembers: TeamMember[] = [
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    alt: "Team Member 1",
    animationDirection: "left",
    aspectRatio: "vertical",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    alt: "Team Member 2",
    animationDirection: "right",
    aspectRatio: "vertical",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    alt: "Team Member 3",
    animationDirection: "left",
    aspectRatio: "large-horizontal",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    alt: "Team Member 4",
    animationDirection: "right",
    aspectRatio: "horizontal",
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    alt: "Team Member 5",
    animationDirection: "left",
    aspectRatio: "horizontal",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-white">
            Meet the Team: The Talented People Who Elaborate on the Images
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mb-12">
            <p>
              Our team is a collective of visionaries, strategists, and builders
              who work together to turn moments into history. Each member brings
              unique expertise, passion, and dedication to every project we
              undertake.
            </p>
            <p>
              We are specialists in our craft, committed to exceeding
              expectations through collaboration, openness, and collective
              achievement. Together, we don&apos;t just plan events—we create
              experiences that inspire, connect, and are remembered for years to
              come.
            </p>
          </div>
        </AnimatedSection>

        {/* Team Grid - Exact Layout: 2 vertical left, large horizontal + 2 horizontal right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left Column - 2 Vertical Images */}
          <div className="flex flex-col gap-4 md:gap-6">
            <TeamImageCard member={teamMembers[0]} index={0} />
            <TeamImageCard member={teamMembers[1]} index={1} />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Top Right - Large Horizontal Image */}
            <TeamImageCard member={teamMembers[2]} index={2} />

            {/* Bottom Right - 2 Horizontal Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <TeamImageCard member={teamMembers[3]} index={3} />
              <TeamImageCard member={teamMembers[4]} index={4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
