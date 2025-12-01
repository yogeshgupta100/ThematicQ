"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

const services = [
  {
    number: "01",
    title: "Wedding Themed Events and Design",
    description:
      "We create impactful wedding experiences designed to reflect your unique vision. From intimate ceremonies to grand celebrations, we transform your love story into a beautifully themed event that captures every meaningful moment.",
    images: [
      "/assets/static/Images/Themes/3 - Big/2f6f20373fc81956276c920cc9afb044.jpg",
      "/assets/static/Images/Themes/3 - Big/3e76e4bf5c7e89e85eb1715ae6bcec76.jpg",
      "/assets/static/Images/Themes/3 - Big/762e46feb9b9528d205552809c5af56a.jpg",
    ],
  },
  {
    number: "02",
    title: "Floral Decoration",
    description:
      "We craft breathtaking atmospheres using nature's charms, from stunning stage backdrops to elegant table arrangements. Our floral designs add depth, color, and emotion to your event, creating an immersive sensory experience.",
    images: [
      "/assets/static/Images/Themes/3 - Big/9cb7ef1a5c556133abe0bf13278535ce.jpg",
      "/assets/static/Images/Themes/3 - Big/e668bc3f0d7e05e40c6e027de32005c9.jpg",
      "/assets/static/Images/Themes/3 - Big/f6ab8d82db85eba1d434ea65eaa4603c.jpg",
    ],
  },
  {
    number: "03",
    title: "Festival Events",
    description:
      "Celebrate joy and togetherness with our innovative festival arrangements. We bring cultural festivities like Diwali, Christmas, Eid, and more to life with festive lights, engaging activities, and thoughtful decor that honors tradition while adding modern flair.",
    images: [
      "/assets/static/Images/Themes/4 - Collge etc/2e9a72fb638260bdf8579a4f4c913d89.jpg",
      "/assets/static/Images/Themes/4 - Collge etc/66107b1ac2a35b268e14e0c6953f6710.jpg",
      "/assets/static/Images/Themes/4 - Collge etc/b5fd954eb30c371dddc40a449bfa5e1d.jpg",
    ],
  },
  {
    number: "04",
    title: "College Events & Stalls",
    description:
      "We inject excitement into campus life with unforgettable youth-oriented experiences. From engaging setups to thoughtful event structures, we create vibrant spaces that energize students and make every college event memorable.",
    images: [
      "/assets/static/Images/Themes/4 - Collge etc/ddadcbfbc22bc0568dc7635848cc393d.jpg",
      "/assets/static/Images/Themes/IMG-20201210-WA0032.jpg",
      "/assets/static/Images/Themes/IMG-20201211-WA0014.jpg",
    ],
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
