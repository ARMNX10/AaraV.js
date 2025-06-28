'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  const matrixChars = ['0', '1', 'A', 'M', 'X', 'R', 'I', 'V']
  const [isClient, setIsClient] = useState(false)
  
  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-500 font-mono text-sm opacity-20"
              initial={{ 
                x: '50%',
                y: -50 
              }}
              animate={{ 
                y: '100vh'
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {isClient ? matrixChars[Math.floor(Math.random() * matrixChars.length)] : '0'}
            </motion.div>
          ))}
        </div>

        {/* MATRIX Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-6xl font-bold mb-4 gradient-text font-mono">
            OMEGA-LOCK
          </h1>
          <p className="text-xl text-gray-400 mb-8 font-mono">
            Initializing Energon Flow....
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-80 bg-gray-800 rounded-full h-2 mb-4 relative z-10">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Progress Text */}
        <motion.p
          className="text-gray-400 font-mono relative z-10"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {progress}% Complete
        </motion.p>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-4 relative z-10">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}