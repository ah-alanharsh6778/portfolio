import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Terminal, Zap, Server } from 'lucide-react';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.8,
        delay: custom * 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10 select-none overflow-hidden"
    >
      {/* Slow-pulsing teal ambient glow behind card for 3D floating effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-teal-500/10 rounded-full blur-[170px] pointer-events-none animate-pulse" />

      {/* Massive Subtle Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-2xl p-6 sm:p-12 md:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:border-teal-500/20 transition-all duration-700 overflow-hidden"
      >
        {/* Subtle geometric background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
          
          {/* LEFT COLUMN: Cinematic Typography & Narrative (Full width on phone, 7 cols on desktop) */}
          <div className="w-full lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow Tag */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-teal-500/30 text-xs font-mono text-teal-400 mb-6 shadow-sm backdrop-blur-md w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-teal-400" />
              <span>// ENGINEERING PHILOSOPHY</span>
            </motion.div>

            {/* Gradient Heading */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-teal-200 to-teal-500 leading-[1.1]">
                Behind the Code
              </h2>
              {/* Small Glowing Teal Accent Line */}
              <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mt-4 shadow-[0_0_12px_rgba(45,212,191,0.6)]" />
            </motion.div>

            {/* Main Grounded Narrative */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="mt-8 space-y-5"
            >
              <p className="text-base sm:text-lg md:text-xl md:leading-relaxed text-zinc-300 font-normal">
                Backed by a strong foundation with a <span className="text-white font-semibold">B.Tech in Computer Science Engineering</span>, I build robust <span className="text-white font-semibold">Java backends</span> and responsive <span className="text-white font-semibold">React interfaces</span> crafted to solve real-world, grassroots-level problems.
              </p>

              <p className="text-sm sm:text-base md:text-lg md:leading-relaxed text-zinc-400 font-normal">
                I believe software should create <span className="text-white font-semibold">tangible real-world impact</span>. Rather than building tech for tech's sake, my focus is on architecting <span className="text-white font-semibold">scalable systems</span> with microsecond latency, zero-downtime reliability, and clean human-centric interfaces that empower everyday communities and businesses.
              </p>
            </motion.div>

            {/* Core Values Strip */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-xs font-mono text-zinc-400"
            >
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span>Scalable Arch</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Secure APIs</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>User Delight</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Visual Graphic (HIDDEN ON PHONE/MOBILE, SHOWN ON DESKTOP) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 justify-center items-center relative"
          >
            {/* Continuous Floating Container */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -15, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full max-w-[420px] relative"
            >
              {/* Backglow behind code visual */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500/20 via-indigo-500/15 to-emerald-500/20 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

              {/* Stylized Floating Code Card: "Backend Logic Meeting UI" */}
              <div className="relative rounded-2xl bg-slate-950/90 border border-teal-500/30 p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Code Card Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-teal-400/80">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>SystemArchitecture.java</span>
                  </div>
                </div>

                {/* Minimalist Syntax Code Snippet */}
                <div className="font-mono text-[12px] sm:text-[13px] leading-relaxed space-y-2 text-zinc-300">
                  <div className="text-teal-400">
                    <span className="text-purple-400">@RestController</span>
                  </div>
                  <div>
                    <span className="text-sky-400">public class</span>{' '}
                    <span className="text-amber-300">ArchitectureEngine</span>{' '}
                    <span className="text-zinc-500">{`{`}</span>
                  </div>
                  
                  <div className="pl-4 text-zinc-400">
                    <span className="text-purple-400">@GetMapping</span>
                    <span className="text-zinc-300">(</span>
                    <span className="text-emerald-300">"/api/impact"</span>
                    <span className="text-zinc-300">)</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-sky-400">public</span>{' '}
                    <span className="text-teal-300">ResponseEntity</span>{' '}
                    <span className="text-amber-200">deliverScale</span>
                    <span className="text-zinc-400">() {`{`}</span>
                  </div>

                  <div className="pl-8 text-zinc-400">
                    <span className="text-purple-400">return</span>{' '}
                    <span className="text-teal-400">SystemBridge</span>
                    <span className="text-zinc-300">.</span>
                    <span className="text-amber-300">builder</span>
                    <span className="text-zinc-300">()</span>
                  </div>
                  
                  <div className="pl-12 text-zinc-300">
                    <span className="text-zinc-500">.</span>
                    <span className="text-sky-300">backend</span>
                    <span className="text-zinc-400">(</span>
                    <span className="text-emerald-300">"Spring Boot 3.x"</span>
                    <span className="text-zinc-400">)</span>
                  </div>

                  <div className="pl-12 text-zinc-300">
                    <span className="text-zinc-500">.</span>
                    <span className="text-sky-300">frontend</span>
                    <span className="text-zinc-400">(</span>
                    <span className="text-emerald-300">"React.js Hooks"</span>
                    <span className="text-zinc-400">)</span>
                  </div>

                  <div className="pl-12 text-zinc-300">
                    <span className="text-zinc-500">.</span>
                    <span className="text-sky-300">mission</span>
                    <span className="text-zinc-400">(</span>
                    <span className="text-emerald-300">"Real-World Impact"</span>
                    <span className="text-zinc-400">)</span>
                  </div>

                  <div className="pl-12 text-zinc-300">
                    <span className="text-zinc-500">.</span>
                    <span className="text-teal-400 font-bold">buildAndDeploy</span>
                    <span className="text-zinc-300">();</span>
                  </div>

                  <div className="pl-4 text-zinc-500">{`}`}</div>
                  <div className="text-zinc-500">{`}`}</div>
                </div>

                {/* Card Floating Tech Badges */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5 text-teal-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Zero Latency</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sky-400">
                    <Server className="w-3.5 h-3.5" />
                    <span>Event-Driven</span>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
