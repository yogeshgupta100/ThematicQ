"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function ServicesSection() {
  const services = [
    {
      title: "Corporate Events",
      description:
        "We enable brands to craft meaningful connections with their audience and energy at every corporate occasion, we organise product launches, award ceremony, event management, and reward ceremonies. Concept, design, logistics, and on-site execution are all handled so you can focus on guests while we take care of everything.",
    },
    {
      title: "Theme Events",
      description:
        "Every occasion and every celebration deserves its own identity and soul. We design concepts for weddings and their floral decorations, haldi ceremony, home ceremony decoration as well as for festival celebrations. We transform your ideas into amazing, vivid experiences in organising college festivals and in making wedding arrangements.",
    },
    {
      title: "Production and Execution",
      description:
        "We believe in making magic behind the curtain, too. Your event will not only run smoothly but also have a professional feel, look, and magic thanks to our expert production team. We take care of stage design, sound, and lighting for all events, fashion shows, artist management, and more.",
    },
    {
      title: "Digital Marketing",
      description:
        "We take your story beyond the event hall and into the digital world. Our digital marketing experts help your brand grow online through smart campaigns, audience targeting, and measurable results.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-center text-white">
            Our Services/Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            At ThematicQ, we believe each occasion is a story waiting to be
            told. Creativity, planning, and effortless execution are what help
            make your dream come to life, no matter what the size or style. We
            are not only just a wedding planners in Delhi, but we also provide
            other services across the globe.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Services List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                direction="right"
                delay={index * 100}
              >
                <div className="border-l-4 border-teal-500 pl-6 group hover:border-teal-400 transition-colors duration-300">
                  <h3 className="text-lg md:text-xl font-medium mb-3 text-teal-400 group-hover:text-teal-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Images */}
          <AnimatedSection direction="left" delay={200}>
            <div className="space-y-6">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 group">
                <Image
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
                  alt="Outdoor Event Setup"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 group">
                <Image
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
                  alt="Indoor Conference Hall"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
