'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VisitorIP = () => {
  const [ip, setIp] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showWelcome, setShowWelcome] = useState<boolean>(false);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLeaving, setIsLeaving] = useState<boolean>(false);
  const [isGlitching, setIsGlitching] = useState<boolean>(false);
  const [isLoadingColor, setIsLoadingColor] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Toggle loading color between red and blue
    const colorInterval = setInterval(() => {
      if (isLoading) {
        setIsLoadingColor(prev => !prev);
      }
    }, 500);
    
    // Show welcome message after initial render
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true);
      
      // Start fetching IP after welcome message appears
      const fetchTimer = setTimeout(() => {
        fetchIP();
      }, 1000);
      
      return () => clearTimeout(fetchTimer);
    }, 500);
    
    return () => {
      clearTimeout(welcomeTimer);
      clearInterval(colorInterval);
    };
  }, [isLoading]);

  const fetchIP = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api64.ipify.org?format=json');
      
      if (!response.ok) {
        throw new Error('Failed to fetch IP');
      }
      
      const data = await response.json();
      setIp(data.ip);
    } catch (err) {
      console.error('Error fetching IP:', err);
      setError('Unable to fetch IP');
    } finally {
      // Add a small delay before marking as done for better UX
      setTimeout(() => {
        setIsLoading(false);
        setAnimationComplete(true);
      }, 1500);
    }
  };

  // Decrypting text animation
  const characters = '0123456789ABCDEF';
  const [displayText, setDisplayText] = useState<string>('000.000.000.000');
  
  useEffect(() => {
    if (isLoading && showWelcome) {
      const interval = setInterval(() => {
        setDisplayText(prev => {
          let result = '';
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            if (i < 2) result += '.';
          }
          return result;
        });
      }, 50);
      
      return () => clearInterval(interval);
    } else if (ip) {
      setDisplayText(ip);
    }
  }, [isLoading, ip, showWelcome]);

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
            onMouseEnter={() => {
              if (!isLoading) {
                setIsHovered(true);
                setIsLeaving(false);
                setIsGlitching(false);
              }
            }}
            onMouseLeave={() => {
              if (isLoading) return;
              
              setIsLeaving(true);
              setIsGlitching(true);
              
              // Glitch for 800ms, then blur
              const glitchInterval = setInterval(() => {
                // Randomly toggle between glitch states
                setIsHovered(prev => !prev);
              }, 100);
              
              setTimeout(() => {
                clearInterval(glitchInterval);
                setIsGlitching(false);
                setIsHovered(false);
              }, 800);
            }}
          >
            <div className="flex flex-col items-center">
              <motion.div 
                className={`text-lg md:text-xl font-mono flex items-center gap-2 ${
                  isLoading 
                    ? (isLoadingColor ? 'text-blue-400' : 'text-red-400')
                    : 'text-green-400/70'
                } transition-colors duration-500 ${
                  isGlitching ? 'text-red-400' : ''
                } ${
                  isHovered && !isLoading ? 'blur-0 scale-110' : 'blur-sm scale-100'
                } drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]`}
                style={{
                  transition: isGlitching ? 'all 0.1s linear' : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isGlitching ? 'translateX(0)' : '',
                  animation: isGlitching ? 'glitch 0.1s infinite' : 'none'
                }}
              >
                <span>Welcome</span>
                <span className="font-bold">
                  {displayText}
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
                  ;)
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
