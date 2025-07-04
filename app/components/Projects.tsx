'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Brain, FileText, Eye, Mic, Search, Volume2, Calendar, Calculator } from 'lucide-react'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView: false
  })

  const projects = [
    {
      title: 'MATRIX AI Desktop Assistant',
      description: 'A sophisticated voice-activated AI assistant powered by Groq\'s Llama 4-Scout model with intelligent intent analysis, web search capabilities, and multi-interface support.',
      longDescription: 'Developed a comprehensive AI assistant featuring advanced workflow orchestration with LangGraph, decision routing between AI processing, web search, and calculator functions. Includes conversational memory, contextual follow-up detection, and system control capabilities.',
      features: [
        'Voice-activated AI assistant with Groq\'s Llama 4-Scout model',
        'LangGraph workflow orchestration with intelligent decision routing',
        'Web search capabilities and calculator functions',
        'Conversational memory and contextual follow-up detection',
        'System volume/brightness control and music playback',
        'Website opening via voice commands and time queries',
        'Retrieval-augmented conversation history with custom LangMem'
      ],
      technologies: ['Python', 'LangGraph', 'Groq API', 'Serper API', 'SpeechRecognition', 'pyttsx3', 'LangChain'],
      github: 'https://github.com/ARMNX10/MATRIX-ASSIST',
      icon: Brain,
      color: 'blue',
      category: 'AI/ML'
    },
    {
      title: 'MATRIX Parser',
      description: 'An automated data extraction system that eliminates manual processing of structured documents, reducing operational overhead by 85% through intelligent scripting interfaces.',
      longDescription: 'Engineered an advanced OCR and data processing system with intelligent row and column detection algorithms for financial and business documents. Built with Google Cloud Vision API integration and intuitive frontend interface for creating reusable custom scripts.',
      features: [
        'Automated data extraction with 85% operational overhead reduction',
        'Advanced OCR row and column detection algorithms',
        '95% data accuracy with processing time reduced from hours to minutes',
        'Google Cloud Vision API integration',
        'Intuitive frontend interface for custom script creation',
        'Support for various document formats and workflows',
        'Reusable script templates for different business use cases'
      ],
      technologies: ['Python', 'Google Cloud Vision API', 'OCR', 'Computer Vision', 'Frontend Development'],
      github: 'https://matrix-parser.github.io',
      icon: FileText,
      color: 'purple',
      category: 'Automation'
    },
    {
      title: 'Real-Time Braille Converter',
      description: 'An accessibility-focused application providing real-time text-to-Braille conversion through live webcam feeds, serving the visually impaired community.',
      longDescription: 'Developed a comprehensive accessibility solution integrating computer vision, OCR, and NLP technologies. Features real-time text recognition from webcam feeds with optimized processing algorithms for enhanced accuracy and usability.',
      features: [
        'Real-time text-to-Braille conversion via webcam feeds',
        'OpenCV and Tesseract OCR integration for robust processing',
        'spaCy NLP for advanced text analysis capabilities',
        'Cross-platform GUI development with tkinter',
        '40% improved usability metrics through optimization',
        'Enhanced real-time conversion accuracy',
        'Optimized image processing and machine learning techniques'
      ],
      technologies: ['Python', 'OpenCV', 'Tesseract OCR', 'spaCy NLP', 'tkinter', 'Computer Vision', 'Machine Learning'],
      github: 'https://github.com/ARMNX10/Real-time-Braille-Conversion',
      icon: Eye,
      color: 'green',
      category: 'Accessibility'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-500/20 to-cyan-500/20',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        accent: 'bg-blue-500/20',
        hover: 'hover:border-blue-500/60'
      },
      purple: {
        bg: 'from-purple-500/20 to-pink-500/20',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        accent: 'bg-purple-500/20',
        hover: 'hover:border-purple-500/60'
      },
      green: {
        bg: 'from-green-500/20 to-emerald-500/20',
        border: 'border-green-500/30',
        text: 'text-green-400',
        accent: 'bg-green-500/20',
        hover: 'hover:border-green-500/60'
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
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
              Featured Projects
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Innovative solutions showcasing expertise in AI, automation, and accessibility
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => {
              const colorClasses = getColorClasses(project.color)
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2 }}
                >
                  {/* Project Image/Icon Section */}
                  <motion.div
                    className="lg:w-1/2 relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 backdrop-blur-sm`}>
                      {/* Project Icon */}
                      <div className="text-center mb-6">
                        <div className={`inline-flex p-6 rounded-full ${colorClasses.accent} mb-4`}>
                          <project.icon className={`w-16 h-16 ${colorClasses.text}`} />
                        </div>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colorClasses.accent} ${colorClasses.text}`}>
                          {project.category}
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 opacity-20">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Github className={`w-6 h-6 ${colorClasses.text}`} />
                        </motion.div>
                      </div>

                      <div className="absolute bottom-4 left-4 opacity-20">
                        <motion.div
                          animate={{ y: [-5, 5, -5] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ExternalLink className={`w-6 h-6 ${colorClasses.text}`} />
                        </motion.div>
                      </div>

                      {/* Decorative Code Elements */}
                      <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        <div className={`absolute top-8 left-8 text-xs ${colorClasses.text} opacity-10 font-mono`}>
                          &lt;AI /&gt;
                        </div>
                        <div className={`absolute bottom-8 right-8 text-xs ${colorClasses.text} opacity-10 font-mono`}>
                          &lt;/Project&gt;
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <motion.h3
                        className="text-2xl lg:text-3xl font-bold text-white mb-3"
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-400 text-lg leading-relaxed mb-4"
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1 + index * 0.2 }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.p
                        className="text-gray-500 leading-relaxed"
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1.2 + index * 0.2 }}
                      >
                        {project.longDescription}
                      </motion.p>
                    </div>

                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.4 + index * 0.2 }}
                    >
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${colorClasses.accent}`}></div>
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 ${colorClasses.accent} rounded-full mt-2 flex-shrink-0`}></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.6 + index * 0.2 }}
                    >
                      <h4 className="text-white font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 text-sm rounded-full border ${colorClasses.border} ${colorClasses.text} bg-gray-800/50 hover:bg-gray-700/50 transition-colors`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex flex-wrap gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.8 + index * 0.2 }}
                    >
                        <div className="relative" style={{ zIndex: 10 }}>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-6 py-3 rounded-lg border ${colorClasses.border} ${colorClasses.text} hover:bg-gray-800/50 transition-all duration-300 font-medium relative`}
                          style={{ zIndex: 20, pointerEvents: 'auto' }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                          View Code
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Projects CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2 }}
          >
            <p className="text-gray-400 mb-6">
              Interested in seeing more of my work?
            </p>
            <div className="relative" style={{ zIndex: 10 }}>
              <motion.a
                href="https://github.com/ARMNX10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 mx-auto w-fit relative"
                style={{ zIndex: 20, pointerEvents: 'auto' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                View All Projects on GitHub
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}