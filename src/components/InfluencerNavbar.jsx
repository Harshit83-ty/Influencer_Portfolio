import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { influencerInfo } from "../data/influencerData";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Social", href: "#social" },
  { name: "Collaborations", href: "#collaborations" },
  { name: "Gallery", href: "#gallery" },
  { name: "Packages", href: "#packages" },
  { name: "Contact", href: "#contact" },
];

export default function InfluencerNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    navItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="relative group">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-insta-pink via-insta-orange to-insta-purple flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                {influencerInfo.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-xl bg-gradient-to-r from-insta-pink via-insta-orange to-insta-purple bg-clip-text text-transparent">
                  {influencerInfo.name}
                </div>
                <div className="text-xs text-gray-500">{influencerInfo.handle}</div>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const active = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl font-semibold transition-all ${
                    active
                      ? "text-white"
                      : "text-gray-700 hover:text-insta-pink"
                  }`}
                >
                  {active && (
                    <div className="absolute inset-0 bg-gradient-to-r from-insta-pink to-insta-purple rounded-xl" />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-2 px-6 py-2 rounded-xl bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow text-white font-bold hover:scale-105 transition-transform shadow-lg"
            >
              Work With Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-gradient-to-r from-insta-pink to-insta-purple"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`} />
              <span className={`block h-0.5 w-5 bg-white transition-all ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-0.5 w-5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-0" : "translate-y-1.5"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl font-semibold transition ${
                  activeSection === item.href.substring(1)
                    ? "bg-gradient-to-r from-insta-pink to-insta-purple text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow text-white font-bold text-center"
            >
              Work With Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
