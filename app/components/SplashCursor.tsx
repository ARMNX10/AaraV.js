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
  
  const createParticles = (x: number, y: number) => {
    const colors = ['#7639e9', '#9c64f7', '#b78aff', '#d1b3ff'];
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 10 + 5;
      
      particle.style.position = 'fixed';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '9999';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      document.body.appendChild(particle);
      particlesRef.current.push(particle);
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = 1 + Math.random() * 3;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      
      let opacity = 1;
      const fade = setInterval(() => {
        opacity -= 0.05;
        if (opacity <= 0) {
          clearInterval(fade);
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            particlesRef.current = particlesRef.current.filter(p => p !== particle);
          }
        } else {
          const currentX = parseFloat(particle.style.left);
          const currentY = parseFloat(particle.style.top);
          
          particle.style.left = `${currentX + vx}px`;
          particle.style.top = `${currentY + vy}px`;
          particle.style.opacity = opacity.toString();
        }
      }, 30);
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
