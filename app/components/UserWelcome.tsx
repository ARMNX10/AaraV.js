'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getUserIPInfo, obfuscateIP } from '../utils/userInfo';

interface ConnectionInfo {
  ip: string;
  network: string;
  location: string;
  isp: string;
  device: string;
}

export default function UserWelcome() {
  const [isVisible, setIsVisible] = useState(true);
  const [connectionInfo, setConnectionInfo] = useState<ConnectionInfo | null>(null);
  const [obfuscatedIP, setObfuscatedIP] = useState('LOADING');

  useEffect(() => {
    // Fetch IP info when component mounts
    const fetchIP = async () => {
      try {
        const info = await getUserIPInfo();
        if (info) {
          setConnectionInfo(info);
          setObfuscatedIP(obfuscateIP(info.ip));
          
          // Auto-hide after 3 seconds
          setTimeout(() => {
            setIsVisible(false);
          }, 3000);
        }
      } catch (error) {
        console.error('Error loading IP info:', error);
        setObfuscatedIP('HIDDEN');
        setIsVisible(false);
      }
    };

    fetchIP();
  }, []);

  // Handle click to dismiss
  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && connectionInfo && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleDismiss}
        >
          <div className="text-center px-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-wider"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              WELCOME
            </motion.h1>
            
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-2xl md:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                <span className="neon-text">{obfuscatedIP}</span>
              </div>
              <div className="absolute inset-0 bg-green-400/20 blur-2xl -z-10 rounded-full"></div>
            </motion.div>

            <motion.p 
              className="mt-8 text-gray-400 text-sm md:text-base max-w-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
          
            </motion.p>
          </div>

          {/* Add some subtle animated particles for effect */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-green-400/30"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 50],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
