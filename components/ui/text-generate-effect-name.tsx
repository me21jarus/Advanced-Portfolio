"use client"
import { useEffect, useState } from "react"
import { useAnimate } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffectName = ({
  staticText = "Hi I'm ",
  animatedText = "Suraj E M",
  className,
  letterDuration = 0.2,
  waitDuration = 7000,
}: {
  staticText?: string
  animatedText: string
  className?: string
  letterDuration?: number
  waitDuration?: number
}) => {
  const [scope, animate] = useAnimate()
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1)

  // Split text into individual characters
  const letters = animatedText.split("")

  const runAnimation = async () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentLetterIndex(-1)

    // First, hide all letters
    letters.forEach((_, index) => {
      const element = document.querySelector(`.letter-${index}`)
      if (element) {
        ;(element as HTMLElement).style.opacity = "0"
        ;(element as HTMLElement).style.transform = "translateY(20px) scale(0.8)"
        ;(element as HTMLElement).style.filter = "blur(10px)"
      }
    })

    // Animate letters one by one
    for (let i = 0; i < letters.length; i++) {
      setCurrentLetterIndex(i)

      const element = document.querySelector(`.letter-${i}`)
      if (element) {
        ;(element as HTMLElement).style.transition = `all ${letterDuration}s ease-out`
        ;(element as HTMLElement).style.opacity = "1"
        ;(element as HTMLElement).style.transform = "translateY(0px) scale(1)"
        ;(element as HTMLElement).style.filter = "blur(0px)"
      }

      // Wait before showing next letter
      await new Promise((resolve) => setTimeout(resolve, letterDuration * 1000))
    }

    // Wait for specified duration with all letters visible
    await new Promise((resolve) => setTimeout(resolve, waitDuration))

    setIsAnimating(false)
  }

  useEffect(() => {
    // Start first animation after component mounts
    const timer = setTimeout(() => {
      runAnimation()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isAnimating && currentLetterIndex >= letters.length - 1) {
      // Restart animation after a brief pause
      const timer = setTimeout(() => {
        runAnimation()
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isAnimating, currentLetterIndex])

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black leading-snug tracking-wide" ref={scope}>
          {/* Static text */}
          <span className="inline-block mr-3">{staticText}</span>

          {/* Animated letters */}
          <span className="inline-block">
            {letters.map((letter, index) => (
              <span
                key={`letter-${index}`}
                className={`letter-${index} inline-block`}
                style={{
                  opacity: 0,
                  transform: "translateY(20px) scale(0.8)",
                  filter: "blur(10px)",
                  minWidth: letter === " " ? "0.5rem" : "auto",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}
