'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Download, ExternalLink, Github, Linkedin } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import TypewriterEffect from './TypewriterEffect'
import CorruptedText from './CorruptedText'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Mouse movement is now handled by InteractiveBackground component

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fade effect for hero section */}
      <motion.div style={{ opacity }} className="fixed inset-0" />

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="inline-flex flex-col items-start">
              <span className="text-3xl md:text-4xl mb-2 text-gray-400">
                Hi, I'm
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7639e9] to-[#9c64f7]">
                <CorruptedText 
                  text="Aarav Maan" 
                  intervalDuration={50}
                />
              </span>
              <span className="text-2xl md:text-3xl mt-4 text-gray-300">
                <TypewriterEffect 
                  words={['AI Engineer', 'Machine Learning Developer', 'Software Engineer', 'Tech Enthusiast']} 
                  speed={50}
                  deleteSpeed={30}
                  delayBetweenWords={1000}
                />
              </span>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-mono"
          >
            // RESEARCH - CODE - DEBUG
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center space-y-4 mb-12 w-full max-w-xs mx-auto"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#projects')
              }}
              className="w-full text-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/20"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/drive/folders/13XW5NWdLPb8sS0T0UhJeGi1KxJ4EJEug?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-full font-medium transition-all duration-300 hover:from-gray-700 hover:to-gray-600 hover:shadow-lg hover:shadow-gray-500/10"
            >
              Request CV/Resume Access
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/ARMNX10"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-300 hover:bg-[#7639e9] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/aaravmaan"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-300 hover:bg-[#0a66c2] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center">
        <motion.div 
          className="flex flex-col items-center cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={() => scrollToSection('#about')}
        >
          <div className="flex flex-col items-center space-y-0.5 h-16">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="relative text-gray-400 group-hover:text-amber-400 transition-all duration-300"
                animate={{
                  y: [0, 8, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                whileHover={{
                  scale: 1.1,
                  filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.7))',
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: 0,
                    x: [0, -1, 1, -1, 1, 0],
                    y: [0, -1, 1, -1, 1, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                >
                  <ChevronDown size={24} strokeWidth={2.5} className="text-amber-300" />
                </motion.div>
                <ChevronDown size={24} strokeWidth={2.5} className="relative z-10" />
              </motion.div>
            ))}
          </div>
          <style jsx>{`
            @keyframes glitch {
              0% { filter: drop-shadow(0 0 5px rgba(245, 158, 11, 0.8)); }
              20% { filter: drop-shadow(2px 0 6px rgba(245, 158, 11, 0.9)) brightness(1.2); }
              40% { filter: drop-shadow(-2px 0 7px rgba(245, 158, 11, 0.7)) brightness(1.1); }
              60% { filter: drop-shadow(0 2px 6px rgba(245, 158, 11, 0.8)); }
              80% { filter: drop-shadow(0 -2px 5px rgba(245, 158, 11, 0.9)) brightness(1.15); }
              100% { filter: drop-shadow(0 0 5px rgba(245, 158, 11, 0.8)); }
            }
            .group:hover .relative {
              animation: glitch 0.8s infinite;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  )
}