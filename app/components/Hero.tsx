'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import { useRef } from 'react'
import TypewriterEffect from './TypewriterEffect'

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
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            <span className="inline-flex items-baseline">
              Hi, I'm&nbsp;
              <span className="inline-block align-middle leading-tight py-1">
                <TypewriterEffect 
                  words={['an AI Engineer', 'a Machine Learning Developer', 'a Software Engineer', 'a nerd...']} 
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
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            || RESEARCH - CODE - DEBUG ||
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
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
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