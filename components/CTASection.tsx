"use client";

import AnimatedSection from "./AnimatedSection";
import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <AnimatedSection direction="fade" delay={0}>
          <button
            className="px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-semibold border-2 border-yellow-500 text-white rounded-lg hover:bg-yellow-500 transition-all duration-300"
            onClick={() => (window.location.href = "/contact")}
          >
            Lets Talk
          </button>
        </AnimatedSection>
      </div>

      <div className="clodog">     <div className="max-w-7xl mx-auto text-center relative z-10">

        <div class=""><h2 class="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 mt-12 text-center text-white"> Our Partners </h2></div>
        <ul>
<li> 
    <Image
      src="/assets/static/Images/Homepage/logos/1.webp"
      width={500}
      height={500}
      alt="Picture of the author"
    />  
</li>


<li> 
    <Image
      src="/assets/static/Images/Homepage/logos/3.webp"
      width={500}
      height={500}
      alt="Picture of the author"
    />  
</li>

<li> 
    <Image
      src="/assets/static/Images/Homepage/logos/4.webp"
      width={500}
      height={500}
      alt="Picture of the author"
    />  
</li>

<li> 
    <Image
      src="/assets/static/Images/Homepage/logos/5.webp"
      width={500}
      height={500}
      alt="Picture of the author"
    />  
</li>

<li> 
    <Image
      src="/assets/static/Images/Homepage/logos/6.webp"
      width={500}
      height={500}
      alt="Picture of the author"
    />  
</li>



<li> 
    <Image
      src="/assets/static/Images/Homepage/logos/8.webp"
      width={500}
      height={500}
      alt="Picture of the author"
    />  
</li>

<li> 
    <Image
      src="/assets/static/Images/Homepage/logos/9.webp"
      width={500}
      height={500}
      alt="Picture of the author"
    />  
</li>



<li> 
    <Image
      src="/assets/static/Images/Homepage/logos/11.webp"
      width={500}
      height={500}
      alt="Picture of the author"
    />  
</li>

        </ul>
        </div></div>
    </section>
  );
}
