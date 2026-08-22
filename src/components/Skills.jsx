import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const allSkills = [
  // Backend & Core
  {
    name: "Java",
    shortName: "Java 21",
    version: "17 / 21+",
    category: "backend",
    categoryLabel: "Core Backend",
    color: "#f89820",
    glowColor: "rgba(248, 152, 32, 0.25)",
    level: "Advanced Architecture",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.85 16.84s-.54.05-.78.36c-.3.39.02.73.02.73s.97.09 1.4-.44c.45-.55-.64-.65-.64-.65zm1.5-1.57s-.7.09-.98.53c-.35.53.07.96.07.96s1.28.14 1.83-.56c.55-.7-.92-.93-.92-.93zm-3.08 4.75s-.37.33.34.46c.88.16 2.4-.17 3.86-.77 0 0 .4-.21.24-.49-.16-.27-.6-.18-.6-.18-1.28.46-2.58.74-3.84.98zm8.6-1.92c-.17.38-1.26.83-2.57 1.15 0 0 .5.31 1.25.13 1.12-.26 2.06-.85 2.06-.85s.16-.16-.08-.34c-.23-.17-.66-.09-.66-.09zm-8.89 3.49s.61.34 2.19.18c1.93-.19 3.88-.95 5.51-2.07 0 0 .31-.25.13-.44-.19-.19-.48-.06-.48-.06-1.5 1.02-3.3 1.72-5.06 1.9-1.29.13-2.29-.51-2.29-.51zm12.35-1.44c-1.39.75-3.09 1.29-4.88 1.63 0 0 .37.28 1.04.18 1.4-.2 2.65-.66 3.65-1.31 0 0 .28-.21.19-.5-.09-.28-.35-.2-.35-.2s-.36.1-.65.2zm-12.82 2.76s1.46.46 3.84.18c2.94-.34 5.86-1.63 8.08-3.52 0 0 .28-.28.1-.47-.19-.19-.47-.07-.47-.07-2.06 1.76-4.79 2.97-7.53 3.28-2.26.26-4.02-.38-4.02-.38zm8.81-18.06c.64.71.5 1.68-.3 2.6-1.02 1.17-2.73 2.18-3.89 3.73-.83 1.11-.86 2.21-.05 3.32.74 1.01 1.99 1.55 3.01 2.37 1.34 1.08 2.09 2.45 1.48 4.2-.66 1.88-2.58 3.07-4.48 2.96-.34-.02-.67-.08-.67-.08s.16.14.47.21c2.19.49 4.41-.65 5.25-2.65.84-2.01.12-3.76-1.33-4.99-1.12-.95-2.3-1.66-2.92-2.85-.72-1.38-.41-2.63.58-3.79.94-1.1 2.44-2.09 3.08-3.33.49-.96.42-1.69-.23-1.69z"/>
      </svg>
    )
  },
  {
    name: "Spring Boot",
    shortName: "Spring",
    version: "3.x / 4.x",
    category: "backend",
    categoryLabel: "Microservices",
    color: "#6db33f",
    glowColor: "rgba(109, 179, 63, 0.25)",
    level: "REST APIs & MVC",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.57 9.87c-.6-.73-1.42-1.31-2.37-1.66-.46-.17-.96-.28-1.48-.32.06-.39.07-.79.03-1.2-.14-1.39-.89-2.61-2.02-3.32-1.12-.71-2.5-.82-3.72-.32-.61.25-1.16.65-1.6 1.15-.36.41-.64.9-.82 1.43-.88-.47-1.92-.66-2.94-.52-1.39.19-2.61.99-3.32 2.15-.71 1.16-.82 2.58-.32 3.84.25.63.65 1.2 1.15 1.66-.5.42-.91.95-1.19 1.56-.56 1.22-.52 2.62.11 3.81.63 1.19 1.77 2.02 3.09 2.26.68.12 1.37.09 2.03-.09.39.81.98 1.5 1.73 1.99 1.16.76 2.58.94 3.88.5 1.3-.44 2.33-1.38 2.82-2.58.26-.64.35-1.33.26-2.01.81-.39 1.5-.98 1.99-1.73.76-1.16.94-2.58.5-3.88-.1-.29-.24-.57-.4-.83.67-.53 1.18-1.24 1.45-2.06.33-1.01.27-2.12-.17-3.08zm-7.65 8.1c-.24.58-.73 1.03-1.36 1.24-.63.21-1.31.13-1.87-.24-.36-.24-.65-.57-.84-.96.22-.09.43-.2.63-.33 1.09-.71 1.84-1.93 1.98-3.32.07-.69-.03-1.38-.28-2.01 1.05.27 1.89 1.07 2.19 2.12.18.66.12 1.35-.15 1.94-.09.19-.2.37-.3.56z"/>
      </svg>
    )
  },
  {
    name: "Microservices",
    shortName: "Microservices",
    version: "Distributed",
    category: "backend",
    categoryLabel: "Architecture",
    color: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.25)",
    level: "Event Driven & REST",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.2"/>
        <rect x="14" y="2" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.2"/>
        <rect x="2" y="14" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.2"/>
        <rect x="14" y="14" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.2"/>
        <path d="M10 6h4M6 10v4M18 10v4M10 18h4" strokeLinecap="round"/>
      </svg>
    )
  },

  // Frontend & UI
  {
    name: "React.js",
    shortName: "React",
    version: "18+ / Hooks",
    category: "frontend",
    categoryLabel: "Client Engine",
    color: "#61dafb",
    glowColor: "rgba(97, 218, 251, 0.25)",
    level: "State & Components",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.83-1.87 1.83-1.03 0-1.87-.83-1.87-1.83 0-1.05.84-1.89 1.87-1.89zM22 12c0-.62-.4-1.63-1.2-2.59-1.07-1.27-2.73-2.38-4.75-3.13.2-.67.33-1.34.38-1.98.08-.94-.07-1.75-.48-2.3-.53-.7-1.42-.9-2.4-.64-.99.27-2.05.95-3.09 1.94-1.04-.99-2.1-1.67-3.09-1.94-.98-.26-1.87-.06-2.4.64-.41.55-.56 1.36-.48 2.3.05.64.18 1.31.38 1.98-2.02.75-3.68 1.86-4.75 3.13C-.4 10.37-.4 11.38-.4 12c0 .62.4 1.63 1.2 2.59 1.07 1.27 2.73 2.38 4.75 3.13-.2.67-.33 1.34-.38 1.98-.08.94.07 1.75.48 2.3.53.7 1.42.9 2.4.64.99-.27 2.05-.95 3.09-1.94 1.04.99 2.1 1.67 3.09 1.94.98.26 1.87.06 2.4-.64.41-.55.56-1.36.48-2.3-.05-.64-.18-1.31-.38-1.98 2.02-.75 3.68-1.86 4.75-3.13.8-.96.8-1.97.8-2.59zM12 3.1c.42 0 .8.09 1.13.27.42.23.75.61.94 1.1.25.64.29 1.48.16 2.46-.77-.2-1.57-.33-2.4-.38-.63-.04-1.25-.03-1.86.03-.13-.98-.09-1.82.16-2.46.19-.49.52-.87.94-1.1.33-.18.71-.27 1.13-.27zm-5.74 3.96c.15-.36.33-.7.54-1.02.39-.58.87-.97 1.38-1.15.35.48.81 1.14 1.37 1.94-.85.34-1.64.75-2.36 1.21-.35-.34-.67-.67-.93-.98zm-2.9 5.94c-.38-.45-.61-.95-.68-1.42.12-.5.42-.99.88-1.42.84-.79 2.14-1.55 3.75-2.18.52.88 1.13 1.78 1.81 2.68-.68.9-1.29 1.8-1.81 2.68-1.61-.63-2.91-1.39-3.75-2.18-.08-.08-.14-.15-.2-.16zm5.84 5.96c-.51-.18-.99-.57-1.38-1.15-.21-.32-.39-.66-.54-1.02.26-.31.58-.64.93-.98.72.46 1.51.87 2.36 1.21-.56.8-1.02 1.46-1.37 1.94zm2.8 1.94c-.42 0-.8-.09-1.13-.27-.42-.23-.75-.61-.94-1.1-.25-.64-.29-1.48-.16-2.46.61.06 1.23.07 1.86.03.83-.05 1.63-.18 2.4-.38.13.98.09 1.82-.16 2.46-.19.49-.52.87-.94 1.1-.33.18-.71.27-1.13.27zm2.94-3.15c.56-.8 1.02-1.46 1.37-1.94.85-.34 1.64-.75 2.36-1.21.35.34.67.67.93.98-.15.36-.33.7-.54 1.02-.39.58-.87.97-1.38 1.15zm4.84-4.75c-.84.79-2.14 1.55-3.75 2.18-.52-.88-1.13-1.78-1.81-2.68.68-.9 1.29-1.8 1.81-2.68 1.61.63 2.91 1.39 3.75 2.18.46.43.76.92.88 1.42-.07.47-.3.97-.68 1.42z"/>
      </svg>
    )
  },
  {
    name: "JavaScript",
    shortName: "JavaScript",
    version: "ES6+ / Modern",
    category: "frontend",
    categoryLabel: "Core Web",
    color: "#f7df1e",
    glowColor: "rgba(247, 223, 30, 0.25)",
    level: "Async / DOM Logic",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-.842-.315-.315-.225-.794-.03-.988.33-.33.914-.405 1.41-.3 1.02.21 1.32.735 1.485 1.605l2.25-.375c-.24-1.26-.945-2.4-2.295-2.805-1.14-.36-2.52-.225-3.405.51-.765.645-1.005 1.635-.615 2.535.435 1.005 1.5 1.56 2.385 1.95 1.05.465 1.92.795 2.16 1.245.345.615.09 1.53-.78 1.83-1.005.345-2.295.045-2.73-1.155l-2.22.615c.57 1.77 2.01 2.655 3.66 2.76 1.485.09 3.03-.435 3.765-1.77.405-.72.495-1.74.075-2.79v.015zm-8.805-7.74h-2.55v7.86c0 1.245-.06 2.085-.885 2.61-.63.405-1.425.405-2.07.21-.57-.18-.945-.585-1.215-1.095-.12-.225-.24-.555-.24-.87l-2.205.6c.21 1.05.78 1.965 1.665 2.52 1.005.63 2.325.75 3.495.42 1.305-.375 2.145-1.41 2.43-2.7.075-.36.075-.9.075-1.44v-8.115z"/>
      </svg>
    )
  },

  // DB & Cloud Infrastructure
  {
    name: "MySQL",
    shortName: "MySQL",
    version: "Relational",
    category: "database",
    categoryLabel: "Database",
    color: "#00758f",
    glowColor: "rgba(0, 117, 143, 0.25)",
    level: "Schema & Indices",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c4.41 0 7 1.5 7 2s-2.59 2-7 2-7-1.5-7-2 2.59-2 7-2zm-7 4.28C6.54 10.23 8.97 11 12 11s5.46-.77 7-1.72V12c0 .5-2.59 2-7 2s-7-1.5-7-2V9.28zm0 5C6.54 15.23 8.97 16 12 16s5.46-.77 7-1.72V17c0 .5-2.59 2-7 2s-7-1.5-7-2v-2.72z"/>
      </svg>
    )
  },
  {
    name: "Redis",
    shortName: "Redis",
    version: "In-Memory",
    category: "database",
    categoryLabel: "High Speed Cache",
    color: "#dc382d",
    glowColor: "rgba(220, 56, 45, 0.25)",
    level: "Microsecond Latency",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.57 6.87l-9.14-5.28a.86.86 0 00-.86 0L2.43 6.87a.86.86 0 00-.43.75v10.56c0 .31.16.6.43.75l9.14 5.28c.13.08.28.12.43.12s.3-.04.43-.12l9.14-5.28c.27-.15.43-.44.43-.75V7.62a.86.86 0 00-.43-.75zM12 3.25l7.58 4.38-3.08 1.78-7.58-4.38L12 3.25zM3.72 8.38l7.42 4.29v8.08l-7.42-4.29V8.38zm9.14 12.37v-8.08l7.42-4.29v8.08l-7.42-4.29z"/>
      </svg>
    )
  },
  {
    name: "AWS (EC2 & S3)",
    shortName: "AWS Cloud",
    version: "Cloud Infra",
    category: "cloud",
    categoryLabel: "Cloud Computing",
    color: "#ff9900",
    glowColor: "rgba(255, 153, 0, 0.25)",
    level: "Deployment & Assets",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.9 13.9c-.8 0-1.5-.2-2-.6s-.7-.9-.7-1.5c0-.4.1-.8.4-1.1.3-.3.7-.6 1.2-.7.5-.2 1.1-.3 1.8-.4.7 0 1.2-.1 1.6-.2v-.4c0-.5-.1-.9-.4-1.2-.3-.3-.7-.4-1.3-.4-.5 0-.9.1-1.2.3-.3.2-.5.5-.5.8h-1.5c0-.5.2-.9.5-1.3.3-.4.8-.7 1.4-.9.6-.2 1.2-.3 1.9-.3.9 0 1.6.2 2.2.6.5.4.8 1 .8 1.8v3.5c0 .3.1.5.1.7h-1.5c-.1-.2-.1-.4-.1-.6-.2.3-.5.5-.9.7-.5.2-1 .3-1.7.3zm.4-1.2c.4 0 .8-.1 1.1-.3.3-.2.5-.5.6-.8v-1.1c-.3.1-.7.2-1.2.2-.6.1-1.1.2-1.3.4-.3.2-.4.4-.4.8 0 .3.1.5.3.6.3.1.6.2.9.2zm8.8 1.1l-1.9-6.3h1.6l1.2 4.6 1.2-4.6h1.5l-2 6.3h-1.6zm-14.6 4.7c6.7 3.5 14.8 2.8 21-.9.3-.2.4-.6.2-.9-.2-.3-.6-.4-.9-.2-5.8 3.4-13.3 4.1-19.6.8-.4-.2-.8 0-.9.4-.2.4 0 .7.2.8zm20.8-1.5c-.2-.3-.5-.4-.8-.2-.3.2-.4.5-.2.8.3.4.7.7 1.1.9.4.2.8.2 1.2.1.4-.1.7-.3.9-.6.2-.3.3-.7.2-1-.1-.4-.3-.7-.6-.9-.3-.2-.7-.3-1.1-.3-.4 0-.7.1-1 .3-.3.2-.5.5-.7.9z"/>
      </svg>
    )
  }
];

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'backend', label: 'Backend & Microservices' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'database', label: 'Databases & Cache' },
  { id: 'cloud', label: 'AWS Cloud' }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? allSkills
    : allSkills.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10 select-none">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-teal-500/30 text-xs font-mono text-teal-400 mb-4 shadow-[0_0_15px_rgba(20,184,166,0.15)] backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>// Technical Arsenal</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
        >
          Tech Stack & <span className="text-teal-400">Expertise</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-3 text-slate-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed"
        >
          Core enterprise backend frameworks, modern client libraries, and distributed database infrastructure.
        </motion.p>

        {/* Desktop Filter Pills */}
        <div className="hidden sm:flex mt-8 flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-mono transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(20,184,166,0.4)] scale-105'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/10 hover:border-teal-500/40 hover:bg-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* MOBILE ONLY: Compact 2-Column Icon Symbol Badges */}
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        {allSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex items-center gap-3 shadow-md"
          >
            <div
              className="p-2 rounded-xl bg-slate-900/90 border border-white/10 flex-shrink-0"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <div className="overflow-hidden">
              <span className="block text-xs font-bold text-white truncate">
                {skill.name}
              </span>
              <span className="block text-[10px] font-mono text-teal-400/90">
                {skill.version}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP & TABLET: Modern 3D Bento Glassmorphism Grid */}
      <motion.div
        layout
        className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
      >
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-teal-500/40 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Dynamic Brand Ambient Back-Glow on hover */}
              <div
                className="absolute -inset-2 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${skill.glowColor}, transparent 70%)` }}
              />

              {/* Card Top: Icon & Category Tag */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 group-hover:border-white/20 transition-all duration-300 shadow-md group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-400 group-hover:text-teal-300 group-hover:border-teal-500/30 transition-colors">
                    {skill.version}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                  {skill.name}
                </h3>
                
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {skill.categoryLabel}
                </p>
              </div>

              {/* Card Bottom: Proficiency Line */}
              <div className="mt-6 pt-4 border-t border-white/5 relative z-10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-[11px]">{skill.level}</span>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}
