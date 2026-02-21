"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* =========================================
   Scroll Animation Hook (Built-in)
========================================= */
function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return { ref, isVisible };
}

/* =========================================
   Types
========================================= */
interface TeamMember {
  name: string;
  role?: string; // Optional heading below name
  image: string;
  description: string; // Supports <strong> and <b>
}

/* =========================================
   Team Card Component
========================================= */
function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`flex flex-col transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md mb-6 group">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>

      {/* Name */}
      <h3 className="text-2xl md:text-3xl font-bold text-[#EBB964]">
        {member.name}
      </h3>

      {/* Optional Role */}
      {member.role && (
        <h4 className="text-sm md:text-base font-semibold text-white mt-2 mb-4 tracking-wide">
          {member.role}
        </h4>
      )}

      {/* Description (Supports Bold Tags) */}
      <p
        className="text-gray-300 text-sm md:text-base leading-relaxed"
        dangerouslySetInnerHTML={{ __html: member.description }}
      />
    </div>
  );
}

/* =========================================
   Manual Data (Editable)
========================================= */
const teamMembers: TeamMember[] = [
  {
    name: "Danish Pandit",
    role: "Head of Client Service",
    image: "/assets/images/Danish.jpeg",
    description:
      "Danish is a South Asia-based multimedia journalist with a passion for visual storytelling. He has contributed to <strong>The Guardian</strong>, <strong>Al Jazeera</strong>, and <b>TIME Magazine</b>. His expertise in filming, editing, and reporting ensures the creation of impactful and immersive event narratives.",
  },
  {
    name: "Ravish Ahmad",
    role: "Operations, Production & Execution",
    image: "/assets/images/Ravish.jpeg",
    description:
      "With over a decade of experience, Ravish creates <strong>impactful, well-executed events</strong>. He believes great events aren’t just organized — they are <b>strategically crafted</b>, flawlessly managed, and remembered long after they end.",
  },
  {
    name: "Manvi Jauhari",
    role: "Creative Director",
    image: "/assets/images/manvi.jpg",
    description:
      "Manvi specializes in <strong>360° marketing strategies</strong> and seamless event execution. With expertise in journalism and analytics, she blends <b>creativity and precision</b> to deliver high-performance campaigns.",
  },
];

/* =========================================
   Main Component
========================================= */
export default function MeetTheTeam() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="bg-black text-white py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EBB964] mb-6">
            Our Team
          </h2>

          <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed max-w-5xl mb-16">
            <p>
              Visionaries, strategists, and builders — we work together to turn
              moments into history. Every creation is a story, and we bring it
              to life through creativity and precision.
            </p>
            <p>
              Collaboration, openness, and collective excellence define us.
              Every event is crafted to exceed expectations and create
              unforgettable experiences.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
