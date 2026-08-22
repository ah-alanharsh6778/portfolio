import React from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 600, smooth: 'easeInOutQuad' });
  };

  return (
    <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-12 border-t border-white/10 bg-slate-950/90 backdrop-blur-md select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        
        {/* Left: Brand & Status */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
          <span className="text-slate-200 font-semibold">Harsh Singh</span>
          <span>• Java Full Stack Developer</span>
        </div>

        {/* Center: Copyright */}
        <p className="text-slate-500 text-center">
          © {new Date().getFullYear()} Harsh Singh. All rights reserved.
        </p>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 transition-all duration-300 cursor-pointer shadow-sm hover:scale-105"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
        </button>

      </div>
    </footer>
  );
}
