'use client';

import { useEffect, useRef } from 'react';

export default function SplashCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    
    const handleClick = (e: MouseEvent) => {
      createParticles(e.clientX, e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    // Initial position
    const initialMove = new MouseEvent('mousemove', {
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2,
    });
    window.dispatchEvent(initialMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);
  
  const createParticles = (clientX: number, clientY: number) => {
    const colors = ['#7639e9', '#9c64f7', '#b78aff', '#d1b3ff'];
    const particleCount = 12;
    const maxDistance = 40;
    const duration = 800;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 8 + 4;
      
      // Calculate angle for this particle (evenly distributed in a circle)
      const angle = (i / particleCount) * Math.PI * 2;
      const distance = (0.7 + Math.random() * 0.3) * maxDistance;
      
      // Calculate target position relative to click
      const targetX = Math.cos(angle) * distance;
      const targetY = Math.sin(angle) * distance;
      
      // Set initial position at click point
      Object.assign(particle.style, {
        position: 'fixed',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        pointerEvents: 'none',
        zIndex: '9999',
        left: `${clientX}px`,
        top: `${clientY}px`,
        transform: 'translate(-50%, -50%)',
        transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${duration}ms ease-out`,
        willChange: 'transform, opacity',
        opacity: '0.9',
        boxShadow: '0 0 8px currentColor'
      });
      
      document.body.appendChild(particle);
      particlesRef.current.push(particle);
      
      // Force a reflow
      void particle.offsetWidth;
      
      // Animate to target position
      requestAnimationFrame(() => {
        particle.style.transform = `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px))`;
        particle.style.opacity = '0';
        
        // Remove after animation completes
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            particlesRef.current = particlesRef.current.filter(p => p !== particle);
          }
        }, duration);
      });
    }
  };
  
  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full border-2 border-[#7639e9] pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease-out, width 0.3s, height 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  );
}
