import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Sparkles, ArrowUpRight } from 'lucide-react';

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

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto relative z-10 select-none">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Compact Clean Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl p-6 sm:p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-teal-500/30 transition-all duration-300"
      >
        {/* User Real Photo Avatar from public/harsh_profile.jpg */}
        <div className="relative mx-auto w-16 h-16 mb-3.5">
          <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-sm animate-pulse" />
          <div className="relative w-full h-full rounded-full bg-slate-900 border-2 border-teal-400/70 overflow-hidden shadow-lg">
            <img
              src="/harsh_profile.jpg"
              alt="Harsh Singh"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                // Fallback to /image/harsh (2).jpg if needed
                e.target.src = "/image/harsh (2).jpg";
              }}
            />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-teal-400 border-2 border-slate-950" />
        </div>

        {/* Small Eyebrow Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-teal-500/30 text-[11px] font-mono text-teal-400 mb-2.5 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-teal-400 animate-pulse" />
          <span>// GET IN TOUCH</span>
        </div>

        {/* Compact Headline */}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Let's Build Something <span className="text-teal-400">Great.</span>
        </h2>

        {/* Short 1-line subtext */}
        <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed font-normal">
          Open to discuss scalable Java backend architectures or full-stack engineering roles.
        </p>

        {/* Primary CTA Button */}
        <div className="mt-5">
          <motion.a
            href="mailto:contact@harshsingh.dev"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.4)] hover:shadow-[0_0_25px_rgba(45,212,191,0.6)] transition-all text-xs sm:text-sm tracking-wide cursor-pointer font-mono"
          >
            <Mail className="w-4 h-4 text-slate-950" />
            <span>Drop me an Email</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950" />
          </motion.a>
        </div>

        {/* Compact Details & Socials Row */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono text-slate-400">
          <a
            href="mailto:contact@harshsingh.dev"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-teal-500/40 hover:text-teal-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            <span>contact@harshsingh.dev</span>
          </a>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-400">
            <Phone className="w-3.5 h-3.5 text-teal-400" />
            <span>Available on Inquiry</span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
        </div>

      </motion.div>

    </section>
  );
}
