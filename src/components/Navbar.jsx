import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'About', to: 'about' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Sleek "HS" Brand Icon */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={600}
          className="flex items-center gap-2 cursor-pointer group"
          aria-label="Harsh Singh Home"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500/20 via-slate-900/90 to-slate-950 border border-teal-500/40 flex items-center justify-center font-mono font-black text-sm tracking-wider text-teal-300 group-hover:border-teal-400 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] group-hover:scale-105 transition-all duration-300 shadow-[0_0_12px_rgba(20,184,166,0.2)]">
            HS
          </div>
        </ScrollLink>

        {/* Center: Clean Nav Pills (Home, About, Skills, Projects, Contact) */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-800/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              activeClass="!bg-teal-500/20 !text-teal-300 !border-teal-500/40 shadow-[0_0_12px_rgba(20,184,166,0.2)]"
              className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full transition-all duration-200 cursor-pointer hover:bg-slate-700/50 border border-transparent"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Right: Sleek "Let's Talk" CTA Button */}
        <div className="hidden md:flex items-center">
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-80}
            duration={600}
            className="flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-mono font-semibold text-slate-200 bg-white/[0.03] hover:bg-teal-500/20 border border-white/10 hover:border-teal-500/40 hover:text-teal-300 transition-all duration-300 shadow-sm cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-teal-400" />
          </ScrollLink>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/10 px-5 pt-3 pb-6 space-y-2">
          {navLinks.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-teal-300 hover:bg-slate-800/60 border border-transparent hover:border-teal-500/20 cursor-pointer transition-all"
            >
              {item.name}
            </ScrollLink>
          ))}
          <div className="pt-2">
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-80}
              duration={600}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all cursor-pointer font-mono"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </ScrollLink>
          </div>
        </div>
      )}
    </header>
  );
}
