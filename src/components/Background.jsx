import React from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  const cubes = [
    { size: 'w-16 h-16', top: '15%', left: '10%', duration: 5, delay: 0 },
    { size: 'w-24 h-24', top: '25%', right: '12%', duration: 6, delay: 1 },
    { size: 'w-14 h-14', top: '65%', left: '8%', duration: 5.5, delay: 1.5 },
    { size: 'w-20 h-20', top: '80%', right: '15%', duration: 7, delay: 0.5 },
    { size: 'w-12 h-12', top: '48%', right: '28%', duration: 4.8, delay: 2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0B1121]">
      {/* Ambient Glows: Massive highly blurred div circles */}
      <div className="absolute -top-24 -left-24 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-teal-500 rounded-full blur-[120px] opacity-20" />
      <div className="absolute -bottom-24 -right-24 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-teal-500 rounded-full blur-[120px] opacity-20" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[140px] opacity-10" />

      {/* Floating Geometric Teal/Glassmorphism Cubes */}
      {cubes.map((cube, index) => (
        <motion.div
          key={index}
          className={`absolute ${cube.size} rounded-2xl bg-teal-500/[0.04] backdrop-blur-md border border-teal-500/20 shadow-[0_8px_32px_0_rgba(20,184,166,0.1)]`}
          style={{
            top: cube.top,
            left: cube.left,
            right: cube.right,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: cube.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: cube.delay,
          }}
        >
          {/* Inner subtle glass gradient */}
          <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-teal-400/10 to-transparent opacity-60 border border-white/5" />
        </motion.div>
      ))}
    </div>
  );
}
