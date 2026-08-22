import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowUpRight, Download, Sparkles, Code2, Zap, Server, ShieldCheck } from 'lucide-react';
import heroAsset from '../assets/hero.png';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

// Sliding Subheadline Keywords
const slidingKeywords = [
  { text: "Scalable Backends", color: "from-teal-300 to-emerald-400", icon: "⚡" },
  { text: "Cloud Microservices", color: "from-sky-300 to-indigo-400", icon: "☁️" },
  { text: "Modern Web Apps", color: "from-emerald-300 to-teal-300", icon: "⚛️" },
  { text: "High-Throughput APIs", color: "from-cyan-300 to-blue-400", icon: "🚀" }
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [keywordIdx, setKeywordIdx] = useState(0);

  // Upward slide timer for subheadline keywords (3s interval)
  useEffect(() => {
    const keywordTimer = setInterval(() => {
      setKeywordIdx((prev) => (prev + 1) % slidingKeywords.length);
    }, 3000);
    return () => clearInterval(keywordTimer);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col items-center justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden select-none"
    >
      {/* Central Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Container - Centered Architecture Layout */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10">
        
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-xs font-mono text-teal-400 shadow-sm backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
          <span>JAVA FULL STACK DEVELOPER</span>
        </motion.div>

        {/* 1. MAIN CENTERED HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
        >
          Hi, I'm <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">Harsh Singh</span>
        </motion.h1>

        {/* 2. DYNAMIC UPWARD SLIDING REEL (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 flex items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-300"
        >
          <span>Architecting</span>
          <div className="relative inline-block h-8 sm:h-9 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={keywordIdx}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${slidingKeywords[keywordIdx].color} bg-clip-text text-transparent`}
              >
                <span>{slidingKeywords[keywordIdx].text}</span>
                <span className="text-base sm:text-lg">{slidingKeywords[keywordIdx].icon}</span>
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 3. CONCISE NARRATIVE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed font-normal"
        >
          Java Full Stack Developer specialized in crafting scalable Spring Boot microservices, high-throughput REST APIs, and responsive React web platforms.
        </motion.p>

        {/* 4. CENTERED ACTION BUTTONS: [Explore Work] & [Download Resume] */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide text-slate-950 bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-400 shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.65)] transition-all flex items-center gap-2 cursor-pointer border border-teal-300/40"
            >
              <span>EXPLORE WORK</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </motion.button>
          </ScrollLink>

          <motion.a
            href="/Harsh_Singh_Resume.pdf"
            download="Harsh_Singh_Resume.pdf"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 border border-teal-500/40 text-slate-300 rounded-full flex items-center gap-2 hover:bg-teal-500/10 hover:border-teal-400 hover:text-white transition-all font-semibold text-xs sm:text-sm tracking-wide cursor-pointer shadow-sm"
          >
            <span>Download Resume</span>
            <Download className="w-4 h-4 text-teal-400" />
          </motion.a>
        </motion.div>

        {/* 5. CENTERED PORTRAIT VISUAL WITH GLOWING CONCENTRIC RINGS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={
            shouldReduceMotion
              ? {}
              : {
                  x: mousePos.x,
                  y: mousePos.y,
                  transition: 'transform 0.15s ease-out',
                }
          }
          className="mt-12 relative w-full max-w-[320px] sm:max-w-[360px] flex items-center justify-center"
        >
          {/* Ambient Circular Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-indigo-600/15 to-emerald-500/15 rounded-full blur-3xl opacity-80 pointer-events-none scale-110" />

          {/* Glowing Circular Platform */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    rotate: [0, 360],
                  }
            }
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="relative w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] rounded-full bg-gradient-to-br from-teal-950/80 via-slate-900 to-slate-950 border border-teal-500/30 shadow-[0_0_50px_rgba(20,184,166,0.2)] backdrop-blur-xl flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-3 rounded-full border border-dashed border-teal-500/20" />
            <div className="absolute inset-8 rounded-full border border-white/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.2),transparent_70%)]" />
          </motion.div>

          {/* Portrait Image */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end z-10 pointer-events-none">
            <div className="relative w-[220px] sm:w-[260px] h-[280px] sm:h-[320px] flex items-end justify-center">
              <img
                src={heroAsset}
                alt="Harsh Singh - Java Full Stack Developer"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] select-none pointer-events-auto"
              />
              <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#0B1121] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating Glass Badge 1 (Left) */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-4 -left-4 sm:-left-8 z-20"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-teal-500/40 shadow-lg text-[10px] font-mono text-teal-300 backdrop-blur-md">
              <Zap className="w-3 h-3 text-teal-400 animate-pulse" />
              <span>Microservices</span>
            </div>
          </motion.div>

          {/* Floating Glass Badge 2 (Right) */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, 8, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute bottom-4 -right-4 sm:-right-8 z-20"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-teal-500/40 shadow-lg text-[10px] font-mono text-slate-200 backdrop-blur-md">
              <ShieldCheck className="w-3 h-3 text-teal-400" />
              <span>99.9% Uptime</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 6. CONNECT SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-5 text-xs font-mono tracking-wider text-slate-400"
        >
          <span className="text-slate-500 uppercase">// CONNECT</span>
          
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-teal-400 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-slate-400" />
            <span>GitHub</span>
          </a>

          <span className="text-slate-700">•</span>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-teal-400 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-slate-400" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
