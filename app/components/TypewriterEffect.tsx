'use client'

import { useState, useEffect } from 'react'

interface TypewriterEffectProps {
  words: string[]
  speed?: number
  deleteSpeed?: number
  delayBetweenWords?: number
}

export default function TypewriterEffect({ 
  words, 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetweenWords = 2000 
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        // Word complete, wait then start deleting
        setIsTyping(false)
        setTimeout(() => {
          setIsDeleting(true)
          setIsTyping(true)
        }, delayBetweenWords)
      } else if (isDeleting && currentText === '') {
        // Deletion complete, move to next word
        setIsDeleting(false)
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
      } else if (!isDeleting) {
        // Typing
        setCurrentText(currentWord.substring(0, currentText.length + 1))
      } else {
        // Deleting
        setCurrentText(currentWord.substring(0, currentText.length - 1))
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, words, speed, deleteSpeed, delayBetweenWords])

  return (
    <span className="font-mono">
      {currentText}
      <span className={`inline-block w-0.5 h-8 bg-current ml-1 ${isTyping ? 'animate-pulse' : ''}`}>
        |
      </span>
    </span>
  )
}