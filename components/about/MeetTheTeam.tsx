"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TeamMember {
  name: string;
  image: string;
  description: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const { ref: animationRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={animationRef}
      className={`flex flex-col transition-all duration-700 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm mb-6 group">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Name */}
      <h3 className="text-2xl md:text-3xl font-bold text-[#EBB964] mb-4">
        {member.name}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
        {member.description}
      </p>
    </div>
  );
}

const teamMembers: TeamMember[] = [
  {
    name: "Danish Pandit",
    image: "/assets/static/Images/About/Team/img1.jpg",
    description:
      "Danish is a South Asia-based multimedia journalist with a passion for visual storytelling, focusing on crucial issues. His extensive experience as a producer and independent journalist has allowed him to contribute to prominent media outlets, including The Guardian, Al Jazeera, The Wire, Business Insider, EuroNews, Vice, and TIME magazine. Danish's expertise in filming, editing, and reporting not only ensures the creation of impactful content but also enriches the narrative of events managed by our company. His ability to capture and convey significant social narratives enhances event experiences, engages audiences, and fortifies the thematic elements of various occasions.",
  },
  {
    name: "Ravish Ahamed",
    image: "/assets/static/Images/About/Team/img2.jpg",
    description:
      "Ravish is a result-driven professional with over 8 years of experience in client servicing, customer engagement, and event management. He excels in building relationships and enhancing customer satisfaction across various sectors. With a strong background in CRM strategies and data analysis, he has successfully led projects for corporate and government clients, delivering high-impact campaigns and activations. Currently focused on CRM-driven real estate projects, Ravish leverages personalized communication and cross-functional collaboration to ensure seamless execution and exceptional client experiences.",
  },
  {
    name: "Manvi Jauhari",
    image: "/assets/static/Images/About/Team/img3.jpg",
    description:
      "Manvi is currently pursuing a Master's of Science in Marketing at Hong Kong University of Science and Technology. With a dynamic background in event management, marketing, communications, and journalism, she excels in orchestrating seamless events while implementing comprehensive 360 marketing strategies. Her skills in optimizing workflows not only enhance operational efficiency but also ensure that every aspect of event planning and execution aligns with overarching marketing objectives. Holding a Post Graduation Diploma in Multimedia Journalism and a Bachelor's in Physics with a minor in Positive Psychology, Manvi brings a unique blend of analytical and creative skills.",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EBB964] mb-6">
            Our Team
          </h2>
          <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed max-w-5xl mb-16">
            <p>
              Visionaries, strategists, and builders, we work together to turn moments into history. Every ThematicQ Creation is a Story, and we work together to animate and bring it to Life. Every member is specialised and devoted to various aspects, including resource and creative production, design, event management, and working narratively with visuals.
            </p>
            <p>
              Across the various aspects, every resource and technical resource is devoted and well orchestrated to deliver elements that exceed expectations and create an experience the guests have never witnessed, leaving them shocked. Our values include collaboration, openness, and collective achievement. We cherish your story as our own.
            </p>
          </div>
        </AnimatedSection>

        {/* Team Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
