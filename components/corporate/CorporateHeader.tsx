import Image from "next/image";

export default async function CorporateHeader() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
        alt="Corporate Event"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
    </section>
  );
}
