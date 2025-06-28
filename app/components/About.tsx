'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Code2, Database, Zap, Award, Users } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '15+' },
    { icon: Brain, label: 'AI Agents Built', value: '3+' },
    { icon: Award, label: 'Amazon ML Summer School-25', value: 'Achivement' },
  ]

  const highlights = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Specialized in developing AI agents using LangChain, LangGraph, OpenAI, and Groq. Experience with CNNs, DNNs, and modern ML frameworks.'
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Full-stack development with Python, Next.js, and modern web technologies. Strong foundation in data structures and algorithms.'
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Expert in data deduplication, OCR systems, and automated data extraction using ensemble methods and text-embedding models.'
    },
    {
      icon: Zap,
      title: 'Automation & Optimization',
      description: 'Built automation workflows, token streaming solutions, and optimized systems for real-time processing and analytics.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Passionate AI Engineer driving innovation through cutting-edge technology
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Professional Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a self-motivated and detail-oriented AI Engineer with hands-on experience 
                  in Machine Learning, AI Development, and Software Engineering. Currently working 
                  as an AI Engineer Intern at <span className="text-blue-400 font-semibold">DecisionTree Analytics</span>, 
                  where I develop and optimize AI agents using cutting-edge technologies.
                </p>
                <p>
                  Successfully completed the prestigious <span className="text-purple-400 font-semibold">Amazon ML Summer School</span>, 
                  selected among 3,000 students from 20,000+ applications. This intensive program 
                  deepened my expertise in CNNs, DNNs, and real-world AI applications.
                </p>
                <p>
                  Previously interned at <span className="text-green-400 font-semibold">Colt Technology Services</span>, 
                  where I enhanced software quality through bug identification and test case optimization, 
                  contributing to improved user experience across multiple projects.
                </p>
                <p>
                  Pursued B.Tech in <b>Computer Science Engineering with IoT</b> specialization 
                  at <span className="text-yellow-400 font-semibold">VIT Vellore</span>, maintained 
                  First Division academic performance while actively engaging in practical AI research.
                </p>
              </div>
            </motion.div>

            {/* Profile Image Placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="relative w-80 h-80 mx-auto">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full animate-spin" 
                     style={{ animationDuration: '8s' }}></div>
                
                {/* Image Container */}
                <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-white font-mono text-lg">AI Engineer</p>
                      <p className="text-gray-400 font-mono text-sm">AGENTS.exe</p>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-blue-500/20 p-3 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Code2 className="w-6 h-6 text-blue-400" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-purple-500/20 p-3 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Database className="w-6 h-6 text-purple-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 flex-1 min-w-[200px] max-w-[250px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <highlight.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{highlight.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}