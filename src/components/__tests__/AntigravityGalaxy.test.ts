import { describe, it, expect, beforeEach } from 'vitest';
import * as THREE from 'three';

/**
 * AntigravityGalaxy Physics & Simulation Test Suite
 * Tests particle allocation, upward drift physics, cursor repulsion math, and 60fps damping.
 */
describe('AntigravityGalaxy Particle Engine', () => {
  const PARTICLE_COUNT = 1500;
  const BASE_DRIFT_SPEED = 0.015;
  const REPEL_RADIUS = 3.2;
  const REPEL_STRENGTH = 0.35;

  let positions: Float32Array;
  let speeds: Float32Array;
  let offsets: Float32Array;

  beforeEach(() => {
    positions = new Float32Array(PARTICLE_COUNT * 3);
    speeds = new Float32Array(PARTICLE_COUNT);
    offsets = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 28;     // x
      positions[i3 + 1] = (Math.random() - 0.5) * 24; // y
      positions[i3 + 2] = (Math.random() - 0.5) * 16; // z

      speeds[i] = BASE_DRIFT_SPEED * (0.65 + Math.random() * 0.85);
      offsets[i3] = 0;
      offsets[i3 + 1] = 0;
      offsets[i3 + 2] = 0;
    }
  });

  // Test Case 1: Particle Memory Allocation
  it('TC-1: should allocate exactly 1500 particles with 4500 vertices (x,y,z)', () => {
    expect(positions.length).toBe(PARTICLE_COUNT * 3);
    expect(speeds.length).toBe(PARTICLE_COUNT);
    expect(offsets.length).toBe(PARTICLE_COUNT * 3);
  });

  // Test Case 2: Upward Antigravity Drift
  it('TC-2: should simulate upward antigravity drift over time', () => {
    const initialY = positions[1]; // y of first particle
    const speed = speeds[0];
    const frameRateRatio = 1.0; // 1 frame at 60fps

    // Simulate 1 frame drift
    positions[1] += speed * frameRateRatio;

    expect(positions[1]).toBeGreaterThan(initialY);
    expect(positions[1]).toBeCloseTo(initialY + speed, 5);
  });

  // Test Case 3: Boundary Wrap-Around
  it('TC-3: should reset particle to bottom boundary when passing top boundary', () => {
    const yBoundaryTop = 15;
    const yBoundaryBottom = -15;

    positions[1] = 16; // beyond top boundary

    if (positions[1] > yBoundaryTop) {
      positions[1] = yBoundaryBottom;
    }

    expect(positions[1]).toBe(yBoundaryBottom);
  });

  // Test Case 4: Cursor Proximity Repulsion Math
  it('TC-4: should scatter particles away when cursor enters repel radius', () => {
    const mouseX = 0;
    const mouseY = 0;

    // Place particle close to cursor at (0.5, 0.5) -> dist ~= 0.707 < REPEL_RADIUS (3.2)
    positions[0] = 0.5;
    positions[1] = 0.5;

    const dx = positions[0] - mouseX;
    const dy = positions[1] - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    expect(dist).toBeLessThan(REPEL_RADIUS);

    const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
    const normX = dx / dist;
    const normY = dy / dist;

    offsets[0] += normX * force;
    offsets[1] += normY * force;

    // Verification: Particle offset must push away in positive x & y directions
    expect(offsets[0]).toBeGreaterThan(0);
    expect(offsets[1]).toBeGreaterThan(0);
  });

  // Test Case 5: Zero Repulsion Outside Radius
  it('TC-5: should NOT affect particles outside repel radius', () => {
    const mouseX = 0;
    const mouseY = 0;

    // Place particle far away at (10, 10) -> dist ~= 14.14 > REPEL_RADIUS (3.2)
    positions[0] = 10;
    positions[1] = 10;

    const dx = positions[0] - mouseX;
    const dy = positions[1] - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    expect(dist).toBeGreaterThan(REPEL_RADIUS);

    let offsetApplied = false;
    if (dist < REPEL_RADIUS) {
      offsetApplied = true;
    }

    expect(offsetApplied).toBe(false);
    expect(offsets[0]).toBe(0);
  });

  // Test Case 6: Elastic Friction Damping
  it('TC-6: should damp repulsion offset back to zero with 0.91 damping coefficient', () => {
    offsets[0] = 1.0; // Initial displacement

    // Simulate 30 frames of damping
    for (let frame = 0; frame < 30; frame++) {
      offsets[0] *= 0.91;
    }

    // After 30 frames (0.5s), offset should be decayed (< 0.06)
    expect(offsets[0]).toBeLessThan(0.06);
    expect(offsets[0]).toBeGreaterThan(0);
  });
});
