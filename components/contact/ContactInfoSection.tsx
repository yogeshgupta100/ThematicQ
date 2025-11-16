"use client";

import AnimatedSection from "../AnimatedSection";

const contactInfo = [
  {
    title: "Email",
    value: "info@thematicq.com",
    icon: "✉️",
  },
  {
    title: "Phone",
    value: "+1 (555) 123-4567",
    icon: "📞",
  },
  {
    title: "Location",
    value: "Available Worldwide",
    icon: "📍",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection direction="fade" delay={0}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
            Other Ways to Reach Us
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contactInfo.map((info, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={200 + index * 100}
            >
              <div className="bg-gray-900 p-6 md:p-8 rounded-lg border border-gray-800 hover:border-teal-500 transition-all duration-300 group hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-2 text-center">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-teal-400 group-hover:text-teal-300 transition-colors">
                  {info.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {info.value}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
