'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp, Terminal, Code2 } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ARMNX10',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aaravmaan',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:aaravmaan24@gmail.com',
      label: 'Email',
      color: 'hover:text-green-400'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0a001a] border-t border-gray-800 mt-16 md:mt-20 relative z-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Brand Section - Left Side */}
          <div className="md:pr-6 lg:pr-10">
            <div className="flex items-center space-x-3 mb-4 sm:mb-5">
              <Terminal className="text-[#7639e9] w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
              <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7639e9] to-[#9c64f7]">
                Aarav Maan
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-lg">
              Building intelligent solutions and pushing the boundaries of AI and machine learning.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 sm:p-2.5 rounded-full bg-gray-900/50 text-gray-300 hover:text-white transition-all ${link.color} border border-gray-800 hover:border-[#9c64f7]/30`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links - Right Side */}
          <div className="pt-6 md:pt-0 md:pl-6 lg:pl-10 md:border-l border-gray-800">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6 pb-2 border-b border-gray-800">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-3 sm:gap-4">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="w-full"
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#9c64f7] transition-colors text-sm flex items-center group w-full text-left py-1"
                  >
                    <span className="mr-2 sm:mr-3 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-sm sm:text-base">{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 sm:mt-12 md:mt-14 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-500 text-xs sm:text-sm">
              &copy; {currentYear} Aarav Maan. All rights reserved.
            </p>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center justify-center sm:justify-start space-x-2 text-gray-500 hover:text-[#9c64f7] transition-colors duration-200 group mt-4 sm:mt-0 px-4 py-2 rounded-lg hover:bg-gray-900/50 w-full sm:w-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xs sm:text-sm font-medium">Back to Top</span>
              <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating Matrix Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {Array.from({ length: 10 }).map((_, i) => {
          // Use a consistent seed based on the index
          const seed = i % 8;
          const matrixChars = ['01', '10', 'AI', 'ML', '{}', '<>', '//', '&&'];
          
          return (
            <motion.div
              key={i}
              className="absolute text-blue-500/10 font-mono text-xs"
              style={{
                left: `${(i * 97) % 90 + 5}%`, // Deterministic positioning
                top: `${(i * 149) % 90 + 5}%`,
              }}
              initial={{ opacity: 0.1 }}
              animate={{
                y: [0, 20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + (i % 3) * 2, // More deterministic timing
                repeat: Infinity,
                delay: (i % 4) * 0.5,
              }}
            >
              {matrixChars[seed]}
            </motion.div>
          );
        })}
      </div>
    </footer>
  )
}