"use client";

import AnimatedSection from "../AnimatedSection";

const services = [
  {
    number: "01",
    title: "Wedding Themed Events and Design",
    description:
      "We create impactful wedding experiences designed to reflect your unique vision. From intimate ceremonies to grand celebrations, we transform your love story into a beautifully themed event that captures every meaningful moment.",
  },
  {
    number: "02",
    title: "Floral Decoration",
    description:
      "We craft breathtaking atmospheres using nature&apos;s charms, from stunning stage backdrops to elegant table arrangements. Our floral designs add depth, color, and emotion to your event, creating an immersive sensory experience.",
  },
  {
    number: "03",
    title: "Festival Events",
    description:
      "Celebrate joy and togetherness with our innovative festival arrangements. We bring cultural festivities like Diwali, Christmas, Eid, and more to life with festive lights, engaging activities, and thoughtful decor that honors tradition while adding modern flair.",
  },
  {
    number: "04",
    title: "College Events & Stalls",
    description:
      "We inject excitement into campus life with unforgettable youth-oriented experiences. From engaging setups to thoughtful event structures, we create vibrant spaces that energize students and make every college event memorable.",
  },
];

export default function ThemeSolutionsSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-center text-white">
            Theme Event Solutions We Offer
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            At ThematicQ, we transform abstract or conceptual ideas into
            seamless, memorable experiences. Whether it&apos;s a wedding, a
            national or cultural festival, or an end-of-semester event, we
            specialize in storytelling and embellishment that brings your vision
            to life.
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
