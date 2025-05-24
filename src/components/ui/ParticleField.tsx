'use client';

import { motion, useAnimate } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

interface ParticleFieldProps {
  count?: number;
  color?: string;
}

// Deterministic particle generation function - pure calculation
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    // Use fixed mathematical calculations without Math.random
    const angle = (i * (2 * Math.PI)) / count;
    const x = 50 + 30 * Math.cos(angle);
    const y = 50 + 30 * Math.sin(angle);
    const size = 2 + (i % 2);
    
    return {
      id: i,
      x,
      y,
      size,
      // Initial state must match between server and client
      initialTransform: 'translate(0px, 0px)',
      animation: {
        // Use angle-based offsets for deterministic movement
        x: 15 * Math.cos(angle + Math.PI),
        y: 15 * Math.sin(angle + Math.PI),
        duration: 10 + (i % 5) * 2 // Deterministic duration 10-18s
      }
    };
  });
};

export const ParticleField: React.FC<ParticleFieldProps> = ({ 
  count = 40, 
  color = "blue" 
}) => {
  // Use useMemo to ensure consistent particle generation
  const particles = useMemo(() => generateParticles(count), [count]);
  const [scope, animate] = useAnimate();
  const [isClient, setIsClient] = useState(false);

  // Mark component as client-side rendered
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle animations only after client-side hydration is complete
  useEffect(() => {
    if (!isClient) return;

    const animations = particles.map((particle) => {
      return animate(
        `[data-particle="${particle.id}"]`,
        {
          transform: [
            particle.initialTransform,
            `translate(${particle.animation.x}px, ${particle.animation.y}px)`
          ],
          opacity: [0.2, 0.5, 0.2],
        },
        {
          duration: particle.animation.duration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }
      );
    });

    return () => {
      animations.forEach(animation => animation.stop());
    };
  }, [particles, animate, isClient]);

  // Render static particles initially
  return (
    <div ref={scope} className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          data-particle={particle.id}
          className={`absolute rounded-full opacity-20 bg-${color}-400`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: particle.initialTransform,
          }}
        />
      ))}
    </div>
  );
}
