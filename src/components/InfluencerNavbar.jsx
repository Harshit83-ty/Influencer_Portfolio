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
        let maxRatio = 0;
        let activeEntry = null;
        
        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeEntry = entry;
          }
        });
        
        if (activeEntry && activeEntry.intersectionRatio > 0.1) {
          setActiveSection(activeEntry.target.id);
        }
      },
      { 
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
    );
    
    navItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });

    const handleNavClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          setActiveSection(targetId);
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => setIsOpen(false), 2000);
        }
      }
    };
    
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => link.addEventListener('click', handleNavClick));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      navLinks.forEach(link => link.removeEventListener('click', handleNavClick));
    };
  }, [isOpen]);

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
      <div
        className={`md:hidden fixed top-20 right-0 z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className={`relative bg-white border-l border-b border-gray-200 shadow-2xl transition-all duration-500 transform origin-top-right ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-4"
        }`}>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-insta-pink/50 via-insta-orange/50 to-insta-purple/50 rounded-lg blur-sm opacity-30 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent backdrop-blur-sm rounded-lg" />
          
          <ul className="relative py-3 min-w-[220px] z-10">
            {navItems.map((item, index) => {
              const active = activeSection === item.href.substring(1);
              return (
                <li key={item.name} className="relative overflow-hidden">
                  {active && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-insta-pink to-insta-purple rounded-r-full animate-pulse" />
                  )}
                  
                  <a
                    href={item.href}
                    className={`relative block px-6 py-4 text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                      active
                        ? "bg-gradient-to-r from-insta-pink/20 to-insta-purple/10 text-gray-900 shadow-lg"
                        : "text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-gray-900"
                    }`}
                    style={{
                      animationDelay: `${index * 0.08}s`,
                      animation: isOpen ? 'slideInRight3D 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards' : 'none'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-insta-pink/10 to-insta-purple/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded" />
                    
                    <span className="relative flex items-center justify-between z-10">
                      <span className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          active 
                            ? "bg-gradient-to-r from-insta-pink to-insta-purple shadow-lg animate-bounce" 
                            : "bg-gray-400"
                        }`} />
                        <span className="font-bold">{item.name}</span>
                      </span>
                      
                      {active && (
                        <div className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-insta-pink rounded-full animate-ping" />
                          <span className="w-1 h-1 bg-insta-orange rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                          <span className="w-1 h-1 bg-insta-purple rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                        </div>
                      )}
                    </span>
                  </a>
                </li>
              );
            })}
            <li className="px-4 py-2">
              <a
                href="#contact"
                className="block px-4 py-3 rounded-xl bg-gradient-to-r from-insta-pink via-insta-orange to-insta-yellow text-white font-bold text-center hover:scale-105 transition-transform shadow-lg"
              >
                Work With Me
              </a>
            </li>
          </ul>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-insta-pink/50 to-transparent" />
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
