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
    </section>
  );
}
