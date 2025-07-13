"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certification", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export function NavbarMenu() {
  const [isVisible, setIsVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  // Handle scroll behavior
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isAnimating) return // Don't hide during click animation

    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setIsVisible(false)
      setIsMobileMenuOpen(false) // Close mobile menu on scroll
    } else {
      setIsVisible(true)
    }
  })

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setIsAnimating(true)
    setIsMobileMenuOpen(false) // Close mobile menu on click

    // Animate navbar going up
    setIsVisible(false)

    setTimeout(() => {
      // Scroll to section
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })

      setTimeout(() => {
        // Bring navbar back down
        setIsVisible(true)
        setIsAnimating(false)
      }, 800)
    }, 400)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: isVisible ? 0 : -85, // Show 3px when hidden (navbar height ~88px, so -85px)
            opacity: isVisible ? 1 : 0.1, // More visible when hidden
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 px-4"
        >
          <motion.div
            className={cn(
              "relative rounded-full border border-transparent bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg",
              "dark:border-white/[0.2] border-black/[0.1]",
            )}
            style={{
              boxShadow: "0 0 0 1px rgba(0,0,0,0.05), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
            }}
          >
            <div className="flex items-center justify-between px-6 py-3">
              {/* Mobile Hamburger Menu Button - Left Side */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative p-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Animated border ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-blue-500/30"
                    animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>

              {/* Logo/Brand - Mobile Center */}
              <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
                <motion.div
                  className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Suraj's Portfolio
                </motion.div>
              </div>

              {/* Desktop Navigation Items */}
              <div className="hidden md:flex items-center justify-center space-x-1 flex-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1)
                  const isHovered = hoveredItem === item.name

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                        "hover:text-white dark:hover:text-white",
                        isActive ? "text-white dark:text-white" : "text-black/70 dark:text-white/70",
                      )}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {/* Active background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeBackground"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}

                      {/* Hover background */}
                      {isHovered && !isActive && (
                        <motion.div
                          layoutId="hoverBackground"
                          className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        />
                      )}

                      {/* Text */}
                      <span className="relative z-10">{item.name}</span>

                      {/* Hover glow effect */}
                      {isHovered && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-md"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1.2, opacity: 0.3 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.a>
                  )
                })}
              </div>

              {/* Empty space for mobile to balance the hamburger menu */}
              <div className="md:hidden w-10 h-10"></div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel - Fixed positioning to avoid overlap */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-24 left-4 right-4 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl border border-black/[0.1] dark:border-white/[0.2] shadow-2xl z-50 md:hidden overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-black/[0.1] dark:border-white/[0.1]">
              <div className="flex items-center justify-between">
                <motion.div
                  className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  Navigation
                </motion.div>
                <motion.div
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="p-4">
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1)

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "relative flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer group overflow-hidden",
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                          : "text-black/70 dark:text-white/70 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:text-blue-600 dark:hover:text-blue-400",
                      )}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Background glow for active item */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-xl blur-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}

                      <span className="relative z-10 flex items-center gap-3">
                        <motion.div
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            isActive 
                              ? "bg-white shadow-md" 
                              : "bg-blue-500/50 group-hover:bg-blue-500"
                          )}
                          animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        {item.name}
                      </span>

                      {/* Arrow indicator */}
                      <motion.div
                        className={cn(
                          "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                          isActive ? "opacity-100" : ""
                        )}
                        animate={isActive ? { x: [0, 4, 0] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-black/[0.1] dark:border-white/[0.1] bg-gradient-to-r from-blue-500/5 to-purple-500/5">
              <motion.div
                className="text-xs text-center text-black/50 dark:text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Tap outside to close
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}