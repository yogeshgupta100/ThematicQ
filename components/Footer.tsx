import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm text-white py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo Section with multi-colored TQ icon */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Image
              src="/assets/images/logo_color.png"
              alt="ThematicQ Logo"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>

          {/* Additional footer content can be added here */}
          <div className="text-center md:text-right">
            <p className="text-sm md:text-base text-black">
              © {new Date().getFullYear()} ThematicQ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
