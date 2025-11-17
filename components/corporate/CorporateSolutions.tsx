"use client";

import AnimatedSection from "../AnimatedSection";

const solutions = [
  {
    number: "1",
    title: "Product Launches",
    description:
      "Want to get people talking about your brand? Start with an impactful launch. We conceptualise and organise events that get people talking about your vision, attract your target market, and secure the ideal attendees. We generate hype and excitement that lasts. We take care of everything from stage and experience design to the product debut.",
  },
  {
    number: "2",
    title: "Have a Strong Team",
    description:
      "Great businesses have great teams, and that's what we aim to achieve with our team-building activities. These events are interactive, fun, and centred on achieving the desired outcomes. We have a unified vision for your team and also seek to increase morale through adventures, creative tasks, and workshops.",
  },
  {
    number: "3",
    title: "Family Day",
    description:
      "Celebrate the people that you work with and their families. We foster a culture through fun events centred around our clients, their employees, and families, around games and activities for entertainment and engagement, and deeper bonding for integration. Allow people to integrate together through events focused on the family.",
  },
  {
    number: "4",
    title: "Celebrate Annual Days",
    description:
      "Milestones and successful moments deserve to be celebrated. Elegant award nights and exciting stage performances can achieve just that. We highlight your company's culture, the journey it took to get there, and everything it has accomplished. Every celebration is designed to inspire joy and motivation among your target audience.",
  },
  {
    number: "5",
    title: "Conferences & Seminars",
    description:
      "Whether it is a small meeting or a large conference, we handle everything. Venue setup and guest coordination of audio-visual equipment, decor, and lighting. We ensure an organised, seamless flow with professionalism so that each session is enriched with knowledge, and beneficial relationships are formed.",
  },
  {
    number: "6",
    title: "Rewards & Recognition Events",
    description:
      "Recognition events should celebrate excellence, and we do just that. We design prestigious ceremonies that celebrate the highly desired and inspire the rest to strive for success. Recognition is a powerful motivator, and every detail-from stage design to the setting-is dedicated to making recipients feel important.",
  },
  {
    number: "7",
    title: "Gifting & Merchandising",
    description:
      "Meaningful gifts make strong brand connections. We build distinctive, branded gifts that make a statement -from sophisticated gift baskets to imaginative promotional products. Each gift embodies your brand and fosters positive sentiment among employees, customers, and stakeholders.",
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
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-teal-500 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-black">
                    {solution.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-medium mb-3 text-white">
                    {solution.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    {solution.description}
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
