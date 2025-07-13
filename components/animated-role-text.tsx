"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const roles = [
  { text: "Software Developer", color: "from-blue-500 to-cyan-500" },
  { text: "AI Agent Automator", color: "from-purple-500 to-pink-500" },
  { text: "AI & ML Expert", color: "from-green-500 to-emerald-500" },
]

export function AnimatedRoleText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-10 flex items-center justify-center lg:justify-start">
      <div className="text-lg lg:text-xl font-semibold">
        <span className="text-slate-600 dark:text-slate-300">I'm a </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.8,
              rotateX: -90,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.8,
              rotateX: 90,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className={`bg-gradient-to-r ${roles[currentIndex].color} bg-clip-text text-transparent inline-block`}
            style={{
              textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
          >
            {roles[currentIndex].text}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
