"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed top-4 right-8 z-50">
        <div className="p-3 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/[0.1] dark:border-white/[0.2] shadow-lg">
          <div className="h-5 w-5" />
        </div>
      </div>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="fixed top-4 right-8 z-50"
    >
      <motion.button
        onClick={toggleTheme}
        className={cn(
          "relative p-3 rounded-full",
          "bg-white/80 dark:bg-black/80 backdrop-blur-md",
          "border border-black/[0.1] dark:border-white/[0.2]",
          "shadow-lg hover:shadow-xl",
          "transition-all duration-300",
        )}
        style={{
          boxShadow: "0 0 0 1px rgba(0,0,0,0.05), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          key={resolvedTheme} // Force re-render on theme change
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {resolvedTheme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-blue-600" />
          )}
        </motion.div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 blur-md"
          whileHover={{ opacity: 0.2, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />

        {/* Pulse effect to indicate it's always available */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-400/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.button>
    </motion.div>
  )
}
