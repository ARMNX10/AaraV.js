'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function InteractiveBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Check if mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle mouse and touch movements
  useEffect(() => {
    if (!ref.current) return;
    
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      let clientX, clientY;

      if ('touches' in e) {
        // Touch event
        if (e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          return; // No touch points
        }
      } else {
        // Mouse event
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // Update position with bounds checking
      const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
      
      mouseX.set(x);
      mouseY.set(y);
    };

    // Handle touch end to reset position on mobile
    const handleTouchEnd = () => {
      if (isMobile) {
        // Move to center on touch end for mobile
        mouseX.set(0.5);
        mouseY.set(0.5);
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, mouseX, mouseY]);

  // Create transforms based on pointer position with reduced movement range for mobile
  const movementRange = isMobile ? 15 : 30;
  const x1 = useTransform(springX, [0, 1], [-movementRange, movementRange]);
  const y1 = useTransform(springY, [0, 1], [-movementRange, movementRange]);
  const x2 = useTransform(springX, [0, 1], [movementRange, -movementRange]);
  const y2 = useTransform(springY, [0, 1], [movementRange, -movementRange]);

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient - more subtle and darker */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900"></div>
      
      {/* Mouse-reactive orbs - more subtle */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[400px] rounded-full bg-gradient-to-br from-blue-900/10 to-blue-600/5 blur-2xl transition-transform duration-1000 ease-out"
        style={{
          x: x1,
          y: y1,
          scale: isMobile ? 0.8 : 1,
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] rounded-full bg-gradient-to-br from-purple-900/10 to-purple-600/5 blur-2xl transition-transform duration-1000 ease-out"
        style={{
          x: x2,
          y: y2,
          scale: isMobile ? 0.8 : 1,
        }}
      />
      
      {/* Subtle noise texture - more subtle */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      ></div>
      
      {/* Subtle grid - more subtle */}
      <div 
        className="absolute inset-0 opacity-3" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Vignette - more subtle */}
      <div className="absolute inset-0 shadow-[inset_0_0_300px_rgba(0,0,0,0.7)]"></div>
    </div>
  );
}
