'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink, Award, Briefcase } from 'lucide-react'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'AI Engineer Intern',
      company: 'DecisionTree Analytics',
      location: 'Remote',
      duration: 'February 2025 - Present',
      type: 'Current Role',
      description: 'Developing and optimizing AI agents using LangChain, LangGraph, OpenAI, Groq, and Llama models to automate data processing, analysis, and visualization.',
      achievements: [
        'Built multi-node systems and taskforce-style automation for seamless operations',
        'Implemented token streaming in AI systems for real-time, low-latency responses',
        'Developed customer data deduplication system using ensemble methods across multiple LLM models',
        'Upgraded to larger text-embedding models with hierarchical validation to reduce false positives',
        'Research and implement new AI techniques for enhanced data-driven decision-making'
      ],
      technologies: ['LangChain', 'LangGraph', 'OpenAI', 'Groq', 'Llama', 'Pandas', 'Python'],
      color: 'blue'
    },
    {
      title: 'Machine Learning Apprentice',
      company: 'Amazon ML Summer School \'24',
      location: 'Online',
      duration: 'July 2024',
      type: 'Certification',
      description: 'Selected among 3,000 students out of 20,000+ applications for intensive Machine Learning course covering advanced AI concepts.',
      achievements: [
        'Completed comprehensive curriculum in Supervised Learning and Deep Neural Networks',
        'Explored real-world applications of CNNs and DNNs in Amazon\'s products',
        'Implemented key ML concepts in real-time scenarios',
        'Gained expertise in Generative AI and Large Language Models',
        'Applied advanced ML techniques to solve complex business problems'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'CNNs', 'DNNs', 'Generative AI', 'LLMs'],
      color: 'purple',
      link: 'https://drive.google.com/file/d/1GMhm_jrYwOrnh-VJ-1UBsh5jm1K-hmDL/view?usp=sharing'
    },
    {
      title: 'Software Intern',
      company: 'Colt Technology Services',
      location: 'Gurugram, Haryana',
      duration: 'August 2023 - December 2023',
      type: 'Internship',
      description: 'Contributed to testing and debugging across multiple development cycles, focusing on software quality enhancement and user experience improvement.',
      achievements: [
        'Worked on 4 ongoing projects during the internship period',
        'Identified and documented 20+ UI and functional bugs',
        'Collaborated with development teams to resolve critical issues',
        'Coordinated with developers and product managers to align features with user needs',
        'Contributed to decreased error rates in production software and improved UAT processes'
      ],
      technologies: ['Testing', 'Debugging', 'UAT', 'Quality Assurance', 'Project Management'],
      color: 'green',
      link: 'https://drive.google.com/file/d/1uL8ju-O2v9Ft2pHialScnbSdv-hNHAM3/view?usp=sharing'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        accent: 'bg-blue-500/20'
      },
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        accent: 'bg-purple-500/20'
      },
      green: {
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        text: 'text-green-400',
        accent: 'bg-green-500/20'
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="experience" className="py-20 bg-gray-900">
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
              Work Experience
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              My professional journey in AI, Machine Learning, and Software Development
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const colorClasses = getColorClasses(exp.color)
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-8`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.2 }}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${colorClasses.accent} rounded-full border-4 border-gray-900 z-10`}></div>

                    {/* Content Card */}
                    <motion.div
                      className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                        isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`p-6 rounded-lg border backdrop-blur-sm ${colorClasses.bg} ${colorClasses.border} hover:border-opacity-60 transition-all duration-300`}>
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Briefcase className={`w-5 h-5 ${colorClasses.text}`} />
                              <span className={`text-sm font-medium px-2 py-1 rounded ${colorClasses.accent} ${colorClasses.text}`}>
                                {exp.type}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                            <h4 className={`text-lg font-semibold ${colorClasses.text} mb-2`}>{exp.company}</h4>
                          </div>
                          {exp.link && (
                            <motion.div 
                              className="relative group"
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                              <motion.div 
                                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur"
                                animate={{
                                  opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                }}
                              />
                              <motion.a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative p-2 rounded-lg ${colorClasses.accent} ${colorClasses.text} flex items-center justify-center`}
                                whileHover={{ rotate: 15 }}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </motion.a>
                            </motion.div>
                          )}
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                            <Award className={`w-4 h-4 ${colorClasses.text}`} />
                            Key Achievements
                          </h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                <span className={`w-1.5 h-1.5 ${colorClasses.accent} rounded-full mt-2 flex-shrink-0`}></span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className="text-white font-semibold mb-2">Technologies Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className={`px-2 py-1 text-xs rounded-full border ${colorClasses.border} ${colorClasses.text} bg-gray-800/50`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}