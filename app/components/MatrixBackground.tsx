'use client'

import { useEffect, useRef, useState } from 'react'

interface Dot {
  x: number
  y: number
  size: number
  color: string
  velocity: number
}

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const dotsRef = useRef<Dot[]>([])
  const animationFrameRef = useRef<number>(0)

  // Handle mouse movement with debounce for better performance
  const handleMouseMove = (e: MouseEvent) => {
    // Using requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initDots()
    }

    // Initialize dots
    const initDots = () => {
      const dots: Dot[] = []
      const numDots = Math.floor((window.innerWidth * window.innerHeight) / 8000) // Increased density
      
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          color: '#8B5CF6', // Default color
          velocity: Math.random() * 0.5 + 0.2 // Slightly faster
        })
      }
      
      dotsRef.current = dots
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw and update dots
      dotsRef.current.forEach((dot, index) => {
        // Calculate distance from mouse
        const dx = dot.x - mousePosition.x
        const dy = dot.y - mousePosition.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Highlight dots near mouse with larger radius
        const highlightRadius = 200
        const isHighlighted = distance < highlightRadius
        
        // Update dot color based on distance from mouse with more vibrant colors
        if (isHighlighted) {
          const intensity = 1 - (distance / highlightRadius)
          // Use our primary color with higher intensity
          dot.color = `rgba(139, 92, 246, ${0.6 + intensity * 0.4})`
          dot.size = 1 + intensity * 4 // Larger size increase
          
          // Add slight movement toward mouse for interactive effect
          if (distance > 30) { // Don't move dots too close to mouse
            dot.x += (dx * intensity * -0.02)
            dot.y += (dy * intensity * -0.02)
          }
        } else {
          dot.color = 'rgba(139, 92, 246, 0.4)'
          dot.size = dot.size > 1 ? Math.max(1, dot.size - 0.15) : 1 // Faster size reduction
        }
        
        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.fill()
        
        // Draw connections between nearby dots
        if (isHighlighted) {
          dotsRef.current.forEach((otherDot, otherIndex) => {
            if (index !== otherIndex) {
              const dx2 = dot.x - otherDot.x
              const dy2 = dot.y - otherDot.y
              const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
              
              if (distance2 < 100) { // Increased connection distance
                ctx.beginPath()
                ctx.moveTo(dot.x, dot.y)
                ctx.lineTo(otherDot.x, otherDot.y)
                const lineOpacity = 0.3 * (1 - distance2 / 100)
                ctx.strokeStyle = `rgba(139, 92, 246, ${lineOpacity})`
                ctx.lineWidth = 0.5 + (isHighlighted ? 0.5 : 0) // Thicker lines near mouse
                ctx.stroke()
              }
            }
          })
        }
        
        // Update position
        dot.y += dot.velocity
        
        // Reset position if dot goes off screen
        if (dot.y > canvas.height) {
          dot.y = 0
          dot.x = Math.random() * canvas.width
        }
      })
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Set up event listeners
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    
    // Initialize
    resizeCanvas()
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [mousePosition])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  )
}
