'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashCursor from './components/SplashCursor'

export default function Home() {

  return (
    <main className="min-h-screen bg-[#060010] text-white">
      <SplashCursor />
      <Navbar />
      <div className="container mx-auto px-4">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}