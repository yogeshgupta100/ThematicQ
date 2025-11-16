"use client";

import AnimatedSection from "../AnimatedSection";

const services = [
  {
    number: "01",
    title: "Stage, Sound & Lighting",
    description:
      "We design stages that hold attention, using the latest equipment and meticulous artistic precision. We ensure light, sound, and emotion are in sync for captivating cinematic experiences that leave lasting impressions.",
  },
  {
    number: "02",
    title: "Fabrication",
    description:
      "Our in-house fabrication crew constructs magnificent and robust, attention-grabbing, and sensitive structures. With craftsmanship, precision, and design brilliance as building blocks, we create complex stage sets that bring your vision to life.",
  },
  {
    number: "03",
    title: "Creativity and Construction Cross Paths",
    description:
      "We keep event setup professional and creative, ensuring the setup serves as a centrepiece rather than just a supporting element. Our approach merges artistic vision with technical excellence.",
  },
  {
    number: "04",
    title: "Your Event Is More Than Just Visuals",
    description:
      "Our content creation team provides storytelling elements to boost brand and captivate the audience. We offer live and digital experiences to enhance emotional connection and ensure an unforgettable message that resonates.",
  },
  {
    number: "05",
    title: "Fashion Show Production",
    description:
      "We make fashion shows come alive with precision, ensuring high-energy fashion shows mesmerise the audience. Everything, including the outfits, the models, and every cue, is perfectly synchronised for a flawless runway experience.",
  },
  {
    number: "06",
    title: "Artist Management",
    description:
      "We prioritize booking artists, coordinating schedules, managing hospitality, and handling technical logistics to ensure a seamless performance that makes a connection. Our artist management ensures every performer shines.",
  },
];

export default function ProductionServicesSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white">
            Our Event Production Services Include
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            From setup to the finale, we take charge of everything with
            originality and enthusiasm. At ThematicQ, we merge innovation,
            artistry, and imagination to create unforgettable event experiences.
            Every component of your production is geared to your theme, your
            audience. It ensures a flawless transition from start to finish.
          </p>
        </AnimatedSection>

        <div className="space-y-8 md:space-y-12">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={300 + index * 100}
            >
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0">
                    <span className="text-6xl md:text-7xl font-bold text-teal-500/30">
                      {service.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-teal-400">
                      {service.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
