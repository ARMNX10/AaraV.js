'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Create transforms based on mouse position
  const x1 = useTransform(mouseX, [0, 1], [-30, 30]);
  const y1 = useTransform(mouseY, [0, 1], [-30, 30]);
  const x2 = useTransform(mouseX, [0, 1], [30, -30]);
  const y2 = useTransform(mouseY, [0, 1], [30, -30]);

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
      
      {/* Mouse-reactive orbs */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[400px] rounded-full bg-gradient-to-br from-blue-900/15 to-blue-600/10 blur-xl"
        style={{
          x: x1,
          y: y1,
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] rounded-full bg-gradient-to-br from-purple-900/15 to-purple-600/10 blur-xl"
        style={{
          x: x2,
          y: y2,
        }}
      />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'5\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      ></div>
      
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]"></div>
    </div>
  );
}
