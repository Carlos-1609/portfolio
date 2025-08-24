import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <div className="text-2xl font-bold">
            <span className="text-green-400">CARLOS</span>
            <span className="text-white">ORDOÑEZ</span>
            <span className="text-green-400">.</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={`Go to ${item.name}`}
              >
                {item.name}
                <span className="pointer-events-none absolute -bottom-2 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            className="hidden md:inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            href="/Carlos_Ordonez_Resume_ENG.pdf?v=2025-08-20"
            download="Carlos_Ordonez_Resume_ENG.pdf"
          >
            Download CV Now
          </a>

          {/* Mobile menu toggle */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav
            id="mobile-nav"
            className="md:hidden mt-4 pt-4 pb-4 border-t border-slate-800 bg-slate-800 rounded-lg shadow-lg"
          >
            {navItems.map(({ name, href }) => (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className="block w-full text-left py-3 px-4 text-gray-300 hover:text-green-400 hover:bg-slate-700 transition-all duration-300 rounded-lg"
              >
                {name}
              </button>
            ))}
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors duration-300">
              Download CV Now
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
