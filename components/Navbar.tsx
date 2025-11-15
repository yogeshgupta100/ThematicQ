"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent }: NavbarProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  // Detect scroll position to change navbar background
  useEffect(() => {
    if (!isHomePage) {
      setIsScrolledPastHero(true);
      return;
    }

    const handleScroll = () => {
      // Hero section is full screen (100vh), so check if scrolled past viewport height
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsScrolledPastHero(scrollPosition > heroHeight - 100); // Add small offset for smoother transition
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Use prop if provided, otherwise use scroll detection
  const shouldBeTransparent =
    transparent !== undefined ? transparent : isHomePage && !isScrolledPastHero;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-montserrat ${
        shouldBeTransparent ? "bg-transparent backdrop-blur-sm" : "bg-black"
      }`}
    >
      <div className="max-w-100vw mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 h-full md:gap-4 group"
          >
            <div className="relative h-full w-auto min-w-[120px] md:min-w-[150px] mt-[16px]">
              <Image
                src="/assets/images/logo_white.png"
                alt="ThematicQ Logo"
                fill
                className="object-cover object-left"
                priority
                sizes="(max-width: 768px) 120px, 150px"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 md:gap-14">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm md:text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-teal-400"
                      : "text-white hover:text-teal-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
