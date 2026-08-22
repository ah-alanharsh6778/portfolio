import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, ArrowRight, Globe, Code2 } from 'lucide-react';
import { projects } from '../data/projects';

function GithubIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 select-none">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-teal-500/30 text-xs font-mono text-teal-400 mb-3 shadow-sm backdrop-blur-md"
        >
          <Sparkles className="w-3 h-3" />
          <span>// Featured Engineering Projects</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          Featured <span className="text-teal-400">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-3 text-slate-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed"
        >
          Production-ready applications, full-stack platforms, and distributed microservices architectures.
        </motion.p>
      </div>

      {/* 6 Projects Grid (in exact order: 01. AI Resume, 02. FlowSpace, 03. CloudBillBox, 04. TruForce, 05. Medicine Shop, 06. CropConnect) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.06 * idx }}
            className="group relative rounded-2xl sm:rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-teal-500/40 p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(20,184,166,0.15)] hover:scale-[1.015] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Project Number & Title */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/20">
                  {project.id}
                </span>

                {project.liveUrl && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                    LIVE
                  </span>
                )}
              </div>

              {/* Image Preview Window (shown only when image exists) */}
              {project.image ? (
                <div className="w-full rounded-xl bg-slate-950/90 border border-white/10 overflow-hidden mb-4 shadow-md group-hover:border-white/20 transition-colors">
                  {/* Window Bar */}
                  <div className="px-3 py-1.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>

                    {project.domain && (
                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-white/5 text-[10px] font-mono text-slate-400">
                        <Globe className="w-2.5 h-2.5 text-teal-400" />
                        <span className="truncate max-w-[140px]">{project.domain}</span>
                      </div>
                    )}
                  </div>

                  {/* Image Container */}
                  <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out select-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                  </div>
                </div>
              ) : null}

              {/* Project Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>

              {/* Short Description */}
              <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal line-clamp-3">
                {project.shortDescription}
              </p>

              {/* Technologies Tags */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-300 group-hover:border-teal-500/30 group-hover:text-teal-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions: Case Study & Live / Source Links */}
            <div className="mt-5 pt-3.5 border-t border-white/10 flex flex-col gap-2.5">
              
              {/* Explore Case Study */}
              <a
                href={`/projects/${project.slug}`}
                className="inline-flex items-center justify-between text-xs font-mono font-semibold text-teal-400 hover:text-teal-300 group/link transition-colors"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>

              {/* Live Demo & GitHub row */}
              <div className="flex items-center gap-2 pt-1">
                {/* LIVE DEMO: only when real liveUrl exists */}
                {project.liveUrl ? (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full font-bold text-[11px] text-slate-950 bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-400 shadow-[0_0_15px_rgba(20,184,166,0.35)] hover:shadow-[0_0_20px_rgba(20,184,166,0.55)] transition-all cursor-pointer font-mono"
                  >
                    <span>LIVE DEMO</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-950" />
                  </motion.a>
                ) : null}

                {/* GitHub link if available */}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium text-[11px] text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/40 hover:text-white transition-all shadow-sm font-mono"
                  >
                    <GithubIcon className="w-3 h-3 text-slate-400" />
                    <span>Source</span>
                  </a>
                ) : null}
              </div>

            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
