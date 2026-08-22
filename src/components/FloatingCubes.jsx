import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingCubes() {
  const cubes = [
    { size: 'w-24 h-24', top: '15%', left: '8%', rotate: 15, duration: 8, delay: 0 },
    { size: 'w-32 h-32', top: '35%', right: '10%', rotate: -25, duration: 10, delay: 1 },
    { size: 'w-20 h-20', top: '60%', left: '12%', rotate: 45, duration: 9, delay: 2 },
    { size: 'w-28 h-28', top: '75%', right: '8%', rotate: -15, duration: 11, delay: 1.5 },
    { size: 'w-16 h-16', top: '88%', left: '20%', rotate: 30, duration: 7, delay: 0.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Teal and Emerald Ambient Radial Glows */}
      <div className="absolute top-[10%] left-[20%] w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-teal-500/10 rounded-full blur-[150px]" />
      <div className="absolute top-[50%] right-[15%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-emerald-500/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-[10%] left-[15%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-teal-600/10 rounded-full blur-[140px]" />

      {/* Floating Glassmorphic Geometric Cubes */}
      {cubes.map((cube, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${cube.size} rounded-2xl bg-white/[0.03] backdrop-blur-md border border-teal-500/20 shadow-[0_8px_32px_0_rgba(20,184,166,0.08)]`}
          style={{
            top: cube.top,
            left: cube.left,
            right: cube.right,
            transform: `rotate(${cube.rotate}deg)`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [cube.rotate, cube.rotate + 12, cube.rotate],
          }}
          transition={{
            duration: cube.duration,
            repeat: Infinity,
            repeatType: 'easeInOut',
            delay: cube.delay,
            ease: 'easeInOut',
          }}
        >
          {/* Inner glass accent */}
          <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-teal-500/10 to-emerald-500/5 opacity-50 border border-white/10" />
        </motion.div>
      ))}
    </div>
  );
}
