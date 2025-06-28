'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Brain, Code2, Database, Cloud, Terminal, Cpu, 
  Globe, Wrench, Award, Languages, Server, Zap 
} from 'lucide-react'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'blue',
      skills: [
        { name: 'LangChain', level: 95 },
        { name: 'LangGraph', level: 90 },
        { name: 'OpenAI APIs', level: 88 },
        { name: 'Groq', level: 85 },
        { name: 'Token Streaming', level: 92 },
        { name: 'TensorFlow', level: 80 },
        { name: 'PyTorch', level: 78 },
        { name: 'Scikit-learn', level: 85 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'purple',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 82 },
        { name: 'JavaScript/TypeScript', level: 88 },
        { name: 'SQL', level: 85 },
        { name: 'Shell Scripting', level: 80 }
      ]
    },
    {
      title: 'Frameworks & Tools',
      icon: Wrench,
      color: 'green',
      skills: [
        { name: 'Next.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 88 },
        { name: 'Selenium', level: 82 },
        { name: 'Docker', level: 75 },
        { name: 'Linux Shell', level: 85 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'cyan',
      skills: [
        { name: 'Google Cloud Platform', level: 80 },
        { name: 'Microsoft Azure', level: 78 },
        { name: 'Virtualization', level: 82 },
        { name: 'Hyper-V', level: 75 },
        { name: 'PowerShell', level: 80 }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'orange',
      skills: [
        { name: 'Data Structures & Algorithms', level: 90 },
        { name: 'Computer Vision', level: 85 },
        { name: 'OCR Systems', level: 88 },
        { name: 'Data Processing', level: 92 },
        { name: 'Automation Workflows', level: 90 }
      ]
    },
    {
      title: 'Systems & Networking',
      icon: Server,
      color: 'red',
      skills: [
        { name: 'Operating Systems', level: 85 },
        { name: 'Networking', level: 80 },
        { name: 'System Architecture', level: 82 },
        { name: 'Performance Optimization', level: 85 }
      ]
    }
  ]

  const certifications = [
    {
      name: 'Microsoft Azure AI-900',
      issuer: 'Microsoft',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/AaravMaan-2695/453B20EC1A4235DF?sharingId=F88D6CD38929C2F5',
      icon: Award,
      color: 'blue'
    },
    {
      name: 'Amazon ML Summer School',
      issuer: 'Amazon',
      link: 'https://drive.google.com/file/d/1GMhm_jrYwOrnh-VJ-1UBsh5jm1K-hmDL/view?usp=sharing',
      icon: Brain,
      color: 'orange'
    }
  ]

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Hindi', level: 'Native' },
    { name: 'Deutsch', level: 'A1' }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30', gradient: 'from-blue-500 to-blue-600' },
      purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30', gradient: 'from-purple-500 to-purple-600' },
      green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30', gradient: 'from-green-500 to-green-600' },
      cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30', gradient: 'from-cyan-500 to-cyan-600' },
      orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30', gradient: 'from-orange-500 to-orange-600' },
      red: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30', gradient: 'from-red-500 to-red-600' }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
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
              Skills & Expertise
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Technical proficiencies across AI, development, and cloud technologies
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color)
              
              return (
                <motion.div
                  key={index}
                  className={`p-6 rounded-lg border backdrop-blur-sm ${colorClasses.bg} ${colorClasses.border} hover:border-opacity-60 transition-all duration-300`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${colorClasses.bg}`}>
                      <category.icon className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className={`text-sm ${colorClasses.text} font-mono`}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${colorClasses.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ delay: 1 + index * 0.1 + skillIndex * 0.05, duration: 0.8 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div
              className="p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/30"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => {
                  const colorClasses = getColorClasses(cert.color)
                  
                  return (
                    <motion.a
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-lg border ${colorClasses.border} ${colorClasses.bg} hover:border-opacity-60 transition-all duration-300 group`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.6 + index * 0.1 }}
                    >
                      <div className={`p-2 ${colorClasses.bg} rounded-lg group-hover:scale-110 transition-transform`}>
                        <cert.icon className={`w-5 h-5 ${colorClasses.text}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{cert.name}</h4>
                        <p className={`text-sm ${colorClasses.text}`}>{cert.issuer}</p>
                      </div>
                      <div className={`opacity-0 group-hover:opacity-100 transition-opacity ${colorClasses.text}`}>
                        <Zap className="w-4 h-4" />
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              className="p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/30"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Languages className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>
              
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-gray-300 font-medium">{lang.name}</span>
                    <span className="text-green-400 text-sm font-mono bg-green-500/20 px-2 py-1 rounded">
                      {lang.level}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Extra Curricular Highlight */}
              <motion.div
                className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.8 }}
              >
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  Leadership & Community
                </h4>
                <p className="text-gray-400 text-sm">
                  Management Head at Innovator's Quest Club, organizing events and developing 
                  community engagement tools for 100+ members.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}