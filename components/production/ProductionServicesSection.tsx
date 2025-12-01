"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

const services = [
  {
    number: "01",
    title: "Stage, Sound & Lighting",
    description:
      "We design stages that hold attention, using the latest equipment and meticulous artistic precision. We ensure light, sound, and emotion are in sync for captivating cinematic experiences that leave lasting impressions.",
    images: [
      "/assets/static/Images/Production/1a1bdc739c2b60944c50f3749ec2dec6.jpg",
      "/assets/static/Images/Production/3875c1caed367201d23bd55760187b57.jpg",
      "/assets/static/Images/Production/IMG-20250227-WA0009.jpg",
    ],
  },
  {
    number: "02",
    title: "Fabrication",
    description:
      "Our in-house fabrication crew constructs magnificent and robust, attention-grabbing, and sensitive structures. With craftsmanship, precision, and design brilliance as building blocks, we create complex stage sets that bring your vision to life.",
    images: [
      "/assets/static/Images/Production/IMG-20250227-WA0010.jpg",
      "/assets/static/Images/Production/IMG-20250228-WA0007.jpg",
      "/assets/static/Images/Production/IMG-20250228-WA0008.jpg",
    ],
  },
  {
    number: "03",
    title: "Creativity and Construction Cross Paths",
    description:
      "We keep event setup professional and creative, ensuring the setup serves as a centrepiece rather than just a supporting element. Our approach merges artistic vision with technical excellence.",
    images: [
      "/assets/static/Images/Production/IMG-20250228-WA0010.jpg",
      "/assets/static/Images/Production/IMG-20250706-WA0003.jpg",
      "/assets/static/Images/Production/IMG-20250815-WA0001.jpg",
    ],
  },
  {
    number: "04",
    title: "Your Event Is More Than Just Visuals",
    description:
      "Our content creation team provides storytelling elements to boost brand and captivate the audience. We offer live and digital experiences to enhance emotional connection and ensure an unforgettable message that resonates.",
    images: [
      "/assets/static/Images/Production/IMG-20250815-WA0002.jpg",
      "/assets/static/Images/Production/IMG-20250903-WA0027.jpg",
      "/assets/static/Images/Production/IMG-20250903-WA0028.jpg",
    ],
  },
  {
    number: "05",
    title: "Fashion Show Production",
    description:
      "We make fashion shows come alive with precision, ensuring high-energy fashion shows mesmerise the audience. Everything, including the outfits, the models, and every cue, is perfectly synchronised for a flawless runway experience.",
    images: [
      "/assets/static/Images/Production/3 - Fashion Show etc/4f0d96736e2be70ca13d55b333e3adfa.jpg",
      "/assets/static/Images/Production/3 - Fashion Show etc/9f7dc0d68673433bca362265131881dd.jpg",
      "/assets/static/Images/Production/3 - Fashion Show etc/f2876b9dcde259ed946c0b74ada55bda.jpg",
    ],
  },
  {
    number: "06",
    title: "Artist Management",
    description:
      "We prioritize booking artists, coordinating schedules, managing hospitality, and handling technical logistics to ensure a seamless performance that makes a connection. Our artist management ensures every performer shines.",
    images: [
      "/assets/static/Images/Production/3 Mix/1ac0bbf029ecc5539f1d613ae76b2422.jpg",
      "/assets/static/Images/Production/3 Mix/553f2c0dd9e75c3852bbcc509aec4a63.jpg",
      "/assets/static/Images/Production/3 Mix/75f3c2b92d8f2a02e599c761825a97c9.jpg",
    ],
  },
];

export default function ProductionServicesSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-center text-white">
            Our Event Production Services Include
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            At ThematicQ, we merge innovation, artistry, and imagination to
            create unforgettable event experiences. Every component of your
            production is geared to your theme, your audience.
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
                    <h3 className="text-lg md:text-xl font-medium mb-4 text-teal-400">
                      {service.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    {/* Image Grid - 3 images */}
                    {service.images && service.images.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6">
                        {service.images.map((imageUrl, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative aspect-[4/3] rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 group"
                          >
                            <Image
                              src={imageUrl}
                              alt={`${service.title} - Image ${imgIndex + 1}`}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        ))}
                      </div>
                    )}
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
