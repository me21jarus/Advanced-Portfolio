"use client"
import { useEffect, useState } from "react"
import { motion, stagger, useAnimate } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffectLoop = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  loopDelay = 3000,
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
  loopDelay?: number
}) => {
  const [scope, animate] = useAnimate()
  const [isAnimating, setIsAnimating] = useState(false)
  const wordsArray = words.split(" ")

  const runAnimation = async () => {
    if (isAnimating) return
    setIsAnimating(true)

    // Reset all spans to invisible
    await animate(
      "span",
      {
        opacity: 0,
        filter: filter ? "blur(10px)" : "none",
      },
      { duration: 0 },
    )

    // Animate them in
    await animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
      },
    )

    setIsAnimating(false)
  }

  useEffect(() => {
    runAnimation()

    const interval = setInterval(() => {
      runAnimation()
    }, loopDelay)

    return () => clearInterval(interval)
  }, [])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  )
}
