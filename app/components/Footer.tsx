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
    <footer className="bg-[#0a001a] border-t border-gray-800 mt-20 relative z-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="text-[#7639e9] w-8 h-8" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7639e9] to-[#9c64f7]">
                Aarav Maan
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Building intelligent solutions and pushing the boundaries of AI and machine learning.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#9c64f7] transition-colors text-sm flex items-center"
                  >
                    <span className="mr-2">→</span> {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white transition-all ${link.color}`}
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(118, 57, 233, 0.2)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Aarav Maan. All rights reserved.
            </p>
            
            {/* Single Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-[#9c64f7] transition-colors duration-200 group mt-4 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
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