"use client";

import AnimatedSection from "../AnimatedSection";

const reasons = [
  {
    title: "Creative Vision That Mirrors Yours",
    description:
      "We don&apos;t impose our ideas—we refine and elevate your vision. Our team works closely with you to understand your narrative, ensuring every element of your themed event reflects your unique story and resonates with your audience.",
  },
  {
    title: "Complete Thematic Execution",
    description:
      "From initial brainstorming to final execution, we oversee every detail. Our comprehensive approach ensures seamless delivery, from decor and lighting to entertainment and guest experience, all aligned with your chosen theme.",
  },
  {
    title: "Custom Designs, No Templates",
    description:
      "Every event is unique, and so should be its design. We create custom, one-of-a-kind experiences tailored specifically to your needs. No generic templates—just original, thoughtful design that tells your story.",
  },
  {
    title: "Merging Art with Sensation",
    description:
      "We go beyond visual appeal to evoke specific feelings—joy, love, nostalgia, excitement. Through storytelling techniques and sensory design, we create emotional connections that make your event truly unforgettable.",
  },
  {
    title: "Proven Experience & Professional Team",
    description:
      "With 5+ years of experience, we&apos;ve built a reputation for excellence. Our professional team combines creativity with precision, ensuring every themed event is orderly, inventive, and picture-perfect.",
  },
];

export default function WhyChooseThemeSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-center text-white">
            Why Choose ThematicQ for Your Themed Events
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Where creativity meets meaning.
          </p>
        </AnimatedSection>

        <div className="space-y-6 md:space-y-8">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 100}>
              <div className="bg-gray-900 p-6 md:p-8 rounded-lg border border-gray-800 hover:border-teal-500 transition-all duration-300 group hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-2">
                <h3 className="text-base md:text-lg font-medium mb-3 text-teal-400 group-hover:text-teal-300 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
