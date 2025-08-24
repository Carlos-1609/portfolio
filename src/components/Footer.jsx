import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800 relative overflow-hidden">
      {/* decorative bg */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 3-column layout on md+, stacked on mobile */}
        <div className="grid gap-8 md:grid-cols-3 items-center">
          {/* Left: brand + subtitle */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2 group cursor-pointer inline-block">
              <span className="text-green-500 group-hover:text-green-400 transition-colors">
                CARLOS
              </span>
              <span className="text-white group-hover:text-green-400 transition-colors">
                ORDOÑEZ
              </span>
              <span className="text-green-500 group-hover:text-green-400 transition-colors">
                .
              </span>
            </div>
            <p className="text-gray-400 hover:text-gray-300 transition-colors">
              Software Developer &amp; Machine Learning
            </p>
          </div>

          {/* Center: copyright */}
          <div className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Carlos Ordoñez. All rights
            reserved.
          </div>

          {/* Right: made with + up button */}
          <div className=" flex justify-center md:justify-end items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-gray-400">
              <span className="text-gray-300">Made by Carlos Ordoñez</span>
            </div>
            <button
              onClick={scrollTop}
              aria-label="Scroll to top"
              className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center
                         hover:bg-green-700 transition-transform duration-300
                         hover:scale-110 hover:rotate-12 shadow-lg"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
