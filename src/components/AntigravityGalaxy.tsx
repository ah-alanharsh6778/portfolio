import React, { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface AntigravityGalaxyProps {
  particleCount?: number;
  repelRadius?: number;
  repelStrength?: number;
  driftSpeed?: number;
  starColor?: string;
  glowColor?: string;
  className?: string;
}

// Generates a soft circular glowing particle texture without external asset dependencies
function createCircularParticleTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(56, 189, 248, 0.85)');
  gradient.addColorStop(0.6, 'rgba(20, 184, 166, 0.35)');
  gradient.addColorStop(1, 'rgba(11, 17, 33, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

interface ParticleFieldProps {
  count: number;
  repelRadius: number;
  repelStrength: number;
  baseDriftSpeed: number;
}

const ParticleField: React.FC<ParticleFieldProps> = ({
  count = 1500,
  repelRadius = 3.2,
  repelStrength = 0.35,
  baseDriftSpeed = 0.015,
}) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const { viewport } = useThree();

  // Generate particle texture once
  const texture = useMemo(() => createCircularParticleTexture(), []);

  // Pre-allocate TypedArrays for 60fps zero-GC performance
  const { initialPositions, speeds, offsets, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const off = new Float32Array(count * 3); // current repulsion displacement (vx, vy, vz)
    const sz = new Float32Array(count);

    const xRange = 28;
    const yRange = 24;
    const zRange = 16;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Base randomized positions
      pos[i3] = (Math.random() - 0.5) * xRange;
      pos[i3 + 1] = (Math.random() - 0.5) * yRange;
      pos[i3 + 2] = (Math.random() - 0.5) * zRange;

      // Antigravity upward drift speed variation
      spd[i] = baseDriftSpeed * (0.6 + Math.random() * 0.9);

      // Initial velocity offsets (zero)
      off[i3] = 0;
      off[i3 + 1] = 0;
      off[i3 + 2] = 0;

      // Varied star sizes
      sz[i] = 0.08 + Math.random() * 0.18;
    }

    return {
      initialPositions: pos,
      speeds: spd,
      offsets: off,
      sizes: sz,
    };
  }, [count, baseDriftSpeed]);

  // Working positions array that updates every frame
  const currentPositions = useMemo(() => new Float32Array(initialPositions), [initialPositions]);

  // High-performance 60fps physics loop (direct buffer manipulation, 0 React re-renders)
  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const geo = pointsRef.current.geometry;
    const positionAttr = geo.attributes.position as THREE.BufferAttribute;
    const array = positionAttr.array as Float32Array;

    // Normalised mouse coordinates mapped to world-space viewport at z=0
    const mouseX = (state.pointer.x * viewport.width) / 2;
    const mouseY = (state.pointer.y * viewport.height) / 2;

    const yBoundaryTop = viewport.height / 2 + 3;
    const yBoundaryBottom = -viewport.height / 2 - 3;
    const xBoundary = viewport.width / 2 + 4;

    const cappedDelta = Math.min(delta, 0.05); // prevent teleportation on tab switch
    const frameRateRatio = cappedDelta * 60;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // 1. Antigravity Upward Drift (Base Motion)
      initialPositions[i3 + 1] += speeds[i] * frameRateRatio;

      // Wrap around when reaching top threshold
      if (initialPositions[i3 + 1] > yBoundaryTop) {
        initialPositions[i3 + 1] = yBoundaryBottom;
        initialPositions[i3] = (Math.random() - 0.5) * xBoundary * 2;
      }

      // 2. Cursor Repulsion Interaction
      const currentX = initialPositions[i3] + offsets[i3];
      const currentY = initialPositions[i3 + 1] + offsets[i3 + 1];

      const dx = currentX - mouseX;
      const dy = currentY - mouseY;
      const distSq = dx * dx + dy * dy;
      const radiusSq = repelRadius * repelRadius;

      if (distSq < radiusSq && distSq > 0.0001) {
        const dist = Math.sqrt(distSq);
        const force = (1 - dist / repelRadius) * repelStrength * frameRateRatio;
        const normX = dx / dist;
        const normY = dy / dist;

        // Apply repulsion acceleration outwards
        offsets[i3] += normX * force;
        offsets[i3 + 1] += normY * force;
      }

      // 3. Smooth Elastic Return & Damping Physics (Hooke's Law damping)
      offsets[i3] *= 0.91; // friction damping back to 0
      offsets[i3 + 1] *= 0.91;

      // 4. Update Final Rendered Vertex Buffer
      array[i3] = initialPositions[i3] + offsets[i3];
      array[i3 + 1] = initialPositions[i3 + 1] + offsets[i3 + 1];
      array[i3 + 2] = initialPositions[i3 + 2];
    }

    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[currentPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.24}
        map={texture}
        transparent={true}
        alphaTest={0.01}
        opacity={0.88}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
};

export const AntigravityGalaxy: React.FC<AntigravityGalaxyProps> = ({
  particleCount = 1500,
  repelRadius = 3.4,
  repelStrength = 0.38,
  driftSpeed = 0.016,
  className = 'fixed inset-0 pointer-events-none z-0',
}) => {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 14], fov: 60, near: 0.1, far: 1000 }}
        dpr={[1, 2]} // Performance optimization: clamps DPR to max 2
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
          alpha: true,
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <ParticleField
          count={particleCount}
          repelRadius={repelRadius}
          repelStrength={repelStrength}
          baseDriftSpeed={driftSpeed}
        />
      </Canvas>
    </div>
  );
};

export default AntigravityGalaxy;
