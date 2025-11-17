import Image from "next/image";

export default async function ProductionHeader() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80"
        alt="Event Production"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-4 text-white">
            Event Production
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300">
            Where Creativity Meets Flawless Execution
          </p>
        </div>
      </div>
    </section>
  );
}
