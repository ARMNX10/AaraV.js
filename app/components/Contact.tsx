'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, MapPin, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gurugram, Haryana, India',
      color: 'purple'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'aaravmaan24@gmail.com',
      color: 'red'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ARMNX10',
      color: 'gray',
      hoverColor: 'hover:bg-gray-800/50 hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aaravmaan',
      color: 'blue',
      hoverColor: 'hover:bg-blue-800/50 hover:text-white'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:aaravmaan24@gmail.com',
      color: 'red',
      hoverColor: 'hover:bg-red-800/50 hover:text-white'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-[#060010] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7639e9] to-[#9c64f7]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Have a project in mind or want to discuss potential opportunities? Let's connect!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-gray-400">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
                Feel free to reach out through any of the platforms below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800/50"
                  whileHover={{ x: 5, backgroundColor: 'rgba(17, 24, 39, 0.7)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`p-2 rounded-lg bg-${item.color}-500/10`}>
                    <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-medium text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            
          </motion.div>

          {/* Connect Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-br from-[#0a001a] to-[#1a0a2e] rounded-2xl p-8 border border-gray-800/50 flex flex-col items-center justify-center text-center h-full"
          >
            <div className="bg-[#7639e9]/10 p-4 rounded-full mb-6">
              <MessageCircle className="w-10 h-10 text-[#9c64f7]" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">Let's Work Together</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              Interested in working together or have a project in mind? Connect with me on LinkedIn or check out my GitHub for more of my work.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <motion.a
                href="https://www.linkedin.com/in/aaravmaan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0a66c2] hover:bg-[#0a5cad] text-white rounded-lg flex items-center gap-2 transition-colors flex-1 justify-center max-w-xs"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </motion.a>
              
              <motion.a
                href="https://github.com/ARMNX10"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center gap-2 transition-colors flex-1 justify-center max-w-xs"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5" />
                View GitHub
              </motion.a>
            </div>
            

          </motion.div>
        </div>
      </div>
    </section>
  )
}