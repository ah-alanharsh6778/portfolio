import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Sparkles, Code2, Database, Server, Layers } from 'lucide-react';

export default function Experience() {
  const responsibilities = [
    "Fixed slow endpoints by rewriting queries; response times improved by ~35%.",
    "Split parts of the monolith into Spring Boot microservices over REST.",
    "Added Redis caching for read-heavy endpoints.",
    "Built secure REST APIs with Spring Security, JWT, and RBAC.",
    "Dockerized services and deployed on AWS EC2 with S3 storage."
  ];

  const techTags = [
    "Java 17+",
    "Spring Boot",
    "Microservices",
    "Spring Security",
    "JWT & RBAC",
    "React.js",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Docker",
    "AWS EC2",
    "AWS S3"
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 select-none">
      
      {/* Center-Aligned Heading with Teal Accent */}
      <div className="text-center mb-14 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-teal-500/30 text-xs font-mono text-teal-400 mb-4 shadow-[0_0_15px_rgba(20,184,166,0.15)] backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Work History</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          Professional <span className="text-teal-400">Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base"
        >
          Hands-on technical impact and production system engineering.
        </motion.p>
      </div>

      {/* Large, Wide Glassmorphism Card (STRICTLY NO DATES) */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-teal-500/30 hover:shadow-[0_0_35px_rgba(20,184,166,0.2)] hover:scale-[1.01] transition-all duration-500 p-6 sm:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        {/* Subtle Ambient Teal Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Card Header: Company "Farthur Grow" + Teal Icon (STRICTLY NO DATES) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
              <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Farthur Grow
              </h3>
              <p className="text-sm sm:text-base font-semibold text-teal-400 mt-0.5">
                Java Full Stack Developer
              </p>
            </div>
          </div>

          <div className="self-start sm:self-center px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
            Core Engineering Team
          </div>
        </div>

        {/* Card Body: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
          
          {/* Left Side: Exact 5 Responsibilities */}
          <div className="lg:col-span-7 space-y-3.5">
            <h4 className="text-xs uppercase tracking-wider font-mono text-teal-400 font-semibold mb-2">
              Key Engineering Impact & Deliverables:
            </h4>

            {responsibilities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="mt-0.5 flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Bento-Style Mini-Grid of Pill-Shaped Tags */}
          <div className="lg:col-span-5 bg-white/[0.02] p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-teal-400 font-semibold">
              <Code2 className="w-4 h-4" />
              <span>Core Tech Stack:</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {techTags.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center text-center px-3 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-200 hover:border-teal-500/40 hover:text-teal-300 transition-all duration-300 shadow-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

        </div>

      </motion.div>

    </section>
  );
}
