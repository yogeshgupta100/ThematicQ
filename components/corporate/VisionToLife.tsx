"use client";

import AnimatedSection from "../AnimatedSection";

const processSteps = [
  {
    number: "1",
    title: "Discovery & Concept",
    description:
      "We start by understanding your goals, audience, and vision. We highlight the emotions and key messages to communicate to the audience, helping us uncover the story you want to tell.",
  },
  {
    number: "2",
    title: "Design & Strategy",
    description:
      "Our creative team then shapes your story into a plan. We design events, themes, visuals, and engagement strategies tailored to your brand and budget, ensuring the presence of 'Q Factor' in all our designs.",
  },
  {
    number: "3",
    title: "Production & Coordination",
    description:
      "From lighting to logistics, we handle every detail. We manage everything on-site, allowing you to enjoy the event while we work our magic in the background.",
  },
  {
    number: "4",
    title: "Execution & Experience",
    description:
      "The magic happens here. We put your plans into action, telling your story with energy, passion, and emotion to create lasting memories.",
  },
  {
    number: "5",
    title: "Post-Event Follow-Up",
    description:
      "The event ends, but our work continues. We analyse the data, assess the results, and help you scale for bigger, more meaningful events in the future.",
  },
];

export default function VisionToLife() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-white">
            Bringing Your Vision To Life
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl">
            Our Process Is Simple, Creative, and Focused on You.
          </p>
        </AnimatedSection>

        <div className="space-y-8 md:space-y-12">
          {processSteps.map((step, index) => (
            <AnimatedSection key={index} direction="left" delay={index * 100}>
              <div className="flex gap-6 md:gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-teal-500 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-black">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-medium mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
