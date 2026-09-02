import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Background() {
  const shouldReduceMotion = useReducedMotion();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // 4D Subtle Temporal & Parallax Motion Tracking
  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  // In-Place Floating 3D Glass Cubes placed at strategic perimeter positions
  const cubes = [
    {
      size: 'w-18 h-18 sm:w-26 sm:h-26',
      top: '12%',
      left: '6%',
      rotX: 25,
      rotY: 30,
      rotZ: 10,
      duration: 7,
      delay: 0,
    },
    {
      size: 'w-22 h-22 sm:w-32 sm:h-32',
      top: '20%',
      right: '8%',
      rotX: -20,
      rotY: 40,
      rotZ: -15,
      duration: 8.5,
      delay: 0.8,
    },
    {
      size: 'w-16 h-16 sm:w-22 sm:h-22',
      top: '64%',
      left: '7%',
      rotX: 35,
      rotY: -25,
      rotZ: 12,
      duration: 6.5,
      delay: 1.5,
    },
    {
      size: 'w-20 h-20 sm:w-28 sm:h-28',
      top: '74%',
      right: '6%',
      rotX: -25,
      rotY: 30,
      rotZ: -8,
      duration: 9,
      delay: 0.4,
    },
    {
      size: 'w-14 h-14 sm:w-18 sm:h-18',
      top: '88%',
      left: '18%',
      rotX: 30,
      rotY: -35,
      rotZ: 18,
      duration: 6,
      delay: 1.2,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#000000] perspective-1200">
      
      {/* 4D DEEP SPACE LAYER (Soft atmospheric blur so Frontend UI pops with maximum clarity) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: mouseOffset.x * 0.4,
                y: mouseOffset.y * 0.4,
              }
        }
        transition={{ type: 'spring', damping: 30, stiffness: 100 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* 1. REAL 3D RINGED SATURN (Upper Right Deep Space with Soft Depth-of-Field) */}
        <motion.div
          animate={{
            y: [0, -16, 0],
            x: [0, 12, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[2%] -right-[6%] sm:right-[3%] w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] pointer-events-none opacity-45 select-none filter blur-[1.2px]"
          style={{
            maskImage: 'radial-gradient(circle at 50% 50%, black 65%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 65%, transparent 95%)',
          }}
        >
          <img
            src="/saturn.jpg"
            alt="Real Ringed Saturn Planet"
            className="w-full h-full object-contain mix-blend-screen"
          />
        </motion.div>

        {/* 2. REAL 3D EARTH (Middle Left Deep Space with Soft Depth-of-Field) */}
        <motion.div
          animate={{
            y: [0, 18, 0],
            x: [0, -14, 0],
            rotate: [0, -6, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-[32%] left-[3%] sm:left-[6%] w-[180px] sm:w-[250px] h-[180px] sm:h-[250px] pointer-events-none opacity-40 select-none filter blur-[1.2px]"
          style={{
            maskImage: 'radial-gradient(circle at 50% 50%, black 68%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 68%, transparent 95%)',
          }}
        >
          <img
            src="/earth.jpg"
            alt="Real 3D Earth Planet"
            className="w-full h-full object-contain mix-blend-screen"
          />
        </motion.div>

        {/* 3. REAL 3D MARS (Lower Right Deep Space with Soft Depth-of-Field) */}
        <motion.div
          animate={{
            y: [0, -14, 0],
            x: [0, -12, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-[68%] right-[4%] sm:right-[10%] w-[160px] sm:w-[210px] h-[160px] sm:h-[210px] pointer-events-none opacity-40 select-none filter blur-[1.2px]"
          style={{
            maskImage: 'radial-gradient(circle at 50% 50%, black 68%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 68%, transparent 95%)',
          }}
        >
          <img
            src="/mars.jpg"
            alt="Real 3D Mars Planet"
            className="w-full h-full object-contain mix-blend-screen"
          />
        </motion.div>
      </motion.div>

      {/* 4. IN-PLACE FLOATING 3D GLASS CUBES (Sharp Crisp Foreground Layer) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: mouseOffset.x * 0.8,
                y: mouseOffset.y * 0.8,
              }
        }
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        className="absolute inset-0 pointer-events-none"
      >
        {cubes.map((cube, index) => (
          <motion.div
            key={index}
            className={`absolute ${cube.size} rounded-3xl bg-neutral-950/70 backdrop-blur-md border border-teal-500/35 shadow-[0_12px_36px_rgba(20,184,166,0.15)] pointer-events-none`}
            style={{
              top: cube.top,
              left: cube.left,
              right: cube.right,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              y: [0, -22, 0], // Smooth in-place vertical hover
              rotateX: [cube.rotX, cube.rotX + 30, cube.rotX], // In-place 3D rotation
              rotateY: [cube.rotY, cube.rotY + 40, cube.rotY],
              rotateZ: [cube.rotZ, cube.rotZ + 12, cube.rotZ],
            }}
            transition={{
              duration: cube.duration,
              repeat: Infinity,
              repeatType: 'easeInOut',
              ease: 'easeInOut',
              delay: cube.delay,
            }}
          >
            {/* Internal 3D glass facet & luminous border reflection */}
            <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-teal-400/15 via-neutral-900/40 to-transparent border border-white/15" />
            <div className="absolute top-2 left-2 right-2 h-1/2 rounded-t-xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      {/* 5. SUBTLE HIGH-CONTRAST TECH GRID */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 6. VIGNETTE OVERLAY (Ensures Frontend UI text & cards remain primary focus) */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#000000]/40 to-[#000000]/85 pointer-events-none" />

    </div>
  );
}
