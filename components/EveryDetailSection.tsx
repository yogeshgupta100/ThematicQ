"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function EveryDetailSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Text Content */}
          <AnimatedSection direction="right" delay={0}>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-white">
                Every Details Counts
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                ThematicQ has become a reliable name in both event planning and
                storytelling for over five years, and that is because of the
                belief we carry: Every minor detail, in fact, every part is
                essential — right from the very first idea, to the very last
                moment. Our experienced team works with you to design custom
                event journeys tailored to your objectives, audience, and
                identity. We pride ourselves on smart planning, seamless
                coordination, and clear communication. Every detail from concept
                to completion, is designed to tell your story and make the
                desired impact.
              </p>
            </div>
          </AnimatedSection>

          {/* Images - Large camera on right, three smaller on left */}
          <AnimatedSection direction="left" delay={200}>
            <div className="relative flex gap-4">
              {/* Three smaller images stacked on left */}
              <div className="flex flex-col gap-4 w-1/3">
                <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 group">
                  <Image
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80"
                    alt="Event Photo"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 33vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 group">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80"
                    alt="Abstract Image"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 33vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 group">
                  <Image
                    src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&q=80"
                    alt="Textured Image"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 33vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Large camera image on right */}
              <div className="relative w-2/3 h-96 md:h-[500px] rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 group">
                <Image
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
                  alt="Camera Image"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 66vw, 600px"
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
