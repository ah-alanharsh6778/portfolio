import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingCubes() {
  const cubes = [
    { size: 'w-24 h-24 sm:w-28 sm:h-28', top: '12%', left: '6%', duration: 14, delay: 0, rotX: 25, rotY: 35 },
    { size: 'w-32 h-32 sm:w-40 sm:h-40', top: '32%', right: '8%', duration: 18, delay: 1, rotX: -30, rotY: 45 },
    { size: 'w-20 h-20 sm:w-24 sm:h-24', top: '58%', left: '10%', duration: 16, delay: 2, rotX: 45, rotY: -25 },
    { size: 'w-28 h-28 sm:w-36 sm:h-36', top: '75%', right: '6%', duration: 20, delay: 1.5, rotX: -20, rotY: 30 },
    { size: 'w-16 h-16 sm:w-20 sm:h-20', top: '88%', left: '18%', duration: 12, delay: 0.5, rotX: 35, rotY: -35 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden perspective-1200">
      {/* Subtle Teal, Cyan and Emerald Ambient Radial Glows */}
      <div className="absolute top-[8%] left-[15%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-teal-500/10 rounded-full blur-[170px]" />
      <div className="absolute top-[45%] right-[10%] w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-emerald-500/10 rounded-full blur-[180px]" />
      <div className="absolute bottom-[8%] left-[12%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-indigo-600/10 rounded-full blur-[160px]" />

      {/* Floating 3D Glassmorphic Geometric Polygons */}
      {cubes.map((cube, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${cube.size} rounded-3xl bg-gradient-to-br from-white/[0.06] via-teal-500/[0.03] to-transparent backdrop-blur-xl border border-teal-500/25 shadow-[0_20px_50px_rgba(20,184,166,0.12)]`}
          style={{
            top: cube.top,
            left: cube.left,
            right: cube.right,
            transformStyle: 'preserve-3d',
          }}
          animate={{
            y: [0, -35, 0],
            rotateX: [cube.rotX, cube.rotX + 40, cube.rotX],
            rotateY: [cube.rotY, cube.rotY + 50, cube.rotY],
            rotateZ: [0, 20, 0],
          }}
          transition={{
            duration: cube.duration,
            repeat: Infinity,
            repeatType: 'easeInOut',
            delay: cube.delay,
            ease: 'easeInOut',
          }}
        >
          {/* Inner 3D Glass Facet & Prismatic Edge */}
          <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-teal-400/15 via-emerald-400/5 to-transparent opacity-60 border border-white/20" />
          <div className="absolute top-2 left-2 right-2 h-1/2 rounded-t-xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}
