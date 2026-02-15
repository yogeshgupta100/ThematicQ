"use client";

import AnimatedSection from "./AnimatedSection";

export default function WhyChooseSection() {
  const features = [
    {
      title: "Creative Storytelling Approach",
      description:
        "We believe every detail, no matter how small, matters. From lighting to flowers and feels just right.",
    },
    {
      title: "Detail-Driven Perfection",
      description:
        "We believe every detail, no matter how small, matters. From lighting to flowers and feels just right.",
    },
    {
      title: "Experienced Team You Can Trust",
      description:
        "After five years of industry experience, we know how to make any event shine. You dream it, we plan, manage, and deliver it.",
    },
    {
      title: "Customised for You",
      description:
        "Not all events are ever the same. We listen to your goals and craft experiences tailored to your audience and message. Every story deserves a personal touch.",
    },
    {
      title: "End-to-End Execution",
      description:
        "We take care of everything from idea generation to the finishing touches of the event, so you only have to show up.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-center text-white">
            Why Choose ThematicQ?
          </h2>
          {/* <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            At ThematicQ, We aim to make every gathering meaningful, befitting;
            that&apos;s why we are known as the top corporate event management
            company.
          </p> */}
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 100}>
              <div className="bg-gray-900 p-6 md:p-8 rounded-lg border border-gray-800 hover:border-500 transition-all duration-300 group hover:shadow-lg hover:shadow--500/20 hover:-translate-y-2">
                <h3 className="text-base md:text-lg font-medium mb-3 text-400 group-hover:text-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
