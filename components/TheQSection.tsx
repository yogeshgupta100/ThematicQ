"use client";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";


export default function TheQSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>


      <div className="imglebxe max-w-7xl mx-auto">
        <div className="container mx-auto">
    <Image
              src="/assets/images/why-img.webp"
              alt="ThematicQ Logo"
              width={480}
              height={480}
              className="wi50"
            />

            <div className="rightonct">
<h4 className="tetext-2xl md:text-3xl lg:text-4xl font-medium">Why us?</h4>
<p>When you work with ThematicQ, you aren&apos;t hiring a coordinator; you are partnering with a team that views your event as a living, breathing narrative. We don&apos;t just fill a room; we <span> create a moment</span> in time that stays with people long after the lights go down.</p>

            </div>

            
</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 hidden">
        <AnimatedSection direction="fade" delay={0}>
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              At ThematicQ, we are the event storytellers.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
              ThematicQ is not simply a name; it represents our passion for
              creating experiences, not just customising an event around a set
              schedule. We craft stories to help people remember, and we set out
              to create events inspired by emotion and meaning to achieve the
              intended goal.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <AnimatedSection direction="up" delay={100}>
            <div className="text-center group">
              <h2 className="text-lg md:text-xl font-medium mb-4 text-white">
                Q for question.
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We ask every client, &apos;What emotion would you like people to
                live with?&apos; Joy? connection? excitement? The answers help
                focus the event around a target emotion.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <div className="text-center group">
              <h2 className="text-lg md:text-xl font-medium mb-4 text-white">
                Q for Quality.
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We believe every story is a masterpiece only if it is executed
                to perfection. We focus on every little detail, from concept to
                the final &apos;thank you&apos;.
              </p>
              <p className="text-teal-400 text-sm italic">
                Our circle of Q represents complete quality — full focus and no
                corners cut.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={300}>
            <div className="text-center group">
              <h2 className="text-lg md:text-xl font-medium mb-4 text-white">
                Q for Quotient.
              </h2>
              <p className="text-gray-300 leading-relaxed">
                A quotient is a result — a lasting impact of your event. We call
                it the &apos;wow&apos; moment, where your guests appreciate your
                story and feel a connection. This is the measure of success we
                strive for in each event designed for you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
