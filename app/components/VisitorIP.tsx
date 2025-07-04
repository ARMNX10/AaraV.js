'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CorruptedText from './CorruptedText';

const VisitorIP = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ipAddress, setIpAddress] = useState<string>('');
  const [showWelcome, setShowWelcome] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isGlitching, setIsGlitching] = useState<boolean>(false);
  const [isLoadingColor, setIsLoadingColor] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchIP = useCallback(async () => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      
      if (!response.ok) {
        throw new Error('Failed to fetch IP');
      }
      
      const data = await response.json();
      const ip = data.ip;
      
      // Validate IP format (simple check for IPv4 or IPv6)
      if (!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d+)?$/.test(ip) && 
          !/^[0-9a-fA-F:]+$/.test(ip)) {
        throw new Error('Invalid IP format');
      }
      
      setIpAddress(ip);
      setIsLoading(false);
      
    } catch (err) {
      console.error('Error fetching IP:', err);
      setIpAddress('IP HIDDEN');
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    let colorInterval: NodeJS.Timeout;
    let welcomeTimer: NodeJS.Timeout;
    let fetchTimer: NodeJS.Timeout;

    // Toggle loading color between red and blue
    colorInterval = setInterval(() => {
      if (isLoading) {
        setIsLoadingColor(prev => !prev);
      }
    }, 500);
    
    // Show welcome message after initial render
    welcomeTimer = setTimeout(() => {
      setShowWelcome(true);
      
      // Start fetching IP after welcome message appears
      fetchTimer = setTimeout(() => {
        fetchIP();
      }, 1000);
    }, 500);
    
    // Cleanup all intervals and timeouts on component unmount
    return () => {
      clearInterval(colorInterval);
      clearTimeout(welcomeTimer);
      clearTimeout(fetchTimer);
    };
  }, [fetchIP, isLoading]);

  // Handle mouse enter/leave for the IP display
  const handleMouseEnter = () => {
    if (!isLoading) {
      setIsHovered(true);
      setIsGlitching(false);
    }
  };
  
  const handleMouseLeave = () => {
    if (isLoading) return;
    
    setIsGlitching(true);
    
    // Glitch for 800ms, then blur
    const glitchInterval = setInterval(() => {
      setIsHovered(prev => !prev);
    }, 100);
    
    setTimeout(() => {
      clearInterval(glitchInterval);
      setIsGlitching(false);
      setIsHovered(false);
    }, 400);
  };

  if (error) {
    return null; // Don't show anything if there's an error
  }

  return (
    <motion.div 
      className="text-center mb-16" // Increased bottom margin for more spacing
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col items-center">
              <motion.div 
                className="font-mono flex items-baseline gap-4 text-2xl md:text-4xl group"
                style={{
                  transition: isGlitching ? 'all 0.1s linear' : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isGlitching ? 'translateX(0)' : '',
                  animation: isGlitching ? 'glitch 0.1s infinite' : 'none'
                }}
              >
                <span className="text-white">Welcome</span>
                <span className={`font-bold ${isLoading 
                  ? (isLoadingColor ? 'text-blue-400' : 'text-red-400')
                  : 'text-green-400/70'} ${
                  isGlitching ? 'text-red-400' : ''
                } ${
                  isHovered && !isLoading ? 'blur-0 scale-110' : 'blur-md scale-100'
                } drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]`}>
                  {isLoading 
                    ? <CorruptedText text="CONNECTING..." intervalDuration={50} /> 
                    : ipAddress}
                </span>
                <motion.span
                  className="inline-block"
                  animate={{ 
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  {isHovered && !isLoading ? ';)' : ':|'}
                </motion.span>
              </motion.div>
              
              {isLoading && (
                <motion.div 
                  className="h-0.5 bg-gradient-to-r from-blue-500 to-transparent mt-1"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>{`
        @keyframes glitch {
          0% { 
            transform: translate(0);
            text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
          }
          20% { 
            transform: translate(-2px, 2px);
            text-shadow: 0 0 12px rgba(239, 68, 68, 0.7);
          }
          40% { 
            transform: translate(-2px, -2px);
            text-shadow: 0 0 8px rgba(239, 68, 68, 0.9);
          }
          60% { 
            transform: translate(2px, 2px);
            text-shadow: 0 0 10px rgba(239, 68, 68, 0.7);
          }
          80% { 
            transform: translate(2px, -2px);
            text-shadow: 0 0 12px rgba(239, 68, 68, 0.5);
          }
          100% { 
            transform: translate(0);
            text-shadow: 0 0 8px rgba(239, 68, 68, 0.3);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default VisitorIP;
