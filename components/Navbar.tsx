"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent }: NavbarProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Use prop if provided, otherwise use scroll detection
  const shouldBeTransparent =
    transparent !== undefined ? transparent : isHomePage && !isScrolledPastHero;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const servicesItems = [
    {
      title: "Corporate",
      description: "Professional corporate events and conferences",
      image: "/assets/static/Images/Corporate/Final/banner-final.jpg",
      href: "/services/corporate",
    },
    {
      title: "Theme Event",
      description: "Themed celebrations and special occasions",
      image: "/assets/static/Images/Themes/images/small/img5.jpg",
      href: "/services/theme-event",
    },
    {
      title: "Production",
      description: "Event production and execution services",
      image: "/assets/static/Images/Production/banner.png",
      href: "/services/production",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-montserrat ${
        shouldBeTransparent ? "bg-transparent backdrop-blur-sm" : "bg-black"
      }`}
    >
      <div className="max-w-100vw mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 h-full md:gap-4 group z-50"
            onClick={() => {
              setIsMobileMenuOpen(false);
              router.push("/");
            }}
          >
            <div className="relative h-full w-auto min-w-[100px] sm:min-w-[120px] md:min-w-[150px] mt-[12px] sm:mt-[16px]">
              <Image
                src="/assets/images/logo_white.png"
                alt="ThematicQ Logo"
                fill
                className="object-cover object-left"
                priority
                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 p-2 text-white hover:text-teal-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 md:gap-14">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isServices = link.label === "Services";

              const handleMouseEnter = () => {
                if (isServices) {
                  if (hoverTimeout) {
                    clearTimeout(hoverTimeout);
                    setHoverTimeout(null);
                  }
                  setIsServicesHovered(true);
                }
              };

              const handleMouseLeave = () => {
                if (isServices) {
                  const timeout = setTimeout(() => {
                    setIsServicesHovered(false);
                  }, 200);
                  setHoverTimeout(timeout);
                }
              };

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href === "/services" ? "" : link.href}
                    className={`text-sm md:text-2xl font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-teal-400"
                        : "text-white hover:text-teal-400"
                    }`}
                  >
                    {link.label}
                  </Link>

                  {/* Services Dropdown */}
                  {isServices && isServicesHovered && (
                    <>
                      {/* Invisible bridge to prevent gap */}
                      <div
                        className="absolute top-full left-0 right-0 h-4 z-50"
                        onMouseEnter={handleMouseEnter}
                      ></div>
                      <div
                        className="fixed left-0 right-0 top-20 md:top-24 pt-4 z-50"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="w-full px-4 md:px-8">
                          <div className="bg-black border border-teal-500/30 rounded-lg overflow-hidden shadow-2xl max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                              {servicesItems.map((item, index) => (
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="group relative overflow-hidden hover:bg-gray-900 transition-colors duration-300"
                                >
                                  <div className="relative h-48 md:h-56">
                                    <Image
                                      src={item.image}
                                      alt={item.title}
                                      fill
                                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                                      sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                                      <h3 className="text-sm md:text-base font-medium text-white mb-2 group-hover:text-teal-400 transition-colors">
                                        {item.title}
                                      </h3>
                                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 right-0 bottom-0 bg-black z-40 md:hidden transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="pt-20 px-4 pb-8 h-full overflow-y-auto">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const isServices = link.label === "Services";

                  return (
                    <div key={link.href} className="relative">
                      <Link
                        href={link.href === "/services" ? "" : link.href}
                        onClick={() => {
                          if (!isServices) {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`text-xl font-medium transition-colors duration-200 block py-2 ${
                          isActive
                            ? "text-teal-400"
                            : "text-white hover:text-teal-400"
                        }`}
                      >
                        {link.label}
                      </Link>

                      {/* Mobile Services Dropdown */}
                      {isServices && (
                        <div className="mt-4 space-y-4 pl-4">
                          {servicesItems.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block group"
                            >
                              <div className="relative h-32 rounded-lg overflow-hidden border border-teal-500/20">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                  sizes="100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                <div className="absolute inset-0 flex flex-col justify-end p-4">
                                  <h3 className="text-xs font-medium text-white mb-1 group-hover:text-teal-400 transition-colors">
                                    {item.title}
                                  </h3>
                                  <p className="text-xs text-gray-300">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
