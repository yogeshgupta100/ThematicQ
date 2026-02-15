"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

const solutions = [
  {
    number: "1",
    title: "Product Launches",
    description:
      "Want to get people talking about your brand? Start with an impactful launch. We conceptualise and organise events that get people talking about your vision, attract your target market, and secure the ideal attendees.",
    images: [
      "/assets/static/Images/Corporate/Product Launch/img1.jpg",
      "/assets/static/Images/Corporate/Product Launch/img2.jpg",
      "/assets/static/Images/Corporate/Product Launch/img3.jpg",
    ],
  },
  {
    number: "2",
    title: "Have a Strong Team",
    description:
      "Great businesses have great teams, and that's what we aim to achieve with our team-building activities. These events are interactive, fun, and centred on achieving the desired outcomes.",
    images: [
      "/assets/static/Images/Corporate/Team Building/img1.jpg",
      "/assets/static/Images/Corporate/Team Building/img2.jpg",
      "/assets/static/Images/Corporate/Team Building/img3.jpg",
    ],
  },
  {
    number: "3",
    title: "Family Day",
    description:
      "Celebrate the people that you work with and their families. We foster a culture through fun events centred around our clients, their employees, and families, around games and activities for entertainment and engagement, and deeper bonding for integration.",
    images: [
      "/assets/static/Images/Corporate/Family Day Event/img1.jpg",
      "/assets/static/Images/Corporate/Family Day Event/img2.jpg",
      "/assets/static/Images/Corporate/Family Day Event/img3.jpg",
    ],
  },
  {
    number: "4",
    title: "Celebrate Annual Days",
    description:
      "Milestones and successful moments deserve to be celebrated. Elegant award nights and exciting stage performances can achieve just that. We highlight your company's culture, the journey it took to get there, and everything it has accomplished.",
    images: [
      "/assets/static/Images/Corporate/Annual Day/img1.jpg",
      "/assets/static/Images/Corporate/Annual Day/img2.jpg",
      "/assets/static/Images/Corporate/Annual Day/img3.jpg",
    ],
  },
  {
    number: "5",
    title: "Conferences & Seminars",
    description:
      "Whether it is a small meeting or a large conference, we handle everything. Venue setup and guest coordination of audio-visual equipment, decor, and lighting.",
    images: [
      "/assets/static/Images/Corporate/Conference & Seminars/img1.jpg",
      "/assets/static/Images/Corporate/Conference & Seminars/img2.jpg",
      "/assets/static/Images/Corporate/Conference & Seminars/img3.jpg",
    ],
  },
  {
    number: "6",
    title: "Rewards & Recognition Events",
    description:
      "Recognition events should celebrate excellence, and we do just that. We design prestigious ceremonies that celebrate the highly desired and inspire the rest to strive for success.",
    images: [
      "/assets/static/Images/Corporate/Rewards & Recognition Events/img1.jpg",
      "/assets/static/Images/Corporate/Rewards & Recognition Events/img2.jpg",
      "/assets/static/Images/Corporate/Rewards & Recognition Events/img3.jpg",
    ],
  },
  {
    number: "7",
    title: "Gifting & Merchandising",
    description:
      "Meaningful gifts make strong brand connections. We build distinctive, branded gifts that make a statement -from sophisticated gift baskets to imaginative promotional products.",
    images: [
      "/assets/static/Images/Corporate/Gifting & Merch/img1.webp",
      "/assets/static/Images/Corporate/Gifting & Merch/img2.webp",
      "/assets/static/Images/Corporate/Gifting & Merch/img3.webp",
    ],
  },
];

export default function CorporateSolutions() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-white">
            Corporate Event Solutions We Offer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl">
            From planning to executing a corporate event, we handle everything
            with creativity, accuracy, and impact.
          </p>
        </AnimatedSection>

        <div className="space-y-8 md:space-y-12">
          {solutions.map((solution, index) => (
            <AnimatedSection key={index} direction="right" delay={index * 100}>
              <div className="flex gap-6 md:gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-500 bgyllow flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-black">
                    {solution.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-medium mb-3 text-white">
                    {solution.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  {solution.images && solution.images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6">
                      {solution.images.map((imageUrl, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative aspect-[4/3] rounded-lg overflow-hidden border border-500/20 hover:border-500/50 bor-yellow-hoeffer transition-all duration-300 group"
                        >
                          <Image
                            src={imageUrl}
                            alt={`${solution.title} - Image ${imgIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 bor-yellow"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
